import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MeansPaymentComponent} from './means-payment/means-payment.component';
import {MeansPaymentItemComponent} from "./means-payment/means-payment-item/means-payment-item.component";
import {HttpClientModule} from '@angular/common/http';
import {BaseService} from "./services/base-service";
import {ProductComponent} from './product/product.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {FormsModule} from "@angular/forms";


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
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    FormsModule,
  ],

  providers: [
    BaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
