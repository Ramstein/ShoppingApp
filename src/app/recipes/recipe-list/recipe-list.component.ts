import {Component, OnInit} from '@angular/core';

import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe',
      'this is a simply a test.',
      'https://www.saveur.com/uploads/2022/04/30/47_Zaba_9780805243390_art_r1-scaled.jpg')
    ,
    new Recipe('A test recipe',
      'this is a simply a test.',
      'https://www.saveur.com/uploads/2022/04/30/47_Zaba_9780805243390_art_r1-scaled.jpg')
    ,
    new Recipe('A test recipe',
      'this is a simply a test.',
      'https://www.saveur.com/uploads/2022/04/30/47_Zaba_9780805243390_art_r1-scaled.jpg')
    ,
    new Recipe('A test recipe',
      'this is a simply a test.',
      'https://www.saveur.com/uploads/2022/04/30/47_Zaba_9780805243390_art_r1-scaled.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
