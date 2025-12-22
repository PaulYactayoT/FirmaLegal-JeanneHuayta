import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TeamComponent } from './pages/team/team.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Estudio Jurídico - Inicio' },
  { path: 'about', component: AboutComponent, title: 'La Firma' },
  { path: 'services', component: ServicesComponent, title: 'Servicios Legales' },
  { path: 'contact', component: ContactComponent, title: 'Contacto' },
  { path: 'team', component: TeamComponent, title: 'Nuestro Equipo' },
  { path: '**', redirectTo: '' }
];
