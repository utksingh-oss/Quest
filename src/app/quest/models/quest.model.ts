import { Objective } from "./objective.model";

export type QuestType = 'discipline' | 'learning' | 'fitness' | 'focus';

export interface Quest {
    id: string; 
    title: string;
    detail: string;
    type: QuestType;
    status: 'active' | 'pending' | 'failed' | 'success';
    tasks: Task[];

    completionBonus: {
        xp: number, 
        coin: number
    };

    imageUrl?: string;
}


interface Task {
    order: number; 
    objective: Objective;
}
