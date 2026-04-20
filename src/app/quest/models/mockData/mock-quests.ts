import { Quest } from "../quest.model";

export const MOCK_QUESTS: Quest[] = [
  {
    id: 'quest-001',
    title: 'Morning Discipline',
    detail: 'Start the day with focused routines to build momentum.',
    type: 'discipline',
    status: 'active',

    tasks: [
      {
        order: 1,
        objective: {
          id: 'obj-001',
          title: 'Wake Up Early',
          instruction: 'Wake up before 7:00 AM.',
          difficulty: 'easy',
          endDate: '2026-04-20',

          isTimedActivity: false,
          timeDuration: '',

          skills: {
            willpower: 2
          },

          rewards: {
            xp: 20,
            gold: 5
          },

          completed: false
        }
      },

      {
        order: 2,
        objective: {
          id: 'obj-002',
          title: 'Morning Stretch',
          instruction: 'Complete a 10-minute stretching routine.',
          difficulty: 'easy',
          endDate: '2026-04-20',

          isTimedActivity: true,
          timeDuration: '10m',

          skills: {
            strength: 1,
            willpower: 1
          },

          rewards: {
            xp: 30,
            gold: 8
          },

          completed: false
        }
      }
    ],

    completionBonus: {
      xp: 100,
      coin: 25
    },

    imageUrl: 'assets/images/scenery_1.jpg'
  },

  {
    id: 'quest-002',
    title: 'Scholar’s Path',
    detail: 'Sharpen your mind through focused learning.',
    type: 'learning',
    status: 'pending',

    tasks: [
      {
        order: 1,
        objective: {
          id: 'obj-003',
          title: 'Read Technical Material',
          instruction: 'Read at least 15 pages of technical content.',
          difficulty: 'medium',
          endDate: '2026-04-22',

          isTimedActivity: true,
          timeDuration: '30m',

          skills: {
            intelligence: 3
          },

          rewards: {
            xp: 50,
            gold: 12
          },

          completed: false
        }
      },

      {
        order: 2,
        objective: {
          id: 'obj-004',
          title: 'Practice Coding',
          instruction: 'Solve at least 2 programming problems.',
          difficulty: 'medium',
          endDate: '2026-04-22',

          isTimedActivity: true,
          timeDuration: '45m',

          skills: {
            intelligence: 4,
            willpower: 2
          },

          rewards: {
            xp: 70,
            gold: 15
          },

          completed: false
        }
      }
    ],

    completionBonus: {
      xp: 200,
      coin: 60
    },

    imageUrl: 'assets/images/scenery_2.jpg'
  },

  {
    id: 'quest-003',
    title: 'Warrior Conditioning',
    detail: 'Build strength and endurance through physical effort.',
    type: 'fitness',
    status: 'active',

    tasks: [
      {
        order: 1,
        objective: {
          id: 'obj-005',
          title: 'Push-up Session',
          instruction: 'Complete 3 sets of 15 push-ups.',
          difficulty: 'medium',
          endDate: '2026-04-21',

          isTimedActivity: false,
          timeDuration: '',

          skills: {
            strength: 4,
            willpower: 2
          },

          rewards: {
            xp: 60,
            gold: 14
          },

          completed: false
        }
      },

      {
        order: 2,
        objective: {
          id: 'obj-006',
          title: 'Run Training',
          instruction: 'Run continuously for 20 minutes.',
          difficulty: 'hard',
          endDate: '2026-04-21',

          isTimedActivity: true,
          timeDuration: '20m',

          skills: {
            strength: 3,
            willpower: 3
          },

          rewards: {
            xp: 90,
            gold: 20
          },

          completed: false
        }
      }
    ],

    completionBonus: {
      xp: 300,
      coin: 80
    },

    imageUrl: 'assets/images/scenery_2.jpg'
  },

  {
    id: 'quest-004',
    title: 'Legendary Focus',
    detail: 'Enter deep focus and complete high-difficulty tasks.',
    type: 'focus',
    status: 'failed',

    tasks: [
      {
        order: 1,
        objective: {
          id: 'obj-007',
          title: 'Deep Work Session',
          instruction: 'Work distraction-free for 90 minutes.',
          difficulty: 'epic',
          endDate: '2026-04-18',

          isTimedActivity: true,
          timeDuration: '90m',

          skills: {
            intelligence: 5,
            willpower: 5
          },

          rewards: {
            xp: 150,
            gold: 40
          },

          completed: false
        }
      }
    ],

    completionBonus: {
      xp: 500,
      coin: 150
    },

    imageUrl: 'assets/images/scenery_1.jpg'
  }
];
