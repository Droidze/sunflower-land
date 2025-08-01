/* eslint-disable @typescript-eslint/no-explicit-any */
import { Decimal } from "decimal.js-light";

import {
  CropName,
  CropSeedName,
  GreenHouseCropName,
  GreenHouseCropSeedName,
} from "./crops";

import { CollectibleName, CraftableName, Food } from "./craftables";
import { CommodityName, MushroomName, ResourceName } from "./resources";
import { LegacyBadgeName } from "./skills";
import { BuildingName } from "./buildings";
import { GameEvent } from "../events";
import { BumpkinItem, Equipped as BumpkinParts } from "./bumpkin";
import { ConsumableName, CookableName } from "./consumables";
import { BumpkinSkillName, BumpkinRevampSkillName } from "./bumpkinSkills";
import { AchievementName } from "./achievements";
import { BumpkinActivityName } from "./bumpkinActivity";
import { DecorationName } from "./decorations";
import { BeanName, ExoticCropName, MutantCropName } from "./beans";
import {
  FullMoonFruit,
  GreenHouseFruitName,
  GreenHouseFruitSeedName,
  PatchFruitName,
  PatchFruitSeedName,
} from "./fruits";
import { BeachBountyTreasure, TreasureName } from "./treasure";
import {
  GoblinBlacksmithItemName,
  GoblinPirateItemName,
  HeliosBlacksmithItem,
  MegaStoreCollectibleName,
  PotionHouseItemName,
  PurchasableItems,
  SoldOutCollectibleName,
  TreasureCollectibleItem,
} from "./collectibles";
import { TreasureToolName, WorkbenchToolName } from "./tools";
import { ConversationName } from "./announcements";
import { NPCName } from "lib/npcs";
import { SeasonalBanner, SeasonalTicket, SeasonName } from "./seasons";
import { Bud } from "./buds";
import {
  CompostName,
  CropCompostName,
  FruitCompostName,
  Worm,
} from "./composters";
import { FarmActivityName } from "./farmActivity";
import { MilestoneName } from "./milestones";
import {
  FishName,
  FishingBait,
  MarineMarvelName,
  OldFishName,
} from "./fishing";
import { MinigameName } from "./minigames";
import {
  FlowerCrossBreedName,
  FlowerName,
  FlowerSeedName,
  MutantFlowerName,
} from "./flowers";
import { translate } from "lib/i18n/translate";
import { SpecialEvents } from "./specialEvents";
import { TradeableName } from "../actions/sellMarketResource";
import { MinigameCurrency } from "../events/minigames/purchaseMinigameItem";
import { FactionShopCollectibleName, FactionShopFoodName } from "./factionShop";
import { DiggingFormationName } from "./desert";
import { ExperimentName } from "lib/flags";
import {
  BudNFTName,
  CollectionName,
  MarketplaceTradeableName,
} from "./marketplace";
import { GameTransaction } from "./transactions";
import { CompetitionName, CompetitionProgress } from "./competitions";
import { AnimalType } from "./animals";
import { ChoreBoard } from "./choreBoard";
import {
  DollName,
  RecipeCollectibleName,
  RecipeItemName,
  Recipes,
  RecipeWearableName,
} from "../lib/crafting";
import { SeasonalCollectibleName, SeasonalTierItemName } from "./megastore";
import { TradeFood } from "../events/landExpansion/redeemTradeReward";
import {
  CalendarEvent,
  CalendarEventName,
  SeasonalEventName,
} from "./calendar";
import { VipBundle } from "../lib/vipAccess";
import { InGameTaskName } from "../events/landExpansion/completeSocialTask";
import { TwitterPost, TwitterPostName } from "./social";
import { NetworkName } from "../events/landExpansion/updateNetwork";
import { RewardBoxes, RewardBoxName } from "./rewardBoxes";
import { FloatingIslandShop, FloatingShopItemName } from "./floatingIsland";
import { Blessing } from "../lib/blessings";
import { LandBiomeName } from "features/island/biomes/biomes";
import { MonumentName } from "./monuments";
import { AOEItemName } from "../expansion/placeable/lib/collisionDetection";
import { Coordinates } from "../expansion/components/MapPlacement";
import { ClutterName } from "./clutter";

export type Reward = {
  coins?: number;
  sfl?: Decimal;
  items?: {
    name: InventoryItemName;
    amount: number;
  }[];
};

export type FertiliserName = "Rapid Growth";

export const FERTILISERS: Record<FertiliserName, { description: string }> = {
  "Rapid Growth": {
    description: translate("description.rapid.growth"),
  },
};

export type CropFertiliser = {
  name: CropCompostName;
  fertilisedAt: number;
};

export type FruitFertiliser = {
  name: FruitCompostName;
  fertilisedAt: number;
};

export type FieldItem = {
  name: CropName;
  // Epoch time in milliseconds
  plantedAt: number;
  multiplier?: number;
  reward?: Omit<Reward, "sfl">;
  fertiliser?: CropFertiliser;
};

export type ChickenPosition = {
  top: number;
  right: number;
};

export type EasterEgg =
  | "Red Egg"
  | "Orange Egg"
  | "Green Egg"
  | "Blue Egg"
  | "Pink Egg"
  | "Purple Egg"
  | "Yellow Egg";

export const EASTER_EGG: Record<EasterEgg, { description: string }> = {
  "Red Egg": {
    description: translate("description.red.egg"),
  },
  "Orange Egg": {
    description: translate("description.orange.egg"),
  },
  "Green Egg": {
    description: translate("description.green.egg"),
  },
  "Blue Egg": {
    description: translate("description.blue.egg"),
  },
  "Pink Egg": {
    description: translate("description.pink.egg"),
  },
  "Purple Egg": {
    description: translate("description.purple.egg"),
  },
  "Yellow Egg": {
    description: translate("description.yellow.egg"),
  },
};

export const EASTER_EGGS: EasterEgg[] = [
  "Blue Egg",
  "Green Egg",
  "Orange Egg",
  "Pink Egg",
  "Purple Egg",
  "Red Egg",
  "Yellow Egg",
];

export type EasterEventItemName = "Easter Bunny" | "Pablo The Bunny";

export type MOMEventItem = "Engine Core";

export type FactionEmblem =
  | "Goblin Emblem"
  | "Bumpkin Emblem"
  | "Sunflorian Emblem"
  | "Nightshade Emblem";

export type MutantChicken =
  | "Speed Chicken"
  | "Rich Chicken"
  | "Fat Chicken"
  | "Ayam Cemani"
  | "El Pollo Veloz"
  | "Banana Chicken"
  | "Crim Peckster"
  | "Knight Chicken"
  | "Pharaoh Chicken"
  | "Alien Chicken"
  | "Summer Chicken"
  | "Love Chicken"
  | "Janitor Chicken";

export type MutantCow = "Mootant" | "Frozen Cow" | "Dr Cow" | "Baby Cow";

export type MutantSheep =
  | "Toxic Tuft"
  | "Frozen Sheep"
  | "Nurse Sheep"
  | "Baby Sheep";

export type MutantAnimal = MutantChicken | MutantCow | MutantSheep;

export const BB_TO_GEM_RATIO = 20;

export type Coupons =
  | "Gold Pass"
  | "Trading Ticket"
  | "War Bond"
  | "Jack-o-lantern"
  | "Golden Crop"
  | "Beta Pass"
  | "Red Envelope"
  | "Love Letter"
  | "Block Buck"
  | "Gem"
  | "Sunflower Supporter"
  | "Potion Ticket"
  | "Bud Ticket"
  | "Bud Seedling"
  | "Community Coin"
  | "Arcade Token"
  | "Farmhand Coupon"
  | "Farmhand"
  | "Prize Ticket"
  | "Mark"
  | "Trade Point"
  | "Love Charm"
  | "Easter Token 2025"
  | "Easter Ticket 2025"
  | "Colors Token 2025"
  | "Colors Ticket 2025"
  | "Cheer"
  | Keys
  | SeasonalTicket
  | FactionEmblem;

export type Keys = "Treasure Key" | "Rare Key" | "Luxury Key";

export const COUPONS: Record<Coupons, { description: string }> = {
  Gem: {
    description: translate("description.gem"),
  },
  "Gold Pass": {
    description: translate("description.gold.pass"),
  },
  "Trading Ticket": {
    description: translate("description.trading.ticket"),
  },
  "War Bond": {
    description: translate("description.war.bond"),
  },
  "Jack-o-lantern": {
    description: translate("description.jack.o.lantern"),
  },
  "Golden Crop": {
    description: translate("description.golden.crop"),
  },
  "Beta Pass": {
    description: translate("description.beta.pass"),
  },
  "Red Envelope": {
    description: translate("description.red.envelope"),
  },
  "Love Letter": {
    description: translate("description.love.letter"),
  },
  "Block Buck": {
    description: translate("description.block.buck"),
  },
  "Solar Flare Ticket": {
    description: translate("description.solar.flare.ticket"),
  },
  "Dawn Breaker Ticket": {
    description: translate("description.dawn.breaker.ticket"),
  },
  "Crow Feather": {
    description: translate("description.crow.feather"),
  },
  "Sunflower Supporter": {
    description: translate("description.sunflower.supporter"),
  },
  "Potion Ticket": {
    description: translate("description.potion.ticket"),
  },
  "Bud Ticket": {
    description: translate("description.bud.ticket"),
  },
  "Bud Seedling": {
    description: translate("description.bud.seedling"),
  },
  "Mermaid Scale": {
    description: translate("description.mermaid.scale"),
  },
  "Community Coin": {
    description: translate("description.community.coin"),
  },
  "Arcade Token": {
    description: translate("description.arcade.coin"),
  },
  "Farmhand Coupon": {
    description: translate("description.farmhand.coupon"),
  },
  Farmhand: {
    description: translate("description.farmhand"),
  },
  "Tulip Bulb": {
    description: translate("description.tulip.bulb"),
  },
  "Treasure Key": {
    description: translate("description.treasure.key"),
  },
  "Luxury Key": {
    description: translate("description.luxury.key"),
  },
  "Rare Key": {
    description: translate("description.rare.key"),
  },
  "Prize Ticket": {
    description: translate("description.prizeTicket"),
  },
  Scroll: {
    description: translate("description.scroll"),
  },
  "Amber Fossil": {
    description: translate("description.amberFossil"),
  },
  "Goblin Emblem": {
    description: translate("description.goblin.emblem"),
  },
  "Bumpkin Emblem": {
    description: translate("description.bumpkin.emblem"),
  },
  "Sunflorian Emblem": {
    description: translate("description.sunflorian.emblem"),
  },
  "Nightshade Emblem": {
    description: translate("description.nightshade.emblem"),
  },
  Mark: {
    description: translate("description.faction.mark"),
  },
  Horseshoe: {
    description: translate("description.horseshoe"),
  },
  "Trade Point": {
    description: translate("description.trade.points"),
  },
  Timeshard: {
    description: "",
  },
  "Love Charm": {
    description: translate("description.love.charm"),
  },
  "Easter Token 2025": {
    description: "",
  },
  "Easter Ticket 2025": {
    description: "",
  },
  Geniseed: {
    description: translate("description.geniseed"),
  },
  "Colors Token 2025": {
    description: translate("description.colorToken2025"),
  },
  "Colors Ticket 2025": {
    description: translate("description.colorTicket2025"),
  },
  Bracelet: { description: "" },
  Cheer: { description: translate("description.cheer") },
};

export type Purchase = {
  id: string;
  usd: number;
  purchasedAt: number;
  method: "MATIC" | "XSOLLA";
};

export type Points = "Human War Point" | "Goblin War Point";

export type WarBanner = "Human War Banner" | "Goblin War Banner";

export type FactionBanner =
  | "Sunflorian Faction Banner"
  | "Bumpkin Faction Banner"
  | "Goblin Faction Banner"
  | "Nightshade Faction Banner";

export type GoldenCropEventItem = "Golden Crop";

export type Skills = Partial<
  Record<BumpkinSkillName, number> & Record<BumpkinRevampSkillName, number>
>;

export type Bumpkin = {
  id: number;
  equipped: BumpkinParts;
  tokenUri: string;
  experience: number;
  skills: Skills;
  achievements?: Partial<Record<AchievementName, number>>;
  activity: Partial<Record<BumpkinActivityName, number>>;
  previousFreeSkillResetAt?: number;
  previousPowerUseAt?: Partial<Record<BumpkinRevampSkillName, number>>;
  paidSkillResets?: number;
};

export type SpecialEvent = "Chef Apron" | "Chef Hat";
export type WarItems =
  | "Sunflower Amulet"
  | "Carrot Amulet"
  | "Beetroot Amulet"
  | "Green Amulet"
  | "Warrior Helmet"
  | "Warrior Pants";

export type LoveAnimalItem = "Petting Hand" | "Brush" | "Music Box";

type Bounty = {
  id: string;
  name: InventoryItemName;
  coins?: number;
  items?: Partial<Record<InventoryItemName, number>>;
};

export type AnimalBounty = Bounty & {
  name: AnimalType;
  level: number;
};

export type FlowerBounty = Bounty & {
  name: FlowerName;
};

export type ObsidianBounty = Bounty & {
  name: "Obsidian";
  sfl?: number;
};

export type FishBounty = Bounty & {
  name: FishName;
};

export type DollBounty = Bounty & {
  name: DollName;
};

export type ExoticBounty = Bounty & {
  name:
    | ExoticCropName
    | BeachBountyTreasure
    | FullMoonFruit
    | RecipeCraftableName;
};

export type MarkBounty = Bounty & {
  name: "Mark";
  quantity: number;
};

export type BountyRequest =
  | AnimalBounty
  | FlowerBounty
  | ObsidianBounty
  | FishBounty
  | ExoticBounty
  | MarkBounty
  | DollBounty;

export type Bounties = {
  requests: BountyRequest[];
  completed: { id: string; soldAt: number }[];
  bonusClaimedAt?: number;
};

export type InventoryItemName =
  | AnimalResource
  | CropName
  | CropSeedName
  | BeanName
  | MutantCropName
  | PatchFruitName
  | PatchFruitSeedName
  | FlowerSeedName
  | GreenHouseFruitSeedName
  | GreenHouseFruitName
  | GreenHouseCropName
  | GreenHouseCropSeedName
  | CraftableName
  | CommodityName
  | ResourceName
  | LegacyBadgeName
  | EasterEgg
  | EasterEventItemName
  | Food
  | MOMEventItem
  | MutantAnimal
  | Coupons
  | Points
  | WarItems
  | SpecialEvent
  | BuildingName
  | FertiliserName
  | WarBanner
  | ConsumableName
  | DecorationName
  | GoldenCropEventItem
  | TreasureName
  | HeliosBlacksmithItem
  | SoldOutCollectibleName
  | GoblinBlacksmithItemName
  | GoblinPirateItemName
  | PurchasableItems
  | TreasureToolName
  | TreasureCollectibleItem
  | LanternName
  | ExoticCropName
  | PotionHouseItemName
  | "Basic Land"
  | FishingBait
  | CompostName
  | FishName
  | MarineMarvelName
  | OldFishName
  | FlowerName
  | MegaStoreCollectibleName
  | FactionBanner
  | WorkbenchToolName
  | FactionShopCollectibleName
  | FactionShopFoodName
  | MutantFlowerName
  | AnimalFoodName
  | AnimalMedicineName
  | LoveAnimalItem
  | BedName
  | RecipeCraftableName
  | SeasonalCollectibleName
  | TradeFood
  | SeasonalBanner
  | RewardBoxName
  | LandBiomeName
  | MonumentName
  | DollName
  | ClutterName;

export type Inventory = Partial<Record<InventoryItemName, Decimal>>;

export type Wardrobe = Partial<Record<BumpkinItem, number>>;

export type Fields = Record<number, FieldItem>;

export type Chicken = {
  fedAt?: number;
  multiplier: number;
  reward?: Reward;
  coordinates?: { x: number; y: number };
};

export type StockExpiry = Partial<Record<InventoryItemName, string>>;

type PastAction = GameEvent & {
  createdAt: Date;
};

export type WarCollectionOffer = {
  warBonds: number;
  startAt: string;
  endAt: string;
  ingredients: {
    name: InventoryItemName;
    amount: number;
  }[];
};

export type Wood = {
  choppedAt: number;
  reward?: Omit<Reward, "sfl">;
  criticalHit?: CriticalHit;
  amount?: number;
};

export type CriticalHitName =
  | InventoryItemName
  | BumpkinRevampSkillName
  | BumpkinItem
  | "Native";

export type CriticalHit = Partial<Record<CriticalHitName, number>>;

export type PlantedCrop = {
  id?: string;
  name: CropName;
  plantedAt: number;
  criticalHit?: CriticalHit;
  reward?: Omit<Reward, "sfl">;
  amount?: number;
  boostedTime?: number;
};

export type PlantedFruit = {
  name: PatchFruitName;
  plantedAt: number;
  harvestsLeft: number;
  harvestedAt: number;
  criticalHit?: CriticalHit;
  amount?: number;
};

type OptionalCoordinates = {
  x?: number;
  y?: number;
};

export type Tree = {
  wood: Wood;
  createdAt?: number;
  removedAt?: number;
} & OptionalCoordinates;

export type Stone = {
  minedAt: number;
  criticalHit?: CriticalHit;
  amount?: number;
  boostedTime?: number;
};

export type FiniteResource = {
  minesLeft: number;
} & Rock;

export type Rock = {
  stone: Stone;
  createdAt?: number;
  removedAt?: number;
} & OptionalCoordinates;

export type Oil = {
  drilledAt: number;
};

export type OilReserve = {
  oil: Oil;
  drilled: number;
  createdAt: number;
  removedAt?: number;
} & OptionalCoordinates;

export type CropPlot = {
  crop?: PlantedCrop;
  fertiliser?: CropFertiliser;
  amount?: number;
  createdAt: number;
  beeSwarm?: {
    count: number;
    swarmActivatedAt: number;
  };
  removedAt?: number;
} & OptionalCoordinates;

export type GreenhousePlant = {
  name: GreenHouseCropName | GreenHouseFruitName;
  plantedAt: number;
  criticalHit?: CriticalHit;
  amount?: number;
};

export type GreenhousePot = {
  plant?: GreenhousePlant;
};

export type FruitPatch = {
  fruit?: PlantedFruit;
  createdAt: number;
  fertiliser?: FruitFertiliser;
  removedAt?: number;
} & OptionalCoordinates;

export type BuildingProduct = {
  name: CookableName;
  readyAt: number;
  amount?: number;
  boost?: Partial<Record<InventoryItemName, number>>;
  skills?: Partial<Record<BumpkinRevampSkillName, boolean>>;
  timeRemaining?: number;
};

export type BuildingProduce = {
  items: Partial<Record<InventoryItemName, number>>;
  startedAt: number;
  readyAt: number;
};

export type Cancelled = Partial<{
  [key in InventoryItemName]: {
    cancelledAt: number;
  };
}>;

export type PlacedItem = {
  id: string;
  coordinates?: { x: number; y: number };
  readyAt: number;
  createdAt: number;
  removedAt?: number;
  cancelled?: Cancelled;
  crafting?: BuildingProduct[];
  oil?: number;
};

type ShakeItem = PlacedItem & { shakenAt?: number };
export type PlacedLamp = PlacedItem & { rubbedCount?: number };

// Support custom types for collectibles
type CustomCollectibles = {
  "Maneki Neko": ShakeItem[];
  "Festive Tree": ShakeItem[];
  "Genie Lamp": PlacedLamp[];
};

// Mapping to determine which type should be used for a placed collectible
type PlacedTypes<Name extends CollectibleName> = {
  [key in Name]: key extends keyof CustomCollectibles
    ? CustomCollectibles[key]
    : PlacedItem[];
};

export type Collectibles = Partial<PlacedTypes<CollectibleName>>;

export type CompostBuilding = PlacedItem & {
  producing?: BuildingProduce;
  requires?: Partial<Record<InventoryItemName, number>>;
  boost?: Partial<Record<InventoryItemName, number>>;
};

export type CropMachineQueueItem = {
  crop: CropName;
  seeds: number;
  growTimeRemaining: number;
  totalGrowTime: number;
  startTime?: number;
  growsUntil?: number;
  readyAt?: number;
  criticalHit?: CriticalHit;
  amount?: number;
  pausedTimeRemaining?: number;
};

export type CropMachineBuilding = PlacedItem & {
  queue?: CropMachineQueueItem[];
  unallocatedOilTime?: number;
};

type CustomBuildings = {
  "Compost Bin": CompostBuilding[];
  "Turbo Composter": CompostBuilding[];
  "Premium Composter": CompostBuilding[];
  "Crop Machine": CropMachineBuilding[];
};

type PlacedBuildings<Name extends BuildingName> = {
  [key in Name]: key extends keyof CustomBuildings
    ? CustomBuildings[key]
    : PlacedItem[];
};

export type Buildings = Partial<PlacedBuildings<BuildingName>>;

export type ExpansionConstruction = {
  createdAt: number;
  readyAt: number;
};

export interface ExpansionRequirements {
  resources: Partial<Record<InventoryItemName, number>>;
  coins?: number;
  seconds: number;
  bumpkinLevel: number;
}

export type Airdrop = {
  id: string;
  createdAt: number;
  items: Partial<Record<InventoryItemName, number>>;
  wearables: Partial<Record<BumpkinItem, number>>;
  sfl: number;
  coins: number;
  message?: string;
  coordinates?: Coordinates;
  factionPoints?: number;
  vipDays?: number;
  recipes?: RecipeItemName[];
};

// Mystery Prize reveals
export type Reveal = {
  revealedAt: number;
  id: string;
};

export type TreasureHole = {
  dugAt: number;
  discovered: InventoryItemName | null;
};

export type Bid = {
  auctionId: string;
  sfl: number;
  ingredients: Partial<Record<InventoryItemName, number>>;
  collectible?: InventoryItemName;
  wearable?: BumpkinItem;
  type: "collectible" | "wearable";
  biddedAt: number;
  tickets: number;
};
export type Minted = Partial<
  Record<SeasonName, Record<InventoryItemName | BumpkinItem, number>>
>;

export type MazeAttempts = Partial<Record<SeasonWeek, MazeMetadata>>;

export type WitchesEve = {
  weeklyLostCrowCount: number;
  maze: MazeAttempts;
};

export type FlowerShop = {
  week: number;
  weeklyFlower: FlowerName;
  tradedFlowerShop?: boolean;
};

export type FarmHand = {
  equipped: BumpkinParts;
};

export type Mushroom = {
  name: MushroomName;
  amount: number;
  x: number;
  y: number;
};

export type DugHole = {
  x: number;
  y: number;
  dugAt: number;
  items: Partial<Record<InventoryItemName, number>>;
  tool: "Sand Shovel" | "Sand Drill";
};

export type StreakReward = {
  count: number;
  collectedAt: number;
  totalClaimed: number;
};

export type Desert = {
  digging: {
    extraDigs?: number;
    patterns: DiggingFormationName[];
    completedPatterns?: DiggingFormationName[];
    grid: (DugHole | DugHole[])[];
    streak?: StreakReward;
  };
};

export type Mushrooms = {
  spawnedAt: number;
  mushrooms: Record<string, Mushroom>;
};

export type NPCDialogue = {
  id: string;
  from: "aunt" | "bumpkin" | "betty" | "bruce";
};

export type LanternName =
  | "Luminous Lantern"
  | "Radiance Lantern"
  | "Aurora Lantern"
  | "Ocean Lantern"
  | "Solar Lantern"
  | "Goblin Lantern"
  | "Betty Lantern"
  | "Bumpkin Lantern";

export type AnimalFoodName =
  | "Hay"
  | "Kernel Blend"
  | "NutriBarley"
  | "Mixed Grain"
  | "Omnifeed";

export type AnimalMedicineName = "Barn Delight";

export type BedName =
  | "Basic Bed"
  | "Fisher Bed"
  | "Floral Bed"
  | "Sturdy Bed"
  | "Desert Bed"
  | "Cow Bed"
  | "Pirate Bed"
  | "Royal Bed"
  | "Double Bed";

export type RecipeCraftableName =
  | "Cushion"
  | "Timber"
  | "Bee Box"
  | "Crimsteel"
  | "Merino Cushion"
  | "Kelp Fibre"
  | "Hardened Leather"
  | "Synthetic Fabric"
  | "Ocean's Treasure"
  | "Royal Bedding"
  | "Royal Ornament";

export type Party = {
  fulfilledAt?: number;
  fulfilledCount?: number;
  requirements?: Partial<Record<InventoryItemName, number>>;
};

export type Order = {
  id: string;
  from: NPCName;
  items: Partial<
    Record<InventoryItemName | BumpkinItem | "coins" | "sfl", number>
  >;
  reward: {
    sfl?: number;
    coins?: number;
    items?: Partial<Record<InventoryItemName, number>>;
  };
  createdAt: number;
  readyAt: number;
  completedAt?: number;
};

type QuestNPCName =
  | "pumpkin' pete"
  | "bert"
  | "raven"
  | "timmy"
  | "tywin"
  | "cornwell";

export type Quest = Order & {
  from: QuestNPCName;
};

export type Delivery = {
  orders: (Order | Quest)[];
  fulfilledCount: number;
  skippedCount?: number;
  skippedAt?: number;

  milestone: {
    goal: number;
    total: number;
    claimedAt?: number;
  };
  doubleDelivery?: string;
};

export type DailyRewards = {
  streaks?: number;
  chest?: {
    collectedAt: number;
    code: number;
  };
};

export type PotionName =
  | "Bloom Boost"
  | "Happy Hooch"
  | "Earth Essence"
  | "Flower Power"
  | "Organic Oasis"
  | "Dream Drip"
  | "Silver Syrup";

export type PotionStatus =
  | "pending"
  | "incorrect"
  | "correct"
  | "almost"
  | "bomb";

export type PotionSlot = { potion: PotionName; status: PotionStatus };

export type Attempt = [PotionSlot, PotionSlot, PotionSlot, PotionSlot];

export type PotionHouse = {
  game: {
    status: "in_progress" | "finished";
    attempts: Attempt[];
    reward?: number;
    multiplier?: number;
  };
  history: {
    [score: number]: number;
  };
};

export type NPCS = Partial<Record<NPCName, NPCData>>;

export type NPCData = {
  deliveryCount: number;
  deliveryCompletedAt?: number;
  questCompletedAt?: number;
  friendship?: {
    updatedAt: number;
    points: number;
    giftClaimedAtPoints?: number;
    giftedAt?: number;
  };
  streaks?: {
    streak: number;
    lastClaimedAt: number;
  };
};

export type ChoreV2 = {
  activity: BumpkinActivityName;
  description: string;
  createdAt: number;
  completedAt?: number;
  requirement: number;
  bumpkinId: number;
  startCount: number;
};

export type KingdomChores = {
  chores: KingdomChore[];
  choresCompleted: number;
  choresSkipped: number;
  skipAvailableAt?: number;
  resetsAt?: number;
};

export type KingdomChore = {
  activity: BumpkinActivityName;
  description: string;
  image: InventoryItemName;
  requirement: number;
  marks: number;
  completedAt?: number;
  skippedAt?: number;
} & (
  | { startedAt: number; startCount: number }
  | { startedAt?: never; startCount?: never }
);

export type SeasonWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export type MazeAttempt = {
  startedAt: number;
  completedAt?: number;
  crowsFound: number;
  health: number;
  time: number;
  crowIds?: string[];
};

export type MazeMetadata = {
  sflFee: number;
  paidEntryFee: boolean;
  highestScore: number;
  claimedFeathers: number;
  attempts: MazeAttempt[];
};

export enum ChoreV2Name {
  EASY_1 = 1,
  EASY_2,
  MEDIUM_1,
  MEDIUM_2,
  HARD_1,
}

export type ChoresV2 = {
  chores: Record<ChoreV2Name, ChoreV2>;
  choresCompleted: number;
  choresSkipped: number;
};

export type CommunityIsland = {
  metadata: string;
  updatedAt: number;
  mints?: {
    items: Partial<Record<InventoryItemName, number>>;
    wearables: Wardrobe;
  };
  burns?: {
    sfl: number;
    items: Partial<Record<InventoryItemName, number>>;
  };
};

export type MinigamePrize = {
  startAt: number;
  endAt: number;
  score: number;
  coins: number;
  items: Partial<Record<InventoryItemName, number>>;
  wearables: Wardrobe;
};

export type MinigameHistory = {
  highscore: number;
  attempts: number;
  prizeClaimedAt?: number;
};

export type Minigame = {
  highscore: number;
  // SFL attempts purchased
  purchases?: {
    sfl: number;
    items?: Partial<Record<MinigameCurrency, number>>;
    purchasedAt: number;
  }[];

  // Minigame shop
  shop?: {
    wearables?: Wardrobe;
    items?: Partial<Record<InventoryItemName, number>>;
  };

  history: Record<string, MinigameHistory>;
};

export type TradeListing = {
  items: Partial<Record<MarketplaceTradeableName, number>>;
  sfl: number;
  tax?: number; // Defaults to 10% of the sfl
  createdAt: number;
  collection: CollectionName;
  boughtAt?: number;
  buyerId?: number;
  signature?: string;
  fulfilledAt?: number;
  fulfilledById?: number;
  initiatedAt?: number;
  tradeType: "instant" | "onchain";
};

export type TradeOffer = {
  items: Partial<Record<MarketplaceTradeableName, number>>;
  sfl: number;
  tax?: number; // Defaults to 10% of the sfl
  collection: CollectionName;
  createdAt: number;
  fulfilledAt?: number;
  fulfilledById?: number;
  signature?: string;
  initiatedAt?: number;
  tradeType: "instant" | "onchain";
};

type FishingSpot = {
  castedAt?: number;
  bait?: FishingBait;
  chum?: InventoryItemName;
  caught?: Partial<Record<InventoryItemName, number>>;
};

export type Fishing = {
  wharf: FishingSpot;
  dailyAttempts?: {
    [date: string]: number;
  };
  extraReels?: ExtraReels;

  // TODO remove after 1st June
  beach?: FishingSpot;
  weather?: string;
};

export type ExtraReels = {
  timesBought?: {
    [date: string]: number;
  };
  count: number;
};

export type Christmas = {
  day: Record<
    number,
    {
      candy: number;
      collectedAt: number;
    }
  >;
};

export type Currency =
  | "SFL"
  | "Gem"
  | "Crimstone"
  | "Sunstone"
  | "Seasonal Ticket"
  | "Mark"
  | "Love Charm"
  | "Easter Token 2025"
  | "Colors Token 2025";

export type ShopItemBase = {
  shortDescription: string;
  currency: Currency;
  price: Decimal;
  limit: number | null;
  type: "wearable" | "collectible" | "food" | "keys";
};

type AvailableAllSeason = {
  availableAllSeason: boolean;
};

export type WearablesItem = {
  name: BumpkinItem;
} & ShopItemBase &
  AvailableAllSeason;

export type CollectiblesItem = {
  name: InventoryItemName;
} & ShopItemBase &
  AvailableAllSeason;

export type MegaStoreItemName = BumpkinItem | InventoryItemName;

export type MegaStoreItem = WearablesItem | CollectiblesItem;

export type MegaStore = {
  available: {
    from: number;
    to: number;
  };
  wearables: WearablesItem[];
  collectibles: CollectiblesItem[];
};

export type IslandType = "basic" | "spring" | "desert" | "volcano";

/**
 * The order of the islands is important as it determines the levels of the islands.
 * Each new island should be added to the end of the array.
 */
export const ISLAND_EXPANSIONS: IslandType[] = [
  "basic",
  "spring",
  "desert",
  "volcano",
];

export type Home = {
  collectibles: Collectibles;
};

export type PlantedFlower = {
  name: FlowerName;
  plantedAt: number;
  crossbreed?: FlowerCrossBreedName;
  dirty?: boolean;
  reward?: Reward;
  criticalHit?: CriticalHit;
  amount?: number;
};

export type FlowerBed = {
  flower?: PlantedFlower;
  createdAt: number;
  removedAt?: number;
} & OptionalCoordinates;

export type FlowerBeds = Record<string, FlowerBed>;

export type AttachedFlower = {
  id: string;
  attachedAt: number;
  attachedUntil: number;
  rate?: number;
};

export type Beehive = {
  swarm: boolean;
  honey: {
    updatedAt: number;
    produced: number;
  };
  flowers: AttachedFlower[];
  removedAt?: number;
} & OptionalCoordinates;

export type Beehives = Record<string, Beehive>;

export type FactionName =
  | "sunflorians"
  | "bumpkins"
  | "goblins"
  | "nightshades";

export type ResourceRequest = {
  item: InventoryItemName;
  amount: number;
  dailyFulfilled: {
    [day: number]: number;
  };
};

export type FactionPetRequest = {
  food: ConsumableName;
  quantity: number;
  dailyFulfilled: {
    [day: number]: number;
  };
};

export type FactionPet = {
  week: string;
  qualifiesForBoost?: boolean;
  requests: FactionPetRequest[];
};

type FactionKitchen = {
  week: string;
  requests: ResourceRequest[];
};

export type FactionPrize = {
  coins: number;
  sfl: number;
  items: Partial<Record<InventoryItemName, number>>;
};

export type CollectivePet = {
  totalXP: number;
  goalXP: number;
  goalReached: boolean;
  streak: number;
  sleeping: boolean;
};

export type FactionHistory = {
  score: number;
  petXP: number;
  results?: {
    rank: number;
    reward?: FactionPrize;
    claimedAt?: number;
  };

  collectivePet?: CollectivePet;
};

export type Faction = {
  name: FactionName;
  pledgedAt: number;
  emblemsClaimedAt?: number;
  points?: number;
  kitchen?: FactionKitchen;
  pet?: FactionPet;
  history: Record<string, FactionHistory>;
  boostCooldownUntil?: number;
};

export type DonationItemName =
  | CropName
  | FishName
  | PatchFruitName
  | CommodityName
  | Worm;

type KeysBoughtAt = Partial<Record<Keys, { boughtAt: number }>>;
type Stores = "factionShop" | "treasureShop" | "megastore";
export type KeysBought = Record<Stores, KeysBoughtAt>;

export type AnimalBuildingKey = "henHouse" | "barn";
export type UpgradableBuildingKey = AnimalBuildingKey | "waterWell";

export type AnimalResource =
  | "Egg"
  | "Leather"
  | "Wool"
  | "Merino Wool"
  | "Feather"
  | "Milk";
export type AnimalState = "idle" | "happy" | "sad" | "ready" | "sick";

export type Animal = {
  id: string;
  type: AnimalType;
  state: AnimalState;
  createdAt: number;
  experience: number;
  asleepAt: number;
  awakeAt: number;
  lovedAt: number;
  item: LoveAnimalItem;
  multiplier?: number;
  reward?: Reward;
};

export type AnimalBuilding = UpgradableBuilding & {
  animals: Record<string, Animal>;
};

export type UpgradableBuilding = {
  level: number;
  upgradeReadyAt?: number;
  upgradedAt?: number;
};

export type Bank = {
  taxFreeSFL: number;
  withdrawnAmount: number;
};

export type TemperateSeasonName = "spring" | "summer" | "autumn" | "winter";

export type Season = {
  startedAt: number;
  season: TemperateSeasonName;
};

type BaseCalendarEventDetails = {
  date: string;
  weather?: boolean;
};

type CalendarScheduledEvent = BaseCalendarEventDetails & {
  name: "calendar";
  title: string;
  description: string;
};

type OtherCalendarEvent = BaseCalendarEventDetails & {
  name: Exclude<CalendarEventName, "calendar">;
};

export type CalendarEventDetails = CalendarScheduledEvent | OtherCalendarEvent;

export type Calendar = Partial<Record<SeasonalEventName, CalendarEvent>> & {
  dates: CalendarEventDetails[];
};

export type LavaPit = {
  createdAt: number;
  startedAt?: number;
  collectedAt?: number;
  removedAt?: number;
} & OptionalCoordinates;

export type VIP = {
  bundles: { name: VipBundle; boughtAt: number }[];
  expiresAt: number;
};

export type Chain = "ronin";

export type NFT = {
  name: string;
  tokenId: number;
  expiresAt: number;
  acknowledgedAt?: number;
};

export type BoostName =
  | InventoryItemName
  | BumpkinItem
  | BumpkinRevampSkillName
  | BudNFTName;

export type BoostUsedAt = Partial<Record<BoostName, number>>;

export interface GameState {
  home: Home;
  bank: Bank;

  choreBoard: ChoreBoard;

  competitions: {
    progress: Partial<Record<CompetitionName, CompetitionProgress>>;
  };

  calendar: Calendar;
  vip?: VIP;
  shipments: {
    restockedAt?: number;
  };

  verified?: boolean;

  gems: {
    history?: Record<string, { spent: number }>;
  };

  flower: {
    history?: Record<string, { loveCharmsSpent: number }>;
  };

  // There are more fields but unused
  transaction?: GameTransaction;

  island: {
    type: IslandType;
    upgradedAt?: number;
    previousExpansions?: number;
    sunstones?: number;
    biome?: LandBiomeName;
  };

  username?: string;
  settings: {
    username?: {
      setAt?: number;
    };
    network?: NetworkName;
  };
  coins: number;
  balance: Decimal;
  previousBalance: Decimal;
  airdrops?: Airdrop[];

  createdAt: number;

  tradedAt?: string;
  warCollectionOffer?: WarCollectionOffer;

  minigames: {
    prizes: Partial<Record<MinigameName, MinigamePrize>>;
    games: Partial<Record<MinigameName, Minigame>>;
  };

  farmHands: {
    bumpkins: Record<string, FarmHand>;
  };

  chickens: Record<string, Chicken>;
  inventory: Inventory;
  previousInventory: Inventory;
  wardrobe: Wardrobe;
  previousWardrobe: Wardrobe;
  stock: Inventory;
  stockExpiry: StockExpiry;
  boostsUsedAt?: BoostUsedAt;

  // When an item is burnt, what the prize was
  mysteryPrizes: Partial<Record<InventoryItemName, Reveal[]>>;

  trees: Record<string, Tree>;
  stones: Record<string, Rock>;
  gold: Record<string, Rock>;
  iron: Record<string, Rock>;
  crimstones: Record<string, FiniteResource>;
  sunstones: Record<string, FiniteResource>;
  oilReserves: Record<string, OilReserve>;

  crops: Record<string, CropPlot>;
  greenhouse: {
    oil: number;
    pots: Record<string, GreenhousePot>;
  };
  fruitPatches: Record<string, FruitPatch>;
  beehives: Beehives;
  flowers: {
    discovered: Partial<Record<FlowerName, FlowerCrossBreedName[]>>;
    flowerBeds: FlowerBeds;
  };
  fishing: Fishing;
  farmActivity: Partial<Record<FarmActivityName, number>>;
  milestones: Partial<Record<MilestoneName, number>>;

  expansionConstruction?: ExpansionConstruction;
  expandedAt?: number;

  bumpkin: Bumpkin;

  buildings: Buildings;
  collectibles: Collectibles;
  delivery: Delivery;
  npcs?: NPCS;
  treasureIsland?: {
    holes: Record<number, TreasureHole>;
    rareTreasure?: {
      reward?: InventoryItemName;
      discoveredAt: number;
      holeId: number;
    };
    rewardCollectedAt?: number;
  };

  // TODO remove when old events are deleted
  migrated?: boolean;
  metadata?: any[];
  pumpkinPlaza: {
    rewardCollectedAt?: number;
    kickedAt?: number;
    kickedById?: number;
    raffle?: { entries: Record<string, number> };
    budBox?: { openedAt: number };
    vipChest?: { openedAt: number };
    blockchainBox?: {
      openedAt: number;
      items: Partial<Record<InventoryItemName, number>>;
      vipDays: number;
      tier: "bronze" | "silver" | "gold" | "platinum" | "diamond";
    };
    giftGiver?: { openedAt: number };
    streamerHat?: { openedAt: number };
    pirateChest?: { openedAt: number };
    keysBought?: KeysBought;
  };
  conversations: ConversationName[];
  mailbox: {
    read: {
      id: string;
      createdAt: number;
    }[];
  };
  dailyRewards?: DailyRewards;
  auctioneer: {
    bid?: Bid;
    minted?: Minted;
  };
  chores?: ChoresV2;
  kingdomChores: KingdomChores;
  mushrooms: Mushrooms;
  potionHouse?: PotionHouse;

  bounties: Bounties;

  trades: {
    listings?: Record<string, TradeListing>;
    offers?: Record<string, TradeOffer>;
    tradePoints?: number;
    dailyListings?: { date: number; count: number };
    dailyPurchases?: { date: number; count: number };
    weeklySales?: {
      [date: string]: Partial<Record<MarketplaceTradeableName, number>>;
    };

    weeklyPurchases?: {
      [date: string]: Partial<Record<MarketplaceTradeableName, number>>;
    };
  };

  buds?: Record<number, Bud>;

  christmas2024?: Christmas;
  flowerShop?: FlowerShop;
  specialEvents: SpecialEvents;
  goblinMarket: {
    resources: Partial<
      Record<
        TradeableName,
        {
          bundlesSold: number;
          date: number;
        }
      >
    >;
  };
  faction?: Faction;
  previousFaction?: {
    name: FactionName;
    leftAt: number;
  };
  dailyFactionDonationRequest?: {
    resource: DonationItemName;
    amount: Decimal;
  };
  desert: Desert;

  ban: {
    status: "investigating" | "permanent" | "ok";
    isSocialVerified?: boolean;
  };

  experiments: ExperimentName[];
  henHouse: AnimalBuilding;
  barn: AnimalBuilding;
  waterWell: UpgradableBuilding;

  craftingBox: {
    status: "pending" | "idle" | "crafting";
    item?:
      | {
          collectible: RecipeCollectibleName;
          wearable?: never;
        }
      | {
          collectible?: never;
          wearable: RecipeWearableName;
        };
    startedAt: number;
    readyAt: number;
    recipes: Partial<Recipes>;
  };
  season: Season;
  lavaPits: Record<string, LavaPit>;
  nfts?: Partial<Record<Chain, NFT>>;

  faceRecognition?: {
    session?: {
      id: string;
      createdAt: number;
      token: string;
    };
    history: FaceRecognitionEvent[];
  };
  telegram?: {
    linkedAt: number;
    startedAt?: number;
    joinedAt?: number;
  };
  twitter?: {
    linkedAt: number;
    followedAt?: number;
    isAuthorised?: boolean;
    verifiedPostsAt?: number;
    tweets?: Partial<Record<TwitterPostName, TwitterPost>>;
  };
  discord?: {
    connected: boolean;
    verified: boolean;
  };
  referrals?: {
    totalReferrals: number;
    totalVIPReferrals?: number;
    totalUnclaimedReferrals?: number;
    rewards?: {
      items?: Partial<Record<InventoryItemName, number>>;
      wearables?: Partial<Record<BumpkinItem, number>>;
      coins?: number;
      sfl?: number;
    };
  };
  socialTasks?: {
    completed: Partial<Record<InGameTaskName, { completedAt: number }>>;
  };

  rewardBoxes?: RewardBoxes;

  floatingIsland: {
    schedule: {
      startAt: number;
      endAt: number;
    }[];
    shop: FloatingIslandShop;
    boughtAt?: Partial<Record<FloatingShopItemName, number>>;
    petalPuzzleSolvedAt?: number;
  };
  megastore?: {
    boughtAt: Partial<Record<SeasonalTierItemName, number>>;
  };
  withdrawals?: {
    amount: number;
  };
  blessing: Blessing;

  monuments?: Partial<Record<MonumentName, { createdAt: number }>>;

  aoe: AOE;
  socialFarming: {
    points: number;
    villageProjects: Partial<Record<MonumentName, { cheers: number }>>;
    cheersGiven: {
      date: string;
      projects: Partial<Record<MonumentName, number[]>>;
      farms: number[];
    };
    cheers: {
      cheersUsed: number;
      freeCheersClaimedAt: number;
    };
    dailyCollections?: Record<
      number,
      {
        pointGivenAt?: number;
        clutter: Record<
          string,
          {
            collectedAt: number;
            type: ClutterName;
          }
        >;
      }
    >;
    clutter?: {
      spawnedAt: number;
      locations: Record<
        string,
        {
          type: ClutterName;
          x: number;
          y: number;
        }
      >;
    };
  };
}

export type AOE = Partial<
  Record<AOEItemName, Partial<Record<number, Partial<Record<number, number>>>>>
>;

export type FaceRecognitionEvent =
  | { event: "succeeded"; createdAt: number; confidence: number }
  | { event: "failed"; createdAt: number; confidence: number }
  | {
      event: "duplicate";
      createdAt: number;
      duplicates: {
        similarity: number;
        faceId: string;
        farmId: number;
      }[];
    };

export interface Context {
  state?: GameState;
  actions: PastAction[];
}
