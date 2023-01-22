export interface Cart {
    items: Array<CartItem>;
  }

//   data definition
  export interface CartItem {
    product: string;
    name: string;
    price: number;
    quantity: number;
    id: number;
  }