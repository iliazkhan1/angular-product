import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-summary.component.html',
})
export class ProductSummaryComponent {
  @Input() totalQty!: number;
  @Input() totalPrice!: number;
}