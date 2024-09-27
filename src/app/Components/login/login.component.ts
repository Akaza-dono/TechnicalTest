import { Component } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';
import { UserDto } from '../../Interfaces/user.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass',
})


  

export class LoginComponent {

  user: UserDto = {
    userName: '',
    password: '',
  };

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    this.loginService.login(this.user).subscribe({
      next: (token: string) => {
        this.loginService.setToken(token); // Almacena el token en localStorage
        this.router.navigate(['/sells']); // Redirige a la página principal después de iniciar sesión
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Error al iniciar sesión. Verifica tus credenciales.');
      }
    });
  }
}
