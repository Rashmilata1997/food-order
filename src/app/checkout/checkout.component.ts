import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCartData();
  }
  loadCartData() {
    this.cart = this.cartService.getCart();
  }

  onPlaceOrder() {
    console.log('Order placed successfully:', this.cart);
    alert('Order placed successfully!');
    // Optionally, clear the cart after checkout
    this.cartService.clearCart();
  }
}
