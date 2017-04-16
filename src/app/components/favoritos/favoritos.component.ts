import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritosService } from '../../services/favoritos.service';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
  providers: [ FavoritosService ]
})
export class FavoritosComponent implements OnInit {

  //Se crea un objeto favoritos para guardar los resultados
  //An object favoritos is created for saving the results
  favoritos: any;

  constructor(private _favoritoService: FavoritosService,
              public _router:Router,) { }

  ngOnInit() {

      //Se ejecuta la operacion on Init para que los elementos a mostrar puedan ser cargados desde el inicio
      //The function is executed onInit in order to show the items from the beginning
      this.getFavoritos();

  }
//La funcion usa servicios para recuperar todos los items
//Function use services for recover all items
  getFavoritos(){
    this._favoritoService.getFavoritos().subscribe(
      result => {
        //Si hay respuesta favorable los guarda en la variable favoritos
        //If the response is correct, is saved in the var favoritos
        this.favoritos = result.favoritos;
      },
      error => {
        if(error){
          //Si hay un error lo muestra
          //If a error happens, is displayed
          alert('Ocurrió error');
          console.log(error);
        }
      }
    );
  }
//La funcion elimina un elemento cuando es llamada
//Function deletes an item when is called
  deleteFavorito(id){

this._favoritoService.deleteFavorito(id).subscribe(
      result => {
        if(result){
          //Si se ejecuta correctamente, se refresca la lista de elementos para mostrarla actualizada
          //If the request is executed, item's list get a refresh in order to show it updated
          this.favoritos = this.getFavoritos();
        }
        else{
          //SI ocurre un eror se manda alerta
          //If error happens, alert is displayed
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
