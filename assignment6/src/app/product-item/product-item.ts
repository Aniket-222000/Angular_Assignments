import { Component, Input } from '@angular/core';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItem {

@Input() name: string = '';
@Input() price: number = 0;


}
