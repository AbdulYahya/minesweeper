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

  resetGrid() {
    // $ref is just a Firebase property that represents a specific location (this.players or database.list('board')) in your DB
    // this allows us to read/write data to that DB location

    // orderByKey() just sorts (ascending) our query by $key
    // child_added is one of the predefined Firebase event type (5 total: value, child_added, child_removed, child_changed, and child_moved)
    this.players.$ref.orderByKey().on("child_added", (gridBox) => {
      // gridBox is just each individual board 'child' (r0c0...r3c3)
      this.players.update(gridBox, { action: 0 });
      console.log(gridBox.val());
    });
  }
}
