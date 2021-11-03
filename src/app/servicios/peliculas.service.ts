import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http: HttpClient) { }

  getPeliculas(): Observable<any> {
    return this.http.get("https://colavellabackend.herokuapp.com/peliculas");
  }

  deletePelicula(): Observable<any> {
    return this.http.delete("https://colavellabackend.herokuapp.com/eliminarpelicula")
  }

  
}