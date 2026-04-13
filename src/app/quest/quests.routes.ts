import { Routes } from "@angular/router";
import { HomePage } from "./pages/home/home.page";
import { RulesPage } from "./pages/rules/rules.page";
import { QuestsPage } from "./pages/quests/quests.page";
import { ShopPage } from "./pages/shop/shop.page";
import { TabsPage } from "./pages/tabs/tabs.page";



export const QUEST_ROUTES: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'home',
                component: HomePage
            },
            {
                path: 'rules',
                component: RulesPage
            },
            {
                path: 'quests',
                component: QuestsPage
            },
            {
                path: 'shop',
                component: ShopPage
            }
        ]
    }
];