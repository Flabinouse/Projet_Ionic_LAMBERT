import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.page.html',
  styleUrls: ['./game-list.page.scss'],
})
export class GameListPage implements OnInit {

  games!: any;

  constructor(
    private Game: GameService
  ) { }

  ngOnInit(): void {
    this.Game.getAllGames().subscribe((data : any ) => {
      this.games = data;
    });
  }

}
