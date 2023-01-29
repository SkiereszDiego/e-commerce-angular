import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  // dummy cart
  cart: Cart = { items: [{
    // product: 'https://via.placeholder.com/150',
    product: '/assets/images/flame_sword.png',
    name: 'Flame Blade',
    price: 450,
    quantity: 1,
    id: 1,
  },
  {
    // product: 'https://via.placeholder.com/150',
    product: '/assets/images/dark_sword.png',
    name: 'Dark Blade',
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

  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = _cart.items;
    });
  }

  // loop through the items taking the item price and the quantity
  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

}

