import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-myoffice',
  templateUrl: './myoffice.component.html',
  styleUrls: ['./myoffice.component.css']
})
export class MyofficeComponent implements OnInit {
  title = "Dashboard";
  route: any;

  constructor( private router:Router, private location:Location) {
  //  this.route = location.path().toString();
    router.events.subscribe((val) => {
        this.route = location.path()== "/myoffice";
    });
  }

  ngOnInit() {
  }

}
