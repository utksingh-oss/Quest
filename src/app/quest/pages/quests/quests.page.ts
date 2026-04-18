import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderToolbarComponent } from "src/app/common/header-toolbar/header-toolbar.component";
import { CircularTimerComponentComponent } from "../../components/circular-timer-component/circular-timer-component.component";
import { Quest } from '../../models/quest.model';
import { MOCK_QUESTS } from '../../models/mockData/mock-quests';
import { QuestCardComponent } from "../../components/quest-card/quest-card.component";

@Component({
  selector: 'app-quests',
  templateUrl: './quests.page.html',
  styleUrls: ['./quests.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderToolbarComponent, CircularTimerComponentComponent, QuestCardComponent]
})
export class QuestsPage implements OnInit {
  quests: Quest[] = MOCK_QUESTS;

  constructor() { }

  ngOnInit() {
  }

}
