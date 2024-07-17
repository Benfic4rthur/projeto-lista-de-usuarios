import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    MatListModule,
    MatListModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCommonModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
  ],
  exports: [
    MatListModule,
    MatListModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCommonModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
  ],
})
export class AngularMaterialModule {}
