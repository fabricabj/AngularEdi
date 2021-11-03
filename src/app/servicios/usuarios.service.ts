import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs' ;

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    const formData = new FormData();
    formData.append('nombre', user.nombre);
    formData.append('contrasena', user.contrasena);

    return this.http.post("https://colavellabackend.herokuapp.com/login/", formData);
  }

  registro(user : any): Observable<any> {
    const formData = new FormData();
    formData.append('nombre', user.nombre);
    formData.append('contrasena', user.contrasena);

    return this.http.post("https://colavellabackend.herokuapp.com/", formData)
  }

  
}
