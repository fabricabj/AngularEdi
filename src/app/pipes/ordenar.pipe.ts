import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Array<any>): Array<any> {
    if(!value) return [];

    return value.sort(this.ordenar);
  }

  // Funcion para ordenar objetos dentro de un Array
  
  ordenar( a: any, b: any ) {
    if ( a.titulo < b.titulo ){
      return -1;
    }
    if ( a.titulo > b.titulo ){
      return 1;
    }
    return 0;
  }

}
