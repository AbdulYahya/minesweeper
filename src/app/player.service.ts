import { Injectable } from '@angular/core';
import { Grid } from './grid.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase){
    this.players = database.list('board');
  }

  getPlayer() {
    return this.players;
  }
  getBoxById(boxId: string) {
  return this.database.object('board/'+ boxId)
}
  updateBox(player) {
    var boxEntryInFirebase = this.getBoxById(player.$key);
    boxEntryInFirebase.update({action: player.action});
  }

}
