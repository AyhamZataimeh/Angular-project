import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHome]'
})
export class HomeDirective implements OnInit {
  @HostListener('mouseenter')moueOver(event:Event){
    this.render.setStyle(this.style.nativeElement,"cursor",'pointer')
  }

  constructor(private style:ElementRef,private render:Renderer2) {


   }
   ngOnInit(){
    //  this.render.setStyle(this.style.nativeElement,'background-image','url("Food.jpg")');
    //  this.render.setStyle(this.style.nativeElement,'background-size','contain')


   }
  
   

}
