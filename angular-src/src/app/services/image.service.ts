import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  slicer:any;

  constructor(private http:Http) { }

    getSlicer(slicer){
      let headers = new Headers();
      this.slicer = slicer;
      headers.append('Content-Type','application/json');
      return this.http.get('/api/slicer/'+this.slicer,{headers:headers})
        .pipe(map(res=>res.json()));
    }
}
