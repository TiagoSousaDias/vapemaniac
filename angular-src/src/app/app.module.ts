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
import { NotfoundComponent } from './components/notfound/notfound.component';
import { StockProductsComponent } from './components/myoffice/stock-products/stock-products.component';
import { CategoriesComponent } from './components/myoffice/categories/categories.component';
import { AttrsComponent } from './components/myoffice/attrs/attrs.component';
import { CustomersComponent } from './components/myoffice/customers/customers.component';

const appRoutes: Routes = [
    {path:'',component: HomeComponent},
      {path:'myoffice',component:MyofficeComponent, children:[
        {path:'products',component:StockProductsComponent, children:[
          {path:':action',component:StockProductsComponent},
          {path:':action/:id',component:StockProductsComponent}
        ]},
        {path:'categories',component:CategoriesComponent, children:[
          {path:'edit/:id',component:CategoriesComponent},
          {path:'add',component:CategoriesComponent}
        ]},
        {path:'attrs',component:AttrsComponent},
        {path:'customers',component:CustomersComponent, children:[
          {path:'edit/:id',component:CustomersComponent},
          {path:'add',component:CustomersComponent}
        ]},
      ]},
    {path:'products/:code',component: MainpageComponent},
    {path:'products/:code/:id/',component: MainpageComponent},
    {path:'contacts', component:ContactosComponent},
    {path: '404', component: NotfoundComponent},
    {path: '**',  component: NotfoundComponent}
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
    FooterComponent,
    NotfoundComponent,
    StockProductsComponent,
    CategoriesComponent,
    AttrsComponent,
    CustomersComponent
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
