import {Component, OnInit} from '@angular/core';
import {MeansPayment} from "../../models/means-payment";
import {BaseService} from "../../services/base-service";

@Component({
  selector: 'app-means-payment-item',
  templateUrl: './means-payment-item.component.html',
  styleUrls: ['./means-payment-item.component.css']
})
export class MeansPaymentItemComponent implements OnInit {

  public object: MeansPayment = new MeansPayment();

  constructor(public service: BaseService<MeansPayment>) {
  }

  ngOnInit(): void {
  }


  public save(): void {
    this.service.save(this.object, "means_payment/")
      .subscribe(response => this.object = response);
  }

}
