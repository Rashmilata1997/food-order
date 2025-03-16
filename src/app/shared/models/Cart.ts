import { CartItem } from "./CartItem";

export class Cart{
    items:CartItem[]=[];
  quantity!: number;
  get totalQuantity(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // Dynamically calculate the total price of all items in the cart
//   get totalPrice(): number {
//     return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
//   }
 get totalPrice():number{
    let totalPrice=0;
    this.items.forEach(item=> {
        totalPrice += item.price;
    });
    return totalPrice;
 }
}