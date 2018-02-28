import { Injectable } from '@angular/core';
import { Grid } from './grid.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase){
    this.players = database.list('players');
  }

  getPlayer() {
    return this.players;
  }

}
