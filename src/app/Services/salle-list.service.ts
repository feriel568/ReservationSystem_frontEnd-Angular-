import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalleListService {

  private apiUrl = 'http://localhost:1000/salle/getAll';
  private apiUrlDel = 'http://localhost:1000/salle/delete';

  constructor(private http : HttpClient) { }

  getAllSalles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  deleteSalle(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrlDel}/${id}`);
  }
}
