import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';

//RUTAS
//Routes
import { appRoutingProviders, routing } from './app.routing';
//

//COMPONENTES
//Components
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { AddFavoritoComponent } from './components/add-favorito/add-favorito.component';
import { DetailFavoritoComponent } from './components/detail-favorito/detail-favorito.component';
//////////

///SERVICIOS
//Services
import { FavoritosService } from './services/favoritos.service';
/////////////////////////


@NgModule({
  declarations: [
    AppComponent,
    //Se cargan todos los componentes con los que se van a trabajar
    //Components to be charged in order to work with it
    FavoritosComponent,
    AddFavoritoComponent,
    DetailFavoritoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //Se cargan los modulos de enrutamiento y el framwork CSS Materialize
    //Routing module and Materialize CSS Framework are charged
    routing,
    MaterializeModule
  ],
  providers: [
    //Se carga el modulo de rutas como un provider para que funja como una dependencia
    //Routes are charged as a provider to be used as a dependence
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
