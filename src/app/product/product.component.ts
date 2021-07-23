import { Component,  ElementRef,
        OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyService } from '../myService.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  options=[
    {
      burger:'burger',
      pizza:'pizza'
  
    }
  ]
  orderCounts=0;
  select="burger";
  @ViewChild('myOrder')myOrder:ElementRef;
  @ViewChild('quntity')quntity:ElementRef;

  
 
  



  constructor(private service:MyService,
    private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
   
    
    
  
  

  }
  
  onOrder(){
    this.service.getPrice();
    this.service.orders(this.myOrder.nativeElement.value);
    this.service.getCost(
      this.myOrder.nativeElement.value
      ,this.quntity.nativeElement.value
      );    
    this.router.navigate(['confirmation'],
    {queryParams:{order:this.myOrder.nativeElement.value},
      fragment:this.quntity.nativeElement.value,
      relativeTo:this.route})
        
    
    
    

   

  }
 
}
