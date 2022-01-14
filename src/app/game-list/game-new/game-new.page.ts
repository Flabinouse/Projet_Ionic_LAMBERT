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
  public verifPost : boolean = false;

  constructor(
    private Game: GameService,
    private router: Router,
    private toastCtrl: ToastController
  ) { }


  ngOnInit(): void {
    this.game = new Game();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Ajout effectué',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/tab/game-list']);
      }, 2000)
    });
  }

  async ErrorToast() {
    const toast = this.toastCtrl.create({
      message: 'Veuillez saisir tous les champs',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
      }, 2000)
    });
  }

  add(): void {
    this.verifPost = true;
    if(this.game.cover === '' || this.game.platform === '' || this.game.name === '' || this.game.genre === '' || this.game.editor === '' || this.game.releaseDate === '' || this.game.description === '' || this.game.age === '') {
      this.ErrorToast();
    } else {
      this.Game.saveNewGame(this.game).subscribe(() => {
        this.game = new Game();
        this.presentToast();
        this.router.navigate(['/tab/game-list']);
      });
    }
  }
}
