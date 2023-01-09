import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceData } from '../models/provider-services';
import { ServiceId } from '../models/service-op';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }
    getServiceData():Observable<ServiceData[]>{
        return this.http.get<ServiceData[]>('https://homezilla360-api.azurewebsites.net/swagger/index.html')
    }
    addServiceData(service: ServiceData):Observable<ServiceData>{
        return this.http.post<ServiceData>('https://homezilla360-api.azurewebsites.net/swagger/index.html',service)
    }
    updateServiceData(service: ServiceData):Observable<ServiceData>{
        return this.http.put<ServiceData>('https://homezilla360-api.azurewebsites.net/swagger/index.html',service)
    }
    deleteServiceData(service: ServiceId):Observable<ServiceId>{
        return this.http.delete<ServiceId>('https://homezilla360-api.azurewebsites.net/swagger/index.html',{
            body: {
                id: service.id
            } 
        })
    }
}
