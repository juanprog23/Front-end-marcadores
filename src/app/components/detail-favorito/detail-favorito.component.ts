import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FavoritosService } from '../../services/favoritos.service'
import { FavoritoModel } from '../../models/FavoritoModel';

@Component({
  selector: 'app-detail-favorito',
  templateUrl: './detail-favorito.component.html',
  styleUrls: ['./detail-favorito.component.css'],
  providers: [FavoritosService],
})
export class DetailFavoritoComponent implements OnInit {

  favorito: any;
  editable: boolean;
  title: String;

  constructor(private _favoritoService : FavoritosService,
  private _router: Router,
  private _route: ActivatedRoute) {
    this.favorito = new FavoritoModel("","","","");
    this.title = "Details";
  }

  ngOnInit() {

    this.getFavorito();
    this.editable = false;
  }

  getFavorito(){

    this._route.params.forEach( (params: Params) => {

      let id = params['id'];

      this._favoritoService.getFavorito(id).subscribe(
        result => {
          if(result.favorito){
            this.favorito = result.favorito;
          }else{
            alert('Marcador no existe');
            this._router.navigate(['/']);
          }
        },

        error => {

          if(error){
            alert('Marcador no existe');
            this._router.navigate(['/']);
          }

        }
      );

    }

    );
  }

  updateFavorito(){

    this._favoritoService.updateFavorito(this.favorito, this.favorito._id).subscribe(

      result => {

        if(result.favoritoUpdated){
          this.getFavorito();
          //alert('Saved');
          this.editable = false;
        } else{
          alert('Error during adding');
        }
      },

      error => {
        if(error){
          alert('Error in server');
        }
      }

    );

  };

  activeEditor(){
    if (this.editable == false){
      this.editable = true;
    }else{
      this.editable = false;
    }
  };

  deleteFavorito(){
    this._favoritoService.deleteFavorito(this.favorito._id).subscribe(
      result => {

        if(result){
          //alert('Deleted!');
          this._router.navigate(['/']);
        }else{
          alert('Error deleting')
        }

      },

      error => {

        if(error){
          console.log(error);
        }

      },
    );
  }

}
