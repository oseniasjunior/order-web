import {Component, OnInit} from '@angular/core';
import {MeansPayment} from "../models/means-payment";
import {BaseService} from "../services/base-service";

@Component({
  selector: 'app-means-payment',
  templateUrl: './means-payment.component.html',
  styleUrls: ['./means-payment.component.css']
})
export class MeansPaymentComponent implements OnInit {

  public items: MeansPayment[] = [];

  constructor(public service: BaseService<MeansPayment>) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this.service.getAll("means_payment")
      .subscribe(response => this.items = response);
  }

}
