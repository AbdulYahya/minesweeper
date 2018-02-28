import { Injectable } from '@angular/core';
import { Grid } from './grid.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GridService {
  grids: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase){
    this.grids = database.list('grids');
  }

  getGrid() {
    return this.grids;
  }

}
