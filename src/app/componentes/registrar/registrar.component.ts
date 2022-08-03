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
  

  constructor( public userService: UsuariosService, public router: Router, public autorizacionService : AutorizacionService ) { }

  validate(nombre : string, password : string){
    let regexNew = new RegExp('^(?=.{4,20}$)(?![.])(?!.*[.]{2})[a-zA-Z0-9.]+(?<![.])$')
    return (regexNew.test(nombre))&&(regexNew.test(password));
  }


  registro(){
    const user = {nombre: this.nombre, contrasena: this.password};
    if(this.validate(this.nombre!, this.password!)){
      this.userService.registro(user).subscribe( data => {
        console.log(data);
        if(data){
          alert("Usuario generado con exito");
          this.router.navigateByUrl('/login');
        }else{
          alert("Hubo un error al generar el usuario");
          window.location.reload();
        }
      });
  }else{
    alert("No se admiten (_ .) al principio y al final, tampoco caracteres especiales");
  }
}

  ngOnInit(): void {
  }

}
