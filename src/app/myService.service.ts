export class MyService {
    total=0;
    burgerPrice=0;
    pizzaPrice=0;
    burgerCounts=0;
    pizzaCounts=0;
    counts=0;
    getPrice(){
        this.total++;

    }
    orders(order){
        if(order==="burger"){
            // this.burgerPrice+=8;


        }
        else if(order==="pizza"){
            // this.pizzaPrice+=10;
        }

    }
    getCost(order,quntity){
        if(order==="burger"){
            if(quntity==="1"){
                
                this.burgerPrice+=8;
                this.burgerCounts+=1;

            }else if(quntity==="2"){
                this.burgerPrice+=16;
                this.burgerCounts+=2;
            }
         

        }
        else if(order==="pizza"){
            if(quntity==="1"){
            this.pizzaPrice+=10;
            this.pizzaCounts+=1;

            }else if(quntity==="2"){
                this.pizzaPrice+=20;
                this.pizzaCounts+=2;
            }
           
        }
      

    }
}