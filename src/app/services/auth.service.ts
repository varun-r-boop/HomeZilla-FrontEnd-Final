import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Register } from '../models/Register';
import { Login } from '../models/login';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ResetPassword } from '../models/resetPassword';
import { ChangePassword } from '../models/changePassword';

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
  private baseUrl: string = "https://homezilla360-api.azurewebsites.net/api/Auth/"

  constructor(
    private http : HttpClient,
    private router: Router
  ) { }

  // signUp( register: Register): Observable<Register>{
  //   return this.http.post<Register>(`${this.baseUrl}Register`, register);
    
  // }
  signUp( userObj: any) {
    this.userEmailId.next(userObj.email);
    return this.http.post<any>(`${this.baseUrl}Register`, userObj)
  }

    signOut(){
      sessionStorage.clear();
      sessionStorage.removeItem('auth-user')
    }

  login(login: Login): Observable<Login>{
    return this.http.post<Login>(`${this.baseUrl}Login`, login,  {
      observe: "response"
    })
   }

   storeToken(tokenValue: string){
    sessionStorage.setItem('auth-user', tokenValue)
   }

   getToken(){
    return sessionStorage.getItem('auth-user')
   }

   isLoggedIn(): boolean {
    return !!sessionStorage.getItem('auth-user')
   }

   forgotPassword(email){

    return this.http.post(`${this.baseUrl}Forgot-Password`, email);

   }



   resetPassword(passwordInfo: ResetPassword){

    return this.http.put(`${this.baseUrl}Reset-Password`, passwordInfo);

   }
   changePassword(passwordInfo: ChangePassword){

    return this.http.post(`${this.baseUrl}Change-Password`, passwordInfo);

   }
   }
  


