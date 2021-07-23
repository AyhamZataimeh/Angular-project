import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRouterModlue } from './appRouerModule.module';
import { HomeDirective } from './home.directive';
import { ProductComponent } from './product/product.component';
import { MyService } from './myService.service';
import { OrdersComponent } from './orders/orders.component';
import { AllowService } from './allowService.service';
import { AllowUser } from './allowUser.service';
import { HomeComponent } from './home/home.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeDirective,
    ProductComponent,
    OrdersComponent,
    HomeComponent,
    ConfirmationComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModlue,
    FormsModule,
  ],
  providers: [MyService,AllowService,AllowUser],
  bootstrap: [AppComponent]
})
export class AppModule { }
