import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.css']
})
export class StockProductsComponent implements OnInit {
  title = "Produtos";
  routeParams: any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
       this.routeParams = this.activatedRoute.snapshot.queryParams;
       console.log(this.routeParams.id);
  }

}
