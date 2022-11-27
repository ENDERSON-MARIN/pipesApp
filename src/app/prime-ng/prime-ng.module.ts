import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* PRIME NG */
/* Se recomienda ordenarlos alfabeticamente */
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
  ]
})
export class PrimeNgModule { }
