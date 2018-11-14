import { Component } from '@angular/core';
import {CategoriesService} from './services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-src';
  menuCats:any;
  constructor(private categoriesService:CategoriesService) { }
  ngOnInit() {
    this.categoriesService.getMenuCats().subscribe(cats=>{
      this.menuCats = cats.results;
    },err =>{
      throw err; return false;
    });
  }
}
