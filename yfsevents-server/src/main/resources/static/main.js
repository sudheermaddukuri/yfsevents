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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _partner_ngo_partner_ngo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partner-ngo/partner-ngo.component */ "./src/app/partner-ngo/partner-ngo.component.ts");
/* harmony import */ var _events_event_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/event-list.component */ "./src/app/events/event-list.component.ts");
/* harmony import */ var _events_add_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/add-event.component */ "./src/app/events/add-event.component.ts");
/* harmony import */ var _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./volunteer/volunteer.component */ "./src/app/volunteer/volunteer.component.ts");
/* harmony import */ var _inventory_data_inventory_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inventory-data/inventory-data.component */ "./src/app/inventory-data/inventory-data.component.ts");
/* harmony import */ var _college_registration_college_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./college-registration/college-registration.component */ "./src/app/college-registration/college-registration.component.ts");










var routes = [
    {
        path: 'collegeregistration', component: _college_registration_college_registration_component__WEBPACK_IMPORTED_MODULE_9__["CollegeRegistrationComponent"]
    },
    {
        path: 'inventorydata', component: _inventory_data_inventory_data_component__WEBPACK_IMPORTED_MODULE_8__["InventoryDataComponent"]
    },
    {
        path: 'partnerngo', component: _partner_ngo_partner_ngo_component__WEBPACK_IMPORTED_MODULE_4__["PartnerNGOComponent"]
    },
    { path: 'events', component: _events_event_list_component__WEBPACK_IMPORTED_MODULE_5__["EventListComponent"] },
    { path: 'addevent', component: _events_add_event_component__WEBPACK_IMPORTED_MODULE_6__["AddEventComponent"] },
    { path: 'volunteer', component: _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_7__["VolunteerComponent"] },
    {
        path: '**', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header></header>\n\n<!--The content below is only a placeholder and can be replaced.-->\n<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Youth For Seva</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Events <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Volenteers</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Partner NGO's</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\">Contact Us</a>\n        </li>\n      </ul>\n    </div>\n  </nav> -->\n\n<router-outlet></router-outlet>\n\n<footer></footer>\n"

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
/* harmony import */ var _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./volunteer/volunteer.component */ "./src/app/volunteer/volunteer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _inventory_data_inventory_data_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./inventory-data/inventory-data.component */ "./src/app/inventory-data/inventory-data.component.ts");
/* harmony import */ var _college_registration_college_registration_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./college-registration/college-registration.component */ "./src/app/college-registration/college-registration.component.ts");



















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
                _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_14__["VolunteerComponent"],
                _inventory_data_inventory_data_component__WEBPACK_IMPORTED_MODULE_16__["InventoryDataComponent"],
                _college_registration_college_registration_component__WEBPACK_IMPORTED_MODULE_17__["CollegeRegistrationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["AlertModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"].withComponents([]),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsZWdlLXJlZ2lzdHJhdGlvbi9jb2xsZWdlLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/college-registration/college-registration.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/college-registration/college-registration.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"page-header well well-sm\">\n    <h3><strong> College Registration</strong></h3>\n  </div>\n\n  <form [formGroup]=\"collegeForm\">\n    <div class=\"panel panel-info\">\n      <div class=\"panel-heading\">\n        <label>About College</label>\n      </div>\n      <div class=\"panel-body\">\n        <div formGroupName=\"collegeDetails\">\n          <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">College Name</label>\n                <input type=\"text\" formControlName=\"name\" class=\"form-control well well-sm\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Registration Id</label>\n                <input type=\"text\" formControlName=\"registrationId\" class=\"form-control well well-sm\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-info\">\n      <div class=\"panel-heading\">\n        <label>Address</label>\n      </div>\n      <div class=\"panel-body\">\n        <div formGroupName=\"address\">\n          <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Address Line 1</label>\n                <input type=\"text\" formControlName=\"addressLine1\" class=\"form-control well well-sm\">\n              </div>\n            </div>\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Address Line 2</label>\n                <input type=\"text\" formControlName=\"addressLine2\" class=\"form-control well well-sm\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">City</label>\n                <input type=\"text\" formControlName=\"city\" class=\"form-control well well-sm\">\n              </div>\n            </div>\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">State</label>\n                <input type=\"text\" formControlName=\"state\" class=\"form-control well well-sm\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Pincode</label>\n                <input type=\"text\" formControlName=\"pincode\" class=\"form-control well well-sm\">\n              </div>\n            </div>\n            <div class=\"col-md-6 offset-md-3\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-info\">\n      <div class=\"panel-heading\">\n        <label>MOU Details</label>\n      </div>\n      <div class=\"panel-body\">\n        <ul class=\"nav nav-tabs\" active=\"selectedTab\">\n          <li class=\"nav active\" *ngIf=\"numberOfMOUs>0\"><a href=\"#tab0\" data-toggle=\"tab\" (click)=\"activateTab(1)\">MOU\n              1</a></li>\n          <li class=\"nav\" *ngFor=\"let num of getArray(numberOfMOUs-1); let i=index;\"><a href=\"#tab{{i+1}}\" data-toggle=\"tab\"\n              (click)=\"activateTab(i+2)\">MOU {{i+2}}</a></li>\n\n          <div class=\"pull-right\">\n            <button class=\"btn btn-primary\" (click)=addMOU() [disabled]=\"isMaxLimitReached(10)\">Add MOU</button>\n            <button class=\"btn btn-primary\" (click)=removeMOU() >Remove MOU</button>\n\n          </div>\n\n        </ul>\n\n        <div class=\"tab-content\">\n          <div formArrayName=\"mouDetails\">\n            <div class=\"tab-pane\" *ngFor=\"let person of collegeForm.get('mouDetails').controls;let i=index\"\n              formGroupName=\"{{i}}\" id=\"tab{{i}}\">\n\n              <div *ngIf=\"selectedTab==i\">\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">MOU ID</label>\n                      <input type=\"text\" formControlName=\"mouID\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">MOU Name</label>\n                      <input type=\"text\" formControlName=\"mouName\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Number Of Events Agreed</label>\n                      <input type=\"text\" formControlName=\"noOfEvents\" class=\"form-control well well-sm\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Valid From</label>\n                      <input type=\"text\" formControlName=\"fromDate\" class=\"form-control well well-sm\" bsDatepicker>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Valid To</label>\n                      <input type=\"text\" formControlName=\"toDate\" class=\"form-control well well-sm\" bsDatepicker>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Comments</label>\n                      <textarea type=\"text\" formControlName=\"comments\" class=\"form-control well well-sm\"></textarea>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </form>\n  <div class=\"text-center\">\n    <button class=\"btn btn-primary btn-sx\">Register</button>\n  </div>\n</div>"

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



var CollegeRegistrationComponent = /** @class */ (function () {
    function CollegeRegistrationComponent(formBuilder) {
        this.formBuilder = formBuilder;
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
    CollegeRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-college-registration',
            template: __webpack_require__(/*! ./college-registration.component.html */ "./src/app/college-registration/college-registration.component.html"),
            styles: [__webpack_require__(/*! ./college-registration.component.css */ "./src/app/college-registration/college-registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CollegeRegistrationComponent);
    return CollegeRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/events/add-event.component.html":
/*!*************************************************!*\
  !*** ./src/app/events/add-event.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form >\n        <div class=\"form-row\">\n            <div class=\"col-md-1\"></div>\n          <div class=\"form-group col-md-5\">\n            <label for=\"eventname\">Event Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"eventname\" placeholder=\"Name\">\n          </div>\n          <div class=\"form-group col-md-5\">\n                <label for=\"eventaction\">Action</label>\n                <select id=\"eventaction\" class=\"form-control\">\n                  <option selected>Choose...</option>\n                  <option>Not Started</option>\n                  <option>In progress</option>\n                  <option>completed</option>\n                  <option>Abandoned</option>\n                </select>\n          </div>\n          <div class=\"col-md-1\"></div>\n        </div>\n\n        <div class=\"form-row\">\n                <div class=\"col-md-1\"></div>\n              <div class=\"form-group col-md-5\">\n                <label for=\"ngoname\">Partner Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"ngoname\" placeholder=\"NGO Name\" >\n              </div>\n              <div class=\"form-group col-md-5\">\n                    <label for=\"eventcategory\">Event category</label>\n                    <select id=\"eventcategory\" class=\"form-control\">\n                      <option selected>Choose...</option>\n                      <option>Not Started</option>\n                      <option>In progress</option>\n                      <option>completed</option>\n                      <option>Abandoned</option>\n                    </select>\n              </div>\n              <div class=\"col-md-1\"></div>\n            </div>\n\n            <div class=\"form-row\">\n              <div class=\"col-md-1\"></div>\n            <div class=\"form-group col-md-5\">\n                <label for=\"datepicker\">Select Date Range</label>\n                <input id=\"datepicker\" class=\"form-control\"\n                bsDaterangepicker [(ngModel)]=\"bsRangeValue\" >\n            </div>\n            <div class=\"form-group col-md-5\">\n                <label for=\"eventaction\">Recurring Event</label>\n                <select id=\"eventaction\" class=\"form-control\">\n                  <option selected>No</option>\n                  <option>Yes</option>\n                </select>\n            </div>\n            <div class=\"col-md-1\"></div>\n          </div>\n\n\n        \n\n            \n</form>"

/***/ }),

/***/ "./src/app/events/add-event.component.ts":
/*!***********************************************!*\
  !*** ./src/app/events/add-event.component.ts ***!
  \***********************************************/
/*! exports provided: AddEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventComponent", function() { return AddEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddEventComponent = /** @class */ (function () {
    function AddEventComponent() {
        this.bsValue = new Date();
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.bsRangeValue = [this.bsValue, this.maxDate];
    }
    AddEventComponent.prototype.ngOnInit = function () {
    };
    AddEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-event',
            template: __webpack_require__(/*! ./add-event.component.html */ "./src/app/events/add-event.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddEventComponent);
    return AddEventComponent;
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
/*! exports provided: EventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListComponent", function() { return EventListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventListComponent = /** @class */ (function () {
    function EventListComponent() {
        this.columnDefs = [
            { headerName: 'EventId', field: 'event_id' },
            { headerName: 'Action', field: 'action' },
            { headerName: 'Event Name', field: 'event_name' },
            { headerName: 'Event Category', field: 'event_category' },
            { headerName: 'Partner NGO', field: 'ngo_name' },
            { headerName: 'Event Start Date', field: 'event_start_date' },
            { headerName: 'Event End Date', field: 'event_end_date' },
        ];
        this.rowData = [
            { event_id: '1001', action: 'Not Started', event_name: 'ABC', event_category: 'Partner NGO', ngo_name: 'XYZ', event_start_date: '15/2/2019', event_end_date: '17/2/2019' },
        ];
    }
    EventListComponent.prototype.ngOnInit = function () {
    };
    EventListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'event-list',
            template: __webpack_require__(/*! ./event-list.component.html */ "./src/app/events/event-list.component.html")
        })
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

module.exports = ".footer{\n    background-color: #2d2d30;\n    color: #d5d5d5 !important;\n    letter-spacing: 4px;\n    opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEIiLCJmaWxlIjoiZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDMwO1xuICAgIGNvbG9yOiAjZDVkNWQ1ICFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBvcGFjaXR5OiAwLjk7XG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center footer\">\n    <!--ToDo: Add go to Top Logic on Button Click\n    >a class=\"up-arrow\" href=\"\" data-toggle=\"tooltip\" title=\"TO TOP\">\n      <span class=\"glyphicon glyphicon-chevron-up\"></span>\n    </a><br><br-->\n    <p>Made by <strong>J. P. Morgan Chase & Co.</strong></p>\n    </div>\n"

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

module.exports = ".nav-tabs li a {\n    color: #777;\n  }\n  #googleMap {\n    width: 100%;\n    height: 400px;\n    -webkit-filter: grayscale(100%);\n    filter: grayscale(100%);\n  }\n  .navbar {\n    font-family: Montserrat, sans-serif;\n    margin-bottom: 0;\n    background-color: #2d2d30;\n    border: 0;\n    font-size: 11px !important;\n    letter-spacing: 4px;\n    opacity: 0.9;\n  }\n  .navbar li a, .navbar .navbar-brand { \n    color: #d5d5d5 !important;\n  }\n  .navbar-nav li a:hover {\n    color: #fff !important;\n  }\n  .navbar-nav li.active a {\n    color: #fff !important;\n    background-color: #29292c !important;\n  }\n  .navbar-default .navbar-toggle {\n    border-color: transparent;\n  }\n  .open .dropdown-toggle {\n    color: #fff;\n    background-color: #555 !important;\n  }\n  .dropdown-menu li a {\n    color: #000 !important;\n  }\n  .dropdown-menu li a:hover {\n    background-color: red !important;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxtQ0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLFdBQVc7SUFDWCxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDIiwiZmlsZSI6ImhlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtdGFicyBsaSBhIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxuICAjZ29vZ2xlTWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIH0gIFxuICAubmF2YmFyIHtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMzA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG4gIC5uYXZiYXIgbGkgYSwgLm5hdmJhciAubmF2YmFyLWJyYW5kIHsgXG4gICAgY29sb3I6ICNkNWQ1ZDUgIWltcG9ydGFudDtcbiAgfVxuICAubmF2YmFyLW5hdiBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG4gIC5uYXZiYXItbmF2IGxpLmFjdGl2ZSBhIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5MmMgIWltcG9ydGFudDtcbiAgfVxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NSAhaW1wb3J0YW50O1xuICB9XG4gIC5kcm9wZG93bi1tZW51IGxpIGEge1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRyb3Bkb3duLW1lbnUgbGkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <i class=\"navbar-brand\" src=\"resources/youth-for-seva.png\"></i>\n        <a class=\"navbar-brand\" href=\"\">YOUTH FOR SEVA</a>\n      </div>\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"\">HOME</a></li>\n          <li class=\"dropdown\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">REGISTER\n            <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <!--ToDO: Change on Hover Colour-->\n              <li><a [routerLink]=\"['/partnerngo']\">Partner NGO</a></li>\n              <li><a [routerLink]=\"['/volunteer']\">Volunteer</a></li>\n              <li><a [routerLink]=\"\">College</a></li> \n            </ul>\n          </li>\n          <li><a [routerLink]=\"['/events']\">EVENTS</a></li>\n          <li><a [routerLink]=\"\">TOUR</a></li>\n          <li><a [routerLink]=\"\">CONTACT</a></li>\n          <li><a [routerLink]=\"\"><span class=\"glyphicon glyphicon-search\"></span></a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n"

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

module.exports = ".btn.btn.default.dropdown-toggle{\n    width:100%;\n    text-align: left;\n}\n.dropdown-menu{\n    width:100%;\n}\n.caret{\n    float: right;\n    \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVudG9yeS1kYXRhL2ludmVudG9yeS1kYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7O0FBRWhCIiwiZmlsZSI6ImludmVudG9yeS1kYXRhL2ludmVudG9yeS1kYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLmJ0bi5kZWZhdWx0LmRyb3Bkb3duLXRvZ2dsZXtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZHJvcGRvd24tbWVudXtcbiAgICB3aWR0aDoxMDAlO1xufVxuLmNhcmV0e1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/inventory-data/inventory-data.component.html":
/*!**************************************************************!*\
  !*** ./src/app/inventory-data/inventory-data.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"page-header well well-sm\">\n    <h3><strong> Inventory Data</strong></h3>\n  </div>\n  <form [formGroup]=\"inventoryData\">\n    <div class=\"panel panel-info\">\n      <div class=\"panel-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">ItemName</label>\n              <input type=\"text\" formControlName=\"itemName\" class=\"form-control well well-sm\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">EventCategory</label>\n              <div class=\"dropdown\">\n                <button class=\"btn btn default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Select EventCategory\n                  <span class=\"caret\"></span></button>\n                <ul class=\"dropdown-menu\">\n                  <li><a href=\"#\">Partner NGO</a></li>\n                  <li><a href=\"#\">Education</a></li>\n                  <li><a href=\"#\">Environment</a></li>\n                  <li><a href=\"#\">Health</a></li>\n                  <li><a href=\"#\">Other</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Comments</label>\n              <textarea type=\"text\" formControlName=\"comments\" class=\"form-control well well-sm\"></textarea>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n  <div class=\"text-center\">\n    <button class=\"btn btn-primary btn-sx\">Save</button>\n  </div>\n</div>"

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



var InventoryDataComponent = /** @class */ (function () {
    function InventoryDataComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    InventoryDataComponent.prototype.ngOnInit = function () {
        this.inventoryData = this.formBuilder.group({
            itemName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                ]],
            eventCategory: [''],
            comments: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)
                ]],
        });
    };
    InventoryDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory-data',
            template: __webpack_require__(/*! ./inventory-data.component.html */ "./src/app/inventory-data/inventory-data.component.html"),
            styles: [__webpack_require__(/*! ./inventory-data.component.css */ "./src/app/inventory-data/inventory-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], InventoryDataComponent);
    return InventoryDataComponent;
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

/***/ "./src/app/volunteer/volunteer.component.css":
/*!***************************************************!*\
  !*** ./src/app/volunteer/volunteer.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-on-pannel {\n  background: #fff none repeat scroll 0 0;\n  height: auto;\n  margin-left: 20px;\n  padding: 3px 5px;\n  position: absolute;\n  margin-top: -20px;\n  border: 1px solid #337ab7;\n  border-radius: 8px;\n}\n\n.panel {\n  /* for text on pannel */\n  margin-top: 27px !important;\n}\n\n.panel-body {\n  padding-top: 30px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvbHVudGVlci92b2x1bnRlZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUF1QztFQUN2QyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InZvbHVudGVlci92b2x1bnRlZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LW9uLXBhbm5lbCB7XG4gIGJhY2tncm91bmQ6ICNmZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzN2FiNztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ucGFuZWwge1xuICAvKiBmb3IgdGV4dCBvbiBwYW5uZWwgKi9cbiAgbWFyZ2luLXRvcDogMjdweCAhaW1wb3J0YW50O1xufVxuXG4ucGFuZWwtYm9keSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/volunteer/volunteer.component.html":
/*!****************************************************!*\
  !*** ./src/app/volunteer/volunteer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1 user-scalable=no\">\n\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n\n</head>\n\n<body>\n<div class=\"container\" >\n  <div class=\"page-header well well-sm text-center\">\n    <h3><strong> Volunteer Registration</strong></h3>\n  </div>\n  <div class=\"panel panel-primary\" >\n   <!-- <fieldset>\n\n    <legend>Personal Details</legend>-->\n    <h3 class=\"text-on-pannel text-primary\"><strong class=\"text-uppercase\"> Personal Information</strong></h3>\n\n  <div class=\"panel-body\" >\n    <form #form=\"ngForm\" [formGroup]=\"myForm\" (ngSubmit)=\"personalInfo()\">\n    <div  formGroupName=\"personalInfo\">\n\n      <table class=\"table-condensed form-table\">\n        <tr class=\"row\">\n          <td class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">First Name</label>\n              <input type=\"text\" formControlName = \"firstName\" class=\"form-control well well-sm\">\n            </div>\n          </td>\n          <td class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Last Name</label>\n              <input type=\"text\" formControlName = \"lastName\" class=\"form-control well well-sm\">\n            </div>\n          </td>\n        </tr>\n        <tr class=\"row\">\n          <td class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Phone</label>\n              <input type=\"text\" formControlName = \"phonePrefix\" class=\"form-control well well-sm\">\n            </div>\n          </td>\n          <td class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\"></label>\n              <input type=\"text\" formControlName = \"phoneNumber\" class=\"form-control well well-sm\">\n            </div>\n          </td>\n        </tr>\n        <tr class=\"row\">\n          <td class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Alternate Phone</label>\n              <input type=\"text\" formControlName = \"alternatePhonePrefix\" class=\"form-control well well-sm\">\n            </div>\n          </td>\n          <td class=\"col-md-6 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\"></label>\n              <input type=\"text\" formControlName = \"alternatePhoneNumber\" class=\"form-control well well-sm\">\n            </div>\n          </td>\n        </tr>\n        <tr class=\"row\">\n          <td class=\"col-md-2 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Email</label>\n              <input type=\"text\" formControlName = \"email\" class=\"form-control well well-sm\">\n            </div>\n          </td>\n\n          <td class=\"col-md-4 offset-md-3\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">Alternate Email</label>\n              <input type=\"text\" formControlName = \"alternateEmail\" class=\"form-control well well-sm\">\n            </div>\n          </td>\n        </tr>\n      </table>\n\n    </div>\n    </form>\n  </div>\n    <!--</fieldset>-->\n  </div>\n\n  <div class=\"panel panel-primary\">\n    <!--<fieldset>\n\n      <legend>Address</legend>-->\n\n    <h3 class=\"text-on-pannel text-primary\"><strong class=\"text-uppercase\"> Address</strong></h3>\n      <div class=\"panel-body\">\n        <form [formGroup]=\"myForm\" >\n        <div formGroupName=\"address\">\n\n          <table class=\"table-condensed form-table\">\n            <tr class=\"row\">\n              <td class=\"col-md-6 offset-md-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Locality</label>\n                  <input type=\"text\" formControlName = \"locality\" class=\"form-control well well-sm\">\n                </div>\n              </td>\n              <td class=\"col-md-6 offset-md-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">City</label>\n                  <input type=\"text\" formControlName = \"city\" class=\"form-control well well-sm\">\n                </div>\n              </td>\n            </tr>\n\n            <tr class=\"row\">\n              <td class=\"col-md-6 offset-md-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">State</label>\n                  <input type=\"text\" formControlName = \"state\" class=\"form-control well well-sm\">\n                </div>\n              </td>\n\n              <td class=\"col-md-6 offset-md-3\">\n                <div class=\"form-group col-md-10\">\n                  <label class=\"control-label\">Pin Code</label>\n                  <input type=\"text\" formControlName = \"pincode\" class=\"form-control well well-sm\">\n                </div>\n              </td>\n            </tr>\n          </table>\n\n        </div>\n        </form>\n      </div>\n   <!-- </fieldset>-->\n  </div>\n  <div class=\"panel panel-info\">\n    <!--<fieldset>\n\n      <legend>Additional Information</legend>-->\n    <h3 class=\"text-on-pannel text-primary\"><strong class=\"text-uppercase\"> Additional Information </strong></h3>\n\n      <div class=\"panel-body\">\n        <form #form=\"ngForm\" [formGroup]=\"myForm\" (ngSubmit)=\"additionalInfo()\">\n        <div formGroupName=\"additionalInfo\">\n\n          <table class=\"table-condensed form-table\">\n            <tr class=\"row\">\n              <td class=\"col-md\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Interest Areas</label>\n                  <textarea formControlName = \"interestedAreas\" rows=\"2\" cols=\"50\" class=\"form-control well well-sm\"></textarea>\n                </div>\n              </td>\n\n            </tr>\n\n\n          </table>\n\n        </div>\n\n        </form>\n\n      </div>\n    <!--</fieldset>-->\n  </div>\n  <div class=\"text-center\">\n  <button  class=\"btn btn-default\" (click)=\"onSubmit()\">Register</button>\n  </div>\n</div>\n\n\n\n</body>\n</html>\n"

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



var VolunteerComponent = /** @class */ (function () {
    function VolunteerComponent(formBuilder) {
        this.formBuilder = formBuilder;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], VolunteerComponent);
    return VolunteerComponent;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/force/Documents/Ideaprojects/yfsevents_snehasingh95/yfsevents-web/src/main/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map