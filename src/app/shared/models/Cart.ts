import { CartItem } from "./CartItem";

export class Cart{
    items:CartItem[]=[];
  quantity!: number;
 get totalPrice():number{
    let totalPrice=0;
    this.items.forEach(item=> {
        totalPrice += item.price;
    });
    return totalPrice;
 }
}