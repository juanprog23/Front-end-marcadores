import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';

//RUTAS
import { appRoutingProviders, routing } from './app.routing';
//

///COMPONENTES
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { AddFavoritoComponent } from './components/add-favorito/add-favorito.component';
import { DetailFavoritoComponent } from './components/detail-favorito/detail-favorito.component';
//////////

///SERVICIOS
import { FavoritosService } from './services/favoritos.service';
/////////////////////////


@NgModule({
  declarations: [
    AppComponent,
    FavoritosComponent,
    AddFavoritoComponent,
    DetailFavoritoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
