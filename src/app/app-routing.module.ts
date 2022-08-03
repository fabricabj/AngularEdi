import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: "", component: LoginComponent, pathMatch:"full"},
  {path: "peliculas", component: PeliculasComponent, canActivate: [AuthGuard], pathMatch:"full"},
  {path: "login", component: LoginComponent, pathMatch:"full"},
  {path: "registrarse", component: RegistrarComponent, pathMatch:"full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
