import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

// dummy cart
cart: Cart = { items: [{
  // product: 'https://via.placeholder.com/150',
  product: '/assets/images/goldenblade.png',
  name: 'Golden Blade',
  price: 450,
  quantity: 1,
  id: 1,
},
{
  // product: 'https://via.placeholder.com/150',
  product: '/assets/images/wind-spear.png',
  name: 'Wind Spear',
  price: 250,
  quantity: 3,
  id: 1,
}
]};
dataSource: Array<CartItem> = [];
displayedColumns: Array<string> = [
  'product',
  'name',
  'price',
  'quantity',
  'total',
  'action',
];

constructor() {}

ngOnInit(): void {
  this.dataSource = this.cart.items;
}

// loop through the items taking the item price and the quantity
getTotal(items: CartItem[]): number {
  return items
    .map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0);
}

}

