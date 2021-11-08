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

  getPelicula(id:number): Observable<any> {
    const formData = new FormData();
    formData.append('id_pelicula', id.toString());
    return this.http.post("https://colavellabackend.herokuapp.com/FormModPelicula", formData);
  }

  deletePelicula(id: number): Observable<any> {
    const formData = new FormData();
    formData.append('id_pelicula', id.toString());
    return this.http.post(`https://colavellabackend.herokuapp.com/eliminarpelicula/`, formData);
  }

  editarPelicula(pelicula: any): Observable<any> {
    const formData = new FormData();
    formData.append('id_pelicula', pelicula.id_pelicula);
    formData.append('titulo', pelicula.titulo);
    formData.append('duracion', pelicula.duracion);
    formData.append('descripcion', pelicula.descripcion);
    formData.append('puntaje', pelicula.puntaje);
    formData.append('imagen', pelicula.imagen);
    formData.append('anio', pelicula.anio);
    formData.append('trailer', pelicula.trailer);

    return this.http.post(`https://colavellabackend.herokuapp.com/modificarpelicula`, formData);
  }

  
}