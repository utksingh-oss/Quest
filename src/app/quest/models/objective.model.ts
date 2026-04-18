export interface Objective {

  id: string;
  title: string;
  instruction: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'epic';
  
  endDate: string;

  isTimedActivity: boolean;
  timeDuration: string;

  skills: {
    intelligence?: number;
    strength?: number;
    willpower?: number;
  };

  rewards: {
    xp: number;
    gold: number;
  };

  completed?: boolean;
}
