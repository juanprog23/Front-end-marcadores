import { Injectable } from '@angular/core';
import { Http, Response, Headers, JsonpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { FavoritoModel } from '../models/FavoritoModel';


@Injectable()
export class FavoritosService {

  public url: String;

  constructor(public _http:Http ) {

    this.url = 'http://localhost:8000/service/';

  };

  public getFavoritos(){

    return this._http.get(this.url + 'favoritos').map( res => res.json() );

  };

  getFavorito(id:String){
    return this._http.get(this.url + 'favorito/' + id).map( res => res.json() );
  }

  addFavorito(info){
    let params = JSON.stringify(info);
    let header = new Headers({'Content-Type':'application/json'});
    return this._http.post(this.url + 'favorito', params, {headers: header}).map( res => res.json() );
  }

  updateFavorito(info, id){
    let params = JSON.stringify(info);
    let header = new Headers({'Content-Type':'application/json'});

    return this._http.put(this.url + 'favorito/' + id, params, {headers:header}).map( res => res.json() );
  }

  deleteFavorito(id){
    return this._http.delete(this.url + 'favorito/' + id).map( res => res.json());
  }

}
