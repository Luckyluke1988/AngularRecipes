import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'This is a Test Description 1', 'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg'),
    new Recipe('Test Recipe 2', 'This is a Test Description 2', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2017/05/sausage-kale-gnocchi-one-pot.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}


