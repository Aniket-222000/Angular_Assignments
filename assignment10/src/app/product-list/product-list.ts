import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  products = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Book A', category: 'Books' },
    { name: 'Headphones', category: 'Electronics' },
    { name: 'Book B', category: 'Books' },
    { name: 'Shoes', category: 'Fashion' }
  ];

  filteredProducts = this.products;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const category = params.get('category');
      if (category) {
        this.filteredProducts = this.products.filter(
          p => p.category === category
        );
      } else {
        this.filteredProducts = this.products;
      }
    });
  }
}
