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
        this.urlList = new Map();
        this.initialiseUrlList();
    }
    ApiServiceMail.prototype.initialiseUrlList = function () {
        this.urlList.set('send', '/send');
    };
    ApiServiceMail.prototype.postData = function (data, type) {
        console.log('postingggg', data);
        this.http.post(this.basicURL + this.urlList.get("send"), data).subscribe(function (response) {
            console.log('postResponse: ', response);
            alert("Sucessfully Sent Email");
        });
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
        this.urlList.set('collegeregistration', '/collegeregistration');
    };
    ApiService.prototype.postData = function (data, type) {
        console.log('posting', data);
        this.http.post(this.basicURL + this.urlList.get(type), data).subscribe(function (response) {
            console.log('postResponse: ', response);
        });
    };
    ApiService.prototype.getData = function (type) {
        this.http.get(this.basicURL + this.urlList.get(type)).subscribe(function (response) {
            console.log('getResponse: ', response);
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
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");











var routes = [
    {
        path: 'collegeregistration', component: _college_registration_college_registration_component__WEBPACK_IMPORTED_MODULE_8__["CollegeRegistrationComponent"]
    },
    {
        path: 'inventorydata', component: _inventory_data_inventory_data_component__WEBPACK_IMPORTED_MODULE_7__["InventoryDataComponent"]
    },
    {
        path: 'partnerngo', component: _partner_ngo_partner_ngo_component__WEBPACK_IMPORTED_MODULE_3__["PartnerNGOComponent"]
    },
    { path: 'events', component: _events_event_list_component__WEBPACK_IMPORTED_MODULE_4__["EventListComponent"] },
    { path: 'addevent', component: _events_add_event_component__WEBPACK_IMPORTED_MODULE_5__["AddEventComponent"] },
    { path: 'volunteer-create', component: _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_6__["VolunteerComponent"] },
    {
        path: 'email', component: _send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_9__["SendMailComponent"]
    },
    {
        path: '**', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"]
        //to-do: update route
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header></header>\n<div class=\"container\">\n<router-outlet></router-outlet>\n</div>\n\n\n<!--<footer></footer>-->\n"

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
/* harmony import */ var _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./volunteer/volunteer.component */ "./src/app/volunteer/volunteer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _inventory_data_inventory_data_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./inventory-data/inventory-data.component */ "./src/app/inventory-data/inventory-data.component.ts");
/* harmony import */ var _college_registration_college_registration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./college-registration/college-registration.component */ "./src/app/college-registration/college-registration.component.ts");
/* harmony import */ var _send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./send-mail/send-mail.component */ "./src/app/send-mail/send-mail.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");























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
                _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_15__["VolunteerComponent"],
                _inventory_data_inventory_data_component__WEBPACK_IMPORTED_MODULE_17__["InventoryDataComponent"],
                _college_registration_college_registration_component__WEBPACK_IMPORTED_MODULE_18__["CollegeRegistrationComponent"],
                _send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_19__["SendMailComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_20__["WelcomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["AlertModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"].withComponents([]),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_14__["TimepickerModule"].forRoot(),
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_21__["AngularMultiSelectModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = "<div class=\"container-fluid\">\n  <div class=\"page-header well well-sm\">\n    <h3><strong> College Registration</strong></h3>\n  </div>\n\n  <form [formGroup]=\"collegeForm\">\n    <div class=\"panel panel-info\">\n      <div class=\"panel-heading\">\n        <label>About College</label>\n      </div>\n      <div class=\"panel-body\">\n        <div formGroupName=\"collegeDetails\">\n          <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">College Name</label>\n                <input type=\"text\" formControlName=\"name\" class=\"form-control well well-sm\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Registration Id</label>\n                <input type=\"text\" formControlName=\"registrationId\" class=\"form-control well well-sm\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-info\">\n      <div class=\"panel-heading\">\n        <label>Address</label>\n      </div>\n      <div class=\"panel-body\">\n        <div formGroupName=\"address\">\n          <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Address Line 1</label>\n                <input type=\"text\" formControlName=\"addressLine1\" class=\"form-control well well-sm\">\n              </div>\n            </div>\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Address Line 2</label>\n                <input type=\"text\" formControlName=\"addressLine2\" class=\"form-control well well-sm\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">City</label>\n                <input type=\"text\" formControlName=\"city\" class=\"form-control well well-sm\">\n              </div>\n            </div>\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">State</label>\n                <input type=\"text\" formControlName=\"state\" class=\"form-control well well-sm\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Pincode</label>\n                <input type=\"text\" formControlName=\"pincode\" class=\"form-control well well-sm\">\n              </div>\n            </div>\n            <div class=\"col-md-6 offset-md-3\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-info\">\n      <div class=\"panel-heading\">\n        <label>MOU Details</label>\n      </div>\n      <div class=\"panel-body\">\n        <ul class=\"nav nav-tabs\" active=\"selectedTab\">\n          <li class=\"nav active\" *ngIf=\"numberOfMOUs>0\"><a href=\"#tab0\" data-toggle=\"tab\" (click)=\"activateTab(1)\">MOU\n              1</a></li>\n          <li class=\"nav\" *ngFor=\"let num of getArray(numberOfMOUs-1); let i=index;\"><a href=\"#tab{{i+1}}\" data-toggle=\"tab\"\n              (click)=\"activateTab(i+2)\">MOU {{i+2}}</a></li>\n\n          <div class=\"pull-right\">\n            <button class=\"btn btn-primary\" (click)=addMOU() [disabled]=\"isMaxLimitReached(10)\">Add MOU</button>\n            <button class=\"btn btn-primary\" (click)=removeMOU() >Remove MOU</button>\n\n          </div>\n\n        </ul>\n\n        <div class=\"tab-content\">\n          <div formArrayName=\"mouDetails\">\n            <div class=\"tab-pane\" *ngFor=\"let person of collegeForm.get('mouDetails').controls;let i=index\"\n              formGroupName=\"{{i}}\" id=\"tab{{i}}\">\n\n              <div *ngIf=\"selectedTab==i\">\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">MOU ID</label>\n                      <input type=\"text\" formControlName=\"mouID\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">MOU Name</label>\n                      <input type=\"text\" formControlName=\"mouName\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Number Of Events Agreed</label>\n                      <input type=\"text\" formControlName=\"noOfEvents\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Valid From</label>\n                      <input type=\"text\" formControlName=\"fromDate\" class=\"form-control well well-sm\" bsDatepicker>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Valid To</label>\n                      <input type=\"text\" formControlName=\"toDate\" class=\"form-control well well-sm\" bsDatepicker>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Comments</label>\n                      <textarea type=\"text\" formControlName=\"comments\" class=\"form-control well well-sm\"></textarea>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </form>\n  <div class=\"text-center\">\n    <button class=\"btn btn-primary btn-sx\" (click)=\"onSubmit()\">Register</button>\n  </div>\n</div>\n"

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




var CollegeRegistrationComponent = /** @class */ (function () {
    function CollegeRegistrationComponent(formBuilder, apiService) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.numberOfMOUs = 0;
        this.selectedTab = -1;
    }
    CollegeRegistrationComponent.prototype.ngOnInit = function () {
        this.collegeForm = this.formBuilder.group({
            collegeDetails: this.collegeDetails(),
            address: this.address(),
            mouDetails: this.formBuilder.array([this.mouDetails()])
        });
        this.numberOfMOUs = this.getMOUDetails().length;
        this.activateTab(this.numberOfMOUs);
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
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
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

module.exports = ".row {\n    margin-bottom:25px;\n}\n\n.itemsrow{\n    margin-bottom:0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL2FkZC1ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvZXZlbnRzL2FkZC1ldmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gICAgbWFyZ2luLWJvdHRvbToyNXB4O1xufVxuXG4uaXRlbXNyb3d7XG4gICAgbWFyZ2luLWJvdHRvbTowcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/events/add-event.component.html":
/*!*************************************************!*\
  !*** ./src/app/events/add-event.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"page-header well text-center well-sm\">\n      <h3><strong> Event Registration</strong></h3>\n    </div>\n\n    <form [formGroup]=\"eventForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          \n          <div class=\"row form-row\">\n            <div class=\"col-md-6 offset-md-3 form-group\">\n                <label class=\"control-label\">Event Name</label>\n                <input type=\"text\" formControlName=\"eventName\" placeholder=\"Event Name\" class=\"form-control\">\n            </div>\n            <div class=\"col-md-6 form-group\">\n                <label class=\"control-label\">Action</label>\n                <select formControlName=\"eventAction\" class=\"form-control\">\n                  <option *ngFor=\"let action of eventActions\" [value]=\"action\">{{action}}</option>\n                </select>\n            </div>\n          </div>\n\n          <div class=\"row form-row\">\n            <div class=\"col-md-6 offset-md-3 form-group\">\n                <label class=\"control-label\">PartnerNGO Name</label>\n                <input type=\"text\" formControlName=\"ngoName\" placeholder=\"PartnerNGO Name\" class=\"form-control\">\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <label class=\"control-label\">Category</label>\n                <select formControlName=\"eventCategory\" class=\"form-control\">\n                  <option *ngFor=\"let category of eventCategories\" [value]=\"category\">{{category}}</option>\n                </select>\n            </div>\n            <div class=\"col-md-2 form-group\">\n              <label class=\"control-label\">Recurring Event:</label>\n              <select formControlName=\"recurringEvent\" class=\"form-control\">\n                <option *ngFor=\"let value of recurringEventOptions\" [value]=\"value\">{{value}}</option>\n              </select>\n            </div>\n          </div>\n\n            <div class=\"row form-row itemsrow\">\n              <div class=\"col-md-6 offset-md-3 form-group\">\n                <label for=\"datepicker\">Select Date & Time Range</label>\n                <input type=\"text\" class=\"form-control\" id=\"datepicker\" formControlName=\"eventDuration\" bsDaterangepicker/>\n              </div>\n              <div class=\"col-md-3 form-group\">\n                <timepicker [formControlName]=\"'fromTime'\">\n                  </timepicker>\n              </div>\n              <div class=\"col-md-3 form-group\">\n                <timepicker [formControlName]=\"'toTime'\"></timepicker>\n              </div>\n            </div>\n\n            <div class=\"row form-row\">\n              <div class=\"col-md-9 offset-md-3 form-group\">\n                <label class=\"control-label\">Items Required:</label>\n                <angular2-multiselect [data]=\"itemList\" [settings]=\"settings\" \n                  (onSelect)=\"log($event)\"\n                  (onDeSelect)=\"log($event)\" \n                  (onSelectAll)=\"log($event)\" \n                  (onDeSelectAll)=\"log($event)\" formControlName=\"items\">\n                </angular2-multiselect>\n              </div>\n              <div class=\"col-md-3  form-group\">\n                  <label class=\"control-label\">No. of Volunteers</label>\n                  <input type=\"text\" formControlName=\"volunteers\" placeholder=\"Number of Volunteers\" class=\"form-control\">\n              </div>\n            </div>\n        </div>\n      </div>\n      <button type=\"submit\" [disabled]=\"eventForm.pristine\">Save</button>\n    </form>\n</div>  \n\n\n\n\n\n<!-- <form >\n        <div class=\"form-row\">\n            <div class=\"col-md-1\"></div>\n          <div class=\"form-group col-md-5\">\n            <label for=\"eventname\">Event Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"eventname\" placeholder=\"Name\">\n          </div>\n          <div class=\"form-group col-md-5\">\n                <label for=\"eventaction\">Action</label>\n                <select id=\"eventaction\" class=\"form-control\">\n                  <option selected>Choose...</option>\n                  <option>Not Started</option>\n                  <option>In progress</option>\n                  <option>completed</option>\n                  <option>Abandoned</option>\n                </select>\n          </div>\n          <div class=\"col-md-1\"></div>\n        </div>\n\n        <div class=\"form-row\">\n                <div class=\"col-md-1\"></div>\n              <div class=\"form-group col-md-5\">\n                <label for=\"ngoname\">Partner Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"ngoname\" placeholder=\"NGO Name\" >\n              </div>\n              <div class=\"form-group col-md-5\">\n                    <label for=\"eventcategory\">Event category</label>\n                    <select id=\"eventcategory\" class=\"form-control\">\n                      <option selected>Choose...</option>\n                      <option>Not Started</option>\n                      <option>In progress</option>\n                      <option>completed</option>\n                      <option>Abandoned</option>\n                    </select>\n              </div>\n              <div class=\"col-md-1\"></div>\n            </div>\n\n            <div class=\"form-row\">\n              <div class=\"col-md-1\"></div>\n            <div class=\"form-group col-md-5\">\n                <label for=\"datepicker\">Select Date Range</label>\n                <input id=\"datepicker\" class=\"form-control\"\n                bsDaterangepicker [(ngModel)]=\"bsRangeValue\" >\n            </div>\n            <div class=\"form-group col-md-5\">\n                <label for=\"eventaction\">Recurring Event</label>\n                <select id=\"eventaction\" class=\"form-control\">\n                  <option selected>No</option>\n                  <option>Yes</option>\n                </select>\n            </div>\n            <div class=\"col-md-1\"></div>\n          </div>\n\n\n        \n\n            \n</form> -->"

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





var AddEventComponent = /** @class */ (function () {
    function AddEventComponent(formBuilder, apiService) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
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
    };
    AddEventComponent.prototype.log = function ($event) {
        console.log("hi");
    };
    AddEventComponent.prototype.onSubmit = function () {
        console.log(this.eventForm.value);
        this.eventData.eventName = this.eventForm.value.eventName;
        this.eventData.eventAction = this.eventForm.value.eventAction;
        this.eventData.eventfromTime = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.eventForm.value.fromTime, 'shortTime', 'en-US');
        this.eventData.eventtoTime = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.eventForm.value.toTime, 'shortTime', 'en-US');
        this.eventData.ngoName = this.eventForm.value.ngoName;
        this.eventData.volunteers = this.eventForm.value.volunteers;
        this.eventData.recurringEvent = this.eventForm.value.recurringEvent;
        // this.eventData.eventDuration=[];
        // this.eventData.eventDuration.push(formatDate(this.eventForm.value.eventDuration[0],'fullDate','en-US'));
        // this.eventData.eventDuration.push(formatDate(this.eventForm.value.eventDuration[1],'fullDate','en-US'));
        this.eventData.eventDuration = this.eventForm.value.eventDuration.map(function (date) { return Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(date, 'fullDate', 'en-US'); });
        this.eventData.eventItems = this.eventForm.value.items.map(function (item) { return item.itemName; });
        console.log(this.eventData);
        this.apiService.postData(this.eventData, 'event');
    };
    AddEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-event',
            template: __webpack_require__(/*! ./add-event.component.html */ "./src/app/events/add-event.component.html"),
            styles: [__webpack_require__(/*! ./add-event.component.css */ "./src/app/events/add-event.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
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

module.exports = "\n<div class=\"row\" style=\"margin-top: 20px\">\n<div class=\"col-md-1\">\n\n</div>\n\n<div class=\"col-md-10\">\n        <div id=\"myGrid\"  style=\"width: 100%; height: 100%;\">\n<ag-grid-angular \n    class=\"ag-theme-balham\"\n    [rowData]=\"rowData\" \n    [columnDefs]=\"columnDefs\"\n    >\n</ag-grid-angular>\n</div>\n</div>\n<div class=\"col-md-1\">\n    \n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/events/event-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/events/event-list.component.ts ***!
  \************************************************/
/*! exports provided: EventListComponent, TableData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListComponent", function() { return EventListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableData", function() { return TableData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



var EventListComponent = /** @class */ (function () {
    function EventListComponent(apiService) {
        this.apiService = apiService;
        this.rowData = new TableData();
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
        this.eventData = this.apiService.getData('events');
        this.rowData = this.eventData;
        this.rowData.eventStartDate = this.eventData.eventDuration.get(0);
        this.rowData.eventEndDate = this.eventData.eventDuration.get(1);
        console.log(this.rowData);
    };
    EventListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'event-list',
            template: __webpack_require__(/*! ./event-list.component.html */ "./src/app/events/event-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], EventListComponent);
    return EventListComponent;
}());

var TableData = /** @class */ (function () {
    function TableData() {
    }
    return TableData;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background-color: #ba2a29;margin-bottom:20px;\">\n    <div class=\"container-fluid\"> \n      \n        <a class=\"navbar-brand\" href=\"#\" style=\"height:70px\">\n          <img src=\"/assets/youth-for-seva.png\" style=\"height:50px\">\n        </a>\n      \n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav navbar-right text-white\" style=\"margin-top:12px;\">\n          <li><a href=\"\">HOME</a></li>\n          <li class=\"dropdown\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">REGISTER\n            <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a [routerLink]=\"['/partnerngo']\">Partner NGO</a></li>\n              <li><a [routerLink]=\"['/volunteer-create']\">Volunteer</a></li>\n              <li><a [routerLink]=\"\">College</a></li> \n            </ul>\n          </li>\n          <li><a [routerLink]=\"['/events']\">EVENTS</a></li>\n          <li><a [routerLink]=\"\">CONTACT</a></li>\n          <li><a [routerLink]=\"\"><span class=\"glyphicon glyphicon-search\"></span></a></li>\n        </ul>\n      </div> \n    </div>\n  </nav>\n"

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

module.exports = "<div class=\"container-fluid\">\n  <div class=\"page-header well well-sm\">\n    <h3><strong> Inventory Data</strong></h3>\n  </div>\n  <form [formGroup]=\"inventoryData\">\n    <div class=\"panel panel-info\">\n      <div class=\"panel-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">ItemName</label>\n              <input type=\"text\" formControlName=\"itemName\" class=\"form-control well well-sm\" required>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">EventCategory</label>\n              <div>\n                <select [(ngModel)]=\"selected\" [ngModelOptions]=\"{standalone:true}\" class=\"form-control well well-sm\" required>\n                  <option *ngFor=\"let evCat of eventCategory\" [(ngValue)]=\"evCat.value\">{{evCat.value}}</option>\n                </select>          \n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Comments</label>\n              <textarea type=\"text\" formControlName=\"comments\" class=\"form-control well well-sm\"></textarea>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n  <div class=\"text-center\">\n    <button class=\"btn btn-primary btn-sx\" (click)=\"onSubmit()\">Save</button>\n  </div>\n</div>"

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




var InventoryDataComponent = /** @class */ (function () {
    function InventoryDataComponent(formBuilder, inventoryService) {
        this.formBuilder = formBuilder;
        this.inventoryService = inventoryService;
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
            _this.eventCategory = data;
        }, function (err) {
            console.log(err.message);
        });
    };
    InventoryDataComponent.prototype.onSubmit = function () {
        console.log(this.selected);
        var data = Object.assign({}, this.inventoryData.getRawValue(), { eventCategory: this.selected });
        console.log(this.inventoryData.getRawValue());
        console.log(data);
        this.inventoryService.saveInventoryData(data);
    };
    InventoryDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory-data',
            template: __webpack_require__(/*! ./inventory-data.component.html */ "./src/app/inventory-data/inventory-data.component.html"),
            styles: [__webpack_require__(/*! ./inventory-data.component.css */ "./src/app/inventory-data/inventory-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _inventorydata_service__WEBPACK_IMPORTED_MODULE_3__["InventorydataService"]])
    ], InventoryDataComponent);
    return InventoryDataComponent;
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
        this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].serverHost + "/inventorydata/list", data).subscribe(function (response) {
            console.log('response: ', response);
        });
    };
    InventorydataService.prototype.getInventoryData = function () {
        this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].serverHost + "/inventorydata/list");
    };
    InventorydataService.prototype.getEventCategoryList = function () {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].serverHost + "/inventorydata/eventcategory");
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

module.exports = "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1 user-scalable=no\">\n  </head>\n\n  <body>\n    <div class=\"container-fluid\">\n      <div class=\"page-header well well-sm\">\n        <h3><strong> Partner NGO Registration</strong></h3>\n      </div>\n      \n      <form [formGroup]=\"myForm\">\n        <!-- ToDo: Decrease space between the table rows-->\n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">\n            <label>Basic Information</label>\n          </div>\n          <div class=\"panel-body\">\n            <div formGroupName=\"basicInfo\">\n              <!-- <table class=\"form-table\"> -->\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Name</label>\n                      <input type=\"text\" formControlName = \"name\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Description</label>\n                      <input type=\"text\" formControlName = \"description\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Branch</label>\n                      <input type=\"text\" formControlName = \"branch\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Registration Number</label>\n                      <input type=\"text\" formControlName = \"registrationNumber\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                </div>\n              <!-- </table>               -->\n            </div>\n          </div>\n        </div>\n\n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">\n            <label>Address</label>\n          </div>\n          <div class=\"panel-body\">\n            <div formGroupName=\"address\">\n              <!-- <table class=\"form-table\"> -->\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Address Line 1</label>\n                      <input type=\"text\" formControlName = \"addressLine1\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Address Line 2</label>\n                      <input type=\"text\" formControlName = \"addressLine2\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">City</label>\n                      <input type=\"text\" formControlName = \"city\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">State</label>\n                      <input type=\"text\" formControlName = \"state\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Pincode</label>\n                      <input type=\"text\" formControlName = \"pincode\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 offset-md-3\">\n                  </div>\n                </div>\n              <!-- </table>               -->\n            </div>\n          </div>\n        </div>\n\n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">\n            <label>Authorised Persons</label>\n          </div>\n          <div class=\"panel-body\">\n            <ul class=\"nav nav-tabs\" active=\"selectedTab\">\n              <li class=\"nav active\" *ngIf=\"numberOfAuthorisedPersons>0\"><a href=\"#tab0\" data-toggle=\"tab\" (click)=\"activateTab(1)\">Person 1</a></li>\n              <li class=\"nav\" *ngFor=\"let num of getArray(numberOfAuthorisedPersons-1); let i=index;\"><a href=\"#tab{{i+1}}\" data-toggle=\"tab\" (click)=\"activateTab(i+2)\">Person {{i+2}}</a></li>\n              <!--li class=\"nav active\" *ngIf=\"numberOfAuthorisedPersons>0\"><a href=\"#tab{{numberOfAuthorisedPersons-1}}\" data-toggle=\"tab\" (click)=\"activateTab(numberOfAuthorisedPersons)\">Person {{numberOfAuthorisedPersons}}</a></li-->\n              <!--li class=\"nav active\" *ngIf=\"numberOfAuthorisedPersons>0\"><a href=\"#tab{{numberOfAuthorisedPersons-1}}\" data-toggle=\"tab\" (click)=\"selectedTab=i\">Person {{numberOfAuthorisedPersons}}</a></li-->\n              <div class=\"pull-right\">\n                <button class=\"btn btn-primary\" (click)=\"addAuthorisedPerson()\" [disabled]=\"isMaxLimitReached(5)\">Add Person</button>\n                <!-- <button class=\"btn btn-primary\" (click)=removeAuthorisedPerson() [disabled]=\"numberOfAuthorisedPersons\">Remove Person</button> -->\n              </div>\n              <!--ToDo: Setup dynamic Tab Creation and Add Delete button-->\n            </ul>\n\n            <div class=\"tab-content\">\n              <div formArrayName=\"authorisedPersons\">\n                <!--ToDo: NgFor not working: Check-->\n                <div class=\"tab-pane\" *ngFor=\"let person of myForm.get('authorisedPersons').controls;let i=index\" formGroupName=\"{{i}}\" id=\"tab{{i}}\">\n                  <!-- <table class=\"form-table\"> -->\n                  <div *ngIf=\"selectedTab==i\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6 offset-md-3\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\">Name</label>\n                          <input type=\"text\" formControlName = \"name\" class=\"form-control well well-sm\">\n                        </div>\n                      </div>\n                      <div class=\"col-md-6 offset-md-3\">\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6 offset-md-3\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\">Contact Details</label>\n                          <input type=\"text\" formControlName = \"contact1\" class=\"form-control well well-sm\">\n                        </div>\n                      </div>\n                      <div class=\"col-md-6 offset-md-3\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\">Alternate Contact Details</label>\n                          <input type=\"text\" formControlName = \"contact2\" class=\"form-control well well-sm\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-6 offset-md-3\">\n                          <div class=\"form-group\">\n                            <label class=\"control-label\">Email ID</label>\n                            <input type=\"text\" formControlName = \"email1\" class=\"form-control well well-sm\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-6 offset-md-3\">\n                          <div class=\"form-group\">\n                            <label class=\"control-label\">Alternate Email ID</label>\n                            <input type=\"text\" formControlName = \"email2\" class=\"form-control well well-sm\">\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  <!-- </table>               -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </form>\n      <!--<span>{{myForm.value | json}}</span>-->\n      <button class=\"btn btn-primary pull-right\" (click)=\"onSubmit()\">Register</button>\n    </div>\n\n  </body>\n</html>\n"

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




var PartnerNGOComponent = /** @class */ (function () {
    function PartnerNGOComponent(formBuilder, apiService) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.numberOfAuthorisedPersons = 0;
        this.selectedTab = -1;
    }
    PartnerNGOComponent.prototype.ngOnInit = function () {
        console.log('Loading PartnerNgo Screen');
        this.myForm = this.formBuilder.group({
            basicInfo: this.partnerNgoGroup(),
            address: this.address(),
            authorisedPersons: this.formBuilder.array([this.authorisedPerson()])
        });
        this.numberOfAuthorisedPersons = this.getAuthorisedPersons().length;
        this.activateTab(this.numberOfAuthorisedPersons);
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
    PartnerNGOComponent.prototype.getAuthorisedPersons = function () {
        return this.myForm.get('authorisedPersons');
    };
    PartnerNGOComponent.prototype.addAuthorisedPerson = function () {
        if (this.numberOfAuthorisedPersons < 5) {
            (this.getAuthorisedPersons()).push(this.authorisedPerson());
            this.numberOfAuthorisedPersons = this.getAuthorisedPersons().length;
            //this.activateTab(this.numberOfAuthorisedPersons);
        }
    };
    PartnerNGOComponent.prototype.removeAuthorisedPerson = function (index) {
        if (this.numberOfAuthorisedPersons > 1) {
            (this.getAuthorisedPersons()).removeAt(index);
            this.numberOfAuthorisedPersons = this.getAuthorisedPersons().length;
            this.selectedTab = this.numberOfAuthorisedPersons - 1;
        }
    };
    PartnerNGOComponent.prototype.getNumberOfAuthorisedPersons = function () {
        return this.numberOfAuthorisedPersons;
    };
    PartnerNGOComponent.prototype.isMaxLimitReached = function (val) {
        return this.numberOfAuthorisedPersons >= val;
    };
    PartnerNGOComponent.prototype.getArray = function (val) {
        return Array(val);
    };
    PartnerNGOComponent.prototype.activateTab = function (val) {
        this.selectedTab = val - 1;
    };
    PartnerNGOComponent.prototype.onSubmit = function () {
        var json = Object.assign({ authorizedPerson: this.getAuthorisedPersons().value }, this.myForm.get('basicInfo').value, this.myForm.get('address').value);
        console.log('submitting: ', json);
        this.apiService.postData(json, 'partnerngo');
        //To test only
        // this.apiService.getData('partnerngo');
    };
    PartnerNGOComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-partner-ngo',
            template: __webpack_require__(/*! ./partner-ngo.component.html */ "./src/app/partner-ngo/partner-ngo.component.html"),
            styles: [__webpack_require__(/*! ./partner-ngo.component.css */ "./src/app/partner-ngo/partner-ngo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], PartnerNGOComponent);
    return PartnerNGOComponent;
}());



/***/ }),

/***/ "./src/app/send-mail/send-mail.component.css":
/*!***************************************************!*\
  !*** ./src/app/send-mail/send-mail.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mainDiv\n{\n  height: 100%;\n  width:70%;\n  margin:auto;\n}\n\n#heading\n{\n  height: 50px;\n  width: 100%;\n  /*padding-left: 35%;*/\n  /*margin: auto;*/\n  font-size: 25px;\n  margin-top: 50px;\n  background-color: silver;\n}\n\n#buttonTab\n{\n  paing-left:10%;\n}\n\n#buttonCancel\n{\nmargin-left: 30%;\n}\n\n#buttonSubmit\n{\n  margin-left: 4%;\n}\n\n#backButton\n{\n  width:30%;\n  float:left;\n}\n\n#headingText\n{\n  width:70%;\n  float:left\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC1tYWlsL3NlbmQtbWFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFlBQVk7RUFDWixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUNBOztBQUVBLGdCQUFnQjtBQUNoQjs7QUFDQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUNBOztFQUVFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBQ0E7O0VBRUUsU0FBUztFQUNUO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zZW5kLW1haWwvc2VuZC1tYWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbkRpdlxue1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOjcwJTtcbiAgbWFyZ2luOmF1dG87XG59XG5cbiNoZWFkaW5nXG57XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qcGFkZGluZy1sZWZ0OiAzNSU7Ki9cbiAgLyptYXJnaW46IGF1dG87Ki9cbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XG59XG4jYnV0dG9uVGFiXG57XG4gIHBhaW5nLWxlZnQ6MTAlO1xufVxuI2J1dHRvbkNhbmNlbFxue1xubWFyZ2luLWxlZnQ6IDMwJTtcbn1cbiNidXR0b25TdWJtaXRcbntcbiAgbWFyZ2luLWxlZnQ6IDQlO1xufVxuI2JhY2tCdXR0b25cbntcbiAgd2lkdGg6MzAlO1xuICBmbG9hdDpsZWZ0O1xufVxuI2hlYWRpbmdUZXh0XG57XG4gIHdpZHRoOjcwJTtcbiAgZmxvYXQ6bGVmdFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/send-mail/send-mail.component.html":
/*!****************************************************!*\
  !*** ./src/app/send-mail/send-mail.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row custom-row\" id=\"mainDiv\">-->\n  <!--<div class= \"col-sm-5 custom-container jumbotron\">-->\n    <!--<form class=\"form-horizontal\"  #sendmailForm=\"ngForm\"-->\n          <!--(ngSubmit)=\"onFormSubmit(sendmailForm)\" >-->\n      <!--<fieldset>-->\n        <!--<legend>SignUp</legend>-->\n\n        <!--&lt;!&ndash;- To Block -&ndash;&gt;-->\n        <!--<div class=\"form-group\">-->\n          <!--<label for=\"toEmail\">to</label>-->\n          <!--&lt;!&ndash;<input type=\"text\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;id=\"toEmail\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;[(ngModel)]=\"email.to\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;name=\"to\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;placeholder=\"to\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;#emailTo = \"ngModel\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required>&ndash;&gt;-->\n        <!--</div>-->\n        <!---->\n\n        <!--<div class=\"form-group\">-->\n          <!--<label for=\"ccEmail\">cc</label>-->\n          <!--&lt;!&ndash;<input type=\"text\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;id=\"ccEmail\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;[(ngModel)]=\"email.cc\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;name=\"cc\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;#emailCc = \"ngModel\"&ndash;&gt;-->\n\n                 <!--&lt;!&ndash;pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;placeholder=\"cc\">&ndash;&gt;-->\n        <!--</div>-->\n        <!--<div class=\"form-group\">-->\n          <!--<label for=\"bccEmail\">bcc</label>-->\n          <!--&lt;!&ndash;<input type=\"text\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;id=\"bccEmail\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;[(ngModel)]=\"email.bcc\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;name=\"bcc\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;#emailBcc = \"ngModel\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;placeholder=\"bcc\" >&ndash;&gt;-->\n        <!--</div>-->\n        <!--<div class=\"form-group\">-->\n          <!--<label for=\"subjectEmail\">Subject</label>-->\n          <!--&lt;!&ndash;<input type=\"text\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;id=\"subjectEmail\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;[(ngModel)]=\"email.subject\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;name=\"subject\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;placeholder=\"subject\" required>&ndash;&gt;-->\n        <!--</div>-->\n        <!--<div class=\"form-group\">-->\n          <!--<label for=\"textEmail\">Text</label>-->\n          <!--&lt;!&ndash;<input type=\"text\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;id=\"textEmail\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;[(ngModel)]=\"email.text\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;name=\"text\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;placeholder=\"text\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;#pwd = \"ngModel\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;minlength=\"8\"&ndash;&gt;-->\n                 <!--&lt;!&ndash;required>&ndash;&gt;-->\n        <!--</div>-->\n\n\n        <!--&lt;!&ndash;- Buttons Block -&ndash;&gt;-->\n\n      <!--</fieldset>-->\n    <!--</form>-->\n    <!--{{email | json}}-->\n  <!--</div>-->\n  <div id=\"heading\">\n    <div id=\"backButton\">\n      <a [routerLink]=\"['/events']\">Back to Events</a>\n    </div>\n    <div id=\"headingText\">\n    Enter Email Details\n    </div>\n  </div>\n  <div id=\"mainDiv\">\n    <form class=\"form-horizontal\"  #sendmailForm=\"ngForm\"\n          (ngSubmit)=\"onFormSubmit(sendmailForm)\" >\n    <table class=\"table-condensed form-table\">\n      <tr class=\"row\">\n        <td class=\"col-md-6 offset-md-3\">\n          <div class=\"form-group\">\n            <label class=\"control-label\">To</label>\n            <input type=\"text\"\n                   id=\"toEmail\"\n                   [(ngModel)]=\"email.to\"\n                   name=\"to\"\n                   placeholder=\"to\"\n                   #emailTo = \"ngModel\"\n                   pattern=\"([a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3},?)*$\"\n                   class=\"form-control well well-sm\" required>\n          </div>\n        </td>\n        <td class=\"col-md-4 offset-md-3\">\n          <div class=\"form-group\">\n            <div *ngIf=\"emailTo.invalid && (emailTo.dirty || emailTo.touched)\"\n                 class=\"alert alert-danger\">\n              <div *ngIf = \"emailTo.errors?.required\">\n                Email field can't be blank\n              </div>\n              <div *ngIf = \"emailTo.errors?.dirty\">\n                Enter in correct Format\n              </div>\n              <div *ngIf = \"emailTo.errors?.pattern && emailTo.touched\">\n                The email id doesn't seem right\n              </div>\n            </div>\n          </div>\n        </td>\n      </tr>\n\n\n      <tr class=\"row\">\n        <td class=\"col-md-6 offset-md-3\">\n          <div class=\"form-group\">\n            <label class=\"control-label\">Cc</label>\n            <input type=\"text\"\n                   id=\"ccEmail\"\n                   [(ngModel)]=\"email.cc\"\n                   name=\"cc\"\n                   #emailCc = \"ngModel\"\n                   pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n                   placeholder=\"cc\"\n                   class=\"form-control well well-sm\">\n          </div>\n        </td>\n        <td class=\"col-md-4 offset-md-3\">\n          <div class=\"form-group\">\n            <div *ngIf=\"emailCc.invalid && (emailCc.dirty || emailCc.touched)\"\n                 class=\"alert alert-danger\">\n              <div *ngIf = \"emailCc.errors?.required\">\n                Email field can't be blank\n              </div>\n              <div *ngIf = \"emailCc.errors?.dirty\">\n                Enter in correct Format\n              </div>\n              <div *ngIf = \"emailCc.errors?.pattern && emailCc.touched\">\n                The email id doesn't seem right\n              </div>\n            </div>\n          </div>\n        </td>\n      </tr>\n      <tr class=\"row\">\n        <td class=\"col-md-6 offset-md-3\">\n          <div class=\"form-group\">\n            <label class=\"control-label\">Bcc</label>\n            <input type=\"text\"\n                   id=\"bccEmail\"\n                   [(ngModel)]=\"email.bcc\"\n                   name=\"bcc\"\n                   #emailBcc = \"ngModel\"\n                   pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3},?$\"\n                   placeholder=\"bcc\"\n                   class=\"form-control well well-sm\">\n          </div>\n        </td>\n        <td class=\"col-md-4 offset-md-3\">\n          <div class=\"form-group\">\n            <div *ngIf=\"emailBcc.invalid && (emailBcc.dirty || emailBcc.touched)\"\n                 class=\"alert alert-danger\">\n              <div *ngIf = \"emailBcc.errors?.required\">\n                Email field can't be blank\n              </div>\n              <div *ngIf = \"emailBcc.errors?.dirty\">\n                Enter in correct Format\n              </div>\n              <div *ngIf = \"emailBcc.errors?.pattern && emailBcc.touched\">\n                The email id doesn't seem right\n              </div>\n            </div>\n          </div>\n        </td>\n      </tr>\n      <tr class=\"row\">\n        <td class=\"col-md-2 offset-md-3\">\n          <div class=\"form-group\">\n\n            <label class=\"control-label\" for=\"subjectEmail\">Subject</label>\n            <input type=\"text\"\n                   id=\"subjectEmail\"\n                   [(ngModel)]=\"email.subject\"\n                   name=\"subject\"\n                   placeholder=\"subject\"\n                   class=\"form-control well well-sm\"\n                   required>\n          </div>\n        </td>\n      </tr>\n      <tr class=\"row\">\n        <td class=\"col-md-2 offset-md-3\">\n          <div class=\"form-group\">\n\n            <label class=\"control-label\" for=\"subjectEmail\">Text</label>\n            <input type=\"text\"\n                   id=\"textEmail\"\n                   [(ngModel)]=\"email.text\"\n                   name=\"text\"\n                   placeholder=\"text\"\n                   #pwd = \"ngModel\"\n                   minlength=\"8\"\n                   class=\"form-control well well-sm\"\n                   required>\n          </div>\n        </td>\n      </tr>\n    </table>\n    <div class=\"form-group\" id=\"buttonTab\">\n      <button type=\"reset\" class=\"btn btn-default\" id=\"buttonCancel\" >Cancel</button>\n      <button type=\"submit\" class=\"btn btn-primary\"\n              [disabled]=\"!sendmailForm.form.valid\" id=\"buttonSubmit\">Submit</button>\n    </div>\n</form>\n</div>\n"

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
/* harmony import */ var _Email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Email */ "./src/app/Email.ts");
/* harmony import */ var _api_service_mail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service.mail */ "./src/app/api.service.mail.ts");




var SendMailComponent = /** @class */ (function () {
    function SendMailComponent(apiServiceMail) {
        this.apiServiceMail = apiServiceMail;
    }
    SendMailComponent.prototype.ngOnInit = function () {
        this.email = new _Email__WEBPACK_IMPORTED_MODULE_2__["Email"]({ to: "rainatushar221995@gmail.com,random1@gmail.com", cc: "", bcc: "", subject: "", text: "" });
    };
    SendMailComponent.prototype.onFormSubmit = function (_a) {
        var value = _a.value;
        console.log(value);
        this.apiServiceMail.postData(this.email, "String");
    };
    SendMailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-send-mail',
            template: __webpack_require__(/*! ./send-mail.component.html */ "./src/app/send-mail/send-mail.component.html"),
            styles: [__webpack_require__(/*! ./send-mail.component.css */ "./src/app/send-mail/send-mail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service_mail__WEBPACK_IMPORTED_MODULE_3__["ApiServiceMail"]])
    ], SendMailComponent);
    return SendMailComponent;
}());



/***/ }),

/***/ "./src/app/volunteer/volunteer.component.css":
/*!***************************************************!*\
  !*** ./src/app/volunteer/volunteer.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n.text-on-pannel {\n  background: #fff none repeat scroll 0 0;\n  height: auto;\n  margin-left: 20px;\n  padding: 3px 5px;\n  position: absolute;\n  margin-top: -20px;\n  border: 1px solid #337ab7;\n  border-radius: 8px;\n}\n\n.panel {\n\n  margin-top: 27px !important;\n}\n\n.panel-body {\n  padding-top: 30px !important;\n}\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm9sdW50ZWVyL3ZvbHVudGVlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW9CQyIsImZpbGUiOiJzcmMvYXBwL3ZvbHVudGVlci92b2x1bnRlZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4udGV4dC1vbi1wYW5uZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzdhYjc7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnBhbmVsIHtcblxuICBtYXJnaW4tdG9wOiAyN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYW5lbC1ib2R5IHtcbiAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcbn1cbiovXG4iXX0= */"

/***/ }),

/***/ "./src/app/volunteer/volunteer.component.html":
/*!****************************************************!*\
  !*** ./src/app/volunteer/volunteer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" >\n  <div class=\"page-header well well-sm text-center\">\n    <h3><strong> Volunteer Registration</strong></h3>\n  </div>\n  <div class=\"panel panel-info\" >\n   <!-- <fieldset>\n\n    <legend>Personal Details</legend>-->\n    <!--<h3 class=\"text-on-pannel text-primary\"><strong class=\"text-uppercase\"> Personal Information</strong></h3>-->\n  <div class=\"panel-heading\">\n    <label>Personal Information</label>\n  </div>\n  <div class=\"panel-body\" >\n    <form #form=\"ngForm\" [formGroup]=\"myForm\" (ngSubmit)=\"personalInfo()\">\n    <div  formGroupName=\"personalInfo\">\n\n\n        <div class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">First Name</label>\n              <input type=\"text\" formControlName = \"firstName\" class=\"form-control well well-sm\">\n            </div>\n          </div>\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Last Name</label>\n              <input type=\"text\" formControlName = \"lastName\" class=\"form-control well well-sm\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-1 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Prefix</label>\n              <input type=\"text\" formControlName = \"phonePrefix\" class=\"form-control well well-sm\">\n            </div>\n          </div>\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Phone Number</label>\n              <input type=\"text\" formControlName = \"phoneNumber\" class=\"form-control well well-sm\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-1 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Prefix</label>\n              <input type=\"text\" formControlName = \"alternatePhonePrefix\" class=\"form-control well well-sm\">\n            </div>\n          </div>\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Alternate Phone</label>\n              <input type=\"text\" formControlName = \"alternatePhoneNumber\" class=\"form-control well well-sm\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Email</label>\n              <input type=\"text\" formControlName = \"email\" class=\"form-control well well-sm\">\n            </div>\n          </div>\n\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Alternate Email</label>\n              <input type=\"text\" formControlName = \"alternateEmail\" class=\"form-control well well-sm\">\n            </div>\n          </div>\n        </div>\n\n\n    </div>\n    </form>\n  </div>\n    <!--</fieldset>-->\n  </div>\n\n  <div class=\"panel panel-primary\">\n    <!--<fieldset>\n\n      <legend>Address</legend>-->\n\n    <!--<h3 class=\"text-on-pannel text-primary\"><strong class=\"text-uppercase\"> Address</strong></h3>-->\n    <div class=\"panel-heading\">\n      <label>Address</label>\n    </div>\n      <div class=\"panel-body\">\n        <form [formGroup]=\"myForm\" >\n        <div formGroupName=\"address\">\n\n\n            <div class=\"row\">\n              <div class=\"col-md-6 offset-md-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Locality</label>\n                  <input type=\"text\" formControlName = \"locality\" class=\"form-control well well-sm\">\n                </div>\n              </div>\n              <div class=\"col-md-6 offset-md-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">City</label>\n                  <input type=\"text\" formControlName = \"city\" class=\"form-control well well-sm\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-6 offset-md-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">State</label>\n                  <input type=\"text\" formControlName = \"state\" class=\"form-control well well-sm\">\n                </div>\n              </div>\n\n              <div class=\"col-md-6 offset-md-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Pin Code</label>\n                  <input type=\"text\" formControlName = \"pincode\" class=\"form-control well well-sm\">\n                </div>\n              </div>\n            </div>\n\n\n        </div>\n        </form>\n      </div>\n   <!-- </fieldset>-->\n  </div>\n  <div class=\"panel panel-info\">\n    <!--<fieldset>\n\n      <legend>Additional Information</legend>-->\n   <!-- <h3 class=\"text-on-pannel text-primary\"><strong class=\"text-uppercase\"> Additional Information </strong></h3>-->\n      <div class=\"panel-heading\">\n        <label>Additional Information</label>\n      </div>\n      <div class=\"panel-body\">\n        <form #form=\"ngForm\" [formGroup]=\"myForm\" (ngSubmit)=\"additionalInfo()\">\n        <div formGroupName=\"additionalInfo\">\n\n\n            <div class=\"row\">\n              <div class=\"col-md\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Interest Areas</label>\n                  <textarea formControlName = \"interestedAreas\" rows=\"2\" cols=\"50\" class=\"form-control well well-sm\"></textarea>\n                </div>\n              </div>\n\n            </div>\n\n\n\n\n        </div>\n\n        </form>\n\n      </div>\n    <!--</fieldset>-->\n  </div>\n  <div class=\"text-center\">\n  <button  class=\"btn btn-default\" (click)=\"onSubmit()\">Register</button>\n  </div>\n</div>\n\n"

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




var VolunteerComponent = /** @class */ (function () {
    function VolunteerComponent(formBuilder, apiService) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
    }
    VolunteerComponent.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            personalInfo: this.personalInfo(),
            address: this.address(),
            additionalInfo: this.additionalInfo()
        });
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
            interestedAreas: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2000)
                ]],
        });
        return additionalInfo;
    };
    VolunteerComponent.prototype.onSubmit = function () {
        console.log("Insubmit");
        console.log(this.address);
        if (this.myForm.valid) {
            console.log("valid");
            var json = Object.assign(this.myForm.get('personalInfo').value, this.myForm.get('address').value);
            console.log('submitting: ', json);
            this.apiService.postData(json, 'volunteer-create');
            // this.apiService.getData('partnerngo');
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
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
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

module.exports = __webpack_require__(/*! /Users/admin/Desktop/FFG/schedule_events/yfsevents-web/src/main/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map