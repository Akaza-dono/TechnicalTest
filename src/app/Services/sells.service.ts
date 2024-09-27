import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SellsInterface } from '../Interfaces/sells.interface';


@Injectable({
  providedIn: 'root'
})
export class SellsService {

  API_URL: string = 'https://localhost:9999/api/sells'
  constructor(private httpClient: HttpClient) { }

  getSells(): Observable<any>{
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get(this.API_URL, { headers });
  }

  deleteSell(sellId: number): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.delete(`${this.API_URL}/${sellId}`, { headers });
  }

  getSellById(sellId: number): Observable<SellsInterface> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<SellsInterface>(`${this.API_URL}/${sellId}`, { headers });
  }

}
