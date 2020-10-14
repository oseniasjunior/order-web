import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MeansPaymentComponent} from './means-payment/means-payment.component';
import {MeansPaymentItemComponent} from "./means-payment/means-payment-item/means-payment-item.component";
import {HttpClientModule} from '@angular/common/http';
import {BaseService} from "./services/base-service";
import {ProductComponent} from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    MeansPaymentComponent,
    MeansPaymentItemComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    BaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
