export interface Rule {
    id: number
    title: string;
    description: string; 
    price: {
        coins: number, 
        xp: number
    }
}

