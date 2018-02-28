import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';

const appRoutes: Routes = [
  {
     path: '',
     component: GridComponent
   }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
