import { Component, OnInit } from '@angular/core';
import { IonSegment, IonSegmentButton, IonLabel, IonChip } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  imports: [IonChip, IonLabel, IonSegmentButton, IonSegment, FormsModule],
  styleUrls: ['./status-filter.component.scss'],
})
export class StatusFilterComponent  implements OnInit {
  filteredList = [];
  originalList = [];
  selectedStatus: string = 'all';
  selectedDifficulty: string = 'all';
  difficulties: string[] = ['all', 'easy', 'medium', 'hard', 'epic'];

  constructor() { }

  ngOnInit() {}

  selectDifficulty(difficulty: string): void {
    this.selectedDifficulty = difficulty;
    return;
  }

  applyFilters() {
    console.log('selected status: ' + this.selectedStatus);
    console.log('selected difficulty: ' + this.selectedDifficulty);
  }
}
