import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../../../services/products.service';
import { CategoriesService} from '../../../services/categories.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.css']
})
export class StockProductsComponent implements OnInit {
  title = "Produtos";
  id: any;
  action:any;
  listProducts: any;
  listCats:any;
  listAttrs:any;
  constructor(private activatedRoute: ActivatedRoute,
    private productsService:ProductsService,
    private categoriesService:CategoriesService,
    private router:Router) {
   try{
    this.action = this.activatedRoute.firstChild.snapshot.params['action'] || '';
    this.id = this.activatedRoute.firstChild.snapshot.params['id']  || null;
    }catch(err){
      this.action = '';
      this.id = '';
    }
  }

  ngOnInit() {
    switch(this.action){
        case 'edit':
          if(this.id != null){
            this.productsService.getProducts().subscribe(products=>{
                this.listProducts = products.results;
              },err =>{
                throw err; return false;
              });
                console.log(this.listProducts);
          }else{
            this.router.navigate(['myoffice/products']);
          }
          break;
        case 'add':
            this.categoriesService.getCats().subscribe(cats=>{
              this.listCats = cats.results;
            },err =>{
              throw err; return false;
            });
            this.productsService.getAttributes().subscribe(products=>{
                this.listAttrs = products.results;
              },err =>{
                throw err; return false;
              });
          break;
        default:
          break;
    }

  }
}
