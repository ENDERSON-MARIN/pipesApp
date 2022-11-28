import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {
  mayuscula :boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  heroes:Heroe[] = [
    {
     nombre:"Superman",
     vuela:true,
     color:Color.azul
    },
    {
      nombre:"Batman",
      vuela:false,
      color:Color.negro
    },
    {
      nombre:"Robin",
      vuela:false,
      color:Color.amarillo
    },
    {
      nombre:"Linterna Verde",
      vuela:true,
      color:Color.verde
    },
    {
      nombre:"Spiderman",
      vuela:true,
      color:Color.rojo
    },

  ]

  toggle(){
    this.mayuscula = !this.mayuscula
  }

}
