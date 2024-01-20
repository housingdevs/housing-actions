type Action =
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

type ActionType =
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

type Coordinates = {
    relZ: number;
    relY: number;
    relX: number;
    x: number;
    y: number;
    z: number;
    pitch: number;
    yaw: number;
};

type StatMode = 'INCREMENT' | 'DECREMENT' | 'SET' | 'MULTIPLY' | 'DIVIDE';

type GameMode = 'ADVENTURE' | 'SURVIVAL' | 'CREATIVE';

type ConditionalAction = {
    type: 'CONDITIONAL';
    match_any_condition: boolean;
    if_actions: Action[];
    else_actions: Action[];
};

type CancelEventAction = {
    type: 'CANCEL_EVENT';
};

type ExitAction = {
    type: 'EXIT';
};

type ChangePlayerGroupAction = {
    type: 'CHANGE_PLAYER_GROUP';
    group: string | null;
    demotion_protection: boolean;
};

type KillAction = {
    type: 'KILL';
};

type FullHealAction = {
    type: 'FULL_HEAL';
};

type SpawnAction = {
    type: 'SPAWN';
};

type TitleAction = {
    type: 'TITLE';
    title: string;
    subtitle: string;
    fadein: number;
    stay: number;
    fadeout: number;
};

type ActionBarAction = {
    type: 'ACTION_BAR';
    message: string;
};

type ResetInventoryAction = {
    type: 'RESET_INVENTORY';
};

type SetMaxHealthAction = {
    type: 'SET_MAX_HEALTH';
    max_health: number;
    heal_on_change: boolean;
};

type ParkourCheckpointAction = {
    type: 'PARKOUR_CHECKPOINT';
};

type GiveItemAction = {
    type: 'GIVE_ITEM';
    item: string | null;
    allow_multiple: boolean;
    inventory_slot: number;
    replace_existing_item: boolean;
};

type RemoveItemAction = {
    type: 'REMOVE_ITEM';
    item: string | null;
};

type SendMessageAction = {
    type: 'SEND_MESSAGE';
    message: string;
};

type PotionEffectAction = {
    type: 'POTION_EFFECT';
    effect: number | null;
    level: number;
    duration: number;
    override_existing_effects: boolean;
};

type ClearEffectsAction = {
    type: 'CLEAR_EFFECTS';
};

type GiveExpLevelsAction = {
    type: 'GIVE_EXP_LEVELS';
    levels: number;
};

type SendToLobbyAction = {
    type: 'SEND_TO_LOBBY';
    location: string;
};

type ChangeStatAction = {
    type: 'CHANGE_STAT';
    mode: StatMode;
    stat: string;
    amount: number | string; // Might need a custom type for pattern "%(.*)%"
};

type ChangeGlobalStatAction = {
    type: 'CHANGE_GLOBAL_STAT';
    mode: StatMode;
    stat: string;
    amount: number | string; // Might need a custom type for pattern "%(.*)%"
};

type TeleportPlayerAction = {
    type: 'TELEPORT_PLAYER';
    location: Coordinates;
};

type BailParkourAction = {
    type: 'BAIL_PARKOUR';
    reason: string;
};

type PlaySoundAction = {
    type: 'PLAY_SOUND';
    sound: string;
    volume: number;
    pitch: number;
};

type SetCompassTargetAction = {
    type: 'SET_COMPASS_TARGET';
    location: Coordinates;
};

type SetGameModeAction = {
    type: 'SET_GAMEMODE';
    gamemode: GameMode;
};

type SetHealthAction = {
    type: 'SET_HEALTH';
    health: number;
};

type SetHungerLevelAction = {
    type: 'SET_HUNGER_LEVEL';
    hunger: number;
};

type RandomActionAction = {
    type: 'RANDOM_ACTION';
    actions: Action[];
};

type UseHeldItemAction = {
    type: 'USE_HELD_ITEM';
};

type TriggerFunctionAction = {
    type: 'TRIGGER_FUNCTION';
    function: string | null;
};

type ApplyLayoutAction = {
    type: 'APPLY_LAYOUT';
    layout: string | null;
};

type EnchantHeldItemAction = {
    type: 'ENCHANT_HELD_ITEM';
    enchantment: number | null;
    level: number;
};

type PauseAction = {
    type: 'PAUSE';
    ticks_to_wait: number;
};

type SetPlayerTeamAction = {
    type: 'SET_PLAYER_TEAM';
    team: string | null;
};

type ChangeTeamStatAction = {
    type: 'CHANGE_TEAM_STAT';
    stat: string;
    mode: StatMode;
    amount: number | string; // Might need a custom type for pattern "%(.*)%"
    team: string | null;
};

type DisplayMenuAction = {
    type: 'DISPLAY_MENU';
    menu: string | null;
};

type CloseMenuAction = {
    type: 'CLOSE_MENU';
};
