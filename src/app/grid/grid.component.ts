import { Component, OnInit } from '@angular/core';
import { GridService } from '../grid.service';
import { Grid } from '../grid.model';
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

  ngOnInit() {
    this.grids = this.gridService.getGrid();
    this.players = this.playerService.getPlayer();
    console.log(this.grids);
  }

  updateBox(player) {
    player.action += 1;
    this.playerService.updateBox(player);
    // console.log(player);
    // console.log(player.$key);
    console.log(player.$key);
    // console.log(box);
  }

}
