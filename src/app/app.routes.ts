import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

// Importamos directamente los componentes standalone
import { InicioPage } from './pages/inicio/inicio.page';
import { GestionCitasPage } from './pages/gestion-citas/gestion-citas.page';
import { ConfiguracionPage } from './pages/configuracion/configuracion.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: InicioPage, // Referencia directa al componente standalone
  },
  {
    path: 'gestion-citas',
    component: GestionCitasPage, // Referencia directa al componente standalone
  },
  {
    path: 'configuracion',
    component: ConfiguracionPage, // Referencia directa al componente standalone
  },
];

export const appConfig = [provideRouter(routes)];
