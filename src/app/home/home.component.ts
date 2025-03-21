import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginCredService } from '../services/login-cred.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
onRate($event: Event) {
throw new Error('Method not implemented.');
}
  foods:Foods[]=[];
  
  constructor(private fs:FoodService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.router.params.subscribe(params=>{
      if(params['searchItem']){
      this.foods=this.fs.getAll().filter(food=>food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      }
      else if(params['tag']){
      this.foods=this.fs.getAllFoodByTag(params['tag']);
      }
      else{
        this.foods=this.fs.getAll();
      }
    })
   
  }

}
