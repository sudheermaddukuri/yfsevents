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



var ApiServiceMail = /** @class */ (function () {
    function ApiServiceMail(http) {
        this.http = http;
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
        console.log('postingggg', data);
        this.http.post(this.basicURL + this.urlList.get("send"), data).subscribe(function (response) {
            console.log('postResponse: ', response);
            alert("Sucessfully Sent Email");
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
    };
    ApiService.prototype.postData = function (data, type) {
        return this.http.post(this.basicURL + this.urlList.get(type), data).subscribe(function (response) {
            console.log('postResponse: ', response);
        });
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
        path: 'inventorydata', component: _inventory_data_inventory_data_component__WEBPACK_IMPORTED_MODULE_7__["InventoryDataComponent"]
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
    { path: 'volunteer-create', component: _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_6__["VolunteerComponent"] },
    {
        path: 'email/:name', component: _send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_9__["SendMailComponent"]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header></header>\r\n<div class=\"container\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n<!--<footer></footer>-->\r\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Y4S';
    }
    AppComponent.API_URL = "http://localhost:8080";
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _volunteer_grid_volunteer_grid_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./volunteer-grid/volunteer-grid.component */ "./src/app/volunteer-grid/volunteer-grid.component.ts");
/* harmony import */ var _services_event_emmiter_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/event.emmiter.service */ "./src/app/services/event.emmiter.service.ts");




































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
                _volunteer_grid_volunteer_grid_component__WEBPACK_IMPORTED_MODULE_33__["VolunteerGridComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_29__["RegisterComponent"],
            ],
            imports: [
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
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_32__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_31__["UserService"], _urlPermission_url_permission__WEBPACK_IMPORTED_MODULE_30__["UrlPermission"], _services_event_emmiter_service__WEBPACK_IMPORTED_MODULE_34__["EventEmiterService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/college-registration-grid/college-registration-grid.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/college-registration-grid/college-registration-grid.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsZWdlLXJlZ2lzdHJhdGlvbi1ncmlkL2NvbGxlZ2UtcmVnaXN0cmF0aW9uLWdyaWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/college-registration-grid/college-registration-grid.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/college-registration-grid/college-registration-grid.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"page-header well text-center well-sm\">\r\n    <h3><strong> College Registration</strong></h3>\r\n  </div>\r\n  <div class=\"col-md-10\" #myGrid  style=\"width: 100%; height: 100%;\">\r\n    <ag-grid-angular \r\n      class=\"ag-theme-balham\" \r\n      [rowData]=\"data\" \r\n      [columnDefs]=\"headers\"\r\n      (rowClicked)=\"onRowCilcked($event)\"\r\n     \r\n    >\r\n     \r\n    </ag-grid-angular>\r\n  </div>\r\n</div>"

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
            { headerName: 'Mou Name', field: 'mouName' },
            { headerName: 'Mou ID', field: 'mouID', filter: true },
            { headerName: 'Mou Status', field: 'mouStatus' }
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
                Object.assign(element, { mouName: mouDetails[0].mouName });
                Object.assign(element, { mouStatus: mouDetails[0].mouStatus });
                Object.assign(element, { mouID: mouDetails[0].mouID });
            });
            console.log(response);
            console.log(_this.data);
            _this.data = result;
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsZWdlLXJlZ2lzdHJhdGlvbi9jb2xsZWdlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/college-registration/college-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/college-registration/college-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\" style=\"margin-top: 20px\">\r\n  <div class=\"col-md-1\">\r\n  \r\n  </div>\r\n  \r\n  <div class=\"col-md-10\">\r\n          <div id=\"myGrid\"  style=\"width: 100%; height: 100%;\">\r\n  <ag-grid-angular \r\n      class=\"ag-theme-balham\"\r\n      [rowData]=\"rowData\" \r\n      [columnDefs]=\"columnDefs\"\r\n      >\r\n  </ag-grid-angular>\r\n  </div>\r\n  </div>\r\n  <div class=\"col-md-1\">\r\n      \r\n  </div>\r\n  \r\n  </div>"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsZWdlLXJlZ2lzdHJhdGlvbi9jb2xsZWdlLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/college-registration/college-registration.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/college-registration/college-registration.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"page-header well well-sm\">\r\n    <h3><strong> College Registration</strong></h3>\r\n  </div>\r\n\r\n  <form [formGroup]=\"collegeForm\">\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\">\r\n        <label>About College</label>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <div formGroupName=\"collegeDetails\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 offset-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">College Name</label>\r\n                <input type=\"text\" formControlName=\"name\" class=\"form-control well well-sm\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 offset-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">Registration Id</label>\r\n                <input type=\"text\" formControlName=\"registrationId\" class=\"form-control well well-sm\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\">\r\n        <label>Address</label>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <div formGroupName=\"address\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 offset-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">Address Line 1</label>\r\n                <input type=\"text\" formControlName=\"addressLine1\" class=\"form-control well well-sm\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 offset-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">Address Line 2</label>\r\n                <input type=\"text\" formControlName=\"addressLine2\" class=\"form-control well well-sm\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 offset-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">City</label>\r\n                <input type=\"text\" formControlName=\"city\" class=\"form-control well well-sm\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 offset-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">State</label>\r\n                <input type=\"text\" formControlName=\"state\" class=\"form-control well well-sm\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 offset-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">Pincode</label>\r\n                <input type=\"text\" formControlName=\"pincode\" class=\"form-control well well-sm\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 offset-md-3\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\">\r\n        <label>MOU Details</label>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <ul class=\"nav nav-tabs\" active=\"selectedTab\">\r\n          <li class=\"nav active\" *ngIf=\"numberOfMOUs>0\"><a href=\"#tab0\" data-toggle=\"tab\" (click)=\"activateTab(1)\">MOU\r\n              1</a></li>\r\n          <li class=\"nav\" *ngFor=\"let num of getArray(numberOfMOUs-1); let i=index;\"><a href=\"#tab{{i+1}}\" data-toggle=\"tab\"\r\n              (click)=\"activateTab(i+2)\">MOU {{i+2}}</a></li>\r\n\r\n          <div class=\"pull-right\">\r\n            <button class=\"btn btn-primary btn-sm btn-space\" (click)=addMOU() [disabled]=\"isMaxLimitReached(10)\">Add MOU</button>\r\n            <button class=\"btn btn-primary btn-sm \" (click)=removeMOU() >Remove MOU</button>\r\n\r\n          </div>\r\n\r\n        </ul>\r\n\r\n        <div class=\"tab-content\">\r\n          <div formArrayName=\"mouDetails\">\r\n            <div class=\"tab-pane\" *ngFor=\"let person of collegeForm.get('mouDetails').controls;let i=index\"\r\n              formGroupName=\"{{i}}\" id=\"tab{{i}}\">\r\n\r\n              <div *ngIf=\"selectedTab==i\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 offset-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">MOU ID</label>\r\n                      <input type=\"text\" formControlName=\"mouID\" class=\"form-control well well-sm\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 offset-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">MOU STATUS</label>\r\n                      <input type=\"text\" formControlName=\"mouStatus\" class=\"form-control well well-sm\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 offset-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">MOU Name</label>\r\n                      <input type=\"text\" formControlName=\"mouName\" class=\"form-control well well-sm\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 offset-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">Number Of Events Agreed</label>\r\n                      <input type=\"text\" formControlName=\"noOfEvents\" class=\"form-control well well-sm\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 offset-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">Valid From</label>\r\n                      <input type=\"text\" formControlName=\"fromDate\" class=\"form-control well well-sm\" bsDatepicker>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 offset-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">Valid To</label>\r\n                      <input type=\"text\" formControlName=\"toDate\" class=\"form-control well well-sm\" bsDatepicker>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 offset-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">Comments</label>\r\n                      <textarea type=\"text\" formControlName=\"comments\" class=\"form-control well well-sm\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n  <div class=\"text-center\">\r\n    <button class=\"btn btn-primary btn-sx\" (click)=\"onSubmit()\">Register</button>\r\n  </div>\r\n</div>\r\n"

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
    CollegeRegistrationComponent.prototype.onSubmit = function () {
        console.log('inside method onsubmit');
        var json = Object.assign({ mouDetails: this.getMOUDetails().value }, this.collegeForm.get('collegeDetails').value, this.collegeForm.get('address').value);
        if (this.mode == 'edit') {
            json = Object.assign(json, { id: this.id });
        }
        console.log('submitting: ', json);
        this.apiService.postData(json, 'collegeregistration');
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

module.exports = ".row {\r\n    margin-bottom:25px;\r\n}\r\n\r\n.itemsrow{\r\n    margin-bottom:0px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9hZGQtZXZlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJldmVudHMvYWRkLWV2ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICAgIG1hcmdpbi1ib3R0b206MjVweDtcclxufVxyXG5cclxuLml0ZW1zcm93e1xyXG4gICAgbWFyZ2luLWJvdHRvbTowcHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/events/add-event.component.html":
/*!*************************************************!*\
  !*** ./src/app/events/add-event.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"page-header well text-center well-sm\">\r\n      <h3><strong> Event Registration</strong></h3>\r\n    </div>\r\n\r\n    <form [formGroup]=\"eventForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-body\">\r\n          \r\n          <div class=\"row form-row\">\r\n            <div class=\"col-md-6 offset-md-3 form-group\">\r\n                <label class=\"control-label\">Event Name</label>\r\n                <input type=\"text\" formControlName=\"eventName\" placeholder=\"Event Name\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"col-md-6 form-group\">\r\n                <label class=\"control-label\">Action</label>\r\n                <select formControlName=\"eventAction\" class=\"form-control\">\r\n                  <option *ngFor=\"let action of eventActions\" [value]=\"action\">{{action}}</option>\r\n                </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row form-row\">\r\n            <div class=\"col-md-6 offset-md-3 form-group\">\r\n                <label class=\"control-label\">PartnerNGO Name</label>\r\n                <input formControlName=\"ngoName\" [typeahead]=\"ngos\" placeholder=\"PartnerNGO Name\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"col-md-4 form-group\">\r\n                <label class=\"control-label\">Category</label>\r\n                <select formControlName=\"eventCategory\" class=\"form-control\" (change)=\"onCategorySelected()\">\r\n                  <option *ngFor=\"let category of eventCategories\" [value]=\"category\">{{category}}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-md-2 form-group\">\r\n              <label class=\"control-label\">Recurring Event:</label>\r\n              <select formControlName=\"recurringEvent\" class=\"form-control\">\r\n                <option *ngFor=\"let value of recurringEventOptions\" [value]=\"value\">{{value}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n            <div class=\"row form-row itemsrow\">\r\n              <div class=\"col-md-6 offset-md-3 form-group\">\r\n                <label for=\"datepicker\">Select Date & Time Range</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"datepicker\" formControlName=\"eventDuration\" bsDaterangepicker/>\r\n              </div>\r\n              <div class=\"col-md-3 form-group\">\r\n                <timepicker [formControlName]=\"'fromTime'\">\r\n                  </timepicker>\r\n              </div>\r\n              <div class=\"col-md-3 form-group\">\r\n                <timepicker [formControlName]=\"'toTime'\"></timepicker>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row form-row\">\r\n              <div class=\"col-md-9 offset-md-3 form-group\">\r\n                <label class=\"control-label\">Items Required:</label>\r\n                <angular2-multiselect [data]=\"itemList\" [settings]=\"settings\" \r\n                  (onSelect)=\"log($event)\"\r\n                  (onDeSelect)=\"log($event)\" \r\n                  (onSelectAll)=\"log($event)\" \r\n                  (onDeSelectAll)=\"log($event)\" formControlName=\"items\">\r\n                </angular2-multiselect>\r\n              </div>\r\n              <div class=\"col-md-3  form-group\">\r\n                  <label class=\"control-label\">No. of Volunteers</label>\r\n                  <input type=\"text\" formControlName=\"volunteers\" placeholder=\"Number of Volunteers\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\" [disabled]=\"eventForm.pristine\">Save</button>\r\n    </form>\r\n</div>  \r\n\r\n\r\n\r\n\r\n\r\n<!-- <form >\r\n        <div class=\"form-row\">\r\n            <div class=\"col-md-1\"></div>\r\n          <div class=\"form-group col-md-5\">\r\n            <label for=\"eventname\">Event Name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"eventname\" placeholder=\"Name\">\r\n          </div>\r\n          <div class=\"form-group col-md-5\">\r\n                <label for=\"eventaction\">Action</label>\r\n                <select id=\"eventaction\" class=\"form-control\">\r\n                  <option selected>Choose...</option>\r\n                  <option>Not Started</option>\r\n                  <option>In progress</option>\r\n                  <option>completed</option>\r\n                  <option>Abandoned</option>\r\n                </select>\r\n          </div>\r\n          <div class=\"col-md-1\"></div>\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n                <div class=\"col-md-1\"></div>\r\n              <div class=\"form-group col-md-5\">\r\n                <label for=\"ngoname\">Partner Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"ngoname\" placeholder=\"NGO Name\" >\r\n              </div>\r\n              <div class=\"form-group col-md-5\">\r\n                    <label for=\"eventcategory\">Event category</label>\r\n                    <select id=\"eventcategory\" class=\"form-control\">\r\n                      <option selected>Choose...</option>\r\n                      <option>Not Started</option>\r\n                      <option>In progress</option>\r\n                      <option>completed</option>\r\n                      <option>Abandoned</option>\r\n                    </select>\r\n              </div>\r\n              <div class=\"col-md-1\"></div>\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n              <div class=\"col-md-1\"></div>\r\n            <div class=\"form-group col-md-5\">\r\n                <label for=\"datepicker\">Select Date Range</label>\r\n                <input id=\"datepicker\" class=\"form-control\"\r\n                bsDaterangepicker [(ngModel)]=\"bsRangeValue\" >\r\n            </div>\r\n            <div class=\"form-group col-md-5\">\r\n                <label for=\"eventaction\">Recurring Event</label>\r\n                <select id=\"eventaction\" class=\"form-control\">\r\n                  <option selected>No</option>\r\n                  <option>Yes</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-md-1\"></div>\r\n          </div>\r\n\r\n\r\n        \r\n\r\n            \r\n</form> -->"

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
        this.selectedItems = [];
        this.settings = {};
        this.eventActions = ['Not Started', 'In progress', 'Completed', 'Abandoned'];
        this.eventCategories = ['PartnerNGO', 'Education', 'Environment', 'Health', 'Other'];
        this.recurringEventOptions = ['Yes', 'No'];
        this.eventForm = this.formBuilder.group({
            eventName: '',
            eventAction: 'Not Started',
            eventDuration: null,
            fromTime: new Date(),
            toTime: new Date(),
            ngoName: '',
            eventCategory: '',
            recurringEvent: 'No',
            items: [],
            volunteers: ''
        });
    }
    AddEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getData('partnerngo').subscribe(function (data) {
            _this.ngos_data = data;
            _this.ngos = _this.ngos_data.map(function (ngo) {
                return ngo.name;
            });
        });
        this.itemList = [
            { "id": 1, "itemName": "Item1" },
            { "id": 2, "itemName": "Item2" },
            { "id": 3, "itemName": "Item3" },
            { "id": 4, "itemName": "Item4" },
            { "id": 5, "itemName": "Item5" },
            { "id": 6, "itemName": "Item6" }
        ];
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
                    volunteers: data.volunteers
                });
                console.log(_this.eventForm.value.eventDuration);
            });
        }
    };
    AddEventComponent.prototype.log = function ($event) {
        console.log("hi");
    };
    AddEventComponent.prototype.onSubmit = function () {
        console.log(this.eventForm.value);
        this.eventData.eventName = this.eventForm.value.eventName;
        this.eventData.eventAction = this.eventForm.value.eventAction;
        this.eventData.eventfromTime = this.eventForm.value.fromTime;
        this.eventData.eventtoTime = this.eventForm.value.toTime;
        this.eventData.ngoName = this.eventForm.value.ngoName;
        this.eventData.volunteers = this.eventForm.value.volunteers;
        this.eventData.recurringEvent = this.eventForm.value.recurringEvent;
        // this.eventData.eventDuration=[];
        // this.eventData.eventDuration.push(formatDate(this.eventForm.value.eventDuration[0],'fullDate','en-US'));
        // this.eventData.eventDuration.push(formatDate(this.eventForm.value.eventDuration[1],'fullDate','en-US'));
        this.eventData.eventCategory = this.eventForm.value.eventCategory;
        this.eventData.eventDuration = this.eventForm.value.eventDuration;
        this.eventData.eventItems = this.eventForm.value.items.map(function (item) { return item.itemName; });
        console.log(this.eventData);
        if (this.route.snapshot.paramMap && this.route.snapshot.paramMap.get('id')) {
            this.apiService.putData(this.eventData, this.route.snapshot.paramMap.get('id'), 'event');
        }
        else {
            this.apiService.postData(this.eventData, 'event');
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

module.exports = "\r\n<div class=\"row\" style=\"margin-top: 20px\">\r\n<div class=\"col-md-1\">\r\n\r\n</div>\r\n\r\n<div class=\"col-md-10\">\r\n        <div id=\"myGrid\"  style=\"width: 100%; height: 100%;\">\r\n<ag-grid-angular \r\n    class=\"ag-theme-balham\"\r\n    [rowData]=\"rowData\" \r\n    [columnDefs]=\"columnDefs\"\r\n    (rowClicked)=\"onSearch($event)\"\r\n>\r\n</ag-grid-angular>\r\n</div>\r\n</div>\r\n<div class=\"col-md-1\">\r\n    \r\n</div>\r\n\r\n</div>"

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
        ];
    }
    EventListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getData('events').subscribe(function (data) {
            _this.eventData = data;
            console.log(data);
            _this.rowData = _this.eventData.map(function (event) { return ({
                id: event.id,
                eventAction: event.eventAction,
                eventName: event.eventName,
                eventCategory: event.eventCategory,
                ngoName: event.ngoName,
                event_start_date: event.eventDuration[0],
                event_end_date: event.eventDuration[1]
            }); });
        }, function (err) {
            console.log(err.message);
        });
    };
    EventListComponent.prototype.onSearch = function (event) {
        this.router.navigate(['addevent', { id: event.data.id }]);
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

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n    background-color: #2d2d30;\r\n    color: #d5d5d5 !important;\r\n    letter-spacing: 4px;\r\n    opacity: 0.9;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEIiLCJmaWxlIjoiZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMzA7XHJcbiAgICBjb2xvcjogI2Q1ZDVkNSAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center footer\">\r\n    <!--ToDo: Add go to Top Logic on Button Click\r\n    >a class=\"up-arrow\" href=\"\" data-toggle=\"tooltip\" title=\"TO TOP\">\r\n      <span class=\"glyphicon glyphicon-chevron-up\"></span>\r\n    </a><br><br-->\r\n    <!--TODO: Add below?-->\r\n    <p>Made by <strong></strong></p>\r\n    </div>\r\n"

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

module.exports = ".nav-tabs li a {\r\n    color: #777;\r\n  }\r\n  \r\n  .navbar {\r\n    font-family: Montserrat, sans-serif;\r\n    margin-bottom: 0;\r\n    border: 0;\r\n    font-size: 15px !important;\r\n    letter-spacing: 4px;\r\n    opacity: 0.9;\r\n  }\r\n  \r\n  .navbar li a, .navbar .navbar-brand { \r\n    color: #d5d5d5 !important;\r\n  }\r\n  \r\n  .navbar-nav li a:hover {\r\n    color: #fff !important;\r\n  }\r\n  \r\n  .navbar-nav li.active a {\r\n    color: #fff !important;\r\n    background-color: #2b2c29 !important;\r\n  }\r\n  \r\n  .navbar-default .navbar-toggle {\r\n    border-color: transparent;\r\n  }\r\n  \r\n  .open .dropdown-toggle {\r\n    color: #fff;\r\n  }\r\n  \r\n  .dropdown-menu li a {\r\n    color: #000 !important;\r\n  }\r\n  \r\n  .dropdown-menu li a:hover {\r\n    background-color: red !important;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjs7RUFFQTtJQUNFLG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLG9DQUFvQztFQUN0Qzs7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFDQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFDQTtJQUNFLGdDQUFnQztFQUNsQyIsImZpbGUiOiJoZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LXRhYnMgbGkgYSB7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhciB7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgfVxyXG4gIC5uYXZiYXIgbGkgYSwgLm5hdmJhciAubmF2YmFyLWJyYW5kIHsgXHJcbiAgICBjb2xvcjogI2Q1ZDVkNSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubmF2YmFyLW5hdiBsaSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5uYXZiYXItbmF2IGxpLmFjdGl2ZSBhIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYzI5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZSB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAub3BlbiAuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuZHJvcGRvd24tbWVudSBsaSBhIHtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1tZW51IGxpIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background-color: #ba2a29;margin-bottom:20px;\">\r\n    <div class=\"container-fluid\"> \r\n      \r\n        <a class=\"navbar-brand\" href=\"#\" style=\"height:70px\">\r\n          <img src=\"/assets/youth-for-seva.png\" style=\"height:50px\">\r\n        </a>\r\n      \r\n      <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"nav navbar-nav navbar-right text-white\" style=\"margin-top:12px;\">\r\n          <li><a href=\"\">HOME</a></li>\r\n          <li class=\"dropdown\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">REGISTER\r\n            <span class=\"caret\"></span></a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li><a [routerLink]=\"['/partnerngo']\">Partner NGO</a></li>\r\n              <li><a [routerLink]=\"['/volunteer-create']\">Volunteer</a></li>\r\n              <li><a [routerLink]=\"['/collegeregistration']\">College</a></li>\r\n              <li><a [routerLink]=\"['/inventorydata']\">Inventory Data</a></li>\r\n            </ul>\r\n          </li>\r\n          <li><a [routerLink]=\"['/events']\">EVENTS</a></li>\r\n          <li><a [routerLink]=\"\">CONTACT</a></li>\r\n          <li><a [routerLink]=\"\"><span class=\"glyphicon glyphicon-search\"></span></a></li>\r\n        </ul>\r\n      </div> \r\n    </div>\r\n  </nav>\r\n"

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

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlbnRvcnktZGF0YS9pbnZlbnRvcnktZGF0YS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/inventory-data/inventory-data.component.html":
/*!**************************************************************!*\
  !*** ./src/app/inventory-data/inventory-data.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"page-header well well-sm\">\r\n    <h3><strong> Inventory Data</strong></h3>\r\n  </div>\r\n  <form [formGroup]=\"inventoryData\">\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 offset-md-3\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">Item Name</label>\r\n              <input type=\"text\" formControlName=\"itemName\" class=\"form-control well well-sm\" required>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 offset-md-3\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">Event Category</label>\r\n              <div>\r\n                <select formControlName=\"eventCategory\" class=\"form-control well well-sm\" required>\r\n                  <option *ngFor=\"let evCat of eventCategoryList\" [(ngValue)]=\"evCat.value\">{{evCat.value}}</option>\r\n                </select>          \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 offset-md-3\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">Comments</label>\r\n              <textarea type=\"text\" formControlName=\"comments\" class=\"form-control well well-sm\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"text-center\">\r\n    <button class=\"btn btn-primary btn-sx\" (click)=\"onSubmit()\">Save</button>\r\n  </div>\r\n</div>"

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
    function InventoryDataComponent(formBuilder, inventoryService, route) {
        this.formBuilder = formBuilder;
        this.inventoryService = inventoryService;
        this.route = route;
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
    InventoryDataComponent.prototype.onSubmit = function () {
        var inventoryData = this.inventoryData.getRawValue();
        if (this.route.snapshot.paramMap && this.route.snapshot.paramMap.get('id')) {
            this.inventoryService.updateInventoryDataById(inventoryData, this.route.snapshot.paramMap.get('id')).subscribe(function (data) {
                console.log('response', data);
            });
        }
        else {
            this.inventoryService.saveInventoryData(inventoryData).subscribe(function (data) {
                console.log('response', data);
            });
        }
    };
    InventoryDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory-data',
            template: __webpack_require__(/*! ./inventory-data.component.html */ "./src/app/inventory-data/inventory-data.component.html"),
            styles: [__webpack_require__(/*! ./inventory-data.component.css */ "./src/app/inventory-data/inventory-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _inventorydata_service__WEBPACK_IMPORTED_MODULE_3__["InventorydataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlbnRvcnktZGF0YS9pbnZlbnRvcnktbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/inventory-data/inventory-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/inventory-data/inventory-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\" style=\"margin-top: 20px\">\r\n  <div class=\"col-md-1\">\r\n  \r\n  </div>\r\n  \r\n  <div class=\"col-md-10\">\r\n          <div id=\"myGrid\"  style=\"width: 100%; height: 115px;\">\r\n  <ag-grid-angular \r\n      class=\"ag-theme-balham\"\r\n      [rowData]=\"rowData\" \r\n      [columnDefs]=\"columnDefs\"\r\n      (rowClicked)=\"onSearch($event)\"\r\n      >\r\n  </ag-grid-angular>\r\n  </div>\r\n  </div>\r\n  <div class=\"col-md-1\">\r\n      \r\n  </div>\r\n  \r\n  </div>"

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
        this.router.navigate(['inventorydata', { id: event.data.id }]);
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

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\r\n}\r\n.card-container.card {\r\n  max-width: 350px;\r\n  padding: 40px 40px;\r\n}\r\n.btn {\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n.reauth-email {\r\n  display: block;\r\n  color: #404040;\r\n  line-height: 2;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n  direction: ltr;\r\n  height: 44px;\r\n  font-size: 16px;\r\n}\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  z-index: 1;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus {\r\n  border-color: rgb(104, 145, 162);\r\n  outline: 0;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n.btn.btn-signin {\r\n  /*background-color: #4d90fe; */\r\n  background-color: rgb(104, 145, 162);\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n  background-color: rgb(12, 97, 33);\r\n}\r\n.forgot-password {\r\n  color: rgb(104, 145, 162);\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n  color: rgb(12, 97, 33);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRjs7RUFFRTtBQUNGO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixzRUFBc0U7QUFDeEU7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixxQkFBaUI7TUFBakIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFFQTs7RUFFRTtBQUNGO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFHaEMsa0JBQWtCO0VBR2xCLDBDQUEwQztBQUM1QztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUdkLGtCQUFrQjtBQUNwQjtBQUVBOztFQUVFO0FBQ0Y7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFHbkIsc0JBQXNCO0FBQ3hCO0FBRUE7O0VBRUUsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUE7Ozs7RUFJRSxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0VBR2xCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFFVix1RUFBdUU7QUFDekU7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixvQ0FBb0M7RUFDcEMsMkVBQTJFO0VBQzNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFHWixrQkFBa0I7RUFDbEIsWUFBWTtFQUlaLHNCQUFzQjtBQUN4QjtBQUVBOzs7RUFHRSxpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoibG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFNwZWNpZmljIHN0eWxlcyBvZiBzaWduaW4gY29tcG9uZW50XHJcbiAqL1xyXG4vKlxyXG4gKiBHZW5lcmFsIHN0eWxlc1xyXG4gKi9cclxuYm9keSwgaHRtbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigxMDQsIDE0NSwgMTYyKSwgcmdiKDEyLCA5NywgMzMpKTtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyLmNhcmQge1xyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbiAgcGFkZGluZzogNDBweCA0MHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGhlaWdodDogMzZweDtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4vKlxyXG4gKiBDYXJkIGNvbXBvbmVudFxyXG4gKi9cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XHJcbiAgLyoganVzdCBpbiBjYXNlIHRoZXJlIG5vIGNvbnRlbnQqL1xyXG4gIHBhZGRpbmc6IDIwcHggMjVweCAzMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDI1cHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICAvKiBzaGFkb3dzIGFuZCByb3VuZGVkIGJvcmRlcnMgKi9cclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWctY2FyZCB7XHJcbiAgd2lkdGg6IDk2cHg7XHJcbiAgaGVpZ2h0OiA5NnB4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4vKlxyXG4gKiBGb3JtIHN0eWxlc1xyXG4gKi9cclxuLnByb2ZpbGUtbmFtZS1jYXJkIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweCAwIDA7XHJcbiAgbWluLWhlaWdodDogMWVtO1xyXG59XHJcblxyXG4ucmVhdXRoLWVtYWlsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogIzQwNDA0MDtcclxuICBsaW5lLWhlaWdodDogMjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluICNpbnB1dEVtYWlsLFxyXG4uZm9ybS1zaWduaW4gI2lucHV0UGFzc3dvcmQge1xyXG4gIGRpcmVjdGlvbjogbHRyO1xyXG4gIGhlaWdodDogNDRweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPWVtYWlsXSxcclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9cGFzc3dvcmRdLFxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT10ZXh0XSxcclxuLmZvcm0tc2lnbmluIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6IHJnYigxMDQsIDE0NSwgMTYyKTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2IoMTA0LCAxNDUsIDE2Mik7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2IoMTA0LCAxNDUsIDE2Mik7XHJcbn1cclxuXHJcbi5idG4uYnRuLXNpZ25pbiB7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ5MGZlOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDQsIDE0NSwgMTYyKTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQocmdiKDEwNCwgMTQ1LCAxNjIpLCByZ2IoMTIsIDk3LCAzMykpOyovXHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjIxOHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjE4cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xyXG59XHJcblxyXG4uYnRuLmJ0bi1zaWduaW46aG92ZXIsXHJcbi5idG4uYnRuLXNpZ25pbjphY3RpdmUsXHJcbi5idG4uYnRuLXNpZ25pbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCA5NywgMzMpO1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkIHtcclxuICBjb2xvcjogcmdiKDEwNCwgMTQ1LCAxNjIpO1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkOmhvdmVyLFxyXG4uZm9yZ290LXBhc3N3b3JkOmFjdGl2ZSxcclxuLmZvcmdvdC1wYXNzd29yZDpmb2N1c3tcclxuICBjb2xvcjogcmdiKDEyLCA5NywgMzMpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card card-container\">\r\n    <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\r\n    <img class=\"profile-img-card\" id=\"profile-img\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\"/>\r\n    <p class=\"profile-name-card\" id=\"profile-name\"></p>\r\n\r\n    <form #f=\"ngForm\" (ngSubmit)=\"f.form.valid && login()\" name=\"form-signin\" novalidate>\r\n      <div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">{{errorMessage}}</div>\r\n      <span class=\"reauth-email\" id=\"reauth-email\"></span>\r\n      <div [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\" class=\"form-group\">\r\n        <label for=\"username\">Username</label>\r\n        <input #username=\"ngModel\" [(ngModel)]=\"user.username\" class=\"form-control\" id=\"username\" name=\"username\"\r\n               required type=\"text\"/>\r\n        <!-- <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">an valid email is required</div>-->\r\n      </div>\r\n      <div [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\" class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input #password=\"ngModel\" [(ngModel)]=\"user.password\" class=\"form-control\" id=\"password\" name=\"password\"\r\n               required type=\"password\"/>\r\n        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n      </div>\r\n      <div class=\"checkbox\" id=\"remember\">\r\n\r\n      </div>\r\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Sign in</button>\r\n    </form><!-- /form -->\r\n    <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Create new Account!</a>\r\n  </div><!-- /card-container -->\r\n</div><!-- /container -->\r\n"

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
/* harmony import */ var _model_model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/model.user */ "./src/app/model/model.user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_emmiter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/event.emmiter.service */ "./src/app/services/event.emmiter.service.ts");





var LoginComponent = /** @class */ (function () {
    //constructor(private authService :AuthService, private router: Router) { }
    function LoginComponent(_eventEmiter, router) {
        this._eventEmiter = _eventEmiter;
        this.router = router;
        this.user = new _model_model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    //   login(){
    //     this.authService.logIn(this.user)
    //       .subscribe(data=>{
    //         this.router.navigate(['/events']);
    //         },err=>{
    //         this.errorMessage="error :  Username or password is incorrect";
    //         }
    // )
    // }
    LoginComponent.prototype.login = function () {
        this.router.navigate(['/email', "tushar"]);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_event_emmiter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmiterService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0bmVyLW5nby1ncmlkL3BhcnRuZXItbmdvLWdyaWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partner-ngo-grid/partner-ngo-grid.component.html":
/*!******************************************************************!*\
  !*** ./src/app/partner-ngo-grid/partner-ngo-grid.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"page-header well text-center well-sm\">\r\n    <h3><strong> Partner NGO </strong></h3>\r\n  </div>\r\n  <div class=\"col-md-10\" #myGrid  style=\"width: 100%; height: 100%;\">\r\n    <ag-grid-angular \r\n      class=\"ag-theme-balham\" \r\n      [rowData]=\"data\" \r\n      [columnDefs]=\"headers\"\r\n      (rowClicked)=\"onRowCilcked($event)\"\r\n    >\r\n      <!-- \r\n      (rowDoubleClicked)=\"onRowDoubleCilcked(event)\"\r\n      (cellDoubleClicked)=\"onCellDoubleClicked($event)\"-->\r\n    </ag-grid-angular>\r\n  </div>\r\n</div>"

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
            { headerName: 'City', field: 'city', filter: true },
            { headerName: 'Authorized Person Name', field: 'authorizedPersonName' },
            { headerName: 'Authorized Person Contact', field: 'authorizedPersonContact'
            }
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
                Object.assign(element, { authorizedPersonName: authorizedPersons[0].name });
                Object.assign(element, { authorizedPersonContact: authorizedPersons[0].contact1 });
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0bmVyLW5nby9wYXJ0bmVyLW5nby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/partner-ngo/partner-ngo.component.html":
/*!********************************************************!*\
  !*** ./src/app/partner-ngo/partner-ngo.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1 user-scalable=no\">\r\n  </head>\r\n\r\n  <body>\r\n    <div class=\"container-fluid\">\r\n      <div class=\"page-header well well-sm\">\r\n        <h3><strong> Partner NGO Registration</strong></h3>\r\n      </div>\r\n      \r\n      <form [formGroup]=\"myForm\">\r\n        <!-- ToDo: Decrease space between the table rows-->\r\n        <div class=\"panel panel-info\">\r\n          <div class=\"panel-heading\">\r\n            <label>Basic Information</label>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n            <div formGroupName=\"basicInfo\">\r\n              <!-- <table class=\"form-table\"> -->\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6 offset-md-3\">\r\n                    <div class=\"form-group required\">\r\n                      <label class=\"control-label\">Name</label>\r\n                      <input type=\"text\" formControlName = \"name\" class=\"form-control well well-sm\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 offset-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">Description</label>\r\n                      <input type=\"text\" formControlName = \"description\" class=\"form-control well well-sm\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6 offset-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">Branch</label>\r\n                      <input type=\"text\" formControlName = \"branch\" class=\"form-control well well-sm\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 offset-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">Registration Number</label>\r\n                      <input type=\"text\" formControlName = \"registrationNumber\" class=\"form-control well well-sm\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              <!-- </table>               -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"panel panel-info\">\r\n          <div class=\"panel-heading\">\r\n            <label>Address</label>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n            <div formGroupName=\"address\">\r\n              <!-- <table class=\"form-table\"> -->\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 offset-md-3\">\r\n                    <div class=\"form-group required\">\r\n                      <label class=\"control-label\">Address Line 1</label>\r\n                      <input type=\"text\" formControlName = \"addressLine1\" class=\"form-control well well-sm\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 offset-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">Address Line 2</label>\r\n                      <input type=\"text\" formControlName = \"addressLine2\" class=\"form-control well well-sm\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 offset-md-3\">\r\n                    <div class=\"form-group required\">\r\n                      <label class=\"control-label\">City</label>\r\n                      <input type=\"text\" formControlName = \"city\" class=\"form-control well well-sm\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 offset-md-3\">\r\n                    <div class=\"form-group required\">\r\n                      <label class=\"control-label\">State</label>\r\n                      <input type=\"text\" formControlName = \"state\" class=\"form-control well well-sm\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 offset-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">Pincode</label>\r\n                      <input type=\"text\" formControlName = \"pincode\" class=\"form-control well well-sm\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 offset-md-3\">\r\n                  </div>\r\n                </div>\r\n              <!-- </table>               -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"panel panel-info\">\r\n          <div class=\"panel-heading\">\r\n            <label>Authorised Persons</label>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n            <ul class=\"nav nav-tabs\" active=\"selectedTab\">\r\n              <li class=\"nav active\" *ngIf=\"numberOfAuthorizedPersons>0\"><a href=\"#tab0\" data-toggle=\"tab\" (click)=\"activateTab(1)\">Person 1</a></li>\r\n              <li class=\"nav\" *ngFor=\"let num of getArray(numberOfAuthorizedPersons-1); let i=index;\"><a href=\"#tab{{i+1}}\" data-toggle=\"tab\" (click)=\"activateTab(i+2)\">Person {{i+2}}</a></li>\r\n              <!--li class=\"nav active\" *ngIf=\"numberOfAuthorizedPersons>0\"><a href=\"#tab{{numberOfAuthorizedPersons-1}}\" data-toggle=\"tab\" (click)=\"activateTab(numberOfAuthorizedPersons)\">Person {{numberOfAuthorizedPersons}}</a></li-->\r\n              <!--li class=\"nav active\" *ngIf=\"numberOfAuthorizedPersons>0\"><a href=\"#tab{{numberOfAuthorizedPersons-1}}\" data-toggle=\"tab\" (click)=\"selectedTab=i\">Person {{numberOfAuthorizedPersons}}</a></li-->\r\n              <div class=\"pull-right\">\r\n                <button class=\"btn btn-sm btn-primary btn-space\" (click)=\"addAuthorisedPerson()\" [disabled]=\"isMaxLimitReached(5)\">Add Person</button>\r\n                <button class=\"btn btn-sm btn-primary\" (click)=\"removeAuthorisedPerson(selectedTab)\" confirm=\"Are you sure you want to delete?\" confirm-ok=\"Yes\" confirm-cancel=\"No\" [disabled]=\"isMinLimitReached()\">Remove Person</button>\r\n              </div>\r\n              <!--ToDo: Setup dynamic Tab Creation and Add Delete button-->\r\n            </ul>\r\n\r\n            <div class=\"tab-content\">\r\n              <div formArrayName=\"authorizedPersons\">\r\n                <!--ToDo: NgFor not working: Check-->\r\n                <div class=\"tab-pane\" *ngFor=\"let person of myForm.get('authorizedPersons').controls;let i=index\" formGroupName=\"{{i}}\" id=\"tab{{i}}\">\r\n                  <!-- <table class=\"form-table\"> -->\r\n                  <div *ngIf=\"selectedTab==i\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-6 offset-md-3\">\r\n                        <div class=\"form-group required\">\r\n                          <label class=\"control-label\">Name</label>\r\n                          <input type=\"text\" formControlName = \"name\" class=\"form-control well well-sm\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-6 offset-md-3\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-6 offset-md-3\">\r\n                        <div class=\"form-group required\">\r\n                          <label class=\"control-label\">Contact Details</label>\r\n                          <input type=\"text\" formControlName = \"contact1\" class=\"form-control well well-sm\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-6 offset-md-3\">\r\n                        <div class=\"form-group\">\r\n                          <label class=\"control-label\">Alternate Contact Details</label>\r\n                          <input type=\"text\" formControlName = \"contact2\" class=\"form-control well well-sm\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 offset-md-3\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"control-label\">Email ID</label>\r\n                            <input type=\"text\" formControlName = \"email1\" class=\"form-control well well-sm\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 offset-md-3\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"control-label\">Alternate Email ID</label>\r\n                            <input type=\"text\" formControlName = \"email2\" class=\"form-control well well-sm\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  <!-- </table>               -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n      <!--<span>{{myForm.value | json}}</span>-->\r\n      <div class=\"pull-right\">\r\n        <button (click)=\"onSubmit()\" *ngIf=\"!mode\" class=\"btn btn-primary btn-space\">Register</button>\r\n        <button (click)=\"onEdit()\" *ngIf=\"mode=='view'\" class=\"btn btn-primary btn-space\">Edit</button>\r\n        <button (click)=\"onSubmit()\" *ngIf=\"mode=='edit'\" class=\"btn btn-primary btn-space\">Update</button>\r\n        <button (click)=\"onClose()\" *ngIf=\"mode=='view' || mode=='edit'\" class=\"btn btn-primary btn-space\">Close\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n  </body>\r\n</html>\r\n"

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
    PartnerNGOComponent.prototype.onSubmit = function () {
        var json = Object.assign({ authorizedPerson: this.getAuthorizedPersons().value }, this.myForm.get('basicInfo').value, this.myForm.get('address').value);
        if (this.mode == 'edit') {
            json = Object.assign(json, { id: this.id });
        }
        console.log('submitting: ', json);
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

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\r\n}\r\n.card-container.card {\r\n  max-width: 350px;\r\n  padding: 40px 40px;\r\n}\r\n.btn {\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n.reauth-email {\r\n  display: block;\r\n  color: #404040;\r\n  line-height: 2;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n  direction: ltr;\r\n  height: 44px;\r\n  font-size: 16px;\r\n}\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  z-index: 1;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus {\r\n  border-color: rgb(104, 145, 162);\r\n  outline: 0;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n.btn.btn-signin,.btn-cancel {\r\n  /*background-color: #4d90fe; */\r\n  background-color: rgb(104, 145, 162);\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n.btn.btn-cancel {\r\n  background-color: rgb(255, 34, 24);\r\n}\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n  background-color: rgb(12, 97, 33);\r\n}\r\n.forgot-password {\r\n  color: rgb(104, 145, 162);\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n  color: rgb(12, 97, 33);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRjs7RUFFRTtBQUNGO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixzRUFBc0U7QUFDeEU7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixxQkFBaUI7TUFBakIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFFQTs7RUFFRTtBQUNGO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFHaEMsa0JBQWtCO0VBR2xCLDBDQUEwQztBQUM1QztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUdkLGtCQUFrQjtBQUNwQjtBQUVBOztFQUVFO0FBQ0Y7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFHbkIsc0JBQXNCO0FBQ3hCO0FBRUE7O0VBRUUsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUE7Ozs7RUFJRSxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0VBR2xCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFFVix1RUFBdUU7QUFDekU7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixvQ0FBb0M7RUFDcEMsMkVBQTJFO0VBQzNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFHWixrQkFBa0I7RUFDbEIsWUFBWTtFQUlaLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7OztFQUdFLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7OztFQUdFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJyZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogU3BlY2lmaWMgc3R5bGVzIG9mIHNpZ25pbiBjb21wb25lbnRcclxuICovXHJcbi8qXHJcbiAqIEdlbmVyYWwgc3R5bGVzXHJcbiAqL1xyXG5ib2R5LCBodG1sIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDEwNCwgMTQ1LCAxNjIpLCByZ2IoMTIsIDk3LCAzMykpO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIuY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxuICBwYWRkaW5nOiA0MHB4IDQwcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi8qXHJcbiAqIENhcmQgY29tcG9uZW50XHJcbiAqL1xyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcclxuICAvKiBqdXN0IGluIGNhc2UgdGhlcmUgbm8gY29udGVudCovXHJcbiAgcGFkZGluZzogMjBweCAyNXB4IDMwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMjVweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIC8qIHNoYWRvd3MgYW5kIHJvdW5kZWQgYm9yZGVycyAqL1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltZy1jYXJkIHtcclxuICB3aWR0aDogOTZweDtcclxuICBoZWlnaHQ6IDk2cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi8qXHJcbiAqIEZvcm0gc3R5bGVzXHJcbiAqL1xyXG4ucHJvZmlsZS1uYW1lLWNhcmQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMDtcclxuICBtaW4taGVpZ2h0OiAxZW07XHJcbn1cclxuXHJcbi5yZWF1dGgtZW1haWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjNDA0MDQwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gI2lucHV0RW1haWwsXHJcbi5mb3JtLXNpZ25pbiAjaW5wdXRQYXNzd29yZCB7XHJcbiAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9ZW1haWxdLFxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1wYXNzd29yZF0sXHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPXRleHRdLFxyXG4uZm9ybS1zaWduaW4gYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDEwNCwgMTQ1LCAxNjIpO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgOHB4IHJnYigxMDQsIDE0NSwgMTYyKTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgOHB4IHJnYigxMDQsIDE0NSwgMTYyKTtcclxufVxyXG5cclxuLmJ0bi5idG4tc2lnbmluLC5idG4tY2FuY2VsIHtcclxuICAvKmJhY2tncm91bmQtY29sb3I6ICM0ZDkwZmU7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCwgMTQ1LCAxNjIpO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudChyZ2IoMTA0LCAxNDUsIDE2MiksIHJnYigxMiwgOTcsIDMzKSk7Ki9cclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjE4cztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjIxOHM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjIxOHM7XHJcbn1cclxuXHJcbi5idG4uYnRuLWNhbmNlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMzQsIDI0KTtcclxufVxyXG4uYnRuLmJ0bi1zaWduaW46aG92ZXIsXHJcbi5idG4uYnRuLXNpZ25pbjphY3RpdmUsXHJcbi5idG4uYnRuLXNpZ25pbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCA5NywgMzMpO1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkIHtcclxuICBjb2xvcjogcmdiKDEwNCwgMTQ1LCAxNjIpO1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkOmhvdmVyLFxyXG4uZm9yZ290LXBhc3N3b3JkOmFjdGl2ZSxcclxuLmZvcmdvdC1wYXNzd29yZDpmb2N1c3tcclxuICBjb2xvcjogcmdiKDEyLCA5NywgMzMpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card card-container\">\r\n    <img class=\"profile-img-card\" id=\"profile-img\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\"/>\r\n    <p class=\"profile-name-card\" id=\"profile-name\"></p>\r\n\r\n    <form #f=\"ngForm\" (ngSubmit)=\"f.form.valid && register()\" name=\"form\" novalidate>\r\n      <div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">{{errorMessage}}</div>\r\n      <span class=\"reauth-email\" id=\"reauth-email\"></span>\r\n      <div [ngClass]=\"{ 'has-error': f.submitted && !fullName.valid }\" class=\"form-group\">\r\n        <label for=\"fullName\">Full Name</label>\r\n        <input #fullName=\"ngModel\" [(ngModel)]=\"user.fullName\" class=\"form-control\" id=\"fullName\" name=\"fullName\"\r\n               required type=\"text\"/>\r\n        <div *ngIf=\"f.submitted && !fullName.valid\" class=\"help-block\">The full Name is required</div>\r\n      </div>\r\n      <div [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\" class=\"form-group\">\r\n        <label for=\"username\">Email Address</label>\r\n        <input #username=\"ngModel\" [(ngModel)]=\"user.username\" class=\"form-control\" id=\"username\" name=\"username\"\r\n               pattern=\"[^ @]*@[^ @]*\" required type=\"text\"/>\r\n        <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">\r\n\r\n          <div *ngIf=\"username.errors.required\">\r\n            Email is required.\r\n          </div>\r\n          <div *ngIf=\"username.errors.pattern\">\r\n            A valid email address is required\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\" class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input #password=\"ngModel\" [(ngModel)]=\"user.password\" class=\"form-control\" id=\"password\" minlength=\"4\"\r\n               name=\"password\" required type=\"password\"/>\r\n        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">\r\n\r\n          <div *ngIf=\"password.errors.required\">\r\n            password is required.\r\n          </div>\r\n          <div *ngIf=\"password.errors.minlength\">\r\n            password must be at least 4 characters long.\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"checkbox\" id=\"remember\">\r\n\r\n      </div>\r\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Create Account</button>\r\n      <button [routerLink]=\"['/login']\" class=\"btn btn-lg btn-danger btn-block btn-cancel\" type=\"button\">Cancel</button>\r\n\r\n    </form><!-- /form -->\r\n\r\n  </div><!-- /card-container -->\r\n</div><!-- /container -->\r\n\r\n"

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

module.exports = "#mainDiv\r\n{\r\n  height: 100%;\r\n  width:70%;\r\n  margin:auto;\r\n}\r\n\r\n#heading\r\n{\r\n  height: 50px;\r\n  width: 100%;\r\n  /*padding-left: 35%;*/\r\n  /*margin: auto;*/\r\n  font-size: 25px;\r\n  margin-top: 50px;\r\n  background-color: silver;\r\n}\r\n\r\n#buttonTab\r\n{\r\n  paing-left:10%;\r\n}\r\n\r\n#buttonCancel\r\n{\r\nmargin-left: 30%;\r\n}\r\n\r\n#buttonSubmit\r\n{\r\n  margin-left: 4%;\r\n}\r\n\r\n#backButton\r\n{\r\n  width:30%;\r\n  float:left;\r\n}\r\n\r\n#headingText\r\n{\r\n  width:70%;\r\n  float:left\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmQtbWFpbC9zZW5kLW1haWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZO0VBQ1osU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUI7O0FBQ0E7O0VBRUUsY0FBYztBQUNoQjs7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEI7O0FBQ0E7O0VBRUUsZUFBZTtBQUNqQjs7QUFDQTs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUNBOztFQUVFLFNBQVM7RUFDVDtBQUNGIiwiZmlsZSI6InNlbmQtbWFpbC9zZW5kLW1haWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluRGl2XHJcbntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6NzAlO1xyXG4gIG1hcmdpbjphdXRvO1xyXG59XHJcblxyXG4jaGVhZGluZ1xyXG57XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qcGFkZGluZy1sZWZ0OiAzNSU7Ki9cclxuICAvKm1hcmdpbjogYXV0bzsqL1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcclxufVxyXG4jYnV0dG9uVGFiXHJcbntcclxuICBwYWluZy1sZWZ0OjEwJTtcclxufVxyXG4jYnV0dG9uQ2FuY2VsXHJcbntcclxubWFyZ2luLWxlZnQ6IDMwJTtcclxufVxyXG4jYnV0dG9uU3VibWl0XHJcbntcclxuICBtYXJnaW4tbGVmdDogNCU7XHJcbn1cclxuI2JhY2tCdXR0b25cclxue1xyXG4gIHdpZHRoOjMwJTtcclxuICBmbG9hdDpsZWZ0O1xyXG59XHJcbiNoZWFkaW5nVGV4dFxyXG57XHJcbiAgd2lkdGg6NzAlO1xyXG4gIGZsb2F0OmxlZnRcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/send-mail/send-mail.component.html":
/*!****************************************************!*\
  !*** ./src/app/send-mail/send-mail.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row custom-row\" id=\"mainDiv\">-->\r\n  <!--<div class= \"col-sm-5 custom-container jumbotron\">-->\r\n    <!--<form class=\"form-horizontal\"  #sendmailForm=\"ngForm\"-->\r\n          <!--(ngSubmit)=\"onFormSubmit(sendmailForm)\" >-->\r\n      <!--<fieldset>-->\r\n        <!--<legend>SignUp</legend>-->\r\n\r\n        <!--&lt;!&ndash;- To Block -&ndash;&gt;-->\r\n        <!--<div class=\"form-group\">-->\r\n          <!--<label for=\"toEmail\">to</label>-->\r\n          <!--&lt;!&ndash;<input type=\"text\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;id=\"toEmail\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;[(ngModel)]=\"email.to\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;name=\"to\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;placeholder=\"to\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;#emailTo = \"ngModel\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required>&ndash;&gt;-->\r\n        <!--</div>-->\r\n        <!---->\r\n\r\n        <!--<div class=\"form-group\">-->\r\n          <!--<label for=\"ccEmail\">cc</label>-->\r\n          <!--&lt;!&ndash;<input type=\"text\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;id=\"ccEmail\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;[(ngModel)]=\"email.cc\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;name=\"cc\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;#emailCc = \"ngModel\"&ndash;&gt;-->\r\n\r\n                 <!--&lt;!&ndash;pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;placeholder=\"cc\">&ndash;&gt;-->\r\n        <!--</div>-->\r\n        <!--<div class=\"form-group\">-->\r\n          <!--<label for=\"bccEmail\">bcc</label>-->\r\n          <!--&lt;!&ndash;<input type=\"text\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;id=\"bccEmail\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;[(ngModel)]=\"email.bcc\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;name=\"bcc\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;#emailBcc = \"ngModel\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;placeholder=\"bcc\" >&ndash;&gt;-->\r\n        <!--</div>-->\r\n        <!--<div class=\"form-group\">-->\r\n          <!--<label for=\"subjectEmail\">Subject</label>-->\r\n          <!--&lt;!&ndash;<input type=\"text\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;id=\"subjectEmail\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;[(ngModel)]=\"email.subject\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;name=\"subject\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;placeholder=\"subject\" required>&ndash;&gt;-->\r\n        <!--</div>-->\r\n        <!--<div class=\"form-group\">-->\r\n          <!--<label for=\"textEmail\">Text</label>-->\r\n          <!--&lt;!&ndash;<input type=\"text\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;id=\"textEmail\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;[(ngModel)]=\"email.text\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;name=\"text\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;placeholder=\"text\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;#pwd = \"ngModel\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;minlength=\"8\"&ndash;&gt;-->\r\n                 <!--&lt;!&ndash;required>&ndash;&gt;-->\r\n        <!--</div>-->\r\n\r\n\r\n        <!--&lt;!&ndash;- Buttons Block -&ndash;&gt;-->\r\n\r\n      <!--</fieldset>-->\r\n    <!--</form>-->\r\n    <!--{{email | json}}-->\r\n  <!--</div>-->\r\n  <div id=\"heading\">\r\n    <div id=\"backButton\">\r\n      <a [routerLink]=\"['/events']\">Back to Events</a>\r\n    </div>\r\n    <div id=\"headingText\">\r\n    Enter Email Details\r\n    </div>\r\n  </div>\r\n  <div id=\"mainDiv\">\r\n    <form class=\"form-horizontal\"  #sendmailForm=\"ngForm\"\r\n          (ngSubmit)=\"onFormSubmit(sendmailForm)\" >\r\n    <table class=\"table-condensed form-table\">\r\n      <tr class=\"row\">\r\n        <td class=\"col-md-6 offset-md-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\">To</label>\r\n            <input type=\"text\"\r\n                   id=\"toEmail\"\r\n                   [(ngModel)]=\"email.to\"\r\n                   name=\"to\"\r\n                   placeholder=\"to\"\r\n                   #emailTo = \"ngModel\"\r\n                   pattern=\"([a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3},?)*$\"\r\n                   class=\"form-control well well-sm\" required>\r\n          </div>\r\n        </td>\r\n        <td class=\"col-md-4 offset-md-3\">\r\n          <div class=\"form-group\">\r\n            <div *ngIf=\"emailTo.invalid && (emailTo.dirty || emailTo.touched)\"\r\n                 class=\"alert alert-danger\">\r\n              <div *ngIf = \"emailTo.errors?.required\">\r\n                Email field can't be blank\r\n              </div>\r\n              <div *ngIf = \"emailTo.errors?.dirty\">\r\n                Enter in correct Format\r\n              </div>\r\n              <div *ngIf = \"emailTo.errors?.pattern && emailTo.touched\">\r\n                The email id doesn't seem right\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n\r\n\r\n      <tr class=\"row\">\r\n        <td class=\"col-md-6 offset-md-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\">Cc</label>\r\n            <input type=\"text\"\r\n                   id=\"ccEmail\"\r\n                   [(ngModel)]=\"email.cc\"\r\n                   name=\"cc\"\r\n                   #emailCc = \"ngModel\"\r\n                   pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\r\n                   placeholder=\"cc\"\r\n                   class=\"form-control well well-sm\">\r\n          </div>\r\n        </td>\r\n        <td class=\"col-md-4 offset-md-3\">\r\n          <div class=\"form-group\">\r\n            <div *ngIf=\"emailCc.invalid && (emailCc.dirty || emailCc.touched)\"\r\n                 class=\"alert alert-danger\">\r\n              <div *ngIf = \"emailCc.errors?.required\">\r\n                Email field can't be blank\r\n              </div>\r\n              <div *ngIf = \"emailCc.errors?.dirty\">\r\n                Enter in correct Format\r\n              </div>\r\n              <div *ngIf = \"emailCc.errors?.pattern && emailCc.touched\">\r\n                The email id doesn't seem right\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr class=\"row\">\r\n        <td class=\"col-md-6 offset-md-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\">Bcc</label>\r\n            <input type=\"text\"\r\n                   id=\"bccEmail\"\r\n                   [(ngModel)]=\"email.bcc\"\r\n                   name=\"bcc\"\r\n                   #emailBcc = \"ngModel\"\r\n                   pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3},?$\"\r\n                   placeholder=\"bcc\"\r\n                   class=\"form-control well well-sm\">\r\n          </div>\r\n        </td>\r\n        <td class=\"col-md-4 offset-md-3\">\r\n          <div class=\"form-group\">\r\n            <div *ngIf=\"emailBcc.invalid && (emailBcc.dirty || emailBcc.touched)\"\r\n                 class=\"alert alert-danger\">\r\n              <div *ngIf = \"emailBcc.errors?.required\">\r\n                Email field can't be blank\r\n              </div>\r\n              <div *ngIf = \"emailBcc.errors?.dirty\">\r\n                Enter in correct Format\r\n              </div>\r\n              <div *ngIf = \"emailBcc.errors?.pattern && emailBcc.touched\">\r\n                The email id doesn't seem right\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr class=\"row\">\r\n        <td class=\"col-md-2 offset-md-3\">\r\n          <div class=\"form-group\">\r\n\r\n            <label class=\"control-label\" for=\"subjectEmail\">Subject</label>\r\n            <input type=\"text\"\r\n                   id=\"subjectEmail\"\r\n                   [(ngModel)]=\"email.subject\"\r\n                   name=\"subject\"\r\n                   placeholder=\"subject\"\r\n                   class=\"form-control well well-sm\"\r\n                   required>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr class=\"row\">\r\n        <td class=\"col-md-2 offset-md-3\">\r\n          <div class=\"form-group\">\r\n\r\n            <label class=\"control-label\" for=\"subjectEmail\">Text</label>\r\n            <input type=\"text\"\r\n                   id=\"textEmail\"\r\n                   [(ngModel)]=\"email.text\"\r\n                   name=\"text\"\r\n                   placeholder=\"text\"\r\n                   #pwd = \"ngModel\"\r\n                   minlength=\"8\"\r\n                   class=\"form-control well well-sm\"\r\n                   required>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n    <div class=\"form-group\" id=\"buttonTab\">\r\n      <button type=\"reset\" class=\"btn btn-default\" id=\"buttonCancel\" >Cancel</button>\r\n      <button type=\"submit\" class=\"btn btn-primary\"\r\n              [disabled]=\"!sendmailForm.form.valid\" id=\"buttonSubmit\">Submit</button>\r\n    </div>\r\n</form>\r\n</div>\r\n"

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
/* harmony import */ var _api_service_mail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service.mail */ "./src/app/api.service.mail.ts");
/* harmony import */ var _events_add_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/add-event.component */ "./src/app/events/add-event.component.ts");






var SendMailComponent = /** @class */ (function () {
    function SendMailComponent(apiServiceMail, route) {
        this.apiServiceMail = apiServiceMail;
        this.route = route;
    }
    SendMailComponent.prototype.ngOnInit = function () {
        this.getEmailId();
        this.email = new _Email__WEBPACK_IMPORTED_MODULE_3__["Email"]({ to: "rainatushar221995@gmail.com,random1@gmail.com", cc: "", bcc: "", subject: "", text: "" });
        this.eventData = new _events_add_event_component__WEBPACK_IMPORTED_MODULE_5__["Eventdata"]();
    };
    SendMailComponent.prototype.onFormSubmit = function (_a) {
        var value = _a.value;
        console.log(value);
        console.log(this.route.snapshot.paramMap.get("name"));
        this.eventData.eventCategory = 'abc';
        this.email.event = this.eventData;
        this.apiServiceMail.postData(this.email);
    };
    SendMailComponent.prototype.getEmailId = function () {
        var _this = this;
        this.apiServiceMail.getData().subscribe(function (response) {
            console.log('postResponse: ', response);
            _this.email.to = response.toString();
            alert("Receive data : " + Response);
        });
    };
    SendMailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-send-mail',
            template: __webpack_require__(/*! ./send-mail.component.html */ "./src/app/send-mail/send-mail.component.html"),
            styles: [__webpack_require__(/*! ./send-mail.component.css */ "./src/app/send-mail/send-mail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service_mail__WEBPACK_IMPORTED_MODULE_4__["ApiServiceMail"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

/***/ "./src/app/services/event.emmiter.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/event.emmiter.service.ts ***!
  \***************************************************/
/*! exports provided: EventEmiterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEmiterService", function() { return EventEmiterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventEmiterService = /** @class */ (function () {
    function EventEmiterService() {
        this.dataStr = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EventEmiterService.prototype.sendMessage = function (data) {
        this.dataStr.emit(data);
    };
    EventEmiterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventEmiterService);
    return EventEmiterService;
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2x1bnRlZXItZ3JpZC92b2x1bnRlZXItZ3JpZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/volunteer-grid/volunteer-grid.component.html":
/*!**************************************************************!*\
  !*** ./src/app/volunteer-grid/volunteer-grid.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"page-header well text-center well-sm\">\r\n    <h3><strong> Volunteer </strong></h3>\r\n  </div>\r\n  <div class=\"col-md-10\" #myGrid  style=\"width: 100%; height: 100%;\">\r\n    <ag-grid-angular\r\n      class=\"ag-theme-balham\"\r\n      [rowData]=\"data\"\r\n      [columnDefs]=\"headers\"\r\n      (rowClicked)=\"onRowCilcked($event)\"\r\n\r\n    >\r\n\r\n    </ag-grid-angular>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "/*\r\n.text-on-pannel {\r\n  background: #fff none repeat scroll 0 0;\r\n  height: auto;\r\n  margin-left: 20px;\r\n  padding: 3px 5px;\r\n  position: absolute;\r\n  margin-top: -20px;\r\n  border: 1px solid #337ab7;\r\n  border-radius: 8px;\r\n}\r\n\r\n.panel {\r\n\r\n  margin-top: 27px !important;\r\n}\r\n\r\n.panel-body {\r\n  padding-top: 30px !important;\r\n}\r\n*/\r\n.field-invalid\r\n{\r\ncolor:pink;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvbHVudGVlci92b2x1bnRlZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FvQkM7QUFDRDs7QUFFQSxVQUFVO0FBQ1YiLCJmaWxlIjoidm9sdW50ZWVyL3ZvbHVudGVlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuLnRleHQtb24tcGFubmVsIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzdhYjc7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4ucGFuZWwge1xyXG5cclxuICBtYXJnaW4tdG9wOiAyN3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYW5lbC1ib2R5IHtcclxuICBwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbiovXHJcbi5maWVsZC1pbnZhbGlkXHJcbntcclxuY29sb3I6cGluaztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/volunteer/volunteer.component.html":
/*!****************************************************!*\
  !*** ./src/app/volunteer/volunteer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"page-header well well-sm text-center\">\r\n    <h3><strong> Volunteer Registration</strong></h3>\r\n  </div>\r\n  <div class=\"panel panel-info\" >\r\n   <!-- <fieldset>\r\n\r\n    <legend>Personal Details</legend>-->\r\n    <!--<h3 class=\"text-on-pannel text-primary\"><strong class=\"text-uppercase\"> Personal Information</strong></h3>-->\r\n  <div class=\"panel-heading\">\r\n    <label>Personal Information</label>\r\n  </div>\r\n  <div class=\"panel-body\" >\r\n    <form #form=\"ngForm\" [formGroup]=\"myForm\" (ngSubmit)=\"personalInfo()\">\r\n    <div  formGroupName=\"personalInfo\">\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 offset-md-3\">\r\n            <div class=\"form-group required\">\r\n              <label class=\"control-label\">First Name</label>\r\n              <input type=\"text\" formControlName = \"firstName\" class=\"form-control well well-sm\"[ngClass]=\"{'is-invalid':myForm.controls['personalInfo'].controls.firstName.errors&&(myForm.controls['personalInfo'].controls.firstName.dirty||myForm.controls['personalInfo'].controls.firstName.touched)}\">\r\n              <div *ngIf=\"myForm.controls['personalInfo'].controls.firstName.errors&&(myForm.controls['personalInfo'].controls.firstName.dirty||myForm.controls['personalInfo'].controls.firstName.touched)\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"myForm.controls['personalInfo'].controls.firstName.errors.required\" class=\"field-invalid\">First Name is required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 offset-md-3\">\r\n            <div class=\"form-group required\">\r\n              <label class=\"control-label\">Last Name</label>\r\n              <input type=\"text\" formControlName = \"lastName\" class=\"form-control well well-sm\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-1 offset-md-3\">\r\n            <div class=\"form-group required\">\r\n              <label class=\"control-label\">Prefix</label>\r\n              <input type=\"text\" formControlName = \"phonePrefix\" class=\"form-control well well-sm\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 offset-md-3\">\r\n            <div class=\"form-group required\">\r\n              <label class=\"control-label\">Phone Number</label>\r\n              <input type=\"text\" formControlName = \"phoneNumber\" class=\"form-control well well-sm\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-1 offset-md-3\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">Prefix</label>\r\n              <input type=\"text\" formControlName = \"alternatePhonePrefix\" class=\"form-control well well-sm\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 offset-md-3\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">Alternate Phone</label>\r\n              <input type=\"text\" formControlName = \"alternatePhoneNumber\" class=\"form-control well well-sm\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 offset-md-3\">\r\n            <div class=\"form-group required\">\r\n              <label class=\"control-label\">Email</label>\r\n              <input type=\"text\" formControlName = \"email\" class=\"form-control well well-sm\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-6 offset-md-3\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">Alternate Email</label>\r\n              <input type=\"text\" formControlName = \"alternateEmail\" class=\"form-control well well-sm\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n    </form>\r\n  </div>\r\n    <!--</fieldset>-->\r\n  </div>\r\n\r\n  <div class=\"panel panel-info\">\r\n    <!--<fieldset>\r\n\r\n      <legend>Address</legend>-->\r\n\r\n    <!--<h3 class=\"text-on-pannel text-primary\"><strong class=\"text-uppercase\"> Address</strong></h3>-->\r\n    <div class=\"panel-heading\">\r\n      <label>Address</label>\r\n    </div>\r\n      <div class=\"panel-body\">\r\n        <form [formGroup]=\"myForm\" >\r\n        <div formGroupName=\"address\">\r\n\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 offset-md-3\">\r\n                <div class=\"form-group required\">\r\n                  <label class=\"control-label\">Locality</label>\r\n                  <input type=\"text\" formControlName = \"locality\" class=\"form-control well well-sm\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 offset-md-3\">\r\n                <div class=\"form-group required\">\r\n                  <label class=\"control-label\">City</label>\r\n                  <input type=\"text\" formControlName = \"city\" class=\"form-control well well-sm\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 offset-md-3\">\r\n                <div class=\"form-group required\">\r\n                  <label class=\"control-label\">State</label>\r\n                  <input type=\"text\" formControlName = \"state\" class=\"form-control well well-sm\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-6 offset-md-3\">\r\n                <div class=\"form-group required\">\r\n                  <label class=\"control-label\">Pin Code</label>\r\n                  <input type=\"text\" formControlName = \"pincode\" class=\"form-control well well-sm\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n        </form>\r\n      </div>\r\n   <!-- </fieldset>-->\r\n  </div>\r\n  <div class=\"panel panel-info\">\r\n    <!--<fieldset>\r\n\r\n      <legend>Additional Information</legend>-->\r\n   <!-- <h3 class=\"text-on-pannel text-primary\"><strong class=\"text-uppercase\"> Additional Information </strong></h3>-->\r\n      <div class=\"panel-heading\">\r\n        <label>Additional Information</label>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <form #form=\"ngForm\" [formGroup]=\"myForm\" (ngSubmit)=\"additionalInfo()\">\r\n        <div formGroupName=\"additionalInfo\">\r\n\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label\">Interest Areas</label>\r\n\r\n\r\n\r\n                  <angular2-multiselect [data]=\"interestedAreasCategory\" [(ngModel)]=\"selectedList\" formControlName=\"interestedAreas\" settings=\"dropdownSettings\"></angular2-multiselect>\r\n\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n        </form>\r\n\r\n      </div>\r\n    <!--</fieldset>-->\r\n  </div>\r\n  <div class=\"text-center\">\r\n <!-- <button  class=\"btn btn-default\" (click)=\"onSubmit()\">Register</button>-->\r\n    <button class=\"btn btn-default\" (click)=\"onSubmit()\"  *ngIf=\"mode!='view' && mode!='edit'\">Register</button>\r\n    <button class=\"btn btn-default\" (click)=\"onSubmit()\" *ngIf=\"mode=='edit'\" >Update</button>\r\n\r\n    <button class=\"btn btn-default\"(click)=\"onEdit()\" *ngIf=\"mode=='view'\">Edit</button>\r\n    <button class=\"btn btn-default\"(click)=\"onClose()\" *ngIf=\"mode=='view' || mode=='edit'\" >Close</button>\r\n  </div>\r\n</div>\r\n\r\n"

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
            { "id": 1, "itemName": "Environment" }
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
            var response = this.apiService.postData(json, 'volunteer-create');
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Welcome to Youth For Seva\r\n</p>\r\n"

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

module.exports = __webpack_require__(/*! F:\ForceForGood\yfsevents-web\src\main\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map