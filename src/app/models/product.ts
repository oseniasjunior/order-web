import {ModelBase} from "./model-base";

export class Product extends ModelBase {
  name: string;
  detail_description: string;
  cost_price: number;
  sale_price: number;
  balance: number;
}
