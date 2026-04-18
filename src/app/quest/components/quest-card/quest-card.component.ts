import { Component, Input, OnInit } from '@angular/core';
import { Quest } from '../../models/quest.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-quest-card',
  templateUrl: './quest-card.component.html',
  styleUrls: ['./quest-card.component.scss'],
  imports: [NgClass],
})
export class QuestCardComponent implements OnInit {
  @Input() quest: Quest = {
    id: 'quest-001',
    title: 'Morning Discipline',
    detail: 'Start the day with focused routines to build momentum.',
    status: 'active',
    completionBonus: {
      xp: 0,
      coin: 0
    },
    imageUrl: '',
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
            willpower: 2,
          },

          rewards: {
            xp: 20,
            gold: 5,
          },

          completed: false,
        },
      },
    ],
  };

  constructor() {}

  ngOnInit() {}

  get completedTasks() {
    return this.quest?.tasks.filter((t) => t.objective.completed).length;
  }

  get totalTasks() {
    return this.quest?.tasks.length;
  }

  get progressPercent() {
    if (!this.completedTasks || !this.totalTasks) {
      return 0;
    }
    return (this.completedTasks / this.totalTasks) * 100;
  }

  getButtonLabel(status: string) {
    switch (status) {
      case 'active':
        return 'Continue';
      case 'pending':
        return 'Start Quest';
      case 'failed':
        return 'Retry';
      case 'success':
        return 'Completed';
      default:
        return 'Open';
    }
  }
}
