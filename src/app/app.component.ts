import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HlmInputDirective} from '@spartan-ng/ui-input-helm';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HlmInputDirective, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'airliner';
}
