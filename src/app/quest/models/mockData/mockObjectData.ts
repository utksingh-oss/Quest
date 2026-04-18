import { trendingUpOutline } from 'ionicons/icons';
import { Objective } from '../objective.model';

export const mockObjectives: Objective[] = [
  {
    id: 'obj-001',
    title: 'Meditate 10 Minutes',
    instruction: 'Sit quietly and focus on breathing for 10 minutes.',
    difficulty: 'easy',
    endDate: 'Today',
    isTimedActivity: true,
    timeDuration: '10 mins',
    skills: {
      willpower: 1,
    },
    rewards: {
      xp: 10,
      gold: 15,
    },
    completed: false,
  },

  {
    id: 'obj-002',
    title: 'Read 10 Pages',
    instruction: 'Read at least 10 pages from a learning book.',
    difficulty: 'easy',
    endDate: 'Today',
    isTimedActivity: false, 
    timeDuration: 'none',
    skills: {
      intelligence: 1,
    },
    rewards: {
      xp: 12,
      gold: 18,
    },
    completed: false,
  },

  {
    id: 'obj-003',
    title: 'Complete Angular Lesson',
    instruction: 'Finish Angular routing tutorial and practice.',
    difficulty: 'medium',
    endDate: 'Today',
    isTimedActivity: true, 
    timeDuration: '2 Hours',
    skills: {
      intelligence: 2,
    },
    rewards: {
      xp: 25,
      gold: 40,
    },
    completed: false,
  },

  {
    id: 'obj-004',
    title: '30 Minute Workout',
    instruction: 'Do pushups, squats, and jumping jacks.',
    difficulty: 'medium',
    endDate: 'today', 
    isTimedActivity: true,
    timeDuration: '30 Minutes',
    skills: {
      strength: 2,
    },
    rewards: {
      xp: 30,
      gold: 50,
    },
    completed: false,
  },

  {
    id: 'obj-005',
    title: 'No Phone for 1 Hour',
    instruction: 'Avoid using phone or social media for 1 hour.',
    difficulty: 'medium',
    endDate: 'today',
    isTimedActivity: true, 
    timeDuration: '1 Hour',
    skills: {
      willpower: 2,
    },
    rewards: {
      xp: 28,
      gold: 45,
    },
    completed: false,
  },

  {
    id: 'obj-006',
    title: 'Deep Work Session',
    instruction: 'Work on one important task without distraction.',
    difficulty: 'hard',
    endDate: 'today',
    isTimedActivity: true, 
    timeDuration: '45 Minutes',
    skills: {
      willpower: 3,
      intelligence: 1,
    },
    rewards: {
      xp: 50,
      gold: 80,
    },
    completed: false,
  },

  {
    id: 'obj-007',
    title: 'Run 2 Kilometers',
    instruction: 'Go outside and complete a 2km run.',
    difficulty: 'hard',
    endDate: 'today',
    isTimedActivity: true, 
    timeDuration: '25 Minutes',
    skills: {
      strength: 3,
    },
    rewards: {
      xp: 55,
      gold: 90,
    },
    completed: false,
  },

  {
    id: 'obj-008',
    title: 'Morning Routine Mastery',
    instruction: 'Complete full morning routine without skipping.',
    difficulty: 'epic',
    endDate: 'Before 9 AM',
    isTimedActivity: false, 
    timeDuration: 'none',
    skills: {
      willpower: 4,
      intelligence: 1,
    },
    rewards: {
      xp: 100,
      gold: 200,
    },
    completed: false,
  },
];
