import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Foods[] = []; // Stores filtered recipes
  selectedFood: Foods | null = null; // Selected food to display recipe details

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const tag = params['tag']; // Get the tag parameter from the URL
      if (tag) {
        this.recipes = this.foodService.getAllFoodByTag(tag); // Filter recipes by tag
      } else {
        this.recipes = [];
      }
    });
  }

  selectFood(food: Foods): void {
    this.selectedFood = food; // Set the selected food to display its recipe
  }
  

}
