import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { HeaderComponent } from './componentes/header/header.component';

const routes: Routes = [
  {path: "home", redirectTo: ""},
  {path: "login", component: LoginComponent, pathMatch:"full"},
  {path: "registro", redirectTo: '/login'},
  {path: "**", redirectTo: '/404'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
