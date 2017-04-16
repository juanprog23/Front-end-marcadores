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

    //Se usa el modelo para poder trabajar y manipularlo
    //MOdle is used for show and modify information
    this.favorito = new FavoritoModel("","","","");

    this.title = "Details";

    //Es un auxliar para poder modificar elementos de la vista, se modifica dependiendo de lo que se pretenda hacer.
    //This is an aux var wich helps to modify elements in the view. Is modified depending on the tasks the the user wants to do
    this.editable = false;
  }

  ngOnInit() {

    //Se ejecuta esta tarea de inicio para obtener un elemento específico y cargarlo en el inicio
    //This function charges a specific item in the start of the view to be shown
    this.getFavorito();

  }

  getFavorito(){

    this._route.params.forEach( (params: Params) => {

      let id = params['id'];

      //El servicio carga un elemento específico mediante un ID
      //This services charges an specific item by using an id

      this._favoritoService.getFavorito(id).subscribe(
        result => {
          if(result.favorito){
            //Si se encuantra el elemento, es guardado en el modelo
            //If item exists, is saved into the model
            this.favorito = result.favorito;
          }else{
            //Si no existe se redirecciona a la home page
            //If does not exist, user is redirected to the home page
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
    //EL servicio actualiza un elemento, se manda un id y un objeto actualizado como parametros
    //Service updates an item. An id and a object with new info are sent as parameter
    this._favoritoService.updateFavorito(this.favorito, this.favorito._id).subscribe(

      result => {
        //Si la respuesta es correcta, se recarga el elemento y se regresa el auxiliar a falso
        //If response is correct, item get a refresh and aux var is turned to false
        if(result.favoritoUpdated){
          this.getFavorito();
          //alert('Saved');
          this.editable = false;
        } else{

          //Si ocurre un error se envia una alerta
          //If error happens, an alert is sent
          alert('Error during adding');
        }
      },

      error => {
        if(error){
          //Si ocurre un error se envia una alerta
          //If error happens, an alert is sent
          alert('Error in server');
        }
      }

    );

  };

  activeEditor(){
    //Esta función cambia el valor de la variable auxiliar dependiendo de lo que el usuario pretenda hacer

    //This function changes the value of the aux depending on what the user pretends to do

    if (this.editable == false){
      this.editable = true;
    }else{
      this.editable = false;
    }
  };

  //Esta función llana al servicio de borrar elemento y le envia un id
  //This function calls to deletion service and sends an id as parameter
  deleteFavorito(){
    this._favoritoService.deleteFavorito(this.favorito._id).subscribe(
      result => {

        if(result){
          //Si es correcto envia un alert indicando que fue eliminado y redirige a home page
          //If works well, alert is sent showing success and redirects to home page
          alert('Deleted!');
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
