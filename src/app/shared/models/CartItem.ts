import { Foods } from "./food";

export class CartItem{
    constructor(food:Foods){
        this.food=food;
       
    }
    food:Foods;
    quantity: number=1;
 get price():number{
    debugger;
  return this.food.price * this.quantity;
 }
}