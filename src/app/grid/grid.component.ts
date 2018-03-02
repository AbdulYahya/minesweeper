import { Component, OnInit } from '@angular/core';
import { GridService } from '../grid.service';
import { Grid } from '../grid.model';
import { NgIf } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [GridService, PlayerService]
})
export class GridComponent implements OnInit {
  grids: FirebaseListObservable<any[]>;
  players: FirebaseListObservable<any[]>;

  constructor(private gridService: GridService, private playerService: PlayerService ) { }

  ngOnInit() { this.players = this.playerService.getPlayer(); }

  updateBox(player) {
    console.log(player);
    player.action += 1;
    this.playerService.updateBox(player);
    if(player.value == "X") {
      alert("you lost");
    }
  }

  resetGrid() {
    this.playerService.resetGrid();
  }

  // resetGrid(player){
  //   console.log(player);
  //   player.action = 0;
  //   this.playerService.updateBox(player);
  // }

}
