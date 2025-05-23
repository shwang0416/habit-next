
export interface Habit {
    id: number;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    stamps: Stamp[];
}   

export interface Stamp {
    id: number;
    date: string;
    status: string;
}

export const HABIT_SUMMARY_LENGTH = 10;