import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { LoginCredService } from '../services/login-cred.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  foods: Foods[] = [];
 
  selectedFoodId: number = 0; // Holds the ID of the food being rated
  newFeedback: { rating: number; comment: string } = { rating: 0, comment: '' };

  feedbackData = [
    { username: 'Roshi', date: '2025-03-28', comment: 'This is great!', rating: '⭐⭐' },
    { username: 'Mehru', date: '2025-03-29', comment: 'Had an excellent experience.', rating: '⭐⭐⭐⭐⭐' },
    { username: 'Jomin', date: '2025-03-30', comment: 'Needs improvement in some areas.', rating: '⭐⭐⭐' }
  ];
  showPopup = false; // Controls popup visibility
  thankYouMessage = false; // Controls thank-you message visibility
  newFeedbackComment = ''; // Holds new feedback comment
  newFeedbackRating = 0;
  constructor(private foodService: FoodService,private LoginCred:LoginCredService) {}
  selectRating(star: number) {
    this.newFeedbackRating = star;
  }
  openPopup() {
    if (this.LoginCred.isLoggedIn()) {
      // Allow popup to open if the user is logged in
      this.showPopup = true;
      this.thankYouMessage = false;
    } else {
      // Show an alert if the user is not logged in
      alert('Please log in to submit your feedback.');
      this.LoginCred.redirectToLogin(); 
    }
  }
  closePopup() {
    this.showPopup = false;
  }
  ngOnInit(): void {
    // Fetch all food items and their feedback
    this.foods = this.foodService.getAll();
  }
  submitFeedback() {
    if (!this.LoginCred.isLoggedIn()) {
      // Prevent submission if the user is not logged in
      alert('You must be logged in to submit feedback.');
      return;
    }
    this.showPopup = false;
    this.thankYouMessage = true;

    // Add new feedback to the list (optional: update with real username and date)
    
    this.feedbackData.push({
      username: this.LoginCred.getUser()?.username || 'Anonymous', // Replace with dynamic username if available
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      comment: this.newFeedbackComment,
      rating: '⭐'.repeat(this.newFeedbackRating) // Default rating (or make it dynamic)
    });

    // Clear the input field
    this.newFeedbackComment = '';
    this.newFeedbackRating = 0;

    // Hide the thank-you message after 3 seconds
    setTimeout(() => {
      this.thankYouMessage = false;
    }, 9000);
  }
//   submitFeedback(): void {
//     debugger;
//     console.log('Selected Food ID:', this.selectedFoodId);
//     console.log('New Feedback:', this.newFeedback);

//     const selectedFood = this.foods.find(food => food.id === +this.selectedFoodId);
//     console.log('Selected Food:', selectedFood);

//     if (selectedFood && this.newFeedback.rating && this.newFeedback.comment) {
//         selectedFood.feedbacks?.push({ ...this.newFeedback });
//         console.log('Feedback Added:', selectedFood.feedbacks);

//         this.newFeedback = { rating: 0, comment: '' }; // Reset form
//         this.selectedFoodId = 0; // Reset selection
//     } else {
//         console.error('Feedback submission failed - check inputs or food selection');
//     }
// }


  

}
