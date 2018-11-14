import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  category:any;
  constructor(private productsService:ProductsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(products=>{
      this.products = products.results;
    },err =>{
      throw err; return false;
    });
    this.category = this.route.params.subscribe(params => {
        this.category = params['code']; // (+) converts string 'id' to a number
        console.log(this.category);
        // In a real app: dispatch action to load the details here.
     });
   }

   ngOnDestroy() {
     this.category.unsubscribe();
   }

}
