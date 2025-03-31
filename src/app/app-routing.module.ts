import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
 {path:'home', component:HomeComponent} ,
  {path:'search/:searchItem', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'food/:id', component:FoodpageComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  { path: 'checkout', component: CheckoutComponent },
  { path: 'feedback', component: FeedbackComponent },
  {path:'recipes', component:RecipesComponent},

  { path: '', redirectTo: '/recipes?tag=BreakFast', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
