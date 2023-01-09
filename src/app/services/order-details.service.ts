import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { OrderData } from '../models/OrderData';
import { Orders } from '../models/orders';
import { Status } from '../models/Status';
import { BookOrder } from '../models/book-order';
import { orderStatus } from '../models/order-status';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private http: HttpClient) { }

  getCurrentOrders(): Observable<Orders> {
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

  getPastOrders(): Observable<Orders> {
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

  cancelOrder(orderData: BookOrder): Observable<BookOrder>
  {
    return this.http.put('https://localhost:7263/CancelOrder',orderData);
  }

  acceptOrder(orderId: orderStatus) {
    return this.http.put<string>(`https://localhost:7263/AcceptOrder`, orderId);
  }

  declineOrder(orderId: string) {
    return this.http.delete<any>(`https://localhost:7263/DeclineOrder`);
  }

  getProviderCurrentOrders(): Observable<Orders> {
    var currentOrders: Orders = {
      currentPage: 1,
      data: [],
      totalPages: 0
    };
    return  this.http.get<Orders>('https://localhost:7263/api/Providers/Current-Order').pipe(
      map((response: Orders ) => {
        currentOrders = response;
        console.log(response);
        return currentOrders;
        
      })
    );
  }
  getProvidersPastOrders(): Observable<Orders> {
    var pastOrders: Orders = {
      currentPage: 1,
      data: [],
      totalPages: 0
    };
    return  this.http.get<Orders>('https://localhost:7263/api/Providers/Past-Order').pipe(
      map((response: Orders ) => {
        console.log("third");
        pastOrders = response;
        console.log(response);
        return pastOrders;
        
      })
    );
  }
}
