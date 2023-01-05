import { Component } from '@angular/core';
import { Orders } from 'src/app/models/orders';
import { Status } from 'src/app/models/Status';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.css']
})
export class PastOrdersComponent {
  waitingOrders?: Orders;

  constructor(private ordersService: OrderDetailsService) {}

  ngOnInit() {
    console.log("first");
    this.ordersService.getPastOrders(Status.Waiting).subscribe((orders: Orders) => {
      this.waitingOrders = orders;
      console.log("second");
    });
  }
}
