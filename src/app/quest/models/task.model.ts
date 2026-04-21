export interface Task {
  id: string;

  position: {
    parentId: string | null;
    order: number;
  };

  title: string;
  instruction: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'epic';

  startDate?: Date;
  endDate?: Date;

  durationMinutes?: number; // in minutes

  skills?: {
    intelligence?: number;
    strength?: number;
    willpower?: number;
  };

  rewards: {
    xp: number;
    gold: number;
  };

  isCompleted: boolean;
}
