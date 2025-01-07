import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonList, IonItem, IonButton, IonButtons, IonBackButton, IonIcon } from '@ionic/angular/standalone';
import { CitasService } from 'src/app/services/citas.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
  standalone: true,
  imports: [IonIcon, IonBackButton, IonButtons, IonButton, IonItem, IonList, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GestionCitasPage {
  frase: string = '';
  autor: string = '';

  constructor(public citasService: CitasService, private cd: ChangeDetectorRef) {}

  // Método para agregar una nueva cita
  agregarCita() {
    const fraseLimpia = this.frase.trim();
    const autorLimpio = this.autor.trim();
  
    if (fraseLimpia.length >= 5 && autorLimpio.length >= 2) {
      this.citasService.agregarCita({ frase: fraseLimpia, autor: autorLimpio });
      this.frase = '';
      this.autor = '';
    } else {
      alert('Por favor, complete los campos correctamente.');
    }
  }

  // Método para eliminar una cita
  eliminarCita(index: number) {
    if (index >= 0 && index < this.citasService.citas.length) {
      this.citasService.eliminarCita(index);
      this.cd.detectChanges(); // Forzar la actualización de la vista
    } else {
      console.error('Índice fuera de rango:', index);
    }
  }
}
