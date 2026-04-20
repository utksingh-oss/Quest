import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader } from '@ionic/angular/standalone';
import { HeaderToolbarComponent } from 'src/app/common/header-toolbar/header-toolbar.component';
import { PlayerStatsComponent } from "../../components/player-stats/player-stats.component";
import { Objective } from '../../models/objective.model';
import { MOCK_OBJECTIVES } from '../../models/mockData/mock-objectives';
import { ObjectiveCardComponent } from '../../components/objective-card/objective-card.component';
import { StatusFilterComponent } from "../../components/status-filter/status-filter.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, CommonModule, FormsModule, HeaderToolbarComponent, PlayerStatsComponent, ObjectiveCardComponent, StatusFilterComponent]
})
export class HomePage implements OnInit {
  objectives: Objective[] = MOCK_OBJECTIVES;

  constructor() { }

  ngOnInit() {
  }

}
