import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SellsComponent } from './Components/sells/sells.component';
import { LoginComponent } from './Components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SellsComponent, LoginComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'technicalTest_Front';
}
