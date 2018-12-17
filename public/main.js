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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <app-login></app-login> -->\n<!-- <app-nav></app-nav> -->\n\n\n    <!--<ng-flash-message></ng-flash-message>-->\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = '한뮤니티';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, PizzaPartyAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaPartyAppModule", function() { return PizzaPartyAppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_study_study_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/study/study.component */ "./src/app/components/study/study.component.ts");
/* harmony import */ var _components_question_question_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/question/question.component */ "./src/app/components/question/question.component.ts");
/* harmony import */ var _components_petition_petition_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/petition/petition.component */ "./src/app/components/petition/petition.component.ts");
/* harmony import */ var _components_together_together_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/together/together.component */ "./src/app/components/together/together.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_find_find_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/find/find.component */ "./src/app/components/find/find.component.ts");
/* harmony import */ var _components_write_study_write_study_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/write-study/write-study.component */ "./src/app/components/write-study/write-study.component.ts");
/* harmony import */ var _components_write_petition_write_petition_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/write-petition/write-petition.component */ "./src/app/components/write-petition/write-petition.component.ts");
/* harmony import */ var _components_write_question_write_question_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/write-question/write-question.component */ "./src/app/components/write-question/write-question.component.ts");
/* harmony import */ var _components_write_together_write_together_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/write-together/write-together.component */ "./src/app/components/write-together/write-together.component.ts");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/message/message.component */ "./src/app/components/message/message.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_temp_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/temp.service */ "./src/app/services/temp.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var appRoutes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"] },
    { path: 'find', component: _components_find_find_component__WEBPACK_IMPORTED_MODULE_20__["FindComponent"] },
    { path: 'study', component: _components_study_study_component__WEBPACK_IMPORTED_MODULE_13__["StudyComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"]] },
    { path: 'question', component: _components_question_question_component__WEBPACK_IMPORTED_MODULE_14__["QuestionComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"]] },
    { path: 'together', component: _components_together_together_component__WEBPACK_IMPORTED_MODULE_16__["TogetherComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"]] },
    { path: 'petition', component: _components_petition_petition_component__WEBPACK_IMPORTED_MODULE_15__["PetitionComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"]] },
    { path: 'writeStudy', component: _components_write_study_write_study_component__WEBPACK_IMPORTED_MODULE_21__["WriteStudyComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"]] },
    { path: 'writeQuestion', component: _components_write_question_write_question_component__WEBPACK_IMPORTED_MODULE_23__["WriteQuestionComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"]] },
    { path: 'writePetition', component: _components_write_petition_write_petition_component__WEBPACK_IMPORTED_MODULE_22__["WritePetitionComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"]] },
    { path: 'writeTogether', component: _components_write_together_write_together_component__WEBPACK_IMPORTED_MODULE_24__["WriteTogetherComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"]] },
    { path: 'message', component: _components_message_message_component__WEBPACK_IMPORTED_MODULE_25__["MessageComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"],
                _components_study_study_component__WEBPACK_IMPORTED_MODULE_13__["StudyComponent"],
                _components_question_question_component__WEBPACK_IMPORTED_MODULE_14__["QuestionComponent"],
                _components_petition_petition_component__WEBPACK_IMPORTED_MODULE_15__["PetitionComponent"],
                _components_together_together_component__WEBPACK_IMPORTED_MODULE_16__["TogetherComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _components_write_study_write_study_component__WEBPACK_IMPORTED_MODULE_21__["WriteStudyComponent"],
                _components_write_petition_write_petition_component__WEBPACK_IMPORTED_MODULE_22__["WritePetitionComponent"],
                _components_message_message_component__WEBPACK_IMPORTED_MODULE_25__["MessageComponent"],
                _components_write_together_write_together_component__WEBPACK_IMPORTED_MODULE_24__["WriteTogetherComponent"],
                _components_write_question_write_question_component__WEBPACK_IMPORTED_MODULE_23__["WriteQuestionComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _components_find_find_component__WEBPACK_IMPORTED_MODULE_20__["FindComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_29__["NgFlashMessagesModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"]
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_26__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_27__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"], _services_temp_service__WEBPACK_IMPORTED_MODULE_28__["TempService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

var PizzaPartyAppModule = /** @class */ (function () {
    function PizzaPartyAppModule() {
    }
    return PizzaPartyAppModule;
}());



/***/ }),

/***/ "./src/app/components/find/find.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/find/find.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".han{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width:140px;\r\n}\r\n.hanlogo{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto; \r\n    padding-top:80px;\r\n}\r\n.loginform{\r\n    font-family: 'Jua', sans-serif;\r\n    margin: auto;\r\n    padding-top: 20px;\r\n    background-color: white;\r\n    text-align: center;\r\n    width: 300px;\r\n    height: 330px;\r\n    -ms-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    -o-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n  \r\n}\r\ninput[type=text], input[type=password] {\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n}\r\nbutton {\r\n    background-color: rgba(187, 206, 224, 0.726);\r\n    color: black;\r\n    border-radius: 4px;\r\n    font-weight: 0.3px;\r\n    cursor: pointer;\r\n    font-family: 'Jua', sans-serif;\r\n}\r\nbutton:hover {\r\n    background-color: rgba(199, 213, 226, 0.829);\r\n}\r\n#inputs {\r\n    padding: 10px;\r\n}\r\n/* .ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; \r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; \r\n  } */\r\n.example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n.example-container > * {\r\n    width: 100%;\r\n  }\r\n.hantitle{\r\n    font-size:80px;\r\n    font-family: 'Jua', sans-serif;\r\n    color: DodgerBlue;\r\n    text-align:center;\r\n    text-shadow: 1px 1px grey;\r\n  }\r\n.hanti{\r\n    font-size:110px;\r\n    font-family: 'Jua', sans-serif;\r\n    color: #87CEFA;\r\n    text-align:center;\r\n    text-shadow: 1px 1px grey;\r\n}\r\n.hof{\r\n    margin-top: 30px;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maW5kL2ZpbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0lBR2QsNkVBQTZFO0lBQzdFLDRFQUE0RTtJQUM1RSx5RUFBeUU7O0NBRTVFO0FBQ0Q7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0NBQ3RCO0FBRUQ7SUFDSSw2Q0FBNkM7SUFDN0MsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtDQUNsQztBQUVEO0lBQ0ksNkNBQTZDO0NBQ2hEO0FBRUQ7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7Ozs7OztNQU1NO0FBRUo7SUFDRSxjQUFjO0lBQ2QsdUJBQXVCO0dBQ3hCO0FBRUQ7SUFDRSxZQUFZO0dBQ2I7QUFDRDtJQUNFLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiwwQkFBMEI7R0FDM0I7QUFDSDtJQUNJLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9maW5kL2ZpbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYW57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6MTQwcHg7XHJcbn1cclxuLmhhbmxvZ297XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcclxuICAgIHBhZGRpbmctdG9wOjgwcHg7XHJcbn1cclxuLmxvZ2luZm9ybXtcclxuICAgIGZvbnQtZmFtaWx5OiAnSnVhJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMzMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcclxuICAgIC1tcy1ib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcbiAgICAtby1ib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcbiAgXHJcbn1cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAyMDYsIDIyNCwgMC43MjYpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDAuM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdKdWEnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTksIDIxMywgMjI2LCAwLjgyOSk7XHJcbn1cclxuXHJcbiNpbnB1dHMge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4vKiAubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgXHJcbiAgfVxyXG4gIFxyXG4gIC5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyBcclxuICB9ICovXHJcblxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmhhbnRpdGxle1xyXG4gICAgZm9udC1zaXplOjgwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0p1YScsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogRG9kZ2VyQmx1ZTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggZ3JleTtcclxuICB9XHJcbi5oYW50aXtcclxuICAgIGZvbnQtc2l6ZToxMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSnVhJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjODdDRUZBO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCBncmV5O1xyXG59XHJcbi5ob2Z7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/find/find.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/find/find.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Jua&amp;subset=korean\" rel=\"stylesheet\">\n<div class=\"hof\">\n    <h1 class=\"hanti\">한뮤니티</h1>\n</div>\n\n<div class=\"loginform\">\n  <div><h5>아이디, 비밀번호 찾기</h5>\n    <form (submit)=\"findUser()\">\n      <div id=\"inputs\">\n        <label> 이름 : </label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\">\n      </div>\n      <div id=\"inputs\">\n          <label> 이메일 : </label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n      </div>\n      <div id=\"inputs\">\n        <button id=\"bigbutton\" type=\"submit\" value=\"Submit\"> 찾기 </button>\n      </div>\n      <div id=\"inputs\">\n        <button id=\"bigbutton\" [routerLink]=\"['/login']\"> 돌아가기 </button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/find/find.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/find/find.component.ts ***!
  \***************************************************/
/*! exports provided: FindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindComponent", function() { return FindComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FindComponent = /** @class */ (function () {
    function FindComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    FindComponent.prototype.ngOnInit = function () {
    };
    FindComponent.prototype.findUser = function () {
        var user = {
            email: this.email,
            name: this.name
        };
        this.authService.findUser(user).subscribe(function (data) {
            window.alert(data.msg);
        });
    };
    FindComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-find',
            template: __webpack_require__(/*! ./find.component.html */ "./src/app/components/find/find.component.html"),
            styles: [__webpack_require__(/*! ./find.component.css */ "./src/app/components/find/find.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FindComponent);
    return FindComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-footer{\r\n    position:fixed;\r\n    bottom:0;\r\n    width:100%  ;\r\n    height:50px;\r\n    text-align:center;\r\n    display:block;\r\n    background-color: DodgerBlue;\r\n    justify-content: space-around;\r\n    color:white;\r\n    opacity: 0.7;\r\n}\r\n\r\n.mat-raised-button{\r\n    margin-left: 35px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    color: white;\r\n    font-size:20px;\r\n    background-color: DodgerBlue;\r\n}\r\n\r\n.mat-raised-button:hover{\r\n    background-color: rgb(14, 82, 150);\r\n    opacity: 0.9;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7Q0FDaEM7O0FBQ0Q7SUFDSSxtQ0FBbUM7SUFDbkMsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtZm9vdGVye1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICBib3R0b206MDtcclxuICAgIHdpZHRoOjEwMCUgIDtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogRG9kZ2VyQmx1ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IERvZGdlckJsdWU7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCA4MiwgMTUwKTtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Do+Hyeon&amp;subset=korean\" rel=\"stylesheet\">\n\n<footer class=\"page-footer\">\n  <div class=\"footerb\">\n    <a href=\"https://www.hansung.ac.kr/web/www/home\"><button mat-raised-button color=\"DodgerBlue\" style=\" font-family: 'Do Hyeon', sans-serif;\">한성대홈</button></a>\n    <a href=\"https://www.hansung.ac.kr/web/www/cmty_01_01\"><button mat-raised-button color=\"DodgerBlue\" style=\" font-family: 'Do Hyeon', sans-serif;\">공지사항</button></a>\n    <a href=\"https://www.hansung.ac.kr/web/www/cmty_01_03\"><button mat-raised-button color=\"DodgerBlue\" style=\" font-family: 'Do Hyeon', sans-serif;\">학사공지</button></a>\n    <a href=\"https://www.facebook.com/hansungluv/\"><button mat-raised-button color=\"DodgerBlue\" style=\" font-family: 'Do Hyeon', sans-serif;\">페이스북</button></a>\n    <a href=\"https://www.hansung.ac.kr/web/www/cmty_03_01\"><button mat-raised-button color=\"DodgerBlue\" style=\" font-family: 'Do Hyeon', sans-serif;\">낙산메아리</button></a>\n  </div>\n</footer>"

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

module.exports = "\r\n\r\n/* .Container{\r\n    margin: auto;\r\n    text-align: center;\r\n    padding-top: 100px;\r\n    width: 200px;\r\n}\r\n.selection{\r\n    margin-top: 30px;\r\n    padding: 10px 10px 5px 40px; \r\n    border: 2px solid rgb(27, 101, 212);\r\n    background-color: rgb(27, 101, 212);\r\n    border-radius: 25px;\r\n    text-align: center;\r\n    color:white;\r\n    font-family: 'Gugi', cursive;\r\n    padding-right:35px;\r\n} */\r\n\r\n.masthead{\r\n  margin-top:100px;\r\n  padding-top: 50px;\r\n  padding-bottom: calc(10rem - 56px);\r\n  background-image: url(\"https://hansung.ac.kr/html/themes/organ_i/img/common/@visual.jpg\");\r\n  background-position: center;\r\n  background-size: cover;\r\n  /* background-size: 100%; */\r\n  opacity:0.8;\r\n  font-family:'Do Hyeon', sans-serif;\r\n  color:black;\r\n}\r\n\r\n.maincontainer{\r\n    position:fixed;\r\n    top:0;\r\n    width:100%  ;\r\n    height:80px;\r\n    text-align:center;\r\n    display:block;\r\n    background-color: white;\r\n    justify-content: space-around;\r\n    opacity: 0.7;\r\n}\r\n\r\n.mat-raised-button{\r\n    margin-left: 60px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    width: 120px;\r\n    line-height: 30px;\r\n    color: black;\r\n    font-size:20px;\r\n    background-color: white;\r\n}\r\n\r\n.mat-raised-button:hover{\r\n    background-color: rgb(205, 211, 218);\r\n    opacity: 0.9;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JJOztBQUVKO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsMEZBQTBGO0VBQzFGLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsWUFBWTtDQUNiOztBQUNEO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixhQUFhO0NBQ2hCOztBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHdCQUF3QjtDQUMzQjs7QUFDRDtJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLyogLkNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG4uc2VsZWN0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCA1cHggNDBweDsgXHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjcsIDEwMSwgMjEyKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgMTAxLCAyMTIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHdWdpJywgY3Vyc2l2ZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6MzVweDtcclxufSAqL1xyXG5cclxuLm1hc3RoZWFke1xyXG4gIG1hcmdpbi10b3A6MTAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IGNhbGMoMTByZW0gLSA1NnB4KTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2hhbnN1bmcuYWMua3IvaHRtbC90aGVtZXMvb3JnYW5faS9pbWcvY29tbW9uL0B2aXN1YWwuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC8qIGJhY2tncm91bmQtc2l6ZTogMTAwJTsgKi9cclxuICBvcGFjaXR5OjAuODtcclxuICBmb250LWZhbWlseTonRG8gSHllb24nLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5tYWluY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICB0b3A6MDtcclxuICAgIHdpZHRoOjEwMCUgIDtcclxuICAgIGhlaWdodDo4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG4ubWF0LXJhaXNlZC1idXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDUsIDIxMSwgMjE4KTtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/css?family=Gugi&amp;subset=korean\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/css?family=Do+Hyeon&amp;subset=korean\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/css?family=Noto+Sans+KR&amp;subset=korean\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/css?family=Roboto+Slab:700\" rel=\"stylesheet\">\n\n  <!-- <nav class=\"navbar navbar-expand-lg navbar-SlateGray bg-white fixed-top\" id=\"mainNav\" style=\" font-size:17px; font-family: 'Noto Sans KR', sans-serif;\" >\n    <div class=\"container\">\n      <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"/\" id=\"brand\" style=\"font-size:25px;\" > 한뮤니티</a>\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav ml-auto\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"https://www.hansung.ac.kr/web/www/home\">한성대홈</a>\n          <a class=\"nav-link js-scroll-trigger\" href=\"https://www.hansung.ac.kr/web/www/cmty_01_01\">공지사항</a>\n          <a class=\"nav-link js-scroll-trigger\" href=\"https://www.facebook.com/hansungluv/\">페이스북</a>                     \n          <a class=\"nav-link js-scroll-trigger\" href=\"https://www.hansung.ac.kr/web/www/life_01_01\">학사공지</a>                        \n          <a class=\"nav-link js-scroll-trigger\" href=\"https://www.hansung.ac.kr/web/www/cmty_03_01\">낙산의메아리</a> \n        </ul>\n      </div>\n    </div>\n  </nav>\n   -->\n<!-- <footer class=\"mainfooter\"> -->\n<div class=\"maincontainer\">\n  <button mat-raised-button routerLink=\"/study\">Study</button>\n  <button mat-raised-button routerLink=\"/question\">Q&A</button>\n  <button mat-raised-button routerLink=\"/together\">Together</button>\n  <button mat-raised-button routerLink=\"/petition\">Petition</button> \n</div>\n<!-- </footer> -->\n  \n<header class=\"masthead text-center text-black d-flex\">\n  <div class=\"container my-auto\">\n    <div class=\"row\">\n      <div class=\"col-lg-10 mx-auto\">\n        <h1 class=\"text-uppercase\">\n          <strong>WELCOME</strong>\n          <h2>한뮤니티는 한성인들의 새로운 커뮤니티 입니다</h2>\n        </h1>\n        <hr>\n      </div>\n      <div class=\"col-lg-8 mx-auto\">\n        <p class=\"text-faded mb-5\">스터디 모임, Q&A, 한성대 청원, 메신저를 이용하여 다른 학생들과 의견을 공유할 수 있습니다.</p>\n        <a class=\"btn btn-primary btn-xl js-scroll-trigger\" routerLink=\"/\">로그인 화면</a>\n      </div>\n    </div>\n  </div>\n</header>\n\n <!-- <div class=\"Container\">\n  <h1>한뮤니티</h1>\n  <mat-card-content><ul class=\"selection\" routerLink='/study'>한성스터디</ul></mat-card-content>\n  <mat-card-content><ul class=\"selection\" routerLink='/question'>한성지식</ul></mat-card-content>\n  <mat-card-content><ul class=\"selection\" routerLink='/together'>한성투게더</ul></mat-card-content>\n  <mat-card-content><ul class=\"selection\" routerLink='/petition'>한성청원</ul></mat-card-content>\n  <ul class=\"selection\" routerLink='/message'>테스트 페이지</ul>\n</div>  -->\n"

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

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".han{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.hanlogo{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto; \r\n    padding-top:80px;\r\n}\r\n.loginform{\r\n    font-family: 'Jua', sans-serif;\r\n    margin: auto;\r\n    padding-top: 20px;\r\n    background-color: white;\r\n    text-align: center;\r\n    width: 300px;\r\n    height: 330px;\r\n    -ms-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    -o-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n  \r\n}\r\ninput[type=text], input[type=password] {\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n}\r\nbutton {\r\n    background-color: rgba(187, 206, 224, 0.726);\r\n    color: black;\r\n    border-radius: 4px;\r\n    font-weight: 0.3px;\r\n    cursor: pointer;\r\n    font-family: 'Jua', sans-serif;\r\n}\r\nbutton:hover {\r\n    background-color: rgba(199, 213, 226, 0.829);\r\n}\r\n#inputs {\r\n    padding: 10px;\r\n}\r\n/* .ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; \r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; \r\n  } */\r\n.example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n.example-container > * {\r\n    width: 100%;\r\n  }\r\n.hantitle{\r\n    font-size:80px;\r\n    font-family: 'Jua', sans-serif;\r\n    color: DodgerBlue;\r\n    text-align:center;\r\n    text-shadow: 1px 1px grey;\r\n  }\r\n.hanti{\r\n    font-size:110px;\r\n    font-family: 'Jua', sans-serif;\r\n    color: #87CEFA;\r\n    text-align:center;\r\n    text-shadow: 1px 1px grey;\r\n}\r\n.hof{\r\n    margin-top: 30px;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksK0JBQStCO0lBQy9CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUdkLDZFQUE2RTtJQUM3RSw0RUFBNEU7SUFDNUUseUVBQXlFOztDQUU1RTtBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0ksNkNBQTZDO0lBQzdDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiwrQkFBK0I7Q0FDbEM7QUFFRDtJQUNJLDZDQUE2QztDQUNoRDtBQUVEO0lBQ0ksY0FBYztDQUNqQjtBQUNEOzs7Ozs7TUFNTTtBQUVKO0lBQ0UsY0FBYztJQUNkLHVCQUF1QjtHQUN4QjtBQUVEO0lBQ0UsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsMEJBQTBCO0dBQzNCO0FBQ0g7SUFDSSxnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYW57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5oYW5sb2dve1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXHJcbiAgICBwYWRkaW5nLXRvcDo4MHB4O1xyXG59XHJcbi5sb2dpbmZvcm17XHJcbiAgICBmb250LWZhbWlseTogJ0p1YScsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMzBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcbiAgICAtbXMtYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG4gICAgLW8tYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG4gIFxyXG59XHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMjA2LCAyMjQsIDAuNzI2KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAwLjNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnSnVhJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk5LCAyMTMsIDIyNiwgMC44MjkpO1xyXG59XHJcblxyXG4jaW5wdXRzIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLyogLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IFxyXG4gIH1cclxuICBcclxuICAubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgXHJcbiAgfSAqL1xyXG5cclxuICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5oYW50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTo4MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdKdWEnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IERvZGdlckJsdWU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IGdyZXk7XHJcbiAgfVxyXG4uaGFudGl7XHJcbiAgICBmb250LXNpemU6MTEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0p1YScsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzg3Q0VGQTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggZ3JleTtcclxufVxyXG4uaG9me1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<img class=\"hanlogo\" style=\"width:300px\" src=\"https://postfiles.pstatic.net/MjAxODExMTNfMTEg/MDAxNTQyMDk4MTI5NTUy.NN8HAtqZOfzp4h1MK-2GfxjbsdLTO1PeRlskR3GEIvAg.DNbEib8Dg0xsGoP0gixah8kdGipBJEKU9v_5UGEIsysg.PNG.poluro/hanmu.PNG?type=w773\" >-->\n<!-- <img class=\"han\" src=\"https://postfiles.pstatic.net/MjAxODExMThfNTIg/MDAxNTQyNTM0NTY1MTU2.1QIr8qwkVXsY6nPsRoco9ESAHiLb-KOsbQm7YhEZfBkg.UXuhXq9MtX4T4ZkcjpHNSceKqzI5VXD_dNcnHG0e-WEg.PNG.poluro/hanlogo.PNG?type=w773\"> -->\n<link href=\"https://fonts.googleapis.com/css?family=Jua&amp;subset=korean\" rel=\"stylesheet\">\n<div class=\"hof\">\n    <h1 class=\"hanti\">한뮤니티</h1>\n</div>\n\n<div class=\"loginform\">\n  <div><h5>LOGIN</h5>\n    <form (submit)=\"onLoginSubmit()\">\n      <div id=\"inputs\">\n        <label> 아이디 : </label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n      </div>\n      <div id=\"inputs\">\n        <label> 비밀번호 : </label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n      </div>\n      <div id=\"inputs\">\n        <button id=\"bigbutton\" type=\"submit\" value=\"Login\"> 로그인 </button>\n      </div>\n      <div id=\"inputs\">\n        <button id=\"otherbutton\" [routerLink]=\"['/register']\"> 회원가입 </button>\n        <button id=\"otherbutton\" [routerLink]=\"['/find']\"> ID/PW 찾기 </button>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        // console.log(this.username);
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['home']);
            }
            else {
                window.alert("로그인 정보가 올바르지 않습니다.");
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/message/message.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/message/message.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Container{\r\n    text-align: center;\r\n    /* padding-top: 120px; */\r\n}\r\n.maincontainer{\r\n    position:fixed;\r\n    top:0;\r\n    width:100%  ;\r\n    height:80px;\r\n    text-align:center;\r\n    display:block;\r\n    background-color: white;\r\n    justify-content: space-around;\r\n    opacity: 0.7;\r\n}\r\n.mat-raised-button{\r\n    margin-left: 60px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    width: 120px;\r\n    line-height: 30px;\r\n    color: black;\r\n    font-size:20px;\r\n    background-color: white;\r\n}\r\n.mat-raised-button:hover{\r\n    background-color: rgb(205, 211, 218);\r\n    opacity: 0.9;\r\n}\r\n.message{\r\n    text-align: center;\r\n    padding-top: 80px;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 160px;\r\n    border-bottom: 3px solid green;\r\n}\r\n#messages {\r\n    border-radius: 5px;\r\n    border: 1px solid black;\r\n    margin: 10px;\r\n    padding: 10px;\r\n    font-size: 12px;\r\n    background-color: white;\r\n    height: 400px;\r\n    overflow-y: scroll;\r\n}\r\ninput[type=text] {\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    width: 350px;\r\n}\r\n#written {\r\n    border-radius: 10px;\r\n    border: 1px solid black;\r\n    background-color: white;\r\n    margin: 10px;\r\n    padding: 10px;\r\n    font-size: 12px;\r\n}\r\n#mine {\r\n    background-color: aqua;\r\n    border-radius: 10px;\r\n    margin: 10px;\r\n    padding: 10px;\r\n    font-size: 12px;\r\n    width: 400px;\r\n    float: right;\r\n}\r\n#notMine {\r\n    background-color: dodgerblue;\r\n    border-radius: 10px;\r\n    margin: 10px;\r\n    padding: 10px;\r\n    font-size: 12px;\r\n    width: 400px;\r\n    float: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHdCQUF3QjtDQUMzQjtBQUNEO0lBQ0kscUNBQXFDO0lBQ3JDLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLCtCQUErQjtDQUNsQztBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsY0FBYztJQUNkLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Db250YWluZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvKiBwYWRkaW5nLXRvcDogMTIwcHg7ICovXHJcbn1cclxuLm1haW5jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgd2lkdGg6MTAwJSAgO1xyXG4gICAgaGVpZ2h0OjgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNSwgMjExLCAyMTgpO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59XHJcbi5tZXNzYWdle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0RvIEh5ZW9uJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyZWVuO1xyXG59XHJcbiNtZXNzYWdlcyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG59XHJcbiN3cml0dGVuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4jbWluZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuI25vdE1pbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/message/message.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/message/message.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"maincontainer\">\n    <button mat-raised-button routerLink=\"/home\">Home</button>\n    <button mat-raised-button routerLink=\"/study\">Study</button>\n    <button mat-raised-button routerLink=\"/question\">Q&A</button>\n    <button mat-raised-button routerLink=\"/together\">Together</button>\n    <button mat-raised-button routerLink=\"/petition\">Petition</button> \n  </div>\n  <h1 class=\"message\">한성투게더</h1>\n  <div class=\"Container\">\n  <div class=\"noticeBorder\">\n    <div id=\"messages\" #scrollMe>\n      <div *ngFor=\"let list of message\">\n        <div id=\"mine\" *ngIf=\"isMine(list.writer, user.name)\">\n          {{list.writer}} : {{list.content}}<br>{{list.time}}\n        </div>\n        <div id=\"notMine\" *ngIf=\"!isMine(list.writer, user.name)\">\n          {{list.writer}} : {{list.content}}<br>{{list.time}}\n        </div>\n      </div>\n    </div>\n    <div>\n      <form (submit)=\"sendMessage(user.name)\">\n        <span id=\"inputs\">\n          <input type=\"text\" [(ngModel)]=\"content\" name=\"content\">\n        </span>\n        <span id=\"inputs\">\n          <button id=\"bigbutton\" type=\"submit\" value=\"Submit\"> send </button>\n        </span>\n        <span>\n          <button id=\"bigbutton\" routerLink=\"/together\"> Back </button>\n        </span>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/message/message.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/message/message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_temp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/temp.service */ "./src/app/services/temp.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessageComponent = /** @class */ (function () {
    function MessageComponent(validateService, authService, tempService, flashMessage, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.tempService = tempService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.intv = true;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.roomId = this.tempService.getObj();
        this.refreshMessage();
        this.scrollToBottom();
        rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__["Observable"].interval(500).takeWhile(function () { return _this.intv; }).subscribe(function () { return _this.refreshMessage(); });
    };
    MessageComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    MessageComponent.prototype.ngOnDestroy = function () {
        this.intv = false;
    };
    MessageComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    MessageComponent.prototype.sendMessage = function (u) {
        var _this = this;
        var send = {
            index: this.roomId,
            writer: u,
            content: this.content
        };
        this.authService.sendMessage(send).subscribe(function (data) {
            if (data.success) {
                _this.refreshMessage();
            }
        });
    };
    MessageComponent.prototype.refreshMessage = function () {
        var _this = this;
        var search = {
            id: this.roomId
        };
        this.authService.getMessage(search).subscribe(function (list) {
            _this.message = list.message;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    MessageComponent.prototype.isMine = function (m, u) {
        if (m == u)
            return true;
        else
            return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollMe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MessageComponent.prototype, "myScrollContainer", void 0);
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/components/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/components/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_temp_service__WEBPACK_IMPORTED_MODULE_3__["TempService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mainNav{\r\n    background-color: rgba(20, 162, 228, 0.397);\r\n    font-family: 'Gugi', cursive;\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0Q0FBNEM7SUFDNUMsNkJBQTZCO0dBQzlCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbk5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDE2MiwgMjI4LCAwLjM5Nyk7XHJcbiAgICBmb250LWZhbWlseTogJ0d1Z2knLCBjdXJzaXZlO1xyXG4gIH1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<link href=\"https://fonts.googleapis.com/css?family=Noto+Sans+KR&amp;subset=korean\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/css?family=Jua&amp;subset=korean\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/css?family=Gugi&amp;subset=korean\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/css?family=Do+Hyeon&amp;subset=korean\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/css?family=Noto+Sans+KR&amp;subset=korean\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding:700&amp;subset=korean\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/earlyaccess/notosanskr.css\">\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-SlateGray fixed-top\" id=\"mainNav\" style=\" font-size:17px; font-family: 'Noto Sans KR', sans-serif;\" >\n  <div class=\"container\">\n    <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"/\" id=\"brand\" style=\"font-size:25px;\" > 한뮤니티</a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <a class=\"nav-link js-scroll-trigger\" href=\"https://www.hansung.ac.kr/web/www/home\">한성대홈</a>\n        <a class=\"nav-link js-scroll-trigger\" href=\"https://www.hansung.ac.kr/web/www/cmty_01_01\">공지사항</a>\n        <a class=\"nav-link js-scroll-trigger\" href=\"https://www.facebook.com/hansungluv/\">페이스북</a>                     \n        <a class=\"nav-link js-scroll-trigger\" href=\"https://www.hansung.ac.kr/web/www/life_01_01\">학사공지</a>                        \n        <a class=\"nav-link js-scroll-trigger\" href=\"https://www.hansung.ac.kr/web/www/cmty_03_01\">낙산의메아리</a> \n      </ul>\n    </div>\n  </div>\n</nav>\n\n\n\n\n<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>\n</body>"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.showFlashMessage({
            messages: ['You are logged out'],
            type: 'success',
            timeout: 3000
        });
        this.router.navigate(['login']);
        return false;
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/petition/petition.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/petition/petition.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Container{\r\n    text-align: center;\r\n    padding-top: 80px;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    width: 160px;\r\n    border-bottom: 3px solid green;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.maincontainer{\r\n    position:fixed;\r\n    top:0;\r\n    width:100%  ;\r\n    height:80px;\r\n    text-align:center;\r\n    display:block;\r\n    background-color: white;\r\n    justify-content: space-around;\r\n    opacity: 0.7;\r\n}\r\n.mat-raised-button{\r\n    margin-left: 60px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    width: 120px;\r\n    line-height: 30px;\r\n    color: black;\r\n    font-size:20px;\r\n    background-color: white;\r\n}\r\n.mat-raised-button:hover{\r\n    background-color: rgb(205, 211, 218);\r\n    opacity: 0.9;\r\n}\r\n#written {\r\n    /* border-radius: 10px; */\r\n    border-top: 1.5px solid grey;\r\n    /* border-bottom: 0.5px solid grey; */\r\n    background-color: white;\r\n    box-shadow: 0px 0px 1px 0px grey;\r\n    margin: 10px;\r\n    padding: 10px;\r\n    font-size: 15px;\r\n}\r\nfooter {\r\n    margin: 10px;\r\n    padding: 10px;\r\n    text-align: center;\r\n    font-family: 'Gugi', cursive;\r\n    color: aliceblue;\r\n}\r\nspan {\r\n    cursor: pointer;\r\n}\r\n#currentPage {\r\n    color: black;\r\n}\r\n#ss{\r\n    margin-right: 10px;\r\n}\r\ntable {\r\n    width: 100%;\r\n  }\r\n.nn{\r\n    color:black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXRpdGlvbi9wZXRpdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLHNDQUFzQztJQUN0Qyx3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksWUFBWTtHQUNiO0FBQ0g7SUFDSSxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BldGl0aW9uL3BldGl0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQ29udGFpbmVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0RvIEh5ZW9uJywgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBncmVlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5tYWluY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICB0b3A6MDtcclxuICAgIHdpZHRoOjEwMCUgIDtcclxuICAgIGhlaWdodDo4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG4ubWF0LXJhaXNlZC1idXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDUsIDIxMSwgMjE4KTtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufVxyXG4jd3JpdHRlbiB7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xyXG4gICAgYm9yZGVyLXRvcDogMS41cHggc29saWQgZ3JleTtcclxuICAgIC8qIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIGdyZXk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDBweCBncmV5O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5mb290ZXIge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnR3VnaScsIGN1cnNpdmU7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG59XHJcbnNwYW4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiNjdXJyZW50UGFnZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuI3Nze1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuLm5ue1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/petition/petition.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/petition/petition.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/css?family=Do+Hyeon&amp;subset=korean\" rel=\"stylesheet\">\n<div class=\"maincontainer\">\n    <button mat-raised-button routerLink=\"/home\">Home</button>\n    <button mat-raised-button routerLink=\"/study\">Study</button>\n    <button mat-raised-button routerLink=\"/question\">Q&A</button>\n    <button mat-raised-button routerLink=\"/together\">Together</button>\n    <button mat-raised-button routerLink=\"/petition\">Petition</button> \n  </div>\n\n<h1 class=\"Container\"  >한성청원</h1>\n\n      <div class=\"noticeBorder\">\n          <button mat-button routerLink=\"/writePetition\">글쓰기</button>\n      <div *ngIf=\"petition && !one\">\n        <div *ngFor=\"let list of petition; let i=index\">\n          <div id=\"written\" (click)=\"showOne(i, list._id, list.max)\" *ngIf=\"pageCheck(i)\">{{list.title}}<br>{{list.date}}</div>\n        </div>\n      </div>\n      <div *ngIf=\"petition && one\">\n        <div id=\"written\">\n          제목 : {{petitionOne.title}}<br>내용 : {{petitionOne.content}}<br>청원 수 : {{num}} / {{petitionOne.max}}<br>\n          <span *ngIf=\"num>=petitionOne.max\">목표 청원 수를 달성한 글입니다. </span>\n          <span *ngIf=\"clicked&&num<petitionOne.max\">이미 클릭하셨습니다. </span>\n          <button id=\"bigbutton\" (click)=\"upCheck(user._id)\" *ngIf=\"!clicked&&num<petitionOne.max\"><img src=\"https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color/700/01_arrow_up-512.png\" width=\"30px\" height=\"30px\"></button>\n          <!--<button id=\"bigbutton\" disabled *ngIf=\"num>=numMax\"><img src=\"https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color/700/01_arrow_up-512.png\" width=\"30px\" height=\"30px\"></button>-->\n        </div>\n      </div>\n    <footer *ngIf=\"petition && !one\">\n      <form (submit)=\"searchPetition()\">\n        <label id=\"ss\" for=\"name\"> 검색 </label>\n        <input type=\"text\" [(ngModel)]=\"search\" name=\"search\">\n        <button type=\"submit\" value=\"Search\"><img src=\"https://png.pngtree.com/element_pic/17/03/24/61e7397810c48656dfa148fdd66d229d.jpg\" width=\"30px\" height=\"30px\"></button>\n      </form>\n      <span class=\"nn\" (click)=\"changePage(-1)\">◀</span>\n      <span *ngFor=\"let num of pageIndex\">\n        <span class=\"nn\" *ngIf=\"num!=pageNum\" (click)=\"changePage(num)\"> {{num}} </span>\n        <span class=\"nn\" *ngIf=\"num==pageNum\" id=\"currentPage\"> {{num}} </span>\n      </span>\n      <span class=\"nn\" (click)=\"changePage(0)\">▶</span>\n    </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/components/petition/petition.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/petition/petition.component.ts ***!
  \***********************************************************/
/*! exports provided: PetitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetitionComponent", function() { return PetitionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_temp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/temp.service */ "./src/app/services/temp.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PetitionComponent = /** @class */ (function () {
    //numMax = 20;
    function PetitionComponent(authService, tempService, flashMessage, router) {
        this.authService = authService;
        this.tempService = tempService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.clicked = false;
    }
    PetitionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page = 3;
        this.pageNum = 1;
        this.one = false;
        this.refreshPetition();
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    PetitionComponent.prototype.showOne = function (i, id, max) {
        this.one = true;
        this.petitionOne = this.petition[i];
        this.petitionId = id;
        //this.numMax = max;
        this.refreshClicked();
    };
    PetitionComponent.prototype.searchPetition = function () {
        var _this = this;
        var search = {
            keyword: this.search,
            board: 4
        };
        this.authService.search(search).subscribe(function (petitionList) {
            _this.petition = petitionList.petition;
            _this.pageLengthCalculate();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    PetitionComponent.prototype.changePage = function (i) {
        if ((i == -1) && (this.pageNum > 1))
            this.pageNum--;
        else if ((i == 0) && (this.pageNum < this.pageIndex.length))
            this.pageNum++;
        else if (i > 0)
            this.pageNum = i;
    };
    PetitionComponent.prototype.pageCheck = function (i) {
        i -= ((this.page) * (this.pageNum - 1));
        if (i >= 0 && i < this.page)
            return true;
        else
            return false;
    };
    PetitionComponent.prototype.pageLengthCalculate = function () {
        var len = Object.keys(this.petition).length;
        var a = len / this.page;
        var n = Math.floor(a);
        if ((a - n) > 0 || a == 0)
            n += 1;
        this.pageIndex = [];
        for (var i = 0; i < n; i++) {
            this.pageIndex.push(i + 1);
        }
    };
    PetitionComponent.prototype.refreshPetition = function () {
        var _this = this;
        this.authService.getPetition().subscribe(function (petitionList) {
            _this.petition = petitionList.petition;
            _this.pageLengthCalculate();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    PetitionComponent.prototype.refreshClicked = function () {
        var _this = this;
        var search = {
            id: this.petitionId
        };
        this.authService.getPetitionClick(search).subscribe(function (list) {
            _this.petitionClick = list.petitionClick;
            _this.num = Object.keys(_this.petitionClick).length;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    PetitionComponent.prototype.upCheck = function (u) {
        var _this = this;
        var check;
        var search = {
            index: this.petitionId,
            anonymous: u
        };
        this.authService.checkPetitionClick(search).subscribe(function (list) {
            _this.checkClick = list.checkClick;
            check = Object.keys(_this.checkClick).length;
            if (check < 1)
                _this.up(u);
            else
                _this.clicked = true;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    PetitionComponent.prototype.up = function (u) {
        var _this = this;
        var clicked = {
            index: this.petitionId,
            anonymous: u
        };
        this.authService.upPetition(clicked).subscribe(function (data) {
            if (data.success) {
                _this.refreshClicked();
            }
        });
    };
    PetitionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-petition',
            template: __webpack_require__(/*! ./petition.component.html */ "./src/app/components/petition/petition.component.html"),
            styles: [__webpack_require__(/*! ./petition.component.css */ "./src/app/components/petition/petition.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_temp_service__WEBPACK_IMPORTED_MODULE_2__["TempService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PetitionComponent);
    return PetitionComponent;
}());



/***/ }),

/***/ "./src/app/components/question/question.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/question/question.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Container{\r\n    text-align: center;\r\n    padding-top: 80px;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    width: 160px;\r\n    border-bottom: 3px solid green;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.maincontainer{\r\n    position:fixed;\r\n    top:0;\r\n    width:100%  ;\r\n    height:80px;\r\n    text-align:center;\r\n    display:block;\r\n    background-color: white;\r\n    justify-content: space-around;\r\n    opacity: 0.7;\r\n}\r\n.mat-raised-button{\r\n    margin-left: 60px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    width: 120px;\r\n    line-height: 30px;\r\n    color: black;\r\n    font-size:20px;\r\n    background-color: white;\r\n}\r\n.mat-raised-button:hover{\r\n    background-color: rgb(205, 211, 218);\r\n    opacity: 0.9;\r\n}\r\n.mat-button{\r\n    right: 0px;\r\n}\r\n#written {\r\n    /* border-radius: 10px; */\r\n    border-top: 1.5px solid grey;\r\n    /* border-bottom: 0.5px solid grey; */\r\n    background-color: white;\r\n    box-shadow: 0px 0px 1px 0px grey;\r\n    margin: 10px;\r\n    padding: 10px;\r\n    font-size: 15px;\r\n}\r\nfooter {\r\n    margin: 10px;\r\n    padding: 10px;\r\n    text-align: center;\r\n    font-family: 'Gugi', cursive;\r\n    color: aliceblue;\r\n}\r\nspan {\r\n    cursor: pointer;\r\n}\r\n#currentPage {\r\n    color: black;\r\n}\r\n#ss{\r\n    margin-right: 10px;\r\n}\r\ntable {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxXQUFXO0NBQ2Q7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0Isc0NBQXNDO0lBQ3RDLHdCQUF3QjtJQUN4QixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0dBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQ29udGFpbmVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0RvIEh5ZW9uJywgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBncmVlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5tYWluY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICB0b3A6MDtcclxuICAgIHdpZHRoOjEwMCUgIDtcclxuICAgIGhlaWdodDo4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG4ubWF0LXJhaXNlZC1idXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDUsIDIxMSwgMjE4KTtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufVxyXG4ubWF0LWJ1dHRvbntcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbiN3cml0dGVuIHtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXHJcbiAgICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCBncmV5O1xyXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgZ3JleTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMHB4IGdyZXk7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbmZvb3RlciB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHdWdpJywgY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuc3BhbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2N1cnJlbnRQYWdlIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4jc3N7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/question/question.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/question/question.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n<div class=\"maincontainer\">\n    <button mat-raised-button routerLink=\"/home\">Home</button>\n    <button mat-raised-button routerLink=\"/study\">Study</button>\n    <button mat-raised-button routerLink=\"/question\">Q&A</button>\n    <button mat-raised-button routerLink=\"/together\">Together</button>\n    <button mat-raised-button routerLink=\"/petition\">Petition</button> \n  </div>\n  \n  <h1 class=\"Container\">한성지식</h1>\n  <div class=\"noticeBorder\">\n      <button mat-button routerLink=\"/writeQuestion\">글쓰기</button>\n    <div *ngIf=\"question && !one\">\n      <div *ngFor=\"let list of question; let i=index\">\n        <div id=\"written\" (click)=\"showOne(i, list._id)\" *ngIf=\"pageCheck(i)\">{{list.title}}<br>{{list.writer}} {{list.date}}</div>\n      </div>\n    </div>\n\n    <div *ngIf=\"question && one\">\n      <div id=\"written\">\n        제목 : {{questionOne.title}}<br>작성자 : {{questionOne.writer}}<br>내용 : {{questionOne.content}}<br>\n        <span *ngIf=\"questionOne.writer==user.name\">\n          <button id=\"bigbutton\" (click)=\"update()\" > 수정 </button>\n          <button id=\"bigbutton\" (click)=\"delete(questionOne._id)\"> 삭제 </button>\n        </span>\n      </div>\n      <div class=\"container\">\n        <hr/>\n        <div class=\"form-group\">\n            <h2>Leave a Reply</h2>\n            <form (submit)=\"submitComment(user.name)\">\n                <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"content\" name=\"content\" placeholder=\"Your Comment\"></textarea><br/>\n                <button class=\"btn btn-success btn-md pull-right\" type=\"submit\" value=\"Submit\">Comment</button><br/>\n                <hr/>\n                <h3>Comments</h3>\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\" *ngFor=\"let list of comment\"> {{list.writer}} : {{list.content}}<br> {{list.date}}\n                        <a><span class=\"glyphicon glyphicon-trash\" style=\"color:red; float:right;\" *ngIf=\"list.writer==user.name\" (click)=\"deleteComment(list._id)\"> X </span></a>\n                    </li>\n                </ul>\n            </form> \n        </div>\n      </div>\n    </div>\n\n  <footer *ngIf=\"question && !one\">\n    <form (submit)=\"searchQuestion()\">\n      <label id=\"ss\" for=\"name\"> 검색 </label>\n      <input type=\"text\" [(ngModel)]=\"search\" name=\"search\">\n      <button type=\"submit\" value=\"Search\"><img src=\"https://png.pngtree.com/element_pic/17/03/24/61e7397810c48656dfa148fdd66d229d.jpg\" width=\"30px\" height=\"30px\"></button>\n    </form>\n    <span class=\"nn\"(click)=\"changePage(-1)\">◀</span>\n    <span *ngFor=\"let num of pageIndex\">\n      <span class=\"nn\" *ngIf=\"num!=pageNum\" (click)=\"changePage(num)\"> {{num}} </span>\n      <span class=\"nn\"*ngIf=\"num==pageNum\" id=\"currentPage\"> {{num}} </span>\n    </span>\n    <span class=\"nn\" (click)=\"changePage(0)\">▶</span>\n  </footer>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/question/question.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/question/question.component.ts ***!
  \***********************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_temp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/temp.service */ "./src/app/services/temp.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(authService, tempService, flashMessage, router) {
        this.authService = authService;
        this.tempService = tempService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page = 3;
        this.pageNum = 1;
        this.one = false;
        this.refreshQuestion();
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    QuestionComponent.prototype.showOne = function (i, id) {
        this.one = true;
        this.questionOne = this.question[i];
        this.questionId = id;
        this.refreshComment();
    };
    QuestionComponent.prototype.searchQuestion = function () {
        var _this = this;
        var search = {
            keyword: this.search,
            board: 2
        };
        this.authService.search(search).subscribe(function (questionList) {
            _this.question = questionList.question;
            _this.pageLengthCalculate();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    QuestionComponent.prototype.changePage = function (i) {
        if ((i == -1) && (this.pageNum > 1))
            this.pageNum--;
        else if ((i == 0) && (this.pageNum < this.pageIndex.length))
            this.pageNum++;
        else if (i > 0)
            this.pageNum = i;
    };
    QuestionComponent.prototype.pageCheck = function (i) {
        i -= ((this.page) * (this.pageNum - 1));
        if (i >= 0 && i < this.page)
            return true;
        else
            return false;
    };
    QuestionComponent.prototype.pageLengthCalculate = function () {
        var len = Object.keys(this.question).length;
        var a = len / this.page;
        var n = Math.floor(a);
        if ((a - n) > 0 || a == 0)
            n += 1;
        this.pageIndex = [];
        for (var i = 0; i < n; i++) {
            this.pageIndex.push(i + 1);
        }
    };
    QuestionComponent.prototype.submitComment = function (u) {
        var _this = this;
        //var w = u;
        var comment = {
            index: this.questionId,
            writer: u,
            content: this.content
        };
        this.authService.writeComment(comment).subscribe(function (data) {
            if (data.success) {
                _this.refreshComment();
            }
        });
    };
    QuestionComponent.prototype.refreshComment = function () {
        var _this = this;
        var search = {
            id: this.questionId
        };
        this.authService.getComment(search).subscribe(function (list) {
            _this.comment = list.comment;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    QuestionComponent.prototype.refreshQuestion = function () {
        var _this = this;
        this.authService.getQuestion().subscribe(function (questionList) {
            _this.question = questionList.question;
            _this.pageLengthCalculate();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    QuestionComponent.prototype.deleteComment = function (del) {
        var _this = this;
        this.del = del;
        var search = {
            id: this.del
        };
        this.authService.deleteComment(search).subscribe(function (data) {
            if (data.success) {
                _this.refreshComment();
            }
        });
    };
    QuestionComponent.prototype.delete = function (del) {
        var _this = this;
        this.del = del;
        var search = {
            id: this.del
        };
        this.authService.deleteQuestion(search).subscribe(function (data) {
            if (data.success) {
                _this.refreshQuestion();
                _this.one = false;
            }
        });
    };
    QuestionComponent.prototype.update = function () {
        this.tempService.insertObj(this.questionId);
        this.router.navigate(['/writeQuestion']);
    };
    QuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/components/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/components/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_temp_service__WEBPACK_IMPORTED_MODULE_2__["TempService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".han{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.hanlogo{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto; \r\n    padding-top:80px;\r\n}\r\n.loginform{\r\n    font-family: 'Jua', sans-serif;\r\n    margin: auto;\r\n    padding-top: 20px;\r\n    background-color: white;\r\n    text-align: center;\r\n    width: 300px;\r\n    height: 580px;\r\n    -ms-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    -o-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n  \r\n}\r\ninput[type=text], input[type=password] {\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n}\r\nbutton {\r\n    background-color: rgba(187, 206, 224, 0.726);\r\n    color: black;\r\n    border-radius: 4px;\r\n    font-weight: 0.3px;\r\n    cursor: pointer;\r\n    font-family: 'Jua', sans-serif;\r\n}\r\nbutton:hover {\r\n    background-color: rgba(199, 213, 226, 0.829);\r\n}\r\n#inputs {\r\n    padding: 10px;\r\n}\r\n/* .ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; \r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; \r\n  } */\r\n.example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n.example-container > * {\r\n    width: 100%;\r\n  }\r\n.hantitle{\r\n    font-size:80px;\r\n    font-family: 'Jua', sans-serif;\r\n    color: DodgerBlue;\r\n    text-align:center;\r\n    text-shadow: 1px 1px grey;\r\n  }\r\n.hanti{\r\n    font-size:110px;\r\n    font-family: 'Jua', sans-serif;\r\n    color: #87CEFA;\r\n    text-align:center;\r\n    text-shadow: 1px 1px grey;\r\n}\r\n.hof{\r\n    margin-top: 30px;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksK0JBQStCO0lBQy9CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUdkLDZFQUE2RTtJQUM3RSw0RUFBNEU7SUFDNUUseUVBQXlFOztDQUU1RTtBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0ksNkNBQTZDO0lBQzdDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiwrQkFBK0I7Q0FDbEM7QUFFRDtJQUNJLDZDQUE2QztDQUNoRDtBQUVEO0lBQ0ksY0FBYztDQUNqQjtBQUNEOzs7Ozs7TUFNTTtBQUVKO0lBQ0UsY0FBYztJQUNkLHVCQUF1QjtHQUN4QjtBQUVEO0lBQ0UsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsMEJBQTBCO0dBQzNCO0FBQ0g7SUFDSSxnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYW57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5oYW5sb2dve1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXHJcbiAgICBwYWRkaW5nLXRvcDo4MHB4O1xyXG59XHJcbi5sb2dpbmZvcm17XHJcbiAgICBmb250LWZhbWlseTogJ0p1YScsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA1ODBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcbiAgICAtbXMtYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG4gICAgLW8tYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG4gIFxyXG59XHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMjA2LCAyMjQsIDAuNzI2KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAwLjNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnSnVhJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk5LCAyMTMsIDIyNiwgMC44MjkpO1xyXG59XHJcblxyXG4jaW5wdXRzIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLyogLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IFxyXG4gIH1cclxuICBcclxuICAubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgXHJcbiAgfSAqL1xyXG5cclxuICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5oYW50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTo4MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdKdWEnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IERvZGdlckJsdWU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IGdyZXk7XHJcbiAgfVxyXG4uaGFudGl7XHJcbiAgICBmb250LXNpemU6MTEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0p1YScsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzg3Q0VGQTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggZ3JleTtcclxufVxyXG4uaG9me1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Jua&amp;subset=korean\" rel=\"stylesheet\">\n<div class=\"hof\">\n    <h1 class=\"hanti\">한뮤니티</h1>\n</div>\n\n<div class=\"loginform\">\n  <div><h5>REGISTER</h5>\n    <form (submit)=\"onRegisterSubmit()\">\n      <div id=\"inputs\">\n        <label> 아이디 : </label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n      </div>\n      <div id=\"inputs\">\n        <label> 비밀번호 : </label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n      </div>\n      <div id=\"inputs\">\n          <label> 이름 : </label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\">\n      </div>\n      <div id=\"inputs\">\n          <label> 이메일 : </label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n      </div>\n      <div id=\"inputs\">\n        <button id=\"bigbutton\" type=\"submit\" value=\"Submit\"> 회원가입 </button>\n      </div>\n      <div id=\"inputs\">\n        <button id=\"bigbutton\" [routerLink]=\"['/login']\"> 돌아가기 </button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            window.alert("빠진 부분 없이 입력하세요");
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            window.alert("유효하지 않은 이메일입니다.");
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                window.alert("회원가입이 성공적으로 이루어졌습니다.");
                _this.router.navigate(['/']);
            }
            else {
                window.alert(data.msg);
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/study/study.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/study/study.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Container{\r\n    text-align: center;\r\n    padding-top: 80px;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    width: 160px;\r\n    border-bottom: 3px solid green;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.maincontainer{\r\n    position:fixed;\r\n    top:0;\r\n    width:100%  ;\r\n    height:80px;\r\n    text-align:center;\r\n    display:block;\r\n    background-color: white;\r\n    justify-content: space-around;\r\n    opacity: 0.7;\r\n}\r\n.mat-raised-button{\r\n    margin-left: 60px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    width: 120px;\r\n    line-height: 30px;\r\n    color: black;\r\n    font-size:20px;\r\n    background-color: white;\r\n}\r\n.mat-raised-button:hover{\r\n    background-color: rgb(205, 211, 218);\r\n    opacity: 0.9;\r\n}\r\n.mat-button{\r\n    right: 0px;\r\n}\r\n#written {\r\n    /* border-radius: 10px; */\r\n    border-top: 1.5px solid grey;\r\n    /* border-bottom: 0.5px solid grey; */\r\n    background-color: white;\r\n    box-shadow: 0px 0px 1px 0px grey;\r\n    margin: 10px;\r\n    padding: 10px;\r\n    font-size: 15px;\r\n}\r\nfooter {\r\n    margin: 10px;\r\n    padding: 10px;\r\n    text-align: center;\r\n    font-family: 'Gugi', cursive;\r\n    color: aliceblue;\r\n}\r\nspan {\r\n    cursor: pointer;\r\n}\r\n#currentPage {\r\n    color: black;\r\n}\r\n#ss{\r\n    margin-right: 10px;\r\n}\r\ntable {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdHVkeS9zdHVkeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxXQUFXO0NBQ2Q7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0Isc0NBQXNDO0lBQ3RDLHdCQUF3QjtJQUN4QixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0dBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0dWR5L3N0dWR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQ29udGFpbmVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0RvIEh5ZW9uJywgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBncmVlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5tYWluY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICB0b3A6MDtcclxuICAgIHdpZHRoOjEwMCUgIDtcclxuICAgIGhlaWdodDo4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG4ubWF0LXJhaXNlZC1idXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDUsIDIxMSwgMjE4KTtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufVxyXG4ubWF0LWJ1dHRvbntcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbiN3cml0dGVuIHtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXHJcbiAgICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCBncmV5O1xyXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgZ3JleTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMHB4IGdyZXk7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbmZvb3RlciB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHdWdpJywgY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuc3BhbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2N1cnJlbnRQYWdlIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4jc3N7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/study/study.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/study/study.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n<div class=\"maincontainer\">\n  <button mat-raised-button routerLink=\"/home\">Home</button>\n  <button mat-raised-button routerLink=\"/study\">Study</button>\n  <button mat-raised-button routerLink=\"/question\">Q&A</button>\n  <button mat-raised-button routerLink=\"/together\">Together</button>\n  <button mat-raised-button routerLink=\"/petition\">Petition</button> \n</div>\n  \n  <h1 class=\"Container\">한성스터디</h1>\n    \n      <div class=\"noticeBorder\">\n        <button mat-button routerLink=\"/writeStudy\">글쓰기</button>\n      <div *ngIf=\"study && !one\">\n        <div *ngFor=\"let list of study; let i=index\">\n          <div id=\"written\" (click)=\"showOne(i, list._id)\" *ngIf=\"pageCheck(i)\">{{list.title}}<br>{{list.writer}} {{list.date}}</div>\n        </div>\n      </div>\n      <div *ngIf=\"study && one\">\n        <div id=\"written\">\n          제목 : {{studyOne.title}}<br>작성자 : {{studyOne.writer}}<br>내용 : {{studyOne.content}}<br>\n          <span *ngIf=\"studyOne.writer==user.name\">\n            <button id=\"bigbutton\" (click)=\"update()\" > 수정 </button>\n            <button id=\"bigbutton\" (click)=\"delete(studyOne._id)\"> 삭제 </button>\n          </span>\n        </div>\n        <div class=\"container\">\n          <hr/>\n          <div class=\"form-group\">\n              <h2>Leave a Reply</h2>\n              <form (submit)=\"submitComment(user.name)\">\n                  <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"content\" name=\"content\" placeholder=\"Your Comment\"></textarea><br/>\n                  <button class=\"btn btn-success btn-md pull-right\" type=\"submit\" value=\"Submit\">Comment</button><br/>\n                  <hr/>\n                  <h3>Comments</h3>\n                  <ul class=\"list-group\">\n                      <li class=\"list-group-item\" *ngFor=\"let list of comment\"> {{list.writer}} : {{list.content}}<br> {{list.date}}\n                          <a><span class=\"glyphicon glyphicon-trash\" style=\"color:red; float:right;\" *ngIf=\"list.writer==user.name\" (click)=\"deleteComment(list._id)\"> X </span></a>\n                      </li>\n                  </ul>\n              </form> \n          </div>\n        </div>\n      </div>\n\n    <footer *ngIf=\"study && !one\">\n      <form (submit)=\"searchStudy()\">\n        <label id=\"ss\" for=\"name\"> 검색 </label>\n        <input type=\"text\" [(ngModel)]=\"search\" name=\"search\">\n        <button type=\"submit\" value=\"Search\"><img src=\"https://png.pngtree.com/element_pic/17/03/24/61e7397810c48656dfa148fdd66d229d.jpg\" width=\"30px\" height=\"30px\"></button>\n      </form>\n      <span class=\"nn\" (click)=\"changePage(-1)\">◀</span>\n      <span *ngFor=\"let num of pageIndex\">\n        <span class=\"nn\" *ngIf=\"num!=pageNum\" (click)=\"changePage(num)\"> {{num}} </span>\n        <span class=\"nn\" *ngIf=\"num==pageNum\" id=\"currentPage\"> {{num}} </span>\n      </span>\n      <span class=\"nn\"(click)=\"changePage(0)\">▶</span>\n    </footer>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/study/study.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/study/study.component.ts ***!
  \*****************************************************/
/*! exports provided: StudyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyComponent", function() { return StudyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_temp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/temp.service */ "./src/app/services/temp.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudyComponent = /** @class */ (function () {
    function StudyComponent(authService, tempService, flashMessage, router) {
        this.authService = authService;
        this.tempService = tempService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    StudyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page = 3;
        this.pageNum = 1;
        this.one = false;
        this.refreshStudy();
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    StudyComponent.prototype.showOne = function (i, id) {
        this.one = true;
        this.studyOne = this.study[i];
        this.studyId = id;
        this.refreshComment();
    };
    StudyComponent.prototype.searchStudy = function () {
        var _this = this;
        var search = {
            keyword: this.search,
            board: 1
        };
        this.authService.search(search).subscribe(function (studyList) {
            _this.study = studyList.study;
            _this.pageLengthCalculate();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    StudyComponent.prototype.changePage = function (i) {
        if ((i == -1) && (this.pageNum > 1))
            this.pageNum--;
        else if ((i == 0) && (this.pageNum < this.pageIndex.length))
            this.pageNum++;
        else if (i > 0)
            this.pageNum = i;
    };
    StudyComponent.prototype.pageCheck = function (i) {
        i -= ((this.page) * (this.pageNum - 1));
        if (i >= 0 && i < this.page)
            return true;
        else
            return false;
    };
    StudyComponent.prototype.pageLengthCalculate = function () {
        var len = Object.keys(this.study).length;
        var a = len / this.page;
        var n = Math.floor(a);
        if ((a - n) > 0 || a == 0)
            n += 1;
        this.pageIndex = [];
        for (var i = 0; i < n; i++) {
            this.pageIndex.push(i + 1);
        }
    };
    StudyComponent.prototype.submitComment = function (u) {
        var _this = this;
        //var w = u;
        var comment = {
            index: this.studyId,
            writer: u,
            content: this.content
        };
        this.authService.writeComment(comment).subscribe(function (data) {
            if (data.success) {
                _this.refreshComment();
            }
        });
    };
    StudyComponent.prototype.refreshComment = function () {
        var _this = this;
        var search = {
            id: this.studyId
        };
        this.authService.getComment(search).subscribe(function (list) {
            _this.comment = list.comment;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    StudyComponent.prototype.refreshStudy = function () {
        var _this = this;
        this.authService.getStudy().subscribe(function (studyList) {
            _this.study = studyList.study;
            _this.pageLengthCalculate();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    StudyComponent.prototype.deleteComment = function (del) {
        var _this = this;
        this.del = del;
        var search = {
            id: this.del
        };
        this.authService.deleteComment(search).subscribe(function (data) {
            if (data.success) {
                _this.refreshComment();
            }
        });
    };
    StudyComponent.prototype.delete = function (del) {
        var _this = this;
        this.del = del;
        var search = {
            id: this.del
        };
        this.authService.deleteStudy(search).subscribe(function (data) {
            if (data.success) {
                _this.refreshStudy();
                _this.one = false;
            }
        });
    };
    StudyComponent.prototype.update = function () {
        this.tempService.insertObj(this.studyId);
        this.router.navigate(['/writeStudy']);
    };
    StudyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-study',
            template: __webpack_require__(/*! ./study.component.html */ "./src/app/components/study/study.component.html"),
            styles: [__webpack_require__(/*! ./study.component.css */ "./src/app/components/study/study.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_temp_service__WEBPACK_IMPORTED_MODULE_2__["TempService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StudyComponent);
    return StudyComponent;
}());



/***/ }),

/***/ "./src/app/components/together/together.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/together/together.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Container{\r\n    text-align: center;\r\n    padding-top: 80px;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    width: 160px;\r\n    border-bottom: 3px solid green;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.maincontainer{\r\n    position:fixed;\r\n    top:0;\r\n    width:100%  ;\r\n    height:80px;\r\n    text-align:center;\r\n    display:block;\r\n    background-color: white;\r\n    justify-content: space-around;\r\n    opacity: 0.7;\r\n}\r\n.mat-raised-button{\r\n    margin-left: 60px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    width: 120px;\r\n    line-height: 30px;\r\n    color: black;\r\n    font-size:20px;\r\n    background-color: white;\r\n}\r\n.mat-raised-button:hover{\r\n    background-color: rgb(205, 211, 218);\r\n    opacity: 0.9;\r\n}\r\n#written {\r\n    /* border-radius: 10px; */\r\n    border-top: 1.5px solid grey;\r\n    /* border-bottom: 0.5px solid grey; */\r\n    background-color: white;\r\n    box-shadow: 0px 0px 1px 0px grey;\r\n    margin: 10px;\r\n    padding: 10px;\r\n    font-size: 15px;\r\n}\r\nfooter {\r\n    margin: 10px;\r\n    padding: 10px;\r\n    text-align: center;\r\n    font-family: 'Gugi', cursive;\r\n    color: aliceblue;\r\n}\r\nspan {\r\n    cursor: pointer;\r\n}\r\n#currentPage {\r\n    color: black;\r\n}\r\n#ss{\r\n    margin-right: 10px;\r\n}\r\ntable {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2dldGhlci90b2dldGhlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLHNDQUFzQztJQUN0Qyx3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksWUFBWTtHQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2dldGhlci90b2dldGhlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkNvbnRhaW5lcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdEbyBIeWVvbicsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgZ3JlZW47XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4ubWFpbmNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgdG9wOjA7XHJcbiAgICB3aWR0aDoxMDAlICA7XHJcbiAgICBoZWlnaHQ6ODBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWF0LXJhaXNlZC1idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAyMTEsIDIxOCk7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuI3dyaXR0ZW4ge1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cclxuICAgIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkIGdyZXk7XHJcbiAgICAvKiBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBncmV5OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggZ3JleTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuZm9vdGVyIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0d1Z2knLCBjdXJzaXZlO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5zcGFuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jY3VycmVudFBhZ2Uge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiNzc3tcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/together/together.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/together/together.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n<div class=\"maincontainer\">\n    <button mat-raised-button routerLink=\"/home\">Home</button>\n    <button mat-raised-button routerLink=\"/study\">Study</button>\n    <button mat-raised-button routerLink=\"/question\">Q&A</button>\n    <button mat-raised-button routerLink=\"/together\">Together</button>\n    <button mat-raised-button routerLink=\"/petition\">Petition</button> \n  </div>\n  \n  <h1 class=\"Container\">한성투게더</h1>\n\n  <div class=\"noticeBorder\">\n      <button mat-button routerLink=\"/writeTogether\">글쓰기</button>  \n    <div *ngFor=\"let list of together\">\n      <div id=\"written\" (click)=\"joinRoom(list._id)\">{{list.title}}</div>\n    </div>\n  <footer>\n      <label id=\"ss\" for=\"name\"> 검색 </label>\n      <input type=\"text\" name=\"search\">\n      <button><img src=\"https://png.pngtree.com/element_pic/17/03/24/61e7397810c48656dfa148fdd66d229d.jpg\" width=\"30px\" height=\"30px\"></button>\n  </footer>\n</div>\n  \n      \n"

/***/ }),

/***/ "./src/app/components/together/together.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/together/together.component.ts ***!
  \***********************************************************/
/*! exports provided: TogetherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TogetherComponent", function() { return TogetherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_temp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/temp.service */ "./src/app/services/temp.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TogetherComponent = /** @class */ (function () {
    function TogetherComponent(authService, tempService, flashMessage, router) {
        this.authService = authService;
        this.tempService = tempService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    TogetherComponent.prototype.ngOnInit = function () {
        this.refreshTogether();
    };
    TogetherComponent.prototype.refreshTogether = function () {
        var _this = this;
        this.authService.getTogether().subscribe(function (List) {
            _this.together = List.together;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    TogetherComponent.prototype.joinRoom = function (id) {
        this.tempService.insertObj(id);
        this.router.navigate(['/message']);
    };
    TogetherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-together',
            template: __webpack_require__(/*! ./together.component.html */ "./src/app/components/together/together.component.html"),
            styles: [__webpack_require__(/*! ./together.component.css */ "./src/app/components/together/together.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_temp_service__WEBPACK_IMPORTED_MODULE_2__["TempService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TogetherComponent);
    return TogetherComponent;
}());



/***/ }),

/***/ "./src/app/components/write-petition/write-petition.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/write-petition/write-petition.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Container{\r\n    text-align: center;\r\n    padding-top: 80px;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    width: 160px;\r\n    border-bottom: 3px solid green;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.maincontainer{\r\n    position:fixed;\r\n    top:0;\r\n    width:100%  ;\r\n    height:80px;\r\n    text-align:center;\r\n    display:block;\r\n    background-color: white;\r\n    justify-content: space-around;\r\n    opacity: 0.7;\r\n}\r\n.mat-raised-button{\r\n    margin-left: 60px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    width: 120px;\r\n    line-height: 30px;\r\n    color: black;\r\n    font-size:20px;\r\n    background-color: white;\r\n}\r\n.mat-raised-button:hover{\r\n    background-color: rgb(205, 211, 218);\r\n    opacity: 0.9;\r\n}\r\n.homebuttom{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.writecon{\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93cml0ZS1wZXRpdGlvbi93cml0ZS1wZXRpdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd3JpdGUtcGV0aXRpb24vd3JpdGUtcGV0aXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Db250YWluZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnRG8gSHllb24nLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyZWVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLm1haW5jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgd2lkdGg6MTAwJSAgO1xyXG4gICAgaGVpZ2h0OjgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNSwgMjExLCAyMTgpO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59XHJcbi5ob21lYnV0dG9te1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLndyaXRlY29ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/write-petition/write-petition.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/write-petition/write-petition.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n<div class=\"maincontainer\">\n    <button mat-raised-button routerLink=\"/home\">Home</button>\n    <button mat-raised-button routerLink=\"/study\">Study</button>\n    <button mat-raised-button routerLink=\"/question\">Q&A</button>\n    <button mat-raised-button routerLink=\"/together\">Together</button>\n    <button mat-raised-button routerLink=\"/petition\">Petition</button> \n  </div>\n\n  <h1 class=\"Container\">한성청원</h1>\n  <div class=\"writecon\">\n<div class=\"noticeBorder\">\n  <form (submit)=\"onPetitionSubmit()\">\n    <div id=\"inputs\">\n      <label> 제목 : </label>\n      <input type=\"text\" class=\"form-control\" style=\"text-align:center; width:250px; height:20px; letter-spacing: 2px; margin-left:auto; margin-right:auto; \" [(ngModel)]=\"title\" name=\"title\">\n    </div>\n    <div id=\"inputs\">\n      <label> 내용 : </label>\n      <input type=\"textarea\" class=\"form-control\" style=\"text-align:center; width:800px; height:200px; letter-spacing: 2px; margin-left:auto; margin-right;  \" [(ngModel)]=\"content\" name=\"content\">\n    </div>\n    <div id=\"inputs\">\n        <label> 목표 청원 수 : </label>\n        <select class=\"form-control\" [(ngModel)]=\"max\" name=\"max\">\n          <option value=\"20\">20</option>\n          <option value=\"30\">30</option>\n          <option value=\"40\">40</option>\n          <option value=\"50\">50</option>\n        </select>\n      </div>\n    <div id=\"inputs\">\n      <button id=\"bigbutton\" type=\"submit\" value=\"Submit\"> 글쓰기 </button>\n    </div>\n  </form>\n  <button mat-button color=\"primary\" class=\"homebuttom\" routerLink=\"/home\">홈으로</button>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/write-petition/write-petition.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/write-petition/write-petition.component.ts ***!
  \***********************************************************************/
/*! exports provided: WritePetitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritePetitionComponent", function() { return WritePetitionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WritePetitionComponent = /** @class */ (function () {
    function WritePetitionComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    WritePetitionComponent.prototype.ngOnInit = function () {
    };
    WritePetitionComponent.prototype.onPetitionSubmit = function () {
        var _this = this;
        var petition = {
            title: this.title,
            content: this.content,
            max: this.max
        };
        this.authService.writePetition(petition).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/petition']);
            }
        });
    };
    WritePetitionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-write-petition',
            template: __webpack_require__(/*! ./write-petition.component.html */ "./src/app/components/write-petition/write-petition.component.html"),
            styles: [__webpack_require__(/*! ./write-petition.component.css */ "./src/app/components/write-petition/write-petition.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WritePetitionComponent);
    return WritePetitionComponent;
}());



/***/ }),

/***/ "./src/app/components/write-question/write-question.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/write-question/write-question.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Container{\r\n    text-align: center;\r\n    padding-top: 80px;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    width: 160px;\r\n    border-bottom: 3px solid green;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.maincontainer{\r\n    position:fixed;\r\n    top:0;\r\n    width:100%  ;\r\n    height:80px;\r\n    text-align:center;\r\n    display:block;\r\n    background-color: white;\r\n    justify-content: space-around;\r\n    opacity: 0.7;\r\n}\r\n.mat-raised-button{\r\n    margin-left: 60px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    width: 120px;\r\n    line-height: 30px;\r\n    color: black;\r\n    font-size:20px;\r\n    background-color: white;\r\n}\r\n.mat-raised-button:hover{\r\n    background-color: rgb(205, 211, 218);\r\n    opacity: 0.9;\r\n}\r\n.homebuttom{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.writecon{\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93cml0ZS1xdWVzdGlvbi93cml0ZS1xdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd3JpdGUtcXVlc3Rpb24vd3JpdGUtcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Db250YWluZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnRG8gSHllb24nLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyZWVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLm1haW5jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgd2lkdGg6MTAwJSAgO1xyXG4gICAgaGVpZ2h0OjgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNSwgMjExLCAyMTgpO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4uaG9tZWJ1dHRvbXtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi53cml0ZWNvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/write-question/write-question.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/write-question/write-question.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n<div class=\"maincontainer\">\n    <button mat-raised-button routerLink=\"/home\">Home</button>\n    <button mat-raised-button routerLink=\"/study\">Study</button>\n    <button mat-raised-button routerLink=\"/question\">Q&A</button>\n    <button mat-raised-button routerLink=\"/together\">Together</button>\n    <button mat-raised-button routerLink=\"/petition\">Petition</button> \n  </div>\n\n  <h1 class=\"Container\">한성지식</h1>\n<div class=\"writecon\">\n<div class=\"noticeBorder\">\n  <form (submit)=\"onQuestionSubmit(user.name)\">\n    <div id=\"inputs\">\n      <label> 제목 : </label>\n      <input type=\"text\" class=\"form-control\" style=\"text-align:center; width:250px; height:20px; letter-spacing: 2px; margin-left:auto; margin-right:auto; \" [(ngModel)]=\"title\" name=\"title\">\n    </div>\n    <div id=\"inputs\">\n      <label> 내용 : </label>\n      <input type=\"textarea\" class=\"form-control\" style=\"text-align:center; width:800px; height:200px; letter-spacing: 2px; margin-left:auto; margin-right;  \" [(ngModel)]=\"content\" name=\"content\">\n    </div>\n    <div id=\"inputs\">\n      <button id=\"bigbutton\" type=\"submit\" value=\"Submit\"> 글쓰기 </button>\n    </div>\n  </form>\n  <button mat-button color=\"primary\" class=\"homebuttom\" routerLink=\"/home\">홈으로</button>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/write-question/write-question.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/write-question/write-question.component.ts ***!
  \***********************************************************************/
/*! exports provided: WriteQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteQuestionComponent", function() { return WriteQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_temp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/temp.service */ "./src/app/services/temp.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WriteQuestionComponent = /** @class */ (function () {
    function WriteQuestionComponent(validateService, flashMessage, authService, tempService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.tempService = tempService;
        this.router = router;
    }
    WriteQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    WriteQuestionComponent.prototype.onQuestionSubmit = function (w) {
        var _this = this;
        var question = {
            title: this.title,
            writer: w,
            content: this.content,
            update: this.tempService.getObj()
        };
        this.authService.writeQuestion(question).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/question']);
            }
        });
    };
    WriteQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-write-question',
            template: __webpack_require__(/*! ./write-question.component.html */ "./src/app/components/write-question/write-question.component.html"),
            styles: [__webpack_require__(/*! ./write-question.component.css */ "./src/app/components/write-question/write-question.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_temp_service__WEBPACK_IMPORTED_MODULE_3__["TempService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], WriteQuestionComponent);
    return WriteQuestionComponent;
}());



/***/ }),

/***/ "./src/app/components/write-study/write-study.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/write-study/write-study.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Container{\r\n    text-align: center;\r\n    padding-top: 80px;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    width: 160px;\r\n    border-bottom: 3px solid green;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.maincontainer{\r\n    position:fixed;\r\n    top:0;\r\n    width:100%  ;\r\n    height:80px;\r\n    text-align:center;\r\n    display:block;\r\n    background-color: white;\r\n    justify-content: space-around;\r\n    opacity: 0.7;\r\n}\r\n.mat-raised-button{\r\n    margin-left: 60px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    width: 120px;\r\n    line-height: 30px;\r\n    color: black;\r\n    font-size:20px;\r\n    background-color: white;\r\n}\r\n.mat-raised-button:hover{\r\n    background-color: rgb(205, 211, 218);\r\n    opacity: 0.9;\r\n}\r\n.homebuttom{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.writecon{\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93cml0ZS1zdHVkeS93cml0ZS1zdHVkeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd3JpdGUtc3R1ZHkvd3JpdGUtc3R1ZHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Db250YWluZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnRG8gSHllb24nLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyZWVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLm1haW5jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgd2lkdGg6MTAwJSAgO1xyXG4gICAgaGVpZ2h0OjgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNSwgMjExLCAyMTgpO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59XHJcbi5ob21lYnV0dG9te1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLndyaXRlY29ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/write-study/write-study.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/write-study/write-study.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n<div class=\"maincontainer\">\n    <button mat-raised-button routerLink=\"/home\">Home</button>\n    <button mat-raised-button routerLink=\"/study\">Study</button>\n    <button mat-raised-button routerLink=\"/question\">Q&A</button>\n    <button mat-raised-button routerLink=\"/together\">Together</button>\n    <button mat-raised-button routerLink=\"/petition\">Petition</button> \n  </div>\n\n<h1 class=\"Container\">한성스터디</h1>\n<div class=\"writecon\">\n<div class=\"noticeBorder\">\n  <form (submit)=\"onStudySubmit(user.name)\">\n    <div id=\"inputs\">\n        <label> 제목 : </label>\n      <input type=\"text\" class=\"form-control\" style=\"text-align:center; width:250px; height:20px; letter-spacing: 2px; margin-left:auto; margin-right:auto; \" [(ngModel)]=\"title\" name=\"title\">\n    </div>\n    <div id=\"inputs\">\n      <label> 내용 : </label>\n      <input type=\"textarea\" class=\"form-control\" style=\"text-align:center; width:800px; height:200px; letter-spacing: 2px; margin-left:auto; margin-right;  \" [(ngModel)]=\"content\" name=\"content\"> \n    </div>\n    \n    <div id=\"inputs\">\n      <button id=\"bigbutton\" type=\"submit\" value=\"Submit\"> 글쓰기 </button>\n    </div>\n  </form>\n  <button mat-button color=\"primary\" class=\"homebuttom\" routerLink=\"/home\">홈으로</button>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/write-study/write-study.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/write-study/write-study.component.ts ***!
  \*****************************************************************/
/*! exports provided: WriteStudyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteStudyComponent", function() { return WriteStudyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_temp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/temp.service */ "./src/app/services/temp.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WriteStudyComponent = /** @class */ (function () {
    function WriteStudyComponent(validateService, flashMessage, authService, tempService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.tempService = tempService;
        this.router = router;
    }
    WriteStudyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    WriteStudyComponent.prototype.onStudySubmit = function (w) {
        var _this = this;
        var study = {
            title: this.title,
            writer: w,
            content: this.content,
            update: this.tempService.getObj()
        };
        this.authService.writeStudy(study).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/study']);
            }
        });
    };
    WriteStudyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-write-study',
            template: __webpack_require__(/*! ./write-study.component.html */ "./src/app/components/write-study/write-study.component.html"),
            styles: [__webpack_require__(/*! ./write-study.component.css */ "./src/app/components/write-study/write-study.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_temp_service__WEBPACK_IMPORTED_MODULE_3__["TempService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], WriteStudyComponent);
    return WriteStudyComponent;
}());



/***/ }),

/***/ "./src/app/components/write-together/write-together.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/write-together/write-together.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Container{\r\n    text-align: center;\r\n    padding-top: 80px;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    width: 160px;\r\n    border-bottom: 3px solid green;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.maincontainer{\r\n    position:fixed;\r\n    top:0;\r\n    width:100%  ;\r\n    height:80px;\r\n    text-align:center;\r\n    display:block;\r\n    background-color: white;\r\n    justify-content: space-around;\r\n    opacity: 0.7;\r\n}\r\n.mat-raised-button{\r\n    margin-left: 60px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    width: 120px;\r\n    line-height: 30px;\r\n    color: black;\r\n    font-size:20px;\r\n    background-color: white;\r\n}\r\n.mat-raised-button:hover{\r\n    background-color: rgb(205, 211, 218);\r\n    opacity: 0.9;\r\n}\r\n.homebuttom{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.writecon{\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93cml0ZS10b2dldGhlci93cml0ZS10b2dldGhlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd3JpdGUtdG9nZXRoZXIvd3JpdGUtdG9nZXRoZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Db250YWluZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnRG8gSHllb24nLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyZWVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLm1haW5jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgd2lkdGg6MTAwJSAgO1xyXG4gICAgaGVpZ2h0OjgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNSwgMjExLCAyMTgpO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59XHJcbi5ob21lYnV0dG9te1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLndyaXRlY29ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/write-together/write-together.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/write-together/write-together.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n<div class=\"maincontainer\">\n    <button mat-raised-button routerLink=\"/home\">Home</button>\n    <button mat-raised-button routerLink=\"/study\">Study</button>\n    <button mat-raised-button routerLink=\"/question\">Q&A</button>\n    <button mat-raised-button routerLink=\"/together\">Together</button>\n    <button mat-raised-button routerLink=\"/petition\">Petition</button> \n  </div>\n\n  <h1 class=\"Container\">한성투게더</h1>\n  <div class=\"writecon\">\n<div class=\"noticeBorder\">\n  <form (submit)=\"onTogetherSubmit()\">\n    <div id=\"inputs\">\n      <label> 제목 : </label>\n      <input type=\"text\" class=\"form-control\" style=\"text-align:center; width:250px; height:20px; letter-spacing: 2px; margin-left:auto; margin-right:auto; \" [(ngModel)]=\"title\" name=\"title\">\n    </div>\n    <div id=\"inputs\">\n      <button id=\"bigbutton\" type=\"submit\" value=\"Submit\"> 글쓰기 </button>\n    </div>\n  </form>\n  <button mat-button color=\"primary\" class=\"homebuttom\" routerLink=\"/home\">홈으로</button>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/write-together/write-together.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/write-together/write-together.component.ts ***!
  \***********************************************************************/
/*! exports provided: WriteTogetherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteTogetherComponent", function() { return WriteTogetherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_temp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/temp.service */ "./src/app/services/temp.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WriteTogetherComponent = /** @class */ (function () {
    function WriteTogetherComponent(validateService, flashMessage, authService, tempService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.tempService = tempService;
        this.router = router;
    }
    WriteTogetherComponent.prototype.ngOnInit = function () {
    };
    WriteTogetherComponent.prototype.onTogetherSubmit = function () {
        var _this = this;
        var together = {
            title: this.title
        };
        this.authService.writeTogether(together).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/together']);
            }
        });
    };
    WriteTogetherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-write-together',
            template: __webpack_require__(/*! ./write-together.component.html */ "./src/app/components/write-together/write-together.component.html"),
            styles: [__webpack_require__(/*! ./write-together.component.css */ "./src/app/components/write-together/write-together.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_temp_service__WEBPACK_IMPORTED_MODULE_3__["TempService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], WriteTogetherComponent);
    return WriteTogetherComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.findUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/find', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.writeStudy = function (study) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/board/writeStudy', study, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.writeQuestion = function (question) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/board/writeQuestion', question, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.writePetition = function (petition) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/board/writePetition', petition, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.upPetition = function (clicked) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/board/upPetition', clicked, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.writeComment = function (comment) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/board/writeComment', comment, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.writeTogether = function (together) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/messenger/writeTogether', together, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.sendMessage = function (send) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/messenger/writeMessage', send, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getStudy = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/board/studyList', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getQuestion = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/board/questionList', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getMessage = function (search) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/messenger/messageList', search, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.search = function (search) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/board/search', search, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getPetition = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/board/petitionList', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getPetitionClick = function (search) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/board/petitionClickList', search, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.checkPetitionClick = function (search) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/board/petitionClickCheck', search, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getComment = function (search) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/board/commentList', search, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getTogether = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/messenger/togetherList', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.deleteComment = function (search) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/board/deleteComment', search, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.deleteStudy = function (search) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/board/deleteStudy', search, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.deleteQuestion = function (search) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/board/deleteQuestion', search, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/temp.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/temp.service.ts ***!
  \******************************************/
/*! exports provided: TempService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempService", function() { return TempService; });
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

var TempService = /** @class */ (function () {
    function TempService() {
        this.text = "";
    }
    TempService.prototype.insertObj = function (obj) {
        this.text = obj;
    };
    TempService.prototype.getObj = function () {
        var r = this.text;
        this.text = "";
        return r;
    };
    TempService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TempService);
    return TempService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! C:\Users\HOME\Desktop\hanmunityPro\hanmunityProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map