// register-admin.component.ts
import { Component } from '@angular/core';
import { AdminAuthService } from '../../Services/auth-admin.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent {
  user = {
    email: '',
    Username: '',
    password: ''
  };

  constructor(private authService: AdminAuthService) {}

  register() {
    this.authService.registerAdmin(this.user).subscribe({
      next: (response: any) => {
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
