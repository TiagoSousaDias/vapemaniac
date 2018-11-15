import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  catMenu:any;

  constructor(private http:Http ) {}
  getMenuCats(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('api/categories/catMenu',{headers:headers}).
      pipe(map(res=>res.json()));
  }
}
