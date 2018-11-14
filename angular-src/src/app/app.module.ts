import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { MyofficeComponent } from './components/myoffice/myoffice.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const appRoutes: Routes = [
    {path:'',component: HomeComponent},
    {path:'products',component: MainpageComponent},
    {path:'myoffice',component:MyofficeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    SliderComponent,
    MainpageComponent,
    MyofficeComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
