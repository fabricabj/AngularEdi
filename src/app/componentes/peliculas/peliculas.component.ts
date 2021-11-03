import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas: Array<any> = [];
  confirm: number | undefined; 

  constructor(public peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.getPeliculas().subscribe(data => {
      console.log(data)
      this.peliculas = data;
    }); 
  }

  onDeleteProducto(id: number) {
    this.peliculasService.getPeliculas().subscribe(data => {
      console.log(data)
      this.peliculas = data;
    }); 
  }

  cancelConfirm(id: number) {
    this.confirm = undefined;
  }

  borrarConfirm(id: number){
    console.log(id)
    this.confirm = id;
  }

}
