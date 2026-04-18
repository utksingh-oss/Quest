import { Objective } from "./objective.model";

export interface Quest {
    id: string; 
    title: string;
    detail: string;
    status: 'active' | 'pending' | 'failed' | 'success';
    tasks: Task[];

    completionBonus: {
        xp: number, 
        coin: number
    };

    imageUrl: string;
}


interface Task {
    order: number; 
    objective: Objective;
}