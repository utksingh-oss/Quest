import { Task } from './task.model';

export type QuestType = 'discipline' | 'learning' | 'fitness' | 'focus' | 'miscellaneous';
export type Status = 'active' | 'pending' | 'failed' | 'success';

export interface Quest {
    id: string; 
    title: string;
    description: string;
    type?: QuestType;
    status: Status;
    tasks: Task[];

    completionBonus: {
        xp: number, 
        gold: number
    };

    imageUrl?: string;
}