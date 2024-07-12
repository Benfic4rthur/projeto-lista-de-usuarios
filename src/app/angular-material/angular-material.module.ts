import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [MatListModule, MatListModule],
  exports: [MatListModule, MatListModule],
})
export class AngularMaterialModule {}
