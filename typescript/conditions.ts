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

export enum ConditionType {
    IN_GROUP = 'IN_GROUP',
    PLAYER_STAT = 'PLAYER_STAT',
    GLOBAL_STAT = 'GLOBAL_STAT',
    HAS_PERMISSION = 'HAS_PERMISSION',
    IN_REGION = 'IN_REGION',
    HAS_ITEM = 'HAS_ITEM',
    IN_PARKOUR = 'IN_PARKOUR',
    POTION_EFFECT = 'POTION_EFFECT',
    SNEAKING = 'SNEAKING',
    FLYING = 'FLYING',
    HEALTH = 'HEALTH',
    MAX_HEALTH = 'MAX_HEALTH',
    HUNGER_LEVEL = 'HUNGER_LEVEL',
    GAMEMODE = 'GAMEMODE',
    PLACEHOLDER_NUMBER = 'PLACEHOLDER_NUMBER',
    IN_TEAM = 'IN_TEAM',
    TEAM_STAT = 'TEAM_STAT',
}

export type InGroupCondition = {
    type: 'IN_GROUP';
    required_group: string;
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
    required_permission: string;
};

export type InRegionCondition = {
    type: 'IN_REGION';
    region: string;
};

export type HasItemCondition = {
    type: 'HAS_ITEM';
    item: string;
    what_to_check: 'Metadata' | 'AnotherOption'; // Adjust with actual options
    where_to_check: 'Anywhere' | 'AnotherOption'; // Adjust with actual options
    required_amount: 'Any' | number; // Adjust if there are more specific types
};

export type InParkourCondition = {
    type: 'IN_PARKOUR';
};

export type PotionEffectCondition = {
    type: 'POTION_EFFECT';
    effect: number;
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
    amount: number;
};

export type MaxHealthCondition = {
    type: 'MAX_HEALTH';
    mode: StatMode;
    amount: number;
};

export type HungerLevelCondition = {
    type: 'HUNGER_LEVEL';
    mode: StatMode;
    amount: number;
};

export type GameModeCondition = {
    type: 'GAMEMODE';
    required_gamemode: GameMode;
};

export type PlaceholderNumberCondition = {
    type: 'PLACEHOLDER_NUMBER';
    placeholder: string;
    mode: StatMode;
    amount: number;
};

export type InTeamCondition = {
    type: 'IN_TEAM';
    required_team: string;
};

export type TeamStatCondition = {
    type: 'TEAM_STAT';
    stat: string;
    team: string;
    mode: StatMode;
    amount: number;
};
