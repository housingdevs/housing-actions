import { GameMode, StatMode } from './util';

// Condition Types
export type Condition =
    | InGroupCondition
    | PlayerStatCondition
    | GlobalStatCondition
    | HasPermissionCondition
    | InRegionCondition
    | HasItemCondition
    | InParkourCondition
    | PotionEffectCondition
    | SneakingCondition
    | FlyingCondition
    | HealthCondition
    | MaxHealthCondition
    | HungerLevelCondition
    | GameModeCondition
    | PlaceholderNumberCondition
    | InTeamCondition
    | TeamStatCondition;

// Condition Enum
export type ConditionType =
    | 'IN_GROUP'
    | 'PLAYER_STAT'
    | 'GLOBAL_STAT'
    | 'HAS_PERMISSION'
    | 'IN_REGION'
    | 'HAS_ITEM'
    | 'IN_PARKOUR'
    | 'POTION_EFFECT'
    | 'SNEAKING'
    | 'FLYING'
    | 'HEALTH'
    | 'MAX_HEALTH'
    | 'HUNGER_LEVEL'
    | 'GAMEMODE'
    | 'PLACEHOLDER_NUMBER'
    | 'IN_TEAM'
    | 'TEAM_STAT';

export type InGroupCondition = {
    type: 'IN_GROUP';
    required_group: string | null;
    include_higher_groups: boolean;
};

export type PlayerStatCondition = {
    type: 'PLAYER_STAT';
    stat: string;
    mode: StatMode;
    amount: number;
};

export type GlobalStatCondition = {
    type: 'GLOBAL_STAT';
    stat: string;
    mode: StatMode;
    amount: number;
};

export type HasPermissionCondition = {
    type: 'HAS_PERMISSION';
    required_permission: string | null;
};

export type InRegionCondition = {
    type: 'IN_REGION';
    region: string | null;
};

export type HasItemCondition = {
    type: 'HAS_ITEM';
    item: string | null;
    what_to_check: 'Metadata' | 'AnotherOption'; // Adjust with actual options
    where_to_check: 'Anywhere' | 'AnotherOption'; // Adjust with actual options
    required_amount: 'Any' | number; // Adjust if there are more specific types
};

export type InParkourCondition = {
    type: 'IN_PARKOUR';
};

export type PotionEffectCondition = {
    type: 'POTION_EFFECT';
    effect: number | null;
};

export type SneakingCondition = {
    type: 'SNEAKING';
};

export type FlyingCondition = {
    type: 'FLYING';
};

export type HealthCondition = {
    type: 'HEALTH';
    mode: StatMode;
    amount: number | null;
};

export type MaxHealthCondition = {
    type: 'MAX_HEALTH';
    mode: StatMode;
    amount: number | null;
};

export type HungerLevelCondition = {
    type: 'HUNGER_LEVEL';
    mode: StatMode;
    amount: number | null;
};

export type GameModeCondition = {
    type: 'GAMEMODE';
    required_gamemode: GameMode | null;
};

export type PlaceholderNumberCondition = {
    type: 'PLACEHOLDER_NUMBER';
    placeholder: string | null;
    mode: StatMode;
    amount: number;
};

export type InTeamCondition = {
    type: 'IN_TEAM';
    required_team: string | null;
};

export type TeamStatCondition = {
    type: 'TEAM_STAT';
    stat: string;
    team: string | null;
    mode: StatMode;
    amount: number;
};
