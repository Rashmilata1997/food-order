import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Foods } from '../shared/models/food';
import { CartItem } from '../shared/models/CartItem';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart=new Cart();

//  private cart: Cart = this.loadCartFromStorage() || new Cart();
private cartSubject = new BehaviorSubject<Cart>(this.cart);
count=0;
constructor(){
  // this.cart = this.loadCartFromStorage() || new Cart();
}
// private saveCartToStorage() {
//   localStorage.setItem('cart', JSON.stringify(this.cart));
// }

// private loadCartFromStorage(): Cart | null {
//   const cartData = localStorage.getItem('cart');
//   if (!cartData) return null;

//   const parsedCart = JSON.parse(cartData);

//   const restoredCart = new Cart();
//   restoredCart.items = parsedCart.items.map((item: any) => {
//     const cartItem = new CartItem(item.food);
//     cartItem.quantity = item.quantity;
//     return cartItem;
//   });

//   return restoredCart;
// }
getCartObservable() {
  return this.cartSubject.asObservable(); // Expose as Observable
}
 addToCart(food:Foods):void{
  let cartItem=this.cart.items.find(item=> item.food.id === food.id);
  if(cartItem){
    this.changeQuantity(food.id, cartItem.quantity + 1);
    return;
  }
  this.cart.items.push(new CartItem(food));
  // this.saveCartToStorage();
  this.cartSubject.next(this.cart);
 }
 removeFromCart(foodId:number):void{
  this.cart.items=this.cart.items.filter(item=>item.food.id != foodId);
  // this.saveCartToStorage();
  this.cartSubject.next(this.cart);
 }
 changeQuantity(foodId:number,quantity:number ){
  let cartItem=this.cart.items.find(item=> item.food.id === foodId);
  if(!cartItem) return;
 cartItem.quantity=quantity;
//  this.saveCartToStorage();
 this.cartSubject.next(this.cart);
//  this.count=cartItem.quantity
 }
 getCart():Cart{
  // this.cart.totalPrice = this.cart.items.reduce((sum, item) => sum + item.food.price * item.quantity, 0);
  return this.cart;
 }
 clearCart(): void {
  this.cart.items = [];
  // this.saveCartToStorage();
  this.cartSubject.next(this.cart);
}
}
