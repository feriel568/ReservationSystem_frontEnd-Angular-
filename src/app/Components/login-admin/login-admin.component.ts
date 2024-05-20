// login-admin.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AdminAuthService } from '../../Services/auth-admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  credentials = {
    Username: '',
    password: ''
  };

  constructor(private authService: AdminAuthService, private router: Router) { }

  login() {
    this.authService.loginAdmin(this.credentials).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.token) {
          localStorage.setItem('adminToken', response.token);
          
          alert('Login successful');
          this.router.navigate(['/admin/home']);
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
