import {Component, OnInit} from '@angular/core';
import {BaseService} from "../services/base-service";
import {Product} from "../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public items: Product[] = [];

  constructor(public service: BaseService<Product>) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this.service.getAll("product")
      .subscribe(response => this.items = response);
  }

}
