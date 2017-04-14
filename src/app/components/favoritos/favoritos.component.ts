import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritosService } from '../../services/favoritos.service'

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
  providers: [ FavoritosService ]
})
export class FavoritosComponent implements OnInit {

  favoritos:any;

  constructor(private _favoritoService: FavoritosService,
              public _router:Router) { }

  ngOnInit() {

      this.getFavoritos();

  }

  getFavoritos(){
    this._favoritoService.getFavoritos().subscribe(
      result => {
        this.favoritos = result.favoritos;
      },
      error => {
        if(error){
          alert('Ocurrió error');
          console.log(error);
        }
      }
    );
  }

  deleteFavorito(id){

this._favoritoService.deleteFavorito(id).subscribe(
      result => {
        if(result){
          //alert('Deleted');
          this.favoritos = this.getFavoritos();
        }
        else{
          alert('Can\'nt delete marker');
        }
      },

      error => {
        if(error){
          console.log(error);
          alert('Error');
        }
      },
    );
  }

}
