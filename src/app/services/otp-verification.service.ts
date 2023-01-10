import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OtpVerificationService {
  
  constructor(private http: HttpClient) { }

  verifyOtp(email: string,otp: string){
   
    return this.http.post('https://homezilla360-api.azurewebsites.net/api/Auth/Verify',{email,otp},  {
      responseType: 'text' as 'json'
    });
  }
}
