import { DoBootstrap, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Game } from './models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private dbPath = '/game';
  gameRef: AngularFirestoreCollection<Game>;

  constructor(
    private db: AngularFirestore
  ) {
    this.gameRef = db.collection(this.dbPath);
  }

  getAllGames(): any {
    return this.gameRef.snapshotChanges().pipe(
      map((changes: any) => changes.map((doc: any) => ({id: doc.payload.doc.id, ...doc.payload.doc.data()})))
    );
  }

  saveNewGame(game: Game): any {
    return new Observable(obs => {
      this.gameRef.add({...game}).then(() => {
        obs.next();
      });
    });
  }

  get(id: any): any {
    return new Observable(obs => {
      this.gameRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(game: Game) {
    return new Observable(obs => {
      this.gameRef.doc(game.id).update(game);
      obs.next();
    });
  }

  delete(id: any) {
    this.gameRef.doc(id).delete();
  }
}
