import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {FlightsComponent} from './flights/flights.component';
import {LoginComponent} from './login/login.component';
import {AccessibilityComponent} from './accessibility/accessibility.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'accessibility', component: AccessibilityComponent },
  { path: '**', redirectTo: '' },
];
