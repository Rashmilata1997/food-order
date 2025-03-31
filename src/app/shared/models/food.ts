export class Foods{
    id!: number;
    price!: number;
    name!: string;
    favorite:boolean=false;
    star:number=0;
    tags?: string[];
    imageUrl!: string;
    cookTime!: string;
    origins!: string[];
    feedbacks?: { rating: number, comment: string }[] = [];
    directions?: string[];
  ingredients?: string[];
}