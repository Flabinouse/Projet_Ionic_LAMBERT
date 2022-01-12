import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameNewPageRoutingModule } from './game-new-routing.module';

import { GameNewPage } from './game-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameNewPageRoutingModule
  ],
  declarations: [GameNewPage]
})
export class GameNewPageModule {}
