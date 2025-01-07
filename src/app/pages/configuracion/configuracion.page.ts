import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ConfiguracionService } from 'src/app/services/configuracion.service'; // Importación del servicio

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ConfiguracionPage {
  borrarCitasInicio: boolean = false;

  constructor(private configuracionService: ConfiguracionService) {}

  ionViewWillEnter() {
    this.borrarCitasInicio = this.configuracionService.obtenerConfiguracion();
  }

  guardarConfiguracion() {
    this.configuracionService.guardarConfiguracion(this.borrarCitasInicio);
  }
}