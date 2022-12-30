import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userEmailId :BehaviorSubject<string> = new BehaviorSubject('');
  private baseUrl: string = "https://localhost:7263/api/Auth/"

  constructor(
    private http : HttpClient
  ) { }

  signUp( userObj: any) {
    this.userEmailId.next(userObj.email);
    return this.http.post<any>(`${this.baseUrl}Register`, userObj)
  }

  login(userObj: any){
    return this.http.post<any>(`${this.baseUrl}Login`, userObj)
   }
}
