import { Component, Input, OnInit } from '@angular/core';
import { IonToolbar, IonButtons, IonTitle, IonMenuButton, IonIcon, IonHeader } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';


@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss'],
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle],
})
export class HeaderToolbarComponent  implements OnInit {
  @Input() totalPoints: number = 0;
  @Input() toolbarTitle: string = '';
  @Input() isDisplayPoint: boolean = false; 

  constructor() { }

  ngOnInit() {}

}
