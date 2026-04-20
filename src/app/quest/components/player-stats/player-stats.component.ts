import { Component, OnInit } from '@angular/core';
import { IonCol, IonCard, IonAvatar, IonGrid, IonRow, IonProgressBar } from "@ionic/angular/standalone"; 


@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss'],
  imports: [IonCard, IonAvatar, IonGrid, IonRow, IonCol, IonProgressBar],
})
export class PlayerStatsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
