import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutorizacionService } from 'src/app/servicios/autorizacion.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  nombre: string | undefined;
  password: string| undefined;
  
  respuestaRe: string | undefined;
  respuestaLogin: string | undefined;

  constructor( public userService: UsuariosService, public router: Router, public autorizacionService : AutorizacionService ) { }

  registro(){
    const user = {nombre: this.nombre, contrasena: this.password};
    console.log(user)
    this.userService.registro(user).subscribe( data => {
      if(data['success'] == true){
        this.respuestaRe = data['message'];
      }else{
        this.respuestaRe = data['message'];
      }
    });
  }

  ngOnInit(): void {
  }

}
