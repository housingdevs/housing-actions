export type Coordinates = {
    relZ: number;
    relY: number;
    relX: number;
    x: number;
    y: number;
    z: number;
    pitch: number;
    yaw: number;
};

export type StatMode =
    | 'INCREMENT'
    | 'DECREMENT'
    | 'SET'
    | 'MULTIPLY'
    | 'DIVIDE';

export type GameMode = 'ADVENTURE' | 'SURVIVAL' | 'CREATIVE';
