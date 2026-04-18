import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAccordionGroup, IonAccordion, IonItem, IonIcon } from '@ionic/angular/standalone';
import { HeaderToolbarComponent } from "src/app/common/header-toolbar/header-toolbar.component";
import { Rule } from '../../models/rule.model';
import { MOCK_RULES } from '../../models/mockData/mock-rules';


@Component({
  selector: 'app-rules',
  templateUrl: './rules.page.html',
  styleUrls: ['./rules.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItem, IonAccordion, IonAccordionGroup, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderToolbarComponent]
})
export class RulesPage implements OnInit {
  rules: Rule[] = MOCK_RULES;

  constructor() { }

  ngOnInit() {
  }

}
