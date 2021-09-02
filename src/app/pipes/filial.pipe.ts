import { Pipe, PipeTransform } from '@angular/core';
import { EnumFilial } from '../enums/filial.enum';

@Pipe({
  name: 'filial'
})
export class FilialPipe implements PipeTransform {

  transform(filial): string {
    switch (filial) {
      case EnumFilial.MATRIZ: {
        return 'Matriz';
      }
      case EnumFilial.FILIAL_A: { 
        return 'Filial 1';
      }
      case EnumFilial.FILIAL_C: {
        return 'Filial 2';
      }
      default: {
        return 'Filial Desconhecida'
      }
    }

  }

}
