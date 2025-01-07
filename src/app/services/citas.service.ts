import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  citas: { frase: string; autor: string }[] = [
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