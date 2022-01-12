import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameListPage } from './game-list.page';

const routes: Routes = [
  {
    path: '',
    component: GameListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./game-new/game-new.module').then( m => m.GameNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./game/game.module').then( m => m.GamePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameListPageRoutingModule {}
