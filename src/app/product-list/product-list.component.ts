import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSummaryComponent } from '../product-summary/product-summary.component'; 

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductSummaryComponent],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'Phone', qty: 5, price: 20000 },
    { id: 2, name: 'Refrigrator', qty: 6, price: 30000 },
    { id: 3, name: 'Telisvision', qty: 7, price: 40000 }
  ];

  get totalQty() {
    return this.products.reduce((sum, p) => sum + p.qty, 0);
  }

  get totalPrice() {
    return this.products.reduce((sum, p) => sum + p.qty * p.price, 0);
  }
}