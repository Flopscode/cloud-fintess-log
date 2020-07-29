import { WeightUnit } from './Weight';

export type DateString = string;

export interface WeightLogEntry {
    id: string;
    date: DateString;
    weight: number;
    unit: WeightUnit;
}

export interface WeightLog {
    entries: WeightLogEntry[];
}
