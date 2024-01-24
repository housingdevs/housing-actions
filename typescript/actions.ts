import { Condition } from './conditions';
import { Coordinates, GameMode, StatMode } from './util';

export type Action =
    | ConditionalAction
    | CancelEventAction
    | ExitAction
    | ChangePlayerGroupAction
    | KillAction
    | FullHealAction
    | SpawnAction
    | TitleAction
    | ActionBarAction
    | ResetInventoryAction
    | SetMaxHealthAction
    | ParkourCheckpointAction
    | GiveItemAction
    | RemoveItemAction
    | SendMessageAction
    | PotionEffectAction
    | ClearEffectsAction
    | GiveExpLevelsAction
    | SendToLobbyAction
    | ChangeStatAction
    | ChangeGlobalStatAction
    | TeleportPlayerAction
    | BailParkourAction
    | PlaySoundAction
    | SetCompassTargetAction
    | SetGameModeAction
    | SetHealthAction
    | SetHungerLevelAction
    | RandomActionAction
    | UseHeldItemAction
    | TriggerFunctionAction
    | ApplyLayoutAction
    | EnchantHeldItemAction
    | PauseAction
    | SetPlayerTeamAction
    | ChangeTeamStatAction
    | DisplayMenuAction
    | CloseMenuAction;

export enum ActionType {
    CONDITIONAL = 'CONDITIONAL',
    CANCEL_EVENT = 'CANCEL_EVENT',
    EXIT = 'EXIT',
    CHANGE_PLAYER_GROUP = 'CHANGE_PLAYER_GROUP',
    KILL = 'KILL',
    FULL_HEAL = 'FULL_HEAL',
    SPAWN = 'SPAWN',
    TITLE = 'TITLE',
    ACTION_BAR = 'ACTION_BAR',
    RESET_INVENTORY = 'RESET_INVENTORY',
    SET_MAX_HEALTH = 'SET_MAX_HEALTH',
    PARKOUR_CHECKPOINT = 'PARKOUR_CHECKPOINT',
    GIVE_ITEM = 'GIVE_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    SEND_MESSAGE = 'SEND_MESSAGE',
    POTION_EFFECT = 'POTION_EFFECT',
    CLEAR_EFFECTS = 'CLEAR_EFFECTS',
    GIVE_EXP_LEVELS = 'GIVE_EXP_LEVELS',
    SEND_TO_LOBBY = 'SEND_TO_LOBBY',
    CHANGE_STAT = 'CHANGE_STAT',
    CHANGE_GLOBAL_STAT = 'CHANGE_GLOBAL_STAT',
    TELEPORT_PLAYER = 'TELEPORT_PLAYER',
    BAIL_PARKOUR = 'BAIL_PARKOUR',
    PLAY_SOUND = 'PLAY_SOUND',
    SET_COMPASS_TARGET = 'SET_COMPASS_TARGET',
    SET_GAME_MODE = 'SET_GAME_MODE',
    SET_HEALTH = 'SET_HEALTH',
    SET_HUNGER_LEVEL = 'SET_HUNGER_LEVEL',
    RANDOM_ACTION = 'RANDOM_ACTION',
    USE_HELD_ITEM = 'USE_HELD_ITEM',
    TRIGGER_FUNCTION = 'TRIGGER_FUNCTION',
    APPLY_LAYOUT = 'APPLY_LAYOUT',
    ENCHANT_HELD_ITEM = 'ENCHANT_HELD_ITEM',
    PAUSE = 'PAUSE',
    SET_PLAYER_TEAM = 'SET_PLAYER_TEAM',
    CHANGE_TEAM_STAT = 'CHANGE_TEAM_STAT',
    DISPLAY_MENU = 'DISPLAY_MENU',
    CLOSE_MENU = 'CLOSE_MENU',
}

export type ConditionalAction = {
    type: 'CONDITIONAL';
    conditions: Condition[];
    match_any_condition: boolean;
    if_actions: Action[];
    else_actions: Action[];
};

export type CancelEventAction = {
    type: 'CANCEL_EVENT';
};

export type ExitAction = {
    type: 'EXIT';
};

export type ChangePlayerGroupAction = {
    type: 'CHANGE_PLAYER_GROUP';
    group: string;
    demotion_protection: boolean;
};

export type KillAction = {
    type: 'KILL';
};

export type FullHealAction = {
    type: 'FULL_HEAL';
};

export type SpawnAction = {
    type: 'SPAWN';
};

export type TitleAction = {
    type: 'TITLE';
    title: string;
    subtitle: string;
    fadein: number;
    stay: number;
    fadeout: number;
};

export type ActionBarAction = {
    type: 'ACTION_BAR';
    message: string;
};

export type ResetInventoryAction = {
    type: 'RESET_INVENTORY';
};

export type SetMaxHealthAction = {
    type: 'SET_MAX_HEALTH';
    max_health: number;
    heal_on_change: boolean;
};

export type ParkourCheckpointAction = {
    type: 'PARKOUR_CHECKPOINT';
};

export type GiveItemAction = {
    type: 'GIVE_ITEM';
    item: string;
    allow_multiple: boolean;
    inventory_slot: number;
    replace_existing_item: boolean;
};

export type RemoveItemAction = {
    type: 'REMOVE_ITEM';
    item: string;
};

export type SendMessageAction = {
    type: 'SEND_MESSAGE';
    message: string;
};

export type PotionEffectAction = {
    type: 'POTION_EFFECT';
    effect: number;
    level: number;
    duration: number;
    override_existing_effects: boolean;
};

export type ClearEffectsAction = {
    type: 'CLEAR_EFFECTS';
};

export type GiveExpLevelsAction = {
    type: 'GIVE_EXP_LEVELS';
    levels: number;
};

export type SendToLobbyAction = {
    type: 'SEND_TO_LOBBY';
    location: string;
};

export type ChangeStatAction = {
    type: 'CHANGE_STAT';
    mode: StatMode;
    stat: string;
    amount: number | string; // Might need a custom export type for pattern "%(.*)%"
};

export type ChangeGlobalStatAction = {
    type: 'CHANGE_GLOBAL_STAT';
    mode: StatMode;
    stat: string;
    amount: number | string; // Might need a custom export type for pattern "%(.*)%"
};

export type TeleportPlayerAction = {
    type: 'TELEPORT_PLAYER';
    location: Coordinates;
};

export type BailParkourAction = {
    type: 'BAIL_PARKOUR';
    reason: string;
};

export type PlaySoundAction = {
    type: 'PLAY_SOUND';
    sound: string;
    volume: number;
    pitch: number;
};

export type SetCompassTargetAction = {
    type: 'SET_COMPASS_TARGET';
    location: Coordinates;
};

export type SetGameModeAction = {
    type: 'SET_GAMEMODE';
    gamemode: GameMode;
};

export type SetHealthAction = {
    type: 'SET_HEALTH';
    health: number;
};

export type SetHungerLevelAction = {
    type: 'SET_HUNGER_LEVEL';
    hunger: number;
};

export type RandomActionAction = {
    type: 'RANDOM_ACTION';
    actions: Action[];
};

export type UseHeldItemAction = {
    type: 'USE_HELD_ITEM';
};

export type TriggerFunctionAction = {
    type: 'TRIGGER_FUNCTION';
    function: string;
};

export type ApplyLayoutAction = {
    type: 'APPLY_LAYOUT';
    layout: string;
};

export type EnchantHeldItemAction = {
    type: 'ENCHANT_HELD_ITEM';
    enchantment: number;
    level: number;
};

export type PauseAction = {
    type: 'PAUSE';
    ticks_to_wait: number;
};

export type SetPlayerTeamAction = {
    type: 'SET_PLAYER_TEAM';
    team: string;
};

export type ChangeTeamStatAction = {
    type: 'CHANGE_TEAM_STAT';
    stat: string;
    mode: StatMode;
    amount: number | string; // Might need a custom export type for pattern "%(.*)%"
    team: string;
};

export type DisplayMenuAction = {
    type: 'DISPLAY_MENU';
    menu: string;
};

export type CloseMenuAction = {
    type: 'CLOSE_MENU';
};
