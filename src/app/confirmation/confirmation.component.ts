import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MyService } from '../myService.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private router:Router,
    private service:MyService) { }
  order;
  quntity;
  burger;
  pizza;
  ngOnInit(): void {
    this.route.queryParams.subscribe((param:Params)=>{
      this.order=param['order']
    })
    this.route.fragment.subscribe((order:string)=>{
      this.quntity=order;

    })
    this.burger=8*this.quntity;
    this.pizza=10*this.quntity;
   

  }
  onConfrim(){
    this.burger=0;
    this.pizza=0;
    console.log("burger="+this.burger);
    console.log("pizza="+this.pizza);
    

    this.router.navigate(['product']);
    setTimeout(()=>{
      window.confirm('Your order on the way\n'+Date())

    },100);

  }

}
