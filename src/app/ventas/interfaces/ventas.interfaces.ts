export enum Color {
  amarillo,
  azul,
  rojo,
  verde,
  negro
}

export interface Heroe {
  nombre: string;
  vuela: boolean;
  color: Color;
}
