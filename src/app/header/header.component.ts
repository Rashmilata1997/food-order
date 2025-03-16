import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';
import { LoginCredService } from '../services/login-cred.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart!:Cart;
  username: string | null = null;
  totalItemCount: number = 0;
  constructor(private cartService:CartService,public LoginCred:LoginCredService ) { 
    this.cart=this.cartService.getCart();
  }

  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe(cart => {
      this.totalItemCount = cart.totalQuantity;
    });

    const user = this.LoginCred.getUser();
    this.username = user ? user.username : null;
    console.log(this.cart.items.length);
    // this.updateCartDetails();
    // this.cartService.getCartObservable().subscribe((cart:any) => {
    //   this.totalItemCount = cart;
    // });
  }
  // updateCartDetails() {
  //   // Get the latest cart details
  //   this.cart = this.cartService.getCart();

  //   // Calculate the total quantity of items in the cart
  //   this.totalItemCount = this.cart.items.reduce(
  //     (total, item) => total + item.quantity,
  //     0
  //   );
  // }
  onLogout() {
    alert('Do you want to logout ?');
        this.LoginCred.logoutUser();
  }
}
