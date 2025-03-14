import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Foods } from '../shared/models/food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart=new Cart();
count=0;
 addToCart(food:Foods):void{
  let cartItem=this.cart.items.find(item=> item.food.id === food.id);
  if(cartItem){
    this.changeQuantity(food.id, cartItem.quantity + 1);
    return;
  }
  this.cart.items.push(new CartItem(food));
 }
 removeFromCart(foodId:number):void{
  this.cart.items=this.cart.items.filter(item=>item.food.id != foodId)
 }
 changeQuantity(foodId:number,quantity:number ){
  let cartItem=this.cart.items.find(item=> item.food.id === foodId);
  if(!cartItem) return;
 cartItem.quantity=quantity;
//  this.count=cartItem.quantity
 }
 getCart():Cart{
   return this.cart;
 }
}
