import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Register } from '../models/Register';
import { Login } from '../models/login';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  register =new Register();
  loginX = new Login();
  public userEmailId :BehaviorSubject<string> = new BehaviorSubject('');
  private baseUrl: string = "https://localhost:7263/api/Auth/"

  constructor(
    private http : HttpClient
  ) { }

  signUp( register: Register): Observable<Register>{
    return this.http.post<Register>(`${this.baseUrl}Register`, register)
0  }
  // signUp( userObj: any) {
  //   this.userEmailId.next(userObj.email);
  //   return this.http.post<any>(`${this.baseUrl}Register`, userObj)
  // }

    signOut(){
      localStorage.clear();
      localStorage.removeItem('token')
    }

  login(login: Login): Observable<Login>{
    return this.http.post<Login>(`${this.baseUrl}Login`, login,  {
      observe: "response"
    })
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
