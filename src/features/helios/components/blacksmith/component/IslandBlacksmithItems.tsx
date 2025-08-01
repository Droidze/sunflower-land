import React, { useContext, useState } from "react";
import { useActor, useSelector } from "@xstate/react";

import { Box } from "components/ui/Box";

import { Context } from "features/game/GameProvider";
import { getKeys } from "features/game/types/craftables";
import { ITEM_DETAILS } from "features/game/types/images";

import { Button } from "components/ui/Button";
import {
  HELIOS_BLACKSMITH_ITEMS,
  HeliosBlacksmithItem,
} from "features/game/types/collectibles";
import { SplitScreenView } from "components/ui/SplitScreenView";
import { CraftingRequirements } from "components/ui/layouts/CraftingRequirements";
import { SUNNYSIDE } from "assets/sunnyside";
import { PIXEL_SCALE } from "features/game/lib/constants";
import { gameAnalytics } from "lib/gameAnalytics";
import { getSeasonalTicket } from "features/game/types/seasons";
import Decimal from "decimal.js-light";
import { useAppTranslation } from "lib/i18n/useAppTranslations";
import { COLLECTIBLE_BUFF_LABELS } from "features/game/types/collectibleItemBuffs";
import {
  LOVE_CHARM_MONUMENTS,
  MonumentName,
  WORKBENCH_MONUMENTS,
} from "features/game/types/monuments";
import { GameState } from "features/game/types/game";
import { Label } from "components/ui/Label";
import { secondsToString } from "lib/utils/time";
import { hasFeatureAccess } from "lib/flags";

const VALID_EQUIPMENT: HeliosBlacksmithItem[] = [
  "Basic Scarecrow",
  "Scary Mike",
  "Laurie the Chuckle Crow",
  "Immortal Pear",
  "Bale",
  "Stone Beetle",
  "Iron Beetle",
  "Gold Beetle",
  "Fairy Circle",
  "Macaw",
  "Squirrel",
  "Butterfly",
  "Basic Cooking Pot",
  "Expert Cooking Pot",
  "Advanced Cooking Pot",
  "Big Orange",
  "Big Apple",
  "Big Banana",
  "Farmer's Monument",
  "Woodcutter's Monument",
  "Miner's Monument",
];

const DecorationLabel = ({
  gameState,
  selectedName,
}: {
  gameState: GameState;
  selectedName: HeliosBlacksmithItem;
}) => {
  const { t } = useAppTranslation();

  const monumentCreatedAt =
    gameState.monuments?.[selectedName as MonumentName]?.createdAt ?? 0;

  const isMonument = selectedName in WORKBENCH_MONUMENTS;
  const isLoveCharmMonument = selectedName in LOVE_CHARM_MONUMENTS;
  const now = new Date();
  const tomorrow = new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate() + 1,
      0,
      0,
      0,
      0,
    ),
  );

  const hasBuiltLoveCharmMonument = () => {
    return (
      isLoveCharmMonument &&
      !!gameState.monuments?.[selectedName as MonumentName]
    );
  };

  const isCoolingDown = () => {
    return (
      !isLoveCharmMonument &&
      Math.floor(monumentCreatedAt / (1000 * 60 * 60 * 24)) >=
        Math.floor(Date.now() / (1000 * 60 * 60 * 24))
    );
  };

  if (hasBuiltLoveCharmMonument()) {
    return (
      <div className="flex justify-center">
        <Label type="success" icon={SUNNYSIDE.icons.confirm}>
          {t("already.built")}
        </Label>
      </div>
    );
  }

  if (isCoolingDown()) {
    return (
      <div className="flex justify-center">
        <Label type="danger" className="font-secondary">
          {`${t("megastore.limit", {
            time: secondsToString((tomorrow.getTime() - Date.now()) / 1000, {
              length: "short",
            }),
          })}`}
        </Label>
      </div>
    );
  }

  if (isLoveCharmMonument) {
    return (
      <div className="flex justify-center">
        <Label type="default">
          {t("season.megastore.crafting.limit", {
            limit: 0,
          })}
        </Label>
      </div>
    );
  }

  if (isMonument) {
    return (
      <div className="flex justify-center">
        <Label type="default">{t("megastore.limit", { time: "1day" })}</Label>
      </div>
    );
  }

  return null;
};

export const IslandBlacksmithItems: React.FC = () => {
  const { t } = useAppTranslation();
  const [selectedName, setSelectedName] =
    useState<HeliosBlacksmithItem>("Basic Scarecrow");
  const { gameService, shortcutItem } = useContext(Context);
  const [
    {
      context: { state },
    },
  ] = useActor(gameService);
  const monumentCreatedAt = useSelector(
    gameService,
    (state) =>
      state.context.state.monuments?.[selectedName as MonumentName]
        ?.createdAt ?? 0,
  );

  const { inventory, coins } = state;

  const selectedItem = HELIOS_BLACKSMITH_ITEMS(state)[selectedName];
  const isAlreadyCrafted = inventory[selectedName]?.greaterThanOrEqualTo(1);

  const lessIngredients = () =>
    getKeys(selectedItem?.ingredients ?? {}).some((name) =>
      (selectedItem?.ingredients ?? {})[name]?.greaterThan(
        inventory[name] || 0,
      ),
    );

  const lessCoins = () => coins < (selectedItem?.coins ?? 0);

  const craft = () => {
    if (selectedName in WORKBENCH_MONUMENTS) {
      gameService.send("LANDSCAPE", {
        placeable: selectedName,
        action: "monument.bought",
        requirements: {
          coins: selectedItem?.coins ?? 0,
          ingredients: selectedItem?.ingredients ?? {},
        },
        multiple: false,
      });
    } else {
      gameService.send("LANDSCAPE", {
        placeable: selectedName,
        action: "collectible.crafted",
        // Not used yet
        requirements: {
          sfl: new Decimal(0),
          ingredients: {},
        },
      });
    }

    const count = state.inventory[selectedName]?.toNumber() ?? 1;
    gameAnalytics.trackMilestone({
      event: `Crafting:Collectible:${selectedName}${count}`,
    });

    if ((selectedItem?.ingredients ?? {})[getSeasonalTicket()]) {
      gameAnalytics.trackSink({
        currency: "Seasonal Ticket",
        amount:
          (selectedItem?.ingredients ?? {})[getSeasonalTicket()]?.toNumber() ??
          1,
        item: selectedName,
        type: "Collectible",
      });
    }

    shortcutItem(selectedName);
  };

  const isLoveCharmMonument = selectedName in LOVE_CHARM_MONUMENTS;

  const hasBuiltLoveCharmMonument = () => {
    return (
      isLoveCharmMonument &&
      !!gameService.state.context.state.monuments?.[
        selectedName as MonumentName
      ]
    );
  };

  const isCoolingDown = () => {
    return (
      !isLoveCharmMonument &&
      Math.floor(monumentCreatedAt / (1000 * 60 * 60 * 24)) >=
        Math.floor(Date.now() / (1000 * 60 * 60 * 24))
    );
  };

  return (
    <SplitScreenView
      panel={
        <CraftingRequirements
          gameState={state}
          details={{
            item: selectedName,
            from: selectedItem?.from,
            to: selectedItem?.to,
          }}
          boost={COLLECTIBLE_BUFF_LABELS(state)[selectedName]}
          requirements={{
            resources: selectedItem?.ingredients ?? {},
            coins: selectedItem?.coins ?? 0,
          }}
          actionView={
            isAlreadyCrafted ? (
              <p className="text-xxs text-center mb-1 font-secondary">
                {t("alr.crafted")}
              </p>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="flex justify-left sm:justify-center ml-1">
                  <DecorationLabel
                    gameState={state}
                    selectedName={selectedName}
                  />
                </div>
                <div>
                  <Button
                    disabled={
                      lessIngredients() ||
                      lessCoins() ||
                      hasBuiltLoveCharmMonument() ||
                      isCoolingDown()
                    }
                    onClick={craft}
                  >
                    {t("craft")}
                  </Button>
                </div>
              </div>
            )
          }
        />
      }
      content={
        <div className="flex flex-col">
          <div className="flex flex-wrap">
            {VALID_EQUIPMENT.filter(
              (equipment) =>
                !(equipment in WORKBENCH_MONUMENTS) ||
                hasFeatureAccess(state, "MONUMENTS"),
            ).map((name: HeliosBlacksmithItem) => {
              return (
                <Box
                  isSelected={selectedName === name}
                  key={name}
                  onClick={() => setSelectedName(name)}
                  image={ITEM_DETAILS[name].image}
                  count={inventory[name]}
                  overlayIcon={
                    <img
                      src={SUNNYSIDE.icons.stopwatch}
                      id="confirm"
                      alt="confirm"
                      className="object-contain absolute"
                      style={{
                        width: `${PIXEL_SCALE * 8}px`,
                        top: `${PIXEL_SCALE * -4}px`,
                        right: `${PIXEL_SCALE * -4}px`,
                      }}
                    />
                  }
                />
              );
            })}
          </div>
        </div>
      }
    />
  );
};
