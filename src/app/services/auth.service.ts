import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Register } from '../models/Register';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  private baseUrl: string = "https://localhost:7263/api/Auth/"

  constructor(
    private http : HttpClient
  ) { }

  signUp( register: Register): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}Register`, register)
0  }

    signOut(){
      localStorage.clear();
      localStorage.removeItem('token')
    }

  login(login: Login){
    return this.http.post<any>(`${this.baseUrl}Login`, login)
   }

   storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
   }

   getToken(){
    return localStorage.getItem('token')
   }

   isLoggedIn(): boolean {
    return !!localStorage.getItem('token')
   }

}
