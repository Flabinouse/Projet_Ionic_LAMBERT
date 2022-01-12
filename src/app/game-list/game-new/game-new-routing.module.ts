import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameNewPage } from './game-new.page';

const routes: Routes = [
  {
    path: '',
    component: GameNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameNewPageRoutingModule {}
