import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { Quest } from '../models/quest.model';
import { QuestService } from './quest-service';

@Injectable({ providedIn: 'root' })
export class TaskService {
  constructor(private questService: QuestService) {}

  addTaskToQuest(questId: string, task: Task) {
    const quest = this.questService.getQuestById(questId);
    if (!quest) throw new Error('Quest not found');

    const order = this.getNextOrder(questId);
    const newTask = this.createTask(task, null, order);

    quest.tasks.push(newTask);
  }

  addSubTaskToTask(parentTaskId: string, task: Task) {
    const quest = this.findQuestByTaskId(parentTaskId);
    if (!quest) throw new Error('Parent task not found');

    const order = this.getNextOrder(parentTaskId);
    const newTask = this.createTask(task, parentTaskId, order);

    quest.tasks.push(newTask);
  }

  private createTask(task: Task, parentId: string | null, order: number): Task {
    return {
      ...task,
      position: { parentId, order },
    };
  }

  private getNextOrder(parentId: string | null): number {
    const allTasks = this.questService.quests
      .map((q) => q.tasks)
      .reduce((acc, curr) => acc.concat(curr), []);
    return allTasks.filter((t) => t.position.parentId === parentId).length;
  }

  private findQuestByTaskId(taskId: string): Quest | null {
    return (
      this.questService.quests.find((q) =>
        q.tasks.some((t) => t.id === taskId),
      ) || null
    );
  }
}
