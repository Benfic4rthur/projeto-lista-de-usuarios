import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/adress.interface';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(address: IAddress): string {
    const STRING_NUMBER = String(address?.numero);
    const INVALID_ADDRESS =
      !address ||
      !address?.rua ||
      !address?.cidade ||
      !address?.estado ||
      !address?.pais ||
      !STRING_NUMBER ||
      address?.numero === null ||
      address?.numero === undefined;
    if (INVALID_ADDRESS) {
      return 'Endereço indisponível ou inválido';
    }

    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`;
  }
}
