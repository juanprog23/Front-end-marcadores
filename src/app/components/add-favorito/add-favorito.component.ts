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
                this.favorito = new FavoritoModel("","","","");
               }

  ngOnInit() {
  }

  onSubmit(){

    this._favoritoService.addFavorito(this.favorito).subscribe(
      result =>{
        if(result){
          //alert(JSON.stringify(result));
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
