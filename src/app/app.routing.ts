
import { ModuleWithProviders } from '@angular/core'; //Permite utilizar este modulo como un Provider para inyectarlo como dependencia / This module allow this file to be handled as a dependence to be inyected
import { Routes, RouterModule } from '@angular/router'; // Modulos para enrutamiento   / Modules for routing

//Se cargan los modulos de los componentes a utilizar
//The moduelos of each component are charged

import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { AddFavoritoComponent } from './components/add-favorito/add-favorito.component';
import { DetailFavoritoComponent } from './components/detail-favorito/detail-favorito.component';

const appRoutes : Routes = [

  //Se cargan rutas y se vinculan los componentes
  //The routes are charged and are linked with the components

  {path : '', component : FavoritosComponent},
  {path : 'favoritos', component : FavoritosComponent},
  {path : 'addfavorito', component : AddFavoritoComponent},
  {path : 'favorito/:id', component : DetailFavoritoComponent},
  {path : '**', component : FavoritosComponent},

];

//Se exportan las rutas
//Routes to be exported

export const appRoutingProviders:any = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
