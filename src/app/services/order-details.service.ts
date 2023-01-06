import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { OrderData } from '../models/OrderData';
import { Orders } from '../models/orders';
import { Status } from '../models/Status';
import { BookOrder } from '../models/book-order';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private http: HttpClient) { }

  getCurrentOrders(status: Status): Observable<Orders> {
    var currentOrders: Orders = {
      currentPage: 1,
      data: [],
      totalPages: 0
    };
    return  this.http.get<Orders>('https://localhost:7263/api/Customers/Current-Order').pipe(
      map((response: Orders ) => {
        console.log("third");
        currentOrders = response;
        console.log(response);
        return currentOrders;
        
      })
    );
  }

  getPastOrders(status: Status): Observable<Orders> {
    var pastOrders: Orders = {
      currentPage: 1,
      data: [],
      totalPages: 0
    };
    return  this.http.get<Orders>('https://localhost:7263/api/Customers/Past-Order').pipe(
      map((response: Orders ) => {
        console.log("third");
        pastOrders = response;
        console.log(response);
        return pastOrders;
        
      })
    );
  }

  bookOrder(orderData: BookOrder)
  {
    var res =  this.http.post<any>('https://homezilla360-api.azurewebsites.net/BookOrder',orderData, {
      responseType: 'text' as 'json'
    });
    return res;
  }
}
