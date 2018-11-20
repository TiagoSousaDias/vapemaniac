import { Component, OnInit, Input } from '@angular/core';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'MainNavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() office:boolean;
  menuCats:any;
  constructor(private categoriesService:CategoriesService) { this.office = false;  }
  ngOnInit() {

    if(!this.office){
      this.categoriesService.getMenuCats().subscribe(cats=>{
        this.menuCats = cats.results;
      },err =>{
        throw err; return false;
      });
    }
  }

}
