import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  private configuracionKey = 'borrarCitasInicio';

  obtenerConfiguracion(): boolean {
    const configuracion = localStorage.getItem(this.configuracionKey);
    return configuracion ? JSON.parse(configuracion) : false;
  }

  guardarConfiguracion(borrarCitas: boolean) {
    localStorage.setItem(this.configuracionKey, JSON.stringify(borrarCitas));
  }
}