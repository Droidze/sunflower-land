import React from "react";

import image from "assets/decorations/eggplant_grill.png";
import { PIXEL_SCALE } from "features/game/lib/constants";
import { SFTDetailPopover } from "components/ui/SFTDetailPopover";

export const EggplantGrill: React.FC = () => {
  return (
    <SFTDetailPopover name="Eggplant Grill">
      <>
        <img
          src={image}
          style={{
            width: `${PIXEL_SCALE * 16}px`,
            bottom: `${PIXEL_SCALE * 0}px`,
            left: `${PIXEL_SCALE * 0}px`,
          }}
          className="absolute"
          alt="Eggplant Grill"
        />
      </>
    </SFTDetailPopover>
  );
};
