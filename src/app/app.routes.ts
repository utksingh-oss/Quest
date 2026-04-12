import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'quests',
    pathMatch: 'full'
  },
  {
    path: 'quests',
    loadChildren : () => 
      import('./quest/quests.routes').then(m => m.QUEST_ROUTES)
  }
];
