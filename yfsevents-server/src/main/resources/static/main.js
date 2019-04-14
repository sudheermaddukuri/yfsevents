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

/***/ "./src/app/Email.ts":
/*!**************************!*\
  !*** ./src/app/Email.ts ***!
  \**************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
var Email = /** @class */ (function () {
    function Email(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Email;
}());



/***/ }),

/***/ "./src/app/api.service.mail.ts":
/*!*************************************!*\
  !*** ./src/app/api.service.mail.ts ***!
  \*************************************/
/*! exports provided: ApiServiceMail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServiceMail", function() { return ApiServiceMail; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ApiServiceMail = /** @class */ (function () {
    function ApiServiceMail(http, router) {
        this.http = http;
        this.router = router;
        this.basicURL = "/sendEmail";
        this.basicURLVolunteer = "/api";
        this.urlList = new Map();
        this.initialiseUrlList();
    }
    ApiServiceMail.prototype.initialiseUrlList = function () {
        this.urlList.set('send', '/send');
        this.urlList.set('getEmail', '/volunteer/email');
    };
    ApiServiceMail.prototype.postData = function (data) {
        var _this = this;
        console.log('postingggg', data);
        this.http.post(this.basicURL + this.urlList.get("send"), data).subscribe(function (response) {
            console.log('postResponse: ', response);
            alert("Sucessfully Sent Email");
            alert("Response is" + response);
            _this.router.navigate(['/events']);
        });
    };
    ApiServiceMail.prototype.getData = function () {
        var uri = this.basicURLVolunteer + this.urlList.get("getEmail");
        return this.http.get(uri);
    };
    ApiServiceMail = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ApiServiceMail);
    return ApiServiceMail;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.basicURL = "/api";
        this.urlList = new Map();
        this.initialiseUrlList();
    }
    ApiService.prototype.initialiseUrlList = function () {
        this.urlList.set('partnerngo', '/partnerngo');
        this.urlList.set('event', '/event');
        this.urlList.set('events', '/events');
        this.urlList.set('volunteer-create', '/volunteer-create');
        this.urlList.set('volunteer', '/volunteer');
        this.urlList.set('collegeregistration', '/collegeregistration');
        this.urlList.set('interestedAreasCategory', '/interestedAreasCategory');
        this.urlList.set('collegeregistration-list', '/collegeregistration/list');
    };
    ApiService.prototype.postData = function (data, type) {
        return this.post(data, type).subscribe(function (response) {
            console.log('postResponse: ', response);
        });
    };
    ApiService.prototype.post = function (data, type) {
        return this.http.post(this.basicURL + this.urlList.get(type), data);
    };
    ApiService.prototype.getData = function (type, id, formatted) {
        var uri = this.basicURL + this.urlList.get(type);
        if (id) {
            uri = uri + '/' + id;
            if (formatted) {
                uri = uri + '/' + 'formatted';
            }
        }
        return this.http.get(uri);
    };
    ApiService.prototype.putData = function (data, id, type) {
        return this.http.put(this.basicURL + this.urlList.get(type) + "/" + id, data).subscribe(function (response) {
            console.log('updating:', response);
        });
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _partner_ngo_partner_ngo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partner-ngo/partner-ngo.component */ "./src/app/partner-ngo/partner-ngo.component.ts");
/* harmony import */ var _events_event_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/event-list.component */ "./src/app/events/event-list.component.ts");
/* harmony import */ var _events_add_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/add-event.component */ "./src/app/events/add-event.component.ts");
/* harmony import */ var _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./volunteer/volunteer.component */ "./src/app/volunteer/volunteer.component.ts");
/* harmony import */ var _inventory_data_inventory_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inventory-data/inventory-data.component */ "./src/app/inventory-data/inventory-data.component.ts");
/* harmony import */ var _college_registration_college_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./college-registration/college-registration.component */ "./src/app/college-registration/college-registration.component.ts");
/* harmony import */ var _send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./send-mail/send-mail.component */ "./src/app/send-mail/send-mail.component.ts");
/* harmony import */ var _inventory_data_inventory_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inventory-data/inventory-list.component */ "./src/app/inventory-data/inventory-list.component.ts");
/* harmony import */ var _college_registration_college_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./college-registration/college-list.component */ "./src/app/college-registration/college-list.component.ts");
/* harmony import */ var _partner_ngo_grid_partner_ngo_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./partner-ngo-grid/partner-ngo-grid.component */ "./src/app/partner-ngo-grid/partner-ngo-grid.component.ts");
/* harmony import */ var _college_registration_grid_college_registration_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./college-registration-grid/college-registration-grid.component */ "./src/app/college-registration-grid/college-registration-grid.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _volunteer_grid_volunteer_grid_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./volunteer-grid/volunteer-grid.component */ "./src/app/volunteer-grid/volunteer-grid.component.ts");

















var routes = [
    {
        path: 'collegeregistration', children: [
            { path: '', component: _college_registration_college_registration_component__WEBPACK_IMPORTED_MODULE_8__["CollegeRegistrationComponent"] },
            { path: ':mode/:id', component: _college_registration_college_registration_component__WEBPACK_IMPORTED_MODULE_8__["CollegeRegistrationComponent"] }
        ]
    },
    {
        path: 'grid/collegeregistration', component: _college_registration_grid_college_registration_grid_component__WEBPACK_IMPORTED_MODULE_13__["CollegeRegistrationGridComponent"]
    },
    {
        path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
    },
    {
        path: 'inventorydata', children: [
            { path: '', component: _inventory_data_inventory_data_component__WEBPACK_IMPORTED_MODULE_7__["InventoryDataComponent"] },
            { path: ':mode', component: _inventory_data_inventory_data_component__WEBPACK_IMPORTED_MODULE_7__["InventoryDataComponent"] }
        ]
    },
    {
        path: 'inventorylist', component: _inventory_data_inventory_list_component__WEBPACK_IMPORTED_MODULE_10__["InventoryListComponent"]
    },
    {
        path: 'collegelist', component: _college_registration_college_list_component__WEBPACK_IMPORTED_MODULE_11__["CollegeListComponent"]
    },
    {
        path: 'grid/partnerngo', component: _partner_ngo_grid_partner_ngo_grid_component__WEBPACK_IMPORTED_MODULE_12__["PartnerNgoGridComponent"]
    },
    {
        path: 'partnerngo', children: [
            { path: '', component: _partner_ngo_partner_ngo_component__WEBPACK_IMPORTED_MODULE_3__["PartnerNGOComponent"] },
            { path: ':mode/:id', component: _partner_ngo_partner_ngo_component__WEBPACK_IMPORTED_MODULE_3__["PartnerNGOComponent"] }
        ]
    },
    { path: 'events', component: _events_event_list_component__WEBPACK_IMPORTED_MODULE_4__["EventListComponent"] },
    { path: 'addevent', component: _events_add_event_component__WEBPACK_IMPORTED_MODULE_5__["AddEventComponent"] },
    {
        path: 'email', component: _send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_9__["SendMailComponent"]
    },
    {
        path: 'grid/volunteer', component: _volunteer_grid_volunteer_grid_component__WEBPACK_IMPORTED_MODULE_16__["VolunteerGridComponent"]
    },
    {
        path: 'volunteer', children: [
            { path: '', component: _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_6__["VolunteerComponent"] },
            { path: ':mode/:id', component: _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_6__["VolunteerComponent"] }
        ]
    },
    {
        path: '**', redirectTo: 'login'
    },
    {
        path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app-root-container{\nwidth:100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxVQUFVO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhcHAtcm9vdC1jb250YWluZXJ7XG53aWR0aDoxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background-color: #ba2a29;margin-bottom:20px;\">\n  <div class=\"container-fluid\">\n\n    <a class=\"navbar-brand\" href=\"#\" style=\"height:70px\">\n      <img src=\"/assets/youth-for-seva.png\" style=\"height:50px\">\n    </a>\n\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right text-white\" style=\"margin-top:12px;\">\n        <li><a href=\"\">HOME</a></li>\n        <li class=\"dropdown\" *ngIf=!isUser()>\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">REGISTER\n            <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li *ngIf=isAdmin()><a [routerLink]=\"['/grid/partnerngo']\">Partner NGO</a></li>\n            <li><a [routerLink]=\"['/grid/volunteer']\">Volunteer</a></li>\n            <li *ngIf=isAdmin()><a [routerLink]=\"['/grid/collegeregistration']\">College</a></li>\n            <li *ngIf=isAdmin()><a [routerLink]=\"['/inventorylist']\">Inventory Data</a></li>\n          </ul>\n        </li>\n        <li><a [routerLink]=\"['/events']\">EVENTS</a></li>\n\n        <li *ngIf=!app.authenticated><a [routerLink]=\"['/login']\">LOGIN</a></li>\n        <li *ngIf=app.authenticated><a href=\"#\" (click)=\"logout()\">LOGOUT</a></li>\n        <li><a [routerLink]=\"\">CONTACT</a></li>\n        <li><a [routerLink]=\"\"><span class=\"glyphicon glyphicon-search\"></span></a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div id=\"app-root-container\" class=\"container\">\n<router-outlet></router-outlet>\n</div>\n\n\n<!--<footer></footer>-->\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(app, http, router) {
        this.app = app;
        this.http = http;
        this.router = router;
        this.title = 'Y4S';
        this.app.authenticate(undefined, undefined);
    }
    AppComponent.prototype.isAdmin = function () {
        return this.app.authenticated && this.app.role == 'ROLE_ADMIN';
    };
    AppComponent.prototype.isUser = function () {
        return this.app.authenticated && this.app.role == 'ROLE_USER';
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.http.get('logout').subscribe(function (response) {
            _this.app.authenticated = false;
            _this.router.navigateByUrl('/login');
        });
    };
    AppComponent.API_URL = 'http://localhost:8080';
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _partner_ngo_partner_ngo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partner-ngo/partner-ngo.component */ "./src/app/partner-ngo/partner-ngo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _events_event_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./events/event-list.component */ "./src/app/events/event-list.component.ts");
/* harmony import */ var _events_add_event_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./events/add-event.component */ "./src/app/events/add-event.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/timepicker/fesm5/ngx-bootstrap-timepicker.js");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/typeahead/fesm5/ngx-bootstrap-typeahead.js");
/* harmony import */ var _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./volunteer/volunteer.component */ "./src/app/volunteer/volunteer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _inventory_data_inventory_data_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./inventory-data/inventory-data.component */ "./src/app/inventory-data/inventory-data.component.ts");
/* harmony import */ var _college_registration_college_registration_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./college-registration/college-registration.component */ "./src/app/college-registration/college-registration.component.ts");
/* harmony import */ var _send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./send-mail/send-mail.component */ "./src/app/send-mail/send-mail.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var _inventory_data_inventory_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./inventory-data/inventory-list.component */ "./src/app/inventory-data/inventory-list.component.ts");
/* harmony import */ var _college_registration_college_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./college-registration/college-list.component */ "./src/app/college-registration/college-list.component.ts");
/* harmony import */ var _partner_ngo_grid_partner_ngo_grid_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./partner-ngo-grid/partner-ngo-grid.component */ "./src/app/partner-ngo-grid/partner-ngo-grid.component.ts");
/* harmony import */ var _college_registration_grid_college_registration_grid_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./college-registration-grid/college-registration-grid.component */ "./src/app/college-registration-grid/college-registration-grid.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _urlPermission_url_permission__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./urlPermission/url.permission */ "./src/app/urlPermission/url.permission.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _volunteer_grid_volunteer_grid_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./volunteer-grid/volunteer-grid.component */ "./src/app/volunteer-grid/volunteer-grid.component.ts");
/* harmony import */ var _events_renderer_button_renderer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./events/renderer/button-renderer.component */ "./src/app/events/renderer/button-renderer.component.ts");
/* harmony import */ var _xhrInterceptor__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./xhrInterceptor */ "./src/app/xhrInterceptor.ts");




































//import{EventEmiterService} from './event-emmiter-service1.service';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _partner_ngo_partner_ngo_component__WEBPACK_IMPORTED_MODULE_6__["PartnerNGOComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _events_event_list_component__WEBPACK_IMPORTED_MODULE_11__["EventListComponent"],
                _events_add_event_component__WEBPACK_IMPORTED_MODULE_12__["AddEventComponent"],
                _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_16__["VolunteerComponent"],
                _inventory_data_inventory_data_component__WEBPACK_IMPORTED_MODULE_19__["InventoryDataComponent"],
                _college_registration_college_registration_component__WEBPACK_IMPORTED_MODULE_20__["CollegeRegistrationComponent"],
                _send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_21__["SendMailComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_22__["WelcomeComponent"],
                _inventory_data_inventory_list_component__WEBPACK_IMPORTED_MODULE_24__["InventoryListComponent"],
                _college_registration_college_list_component__WEBPACK_IMPORTED_MODULE_25__["CollegeListComponent"],
                _partner_ngo_grid_partner_ngo_grid_component__WEBPACK_IMPORTED_MODULE_26__["PartnerNgoGridComponent"],
                _college_registration_grid_college_registration_grid_component__WEBPACK_IMPORTED_MODULE_27__["CollegeRegistrationGridComponent"],
                _volunteer_grid_volunteer_grid_component__WEBPACK_IMPORTED_MODULE_34__["VolunteerGridComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_29__["RegisterComponent"],
                _events_renderer_button_renderer_component__WEBPACK_IMPORTED_MODULE_35__["ButtonRendererComponent"]
            ],
            imports: [
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"].withComponents([_events_renderer_button_renderer_component__WEBPACK_IMPORTED_MODULE_35__["ButtonRendererComponent"]]),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["AlertModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"].withComponents([]),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_14__["TimepickerModule"].forRoot(),
                ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_15__["TypeaheadModule"].forRoot(),
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_23__["AngularMultiSelectModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_18__["HttpModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_32__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_31__["UserService"], _urlPermission_url_permission__WEBPACK_IMPORTED_MODULE_30__["UrlPermission"], _app_service__WEBPACK_IMPORTED_MODULE_33__["AppService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"], useClass: _xhrInterceptor__WEBPACK_IMPORTED_MODULE_36__["XhrInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.authenticated = false;
        this.role = "";
    }
    AppService.prototype.authenticate = function (credentials, callback) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](credentials ? {
            authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});
        this.http.get('user', { headers: headers }).subscribe(function (response) {
            if (response['name']) {
                _this.authenticated = true;
                if (response['principal']) {
                    _this.role = response['principal']['role'];
                }
            }
            else {
                _this.authenticated = false;
            }
            return callback && callback();
        });
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/college-registration-grid/college-registration-grid.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/college-registration-grid/college-registration-grid.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlZ2UtcmVnaXN0cmF0aW9uLWdyaWQvY29sbGVnZS1yZWdpc3RyYXRpb24tZ3JpZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/college-registration-grid/college-registration-grid.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/college-registration-grid/college-registration-grid.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"page-header well text-center well-sm\">\n    <h3><strong> College Registration</strong></h3>\n  </div>\n  <div class=\"col-md-10\" #myGrid  style=\"width: 100%; height: 100%;\">\n    <ag-grid-angular \n      class=\"ag-theme-balham\" \n      [rowData]=\"data\" \n      [columnDefs]=\"headers\"\n      (rowClicked)=\"onRowCilcked($event)\">\n    </ag-grid-angular>\n  </div>\n  <div class=\"row\" style=\"margin-top:10px\">\n      <div class=\"col-md-1\"></div>\n      <div class=\"col-md-10\">\n          <div style=\"text-align:right\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"router.navigate(['/collegeregistration'])\">\n              Add College\n          </button>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/college-registration-grid/college-registration-grid.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/college-registration-grid/college-registration-grid.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CollegeRegistrationGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeRegistrationGridComponent", function() { return CollegeRegistrationGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CollegeRegistrationGridComponent = /** @class */ (function () {
    function CollegeRegistrationGridComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.data = [];
        this.headers = [
            { headerName: 'College Name', field: 'name', filter: true, sortable: true },
            { headerName: 'Registration Id', field: 'registrationId', filter: true },
            { headerName: 'Address Line 1', field: 'addressLine1', filter: true },
            { headerName: 'Address Line 2', field: 'addressLine2', filter: true },
            { headerName: 'City', field: 'city', filter: true },
            { headerName: 'State', field: 'state', filter: true },
            { headerName: 'Pincode', field: 'pincode', filter: true },
            { headerName: 'Mou ID', field: 'mouID', filter: true },
            { headerName: 'Mou Status', field: 'mouStatus' },
            { headerName: 'Mou Name', field: 'mouName' },
            { headerName: 'Number Of Events Agreed', field: 'noOfEvents' },
            { headerName: 'Valid From', field: 'fromDate' },
            { headerName: 'Valid To', field: 'toDate' },
            { headerName: 'Comments', field: 'comments' },
            { headerName: 'Mou ID (2)', field: 'mouID1', filter: true },
            { headerName: 'Mou Status (2)', field: 'mouStatus1' },
            { headerName: 'Mou Name (2)', field: 'mouName1' },
            { headerName: 'Number Of Events Agreed (2)', field: 'noOfEvents1' },
            { headerName: 'Valid From (2)', field: 'fromDate1' },
            { headerName: 'Valid To (2)', field: 'toDate1' },
            { headerName: 'Comments (2)', field: 'comments1' },
            { headerName: 'Mou ID (3)', field: 'mouID2', filter: true },
            { headerName: 'Mou Status (3)', field: 'mouStatus2' },
            { headerName: 'Mou Name (3)', field: 'mouName2' },
            { headerName: 'Number Of Events Agreed (3)', field: 'noOfEvents2' },
            { headerName: 'Valid From (3)', field: 'fromDate2' },
            { headerName: 'Valid To (3)', field: 'toDate2' },
            { headerName: 'Comments (3)', field: 'comments2' },
            { headerName: 'Mou ID (4)', field: 'mouID3', filter: true },
            { headerName: 'Mou Status (4)', field: 'mouStatus3' },
            { headerName: 'Mou Name (4)', field: 'mouName3' },
            { headerName: 'Number Of Events Agreed (4)', field: 'noOfEvents3' },
            { headerName: 'Valid From (4)', field: 'fromDate3' },
            { headerName: 'Valid To (4)', field: 'toDate3' },
            { headerName: 'Comments (4)', field: 'comments3' },
            { headerName: 'Mou ID (5)', field: 'mouID4', filter: true },
            { headerName: 'Mou Status (5)', field: 'mouStatus4' },
            { headerName: 'Mou Name (5)', field: 'mouName4' },
            { headerName: 'Number Of Events Agreed (5)', field: 'noOfEvents4' },
            { headerName: 'Valid From (5)', field: 'fromDate4' },
            { headerName: 'Valid To (5)', field: 'toDate4' },
            { headerName: 'Comments (5)', field: 'comments4' },
            { headerName: 'Mou ID (6)', field: 'mouID5', filter: true },
            { headerName: 'Mou Status (6)', field: 'mouStatus5' },
            { headerName: 'Mou Name (6)', field: 'mouName5' },
            { headerName: 'Number Of Events Agreed (6)', field: 'noOfEvents5' },
            { headerName: 'Valid From (6)', field: 'fromDate5' },
            { headerName: 'Valid To (6)', field: 'toDate5' },
            { headerName: 'Comments (6)', field: 'comments5' },
            { headerName: 'Mou ID (7)', field: 'mouID6', filter: true },
            { headerName: 'Mou Status (7)', field: 'mouStatus6' },
            { headerName: 'Mou Name (7)', field: 'mouName6' },
            { headerName: 'Number Of Events Agreed (7)', field: 'noOfEvents6' },
            { headerName: 'Valid From (7)', field: 'fromDate6' },
            { headerName: 'Valid To (7)', field: 'toDate6' },
            { headerName: 'Comments (7)', field: 'comments6' },
            { headerName: 'Mou ID (8)', field: 'mouID7', filter: true },
            { headerName: 'Mou Status (8)', field: 'mouStatus7' },
            { headerName: 'Mou Name (8)', field: 'mouName7' },
            { headerName: 'Number Of Events Agreed (8)', field: 'noOfEvents7' },
            { headerName: 'Valid From (8)', field: 'fromDate7' },
            { headerName: 'Valid To (8)', field: 'toDate7' },
            { headerName: 'Comments (8)', field: 'comments7' },
            { headerName: 'Mou ID (9)', field: 'mouID8', filter: true },
            { headerName: 'Mou Status (9)', field: 'mouStatus8' },
            { headerName: 'Mou Name (9)', field: 'mouName8' },
            { headerName: 'Number Of Events Agreed (9)', field: 'noOfEvents8' },
            { headerName: 'Valid From (9)', field: 'fromDate8' },
            { headerName: 'Valid To (9)', field: 'toDate8' },
            { headerName: 'Comments (9)', field: 'comments8' },
            { headerName: 'Mou ID (10)', field: 'mouID9', filter: true },
            { headerName: 'Mou Status (10)', field: 'mouStatus9' },
            { headerName: 'Mou Name (10)', field: 'mouName9' },
            { headerName: 'Number Of Events Agreed (10)', field: 'noOfEvents9' },
            { headerName: 'Valid From (10)', field: 'fromDate9' },
            { headerName: 'Valid To (10)', field: 'toDate9' },
            { headerName: 'Comments (10)', field: 'comments9' },
        ];
    }
    CollegeRegistrationGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.data=[
        //   {name:'n1', description: 'd1', city: 'c1', state: 's1', authorizedPerson: [
        //     {name: 'a1'},{name:'a2'}
        //   ]},
        //   {name:'n2', description: 'd2', city: 'c2', state: 's2', authorizedPerson: [
        //     {name: 'b1'},{name:'b2'},{name:'b3'},{name:'b4'},{name:'b5'}
        //   ]}
        // ];
        this.apiService.getData('collegeregistration').subscribe(function (response) {
            var result = JSON.parse(JSON.stringify(response));
            Array.from(result).forEach(function (element) {
                var mouDetails = JSON.parse(JSON.stringify(element)).mouDetails;
                console.log(mouDetails);
                if (mouDetails[0] != null) {
                    Object.assign(element, { mouID: mouDetails[0].mouID });
                    Object.assign(element, { mouStatus: mouDetails[0].mouStatus });
                    Object.assign(element, { mouName: mouDetails[0].mouName });
                    Object.assign(element, { noOfEvents: mouDetails[0].noOfEvents });
                    Object.assign(element, { fromDate: mouDetails[0].fromDate });
                    Object.assign(element, { toDate: mouDetails[0].toDate });
                    Object.assign(element, { comments: mouDetails[0].comments });
                }
                if (mouDetails[1] != null) {
                    Object.assign(element, { mouID1: mouDetails[1].mouID });
                    Object.assign(element, { mouStatus1: mouDetails[1].mouStatus });
                    Object.assign(element, { mouName1: mouDetails[1].mouName });
                    Object.assign(element, { noOfEvents1: mouDetails[1].noOfEvents });
                    Object.assign(element, { fromDate1: mouDetails[1].fromDate });
                    Object.assign(element, { toDate1: mouDetails[1].toDate });
                    Object.assign(element, { comments1: mouDetails[1].comments });
                }
                if (mouDetails[2] != null) {
                    Object.assign(element, { mouID2: mouDetails[2].mouID });
                    Object.assign(element, { mouStatus2: mouDetails[2].mouStatus });
                    Object.assign(element, { mouName2: mouDetails[2].mouName });
                    Object.assign(element, { noOfEvents2: mouDetails[2].noOfEvents });
                    Object.assign(element, { fromDate2: mouDetails[2].fromDate });
                    Object.assign(element, { toDate2: mouDetails[2].toDate });
                    Object.assign(element, { comments2: mouDetails[2].comments });
                }
                if (mouDetails[3] != null) {
                    Object.assign(element, { mouID3: mouDetails[3].mouID });
                    Object.assign(element, { mouStatus3: mouDetails[3].mouStatus });
                    Object.assign(element, { mouName3: mouDetails[3].mouName });
                    Object.assign(element, { noOfEvents3: mouDetails[3].noOfEvents });
                    Object.assign(element, { fromDate3: mouDetails[3].fromDate });
                    Object.assign(element, { toDate3: mouDetails[3].toDate });
                    Object.assign(element, { comments3: mouDetails[3].comments });
                }
                if (mouDetails[4] != null) {
                    Object.assign(element, { mouID4: mouDetails[4].mouID });
                    Object.assign(element, { mouStatus4: mouDetails[4].mouStatus });
                    Object.assign(element, { mouName4: mouDetails[4].mouName });
                    Object.assign(element, { noOfEvents4: mouDetails[4].noOfEvents });
                    Object.assign(element, { fromDate4: mouDetails[4].fromDate });
                    Object.assign(element, { toDate4: mouDetails[4].toDate });
                    Object.assign(element, { comments4: mouDetails[4].comments });
                }
                if (mouDetails[5] != null) {
                    Object.assign(element, { mouID5: mouDetails[5].mouID });
                    Object.assign(element, { mouStatus5: mouDetails[5].mouStatus });
                    Object.assign(element, { mouName5: mouDetails[5].mouName });
                    Object.assign(element, { noOfEvents5: mouDetails[5].noOfEvents });
                    Object.assign(element, { fromDate5: mouDetails[5].fromDate });
                    Object.assign(element, { toDate5: mouDetails[5].toDate });
                    Object.assign(element, { comments5: mouDetails[5].comments });
                }
                if (mouDetails[6] != null) {
                    Object.assign(element, { mouID6: mouDetails[6].mouID });
                    Object.assign(element, { mouStatus6: mouDetails[6].mouStatus });
                    Object.assign(element, { mouName6: mouDetails[6].mouName });
                    Object.assign(element, { noOfEvents6: mouDetails[6].noOfEvents });
                    Object.assign(element, { fromDate6: mouDetails[6].fromDate });
                    Object.assign(element, { toDate6: mouDetails[6].toDate });
                    Object.assign(element, { comments6: mouDetails[6].comments });
                }
                if (mouDetails[7] != null) {
                    Object.assign(element, { mouID7: mouDetails[7].mouID });
                    Object.assign(element, { mouStatus7: mouDetails[7].mouStatus });
                    Object.assign(element, { mouName7: mouDetails[7].mouName });
                    Object.assign(element, { noOfEvents7: mouDetails[7].noOfEvents });
                    Object.assign(element, { fromDate7: mouDetails[7].fromDate });
                    Object.assign(element, { toDate7: mouDetails[7].toDate });
                    Object.assign(element, { comments7: mouDetails[7].comments });
                }
                if (mouDetails[8] != null) {
                    Object.assign(element, { mouID8: mouDetails[8].mouID });
                    Object.assign(element, { mouStatus8: mouDetails[8].mouStatus });
                    Object.assign(element, { mouName8: mouDetails[8].mouName });
                    Object.assign(element, { noOfEvents8: mouDetails[8].noOfEvents });
                    Object.assign(element, { fromDate8: mouDetails[8].fromDate });
                    Object.assign(element, { toDate8: mouDetails[8].toDate });
                    Object.assign(element, { comments8: mouDetails[8].comments });
                }
                if (mouDetails[9] != null) {
                    Object.assign(element, { mouID9: mouDetails[9].mouID });
                    Object.assign(element, { mouStatus9: mouDetails[9].mouStatus });
                    Object.assign(element, { mouName9: mouDetails[9].mouName });
                    Object.assign(element, { noOfEvents9: mouDetails[9].noOfEvents });
                    Object.assign(element, { fromDate9: mouDetails[9].fromDate });
                    Object.assign(element, { toDate9: mouDetails[9].toDate });
                    Object.assign(element, { comments9: mouDetails[9].comments });
                }
            });
            console.log(response);
            console.log(_this.data);
            _this.data = result;
            console.log(_this.data);
        });
    };
    CollegeRegistrationGridComponent.prototype.onRowCilcked = function (event) {
        console.log(event.rowIndex);
        this.router.navigateByUrl("/collegeregistration/edit/" + ((event.rowIndex) + 1));
    };
    CollegeRegistrationGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-college-registration-grid',
            template: __webpack_require__(/*! ./college-registration-grid.component.html */ "./src/app/college-registration-grid/college-registration-grid.component.html"),
            styles: [__webpack_require__(/*! ./college-registration-grid.component.css */ "./src/app/college-registration-grid/college-registration-grid.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CollegeRegistrationGridComponent);
    return CollegeRegistrationGridComponent;
}());



/***/ }),

/***/ "./src/app/college-registration/college-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/college-registration/college-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlZ2UtcmVnaXN0cmF0aW9uL2NvbGxlZ2UtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/college-registration/college-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/college-registration/college-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\" style=\"margin-top: 20px\">\n  <div class=\"col-md-1\">\n  \n  </div>\n  \n  <div class=\"col-md-10\">\n          <div id=\"myGrid\"  style=\"width: 100%; height: 100%;\">\n  <ag-grid-angular \n      class=\"ag-theme-balham\"\n      [rowData]=\"rowData\" \n      [columnDefs]=\"columnDefs\"\n      >\n  </ag-grid-angular>\n  </div>\n  </div>\n  <div class=\"col-md-1\">\n      \n  </div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/college-registration/college-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/college-registration/college-list.component.ts ***!
  \****************************************************************/
/*! exports provided: CollegeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeListComponent", function() { return CollegeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CollegeListComponent = /** @class */ (function () {
    function CollegeListComponent() {
        this.columnDefs = [
            { headerName: 'College Name', field: 'collegename', filter: true },
            { headerName: 'MOU Name', field: 'mouname', filter: true },
            { headerName: 'MOU ID', field: 'mouID', filter: true },
            { headerName: 'No Of Events', field: 'noOfEvents', filter: true },
            { headerName: 'Start Date', field: 'startDate', filter: true },
            { headerName: 'End Date', field: 'endDate', filter: true },
            { headerName: 'Comments', field: 'comments', filter: true },
        ];
        this.rowData = [
            { collegename: 'JNTU', mouname: 'a', mouID: '1', noOfEvents: '10', startDate: '2019-03-10', endDate: '2019-04-09', comments: '' },
        ];
    }
    CollegeListComponent.prototype.ngOnInit = function () {
    };
    CollegeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-college-list',
            template: __webpack_require__(/*! ./college-list.component.html */ "./src/app/college-registration/college-list.component.html"),
            styles: [__webpack_require__(/*! ./college-list.component.css */ "./src/app/college-registration/college-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CollegeListComponent);
    return CollegeListComponent;
}());



/***/ }),

/***/ "./src/app/college-registration/college-registration.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/college-registration/college-registration.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlZ2UtcmVnaXN0cmF0aW9uL2NvbGxlZ2UtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/college-registration/college-registration.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/college-registration/college-registration.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"page-header well well-sm\">\n    <h3><strong> College Registration</strong></h3>\n  </div>\n\n  <form [formGroup]=\"collegeForm\">\n    <div class=\"panel panel-info\">\n      <div class=\"panel-heading\">\n        <label>About College</label>\n      </div>\n      <div class=\"panel-body\">\n        <div formGroupName=\"collegeDetails\">\n          <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group required\">\n                <label class=\"control-label\">College Name</label>\n                <input type=\"text\" formControlName=\"name\" class=\"form-control well well-sm\">\n               <!-- <div *ngIf=\"collegeForm.controls['collegeDetails'].controls.name.errors&&(collegeForm.controls['collegeDetails'].controls.name.dirty||collegeForm.controls['collegeDetails'].controls.name.touched)\" class=\"invalid-feedback\">\n                  <div *ngIf=\"collegeForm.controls['collegeDetails'].controls.name.errors.required\" class=\"field-invalid\">Name is required</div>\n                </div>-->\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group required\">\n                <label class=\"control-label\">Registration Id</label>\n                <input type=\"text\" formControlName=\"registrationId\" class=\"form-control well well-sm\">\n                <!--<div *ngIf=\"collegeform.controls['collegeDetails'].controls.registrationId.errors&&(collegeform.controls['collegeDetails'].controls.registrationId.dirty||collegeform.controls['collegeDetails'].controls.registrationId.touched)\" class=\"invalid-feedback\">\n                  <div *ngIf=\"collegeform.controls['collegeDetails'].controls.registrationId.errors.required\" class=\"field-invalid\"> RegistrationId is required</div>\n                </div>-->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-info\">\n      <div class=\"panel-heading\">\n        <label>Address</label>\n      </div>\n      <div class=\"panel-body\">\n        <div formGroupName=\"address\">\n          <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group required\">\n                <label class=\"control-label\">Address Line 1</label>\n                <input type=\"text\" formControlName=\"addressLine1\" class=\"form-control well well-sm\">\n              </div>\n            </div>\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Address Line 2</label>\n                <input type=\"text\" formControlName=\"addressLine2\" class=\"form-control well well-sm\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group required\">\n                <label class=\"control-label\">City</label>\n                <input type=\"text\" formControlName=\"city\" class=\"form-control well well-sm\">\n              </div>\n            </div>\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group required\">\n                <label class=\"control-label\">State</label>\n                <input type=\"text\" formControlName=\"state\" class=\"form-control well well-sm\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group required\">\n                <label class=\"control-label\">Pincode</label>\n                <input type=\"text\" formControlName=\"pincode\" class=\"form-control well well-sm\">\n              </div>\n            </div>\n            <div class=\"col-md-6 offset-md-3\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-info\">\n      <div class=\"panel-heading\">\n        <label>MOU Details</label>\n      </div>\n      <div class=\"panel-body\">\n        <ul class=\"nav nav-tabs\" active=\"selectedTab\">\n          <li class=\"nav active\" *ngIf=\"numberOfMOUs>0\"><a href=\"#tab0\" data-toggle=\"tab\" (click)=\"activateTab(1)\">MOU\n              1</a></li>\n          <li class=\"nav\" *ngFor=\"let num of getArray(numberOfMOUs-1); let i=index;\"><a href=\"#tab{{i+1}}\" data-toggle=\"tab\"\n              (click)=\"activateTab(i+2)\">MOU {{i+2}}</a></li>\n\n          <div class=\"pull-right\">\n            <button class=\"btn btn-primary btn-sm btn-space\" (click)=addMOU() [disabled]=\"isMaxLimitReached(10)\">Add MOU</button>\n            <button class=\"btn btn-primary btn-sm \" (click)=removeMOU() >Remove MOU</button>\n\n          </div>\n\n        </ul>\n\n        <div class=\"tab-content\">\n          <div formArrayName=\"mouDetails\">\n            <div class=\"tab-pane\" *ngFor=\"let person of collegeForm.get('mouDetails').controls;let i=index\"\n              formGroupName=\"{{i}}\" id=\"tab{{i}}\">\n\n              <div *ngIf=\"selectedTab==i\">\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group required\">\n                      <label class=\"control-label\">MOU ID</label>\n                      <input type=\"text\" formControlName=\"mouID\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group required\">\n                      <label class=\"control-label\">MOU STATUS</label>\n                      <!-- <input type=\"text\" formControlName=\"mouStatus\" class=\"form-control well well-sm\"> -->\n                      <select formControlName=\"mouStatus\" class=\"form-control\">\n                        <option *ngFor=\"let action of moustatusinfo\" [value]=\"action\">{{action}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group required\">\n                      <label class=\"control-label\">MOU Name</label>\n                      <input type=\"text\" formControlName=\"mouName\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Number Of Events Agreed</label>\n                      <input type=\"text\" formControlName=\"noOfEvents\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Valid From</label>\n                      <input type=\"text\" formControlName=\"fromDate\" class=\"form-control well well-sm\" bsDatepicker>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Valid To</label>\n                      <input type=\"text\" formControlName=\"toDate\" class=\"form-control well well-sm\" bsDatepicker>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Comments</label>\n                      <textarea type=\"text\" formControlName=\"comments\" class=\"form-control well well-sm\"></textarea>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </form>\n  <div class=\"text-center\">\n    <!--<button class=\"btn btn-primary btn-sx\"  (click)=\"onSubmit()\">Register</button>-->\n    <button (click)=\"onSubmit()\" *ngIf=\"!mode\" class=\"btn btn-primary btn-space\">Register</button>\n    <button (click)=\"onSubmit()\" *ngIf=\"mode=='edit'\" class=\"btn btn-primary btn-space\">Update</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/college-registration/college-registration.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/college-registration/college-registration.component.ts ***!
  \************************************************************************/
/*! exports provided: CollegeRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeRegistrationComponent", function() { return CollegeRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CollegeRegistrationComponent = /** @class */ (function () {
    function CollegeRegistrationComponent(formBuilder, apiService, route, router) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.numberOfMOUs = 0;
        this.selectedTab = -1;
        this.moustatusinfo = ['Active', 'InActive', 'Suspended'];
    }
    CollegeRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.collegeForm = this.formBuilder.group({
            collegeDetails: this.collegeDetails(),
            address: this.address(),
            mouDetails: this.formBuilder.array([this.mouDetails()])
        });
        this.numberOfMOUs = this.getMOUDetails().length;
        this.activateTab(this.numberOfMOUs);
        this.route.paramMap.subscribe(function (params) {
            console.log(params);
            _this.mode = params.get('mode');
            _this.id = +params.get('id');
            if (!isNaN(_this.id)) {
                _this.apiService.getData('collegeregistration', _this.id, true).subscribe(function (result) {
                    var data = JSON.parse(JSON.stringify(result));
                    console.log("GetResponse: " + data);
                    if (data.mouDetails) {
                        data.mouDetails.forEach(function (mou, index) {
                            if (index != 0) {
                                _this.addMOU();
                            }
                        });
                    }
                    _this.collegeForm.setValue(data);
                });
            }
            else {
                alert('Error in ID');
            }
        });
    };
    CollegeRegistrationComponent.prototype.collegeDetails = function () {
        return this.formBuilder.group({
            name: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ]],
            registrationId: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)
                ]],
        });
    };
    CollegeRegistrationComponent.prototype.address = function () {
        return this.formBuilder.group({
            addressLine1: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2000)
                ]],
            addressLine2: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2000)
                ]],
            state: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ]],
            city: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ]],
            pincode: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]+$"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)
                ]]
        });
    };
    CollegeRegistrationComponent.prototype.mouDetails = function () {
        return this.formBuilder.group({
            mouID: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)
                ]],
            mouStatus: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)
                ]],
            mouName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)
                ]],
            noOfEvents: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)
                ]],
            fromDate: [],
            toDate: [],
            comments: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)
                ]]
        });
    };
    CollegeRegistrationComponent.prototype.getMOUDetails = function () {
        return this.collegeForm.get('mouDetails');
    };
    CollegeRegistrationComponent.prototype.addMOU = function () {
        if (this.numberOfMOUs < 10) {
            (this.getMOUDetails()).push(this.mouDetails());
            this.numberOfMOUs = this.getMOUDetails().length;
        }
    };
    CollegeRegistrationComponent.prototype.removeMOU = function () {
        if (this.numberOfMOUs > 1) {
            (this.getMOUDetails()).removeAt(this.numberOfMOUs - 1);
            this.numberOfMOUs = this.getMOUDetails().length;
            this.selectedTab = this.numberOfMOUs - 1;
        }
    };
    CollegeRegistrationComponent.prototype.getNumberOfMOUs = function () {
        return this.numberOfMOUs;
    };
    CollegeRegistrationComponent.prototype.isMaxLimitReached = function (val) {
        return this.numberOfMOUs >= val;
    };
    CollegeRegistrationComponent.prototype.getArray = function (val) {
        return Array(val);
    };
    CollegeRegistrationComponent.prototype.activateTab = function (val) {
        this.selectedTab = val - 1;
    };
    CollegeRegistrationComponent.prototype.checkForMandatoryValidations = function (collegeDetails) {
        var checkflag = false;
        if (collegeDetails.name && collegeDetails.registrationId && collegeDetails.addressLine1 && collegeDetails.city && collegeDetails.state
            && collegeDetails.pincode) {
            if (collegeDetails.mouDetails.length) {
                collegeDetails.mouDetails.forEach(function (o) {
                    if (!o.mouID || !o.mouStatus || !o.mouName) {
                        checkflag = true;
                        return false;
                    }
                });
                if (!checkflag) {
                    return true;
                }
            }
            else {
                return true;
            }
        }
        else
            return false;
    };
    CollegeRegistrationComponent.prototype.onSubmit = function () {
        console.log('inside method onsubmit');
        var json = Object.assign({ mouDetails: this.getMOUDetails().value }, this.collegeForm.get('collegeDetails').value, this.collegeForm.get('address').value);
        if (this.mode == 'edit') {
            json = Object.assign(json, { id: this.id });
        }
        console.log('submitting: ', json);
        if (this.checkForMandatoryValidations(json)) {
            var response = this.apiService.postData(json, 'collegeregistration');
            if (response) {
                if (this.mode == 'edit') {
                    alert('Succesfully updated College Details');
                }
                else {
                    alert('Succesfully registered College Details');
                }
                this.router.navigateByUrl("grid/collegeregistration");
            }
        }
        else {
            alert('Please fill out the mandatory fields');
        }
    };
    CollegeRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-college-registration',
            template: __webpack_require__(/*! ./college-registration.component.html */ "./src/app/college-registration/college-registration.component.html"),
            styles: [__webpack_require__(/*! ./college-registration.component.css */ "./src/app/college-registration/college-registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CollegeRegistrationComponent);
    return CollegeRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/events/add-event.component.css":
/*!************************************************!*\
  !*** ./src/app/events/add-event.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n    margin-bottom:25px;\n}\n:host >>> .alert-md-local {\n    background-color: #009688;\n    border-color: #00695C;\n    color: #fff;\n    margin-bottom:0px;\n    margin-top: 20px;\n}\n.itemsrow{\n    margin-bottom:0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL2FkZC1ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9ldmVudHMvYWRkLWV2ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgICBtYXJnaW4tYm90dG9tOjI1cHg7XG59XG46aG9zdCA+Pj4gLmFsZXJ0LW1kLWxvY2FsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xuICAgIGJvcmRlci1jb2xvcjogIzAwNjk1QztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uaXRlbXNyb3d7XG4gICAgbWFyZ2luLWJvdHRvbTowcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/events/add-event.component.html":
/*!*************************************************!*\
  !*** ./src/app/events/add-event.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<alert type=\"md-local\" *ngIf=\"submitSuc\">{{message}}</alert>\n\n<div class=\"container-fluid\">\n    <div class=\"page-header well text-center well-sm\">\n      <h3><strong> Event Registration</strong></h3>\n    </div>\n\n    <form [formGroup]=\"eventForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          \n          <div class=\"row form-row\">\n            <div class=\"col-md-6 offset-md-3 form-group\">\n                <label class=\"control-label\">Event Name</label>\n                <input type=\"text\" formControlName=\"eventName\" placeholder=\"Event Name\" class=\"form-control\">\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <label class=\"control-label\">Action</label>\n                <select formControlName=\"eventAction\" class=\"form-control\">\n                  <option *ngFor=\"let action of eventActions\" [value]=\"action\">{{action}}</option>\n                </select>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <label class=\"control-label\">Recurring Event:</label>\n                <select formControlName=\"recurringEvent\" class=\"form-control\">\n                  <option *ngFor=\"let value of recurringEventOptions\" [value]=\"value\">{{value}}</option>\n                </select>\n              </div>\n          </div>\n\n          <div class=\"row form-row\">\n            <div class=\"col-md-4 offset-md-3 form-group\">\n                <label class=\"control-label\">PartnerNGO Name</label>\n                <!-- <input formControlName=\"ngoName\" [typeahead]=\"ngos\" placeholder=\"PartnerNGO Name\" class=\"form-control\"> -->\n                <select formControlName=\"ngoName\" class=\"form-control\">\n                    <option *ngFor=\"let value of ngos\" [value]=\"value\">{{value}}</option>\n                  </select>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <label class=\"control-label\">Category</label>\n                <select formControlName=\"eventCategory\" class=\"form-control\" (change)=\"onCategorySelected()\">\n                  <option *ngFor=\"let category of eventCategories\" [value]=\"category\">{{category}}</option>\n                </select>\n            </div> \n            <div class=\"col-md-4 form-group\">\n                <label class=\"control-label\">College-MOU</label>\n                <select formControlName=\"college\" class=\"form-control\">\n                  <option *ngFor=\"let mou of mouItems\" [value]=\"mou\">{{mou}}</option>\n                </select>\n            </div>          \n          </div>\n\n            <div class=\"row form-row itemsrow\">\n              <div class=\"col-md-6 offset-md-3 form-group\">\n                <label for=\"datepicker\">Select Date & Time Range</label>\n                <input type=\"text\" class=\"form-control\" id=\"datepicker\" formControlName=\"eventDuration\" bsDaterangepicker/>\n              </div>\n              <div class=\"col-md-3 form-group\">\n                <timepicker [formControlName]=\"'fromTime'\">\n                  </timepicker>\n              </div>\n              <div class=\"col-md-3 form-group\">\n                <timepicker [formControlName]=\"'toTime'\"></timepicker>\n              </div>\n            </div>\n\n            <div class=\"row form-row\">\n              <div class=\"col-md-8 offset-md-3 form-group\">\n                <label class=\"control-label\">Items Required:</label>\n                <angular2-multiselect [data]=\"itemList\" [settings]=\"settings\" \n                  (onSelect)=\"log($event)\"\n                  (onDeSelect)=\"log($event)\" \n                  (onSelectAll)=\"log($event)\" \n                  (onDeSelectAll)=\"log($event)\" formControlName=\"items\">\n                </angular2-multiselect>\n              </div>\n              <div class=\"col-md-2  form-group\">\n                  <label class=\"control-label\">Volunteers Required</label>\n                  <input type=\"text\" formControlName=\"volunteersReq\" placeholder=\"0\" class=\"form-control\">\n              </div>\n              <div class=\"col-md-2 form-group\">\n                  <label class=\"control-label\">Volunteers Registered</label>\n                  <input type=\"text\" formControlName=\"volunteersReg\" placeholder=\"0\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"row form-row\">\n              <div class =\" col-md-12 offset-md-3 form-group\">\n                <label class=\"control-label\">Comments</label>\n                <textarea type=\"text\" formControlName=\"comments\" class=\"form-control\"></textarea>\n              </div>\n            </div>\n\n        </div>\n      </div>\n      <button type=\"submit\" [disabled]=\"eventForm.pristine\">Save</button>\n    </form>\n</div>  \n\n\n\n\n\n<!-- <form >\n        <div class=\"form-row\">\n            <div class=\"col-md-1\"></div>\n          <div class=\"form-group col-md-5\">\n            <label for=\"eventname\">Event Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"eventname\" placeholder=\"Name\">\n          </div>\n          <div class=\"form-group col-md-5\">\n                <label for=\"eventaction\">Action</label>\n                <select id=\"eventaction\" class=\"form-control\">\n                  <option selected>Choose...</option>\n                  <option>Not Started</option>\n                  <option>In progress</option>\n                  <option>completed</option>\n                  <option>Abandoned</option>\n                </select>\n          </div>\n          <div class=\"col-md-1\"></div>\n        </div>\n\n        <div class=\"form-row\">\n                <div class=\"col-md-1\"></div>\n              <div class=\"form-group col-md-5\">\n                <label for=\"ngoname\">Partner Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"ngoname\" placeholder=\"NGO Name\" >\n              </div>\n              <div class=\"form-group col-md-5\">\n                    <label for=\"eventcategory\">Event category</label>\n                    <select id=\"eventcategory\" class=\"form-control\">\n                      <option selected>Choose...</option>\n                      <option>Not Started</option>\n                      <option>In progress</option>\n                      <option>completed</option>\n                      <option>Abandoned</option>\n                    </select>\n              </div>\n              <div class=\"col-md-1\"></div>\n            </div>\n\n            <div class=\"form-row\">\n              <div class=\"col-md-1\"></div>\n            <div class=\"form-group col-md-5\">\n                <label for=\"datepicker\">Select Date Range</label>\n                <input id=\"datepicker\" class=\"form-control\"\n                bsDaterangepicker [(ngModel)]=\"bsRangeValue\" >\n            </div>\n            <div class=\"form-group col-md-5\">\n                <label for=\"eventaction\">Recurring Event</label>\n                <select id=\"eventaction\" class=\"form-control\">\n                  <option selected>No</option>\n                  <option>Yes</option>\n                </select>\n            </div>\n            <div class=\"col-md-1\"></div>\n          </div>\n\n\n        \n\n            \n</form> -->"

/***/ }),

/***/ "./src/app/events/add-event.component.ts":
/*!***********************************************!*\
  !*** ./src/app/events/add-event.component.ts ***!
  \***********************************************/
/*! exports provided: AddEventComponent, Eventdata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventComponent", function() { return AddEventComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eventdata", function() { return Eventdata; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inventory_data_inventorydata_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../inventory-data/inventorydata.service */ "./src/app/inventory-data/inventorydata.service.ts");







var AddEventComponent = /** @class */ (function () {
    function AddEventComponent(formBuilder, apiService, route, inventoryService) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.route = route;
        this.inventoryService = inventoryService;
        this.bsValue = new Date();
        this.maxDate = new Date();
        this.eventData = new Eventdata();
        this.itemList = [];
        this.config = {
            search: true,
            height: 'auto',
            placeholder: 'Select',
            noResultsFound: 'No results found!',
            searchPlaceholder: 'Search',
        };
        this.selectedItems = [];
        this.settings = {};
        this.eventActions = ['Not Started', 'In progress', 'Completed', 'Abandoned'];
        this.eventCategories = ['PartnerNGO', 'Education', 'Environment', 'Health', 'Other'];
        this.recurringEventOptions = ['Yes', 'No'];
        this.mouItems = [];
        this.eventForm = this.formBuilder.group({
            eventName: '',
            eventAction: 'Not Started',
            eventDuration: null,
            fromTime: new Date(),
            toTime: new Date(),
            ngoName: '',
            eventCategory: '',
            college: '',
            recurringEvent: 'No',
            items: [],
            volunteersReq: '',
            volunteersReg: '',
            comments: '',
        });
        this.submitSuc = false;
    }
    AddEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getData('partnerngo').subscribe(function (data) {
            _this.ngos_data = data;
            _this.ngos = _this.ngos_data.map(function (ngo) {
                return ngo.name;
            });
        });
        this.apiService.getData('collegeregistration-list').subscribe(function (data) {
            _this.mouItems = data.map(function (item) {
                return item[0] + '--' + item[1];
            });
        });
        //   this.itemList = [
        //     { "id": 1, "itemName": "Item1" },
        //     { "id": 2, "itemName": "Item2" },
        //     { "id": 3, "itemName": "Item3" },
        //     { "id": 4, "itemName": "Item4" },
        //     { "id": 5, "itemName": "Item5" },
        //     { "id": 6, "itemName": "Item6" }
        // ];
        this.selectedItems = [];
        this.settings = {
            singleSelection: false,
            text: "Select Items",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true
        };
        if (this.route.snapshot.paramMap && this.route.snapshot.paramMap.get('id')) {
            this.apiService.getData('event', this.route.snapshot.paramMap.get('id')).subscribe(function (data) {
                console.log(data.eventDuration);
                _this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US');
                _this.eventForm.setValue({
                    eventName: data.eventName,
                    eventAction: data.eventAction,
                    eventDuration: data.eventDuration.map(function (date) {
                        return _this.pipe.transform(date, 'shortDate');
                    }),
                    fromTime: data.eventfromTime,
                    toTime: data.eventtoTime,
                    ngoName: data.ngoName,
                    eventCategory: data.eventCategory,
                    recurringEvent: data.recurringEvent,
                    items: data.eventItems.map(function (item) { return ({
                        id: data.eventItems.indexOf(item),
                        itemName: item
                    }); }),
                    volunteersReq: data.volunteers,
                    comments: data.comments,
                    college: data.college,
                    volunteersReg: ''
                });
                console.log(_this.eventForm.value.eventDuration);
            });
        }
    };
    AddEventComponent.prototype.log = function ($event) {
        console.log("hi");
    };
    AddEventComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.eventForm.value);
        this.eventData.eventName = this.eventForm.value.eventName;
        this.eventData.eventAction = this.eventForm.value.eventAction;
        this.eventData.eventfromTime = this.eventForm.value.fromTime;
        this.eventData.eventtoTime = this.eventForm.value.toTime;
        this.eventData.ngoName = this.eventForm.value.ngoName;
        this.eventData.volunteers = this.eventForm.value.volunteersReq;
        this.eventData.recurringEvent = this.eventForm.value.recurringEvent;
        // this.eventData.eventDuration=[];
        // this.eventData.eventDuration.push(formatDate(this.eventForm.value.eventDuration[0],'fullDate','en-US'));
        // this.eventData.eventDuration.push(formatDate(this.eventForm.value.eventDuration[1],'fullDate','en-US'));
        this.eventData.eventCategory = this.eventForm.value.eventCategory;
        this.eventData.eventDuration = this.eventForm.value.eventDuration;
        this.eventData.eventItems = this.eventForm.value.items.map(function (item) { return item.itemName; });
        this.eventData.comments = this.eventForm.value.comments;
        this.eventData.college = this.eventForm.value.college;
        console.log(this.eventData);
        if (this.route.snapshot.paramMap && this.route.snapshot.paramMap.get('id')) {
            this.apiService.putData(this.eventData, this.route.snapshot.paramMap.get('id'), 'event');
        }
        else {
            var response = this.apiService.post(this.eventData, 'event').subscribe(function (response) {
                _this.message = "Event Submitted: http://yfsevents.com?id=" + response.id;
                _this.submitSuc = true;
            });
        }
    };
    AddEventComponent.prototype.onCategorySelected = function (event) {
        var _this = this;
        this.inventoryService.getItemsByCategory(this.eventForm.value.eventCategory).subscribe(function (data) {
            _this.itemList = data.map(function (item) {
                return { 'id': data.indexOf(item), "itemName": item };
            });
        });
    };
    AddEventComponent.prototype.ngoChanged = function (event) {
        console.log(this.eventForm.value.ngoName);
    };
    AddEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-event',
            template: __webpack_require__(/*! ./add-event.component.html */ "./src/app/events/add-event.component.html"),
            styles: [__webpack_require__(/*! ./add-event.component.css */ "./src/app/events/add-event.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _inventory_data_inventorydata_service__WEBPACK_IMPORTED_MODULE_6__["InventorydataService"]])
    ], AddEventComponent);
    return AddEventComponent;
}());

var Eventdata = /** @class */ (function () {
    function Eventdata() {
    }
    return Eventdata;
}());



/***/ }),

/***/ "./src/app/events/event-list.component.html":
/*!**************************************************!*\
  !*** ./src/app/events/event-list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\" style=\"margin-top: 20px\">\n<div class=\"col-md-1\">\n\n</div>\n\n<div class=\"col-md-10\">\n        <div id=\"myGrid\"  style=\"width: 100%; height: 100%;\">\n<ag-grid-angular \n    class=\"ag-theme-balham\"\n    [rowData]=\"rowData\" \n    [columnDefs]=\"columnDefs\"\n    [frameworkComponents]=\"frameworkComponents\">\n</ag-grid-angular>\n        </div>\n</div>\n<div class=\"col-md-1\">\n    \n</div>\n\n</div>\n\n<div class=\"row\" style=\"margin-top:10px\">\n    <div class=\"col-md-1\"></div>\n    <div class=\"col-md-10\">\n        <div style=\"text-align:right\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"router.navigate(['/addevent'])\">\n            Add Event\n        </button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/events/event-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/events/event-list.component.ts ***!
  \************************************************/
/*! exports provided: EventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListComponent", function() { return EventListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _renderer_button_renderer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderer/button-renderer.component */ "./src/app/events/renderer/button-renderer.component.ts");






var EventListComponent = /** @class */ (function () {
    function EventListComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.columnDefs = [
            { headerName: 'EventId', field: 'id', filter: true },
            { headerName: 'Action', field: 'eventAction', filter: true },
            { headerName: 'Event Name', field: 'eventName', filter: true },
            { headerName: 'Event Category', field: 'eventCategory', filter: true },
            { headerName: 'Partner NGO', field: 'ngoName', filter: true },
            { headerName: 'Event Start Date', field: 'event_start_date', filter: true },
            { headerName: 'Event End Date', field: 'event_end_date', filter: true },
            {
                headerName: 'Email',
                cellRenderer: 'buttonRenderer',
                cellRendererParams: {
                    onClick: this.onBtnClick1.bind(this),
                    label: 'Send Email'
                }
            },
            {
                headerName: 'Edit',
                cellRenderer: 'buttonRenderer',
                cellRendererParams: {
                    onClick: this.onSearch.bind(this),
                    label: 'Edit'
                }
            }
        ];
        this.frameworkComponents = {
            buttonRenderer: _renderer_button_renderer_component__WEBPACK_IMPORTED_MODULE_5__["ButtonRendererComponent"],
        };
    }
    EventListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US');
        this.apiService.getData('events').subscribe(function (data) {
            _this.eventData = data;
            console.log(data);
            _this.rowData = _this.eventData.map(function (event) { return ({
                id: event.id,
                eventAction: event.eventAction,
                eventName: event.eventName,
                eventCategory: event.eventCategory,
                ngoName: event.ngoName,
                event_start_date: _this.pipe.transform(event.eventDuration[0], 'shortDate'),
                event_end_date: _this.pipe.transform(event.eventDuration[1], 'shortDate')
            }); });
        }, function (err) {
            console.log(err.message);
        });
    };
    EventListComponent.prototype.onSearch = function (event) {
        this.router.navigate(['addevent', { id: event.rowData.id }]);
    };
    EventListComponent.prototype.onBtnClick1 = function (event) {
        this.router.navigate(['email', { id: event.rowData.id }]);
    };
    EventListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'event-list',
            template: __webpack_require__(/*! ./event-list.component.html */ "./src/app/events/event-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EventListComponent);
    return EventListComponent;
}());



/***/ }),

/***/ "./src/app/events/renderer/button-renderer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/events/renderer/button-renderer.component.ts ***!
  \**************************************************************/
/*! exports provided: ButtonRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRendererComponent", function() { return ButtonRendererComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonRendererComponent = /** @class */ (function () {
    function ButtonRendererComponent() {
    }
    ButtonRendererComponent.prototype.agInit = function (params) {
        this.params = params;
        this.label = this.params.label || null;
    };
    ButtonRendererComponent.prototype.refresh = function (params) {
        return true;
    };
    ButtonRendererComponent.prototype.onClick = function ($event) {
        if (this.params.onClick instanceof Function) {
            // put anything into params u want pass into parents component
            var params = {
                event: $event,
                rowData: this.params.node.data
                // ...something
            };
            this.params.onClick(params);
        }
    };
    ButtonRendererComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button-renderer',
            template: "\n    <button type=\"button\" (click)=\"onClick($event)\">{{label}}</button>\n    "
        })
    ], ButtonRendererComponent);
    return ButtonRendererComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\n    background-color: #2d2d30;\n    color: #d5d5d5 !important;\n    letter-spacing: 4px;\n    opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQzMDtcbiAgICBjb2xvcjogI2Q1ZDVkNSAhaW1wb3J0YW50O1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgb3BhY2l0eTogMC45O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center footer\">\n    <!--ToDo: Add go to Top Logic on Button Click\n    >a class=\"up-arrow\" href=\"\" data-toggle=\"tooltip\" title=\"TO TOP\">\n      <span class=\"glyphicon glyphicon-chevron-up\"></span>\n    </a><br><br-->\n    <!--TODO: Add below?-->\n    <p>Made by <strong></strong></p>\n    </div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-tabs li a {\n    color: #777;\n  }\n  \n  .navbar {\n    font-family: Montserrat, sans-serif;\n    margin-bottom: 0;\n    border: 0;\n    font-size: 15px !important;\n    letter-spacing: 4px;\n    opacity: 0.9;\n  }\n  \n  .navbar li a, .navbar .navbar-brand { \n    color: #d5d5d5 !important;\n  }\n  \n  .navbar-nav li a:hover {\n    color: #fff !important;\n  }\n  \n  .navbar-nav li.active a {\n    color: #fff !important;\n    background-color: #2b2c29 !important;\n  }\n  \n  .navbar-default .navbar-toggle {\n    border-color: transparent;\n  }\n  \n  .open .dropdown-toggle {\n    color: #fff;\n  }\n  \n  .dropdown-menu li a {\n    color: #000 !important;\n  }\n  \n  .dropdown-menu li a:hover {\n    background-color: red !important;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0UsbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7O0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7O0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsb0NBQW9DO0VBQ3RDOztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUNBO0lBQ0UsV0FBVztFQUNiOztFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi10YWJzIGxpIGEge1xuICAgIGNvbG9yOiAjNzc3O1xuICB9XG4gIFxuICAubmF2YmFyIHtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxuICAubmF2YmFyIGxpIGEsIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7IFxuICAgIGNvbG9yOiAjZDVkNWQ1ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hdmJhci1uYXYgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuICAubmF2YmFyLW5hdiBsaS5hY3RpdmUgYSB7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYzI5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdG9nZ2xlIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIC5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5kcm9wZG93bi1tZW51IGxpIGEge1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRyb3Bkb3duLW1lbnUgbGkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/inventory-data/inventory-data.component.css":
/*!*************************************************************!*\
  !*** ./src/app/inventory-data/inventory-data.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS1kYXRhL2ludmVudG9yeS1kYXRhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/inventory-data/inventory-data.component.html":
/*!**************************************************************!*\
  !*** ./src/app/inventory-data/inventory-data.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"page-header well well-sm\">\n    <h3><strong> Inventory Data</strong></h3>\n  </div>\n  <form [formGroup]=\"inventoryData\">\n    <div class=\"panel panel-info\">\n      <div class=\"panel-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group required\">\n              <label class=\"control-label\">Item Name</label>\n              <input type=\"text\" formControlName=\"itemName\" class=\"form-control well well-sm\" required>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group required\">\n              <label class=\"control-label\">Event Category</label>\n              <div>\n                <select formControlName=\"eventCategory\" class=\"form-control well well-sm\" required>\n                  <option *ngFor=\"let evCat of eventCategoryList\" [(ngValue)]=\"evCat.value\">{{evCat.value}}</option>\n                </select>          \n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Comments</label>\n              <textarea type=\"text\" formControlName=\"comments\" class=\"form-control well well-sm\"></textarea>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n  <div class=\"text-center\">\n    <button class=\"btn btn-primary btn-sx\" (click)=\"onSubmit()\">Save</button>\n  </div>\n  <div class=\"spinner-border\" role=\"status\" *ngIf=\"loading\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/inventory-data/inventory-data.component.ts":
/*!************************************************************!*\
  !*** ./src/app/inventory-data/inventory-data.component.ts ***!
  \************************************************************/
/*! exports provided: InventoryDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryDataComponent", function() { return InventoryDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _inventorydata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventorydata.service */ "./src/app/inventory-data/inventorydata.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var InventoryDataComponent = /** @class */ (function () {
    function InventoryDataComponent(formBuilder, inventoryService, route, router) {
        this.formBuilder = formBuilder;
        this.inventoryService = inventoryService;
        this.route = route;
        this.router = router;
        this.loading = false;
    }
    InventoryDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inventoryData = this.formBuilder.group({
            itemName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ]],
            eventCategory: [''],
            comments: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)
                ]],
        });
        this.inventoryService.getEventCategoryList().subscribe(function (data) {
            _this.eventCategoryList = data;
        }, function (err) {
            console.log(err.message);
        });
        if (this.route.snapshot.paramMap && this.route.snapshot.paramMap.get('id')) {
            this.inventoryService.getInventoryDataById(this.route.snapshot.paramMap.get('id')).subscribe(function (data) {
                _this.inventoryData.setValue({
                    itemName: data.itemName,
                    eventCategory: data.eventCategory,
                    comments: data.comments
                });
            }, function (err) {
                console.log(err.message);
            });
        }
    };
    InventoryDataComponent.prototype.checkForMandatoryValidations = function (inventoryData) {
        if (inventoryData.itemName && inventoryData.eventCategory && inventoryData.comments)
            return true;
        else
            return false;
    };
    InventoryDataComponent.prototype.onSubmit = function () {
        var _this = this;
        var inventoryData = this.inventoryData.getRawValue();
        if (this.checkForMandatoryValidations(inventoryData)) {
            this.loading = true;
            if (this.route.snapshot.paramMap && this.route.snapshot.paramMap.get('id')) {
                this.inventoryService.updateInventoryDataById(inventoryData, this.route.snapshot.paramMap.get('id')).subscribe(function (data) {
                    _this.loading = false;
                    console.log('response', data);
                    alert('Succesfully updated Inventory Data');
                    _this.router.navigateByUrl("/inventorylist");
                }, function (e) {
                    _this.loading = false;
                    console.log(e);
                });
            }
            else {
                this.inventoryService.saveInventoryData(inventoryData).subscribe(function (data) {
                    _this.loading = false;
                    console.log('response', data);
                    alert('Succesfully saved Inventory Data');
                    _this.router.navigateByUrl("/inventorylist");
                }, function (e) {
                    _this.loading = false;
                    console.log(e);
                });
            }
        }
        else {
            alert('Please fill out the mandatory fields');
        }
    };
    InventoryDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory-data',
            template: __webpack_require__(/*! ./inventory-data.component.html */ "./src/app/inventory-data/inventory-data.component.html"),
            styles: [__webpack_require__(/*! ./inventory-data.component.css */ "./src/app/inventory-data/inventory-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _inventorydata_service__WEBPACK_IMPORTED_MODULE_3__["InventorydataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], InventoryDataComponent);
    return InventoryDataComponent;
}());



/***/ }),

/***/ "./src/app/inventory-data/inventory-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/inventory-data/inventory-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS1kYXRhL2ludmVudG9yeS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/inventory-data/inventory-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/inventory-data/inventory-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\" style=\"margin-top: 20px\">\n  <div class=\"col-md-1\">\n  \n  </div>\n  \n  <div class=\"col-md-10\">\n          <div id=\"myGrid\"  style=\"width: 100%; height: 115px;\">\n  <ag-grid-angular \n      class=\"ag-theme-balham\"\n      [rowData]=\"rowData\" \n      [columnDefs]=\"columnDefs\"\n      (rowClicked)=\"onSearch($event)\"\n      >\n  </ag-grid-angular>\n  </div>\n  </div>\n  <div class=\"col-md-1\">\n      \n  </div>\n  \n  </div>\n\n  <div class=\"row\" style=\"margin-top:10px\">\n      <div class=\"col-md-1\"></div>\n      <div class=\"col-md-10\">\n          <div style=\"text-align:right\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"router.navigate(['/inventorydata'])\">\n              Add Inventory\n          </button>\n          </div>\n      </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/inventory-data/inventory-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/inventory-data/inventory-list.component.ts ***!
  \************************************************************/
/*! exports provided: InventoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryListComponent", function() { return InventoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inventorydata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventorydata.service */ "./src/app/inventory-data/inventorydata.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var InventoryListComponent = /** @class */ (function () {
    function InventoryListComponent(inventoryService, router) {
        this.inventoryService = inventoryService;
        this.router = router;
        this.columnDefs = [
            { headerName: 'No', field: 'id', filter: true },
            { headerName: 'Item Name', field: 'itemName', filter: true },
            { headerName: 'Event Category', field: 'eventCategory', filter: true },
            { headerName: 'Comments', field: 'comments', filter: true }
        ];
    }
    InventoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inventoryService.getInventoryData().subscribe(function (data) {
            _this.rowData = data;
        }, function (err) {
            console.log(err.message);
        });
    };
    InventoryListComponent.prototype.onSearch = function (event) {
        this.router.navigate(['inventorydata', 'edit', { id: event.data.id }]);
    };
    InventoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory-list',
            template: __webpack_require__(/*! ./inventory-list.component.html */ "./src/app/inventory-data/inventory-list.component.html"),
            styles: [__webpack_require__(/*! ./inventory-list.component.css */ "./src/app/inventory-data/inventory-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_inventorydata_service__WEBPACK_IMPORTED_MODULE_2__["InventorydataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], InventoryListComponent);
    return InventoryListComponent;
}());



/***/ }),

/***/ "./src/app/inventory-data/inventorydata.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/inventory-data/inventorydata.service.ts ***!
  \*********************************************************/
/*! exports provided: InventorydataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventorydataService", function() { return InventorydataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");




var InventorydataService = /** @class */ (function () {
    function InventorydataService(http) {
        this.http = http;
    }
    InventorydataService.prototype.saveInventoryData = function (data) {
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].serverHost + "/inventorydata/list", data);
    };
    InventorydataService.prototype.getInventoryData = function () {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].serverHost + "/inventorydata/list");
    };
    InventorydataService.prototype.getEventCategoryList = function () {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].serverHost + "/inventorydata/eventcategory");
    };
    InventorydataService.prototype.getInventoryDataById = function (id) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].serverHost + "/inventorydata/list/" + id);
    };
    InventorydataService.prototype.updateInventoryDataById = function (data, id) {
        return this.http.put(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].serverHost + "/inventorydata/list/" + id, data);
    };
    InventorydataService.prototype.getItemsByCategory = function (data) {
        return this.http.get("/inventorydata/items/" + data);
    };
    InventorydataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InventorydataService);
    return InventorydataService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card card-container\">\n    <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n    <img class=\"profile-img-card\" id=\"profile-img\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\"/>\n    <p class=\"profile-name-card\" id=\"profile-name\"></p>\n\n    <form #f=\"ngForm\" (ngSubmit)=\"f.form.valid && login()\" name=\"form-signin\" novalidate>\n      <div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">{{errorMessage}}</div>\n      <span class=\"reauth-email\" id=\"reauth-email\"></span>\n      <div [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\" class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input #username=\"ngModel\" [(ngModel)]=\"user.username\" class=\"form-control\" id=\"username\" name=\"username\"\n               required type=\"text\"/>\n        <!-- <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">an valid email is required</div>-->\n      </div>\n      <div [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\" class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input #password=\"ngModel\" [(ngModel)]=\"user.password\" class=\"form-control\" id=\"password\" name=\"password\"\n               required type=\"password\"/>\n        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n      </div>\n      <div class=\"checkbox\" id=\"remember\">\n\n      </div>\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Sign in</button>\n    </form><!-- /form -->\n    <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Create new Account!</a>\n  </div><!-- /card-container -->\n</div><!-- /container -->\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(app, http, router) {
        this.app = app;
        this.http = http;
        this.router = router;
        this.user = { username: '', password: '' };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.app.authenticate(this.user, function () {
            _this.router.navigateByUrl('/events');
        });
        return false;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/model/model.user.ts":
/*!*************************************!*\
  !*** ./src/app/model/model.user.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.username = "";
        this.password = "";
        this.fullName = "";
    }
    return User;
}());



/***/ }),

/***/ "./src/app/partner-ngo-grid/partner-ngo-grid.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/partner-ngo-grid/partner-ngo-grid.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRuZXItbmdvLWdyaWQvcGFydG5lci1uZ28tZ3JpZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/partner-ngo-grid/partner-ngo-grid.component.html":
/*!******************************************************************!*\
  !*** ./src/app/partner-ngo-grid/partner-ngo-grid.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"page-header well text-center well-sm\">\n    <h3><strong> Partner NGO </strong></h3>\n  </div>\n  <div class=\"col-md-10\" #myGrid  style=\"width: 100%; height: 100%;\">\n    <ag-grid-angular \n      class=\"ag-theme-balham\" \n      [rowData]=\"data\" \n      [columnDefs]=\"headers\"\n      (rowClicked)=\"onRowCilcked($event)\"\n    >\n      <!-- \n      (rowDoubleClicked)=\"onRowDoubleCilcked(event)\"\n      (cellDoubleClicked)=\"onCellDoubleClicked($event)\"-->\n    </ag-grid-angular>\n  </div>\n  <div class=\"col-md-10\">\n      <div style=\"text-align:right\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"router.navigate(['/partnerngo'])\">\n          Add partner NGO\n      </button>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/partner-ngo-grid/partner-ngo-grid.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/partner-ngo-grid/partner-ngo-grid.component.ts ***!
  \****************************************************************/
/*! exports provided: PartnerNgoGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerNgoGridComponent", function() { return PartnerNgoGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PartnerNgoGridComponent = /** @class */ (function () {
    function PartnerNgoGridComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.data = [];
        this.headers = [
            { headerName: 'Partner NGO', field: 'name', filter: true, sortable: true },
            { headerName: 'Description', field: 'description', filter: true },
            { headerName: 'Branch', field: 'branch', filter: true },
            { headerName: 'Registration Number', field: 'registrationNumber', filter: true },
            { headerName: 'Address Line 1', field: 'addressLine1', filter: true },
            { headerName: 'Address Line 2', field: 'addressLine2', filter: true },
            { headerName: 'City', field: 'city', filter: true },
            { headerName: 'State', field: 'state', filter: true },
            { headerName: 'Pincode', field: 'pincode', filter: true },
            { headerName: 'Authorized Person Name', field: 'authorizedPersonName' },
            { headerName: 'Authorized Person Contact', field: 'authorizedPersonContact' },
            { headerName: 'Alternate Contact Details', field: 'contact2' },
            { headerName: 'Email ID', field: 'email1' },
            { headerName: 'Alternate Email ID', field: 'email2' },
            { headerName: 'Authorized Person Name (2)', field: 'authorizedPersonName1' },
            { headerName: 'Authorized Person Contact (2)', field: 'authorizedPersonContact1' },
            { headerName: 'Alternate Contact Details (2)', field: 'contact21' },
            { headerName: 'Email ID (2)', field: 'email11' },
            { headerName: 'Alternate Email ID (2)', field: 'email21' },
            { headerName: 'Authorized Person Name (3)', field: 'authorizedPersonName2' },
            { headerName: 'Authorized Person Contact (3)', field: 'authorizedPersonContact2' },
            { headerName: 'Alternate Contact Details (3)', field: 'contact22' },
            { headerName: 'Email ID (3)', field: 'email12' },
            { headerName: 'Alternate Email ID (3)', field: 'email22' },
            { headerName: 'Authorized Person Name (4)', field: 'authorizedPersonName3' },
            { headerName: 'Authorized Person Contact (4)', field: 'authorizedPersonContact3' },
            { headerName: 'Alternate Contact Details (4)', field: 'contact23' },
            { headerName: 'Email ID (4)', field: 'email13' },
            { headerName: 'Alternate Email ID (4)', field: 'email23' },
            { headerName: 'Authorized Person Name (5)', field: 'authorizedPersonName4' },
            { headerName: 'Authorized Person Contact (5)', field: 'authorizedPersonContact4' },
            { headerName: 'Alternate Contact Details (5)', field: 'contact24' },
            { headerName: 'Email ID (5)', field: 'email14' },
            { headerName: 'Alternate Email ID (5)', field: 'email24' },
        ];
    }
    PartnerNgoGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.data=[
        //   {name:'n1', description: 'd1', city: 'c1', state: 's1', authorizedPerson: [
        //     {name: 'a1'},{name:'a2'}
        //   ]},
        //   {name:'n2', description: 'd2', city: 'c2', state: 's2', authorizedPerson: [
        //     {name: 'b1'},{name:'b2'},{name:'b3'},{name:'b4'},{name:'b5'}
        //   ]}
        // ];
        this.apiService.getData('partnerngo').subscribe(function (response) {
            var result = JSON.parse(JSON.stringify(response));
            Array.from(result).forEach(function (element) {
                var authorizedPersons = JSON.parse(JSON.stringify(element)).authorizedPerson;
                if (authorizedPersons[0] != null) {
                    Object.assign(element, { authorizedPersonName: authorizedPersons[0].name });
                    Object.assign(element, { authorizedPersonContact: authorizedPersons[0].contact1 });
                    Object.assign(element, { contact2: authorizedPersons[0].contact2 });
                    Object.assign(element, { email1: authorizedPersons[0].email1 });
                    Object.assign(element, { email2: authorizedPersons[0].email2 });
                }
                if (authorizedPersons[1] != null) {
                    Object.assign(element, { authorizedPersonName1: authorizedPersons[1].name });
                    Object.assign(element, { authorizedPersonContact1: authorizedPersons[1].contact1 });
                    Object.assign(element, { contact21: authorizedPersons[1].contact2 });
                    Object.assign(element, { email11: authorizedPersons[1].email1 });
                    Object.assign(element, { email21: authorizedPersons[1].email2 });
                }
                if (authorizedPersons[2] != null) {
                    Object.assign(element, { authorizedPersonName2: authorizedPersons[2].name });
                    Object.assign(element, { authorizedPersonContact2: authorizedPersons[2].contact1 });
                    Object.assign(element, { contact22: authorizedPersons[2].contact2 });
                    Object.assign(element, { email12: authorizedPersons[2].email1 });
                    Object.assign(element, { email22: authorizedPersons[2].email2 });
                }
                if (authorizedPersons[3] != null) {
                    Object.assign(element, { authorizedPersonName3: authorizedPersons[3].name });
                    Object.assign(element, { authorizedPersonContact3: authorizedPersons[3].contact1 });
                    Object.assign(element, { contact23: authorizedPersons[3].contact2 });
                    Object.assign(element, { email13: authorizedPersons[3].email1 });
                    Object.assign(element, { email23: authorizedPersons[3].email2 });
                }
                if (authorizedPersons[4] != null) {
                    Object.assign(element, { authorizedPersonName4: authorizedPersons[4].name });
                    Object.assign(element, { authorizedPersonContact4: authorizedPersons[4].contact1 });
                    Object.assign(element, { contact24: authorizedPersons[4].contact2 });
                    Object.assign(element, { email14: authorizedPersons[4].email1 });
                    Object.assign(element, { email24: authorizedPersons[4].email2 });
                }
            });
            console.log(response);
            console.log(_this.data);
            _this.data = result;
        });
    };
    PartnerNgoGridComponent.prototype.onRowCilcked = function (event) {
        console.log(event.rowIndex);
        this.router.navigateByUrl("/partnerngo/edit/" + ((event.rowIndex) + 1));
    };
    PartnerNgoGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-partner-ngo-grid',
            template: __webpack_require__(/*! ./partner-ngo-grid.component.html */ "./src/app/partner-ngo-grid/partner-ngo-grid.component.html"),
            styles: [__webpack_require__(/*! ./partner-ngo-grid.component.css */ "./src/app/partner-ngo-grid/partner-ngo-grid.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PartnerNgoGridComponent);
    return PartnerNgoGridComponent;
}());



/***/ }),

/***/ "./src/app/partner-ngo/partner-ngo.component.css":
/*!*******************************************************!*\
  !*** ./src/app/partner-ngo/partner-ngo.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRuZXItbmdvL3BhcnRuZXItbmdvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/partner-ngo/partner-ngo.component.html":
/*!********************************************************!*\
  !*** ./src/app/partner-ngo/partner-ngo.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1 user-scalable=no\">\n  </head>\n\n  <body>\n    <div class=\"container-fluid\">\n      <div class=\"page-header well well-sm\">\n        <h3><strong> Partner NGO Registration</strong></h3>\n      </div>\n      \n      <form [formGroup]=\"myForm\">\n        <!-- ToDo: Decrease space between the table rows-->\n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">\n            <label>Basic Information</label>\n          </div>\n          <div class=\"panel-body\">\n            <div formGroupName=\"basicInfo\">\n              <!-- <table class=\"form-table\"> -->\n              <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group required\">\n                      <label class=\"control-label\">Name</label>\n                      <input type=\"text\" formControlName = \"name\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Description</label>\n                      <input type=\"text\" formControlName = \"description\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                </div>\n              <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Branch</label>\n                      <input type=\"text\" formControlName = \"branch\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Registration Number</label>\n                      <input type=\"text\" formControlName = \"registrationNumber\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                </div>\n              <!-- </table>               -->\n            </div>\n          </div>\n        </div>\n\n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">\n            <label>Address</label>\n          </div>\n          <div class=\"panel-body\">\n            <div formGroupName=\"address\">\n              <!-- <table class=\"form-table\"> -->\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group required\">\n                      <label class=\"control-label\">Address Line 1</label>\n                      <input type=\"text\" formControlName = \"addressLine1\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Address Line 2</label>\n                      <input type=\"text\" formControlName = \"addressLine2\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group required\">\n                      <label class=\"control-label\">City</label>\n                      <input type=\"text\" formControlName = \"city\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group required\">\n                      <label class=\"control-label\">State</label>\n                      <input type=\"text\" formControlName = \"state\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Pincode</label>\n                      <input type=\"text\" formControlName = \"pincode\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 offset-md-3\">\n                  </div>\n                </div>\n              <!-- </table>               -->\n            </div>\n          </div>\n        </div>\n\n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">\n            <label>Authorised Persons</label>\n          </div>\n          <div class=\"panel-body\">\n            <ul class=\"nav nav-tabs\" active=\"selectedTab\">\n              <li class=\"nav active\" *ngIf=\"numberOfAuthorizedPersons>0\"><a href=\"#tab0\" data-toggle=\"tab\" (click)=\"activateTab(1)\">Person 1</a></li>\n              <li class=\"nav\" *ngFor=\"let num of getArray(numberOfAuthorizedPersons-1); let i=index;\"><a href=\"#tab{{i+1}}\" data-toggle=\"tab\" (click)=\"activateTab(i+2)\">Person {{i+2}}</a></li>\n              <!--li class=\"nav active\" *ngIf=\"numberOfAuthorizedPersons>0\"><a href=\"#tab{{numberOfAuthorizedPersons-1}}\" data-toggle=\"tab\" (click)=\"activateTab(numberOfAuthorizedPersons)\">Person {{numberOfAuthorizedPersons}}</a></li-->\n              <!--li class=\"nav active\" *ngIf=\"numberOfAuthorizedPersons>0\"><a href=\"#tab{{numberOfAuthorizedPersons-1}}\" data-toggle=\"tab\" (click)=\"selectedTab=i\">Person {{numberOfAuthorizedPersons}}</a></li-->\n              <div class=\"pull-right\">\n                <button class=\"btn btn-sm btn-primary btn-space\" (click)=\"addAuthorisedPerson()\" [disabled]=\"isMaxLimitReached(5)\">Add Person</button>\n                <button class=\"btn btn-sm btn-primary\" (click)=\"removeAuthorisedPerson(selectedTab)\" confirm=\"Are you sure you want to delete?\" confirm-ok=\"Yes\" confirm-cancel=\"No\" [disabled]=\"isMinLimitReached()\">Remove Person</button>\n              </div>\n              <!--ToDo: Setup dynamic Tab Creation and Add Delete button-->\n            </ul>\n\n            <div class=\"tab-content\">\n              <div formArrayName=\"authorizedPersons\">\n                <!--ToDo: NgFor not working: Check-->\n                <div class=\"tab-pane\" *ngFor=\"let person of myForm.get('authorizedPersons').controls;let i=index\" formGroupName=\"{{i}}\" id=\"tab{{i}}\">\n                  <!-- <table class=\"form-table\"> -->\n                  <div *ngIf=\"selectedTab==i\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6 offset-md-3\">\n                        <div class=\"form-group required\">\n                          <label class=\"control-label\">Name</label>\n                          <input type=\"text\" formControlName = \"name\" class=\"form-control well well-sm\">\n                        </div>\n                      </div>\n                      <div class=\"col-md-6 offset-md-3\">\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6 offset-md-3\">\n                        <div class=\"form-group required\">\n                          <label class=\"control-label\">Contact Details</label>\n                          <input type=\"text\" formControlName = \"contact1\" class=\"form-control well well-sm\">\n                        </div>\n                      </div>\n                      <div class=\"col-md-6 offset-md-3\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\">Alternate Contact Details</label>\n                          <input type=\"text\" formControlName = \"contact2\" class=\"form-control well well-sm\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-6 offset-md-3\">\n                          <div class=\"form-group\">\n                            <label class=\"control-label\">Email ID</label>\n                            <input type=\"text\" formControlName = \"email1\" class=\"form-control well well-sm\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-6 offset-md-3\">\n                          <div class=\"form-group\">\n                            <label class=\"control-label\">Alternate Email ID</label>\n                            <input type=\"text\" formControlName = \"email2\" class=\"form-control well well-sm\">\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  <!-- </table>               -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </form>\n      <!--<span>{{myForm.value | json}}</span>-->\n      <div class=\"pull-right\">\n        <button (click)=\"onSubmit()\" *ngIf=\"!mode\" class=\"btn btn-primary btn-space\">Register</button>\n        <button (click)=\"onEdit()\" *ngIf=\"mode=='view'\" class=\"btn btn-primary btn-space\">Edit</button>\n        <button (click)=\"onSubmit()\" *ngIf=\"mode=='edit'\" class=\"btn btn-primary btn-space\">Update</button>\n        <button (click)=\"onClose()\" *ngIf=\"mode=='view' || mode=='edit'\" class=\"btn btn-primary btn-space\">Close\n        </button>\n      </div>\n    </div>\n\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/partner-ngo/partner-ngo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/partner-ngo/partner-ngo.component.ts ***!
  \******************************************************/
/*! exports provided: PartnerNGOComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerNGOComponent", function() { return PartnerNGOComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





// import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
var PartnerNGOComponent = /** @class */ (function () {
    function PartnerNGOComponent(formBuilder, apiService, route, router) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.numberOfAuthorizedPersons = 0;
        this.selectedTab = -1;
    }
    PartnerNGOComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Loading PartnerNgo Screen');
        this.myForm = this.formBuilder.group({
            basicInfo: this.partnerNgoGroup(),
            address: this.address(),
            authorizedPersons: this.formBuilder.array([this.authorisedPerson()])
        });
        this.route.paramMap.subscribe(function (params) {
            console.log(params);
            if (params.get('mode')) {
                _this.mode = params.get('mode');
                _this.id = +params.get('id');
            }
            if (_this.id) {
                if (!isNaN(_this.id)) {
                    // let data={basicInfo: {name:"name", description:"desc", branch:"branch", registrationNumber:"regNum"},
                    //           address: {addressLine1: "add1", addressLine2: "add2", city: "city", state: "state", pincode:"pin"},
                    //           authorizedPersons: [{name: "a1", contact1: "c1", contact2: "c2", email1: "e1", email2: "e2"},
                    //           {name: "a1", contact1: "c1", contact2: "c2", email1: "e1", email2: "e2"}
                    // ]};
                    _this.apiService.getData('partnerngo', _this.id, true).subscribe(function (result) {
                        var data = JSON.parse(JSON.stringify(result));
                        console.log("GetResponse: " + data);
                        if (data.authorizedPersons) {
                            data.authorizedPersons.forEach(function (authorizedPerson, index) {
                                if (index != 0) {
                                    _this.addAuthorisedPerson();
                                }
                            });
                        }
                        _this.myForm.setValue(data);
                    });
                }
                else {
                    alert('Error in ID');
                }
            }
        });
        this.numberOfAuthorizedPersons = this.getAuthorizedPersons().length;
        this.activateTab(1);
    };
    PartnerNGOComponent.prototype.ngAfterViewInit = function () {
        if (this.mode == 'view') {
            Array.from(document.getElementsByClassName('form-control')).forEach(function (element) {
                element.disabled = true;
                //TODO: Disable add/remove buttons
            });
        }
        else {
            Array.from(document.getElementsByClassName('form-control')).forEach(function (element) {
                element.disabled = false;
                //TODO: Enable add/remove buttons
            });
        }
    };
    PartnerNGOComponent.prototype.partnerNgoGroup = function () {
        return this.formBuilder.group({
            name: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)
                ]],
            description: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)
                ]],
            branch: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)
                ]],
            registrationNumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)
                ]]
            //todo: registrationNumber Validation.
        });
    };
    PartnerNGOComponent.prototype.address = function () {
        return this.formBuilder.group({
            addressLine1: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2000)
                ]],
            addressLine2: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2000)
                ]],
            state: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ]],
            city: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ]],
            pincode: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]+$"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)
                ]]
        });
    };
    PartnerNGOComponent.prototype.authorisedPerson = function () {
        return this.formBuilder.group({
            name: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)
                ]],
            contact1: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]+$"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)
                ]],
            contact2: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]+$"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)
                ]],
            email1: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ]],
            email2: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ]]
        });
    };
    PartnerNGOComponent.prototype.getAuthorizedPersons = function () {
        return this.myForm.get('authorizedPersons');
    };
    PartnerNGOComponent.prototype.addAuthorisedPerson = function () {
        if (this.numberOfAuthorizedPersons < 5) {
            (this.getAuthorizedPersons()).push(this.authorisedPerson());
            this.numberOfAuthorizedPersons = this.getAuthorizedPersons().length;
            //this.activateTab(this.numberOfAuthorizedPersons);
        }
    };
    PartnerNGOComponent.prototype.removeAuthorisedPerson = function (index) {
        if (this.numberOfAuthorizedPersons > 1) {
            // var authorizedPerson = this.getAuthorizedPersons();
            // var name = authorizedPerson[index].get('name');
            // confirm("Do you want to delete "
            if (confirm("Do you want to delete ")) {
                (this.getAuthorizedPersons()).removeAt(index);
                this.numberOfAuthorizedPersons = this.getAuthorizedPersons().length;
                if (this.selectedTab == this.numberOfAuthorizedPersons)
                    this.selectedTab = this.numberOfAuthorizedPersons - 1;
            }
        }
        else {
        }
    };
    PartnerNGOComponent.prototype.getNumberOfAuthorizedPersons = function () {
        return this.numberOfAuthorizedPersons;
    };
    PartnerNGOComponent.prototype.isMaxLimitReached = function (val) {
        return this.numberOfAuthorizedPersons >= val;
    };
    PartnerNGOComponent.prototype.isMinLimitReached = function () {
        return this.numberOfAuthorizedPersons === 1;
    };
    PartnerNGOComponent.prototype.getArray = function (val) {
        return Array(val);
    };
    PartnerNGOComponent.prototype.activateTab = function (val) {
        this.selectedTab = val - 1;
    };
    PartnerNGOComponent.prototype.onUpdate = function () {
        //TODO
    };
    PartnerNGOComponent.prototype.onEdit = function () {
        //TODO: instead change mode and make fields Editable.
        this.router.navigateByUrl("/partnerngo/edit/" + this.id);
    };
    PartnerNGOComponent.prototype.onClose = function () {
        this.router.navigateByUrl("/grid/partnerngo");
    };
    PartnerNGOComponent.prototype.checkForMandatoryValidations = function (partnerNgoDetails) {
        var checkflag = false;
        if (partnerNgoDetails.name && partnerNgoDetails.addressLine1 && partnerNgoDetails.city && partnerNgoDetails.state) {
            if (partnerNgoDetails.authorizedPerson.length) {
                partnerNgoDetails.authorizedPerson.forEach(function (o) {
                    if (!o.name || !o.contact1) {
                        checkflag = true;
                        return false;
                    }
                });
                if (!checkflag) {
                    return true;
                }
            }
            else {
                return true;
            }
        }
        else
            return false;
    };
    PartnerNGOComponent.prototype.onSubmit = function () {
        var json = Object.assign({ authorizedPerson: this.getAuthorizedPersons().value }, this.myForm.get('basicInfo').value, this.myForm.get('address').value);
        if (this.mode == 'edit') {
            json = Object.assign(json, { id: this.id });
        }
        console.log('submitting: ', json);
        if (this.checkForMandatoryValidations(json)) {
            var response = this.apiService.postData(json, 'partnerngo');
            if (response) {
                if (this.mode == 'edit') {
                    alert('Succesfully updated Partner NGO');
                }
                else {
                    alert('Succesfully registered Partner NGO');
                }
                this.router.navigateByUrl("/grid/partnerngo");
            }
        }
        else {
            alert('Please fill out the mandatory fields');
        }
    };
    PartnerNGOComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-partner-ngo',
            template: __webpack_require__(/*! ./partner-ngo.component.html */ "./src/app/partner-ngo/partner-ngo.component.html"),
            styles: [__webpack_require__(/*! ./partner-ngo.component.css */ "./src/app/partner-ngo/partner-ngo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PartnerNGOComponent);
    return PartnerNGOComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Specific styles of signin component\n */\n/*\n * General styles\n */\nbody, html {\n  height: 100%;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\n}\n.card-container.card {\n  max-width: 350px;\n  padding: 40px 40px;\n}\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  cursor: default;\n}\n/*\n * Card component\n */\n.card {\n  background-color: #F7F7F7;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n/*\n * Form styles\n */\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em;\n}\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  box-sizing: border-box;\n}\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n  direction: ltr;\n  height: 44px;\n  font-size: 16px;\n}\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  box-sizing: border-box;\n}\n.form-signin .form-control:focus {\n  border-color: rgb(104, 145, 162);\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n}\n.btn.btn-signin,.btn-cancel {\n  /*background-color: #4d90fe; */\n  background-color: rgb(104, 145, 162);\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  border-radius: 3px;\n  border: none;\n  transition: all 0.218s;\n}\n.btn.btn-cancel {\n  background-color: rgb(255, 34, 24);\n}\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n  background-color: rgb(12, 97, 33);\n}\n.forgot-password {\n  color: rgb(104, 145, 162);\n}\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus{\n  color: rgb(12, 97, 33);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGOztFQUVFO0FBQ0Y7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHNFQUFzRTtBQUN4RTtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHFCQUFpQjtNQUFqQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUVBOztFQUVFO0FBQ0Y7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUdoQyxrQkFBa0I7RUFHbEIsMENBQTBDO0FBQzVDO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBR2Qsa0JBQWtCO0FBQ3BCO0FBRUE7O0VBRUU7QUFDRjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUduQixzQkFBc0I7QUFDeEI7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTs7OztFQUlFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixrQkFBa0I7RUFHbEIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsVUFBVTtFQUVWLHVFQUF1RTtBQUN6RTtBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG9DQUFvQztFQUNwQywyRUFBMkU7RUFDM0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUdaLGtCQUFrQjtFQUNsQixZQUFZO0VBSVosc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTs7O0VBR0UsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTcGVjaWZpYyBzdHlsZXMgb2Ygc2lnbmluIGNvbXBvbmVudFxuICovXG4vKlxuICogR2VuZXJhbCBzdHlsZXNcbiAqL1xuYm9keSwgaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigxMDQsIDE0NSwgMTYyKSwgcmdiKDEyLCA5NywgMzMpKTtcbn1cblxuLmNhcmQtY29udGFpbmVyLmNhcmQge1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBwYWRkaW5nOiA0MHB4IDQwcHg7XG59XG5cbi5idG4ge1xuICBmb250LXdlaWdodDogNzAwO1xuICBoZWlnaHQ6IDM2cHg7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qXG4gKiBDYXJkIGNvbXBvbmVudFxuICovXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XG4gIC8qIGp1c3QgaW4gY2FzZSB0aGVyZSBubyBjb250ZW50Ki9cbiAgcGFkZGluZzogMjBweCAyNXB4IDMwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDI1cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIC8qIHNoYWRvd3MgYW5kIHJvdW5kZWQgYm9yZGVycyAqL1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5wcm9maWxlLWltZy1jYXJkIHtcbiAgd2lkdGg6IDk2cHg7XG4gIGhlaWdodDogOTZweDtcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKlxuICogRm9ybSBzdHlsZXNcbiAqL1xuLnByb2ZpbGUtbmFtZS1jYXJkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMCAwO1xuICBtaW4taGVpZ2h0OiAxZW07XG59XG5cbi5yZWF1dGgtZW1haWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM0MDQwNDA7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZm9ybS1zaWduaW4gI2lucHV0RW1haWwsXG4uZm9ybS1zaWduaW4gI2lucHV0UGFzc3dvcmQge1xuICBkaXJlY3Rpb246IGx0cjtcbiAgaGVpZ2h0OiA0NHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPWVtYWlsXSxcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPXBhc3N3b3JkXSxcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPXRleHRdLFxuLmZvcm0tc2lnbmluIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHJnYigxMDQsIDE0NSwgMTYyKTtcbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgOHB4IHJnYigxMDQsIDE0NSwgMTYyKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2IoMTA0LCAxNDUsIDE2Mik7XG59XG5cbi5idG4uYnRuLXNpZ25pbiwuYnRuLWNhbmNlbCB7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogIzRkOTBmZTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCwgMTQ1LCAxNjIpO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQocmdiKDEwNCwgMTQ1LCAxNjIpLCByZ2IoMTIsIDk3LCAzMykpOyovXG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjIxOHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMjE4cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xufVxuXG4uYnRuLmJ0bi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAzNCwgMjQpO1xufVxuLmJ0bi5idG4tc2lnbmluOmhvdmVyLFxuLmJ0bi5idG4tc2lnbmluOmFjdGl2ZSxcbi5idG4uYnRuLXNpZ25pbjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgOTcsIDMzKTtcbn1cblxuLmZvcmdvdC1wYXNzd29yZCB7XG4gIGNvbG9yOiByZ2IoMTA0LCAxNDUsIDE2Mik7XG59XG5cbi5mb3Jnb3QtcGFzc3dvcmQ6aG92ZXIsXG4uZm9yZ290LXBhc3N3b3JkOmFjdGl2ZSxcbi5mb3Jnb3QtcGFzc3dvcmQ6Zm9jdXN7XG4gIGNvbG9yOiByZ2IoMTIsIDk3LCAzMyk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card card-container\">\n    <img class=\"profile-img-card\" id=\"profile-img\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\"/>\n    <p class=\"profile-name-card\" id=\"profile-name\"></p>\n\n    <form #f=\"ngForm\" (ngSubmit)=\"f.form.valid && register()\" name=\"form\" novalidate>\n      <div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">{{errorMessage}}</div>\n      <span class=\"reauth-email\" id=\"reauth-email\"></span>\n      <div [ngClass]=\"{ 'has-error': f.submitted && !fullName.valid }\" class=\"form-group\">\n        <label for=\"fullName\">Full Name</label>\n        <input #fullName=\"ngModel\" [(ngModel)]=\"user.fullName\" class=\"form-control\" id=\"fullName\" name=\"fullName\"\n               required type=\"text\"/>\n        <div *ngIf=\"f.submitted && !fullName.valid\" class=\"help-block\">The full Name is required</div>\n      </div>\n      <div [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\" class=\"form-group\">\n        <label for=\"username\">Email Address</label>\n        <input #username=\"ngModel\" [(ngModel)]=\"user.username\" class=\"form-control\" id=\"username\" name=\"username\"\n               pattern=\"[^ @]*@[^ @]*\" required type=\"text\"/>\n        <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">\n\n          <div *ngIf=\"username.errors.required\">\n            Email is required.\n          </div>\n          <div *ngIf=\"username.errors.pattern\">\n            A valid email address is required\n          </div>\n\n        </div>\n      </div>\n      <div [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\" class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input #password=\"ngModel\" [(ngModel)]=\"user.password\" class=\"form-control\" id=\"password\" minlength=\"4\"\n               name=\"password\" required type=\"password\"/>\n        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">\n\n          <div *ngIf=\"password.errors.required\">\n            password is required.\n          </div>\n          <div *ngIf=\"password.errors.minlength\">\n            password must be at least 4 characters long.\n          </div>\n\n        </div>\n      </div>\n      <div class=\"checkbox\" id=\"remember\">\n\n      </div>\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Create Account</button>\n      <button [routerLink]=\"['/login']\" class=\"btn btn-lg btn-danger btn-block btn-cancel\" type=\"button\">Cancel</button>\n\n    </form><!-- /form -->\n\n  </div><!-- /card-container -->\n</div><!-- /container -->\n\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/model.user */ "./src/app/model/model.user.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new _model_model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.createAccount(this.user).subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = "username already exist";
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/send-mail/send-mail.component.css":
/*!***************************************************!*\
  !*** ./src/app/send-mail/send-mail.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mainDiv\n{\n  height: 100%;\n  width:70%;\n  margin:auto;\n  background-color: azure;\n  margin-top: 2%;\n  border-radius: 10px;\n}\n\n#heading\n{\n  height: 50px;\n  width: 70%;\n  /*padding-left: 35%;*/\n  /*margin: auto;*/\n  font-size: 25px;\n  margin-top: 25px;   \n  margin-left: 15%;\n   background-color: burlywood;\n   border-radius: 10px;\n}\n\n#buttonTab\n{\n  padding-left:10%;\n  margin-top: 10px;\n}\n\n#buttonCancel\n{\nmargin-left: 30%;\n}\n\n#buttonSubmit\n{\n  margin-left: 4%;\n}\n\n#backButton\n{\n  width:30%;\n  float:left;\n}\n\n#headingText\n{\n  width:70%;\n  padding-left: 29%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC1tYWlsL3NlbmQtbWFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFlBQVk7RUFDWixTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFlBQVk7RUFDWixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtHQUNmLDJCQUEyQjtHQUMzQixtQkFBbUI7QUFDdEI7O0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEI7O0FBQ0E7O0VBRUUsZUFBZTtBQUNqQjs7QUFDQTs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUNBOztFQUVFLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zZW5kLW1haWwvc2VuZC1tYWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbkRpdlxue1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOjcwJTtcbiAgbWFyZ2luOmF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2hlYWRpbmdcbntcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNzAlO1xuICAvKnBhZGRpbmctbGVmdDogMzUlOyovXG4gIC8qbWFyZ2luOiBhdXRvOyovXG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLXRvcDogMjVweDsgICBcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4jYnV0dG9uVGFiXG57XG4gIHBhZGRpbmctbGVmdDoxMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4jYnV0dG9uQ2FuY2VsXG57XG5tYXJnaW4tbGVmdDogMzAlO1xufVxuI2J1dHRvblN1Ym1pdFxue1xuICBtYXJnaW4tbGVmdDogNCU7XG59XG4jYmFja0J1dHRvblxue1xuICB3aWR0aDozMCU7XG4gIGZsb2F0OmxlZnQ7XG59XG4jaGVhZGluZ1RleHRcbntcbiAgd2lkdGg6NzAlO1xuICBwYWRkaW5nLWxlZnQ6IDI5JTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/send-mail/send-mail.component.html":
/*!****************************************************!*\
  !*** ./src/app/send-mail/send-mail.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row custom-row\" id=\"mainDiv\">-->\n  <!--<div class= \"col-sm-5 custom-container jumbotron\">-->\n    <!--<form class=\"form-horizontal\"  #sendmailForm=\"ngForm\"-->\n          <!--(ngSubmit)=\"onFormSubmit(sendmailForm)\" >-->\n      <!--<fieldset>-->\n        <!--<legend>SignUp</legend>-->\n\n        <!--&lt;!&ndash;- To Block -&ndash;&gt;-->\n        <!--<div class=\"form-group\">-->\n          <!--<label for=\"toEmail\">to</label>-->\n          <!--&lt;!&ndash;<input type=\"text\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;id=\"toEmail\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;[(ngModel)]=\"email.to\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;name=\"to\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;placeholder=\"to\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;#emailTo = \"ngModel\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required>&ndash;&gt;-->\n        <!--</div>-->\n        <!---->\n\n        <!--<div class=\"form-group\">-->\n          <!--<label for=\"ccEmail\">cc</label>-->\n          <!--&lt;!&ndash;<input type=\"text\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;id=\"ccEmail\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;[(ngModel)]=\"email.cc\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;name=\"cc\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;#emailCc = \"ngModel\"&ndash;&gt;-->\n\n                 <!--&lt;!&ndash;pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;placeholder=\"cc\">&ndash;&gt;-->\n        <!--</div>-->\n        <!--<div class=\"form-group\">-->\n          <!--<label for=\"bccEmail\">bcc</label>-->\n          <!--&lt;!&ndash;<input type=\"text\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;id=\"bccEmail\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;[(ngModel)]=\"email.bcc\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;name=\"bcc\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;#emailBcc = \"ngModel\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;placeholder=\"bcc\" >&ndash;&gt;-->\n        <!--</div>-->\n        <!--<div class=\"form-group\">-->\n          <!--<label for=\"subjectEmail\">Subject</label>-->\n          <!--&lt;!&ndash;<input type=\"text\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;id=\"subjectEmail\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;[(ngModel)]=\"email.subject\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;name=\"subject\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;placeholder=\"subject\" required>&ndash;&gt;-->\n        <!--</div>-->\n        <!--<div class=\"form-group\">-->\n          <!--<label for=\"textEmail\">Text</label>-->\n          <!--&lt;!&ndash;<input type=\"text\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;id=\"textEmail\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;[(ngModel)]=\"email.text\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;name=\"text\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;placeholder=\"text\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;#pwd = \"ngModel\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;minlength=\"8\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;required>&ndash;&gt;-->\n        <!--</div>-->\n\n\n        <!--&lt;!&ndash;- Buttons Block -&ndash;&gt;-->\n\n      <!--</fieldset>-->\n    <!--</form>-->\n    <!--{{email | json}}-->\n  <!--</div>-->\n  <div id=\"heading\">\n    <div id=\"headingText\">\n    Enter Email Details\n    </div>\n  </div>\n  <div id=\"mainDiv\">\n    <form class=\"form-horizontal\"  #sendmailForm=\"ngForm\"\n          (ngSubmit)=\"onFormSubmit(sendmailForm)\" >\n    <table class=\"table-condensed form-table\">\n      <tr class=\"row\">\n        <td class=\"col-md-6 offset-md-3\">\n          <div class=\"form-group\">\n            <label class=\"control-label\">To</label>\n            <input type=\"text\"\n                   id=\"toEmail\"\n                   [(ngModel)]=\"email.to\"\n                   name=\"to\"\n                   placeholder=\"to\"\n                   #emailTo = \"ngModel\"\n                   pattern=\"([a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3},?)*$\"\n                   class=\"form-control well well-sm\" required>\n          </div>\n        </td>\n        <td class=\"col-md-4 offset-md-3\">\n          <div class=\"form-group\">\n            <div *ngIf=\"emailTo.invalid && (emailTo.dirty || emailTo.touched)\"\n                 class=\"alert alert-danger\">\n              <div *ngIf = \"emailTo.errors?.required\">\n                Email field can't be blank\n              </div>\n              <div *ngIf = \"emailTo.errors?.dirty\">\n                Enter in correct Format\n              </div>\n              <div *ngIf = \"emailTo.errors?.pattern && emailTo.touched\">\n                The email id doesn't seem right\n              </div>\n            </div>\n          </div>\n        </td>\n      </tr>\n\n\n      <tr class=\"row\">\n        <td class=\"col-md-6 offset-md-3\">\n          <div class=\"form-group\">\n            <label class=\"control-label\">Cc</label>\n            <input type=\"text\"\n                   id=\"ccEmail\"\n                   [(ngModel)]=\"email.cc\"\n                   name=\"cc\"\n                   #emailCc = \"ngModel\"\n                   pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n                   placeholder=\"cc\"\n                   class=\"form-control well well-sm\">\n          </div>\n        </td>\n        <td class=\"col-md-4 offset-md-3\">\n          <div class=\"form-group\">\n            <div *ngIf=\"emailCc.invalid && (emailCc.dirty || emailCc.touched)\"\n                 class=\"alert alert-danger\">\n              <div *ngIf = \"emailCc.errors?.required\">\n                Email field can't be blank\n              </div>\n              <div *ngIf = \"emailCc.errors?.dirty\">\n                Enter in correct Format\n              </div>\n              <div *ngIf = \"emailCc.errors?.pattern && emailCc.touched\">\n                The email id doesn't seem right\n              </div>\n            </div>\n          </div>\n        </td>\n      </tr>\n      <tr class=\"row\">\n        <td class=\"col-md-6 offset-md-3\">\n          <div class=\"form-group\">\n            <label class=\"control-label\">Bcc</label>\n            <input type=\"text\"\n                   id=\"bccEmail\"\n                   [(ngModel)]=\"email.bcc\"\n                   name=\"bcc\"\n                   #emailBcc = \"ngModel\"\n                   pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3},?$\"\n                   placeholder=\"bcc\"\n                   class=\"form-control well well-sm\">\n          </div>\n        </td>\n        <td class=\"col-md-4 offset-md-3\">\n          <div class=\"form-group\">\n            <div *ngIf=\"emailBcc.invalid && (emailBcc.dirty || emailBcc.touched)\"\n                 class=\"alert alert-danger\">\n              <div *ngIf = \"emailBcc.errors?.required\">\n                Email field can't be blank\n              </div>\n              <div *ngIf = \"emailBcc.errors?.dirty\">\n                Enter in correct Format\n              </div>\n              <div *ngIf = \"emailBcc.errors?.pattern && emailBcc.touched\">\n                The email id doesn't seem right\n              </div>\n            </div>\n          </div>\n        </td>\n      </tr>\n      <tr class=\"row\">\n        <td class=\"col-md-2 offset-md-3\">\n          <div class=\"form-group\">\n\n            <label class=\"control-label\" for=\"subjectEmail\">Subject</label>\n            <textarea type=\"text\"\n                   id=\"subjectEmail\"\n                   [(ngModel)]=\"email.subject\"\n                   name=\"subject\"\n                   placeholder=\"subject\"\n                   class=\"form-control well well-sm\"\n                   required>\n                   </textarea>\n          </div>\n        </td>\n      </tr>\n      <tr class=\"row\">\n        <td class=\"col-md-2 offset-md-3\">\n          <div class=\"form-group\">\n\n            <label class=\"control-label\" for=\"subjectEmail\">Text</label>\n            <textarea type=\"text\"\n                   id=\"textEmail\"\n                   [(ngModel)]=\"email.text\"\n                   name=\"text\"\n                   placeholder=\"text\"\n                   #pwd = \"ngModel\"\n                   minlength=\"8\"\n                   class=\"form-control well well-sm\"\n                   required>\n                   </textarea>\n          </div>\n        </td>\n      </tr>\n    </table>\n    <div class=\"form-group\" id=\"buttonTab\">\n      <button type=\"reset\" class=\"btn btn-default\" id=\"buttonCancel\" >Cancel</button>\n      <button type=\"submit\" class=\"btn btn-primary\"\n              [disabled]=\"!sendmailForm.form.valid\" id=\"buttonSubmit\">Submit</button>\n    </div>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/send-mail/send-mail.component.ts":
/*!**************************************************!*\
  !*** ./src/app/send-mail/send-mail.component.ts ***!
  \**************************************************/
/*! exports provided: SendMailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMailComponent", function() { return SendMailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Email */ "./src/app/Email.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _api_service_mail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service.mail */ "./src/app/api.service.mail.ts");
/* harmony import */ var _events_add_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../events/add-event.component */ "./src/app/events/add-event.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var SendMailComponent = /** @class */ (function () {
    function SendMailComponent(apiService, apiServiceMail, route, router) {
        this.apiService = apiService;
        this.apiServiceMail = apiServiceMail;
        this.route = route;
        this.router = router;
    }
    SendMailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US');
        this.eventData = new _events_add_event_component__WEBPACK_IMPORTED_MODULE_6__["Eventdata"]();
        this.email = new _Email__WEBPACK_IMPORTED_MODULE_3__["Email"]({ to: "", cc: "", bcc: "",
            text: "", eventId: this.route.snapshot.paramMap.get('id'), subject: "" });
        this.apiService.getData('event', this.route.snapshot.paramMap.get('id'), false).subscribe(function (data) {
            _this.eventData.eventfromTime = data.eventfromTime;
            _this.eventData.eventtoTime = data.eventtoTime;
            _this.eventData.ngoName = data.ngoName;
            _this.eventData.eventName = data.eventName;
            _this.email.subject = _this.createDefaultSubject(_this.eventData.eventName, _this.eventData.ngoName, _this.eventData.eventfromTime, _this.eventData.eventtoTime);
            console.log(_this.eventData.eventfromTime);
            console.log(_this.eventData.eventtoTime);
            console.log(_this.eventData.ngoName);
            console.log(_this.eventData.eventName);
            _this.getEmailId();
            console.log(_this.resp);
            console.log(_this.email.to);
        }, function (err) {
            console.log(err.message);
        });
    };
    SendMailComponent.prototype.onFormSubmit = function (_a) {
        var value = _a.value;
        console.log(value);
        console.log(this.route.snapshot.paramMap.get("name"));
        //this.eventData.eventCategory='abc';
        this.apiServiceMail.postData(this.email);
    };
    SendMailComponent.prototype.createDefaultSubject = function (eventName, ngoName, eventTo, eventFor) {
        return "We invite You for event : " + eventName + "by NGO : " + ngoName + " from :" + eventFor + "to : " + eventTo;
    };
    SendMailComponent.prototype.getEmailId = function () {
        var _this = this;
        //String resp;
        this.apiServiceMail.getData().subscribe(function (response) {
            console.log('postResponse: ', response);
            //return response.toString();
            _this.resp = response.toString();
            console.log("reponse is:" + " ...." + response.result);
            _this.email.to = _this.resp;
        });
    };
    SendMailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-send-mail',
            template: __webpack_require__(/*! ./send-mail.component.html */ "./src/app/send-mail/send-mail.component.html"),
            styles: [__webpack_require__(/*! ./send-mail.component.css */ "./src/app/send-mail/send-mail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _api_service_mail__WEBPACK_IMPORTED_MODULE_5__["ApiServiceMail"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SendMailComponent);
    return SendMailComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.logIn = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Accept', 'application/json');
        // creating base64 encoded String from user name and password
        var base64Credential = btoa(user.username + ':' + user.password);
        headers.append("Authorization", "Basic " + base64Credential);
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
        options.headers = headers;
        return this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].API_URL + "/user/login", options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json().principal; // the returned user object is a principal object
            if (user) {
                // store user details  in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        }));
    };
    AuthService.prototype.logOut = function () {
        // remove user from local storage to log user out
        return this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].API_URL + "logout", {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            localStorage.removeItem('currentUser');
        }));
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.createAccount = function (user) {
        return this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"].API_URL + '/user/register', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) { return resp.json(); }));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/urlPermission/url.permission.ts":
/*!*************************************************!*\
  !*** ./src/app/urlPermission/url.permission.ts ***!
  \*************************************************/
/*! exports provided: UrlPermission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlPermission", function() { return UrlPermission; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UrlPermission = /** @class */ (function () {
    function UrlPermission(router) {
        this.router = router;
    }
    UrlPermission.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    UrlPermission = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UrlPermission);
    return UrlPermission;
}());



/***/ }),

/***/ "./src/app/volunteer-grid/volunteer-grid.component.css":
/*!*************************************************************!*\
  !*** ./src/app/volunteer-grid/volunteer-grid.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZvbHVudGVlci1ncmlkL3ZvbHVudGVlci1ncmlkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/volunteer-grid/volunteer-grid.component.html":
/*!**************************************************************!*\
  !*** ./src/app/volunteer-grid/volunteer-grid.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"page-header well text-center well-sm\">\n    <h3><strong> Volunteer </strong></h3>\n  </div>\n  <div class=\"col-md-10\" #myGrid  style=\"width: 100%; height: 100%;\">\n    <ag-grid-angular\n      class=\"ag-theme-balham\"\n      [rowData]=\"data\"\n      [columnDefs]=\"headers\"\n      (rowClicked)=\"onRowCilcked($event)\"\n\n    >\n\n    </ag-grid-angular>\n  </div>\n  <div class=\"col-md-10\">\n      <div style=\"text-align:right\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"router.navigate(['/volunteer'])\">\n          Add Volunteer\n      </button>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/volunteer-grid/volunteer-grid.component.ts":
/*!************************************************************!*\
  !*** ./src/app/volunteer-grid/volunteer-grid.component.ts ***!
  \************************************************************/
/*! exports provided: VolunteerGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteerGridComponent", function() { return VolunteerGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var VolunteerGridComponent = /** @class */ (function () {
    function VolunteerGridComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.data = [];
        this.headers = [
            { headerName: 'First Name', field: 'firstName', filter: true, sortable: true },
            { headerName: 'Last Name', field: 'lastName', filter: true },
            { headerName: 'Phone Prefix', field: 'phonePrefix', filter: true },
            { headerName: 'Phone Number', field: 'phoneNumber', filter: true },
            { headerName: 'Phone Prefix', field: 'alternatePhonePrefix', filter: true },
            { headerName: 'Alternate Phone Number', field: 'alternatePhoneNumber', filter: true },
            { headerName: 'EmailId', field: 'email', filter: true },
            { headerName: 'EmailId2', field: 'alternateEmail', filter: true },
            { headerName: 'Locality', field: 'locality', filter: true },
            { headerName: 'City', field: 'city', filter: true },
            { headerName: 'State', field: 'state', filter: true },
            { headerName: 'PinCode', field: 'pincode', filter: true },
            { headerName: 'Interested Areas', field: 'interestedAreas' }
        ];
        this.interestedList = new Array();
    }
    VolunteerGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getData('volunteer').subscribe(function (response) {
            var result = JSON.parse(JSON.stringify(response));
            Array.from(result).forEach(function (element) {
                var interestedAreas1 = JSON.parse(JSON.stringify(element)).interestedAreas;
                while (_this.interestedList.length) {
                    _this.interestedList.pop();
                }
                for (var _i = 0, interestedAreas1_1 = interestedAreas1; _i < interestedAreas1_1.length; _i++) {
                    var val = interestedAreas1_1[_i];
                    console.log("hey:" + val["interestedArea"]);
                    _this.interestedList.push(val["interestedArea"]);
                }
                Object.assign(element, { interestedAreas: _this.interestedList.toString()
                });
            });
            console.log(response);
            console.log(_this.data);
            _this.data = result;
        });
    };
    VolunteerGridComponent.prototype.onRowCilcked = function (event) {
        console.log(event.rowIndex);
        this.router.navigateByUrl("/volunteer/edit/" + ((event.rowIndex) + 1));
    };
    VolunteerGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-volunteer-grid',
            template: __webpack_require__(/*! ./volunteer-grid.component.html */ "./src/app/volunteer-grid/volunteer-grid.component.html"),
            styles: [__webpack_require__(/*! ./volunteer-grid.component.css */ "./src/app/volunteer-grid/volunteer-grid.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], VolunteerGridComponent);
    return VolunteerGridComponent;
}());



/***/ }),

/***/ "./src/app/volunteer/volunteer.component.css":
/*!***************************************************!*\
  !*** ./src/app/volunteer/volunteer.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.text-on-pannel {\n  background: #fff none repeat scroll 0 0;\n  height: auto;\n  margin-left: 20px;\n  padding: 3px 5px;\n  position: absolute;\n  margin-top: -20px;\n  border: 1px solid #337ab7;\n  border-radius: 8px;\n}\n\n.panel {\n\n  margin-top: 27px !important;\n}\n\n.panel-body {\n  padding-top: 30px !important;\n}\n\n.field-invalid\n{\ncolor:pink;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm9sdW50ZWVyL3ZvbHVudGVlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBOztBQUVBLFVBQVU7QUFDViIsImZpbGUiOiJzcmMvYXBwL3ZvbHVudGVlci92b2x1bnRlZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRleHQtb24tcGFubmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzM3YWI3O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5wYW5lbCB7XG5cbiAgbWFyZ2luLXRvcDogMjdweCAhaW1wb3J0YW50O1xufVxuXG4ucGFuZWwtYm9keSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5maWVsZC1pbnZhbGlkXG57XG5jb2xvcjpwaW5rO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/volunteer/volunteer.component.html":
/*!****************************************************!*\
  !*** ./src/app/volunteer/volunteer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"page-header well well-sm text-center\">\n    <h3><strong> Volunteer Registration</strong></h3>\n  </div>\n  <div class=\"panel panel-info\" >\n   <!-- <fieldset>\n\n    <legend>Personal Details</legend>-->\n    <!--<h3 class=\"text-on-pannel text-primary\"><strong class=\"text-uppercase\"> Personal Information</strong></h3>-->\n  <div class=\"panel-heading\">\n    <label>Personal Information</label>\n  </div>\n  <div class=\"panel-body\" >\n    <form #form=\"ngForm\" [formGroup]=\"myForm\" (ngSubmit)=\"personalInfo()\">\n    <div  formGroupName=\"personalInfo\">\n\n\n        <div class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group required\">\n              <label class=\"control-label\">First Name</label>\n              <input type=\"text\" formControlName = \"firstName\" class=\"form-control well well-sm\"[ngClass]=\"{'is-invalid':myForm.controls['personalInfo'].controls.firstName.errors&&(myForm.controls['personalInfo'].controls.firstName.dirty||myForm.controls['personalInfo'].controls.firstName.touched)}\">\n              <div *ngIf=\"myForm.controls['personalInfo'].controls.firstName.errors&&(myForm.controls['personalInfo'].controls.firstName.dirty||myForm.controls['personalInfo'].controls.firstName.touched)\" class=\"invalid-feedback\">\n                <div *ngIf=\"myForm.controls['personalInfo'].controls.firstName.errors.required\" class=\"field-invalid\">First Name is required</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group required\">\n              <label class=\"control-label\">Last Name</label>\n              <input type=\"text\" formControlName = \"lastName\" class=\"form-control well well-sm\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-1 offset-md-3\">\n            <div class=\"form-group required\">\n              <label class=\"control-label\">Prefix</label>\n              <input type=\"text\" formControlName = \"phonePrefix\" class=\"form-control well well-sm\">\n            </div>\n          </div>\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group required\">\n              <label class=\"control-label\">Phone Number</label>\n              <input type=\"text\" formControlName = \"phoneNumber\" class=\"form-control well well-sm\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-1 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Prefix</label>\n              <input type=\"text\" formControlName = \"alternatePhonePrefix\" class=\"form-control well well-sm\">\n            </div>\n          </div>\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Alternate Phone</label>\n              <input type=\"text\" formControlName = \"alternatePhoneNumber\" class=\"form-control well well-sm\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group required\">\n              <label class=\"control-label\">Email</label>\n              <input type=\"text\" formControlName = \"email\" class=\"form-control well well-sm\">\n            </div>\n          </div>\n\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Alternate Email</label>\n              <input type=\"text\" formControlName = \"alternateEmail\" class=\"form-control well well-sm\">\n            </div>\n          </div>\n        </div>\n\n\n    </div>\n    </form>\n  </div>\n    <!--</fieldset>-->\n  </div>\n\n  <div class=\"panel panel-info\">\n    <!--<fieldset>\n\n      <legend>Address</legend>-->\n\n    <!--<h3 class=\"text-on-pannel text-primary\"><strong class=\"text-uppercase\"> Address</strong></h3>-->\n    <div class=\"panel-heading\">\n      <label>Address</label>\n    </div>\n      <div class=\"panel-body\">\n        <form [formGroup]=\"myForm\" >\n        <div formGroupName=\"address\">\n\n\n            <div class=\"row\">\n              <div class=\"col-md-6 offset-md-3\">\n                <div class=\"form-group required\">\n                  <label class=\"control-label\">Locality</label>\n                  <input type=\"text\" formControlName = \"locality\" class=\"form-control well well-sm\">\n                </div>\n              </div>\n              <div class=\"col-md-6 offset-md-3\">\n                <div class=\"form-group required\">\n                  <label class=\"control-label\">City</label>\n                  <input type=\"text\" formControlName = \"city\" class=\"form-control well well-sm\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-6 offset-md-3\">\n                <div class=\"form-group required\">\n                  <label class=\"control-label\">State</label>\n                  <input type=\"text\" formControlName = \"state\" class=\"form-control well well-sm\">\n                </div>\n              </div>\n\n              <div class=\"col-md-6 offset-md-3\">\n                <div class=\"form-group required\">\n                  <label class=\"control-label\">Pin Code</label>\n                  <input type=\"text\" formControlName = \"pincode\" class=\"form-control well well-sm\">\n                </div>\n              </div>\n            </div>\n\n\n        </div>\n        </form>\n      </div>\n   <!-- </fieldset>-->\n  </div>\n  <div class=\"panel panel-info\">\n    <!--<fieldset>\n\n      <legend>Additional Information</legend>-->\n   <!-- <h3 class=\"text-on-pannel text-primary\"><strong class=\"text-uppercase\"> Additional Information </strong></h3>-->\n      <div class=\"panel-heading\">\n        <label>Additional Information</label>\n      </div>\n      <div class=\"panel-body\">\n        <form #form=\"ngForm\" [formGroup]=\"myForm\" (ngSubmit)=\"additionalInfo()\">\n        <div formGroupName=\"additionalInfo\">\n\n\n            <div class=\"row\">\n              <div class=\"col-md\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Interest Areas</label>\n\n\n\n                  <angular2-multiselect [data]=\"interestedAreasCategory\" [(ngModel)]=\"selectedList\" formControlName=\"interestedAreas\" settings=\"dropdownSettings\"></angular2-multiselect>\n\n                </div>\n              </div>\n\n            </div>\n\n\n\n\n        </div>\n\n        </form>\n\n      </div>\n    <!--</fieldset>-->\n  </div>\n  <div class=\"text-center\">\n <!-- <button  class=\"btn btn-default\" (click)=\"onSubmit()\">Register</button>-->\n    <button class=\"btn btn-default\" (click)=\"onSubmit()\"  *ngIf=\"mode!='view' && mode!='edit'\">Register</button>\n    <button class=\"btn btn-default\" (click)=\"onSubmit()\" *ngIf=\"mode=='edit'\" >Update</button>\n\n    <button class=\"btn btn-default\"(click)=\"onEdit()\" *ngIf=\"mode=='view'\">Edit</button>\n    <button class=\"btn btn-default\"(click)=\"onClose()\" *ngIf=\"mode=='view' || mode=='edit'\" >Close</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/volunteer/volunteer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/volunteer/volunteer.component.ts ***!
  \**************************************************/
/*! exports provided: VolunteerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteerComponent", function() { return VolunteerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var VolunteerComponent = /** @class */ (function () {
    function VolunteerComponent(formBuilder, apiService, route, router) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.selected = new Array();
        this.interestedList = new Array();
        this.dropdownSettings = {};
    }
    VolunteerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = this.formBuilder.group({
            personalInfo: this.personalInfo(),
            address: this.address(),
            additionalInfo: this.additionalInfo()
        });
        this.interestedAreasCategory = [
            { "id": 1, "itemName": "Education" },
            { "id": 2, "itemName": "Health" },
            { "id": 3, "itemName": "Environment" }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Select interested Areas",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class"
        };
        this.route.paramMap.subscribe(function (params) {
            console.log(params);
            if (params.get('mode')) {
                _this.mode = params.get('mode');
                _this.id = +params.get('id');
            }
            if (_this.id) {
                if (!isNaN(_this.id)) {
                    _this.apiService.getData('volunteer', _this.id, true).subscribe(function (result) {
                        var data = JSON.parse(JSON.stringify(result));
                        console.log("GetResponse: " + data);
                        if (data.additionalInfo.interestedAreas) {
                            data.additionalInfo.interestedAreas.forEach(function (interestedArea, index) {
                                if (index != 0) {
                                    _this.selected.push({ "id": interestedArea["id"], "itemName": interestedArea["interestedArea"] });
                                }
                            });
                            _this.setSelectedList(_this.selected);
                        }
                        _this.myForm.setValue(data);
                    });
                }
                else {
                    alert('Error in ID');
                }
            }
        });
    };
    VolunteerComponent.prototype.setSelectedList = function (selected) {
        console.log("came to selected");
        this.selectedList = selected;
    };
    VolunteerComponent.prototype.ngAfterViewInit = function () {
        if (this.mode == 'view') {
            Array.from(document.getElementsByClassName('form-control')).forEach(function (element) {
                element.disabled = true;
            });
        }
        else {
            Array.from(document.getElementsByClassName('form-control')).forEach(function (element) {
                element.disabled = false;
            });
        }
    };
    VolunteerComponent.prototype.personalInfo = function () {
        var aboutVolunteer = this.formBuilder.group({
            firstName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ]],
            lastName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ]],
            phoneNumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]+$"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)
                ]],
            alternatePhoneNumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]+$"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)
                ]],
            phonePrefix: ['', []],
            alternatePhonePrefix: ['', []],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ]],
            alternateEmail: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ]]
        });
        return aboutVolunteer;
    };
    VolunteerComponent.prototype.address = function () {
        var address = this.formBuilder.group({
            locality: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2000)
                ]],
            state: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ]],
            city: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ]],
            pincode: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]+$"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)
                ]]
        });
        return address;
    };
    VolunteerComponent.prototype.additionalInfo = function () {
        var me = this;
        var additionalInfo = this.formBuilder.group({
            interestedAreas: [this.formBuilder.array([this.interestedArea]), []],
        });
        return additionalInfo;
    };
    VolunteerComponent.prototype.interestedArea = function () {
        return this.formBuilder.group({
            interestedArea: ['', []]
        });
    };
    VolunteerComponent.prototype.onEdit = function () {
        this.router.navigateByUrl("/volunteer/edit/" + this.id);
    };
    VolunteerComponent.prototype.onClose = function () {
        console.log("came to close");
        this.router.navigateByUrl("/grid/volunteer");
    };
    VolunteerComponent.prototype.onSubmit = function () {
        console.log("Insubmit");
        if (this.selectedList) {
            for (var _i = 0, _a = this.selectedList; _i < _a.length; _i++) {
                var val = _a[_i];
                console.log("interestedArea:" + val["itemName"]);
                this.interestedList.push({ "interestedArea": val["itemName"] });
            }
        }
        console.log(this.address);
        if (this.myForm.valid) {
            console.log("valid");
            var json = Object.assign(this.myForm.get('personalInfo').value, this.myForm.get('address').value, { interestedAreas: this.interestedList });
            if (this.mode == 'edit') {
                json = Object.assign(json, { id: this.id });
            }
            console.log('submitting: ', json);
            var response = this.apiService.postData(json, 'volunteer');
            console.log("boolean is" + response);
            while (this.interestedList.length) {
                this.interestedList.pop();
            }
            if (response) {
                if (this.mode == 'edit') {
                    alert('Succesfully updated Volunteer');
                }
                else {
                    alert('Succesfully registered Volunteer');
                }
                this.router.navigateByUrl("/grid/volunteer");
            }
        }
        else {
            console.log("invalid");
        }
        console.log("address is" + this.myForm.valid);
    };
    VolunteerComponent.prototype.fx = function (val) {
        console.log(val);
    };
    VolunteerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-volunteer',
            template: __webpack_require__(/*! ./volunteer.component.html */ "./src/app/volunteer/volunteer.component.html"),
            styles: [__webpack_require__(/*! ./volunteer.component.css */ "./src/app/volunteer/volunteer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], VolunteerComponent);
    return VolunteerComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Welcome to Youth For Seva\n</p>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/xhrInterceptor.ts":
/*!***********************************!*\
  !*** ./src/app/xhrInterceptor.ts ***!
  \***********************************/
/*! exports provided: XhrInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrInterceptor", function() { return XhrInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var XhrInterceptor = /** @class */ (function () {
    function XhrInterceptor() {
    }
    XhrInterceptor.prototype.intercept = function (req, next) {
        var xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        return next.handle(xhr);
    };
    XhrInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], XhrInterceptor);
    return XhrInterceptor;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    serverHost: '.'
};


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
    production: false,
    serverHost: 'http://localhost:8080'
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/force/yfsevents/yfsevents-web/src/main/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map