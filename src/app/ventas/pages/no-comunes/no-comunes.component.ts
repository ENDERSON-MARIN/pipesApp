import { Component } from '@angular/core';
import { interval } from 'rxjs';

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
  clientes: string[] = ['Maria', 'Jose', 'Pedro', 'Miguel', 'Eduardo'];
  clientesMapa = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarCliente() {
    this.nombre = 'Susana';
    this.genero = 'femenino';
  }

  eliminarCliente() {
    this.clientes.pop();
  }

  //Keyvalue Pipe
  persona = {
    nombre: 'Enderson',
    edad: 35,
    Dirección: 'Medellín, Colombia',
  };

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Spiderman',
      vuela: true,
    },
  ];

  //Async Pipe
  miObservable = interval(1000);

  miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
