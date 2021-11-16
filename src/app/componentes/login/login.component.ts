import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutorizacionService } from 'src/app/servicios/autorizacion.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre: string | undefined;
  password: string| undefined;
  
  respuestaRe: string | undefined;
  
  
  constructor( public userService: UsuariosService, public router: Router, public autorizacionService : AutorizacionService) {}

    login(){
      const user = {nombre: this.nombre, contrasena: this.password};
      this.userService.login(user).subscribe( data => {
        console.log("Bienvenido ok")
      }, err => {
        if(err.error.text == "Bienvenido"){
          this.autorizacionService.setLogin(err.error.text);
          this.router.navigateByUrl('/peliculas');
        }else{
          this.router.navigateByUrl('/login');
        }
      });
    }

  
  ngOnInit(): void {
  }

}

