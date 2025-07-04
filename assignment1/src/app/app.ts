import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  product = {
    name: 'Wireless Mouse',
    imageUrl: 'https://via.placeholder.com/150',
    price: 999
  }

  buyNow() {
    alert(`The name of the product is ${this.product.name}`);
  }

}
