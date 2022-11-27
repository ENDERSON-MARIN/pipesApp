import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';

  nombre:string = "EndeRson MaRin";
  valor:number = 5000;
  obj = {
    documento: 123456789,
    telefono: 123456789
  }

  mostrarPorConsola(){
    console.log(this.nombre)
    console.log(this.valor)
    console.log(this.obj)
  }
}
