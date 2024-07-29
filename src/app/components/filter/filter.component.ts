import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [DatePipe]
})
export class FilterComponent {
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };

  statusList = [
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false }
  ];

  @Output('onFilter') onFilterEmmit = new EventEmitter<IFilterOptions>();

  onFilter() {
    this.onFilterEmmit.emit(this.filterOptions);
  }

  constructor(public datePipe: DatePipe) { }

  getFormattedStartDate() {
    return this.datePipe.transform(this.filterOptions.startDate, 'dd/MM/yyyy');
  }

  getFormattedEndDate() {
    return this.datePipe.transform(this.filterOptions.endDate, 'dd/MM/yyyy');
  }
}
