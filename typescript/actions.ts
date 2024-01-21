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

export type ActionType =
    | 'CONDITIONAL'
    | 'CANCEL_EVENT'
    | 'EXIT'
    | 'CHANGE_PLAYER_GROUP'
    | 'KILL'
    | 'FULL_HEAL'
    | 'SPAWN'
    | 'TITLE'
    | 'ACTION_BAR'
    | 'RESET_INVENTORY'
    | 'SET_MAX_HEALTH'
    | 'PARKOUR_CHECKPOINT'
    | 'GIVE_ITEM'
    | 'REMOVE_ITEM'
    | 'SEND_MESSAGE'
    | 'POTION_EFFECT'
    | 'CLEAR_EFFECTS'
    | 'GIVE_EXP_LEVELS'
    | 'SEND_TO_LOBBY'
    | 'CHANGE_STAT'
    | 'CHANGE_GLOBAL_STAT'
    | 'TELEPORT_PLAYER'
    | 'BAIL_PARKOUR'
    | 'PLAY_SOUND'
    | 'SET_COMPASS_TARGET'
    | 'SET_GAME_MODE'
    | 'SET_HEALTH'
    | 'SET_HUNGER_LEVEL'
    | 'RANDOM_ACTION'
    | 'USE_HELD_ITEM'
    | 'TRIGGER_FUNCTION'
    | 'APPLY_LAYOUT'
    | 'ENCHANT_HELD_ITEM'
    | 'PAUSE'
    | 'SET_PLAYER_TEAM'
    | 'CHANGE_TEAM_STAT'
    | 'DISPLAY_MENU'
    | 'CLOSE_MENU';

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
    group: string | null;
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
    item: string | null;
    allow_multiple: boolean;
    inventory_slot: number;
    replace_existing_item: boolean;
};

export type RemoveItemAction = {
    type: 'REMOVE_ITEM';
    item: string | null;
};

export type SendMessageAction = {
    type: 'SEND_MESSAGE';
    message: string;
};

export type PotionEffectAction = {
    type: 'POTION_EFFECT';
    effect: number | null;
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
    function: string | null;
};

export type ApplyLayoutAction = {
    type: 'APPLY_LAYOUT';
    layout: string | null;
};

export type EnchantHeldItemAction = {
    type: 'ENCHANT_HELD_ITEM';
    enchantment: number | null;
    level: number;
};

export type PauseAction = {
    type: 'PAUSE';
    ticks_to_wait: number;
};

export type SetPlayerTeamAction = {
    type: 'SET_PLAYER_TEAM';
    team: string | null;
};

export type ChangeTeamStatAction = {
    type: 'CHANGE_TEAM_STAT';
    stat: string;
    mode: StatMode;
    amount: number | string; // Might need a custom export type for pattern "%(.*)%"
    team: string | null;
};

export type DisplayMenuAction = {
    type: 'DISPLAY_MENU';
    menu: string | null;
};

export type CloseMenuAction = {
    type: 'CLOSE_MENU';
};
