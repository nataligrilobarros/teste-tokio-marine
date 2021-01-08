import { Injectable } from '@angular/core';
import { API } from '../api/app.api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlApi = API;

  constructor(private http: HttpClient) { }

  listaTodosUsuarios(): Observable <any> {
    return this.http.get(`${this.urlApi}`);
  }

  buscarDetalhesUsuario(id:number): Observable <any> {
    return this.http.get(`${this.urlApi}/${id}`);
  }

}
