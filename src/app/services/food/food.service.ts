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
      feedbacks: [
        { rating: 5, comment: 'Delicious and fresh!' },
        { rating: 4, comment: 'Could use more variety in fruits.' }

      ],
      directions: [
        'Chop the fruits into bite-sized pieces.',
        'Mix all the fruits in a large bowl.',
        'Drizzle honey or yogurt for added flavor.'
      ],
      ingredients: ['2 cups mixed fruits', '1 tbsp honey', '1/2 cup yogurt']
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
      tags: ['FastFood', 'Samosas'],
      feedbacks: [],
      directions: [
        'Prepare the dough for the samosas.',
        'Cook the filling (potatoes, peas, and spices).',
        'Stuff the dough with the filling and fry until golden brown.'
      ],
      ingredients: ['2 cups flour', '1 cup cooked potatoes', '1/2 cup peas', 'Spices']
  
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
      tags: ['FastFood', 'Pasta'],
      feedbacks: [],
      directions:[
         'Boil Water. Start with a very large pot of water, about 6 quarts per pound of pasta.',
        'Add Salt. Put in a lot of salt, about 3 tablespoons',
        'Add the Pasta',
        'Stir In the Sauce'
      ],
      ingredients:['1 cup all-purpose flour','½ teaspoon salt','1 egg beaten',  
        '2 tablespoons water (Optional)']
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
      feedbacks: [],
      directions:[
        'Beat the eggs and add 2 spoons of milk',
        'Add onion, corriander leaves, green chillies and sprinkle salt, pepper, chilli flakes',
        'Mix it well',
        'Heat a pan with butter and dip the bread slice in the egg mixture',
        'Place it on the pan and cook for 2-3 mins',
        'make sure egg is cooked well on both sides and it is done'
      ],
      ingredients:[
        'eggs','butter','milk','breads','chopped vegeies'
      ]
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
      feedbacks: [],
      directions:[
        'firstly, steam ½ carrot, 6 cauliflower, 4 beans, 2 tbsp sweet corn, 2 tbsp peas and ¼ tsp salt',
        'steam for 10 minutes on medium flame.',
        'transfer the steamed vegetables to a large mixing bowl.',
        'further, add ¼ tsp cumin powder, ½ tsp garam masala, ¼ tsp turmeric, ½ tsp chilli powder, ¼ tsp chaat masala and ½ tsp salt.',
          'prepare a slurry by mixing 2 tbsp cornflour, ¼ cup maida and ½ cup water in a small bowl.',
   'prepare ball sized patties and dip in maida slurry.',
   'coat with panko breadcrumbs uniformly',
  'shallow fry in hot oil keeping the flame on medium',
  'mix well-forming burger sauce',
  'place prepared patties and cover with another part of the bun'
      ],
      ingredients:[
        'bun','chopped vegies','oil','breadcrumbs','herbs','corriander leaves'
      ]
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
      feedbacks: [],
      directions:[
        'take water and boil it',
        'add milk then add coffee',
        'add sugar as per taste'
      ],
      ingredients:[
        'milk',
        'coffee',
        'boiled water', 'sugar'
      ]
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
      feedbacks: [],
      directions:[
        'firstly, in a large vessel take water, 1 tsp salt and get to a boil',
'now add 1 pack hakka noodle and boil for 2 minutes cookTime',
'once the noodles cook to the container, then drain off',
'rinse with cold water to stop further cooking',
'add 1 tsp oil and mix well.',
'in a large wok heat 2 tbsp oil add 3 clove garlic, 2 inch ginger, 2 tbsp spring onion and 1 chilli.',
'stir fry on high flame',
'now add ½ onion and cook slightly without browning the onions.',
'Add chopped vegeies',
'add in boiled noodles, prepared sauce mix',
'Mix well'
      ],
      ingredients:[
       'noodles','oil','chopped onions,chillies, garlic,ginger, carrot, capsicum, mushrooms',
       'vinegar', 'herbs', 'corriander leaves' 
      ]
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
      feedbacks: [],
      directions:[
        'Cut fries with a serrated knife ',
        'No soaking, just rinse',
        'Gently simmer 10 minutes in vinegar water',
        'Shallow-fry twice'
      ],
      ingredients:[
        'slice chopped potatos',
        'peri-peri sprinkle',
        'oil'
      ]
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
      feedbacks: [],
      directions:[
        'Dissolve yeast in warm water in a small bowl. Let stand until creamy, about 5 minutes.',
        'Combine bread flour, olive oil, sugar, salt, and yeast mixture in a mixing bowl; stir well to combine. Beat until a stiff dough has formed. Cover the bowl; let rise at room temperature until dough doubles in volume, about 30 minutes.',
        'Preheat the oven to 350 degrees F (175 degrees C).',
        'Turn dough out onto a well-floured surface. Form dough into a round and roll out into a thin crust. Cover with your favorite sauce and toppings.',
        'Bake pizza in the preheated oven until cheese is bubbly and crust is golden brown, about 20 minutes.'
      ],
      ingredients:[
        'corn',
        'black pepper',
        'oregano',
        'cheese','chopped vegies'
      ]
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
      feedbacks: [],
      directions:[
'Boil the eggs',
'Meanwhile, mash the avocado, mayonnaise (or yogurt), and lemon juice in the bottom of a medium bowl.',
'Peel and chop your hard-boiled eggs, and then add them to the bowl',
'Stir in the celery and chives. Then, season with salt and pepper to taste.'
      ],
      ingredients:[
        'Eggs','Avacado','Fresh herbs', 'Celery','Lemon'
,'Mayonnaise or yogurt'      ]
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
      feedbacks: [],
      directions:[
        'Place coffee grounds in the bottom of the French press. ',
        'Pour just enough hot water over the coffee to soak the beans and let the fresh coffee bloom ',
        'Let sit 30 seconds, then fill the French Press to fill-line with hot water and cap with the French Press plunger',
        'Let steep another 3 minutes and 30 seconds ',
        'Then press down on the plunger, pour and enjoy!'

      ],
      ingredients:[
        'black coffee beans',
        'water',
        'sugar if required'
      ]
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
      feedbacks: [],
      directions:[
        'Rinse the rice in a strainer or colander under cold running water until the water runs clear.',
        'Combine rice and water in a saucepan over medium-high heat and bring to a boil.',
        ' combine rice vinegar, oil, sugar, and salt in a small saucepan over medium heat',
        'Cook until the sugar has dissolved. Allow to cool. Then stir into the cooked rice.',
       'Then stir into the cooked rice. While mixture will appear very wet at first, keep stirring and rice will dry as it cools.'
      ],
      ingredients:[

        'Ginger, Garlic, Capsicum, carrot, green chillies, beans, spring onion, brocolli all fine chopped',
        'Vinegar','Sauya Sauce',
        'Corriander leaves'
      ]
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
      feedbacks: [],
      directions:[
        'Take rice noodles in a bowl, cover with boiling water and let it soak for 5 mins till it is cooked. Drain and set aside.',
        'Heat oil in a wok till smoking hot. Add in ginger, garlic and chillies. Fry them for a min.',
        'Add in spring onion white, carrot, beans, capsicum, broccoli and toss well. Add in salt and sugar. Cook this till done.',
        'Now add in soy sauce and vinegar and mix well',
        'Add in noodles and give a quick toss. Now add in bean sprouts and toss well.',
        'Finally add in coriander leaves and spring onion green part. Toss well.',
        'Serve hot'
      ],
      ingredients:[
        'Rice Vermicelli - 3 cups',
        'Boiling Hot Water as needed',
        'Oil - 2 tbsp',
        'Ginger, Garlic, Capsicum, carrot, green chillies, beans, spring onion, brocolli all fine chopped',
        'Vinegar','Sauya Sauce',
        'Corriander leaves'
      ]
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
      feedbacks: [],
      directions:[
        'Heat oil in a wok or a pan. First add the star anise and fry for a few seconds or until the oil becomes fragrant.',
        'Add the garlic, ginger and sauté for some seconds. No need to brown the garlic.',
        'Add the spring onions whites and sauté for about 2 minutes.',
        'Then add finely chopped french beans.',
        'Stir fry french beans for 2 to 3 minutes over medium to medium-high heat.',
        'The vegetables have to be stir-fried, until they are almost cooked and yet retain their crunchiness and crispiness. Stir-frying vegetables on high heat takes about 4 to 6 minutes.',
        'Add the soy sauce, salt and pepper. Stir quickly and add cooked and cooled rice.',
        'Stir fry for a few minutes until the sauce has coated the rice well. Keep a check when adding salt, as soy sauce already has salt in it.'
      ],
      ingredients:[
        'cooked rice',
        'Oil - 2 tbsp',
        'Ginger, Garlic, Capsicum, carrot, green chillies, beans, spring onion, brocolli all fine chopped',
        'Vinegar','Sauya Sauce',
        'Corriander leaves'
      ]
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
      {name:'Lunch', count:6},
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
