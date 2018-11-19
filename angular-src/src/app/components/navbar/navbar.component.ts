import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'MainNavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isOffice:any;
  menuCats:any;
  constructor(private categoriesService:CategoriesService, private router:Router) { }
  ngOnInit() {
       this.isOffice = this.router.url;
       console.log(this.isOffice);
    this.categoriesService.getMenuCats().subscribe(cats=>{
      this.menuCats = cats.results;
    },err =>{
      throw err; return false;
    });
  }

}
