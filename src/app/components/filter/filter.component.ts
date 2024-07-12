import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  status = [
    {
      value: 'ativo',
      viewValue: 'Ativo',
    },
    {
      value: 'inativo',
      viewValue: 'Inativo',
    },
  ];
}
