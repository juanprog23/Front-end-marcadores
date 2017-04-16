import { Injectable } from '@angular/core';
import { Http, Response, Headers, JsonpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { FavoritoModel } from '../models/FavoritoModel';


@Injectable()
export class FavoritosService {

  public url: String;

  constructor(public _http:Http ) {

    //Se carga URL que se usara como proveedor REST
    //URL's REST server charged to be used
    this.url = 'http://localhost:8000/service/';

  };

  public getFavoritos(){
    //Se hace una peticion de busqueda general al servidor REST y se retorna la respuesta recibida
    //Service make a request of general search to REST server and then, return the response
    return this._http.get(this.url + 'favoritos').map( res => res.json() );

  };

  getFavorito(id:String){
    //Se hace una consulta al servidor REST enviando una ID como parámetro
    //Service make a request to REST server with an ID as a parameter
    return this._http.get(this.url + 'favorito/' + id).map( res => res.json() );
  }

  addFavorito(info){
    //Se envia informacion al servidor para agregar un elemento, el elemento se envia como JSON
    //Info is sent to server in order to add an item. item must be sent as a JSON object
    let params = JSON.stringify(info); //Se parsea el elemtno a JSON / Item is parsed into a JSON object
    let header = new Headers({'Content-Type':'application/json'}); //Se cargan header para operaciones de escritura y sobre-escritura / Headers are charged for write and over write operations

    //Se envia petición para agregar elementos al servidor con los parametros en JSON // Request for adding a item is sent with params as JSON Object
    return this._http.post(this.url + 'favorito', params, {headers: header}).map( res => res.json() );
  }

  updateFavorito(info, id){
    //Se envia informacion al servidor para agregar un elemento, el elemento se envia como JSON
    //Info is sent to server in order to add an item. item must be sent as a JSON object
    let params = JSON.stringify(info); //Se parsea el elemtno a JSON / Item is parsed into a JSON object
    let header = new Headers({'Content-Type':'application/json'}); //Se cargan header para operaciones de escritura y sobre-escritura / Headers are charged for write and over write operations
    //Se envia el objeto modificado y un ID de referencia para seobre-escribir la información de un objeto
    //Service make a request to the server for modify an item, an JSON with new info must be sent as a parameter
    return this._http.put(this.url + 'favorito/' + id, params, {headers:header}).map( res => res.json() );
  }

  deleteFavorito(id){
    //Se envia una petición de borrado
    //Deletion request is sent to server
    return this._http.delete(this.url + 'favorito/' + id).map( res => res.json());
  }

}
