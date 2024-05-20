import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    email: '',
    Username: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.user).subscribe({
      next: (response) => {
        console.log(response);
        alert(response.message);
      },
      error: (error) => {
        console.error(error);
        alert('Registration failed');
      }
    });
  }
}
