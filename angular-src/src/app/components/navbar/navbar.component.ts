import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'MainNavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
