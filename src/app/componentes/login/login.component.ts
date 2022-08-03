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
  
  
  
  constructor( public userService: UsuariosService, public router: Router, public autorizacionService : AutorizacionService) {}

    validate(nombre : string, password : string){
      let regexNew = new RegExp('^(?=.{4,20}$)(?![.])(?!.*[.]{2})[a-zA-Z0-9.]+(?<![.])$')
      return (regexNew.test(nombre))&&(regexNew.test(password));
    }

    login(){
      const user = {nombre: this.nombre, contrasena: this.password};
      if(this.validate(this.nombre!, this.password!)){
        this.userService.login(user).subscribe( data => {
        }, err => {
          if(err.error.text == "Bienvenido"){
            this.autorizacionService.setLogin(err.error.text);
            this.router.navigateByUrl('/peliculas');
          }else{
            alert("Datos incorrectos");
            this.clear();
          }
        });
      }else{
        alert("Datos incorrectos");
        this.clear();
      }
    }
    clear(){
      this.nombre = "";
      this.password = "";
    }

  
  ngOnInit(): void {
    if(this.autorizacionService.getToken()){
      this.router.navigateByUrl('/peliculas');
    }
  }

}

