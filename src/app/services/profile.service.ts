import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  updateProfile(user: User): Observable<User>{
    
    return this.http.put<User>('https://localhost:7263/api/Customers/Update-User-Data' , user);
  }

  updateProfilePicture(picture : File): Observable<any>{
    return this.http.put('https://localhost:7263/api/Customers/Update-Profile',JSON.stringify(picture).split('\\').pop()?.slice(0, -1));
  }

}
