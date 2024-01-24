import { ConditionType } from './conditions';

export enum EventType {
    JOIN = 'JOIN',
    QUIT = 'QUIT',
    DEATH = 'DEATH',
    KILL = 'KILL',
    RESPAWN = 'RESPAWN',
    GROUP_CHANGE = 'GROUP_CHANGE',
    PVP_STATE_CHANGE = 'PVP_STATE_CHANGE',
    FISH_CAUGHT = 'FISH_CAUGHT',
    PORTAL_USE = 'PORTAL_USE',
    DAMAGE = 'DAMAGE',
    BLOCK_BREAK = 'BLOCK_BREAK',
    PARKOUR_START = 'PARKOUR_START',
    PARKOUR_FINISH = 'PARKOUR_FINISH',
    DROP_ITEM = 'DROP_ITEM',
    PICKUP_ITEM = 'PICKUP_ITEM',
    CHANGE_HELD_ITEM = 'CHANGE_HELD_ITEM',
    TOGGLE_SNEAK = 'TOGGLE_SNEAK',
    TOGGLE_FLIGHT = 'TOGGLE_FLIGHT',
}

export type Event = {
    type: EventType;
    cancellable: boolean;
    extendsConditions?: ConditionType[];
};

export const JoinEvent: Event = {
    type: EventType.JOIN,
    cancellable: false,
};

export const QuitEvent: Event = {
    type: EventType.QUIT,
    cancellable: false,
};

export const DeathEvent: Event = {
    type: EventType.DEATH,
    cancellable: true,
};

export const KillEvent: Event = {
    type: EventType.KILL,
    cancellable: false,
};

export const RespawnEvent: Event = {
    type: EventType.RESPAWN,
    cancellable: false,
};

export const GroupChangeEvent: Event = {
    type: EventType.GROUP_CHANGE,
    cancellable: false,
};

export const PvpStateChangeEvent: Event = {
    type: EventType.PVP_STATE_CHANGE,
    cancellable: false,
    extendsConditions: [ConditionType.PVP_ENABLED],
};

export const FishCaughtEvent: Event = {
    type: EventType.FISH_CAUGHT,
    cancellable: true,
    extendsConditions: [ConditionType.FISHING_ENVIRONMENT],
};

export const PortalUseEvent: Event = {
    type: EventType.PORTAL_USE,
    cancellable: false,
    extendsConditions: [ConditionType.PORTAL_TYPE],
};

export const DamageEvent: Event = {
    type: EventType.DAMAGE,
    cancellable: true,
    extendsConditions: [
        ConditionType.DAMAGE_CAUSE,
        ConditionType.DAMAGE_AMOUNT,
    ],
};

export const BlockBreakEvent: Event = {
    type: EventType.BLOCK_BREAK,
    cancellable: false,
    extendsConditions: [ConditionType.BLOCK_TYPE],
};

export const ParkourStartEvent: Event = {
    type: EventType.PARKOUR_START,
    cancellable: false,
    extendsConditions: [ConditionType.BLOCK_TYPE],
};

export const ParkourFinishEvent: Event = {
    type: EventType.PARKOUR_FINISH,
    cancellable: false,
    extendsConditions: [ConditionType.BLOCK_TYPE],
};

export const DropItemEvent: Event = {
    type: EventType.DROP_ITEM,
    cancellable: true,
    extendsConditions: [ConditionType.IS_ITEM],
};

export const PickupItemEvent: Event = {
    type: EventType.PICKUP_ITEM,
    cancellable: true,
    extendsConditions: [ConditionType.IS_ITEM],
};

export const ChangeHeldItemEvent: Event = {
    type: EventType.CHANGE_HELD_ITEM,
    cancellable: true,
    extendsConditions: [ConditionType.IS_ITEM],
};

export const ToggleSneakEvent: Event = {
    type: EventType.TOGGLE_SNEAK,
    cancellable: true,
};

export const ToggleFlightEvent: Event = {
    type: EventType.TOGGLE_FLIGHT,
    cancellable: true,
};
