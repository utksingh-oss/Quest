import { Component, Input, OnInit } from '@angular/core';
import { Quest, QuestType } from '../../models/quest.model';
import { NgClass } from '@angular/common';
import { MOCK_QUESTS } from '../../models/mockData/mock-quests';

@Component({
  selector: 'app-quest-card',
  templateUrl: './quest-card.component.html',
  styleUrls: ['./quest-card.component.scss'],
  imports: [NgClass],
})
export class QuestCardComponent implements OnInit {
  @Input() quest: Quest = MOCK_QUESTS[0];

  constructor() {}

  ngOnInit() {}

  private readonly questTypeImages: Record<QuestType, string> = {
    discipline: 'assets/images/scenery_1.jpg',
    learning: 'assets/images/scenery_2.jpg',
    fitness: 'assets/images/scenery_2.jpg',
    focus: 'assets/images/scenery_1.jpg',
  };

  get questBackgroundImage() {
    const imageUrl = this.questTypeImages[this.quest.type] || this.quest.imageUrl;
    return `url("${imageUrl}")`;
  }

  get completedTasks() {
    return this.quest?.tasks.filter((t) => t.isCompleted).length;
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
