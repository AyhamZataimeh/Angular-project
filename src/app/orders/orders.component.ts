import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MyService } from '../myService.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  total;  
  myOrders;
  burger;
  pizza;

  constructor(private route:ActivatedRoute,
    private totalOrders:MyService) { }

  ngOnInit(): void {
    this.myOrders=this.totalOrders.total;
    this.burger=this.totalOrders.burgerCounts;
    this.pizza=this.totalOrders.pizzaCounts;
    this.total=this.totalOrders.burgerPrice+
    this.totalOrders.pizzaPrice;

  }
   


}
