import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/models/orders';
import { Status } from 'src/app/models/Status';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-current-orders',
  templateUrl: './current-orders.component.html',
  styleUrls: ['./current-orders.component.css']
})
export class CurrentOrdersComponent implements OnInit{
  waitingOrders?: Orders;

  constructor(private ordersService: OrderDetailsService) {}

  ngOnInit() {
    console.log("first");
    this.ordersService.getCurrentOrders(Status.Waiting).subscribe((orders: Orders) => {
      this.waitingOrders = orders;
      console.log("second");
    });
  }
}
