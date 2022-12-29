import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "https://localhost:7263/api/Auth/"

  constructor(
    private http : HttpClient
  ) { }

  signUp( userObj: any){
    return this.http.post<any>(`${this.baseUrl}Register`, userObj)
  }

  login(userObj: any){
    return this.http.post<any>(`${this.baseUrl}Login`, userObj)
   }
}
