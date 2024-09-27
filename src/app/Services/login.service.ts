import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'express';
import { UserDto } from '../Interfaces/user.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private LOGIN_URL:string = 'https://localhost:9999/api/Login'
  private tokenKey = 'authToken';
  private token = '';

  constructor(private httpClient: HttpClient) { }

  login(user: UserDto): Observable<string> {
    return this.httpClient.post(this.LOGIN_URL, user, { responseType: 'text' }).pipe(
      tap((res: string) => {
        this.token = res;
        this.setToken(res); // Guarda el token en el localStorage o donde sea necesario
        console.log(this.token);
      })
    );
  }

  public setToken(token:string): void{
    localStorage.setItem(this.tokenKey, this.token)
  }

  public getToken(): string | null{
    return localStorage.getItem(this.tokenKey)
  }
}
