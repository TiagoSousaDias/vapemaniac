(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.officeMenu{\r\n  height:100%;\r\n  min-height:100%;\r\n}\r\n\r\n.navOffice{\r\n  background: #4E5D6C;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4ub2ZmaWNlTWVudXtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBtaW4taGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcbi5uYXZPZmZpY2V7XHJcbiAgYmFja2dyb3VuZDogIzRFNUQ2QztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!route;then main else office\"></div>\r\n<ng-template #main>\r\n  <MainNavbar [office]=false ></MainNavbar>\r\n  <router-outlet></router-outlet>\r\n</ng-template>\r\n<ng-template #office>\r\n  <div class=\"row  no-gutters officeMenu\">\r\n    <div class=\"col-lg-2 navOffice\">\r\n      <MainNavbar [office]=true></MainNavbar>\r\n    </div>\r\n    <div class=\"col-lg-10\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, location) {
        var _this = this;
        this.router = router;
        this.location = location;
        this.title = 'angular-src';
        router.events.subscribe(function (val) {
            if (location.path().includes('myoffice')) {
                _this.route = true;
            }
            else {
                _this.route = false;
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/slider/slider.component */ "./src/app/components/slider/slider.component.ts");
/* harmony import */ var _components_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/mainpage/mainpage.component */ "./src/app/components/mainpage/mainpage.component.ts");
/* harmony import */ var _components_myoffice_myoffice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/myoffice/myoffice.component */ "./src/app/components/myoffice/myoffice.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_contactos_contactos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contactos/contactos.component */ "./src/app/components/contactos/contactos.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "./src/app/components/notfound/notfound.component.ts");
/* harmony import */ var _components_myoffice_stock_products_stock_products_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/myoffice/stock-products/stock-products.component */ "./src/app/components/myoffice/stock-products/stock-products.component.ts");
/* harmony import */ var _components_myoffice_categories_categories_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/myoffice/categories/categories.component */ "./src/app/components/myoffice/categories/categories.component.ts");
/* harmony import */ var _components_myoffice_attrs_attrs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/myoffice/attrs/attrs.component */ "./src/app/components/myoffice/attrs/attrs.component.ts");
/* harmony import */ var _components_myoffice_customers_customers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/myoffice/customers/customers.component */ "./src/app/components/myoffice/customers/customers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'myoffice', component: _components_myoffice_myoffice_component__WEBPACK_IMPORTED_MODULE_10__["MyofficeComponent"], children: [
            { path: 'products', component: _components_myoffice_stock_products_stock_products_component__WEBPACK_IMPORTED_MODULE_15__["StockProductsComponent"], children: [
                    { path: ':action', component: _components_myoffice_stock_products_stock_products_component__WEBPACK_IMPORTED_MODULE_15__["StockProductsComponent"] },
                    { path: ':action/:id', component: _components_myoffice_stock_products_stock_products_component__WEBPACK_IMPORTED_MODULE_15__["StockProductsComponent"] }
                ] },
            { path: 'categories', component: _components_myoffice_categories_categories_component__WEBPACK_IMPORTED_MODULE_16__["CategoriesComponent"], children: [
                    { path: 'edit/:id', component: _components_myoffice_categories_categories_component__WEBPACK_IMPORTED_MODULE_16__["CategoriesComponent"] },
                    { path: 'add', component: _components_myoffice_categories_categories_component__WEBPACK_IMPORTED_MODULE_16__["CategoriesComponent"] }
                ] },
            { path: 'attrs', component: _components_myoffice_attrs_attrs_component__WEBPACK_IMPORTED_MODULE_17__["AttrsComponent"] },
            { path: 'customers', component: _components_myoffice_customers_customers_component__WEBPACK_IMPORTED_MODULE_18__["CustomersComponent"], children: [
                    { path: 'edit/:id', component: _components_myoffice_customers_customers_component__WEBPACK_IMPORTED_MODULE_18__["CustomersComponent"] },
                    { path: 'add', component: _components_myoffice_customers_customers_component__WEBPACK_IMPORTED_MODULE_18__["CustomersComponent"] }
                ] },
        ] },
    { path: 'products/:code', component: _components_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_9__["MainpageComponent"] },
    { path: 'products/:code/:id/', component: _components_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_9__["MainpageComponent"] },
    { path: 'contacts', component: _components_contactos_contactos_component__WEBPACK_IMPORTED_MODULE_12__["ContactosComponent"] },
    { path: '404', component: _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__["NotfoundComponent"] },
    { path: '**', component: _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__["NotfoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_8__["SliderComponent"],
                _components_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_9__["MainpageComponent"],
                _components_myoffice_myoffice_component__WEBPACK_IMPORTED_MODULE_10__["MyofficeComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _components_contactos_contactos_component__WEBPACK_IMPORTED_MODULE_12__["ContactosComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__["NotfoundComponent"],
                _components_myoffice_stock_products_stock_products_component__WEBPACK_IMPORTED_MODULE_15__["StockProductsComponent"],
                _components_myoffice_categories_categories_component__WEBPACK_IMPORTED_MODULE_16__["CategoriesComponent"],
                _components_myoffice_attrs_attrs_component__WEBPACK_IMPORTED_MODULE_17__["AttrsComponent"],
                _components_myoffice_customers_customers_component__WEBPACK_IMPORTED_MODULE_18__["CustomersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contactos/contactos.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/contactos/contactos.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdG9zL2NvbnRhY3Rvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/contactos/contactos.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/contactos/contactos.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contactos works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/contactos/contactos.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/contactos/contactos.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactosComponent", function() { return ContactosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactosComponent = /** @class */ (function () {
    function ContactosComponent() {
    }
    ContactosComponent.prototype.ngOnInit = function () {
    };
    ContactosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactos',
            template: __webpack_require__(/*! ./contactos.component.html */ "./src/app/components/contactos/contactos.component.html"),
            styles: [__webpack_require__(/*! ./contactos.component.css */ "./src/app/components/contactos/contactos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactosComponent);
    return ContactosComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slider [slider]=\"1\"></app-slider>\n<app-products></app-products>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/mainpage/mainpage.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/mainpage/mainpage.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/mainpage/mainpage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/mainpage/mainpage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-products></app-products>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/mainpage/mainpage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/mainpage/mainpage.component.ts ***!
  \***********************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainpageComponent = /** @class */ (function () {
    function MainpageComponent() {
    }
    MainpageComponent.prototype.ngOnInit = function () {
    };
    MainpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainpage',
            template: __webpack_require__(/*! ./mainpage.component.html */ "./src/app/components/mainpage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.css */ "./src/app/components/mainpage/mainpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/components/myoffice/attrs/attrs.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/myoffice/attrs/attrs.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXlvZmZpY2UvYXR0cnMvYXR0cnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/myoffice/attrs/attrs.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/myoffice/attrs/attrs.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  attrs works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/myoffice/attrs/attrs.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/myoffice/attrs/attrs.component.ts ***!
  \**************************************************************/
/*! exports provided: AttrsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttrsComponent", function() { return AttrsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AttrsComponent = /** @class */ (function () {
    function AttrsComponent() {
    }
    AttrsComponent.prototype.ngOnInit = function () {
    };
    AttrsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attrs',
            template: __webpack_require__(/*! ./attrs.component.html */ "./src/app/components/myoffice/attrs/attrs.component.html"),
            styles: [__webpack_require__(/*! ./attrs.component.css */ "./src/app/components/myoffice/attrs/attrs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AttrsComponent);
    return AttrsComponent;
}());



/***/ }),

/***/ "./src/app/components/myoffice/categories/categories.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/myoffice/categories/categories.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXlvZmZpY2UvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/myoffice/categories/categories.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/myoffice/categories/categories.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  categories works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/myoffice/categories/categories.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/myoffice/categories/categories.component.ts ***!
  \************************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/components/myoffice/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/components/myoffice/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/components/myoffice/customers/customers.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/myoffice/customers/customers.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXlvZmZpY2UvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/myoffice/customers/customers.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/myoffice/customers/customers.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  customers works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/myoffice/customers/customers.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/myoffice/customers/customers.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomersComponent = /** @class */ (function () {
    function CustomersComponent() {
    }
    CustomersComponent.prototype.ngOnInit = function () {
    };
    CustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/components/myoffice/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.css */ "./src/app/components/myoffice/customers/customers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/components/myoffice/myoffice.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/myoffice/myoffice.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXlvZmZpY2UvbXlvZmZpY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/myoffice/myoffice.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/myoffice/myoffice.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"route;then dash;else main\"></div>\r\n<ng-template #dash>\r\n  <div class=\"container-fluid\">\r\n    <h1>{{title}}</h1>\r\n\r\n  </div>\r\n</ng-template>\r\n<ng-template #main>\r\n  <router-outlet></router-outlet>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/components/myoffice/myoffice.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/myoffice/myoffice.component.ts ***!
  \***********************************************************/
/*! exports provided: MyofficeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyofficeComponent", function() { return MyofficeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyofficeComponent = /** @class */ (function () {
    function MyofficeComponent(router, location) {
        var _this = this;
        this.router = router;
        this.location = location;
        this.title = "Dashboard";
        //  this.route = location.path().toString();
        router.events.subscribe(function (val) {
            _this.route = location.path() == "/myoffice";
        });
    }
    MyofficeComponent.prototype.ngOnInit = function () {
    };
    MyofficeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myoffice',
            template: __webpack_require__(/*! ./myoffice.component.html */ "./src/app/components/myoffice/myoffice.component.html"),
            styles: [__webpack_require__(/*! ./myoffice.component.css */ "./src/app/components/myoffice/myoffice.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], MyofficeComponent);
    return MyofficeComponent;
}());



/***/ }),

/***/ "./src/app/components/myoffice/stock-products/stock-products.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/myoffice/stock-products/stock-products.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXlvZmZpY2Uvc3RvY2stcHJvZHVjdHMvc3RvY2stcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/myoffice/stock-products/stock-products.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/myoffice/stock-products/stock-products.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  stock-products works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/myoffice/stock-products/stock-products.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/myoffice/stock-products/stock-products.component.ts ***!
  \********************************************************************************/
/*! exports provided: StockProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockProductsComponent", function() { return StockProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/categories.service */ "./src/app/services/categories.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StockProductsComponent = /** @class */ (function () {
    function StockProductsComponent(activatedRoute, productsService, categoriesService, router) {
        this.activatedRoute = activatedRoute;
        this.productsService = productsService;
        this.categoriesService = categoriesService;
        this.router = router;
        this.title = "Produtos";
        try {
            this.action = this.activatedRoute.firstChild.snapshot.params['action'] || '';
            this.id = this.activatedRoute.firstChild.snapshot.params['id'] || null;
        }
        catch (err) {
            this.action = '';
            this.id = '';
        }
    }
    StockProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.action);
        switch (this.action) {
            case 'edit':
                if (this.id != null) {
                    this.productsService.getProducts().subscribe(function (products) {
                        _this.listProducts = products.results;
                    }, function (err) {
                        throw err;
                        return false;
                    });
                    console.log(this.listProducts);
                }
                else {
                    this.router.navigate(['myoffice/products']);
                }
                break;
            case 'add':
                this.categoriesService.getCats().subscribe(function (categories) {
                    _this.categories = categories.results;
                }, function (err) {
                    throw err;
                    return false;
                });
                ;
                console.log(this.categories);
                break;
            default:
                break;
        }
    };
    StockProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock-products',
            template: __webpack_require__(/*! ./stock-products.component.html */ "./src/app/components/myoffice/stock-products/stock-products.component.html"),
            styles: [__webpack_require__(/*! ./stock-products.component.css */ "./src/app/components/myoffice/stock-products/stock-products.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
            _services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StockProductsComponent);
    return StockProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown{\r\n  position: relative;\r\n   display: inline-block;\r\n   vertical-align: middle;\r\n}\r\n.dropdown-menu{\r\n  width: 100%;\r\n  background-color:#66798C;\r\n}\r\n.navOffice .nav-item{\r\n  background-color: #465360;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7R0FDbEIsc0JBQXNCO0dBQ3RCLHVCQUF1QjtDQUN6QjtBQUNEO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtDQUMxQjtBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd257XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojNjY3OThDO1xyXG59XHJcblxyXG4ubmF2T2ZmaWNlIC5uYXYtaXRlbXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY1MzYwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!office;then main else elseBlock\"></div>\n<ng-template #main>\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n                <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                  <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n                  <ul class=\"navbar-nav mr-auto\">\n                    <li class=\"nav-item active\">\n                      <a class=\"nav-link\"  routerLink=\"/\" routerLinkActive=\"active\">Inicio<span class=\"sr-only\">(current)</span></a>\n                    </li>\n                    <li *ngFor=\"let item of menuCats\"  class=\"nav-item\">\n                      <a class=\"nav-link\" [routerLink]=\"['products',item.categorycode]\" routerLinkActive=\"active\">{{item.categoryName}}</a>\n                    </li>\n                  </ul>\n                  <form class=\"form-inline my-2 my-lg-0\">\n                    <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n                    <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\n                  </form>\n                </div>\n              </nav>\n</ng-template>\n<ng-template #elseBlock>\n    <ul class=\"nav nav-pills flex-column navOffice\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" routerLink=\"/myoffice\" routerLinkActive=\"active\">Inicio</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"dropdown\" aria-expanded=\"false\">Stock</a>\n         <ul class=\"dropdown-menu dropdown-menu-left\" role=\"menu\">\n            <li role=\"presentation\"><a role=\"menuitem\" class=\"dropdown-item\" routerLink=\"/myoffice/products\">Produtos</a></li>\n            <li role=\"presentation\"><a role=\"menuitem\" class=\"dropdown-item\" routerLink=\"/myoffice/categories\">Categorias</a></li>\n            <li role=\"presentation\"><a role=\"menuitem\" class=\"dropdown-item\" routerLink=\"/myoffice/attrs\">Atributos</a></li>\n        </ul>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"myoffice/customers\">Clientes</a>\n      </li>\n    </ul>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/categories.service */ "./src/app/services/categories.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(categoriesService) {
        this.categoriesService = categoriesService;
        this.office = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.office) {
            this.categoriesService.getMenuCats().subscribe(function (cats) {
                _this.menuCats = cats.results;
            }, function (err) {
                throw err;
                return false;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NavbarComponent.prototype, "office", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'MainNavbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/notfound/notfound.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  notfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.ts ***!
  \***********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/components/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/components/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/products/products.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/products/products.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of products\" class=\"card mb-3\">\r\n  <h3 class=\"card-header\">{{item.categoryName}}</h3>\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Special title treatment</h5>\r\n    <h6 class=\"card-subtitle text-muted\">Support card subtitle</h6>\r\n  </div>\r\n  <img style=\"height: 200px; width: 100%; display: block;\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" alt=\"Card image\">\r\n  <div class=\"card-body\">\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n  </div>\r\n  <ul class=\"list-group list-group-flush\">\r\n    <li class=\"list-group-item\">Cras justo odio</li>\r\n    <li class=\"list-group-item\">Dapibus ac facilisis in</li>\r\n    <li class=\"list-group-item\">Vestibulum at eros</li>\r\n  </ul>\r\n  <div class=\"card-body\">\r\n    <a href=\"#\" class=\"card-link\">Card link</a>\r\n    <a href=\"#\" class=\"card-link\">Another link</a>\r\n  </div>\r\n  <div class=\"card-footer text-muted\">\r\n    2 days ago\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productsService, route) {
        this.productsService = productsService;
        this.route = route;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.category = params['code'];
        });
        if (this.category != null) {
            this.productsService.getProductsByCat(this.category).subscribe(function (products) {
                _this.products = products.results;
            }, function (err) {
                throw err;
                return false;
            });
        }
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/components/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/slider/slider.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/slider/slider.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n  padding: 0px;\r\n  margin: 0;\r\n  max-width: 100%;\r\n  /*max-height: 100%;*/\r\n}\r\n\r\n.jumbotron .container{\r\n  margin:0;\r\n  padding: 0;\r\n    max-width: 100%;\r\n}\r\n\r\n.jumbotron .container img{\r\n  width:100%;\r\n\r\n}\r\n\r\n.row{\r\n  margin:0;\r\n}\r\n\r\n/*.logoSlideshow{\r\n  position: relative;\r\n}*/\r\n\r\n.logoSlideshow .logo{\r\n  position: absolute;\r\n  \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixxQkFBcUI7Q0FDdEI7O0FBRUQ7RUFDRSxTQUFTO0VBQ1QsV0FBVztJQUNULGdCQUFnQjtDQUNuQjs7QUFFRDtFQUNFLFdBQVc7O0NBRVo7O0FBRUQ7RUFDRSxTQUFTO0NBQ1Y7O0FBQ0Q7O0dBRUc7O0FBRUg7RUFDRSxtQkFBbUI7O0NBRXBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9ue1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIC8qbWF4LWhlaWdodDogMTAwJTsqL1xyXG59XHJcblxyXG4uanVtYm90cm9uIC5jb250YWluZXJ7XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzogMDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmp1bWJvdHJvbiAuY29udGFpbmVyIGltZ3tcclxuICB3aWR0aDoxMDAlO1xyXG5cclxufVxyXG5cclxuLnJvd3tcclxuICBtYXJnaW46MDtcclxufVxyXG4vKi5sb2dvU2xpZGVzaG93e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSovXHJcblxyXG4ubG9nb1NsaWRlc2hvdyAubG9nb3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/slider/slider.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/slider/slider.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center logoSlideshow\">\r\n      <div id=\"slideshow\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"2000\">\r\n        <div class=\"carousel-inner\">\r\n          <div *ngFor=\"let image of images; first as isFirst;\"  class=\"carousel-item\" [class.active]=\"isFirst\" >\r\n            <img class=\"d-block w-100\" src=\"{{image}}\" alt=\"First slide\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"logo\">\r\n        <img src=\"assets/img/lusitaurusw2.png\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--\r\n<div class=\"slideshow\">\r\n  <img  *ngFor=\"let image of images; first as isFirst; let select = index \" [class.imgVisible]=\"isFirst\" src=\"{{image}}\" class=\"slideImg\" [ngClass]=\"{'selected': select == selectedIndex}\"/>\r\n</div>\r\n<div class=\"logo\">\r\n  <img src=\"assets/img/lusitaurusw2.png\" alt=\"\">\r\n</div>\r\n-->\r\n"

/***/ }),

/***/ "./src/app/components/slider/slider.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/slider/slider.component.ts ***!
  \*******************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/image.service */ "./src/app/services/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderComponent = /** @class */ (function () {
    function SliderComponent(imageService) {
        this.imageService = imageService;
    }
    SliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageService.getSlicer(this.slider).subscribe(function (images) {
            _this.images = images.images;
        }, function (err) {
            throw err;
            return false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SliderComponent.prototype, "slider", void 0);
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/components/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/components/slider/slider.component.css")]
        }),
        __metadata("design:paramtypes", [_services_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/services/categories.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesService = /** @class */ (function () {
    function CategoriesService(http) {
        this.http = http;
    }
    CategoriesService.prototype.getMenuCats = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/categories/catMenu', { headers: headers }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CategoriesService.prototype.getCats = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/categories', { headers: headers }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CategoriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/services/image.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/image.service.ts ***!
  \*******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageService = /** @class */ (function () {
    function ImageService(http) {
        this.http = http;
    }
    ImageService.prototype.getSlicer = function (slicer) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.slicer = slicer;
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/slicer/' + this.slicer, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
    }
    ProductsService.prototype.getProductsByCat = function (category) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('api/products/' + category, { headers: headers }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ProductsService.prototype.getProducts = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('api/products', { headers: headers }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projectos\vapemaniac\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map