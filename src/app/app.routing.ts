
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { AddFavoritoComponent } from './components/add-favorito/add-favorito.component';
import { DetailFavoritoComponent } from './components/detail-favorito/detail-favorito.component';

const appRoutes : Routes = [

  {path : '', component : FavoritosComponent},
  {path : 'favoritos', component : FavoritosComponent},
  {path : 'addfavorito', component : AddFavoritoComponent},
  {path : 'favorito/:id', component : DetailFavoritoComponent},
  {path : '**', component : FavoritosComponent},

];

export const appRoutingProviders:any = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
