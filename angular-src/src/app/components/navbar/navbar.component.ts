import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'MainNavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  route:any;
  menuCats:any;
  constructor(private categoriesService:CategoriesService, private router:Router, private location:Location) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.route = location.path();
      } else {
        this.route = 'Home'
      }
    });
  }
  ngOnInit() {
    this.categoriesService.getMenuCats().subscribe(cats=>{
      this.menuCats = cats.results;
    },err =>{
      throw err; return false;
    });
  }

}
