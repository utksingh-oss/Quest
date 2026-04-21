import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonContent } from '@ionic/angular/standalone';
import { HeaderToolbarComponent } from "src/app/common/header-toolbar/header-toolbar.component";
import { RewardItem } from '../../models/reward-items.model';
import { MOCK_REWARD_ITEMS } from '../../models/mockData/mock-reward-items';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderToolbarComponent]
})
export class ShopPage implements OnInit {
  rewardItems: RewardItem[] = MOCK_REWARD_ITEMS;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async openBuyConfirmation(item: RewardItem) {
    const alert = await this.alertController.create({
      header: 'Confirm Purchase',
      message: `Spend ${item.price} coins on ${item.name}?`,
      cssClass: ['shop-alert', 'shop-buy-alert'],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          id: 'shop-alert-cancel-btn',
          cssClass: 'shop-alert-cancel',
        },
        {
          text: 'Buy',
          role: 'confirm',
          id: 'shop-alert-buy-btn',
          cssClass: 'shop-alert-confirm',
          handler: () => {
            console.log('Purchased reward item:', item);
          },
        },
      ],
    });

    await alert.present();
  }

  async openItemInfo(item: RewardItem) {
    const alert = await this.alertController.create({
      header: item.name,
      subHeader: `${item.price} coins`,
      message: item.description,
      cssClass: ['shop-alert', 'shop-info-alert'],
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          id: 'shop-alert-close-btn',
          cssClass: 'shop-alert-confirm',
        },
      ],
    });

    await alert.present();
  }

}
