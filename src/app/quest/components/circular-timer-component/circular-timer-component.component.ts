import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  IonButton,
  IonCardContent,
  IonCard,
  IonIcon,
} from '@ionic/angular/standalone';
import {
  playOutline,
  pauseOutline, 
  refreshOutline
} from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-circular-timer-component',
  templateUrl: './circular-timer-component.component.html',
  styleUrls: ['./circular-timer-component.component.scss'],
  imports: [IonIcon, IonButton, IonCardContent, IonCard, IonButton],
})
export class CircularTimerComponentComponent implements OnInit, OnDestroy {
  @Input() duration: number = 300; // seconds (default 5 minutes)

  timeLeft!: number;
  displayTime = '05:00';

  intervalId: any;

  radius = 70;
  circumference = 2 * Math.PI * this.radius;

  dashOffset = 0;

  constructor() {}

  ngOnInit() {
    this.reset();

    addIcons({
      playOutline,
      pauseOutline,
      refreshOutline
    });
  }

  start() {
    if (this.intervalId) {
      this.pause();
      return;
    }

    const endTime = Date.now() + this.timeLeft * 1000;

    this.intervalId = setInterval(() => {
      this.timeLeft = Math.max(0, Math.round((endTime - Date.now()) / 1000));
      this.updateDisplay();
      this.updateCircle();

      if (this.timeLeft === 0) {
        this.pause();
      }
    }, 100);
  }

  pause() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.pause();
    this.timeLeft = this.duration;
    this.updateDisplay();
    this.updateCircle();
  }

  updateDisplay() {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;

    this.displayTime = `${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  updateCircle() {
    const progress = this.timeLeft / this.duration;
    this.dashOffset = this.circumference * (1 - progress);
  }

  pad(value: number) {
    return value < 10 ? '0' + value : value;
  }

  ngOnDestroy() {
    this.pause();
  }
}
