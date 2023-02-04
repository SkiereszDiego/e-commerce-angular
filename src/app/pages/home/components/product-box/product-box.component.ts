import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  @Input() product: Product | undefined;

  // @Input() product: Product | undefined = {
  //   id: 1,
  //   title: 'Flame Sword',
  //   price: 150,
  //   category: 'weapon',
  //   description: 'description',
  //   image: '/assets/images/flame_sword.png',
  // };
  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
