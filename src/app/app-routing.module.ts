import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MeansPaymentComponent} from "./means-payment/means-payment.component";
import {MeansPaymentItemComponent} from "./means-payment/means-payment-item/means-payment-item.component";
import {ProductComponent} from "./product/product.component";

const routes: Routes = [
  {path: "means_payment", component: MeansPaymentComponent},
  {path: "means_payment/:action", component: MeansPaymentItemComponent},
  {path: "product", component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
