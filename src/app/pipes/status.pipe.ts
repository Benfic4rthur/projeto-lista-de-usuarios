import { Pipe, PipeTransform } from '@angular/core';
import { IStatus } from '../interfaces/user/status.interface';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(status: boolean | null): string {
    const ASSIGNATURE_STATUS = status === undefined || status === null;
    if (ASSIGNATURE_STATUS) {
      return 'Status indisponível ou inválido';
    }
    return status ? 'Ativo' : 'Inativo';
  }
}
