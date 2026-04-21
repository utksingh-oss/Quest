import { Task } from '../task.model';

const today = new Date();

export const MOCK_TASKS: Task[] = [
  {
    id: 'obj-001',
    position: { parentId: null, order: 0 },
    title: 'Meditate 10 Minutes',
    instruction: 'Sit quietly and focus on breathing for 10 minutes.',
    difficulty: 'easy',
    endDate: today,
    durationMinutes: 10,
    skills: { willpower: 1 },
    rewards: { xp: 10, gold: 15 },
    isCompleted: false,
  },

  {
    id: 'obj-002',
    position: { parentId: null, order: 1 },
    title: 'Read 10 Pages',
    instruction: 'Read at least 10 pages from a learning book.',
    difficulty: 'easy',
    endDate: today,
    skills: { intelligence: 1 },
    rewards: { xp: 12, gold: 18 },
    isCompleted: false,
  },

  {
    id: 'obj-003',
    position: { parentId: null, order: 2 },
    title: 'Complete Angular Lesson',
    instruction: 'Finish Angular routing tutorial and practice.',
    difficulty: 'medium',
    endDate: today,
    durationMinutes: 120,
    skills: { intelligence: 2 },
    rewards: { xp: 25, gold: 40 },
    isCompleted: false,
  },

  {
    id: 'obj-004',
    position: { parentId: null, order: 3 },
    title: '30 Minute Workout',
    instruction: 'Do pushups, squats, and jumping jacks.',
    difficulty: 'medium',
    endDate: today,
    durationMinutes: 30,
    skills: { strength: 2 },
    rewards: { xp: 30, gold: 50 },
    isCompleted: false,
  },

  {
    id: 'obj-005',
    position: { parentId: null, order: 4 },
    title: 'No Phone for 1 Hour',
    instruction: 'Avoid using phone or social media for 1 hour.',
    difficulty: 'medium',
    endDate: today,
    durationMinutes: 60,
    skills: { willpower: 2 },
    rewards: { xp: 28, gold: 45 },
    isCompleted: false,
  },

  {
    id: 'obj-006',
    position: { parentId: null, order: 5 },
    title: 'Deep Work Session',
    instruction: 'Work on one important task without distraction.',
    difficulty: 'hard',
    endDate: today,
    durationMinutes: 45,
    skills: { willpower: 3, intelligence: 1 },
    rewards: { xp: 50, gold: 80 },
    isCompleted: false,
  },

  {
    id: 'obj-007',
    position: { parentId: null, order: 6 },
    title: 'Run 2 Kilometers',
    instruction: 'Go outside and complete a 2km run.',
    difficulty: 'hard',
    endDate: today,
    durationMinutes: 25,
    skills: { strength: 3 },
    rewards: { xp: 55, gold: 90 },
    isCompleted: false,
  },

  {
    id: 'obj-008',
    position: { parentId: null, order: 7 },
    title: 'Morning Routine Mastery',
    instruction: 'Complete full morning routine without skipping.',
    difficulty: 'epic',
    endDate: today,
    skills: { willpower: 4, intelligence: 1 },
    rewards: { xp: 100, gold: 200 },
    isCompleted: false,
  },
];