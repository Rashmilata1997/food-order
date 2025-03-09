import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  // getAll():Food[]{
  //  return sample_foods;

  // }
getAll():Foods[]{
  return[
    {
      id:1,
      name: 'Fruit Salad',
      cookTime: '10-20',
      price: 50,
      favorite: false,
      origins: ['italy'],
      star: 4.5,
      imageUrl: './assets/food-1.jpg',
      tags: ['HealthyFood', 'Fruit Salad', 'BreakFast'],
    },
    {
      id:2,
      name: 'Samosas',
      cookTime: '20-30',
      price: 20,
      favorite: false,
      origins: ['India'],
      star: 4,
      imageUrl: './assets/food-2.jpg',
      tags: ['FastFood', 'Samosas', 'Snacks'],
    },
    {
      id:3,
      name: 'Pasta',
      cookTime: '25-30',
      price: 55,
      favorite: false,
      origins: ['italy'],
      star: 3.5,
      imageUrl: './assets/food-3.jpg',
      tags: ['FastFood', 'Pasta', 'Lunch'],
    },
    {
      id:4,
      name: 'Egg Toast',
      cookTime: '15-20',
      price: 30,
      favorite: false,
      origins: ['italy'],
      star: 4.5,
      imageUrl: './assets/food-4.jpg',
      tags: ['Brunch', 'Egg Toast', 'Brunch'],
    },
    {
      id:5,
      name: 'Burger',
      cookTime: '15-20',
      price: 20,
      favorite: false,
      origins: ['italy'],
      star: 2.7,
      imageUrl: './assets/food-5.jpg',
      tags: ['FastFood', 'Burger', 'Lunch'],
    },
    {
      id:6,
      name: 'Coffee',
      cookTime: '10-15',
      price: 10,
      favorite: false,
      origins: ['italy'],
      star: 2,
      imageUrl: './assets/food-6.jpg',
      tags: ['Snacks', 'Coffee', 'Snacks'],
    },
    {
      id:7,
      name: 'Noodles',
      cookTime: '20-25',
      price: 50,
      favorite: false,
      origins: ['italy'],
      star: 4.5,
      imageUrl: './assets/food-7.jpg',
      tags: ['FastFood', 'Noodles', 'Lunch'],
    },
    {
      id:8,
      name: 'French Fries',
      cookTime: '30-40',
      price: 50,
      favorite: true,
      origins: ['italy'],
      star: 4.5,
      imageUrl: './assets/food-8.jpg',
      tags: ['FastFood', 'French Fries', 'Snacks'],
    },
    {
      id:9,
      name: 'Pizza',
      cookTime: '30-40',
      price: 50,
      favorite: true,
      origins: ['italy'],
      star: 4.5,
      imageUrl: './assets/food-9.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
    },
    {
      id:10,
      name: 'Egg Avocado',
      cookTime: '30-40',
      price: 50,
      favorite: true,
      origins: ['italy'],
      star: 4.5,
      imageUrl: './assets/food-10.jpg',
      tags: ['Brunch', 'Egg Avocado', 'Brunch'],
    },
    {
      id:11,
      name: 'Black Coffee',
      cookTime: '30-40',
      price: 50,
      favorite: true,
      origins: ['italy'],
      star: 4.5,
      imageUrl: './assets/food-11.jpg',
      tags: ['Snacks', 'Black Coffee', 'Snacks'],
    },
    {
      id:12,
      name: 'Sushi',
      cookTime: '30-40',
      price: 60,
      favorite: true,
      origins: ['japanese'],
      star: 4.8,
      imageUrl: './assets/food-12.jpg',
      tags: ['Lunch', 'Sushi', 'Main Course'],
    },
    {
      id:13,
      name: 'Rice Noodles',
      cookTime: '30-40',
      price: 50,
      favorite: true,
      origins: ['Indian'],
      star: 4.5,
      imageUrl: './assets/food-13.jpg',
      tags: ['Lunch', 'Rice Noodles', 'Main Course'],
    },
    {
      id:14,
      name: 'Fried Rice',
      cookTime: '30-40',
      price: 50,
      favorite: true,
      origins: ['Chinese'],
      star: 4.5,
      imageUrl: './assets/food-14.jpg',
      tags: ['Lunch', 'Fried Rice', 'Main Course'],
    },
    
  ];
}
  // getAllFoodsBySearchTerm(searchTerm: string){
  //   return this.getAll.filter(food=> food.name.toLowerCase().includes(searchTerm.toLowerCase()))

  // }
  getAllTags(): Tag[]{
    // return sample_tags;
    return [
      {name:'All', count:14},
      {name:'Pizza', count:1},
      {name:'FastFood', count:6},
      {name:'Lunch', count:7},
      {name:'Brunch', count:3},
      {name:'Snacks', count:4},
      {name:'Main Course', count:3},
      {name:'BreakFast', count:1}
    ]
  }
  getAllFoodByTag(tag: string): Foods[] {
   return tag == "All" ? this.getAll() : this.getAll().filter(food=> food.tags?.includes(tag));
  }
  getFoodById(id:number): Foods{
    // return this.getAll().find(food.id == foodId) ?? new Food();
   return this.getAll().find(food => food.id == id)!;
  }
}
