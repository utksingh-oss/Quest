import { Component, OnInit } from '@angular/core';
import { IonCol, IonCard, IonItem, IonAvatar, IonLabel, IonCardContent, IonGrid, IonRow, IonProgressBar } from "@ionic/angular/standalone"; 


@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss'],
  imports: [IonCard, IonItem, IonAvatar, IonCard, IonLabel, IonCard, IonGrid, IonRow, IonCardContent, IonCol, IonProgressBar],
})
export class PlayerStatsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
