import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FavoritosService } from '../../services/favoritos.service'
import { FavoritoModel } from '../../models/FavoritoModel';

@Component({
  selector: 'app-add-favorito',
  templateUrl: './add-favorito.component.html',
  styleUrls: ['./add-favorito.component.css'],
  providers: [FavoritosService],
})
export class AddFavoritoComponent implements OnInit {

  favorito : FavoritoModel;

  constructor(private _favoritoService : FavoritosService,
              private _router:Router,
              private _route: ActivatedRoute) {

                //Se crea un modelo vacio y se reemplaza con la informacion que envian los formularios
                //An empty model is generated y its information is replaced with the info that the forms sends
                this.favorito = new FavoritoModel("","","","");
               }

  ngOnInit() {
  }

  onSubmit(){

//CUando se hace submit se envía el elemento modificado como un parametro para crear un elemento
//When user submits, the modified model is sent as a parameter to create a new item
    this._favoritoService.addFavorito(this.favorito).subscribe(
      result =>{
        if(result){
          //SI resulta bien, se redirecciona a la página de detalles del elemento
          //If works well, user is redirected to the deatil page of the item
          this._router.navigate(['favorito/',result._id]);
          alert('Saved');
        }else{
          alert('Error adding');
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
