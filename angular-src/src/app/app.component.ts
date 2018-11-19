import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-src';
  route: any;
  constructor( private router:Router, private location:Location) {
    router.events.subscribe((val) => {
      if(location.path().includes('myoffice') ){
        this.route = true;
      } else {
        this.route = false;
      }
    });
  }

}
