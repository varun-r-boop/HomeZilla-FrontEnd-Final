import { Component } from '@angular/core';
import { Orders } from 'src/app/models/orders';
import { Status } from 'src/app/models/Status';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-provider-past-orders',
  templateUrl: './provider-past-orders.component.html',
  styleUrls: ['./provider-past-orders.component.css']
})
export class ProviderPastOrdersComponent {
  waitingOrders?: Orders;

  constructor(private ordersService: OrderDetailsService) {}

  ngOnInit() {
    console.log("first");
    this.ordersService.getProvidersPastOrders().subscribe((orders: Orders) => {
      this.waitingOrders = orders;
      console.log("second");
    });
  }
}
