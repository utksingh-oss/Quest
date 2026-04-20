import { Component, Input, OnInit } from '@angular/core';
import { CheckboxCustomEvent, IonCard, IonCheckbox } from '@ionic/angular/standalone';
import { UpperCasePipe } from '@angular/common';
import { NgClass } from '@angular/common';
import { Objective } from '../../models/objective.model';

@Component({
  selector: 'app-objective-card',
  templateUrl: './objective-card.component.html',
  styleUrls: ['./objective-card.component.scss'],
  imports: [IonCheckbox, IonCard, UpperCasePipe, NgClass],
})
export class ObjectiveCardComponent implements OnInit {
  @Input() objective!: Objective;
  showRewardPop = false;
  private rewardPopTimer?: ReturnType<typeof setTimeout>;

  onComplete(event: CheckboxCustomEvent) {
    const isCompleted = event.detail.checked;
    this.objective.completed = isCompleted;

    if (isCompleted) {
      this.showRewardPop = false;
      clearTimeout(this.rewardPopTimer);

      requestAnimationFrame(() => {
        this.showRewardPop = true;
        this.rewardPopTimer = setTimeout(() => {
          this.showRewardPop = false;
        }, 650);
      });
    } else {
      this.showRewardPop = false;
      clearTimeout(this.rewardPopTimer);
    }
  }

  constructor() {}
  
  ngOnInit() {}
}
