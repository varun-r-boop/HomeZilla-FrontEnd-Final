import { Component } from '@angular/core';
import { orderStatus } from 'src/app/models/order-status';
import { OrderData } from 'src/app/models/OrderData';
import { Orders } from 'src/app/models/orders';
import { Status } from 'src/app/models/Status';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-provider-current-orders',
  templateUrl: './provider-current-orders.component.html',
  styleUrls: ['./provider-current-orders.component.css']
})
export class ProviderCurrentOrdersComponent {
  waitingOrders?: Orders;
  response: any;
  id: orderStatus = new orderStatus;
  constructor(private ordersService: OrderDetailsService) {}

  ngOnInit() {
    console.log("first");
    this.ordersService.getProviderCurrentOrders().subscribe((orders: Orders) => {
      this.waitingOrders = orders;
      console.log("second");
    });
  }

  acceptOrder(orderId: string | undefined) {
    console.log(orderId);
    if(orderId){
      
      this.id.orderId = orderId;
    this.ordersService.acceptOrder(this.id).subscribe(response => {
      this.response = response;
    });
  }
  }

  declineOrder(orderId: string | undefined) {
    if(orderId){
    this.ordersService.declineOrder(orderId).subscribe(response => {
      this.response = response;
    });
  }
  }
  
}
