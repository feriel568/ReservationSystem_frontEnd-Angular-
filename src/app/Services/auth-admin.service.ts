// admin-auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  private baseUrl = 'http://localhost:1000/admin'; // Your backend URL

  constructor(private http: HttpClient) { }

  registerAdmin(adminData: any) {
    return this.http.post(`${this.baseUrl}/register`, adminData);
  }

  loginAdmin(credentials: any) {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
}
