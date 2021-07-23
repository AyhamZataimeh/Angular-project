import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllowUser } from "./allowUser.service";
import { ConfirmationComponent } from "./confirmation/confirmation.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { OrdersComponent } from "./orders/orders.component";
import { ProductComponent } from "./product/product.component";

const routes:Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},

    {path:'product',component:ProductComponent},
    {path:'product/confirmation',component:ConfirmationComponent},
    {path:'orders',canActivate:[AllowUser],component:OrdersComponent},
    {path:'not-found',component:NotFoundComponent},
    {path:'**',redirectTo:"/not-found"}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
})
export class AppRouterModlue{


}