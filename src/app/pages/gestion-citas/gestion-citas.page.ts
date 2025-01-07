import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonList, IonItem, IonButton } from '@ionic/angular/standalone';
import { CitasService } from 'src/app/services/citas.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonList, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GestionCitasPage {
  frase: string = '';
  autor: string = '';

  constructor(public citasService: CitasService) {}

  agregarCita() {
    if (this.frase.length >= 5 && this.autor.length >= 2) {
      this.citasService.agregarCita({ frase: this.frase, autor: this.autor });
      this.frase = '';
      this.autor = '';
    } else {
      alert('Por favor, complete los campos correctamente.');
    }
  }

  eliminarCita(index: number) {
    this.citasService.eliminarCita(index);
  }
}
