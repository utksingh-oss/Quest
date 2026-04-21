import { Injectable } from '@angular/core';
import { Quest } from '../models/quest.model';
import { MOCK_QUESTS } from '../models/mockData/mock-quests';

@Injectable({
  providedIn: 'root',
})
export class QuestService {
  quests: Quest[] = MOCK_QUESTS;

  getQuestById(id: string): Quest | null {
    const quest = this.quests.filter((q) => q.id === id);
    if (quest) {
      return quest[0];
    }
    return null;
  }
}
