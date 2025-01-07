import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton} from '@ionic/angular/standalone'; // Importación de componentes adicionales
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, CommonModule, FormsModule, IonButton ]
})
export class InicioPage implements OnInit {
  citaAleatoria: { frase: string; autor: string } | null = null;

  constructor(private citasService: CitasService) {}

  ngOnInit() {
    this.obtenerCitaAleatoria();
  }

  obtenerCitaAleatoria() {
    this.citaAleatoria = this.citasService.obtenerCitaAleatoria();
  }
}
