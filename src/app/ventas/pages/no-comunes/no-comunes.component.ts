import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect Pipe
  nombre: string = 'Enderson';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural Pipe
  clientes: string[] = ['Maria', 'Jose', 'Pedro', 'Miguel'];
  clientesMapa={
    '=0':'No tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos dos clientes esperando',
    'other':'tenemos # clientes esperando'
  }
}
