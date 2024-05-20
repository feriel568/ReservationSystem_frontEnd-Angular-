import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalleService {
  private apiUrl = 'http://localhost:1000/salle/createSalle';

  constructor(private http: HttpClient) { }

  createSalle(salleData: any): Observable<any> {
    return this.http.post(this.apiUrl, salleData);
  }
}
