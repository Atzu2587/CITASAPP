import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  citas: { frase: string; autor: string }[] = [
    {frase: 'El éxito consiste en obtener lo que se desea. La felicidad en disfrutar lo que se obtiene.',autor: 'Ralph Waldo Emerson'},
    {frase: 'Las personas no son recordadas por el número de veces que fracasan, sino por el número de veces que tienen éxito.',autor: 'Thomas Edison'},
    {frase: 'ningún viento es favorable para el barco que no sabe a dónde va.',autor: 'Lucio Anneo Séneca'},
    { frase: 'La vida es un sueño.', autor: 'Calderón de la Barca' },
    { frase: 'El conocimiento es poder.', autor: 'Francis Bacon' },
  ];

  obtenerCitaAleatoria() {
    const index = Math.floor(Math.random() * this.citas.length);
    return this.citas[index];
  }

  agregarCita(cita: { frase: string; autor: string }) {
    this.citas.push(cita);
  }

  eliminarCita(index: number) {
    this.citas.splice(index, 1);
  }
}