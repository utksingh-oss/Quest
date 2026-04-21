import { Quest } from "../quest.model";

export const MOCK_QUESTS: Quest[] = [
  {
    id: 'quest-001',
    title: 'Morning Discipline',
    description: 'Start the day with focused routines to build momentum.',
    type: 'discipline',
    status: 'active',

    tasks: [
      {
        id: 'obj-001',
        position: { parentId: null, order: 0 },
        title: 'Wake Up Early',
        instruction: 'Wake up before 7:00 AM.',
        difficulty: 'easy',
        endDate: new Date('2026-04-20'),
        skills: { willpower: 2 },
        rewards: { xp: 20, gold: 5 },
        isCompleted: false
      },
      {
        id: 'obj-002',
        position: { parentId: null, order: 1 },
        title: 'Morning Stretch',
        instruction: 'Complete a 10-minute stretching routine.',
        difficulty: 'easy',
        endDate: new Date('2026-04-20'),
        durationMinutes: 10,
        skills: { strength: 1, willpower: 1 },
        rewards: { xp: 30, gold: 8 },
        isCompleted: false
      }
    ],

    completionBonus: {
      xp: 100,
      gold: 25
    },

    imageUrl: 'assets/images/scenery_1.jpg'
  },

  {
    id: 'quest-002',
    title: 'Scholar’s Path',
    description: 'Sharpen your mind through focused learning.',
    type: 'learning',
    status: 'pending',

    tasks: [
      {
        id: 'obj-003',
        position: { parentId: null, order: 0 },
        title: 'Read Technical Material',
        instruction: 'Read at least 15 pages of technical content.',
        difficulty: 'medium',
        endDate: new Date('2026-04-22'),
        durationMinutes: 30,
        skills: { intelligence: 3 },
        rewards: { xp: 50, gold: 12 },
        isCompleted: false
      },
      {
        id: 'obj-004',
        position: { parentId: null, order: 1 },
        title: 'Practice Coding',
        instruction: 'Solve at least 2 programming problems.',
        difficulty: 'medium',
        endDate: new Date('2026-04-22'),
        durationMinutes: 45,
        skills: { intelligence: 4, willpower: 2 },
        rewards: { xp: 70, gold: 15 },
        isCompleted: false
      }
    ],

    completionBonus: {
      xp: 200,
      gold: 60
    },

    imageUrl: 'assets/images/scenery_2.jpg'
  },

  {
    id: 'quest-003',
    title: 'Warrior Conditioning',
    description: 'Build strength and endurance through physical effort.',
    type: 'fitness',
    status: 'active',

    tasks: [
      {
        id: 'obj-005',
        position: { parentId: null, order: 0 },
        title: 'Push-up Session',
        instruction: 'Complete 3 sets of 15 push-ups.',
        difficulty: 'medium',
        endDate: new Date('2026-04-21'),
        skills: { strength: 4, willpower: 2 },
        rewards: { xp: 60, gold: 14 },
        isCompleted: false
      },
      {
        id: 'obj-006',
        position: { parentId: null, order: 1 },
        title: 'Run Training',
        instruction: 'Run continuously for 20 minutes.',
        difficulty: 'hard',
        endDate: new Date('2026-04-21'),
        durationMinutes: 20,
        skills: { strength: 3, willpower: 3 },
        rewards: { xp: 90, gold: 20 },
        isCompleted: false
      }
    ],

    completionBonus: {
      xp: 300,
      gold: 80
    },

    imageUrl: 'assets/images/scenery_2.jpg'
  },

  {
    id: 'quest-004',
    title: 'Legendary Focus',
    description: 'Enter deep focus and complete high-difficulty tasks.',
    type: 'focus',
    status: 'failed',

    tasks: [
      {
        id: 'obj-007',
        position: { parentId: null, order: 0 },
        title: 'Deep Work Session',
        instruction: 'Work distraction-free for 90 minutes.',
        difficulty: 'epic',
        endDate: new Date('2026-04-18'),
        durationMinutes: 90,
        skills: { intelligence: 5, willpower: 5 },
        rewards: { xp: 150, gold: 40 },
        isCompleted: false
      }
    ],

    completionBonus: {
      xp: 500,
      gold: 150
    },

    imageUrl: 'assets/images/scenery_1.jpg'
  }
];