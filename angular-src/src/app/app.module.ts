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
import { ContactosComponent } from './components/contactos/contactos.component';
import { FooterComponent } from './components/footer/footer.component';


const appRoutes: Routes = [
    {path:'',component: HomeComponent},
    {path:'products/:code',component: MainpageComponent},
    {path:'products/:code/:group/',component: MainpageComponent},
    {path:'products/:code/:group/:id',component: MainpageComponent},
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
    NavbarComponent,
    ContactosComponent,
    FooterComponent

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
