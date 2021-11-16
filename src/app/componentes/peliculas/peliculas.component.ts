import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas: Array<any> = [];

  editForm = this.fb.group({
    id_pelicula: [],
    titulo: [],
    duracion: [],
    descripcion: [],
    puntaje: [],
    imagen: [],
    anio: [],
    trailer: [],
  });

  constructor(public peliculasService: PeliculasService, private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.peliculasService.getPeliculas().subscribe(data => {
      this.peliculas = data;
    }); 
  }

  onDeletePelicula(id: number) {
    this.peliculasService.deletePelicula(id).subscribe( data => {
      console.log(data);
    });
    window.location.reload();
  }

  seleccionarPelicula(id:number) {
    this.peliculasService.getPelicula(id).subscribe( data => {
      this.updateForm(data[0])
    })
  }

  updateForm(pelicula: any): void {
    this.editForm.patchValue({
      id_pelicula: pelicula.id_pelicula,
      titulo: pelicula.titulo,
      duracion: pelicula.duracion,
      descripcion: pelicula.descripcion,
      puntaje: pelicula.puntaje,
      imagen: pelicula.imagen,
      anio: pelicula.anio,
      trailer: pelicula.trailer
    });
  }

  private createFromForm(): any {
    return {
      id_pelicula: this.editForm.get(['id_pelicula'])!.value,
      titulo: this.editForm.get(['titulo'])!.value,
      duracion: this.editForm.get(['duracion'])!.value,
      descripcion: this.editForm.get(['descripcion'])!.value,
      puntaje: this.editForm.get(['puntaje'])!.value,
      imagen: this.editForm.get(['imagen'])!.value,
      anio: this.editForm.get(['anio'])!.value,
      trailer: this.editForm.get(['trailer'])!.value,
    };
  }

  editarPelicula() {
    const pelicula = this.createFromForm();
    this.peliculasService.editarPelicula(pelicula).subscribe( data => {
      console.log(data);
    });
    window.location.reload();
  }

  altaPelicula() {
    const pelicula = this.createFromForm();
    this.peliculasService.agregarPelicula(pelicula).subscribe( data => {
      console.log(data);
    });
    window.location.reload();
  }

  limpiar() {
    this.editForm.patchValue({
      id_pelicula: "",
      titulo: "",
      duracion: "",
      descripcion: "",
      puntaje: "",
      imagen: "",
      anio: "",
      trailer: ""
    });
  }

  // Angular Modal

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }


}
