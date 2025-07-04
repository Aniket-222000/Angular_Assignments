import { Component } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

products = [
    { name: 'Wireless Mouse', price: 999 },
    { name: 'Keyboard', price: 1499 },
    { name: 'Headphones', price: 1999 }
  ];

}
