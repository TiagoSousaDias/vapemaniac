import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:any;

  constructor(private http:Http) { }

  getProducts(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:8080/products',{headers:headers}).
      pipe(map(res=>res.json()));
  }
}
