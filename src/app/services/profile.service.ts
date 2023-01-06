import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  getProfileDetails():Observable<User>{
    return this.http.get<User>('https://homezilla360-api.azurewebsites.net/swagger/index.html' );
  }
  updateProfile(user: User): Observable<User>{
    
    return this.http.put<User>('https://homezilla360-api.azurewebsites.net/swagger/index.html' , user);
  }

  updateProfilePicture(picture): Observable<any>{
    const formData = new FormData();
    formData.append("file", picture, picture.name);
    return this.http.put('https://homezilla360-api.azurewebsites.net/swagger/index.html',formData);
  }

  getProviderProfileDetails():Observable<User>{
    return this.http.get<User>('https://homezilla360-api.azurewebsites.net/swagger/index.html' );
  }

  updateProviderProfile(user: User): Observable<User>{
    
    return this.http.put<User>('https://homezilla360-api.azurewebsites.net/swagger/index.html' , user);
  }

  updateProviderProfilePicture(picture): Observable<any>{
    const formData = new FormData();
    formData.append("file", picture, picture.name);
    return this.http.put('https://homezilla360-api.azurewebsites.net/swagger/index.html',formData);
  }



}
