import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  modif: boolean = false;
  game: any = null;

  constructor(
    private alertCtrl : AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private Game: GameService,
    private toastCtrl: ToastController
  ) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.Game.get(id).subscribe((value: any) => {
      this.game = value;
    });
  }

  async setModif() { 
    if(!this.modif) {
      const alert = await this.alertCtrl.create({
        header: 'Modification',
        message: 'Voulez-vous modifier le jeu ?',
        buttons: [
          {
            text: 'Non',
            role: 'cancel',
          },
          {
            text: 'Oui',
            handler: () => {
              this.modif = !this.modif;
            }
          }
        ]
    });
    await alert.present();

    } else {
      this.modif = !this.modif;
    }
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Modification effectuée',
      duration: 2000
    });
    (await toast).present();
  }

  onModif() {
    this.Game.update(this.game).subscribe(() => {
      this.presentToast();
      this.modif = false;
    });
  }

  onDelete(id: any) {
    this.Game.delete(id);
    this.router.navigate(['/tab/game-list']);
  }
}
