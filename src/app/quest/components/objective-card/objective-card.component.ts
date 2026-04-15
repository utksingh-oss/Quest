import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonButton, IonCheckbox } from '@ionic/angular/standalone';
import { UpperCasePipe } from '@angular/common';
import { NgClass } from '@angular/common';
import { Objective } from '../../models/objective.model';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-objective-card',
  templateUrl: './objective-card.component.html',
  styleUrls: ['./objective-card.component.scss'],
  imports: [IonCheckbox, IonButton, IonCard, UpperCasePipe, NgClass],
})
export class ObjectiveCardComponent implements OnInit {
  @Input() objective: any;
  
  onComplete(objective: Objective) {
    console.log('Objective completed:', this.objective);
  }

  constructor() {}
  
  ngOnInit() {}
}
