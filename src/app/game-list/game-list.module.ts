import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameListPageRoutingModule } from './game-list-routing.module';

import { GameListPage } from './game-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameListPageRoutingModule
  ],
  declarations: [GameListPage]
})
export class GameListPageModule {}
