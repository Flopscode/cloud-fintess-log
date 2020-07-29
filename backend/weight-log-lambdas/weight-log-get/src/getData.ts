import { WeightLog, WeightUnit } from 'weight-domain';

export function generateData() {
    const weightLog: WeightLog = {
        entries: [],
    };

    for (let i: number = 1; i < 32; i++) {
        const day = ('' + i).padStart(2, '0');
        weightLog.entries.push({
            id: `${i}`,
            weight: Math.random() * 100,
            date: `2020-01-${day}`,
            unit: WeightUnit.kg,
        });
    }

    return weightLog;
}
