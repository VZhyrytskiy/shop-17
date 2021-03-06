import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

  onBuy (product): void {
    console.log('Congratulations! You bought ' + product.name + ' for a very good price ' + product.price + ' $' );
  }

}
