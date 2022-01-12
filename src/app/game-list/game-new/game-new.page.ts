import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { GameService } from 'src/app/game.service';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-game-new',
  templateUrl: './game-new.page.html',
  styleUrls: ['./game-new.page.scss'],
})
export class GameNewPage implements OnInit {

  public game!: Game

  constructor(
    private Game: GameService,
    private router: Router,
    private toastCtrl: ToastController
  ) { }


  ngOnInit() {
    this.game = new Game();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Ajout effectué',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/game-list']);
      }, 2000)
    });
  }

  add() {
    this.Game.saveNewGame(this.game).subscribe(() => {
      this.game = new Game();
      this.presentToast();
    });
  }
}
