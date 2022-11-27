import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* PRIME NG */
/* Se recomienda ordenarlos alfabeticamente */
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
