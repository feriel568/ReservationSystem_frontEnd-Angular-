import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    Username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        console.log(response);
        if (response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('id', response.userId);
          alert('Login successful');

          // Redirect to home page after successful login
          this.router.navigate(['/home']);
        } else {
          alert(response.message);
        }
      },
      error: (error) => {
        console.error(error);
        alert('Login failed');
      }
    });
  }
}
