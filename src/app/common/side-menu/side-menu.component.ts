import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu } from "@ionic/angular/standalone";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  imports: [IonMenu, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class SideMenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
