import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatosComponent } from './formatos.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { FormatosRoutingModule, routableFormatosComponents } from './formatos-routing.module';


@NgModule({
  declarations: [
    FormatosComponent,
    routableFormatosComponents
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    FormatosRoutingModule
  ]
})
export class FormatosModule { }
