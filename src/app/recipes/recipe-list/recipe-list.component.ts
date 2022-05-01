import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('test recipe 1',
      'Zaba_9780805243390_art_r1-scaled.jpg',
      'https://www.saveur.com/uploads/2022/04/30/47_Zaba_9780805243390_art_r1-scaled.jpg')
    ,
    new Recipe('test recipe 2',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190514-french-onion-meatballs-037-landscape-pf-1558026208.jpg',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190514-french-onion-meatballs-037-landscape-pf-1558026208.jpg')
    ,
    new Recipe('test recipe 3',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg')
    ,
    new Recipe('test recipe 4',
      'https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg',
      'https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
