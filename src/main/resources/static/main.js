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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _forum_qna_qna_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forum/qna/qna.component */ "./src/app/forum/qna/qna.component.ts");
/* harmony import */ var _forum_qna_qna_detail_qna_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forum/qna/qna-detail/qna-detail.component */ "./src/app/forum/qna/qna-detail/qna-detail.component.ts");
/* harmony import */ var _forum_qna_qna_write_qna_write_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forum/qna/qna-write/qna-write.component */ "./src/app/forum/qna/qna-write/qna-write.component.ts");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/forum/forum.component.ts");
/* harmony import */ var _forum_guide_guide_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forum/guide/guide.component */ "./src/app/forum/guide/guide.component.ts");
/* harmony import */ var _forum_guide_guide_detail_guide_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forum/guide/guide-detail/guide-detail.component */ "./src/app/forum/guide/guide-detail/guide-detail.component.ts");
/* harmony import */ var _forum_guide_guide_write_guide_write_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forum/guide/guide-write/guide-write.component */ "./src/app/forum/guide/guide-write/guide-write.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'forum',
        component: _forum_forum_component__WEBPACK_IMPORTED_MODULE_6__["ForumComponent"]
    },
    {
        path: 'forum/qna',
        component: _forum_qna_qna_component__WEBPACK_IMPORTED_MODULE_3__["QnaComponent"]
    },
    {
        path: 'forum/qna/detail/:id',
        component: _forum_qna_qna_detail_qna_detail_component__WEBPACK_IMPORTED_MODULE_4__["QnaDetailComponent"]
    },
    {
        path: 'forum/qna/write',
        component: _forum_qna_qna_write_qna_write_component__WEBPACK_IMPORTED_MODULE_5__["QnaWriteComponent"]
    },
    {
        path: 'forum/guide',
        component: _forum_guide_guide_component__WEBPACK_IMPORTED_MODULE_7__["GuideComponent"]
    },
    {
        path: 'forum/guide/detail/:id',
        component: _forum_guide_guide_detail_guide_detail_component__WEBPACK_IMPORTED_MODULE_8__["GuideDetailComponent"]
    },
    {
        path: 'forum/guide/write',
        component: _forum_guide_guide_write_guide_write_component__WEBPACK_IMPORTED_MODULE_9__["GuideWriteComponent"]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/forum/forum.component.ts");
/* harmony import */ var _forum_qna_qna_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forum/qna/qna.component */ "./src/app/forum/qna/qna.component.ts");
/* harmony import */ var _forum_qna_qna_detail_qna_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forum/qna/qna-detail/qna-detail.component */ "./src/app/forum/qna/qna-detail/qna-detail.component.ts");
/* harmony import */ var _forum_qna_qna_write_qna_write_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forum/qna/qna-write/qna-write.component */ "./src/app/forum/qna/qna-write/qna-write.component.ts");
/* harmony import */ var _forum_guide_guide_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forum/guide/guide.component */ "./src/app/forum/guide/guide.component.ts");
/* harmony import */ var _forum_guide_guide_detail_guide_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forum/guide/guide-detail/guide-detail.component */ "./src/app/forum/guide/guide-detail/guide-detail.component.ts");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");
/* harmony import */ var _forum_guide_guide_write_guide_write_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forum/guide/guide-write/guide-write.component */ "./src/app/forum/guide/guide-write/guide-write.component.ts");
/* harmony import */ var angular2_multiselect_dropdown_angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular2-multiselect-dropdown/angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/angular2-multiselect-dropdown.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _forum_forum_component__WEBPACK_IMPORTED_MODULE_8__["ForumComponent"],
                _forum_qna_qna_component__WEBPACK_IMPORTED_MODULE_9__["QnaComponent"],
                _forum_qna_qna_detail_qna_detail_component__WEBPACK_IMPORTED_MODULE_10__["QnaDetailComponent"],
                _forum_qna_qna_write_qna_write_component__WEBPACK_IMPORTED_MODULE_11__["QnaWriteComponent"],
                _forum_guide_guide_component__WEBPACK_IMPORTED_MODULE_12__["GuideComponent"],
                _forum_guide_guide_detail_guide_detail_component__WEBPACK_IMPORTED_MODULE_13__["GuideDetailComponent"],
                _common_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _forum_guide_guide_write_guide_write_component__WEBPACK_IMPORTED_MODULE_16__["GuideWriteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular2_multiselect_dropdown_angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__["AngularMultiSelectModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n      <p class=\"text-muted\">Copyright (c) SSG PAY | API 관리운영시스템. All rights reserved.</p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/common/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
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
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/common/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/common/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/common/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Fixed navbar -->\n<nav class=\"navbar navbar-default navbar-expand-lg navbar-fixed-top\">\n  <div class=\"container\">\n      <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\n          <a class=\"navbar-brand\" href=\"#\">API 관리운영시스템</a> </div>\n      <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n              <li class=\"active\"><a href=\"index.html\">HOME</a></li>\n              <li><a href=\"list_question.html\">API CATALLOG</a></li>\n              <li class=\"dropdown\"> <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Menu <span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu\" role=\"menu\">\n                      <li><a href=\"#\">Submenu 1-1</a></li>\n                      <li><a href=\"#\">Submenu 1-2</a></li>\n                      <li><a href=\"#\">Submenu 1-3</a></li>\n                      <li class=\"divider\"></li>\n                      <li><a href=\"#\">Submenu 2-1</a></li>\n                      <li class=\"divider\"></li>\n                      <li><a href=\"#\">Submenu 3-1</a></li>\n                  </ul>\n              </li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#\">SIGN UP</a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#\">LOGIN</a> </li>\n          </ul>\n      </div>\n      <!--/.nav-collapse --> \n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/common/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/common/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/common/urls.ts":
/*!********************************!*\
  !*** ./src/app/common/urls.ts ***!
  \********************************/
/*! exports provided: base_prefix, authenticate, session, forum_user_session, forum_topics, forum_spectator, forum_topics_qna_list, forum_topics_guide_list, download_file_id, upload_file, upload_image_file, authenticateUrl, sessionUrl, userBySessionUrl, topicsUrl, qnaUrl, guideUrl, spectatorUrl, downloadByFileIdUrl, uploadImageFileIdUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base_prefix", function() { return base_prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "session", function() { return session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forum_user_session", function() { return forum_user_session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forum_topics", function() { return forum_topics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forum_spectator", function() { return forum_spectator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forum_topics_qna_list", function() { return forum_topics_qna_list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forum_topics_guide_list", function() { return forum_topics_guide_list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "download_file_id", function() { return download_file_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upload_file", function() { return upload_file; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upload_image_file", function() { return upload_image_file; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticateUrl", function() { return authenticateUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionUrl", function() { return sessionUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userBySessionUrl", function() { return userBySessionUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topicsUrl", function() { return topicsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qnaUrl", function() { return qnaUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guideUrl", function() { return guideUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spectatorUrl", function() { return spectatorUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadByFileIdUrl", function() { return downloadByFileIdUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadImageFileIdUrl", function() { return uploadImageFileIdUrl; });
//export const base_prefix = 'http://apipt.ssgpay.com:8080/ssgpay';
var base_prefix = '/ssgpay';
var authenticate = '/api/v1/authenticate';
var session = '/api/v1/session';
var forum_user_session = '/api/v1/users/session';
var forum_topics = '/api/v1/topics';
var forum_spectator = '/api/v1/users/spectator';
var forum_topics_qna_list = '/api/v1/topics/category/qna';
var forum_topics_guide_list = '/api/v1/topics/category/guide';
var download_file_id = '/api/v1/files/downloadByFileId';
var upload_file = '/api/v1/files/uploadFile';
var upload_image_file = '/api/v1/files/uploadImageFile';
var authenticateUrl = base_prefix + authenticate;
var sessionUrl = base_prefix + session;
var userBySessionUrl = base_prefix + forum_user_session;
var topicsUrl = base_prefix + forum_topics;
var qnaUrl = base_prefix + forum_topics_qna_list;
var guideUrl = base_prefix + forum_topics_guide_list;
var spectatorUrl = base_prefix + forum_spectator;
var downloadByFileIdUrl = base_prefix + download_file_id;
var uploadImageFileIdUrl = base_prefix + upload_image_file;


/***/ }),

/***/ "./src/app/forum/forum.component.css":
/*!*******************************************!*\
  !*** ./src/app/forum/forum.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forum/forum.component.html":
/*!********************************************!*\
  !*** ./src/app/forum/forum.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  forum works!\n</p>\n"

/***/ }),

/***/ "./src/app/forum/forum.component.ts":
/*!******************************************!*\
  !*** ./src/app/forum/forum.component.ts ***!
  \******************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
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

var ForumComponent = /** @class */ (function () {
    function ForumComponent() {
    }
    ForumComponent.prototype.ngOnInit = function () {
    };
    ForumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forum',
            template: __webpack_require__(/*! ./forum.component.html */ "./src/app/forum/forum.component.html"),
            styles: [__webpack_require__(/*! ./forum.component.css */ "./src/app/forum/forum.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForumComponent);
    return ForumComponent;
}());



/***/ }),

/***/ "./src/app/forum/guide/guide-detail/guide-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/forum/guide/guide-detail/guide-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forum/guide/guide-detail/guide-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/forum/guide/guide-detail/guide-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<header class=\"jumbotron\">\n  <div class=\"container\">\n      <h1 class=\"text-center\">가이드</h1>\n  </div>\n</header>\n<article class=\"container\">\n  <ol class=\"row breadcrumb\">\n      <li><a href=\"#\"><i class=\"glyphicon glyphicon-home\"></i> Home</a></li>\n      <li><a href=\"#\">Library</a></li>\n      <li class=\"active\">Data</li>\n  </ol>\n  <section class=\"row\">\n  <!-- 가이드 -->\n      <div class=\"panel panel-default view-detail\">\n          <div class=\"panel-heading\">\n              <h2 class=\"panel-title\"><span>Q</span>{{topic_data.title}}</h2>\n          </div>\n          <div class=\"panel-body\">\n            <ul class=\"list-group-item-text clearfix\">\n                <li class=\"col-lg-3 col-xs-5\"><strong>작성자</strong>{{topic_user.username}}</li>\n                <li class=\"col-lg-3 col-xs-7\"><strong>작성일</strong>{{topic_data.createdDate}}</li>\n            </ul>\n            <div [innerHTML]=\"topic_data.content\"></div>\n            <div class=\"code-block\">\n                <h3>첨부파일 :</h3>\n                <blockquote>\n                    <ul class=\"list-group-item-text clearfix\">\n                        <li *ngFor=\"let attach_file of topic_attach_file\">\n                            \n                            {{attach_file.fileName}} \n                            <button class=\"page-link waves-light\" (click)=\"downloadFile(attach_file)\">다운로드</button>\n                            \n                        </li>\n                    </ul>\n                </blockquote>\n            </div>\n          </div>\n      </div>\n \n  \n \n      \n      <div class=\"text-center\">\n          <button class=\"btn btn-lg btn-default\" type=\"button\">목록</button>\n          <button class=\"btn btn-lg btn-primary\" type=\"button\">글쓰기</button>\n      </div> \n      \n  </section>\n  \n</article>\n\n\n\n"

/***/ }),

/***/ "./src/app/forum/guide/guide-detail/guide-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/forum/guide/guide-detail/guide-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: GuideDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideDetailComponent", function() { return GuideDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_forum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/forum.service */ "./src/app/forum/service/forum.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuideDetailComponent = /** @class */ (function () {
    function GuideDetailComponent(route, _forumService) {
        var _this = this;
        this.route = route;
        this._forumService = _forumService;
        this.topic_id = 0;
        this.topic_data = {};
        this.topic_user = {};
        this.topic_answers = [];
        this.topic_attach_file = [];
        this.current_user = {};
        this.route.params.subscribe(function (res) {
            return _this.topic_id = res.id;
        });
    }
    GuideDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._forumService.getTopicDetail(this.topic_id).subscribe(function (data) {
            console.log(data);
            _this.topic_data = data;
            _this.topic_user = data['user'];
            _this.topic_answers = data['answers'];
            _this.topic_attach_file = data['attachFile'];
        }, function (err) {
            console.log(err, err.message);
        });
        this._forumService.getUserSession().subscribe(function (data) {
            console.log(data);
            _this.current_user = data['user'];
        }, function (err) {
            console.log(err, err.message);
        });
    };
    GuideDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-guide-detail',
            template: __webpack_require__(/*! ./guide-detail.component.html */ "./src/app/forum/guide/guide-detail/guide-detail.component.html"),
            styles: [__webpack_require__(/*! ./guide-detail.component.css */ "./src/app/forum/guide/guide-detail/guide-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_forum_service__WEBPACK_IMPORTED_MODULE_2__["ForumService"]])
    ], GuideDetailComponent);
    return GuideDetailComponent;
}());



/***/ }),

/***/ "./src/app/forum/guide/guide-write/guide-write.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/forum/guide/guide-write/guide-write.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forum/guide/guide-write/guide-write.component.html":
/*!********************************************************************!*\
  !*** ./src/app/forum/guide/guide-write/guide-write.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<header class=\"jumbotron\">\n    <div class=\"container\">\n        <h1 class=\"text-center\">가이드</h1>\n    </div>\n</header>\n<article class=\"container\">\n    <ol class=\"row breadcrumb\">\n        <li><a href=\"#\"><i class=\"glyphicon glyphicon-home\"></i> Home</a></li>\n        <li><a href=\"#\">Library</a></li>\n        <li class=\"active\">Data</li>\n    </ol>\n    <section class=\"row\">\n\n\n            \n\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit(fileInput.files)\">\n\n\t\t<fieldset class=\"user-profile\">\n\t\t<!-- 템플릿 선택 -->\n\t\t<div class=\"col-sm-12 col-md-6 col-lg-6\">\n            <h2> 템플릿을 선택하세요.</h2>\n            <div class=\"selected-list\">\n                    <select class=\"c-btn\" (change)=\"selectChangeTemplateHandler($event)\">\n                        <option value=\"restful\" selected>RESTFul API 전문</option>\n                        <option value=\"tcp\">TCP 전문</option>\n                        <option value=\"etc\">기타 가이드</option>\n                    </select>\n            </div>\n      \t</div>\n\t\t<!-- //템플릿 -->\n    \n\t\t<!-- 관람자 선택 -->\n\t\t<div class=\"col-sm-12 col-md-6 col-lg-6\">\n        <h2> 관람자를 선택하세요.</h2>\n            <angular2-multiselect [data]=\"itemList\" \n                formControlName=\"selectedItems\" \n                [settings]=\"settings\" \n                (onSelect)=\"onItemSelect($event)\"\n                (onDeSelect)=\"OnItemDeSelect($event)\" \n                (onSelectAll)=\"onSelectAll($event)\" \n                (onDeSelectAll)=\"onDeSelectAll($event)\">\n            </angular2-multiselect>\n\t\t</div>\n\t\t<!-- //활동내역 -->\n\t\t</fieldset>\n\n\t\t<!-- 글쓰기 -->\n\t\t<h2>가이드</h2>\n\t\t<fieldset class=\"write-box\">\n\t\t\t<div class=\"panel panel-info view-detail\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>기본 템플릿은 비 API 가이드(TCP) 입니다.</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\">\n            \n                <div class=\"form-group\">\n                    <label>제 목</label>\n                    <input type=\"text\" formControlName=\"title\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" />\n                    <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.title.errors.required\">제목을 입력하시요.</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label>본 문</label>\n                    <ckeditor name=\"qna_ckeditor\" class=\"ckeditorContent\" formControlName=\"content\" ></ckeditor>\n                    <div *ngIf=\"submitted && f.content.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.content.errors.required\">본문을 입력하시오.</div>\n                    </div>\n                    \n                </div>\n                <div class=\"form-group\">\n                    <label>첨부파일</label>\n                    <input type=\"file\" class=\"form-control\" (change)=\"onFileChange(fileInput.files)\" #fileInput />\n                </div>\n                <div class=\"text-center\">\n                    <button class=\"btn btn-primary\">Register</button>\n                </div>\n            \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</fieldset>\n\t\t<!-- //글쓰기 -->\n    </form>\n    </section>\n    \n</article>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/forum/guide/guide-write/guide-write.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/forum/guide/guide-write/guide-write.component.ts ***!
  \******************************************************************/
/*! exports provided: GuideWriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideWriteComponent", function() { return GuideWriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/urls */ "./src/app/common/urls.ts");
/* harmony import */ var _service_guide_template_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/guide-template.service */ "./src/app/forum/service/guide-template.service.ts");
/* harmony import */ var _service_forum_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/forum.service */ "./src/app/forum/service/forum.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GuideWriteComponent = /** @class */ (function () {
    function GuideWriteComponent(formBuilder, cd, _http, guideTemplateService, forumService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.cd = cd;
        this._http = _http;
        this.guideTemplateService = guideTemplateService;
        this.forumService = forumService;
        this.title = '';
        this.submitted = false;
        this.errors = { errors: {} };
        this.topicName = '가이드';
        this.topicDesc = '';
        this.selectedTemplate = '';
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.registerForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            file: [''],
            selectedItems: [[]]
        });
        this.forumService.getGuideSpectator().subscribe(function (data) {
            _this.itemList = JSON.parse(JSON.stringify(data));
            console.log(_this.itemList);
        }, function (err) {
            console.log(err, err.message);
        });
        this.settings = {
            singleSelection: false,
            text: "관람자를 선택하세요.",
            selectAllText: '전체 선택',
            unSelectAllText: '전체 해제',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            groupBy: "category"
        };
    }
    GuideWriteComponent.prototype.ngAfterViewChecked = function () {
        var editor = this.ckEditor.instance;
        // ckeditor
        editor.config.height = 400;
        editor.config.filebrowserUploadUrl = _common_urls__WEBPACK_IMPORTED_MODULE_4__["uploadImageFileIdUrl"];
    };
    GuideWriteComponent.prototype.ngOnInit = function () {
        // multi drop list
        this.topicDesc = this.guideTemplateService.getRestfulTemplate();
        this.registerForm.get('content').setValue(this.topicDesc);
    };
    Object.defineProperty(GuideWriteComponent.prototype, "f", {
        // 첨부파일
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    GuideWriteComponent.prototype.onFileChange = function (files) {
        var _this = this;
        var reader = new FileReader();
        console.log('onFileChange:' + event);
        if (files && files.length > 0) {
            // For Preview
            var file = files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.registerForm.patchValue({
                    file: reader.result
                });
                // need to run CD since file load runs outside of zone
                _this.cd.markForCheck();
            };
        }
    };
    // form summit
    GuideWriteComponent.prototype.onSubmit = function (files) {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
        var formData = new FormData();
        console.log(this.registerForm);
        console.log(files);
        var formValue = this.registerForm.value;
        if (files[0]) {
            formData.append('file', files[0]);
        }
        formData.append('title', formValue.title);
        formData.append('content', formValue.content);
        formData.append('category', 'guide');
        var permitMember = '';
        for (var item in formValue.selectedItems) {
            if (item == "0") {
                permitMember = formValue.selectedItems[item].id;
                continue;
            }
            permitMember = permitMember + ',' + formValue.selectedItems[item].id;
        }
        console.log(permitMember);
        formData.append('permit', permitMember);
        this._http.post(_common_urls__WEBPACK_IMPORTED_MODULE_4__["topicsUrl"], formData)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    //event handler for the select element's change event
    GuideWriteComponent.prototype.selectChangeTemplateHandler = function (event) {
        //update the ui
        this.selectedTemplate = event.target.value;
        switch (this.selectedTemplate) {
            case "restful": {
                this.topicDesc = this.guideTemplateService.getRestfulTemplate();
                this.registerForm.get('content').setValue(this.topicDesc);
                break;
            }
            case "tcp": {
                this.topicDesc = this.guideTemplateService.getTcpTemplate();
                this.registerForm.get('content').setValue(this.topicDesc);
                break;
            }
            case "etc": {
                this.topicDesc = this.guideTemplateService.getEtcTemplate();
                this.registerForm.get('content').setValue(this.topicDesc);
                break;
            }
        }
    };
    // multi drop list
    GuideWriteComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.registerForm.get('selectedItems').value);
    };
    GuideWriteComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    GuideWriteComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    GuideWriteComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    GuideWriteComponent.prototype.refreshDemo1Values = function (value) {
        console.log(value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_1__["CKEditorComponent"]),
        __metadata("design:type", ng2_ckeditor__WEBPACK_IMPORTED_MODULE_1__["CKEditorComponent"])
    ], GuideWriteComponent.prototype, "ckEditor", void 0);
    GuideWriteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-guide-write',
            template: __webpack_require__(/*! ./guide-write.component.html */ "./src/app/forum/guide/guide-write/guide-write.component.html"),
            styles: [__webpack_require__(/*! ./guide-write.component.css */ "./src/app/forum/guide/guide-write/guide-write.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _service_guide_template_service__WEBPACK_IMPORTED_MODULE_5__["GuideTemplateService"],
            _service_forum_service__WEBPACK_IMPORTED_MODULE_6__["ForumService"]])
    ], GuideWriteComponent);
    return GuideWriteComponent;
}());



/***/ }),

/***/ "./src/app/forum/guide/guide.component.css":
/*!*************************************************!*\
  !*** ./src/app/forum/guide/guide.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forum/guide/guide.component.html":
/*!**************************************************!*\
  !*** ./src/app/forum/guide/guide.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<header class=\"jumbotron\">\n    <div class=\"container\">\n        <h1 class=\"text-center\">가이드</h1>\n    </div>\n</header>\n<article class=\"container\">\n\n    <ol class=\"row breadcrumb\">\n        <li><a href=\"#\"><i class=\"glyphicon glyphicon-home\"></i> Home</a></li>\n        <li><a href=\"#\">포럼</a></li>\n        <li class=\"active\">가이드</li>\n    </ol>\n\n    <div class=\"row search well\">\n        <div class=\"col-lg-4 col-xs-9\">\n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n                <span class=\"input-group-btn\">\n                <button class=\"btn btn-primary\" type=\"button\">검색</button>\n                </span> </div>\n        </div>\n        <div class=\"col-lg-8 col-xs-3 text-right\">\n            <button [routerLink]=\"['/forum/guide/write']\" class=\"btn btn-primary\" type=\"button\">글쓰기</button>\n        </div>\n    </div>\n\n    <section class=\"row\">\n      <div class=\"list-group\" *ngFor=\"let topic of topics\"> \n          <a routerLink=\"/forum/guide/detail/{{topic.id}}\" class=\"list-group-item\">\n          <h4 class=\"list-group-item-heading\">{{topic.title}}</h4>\n          <ul class=\"list-group-item-text clearfix\">\n              <li class=\"col-lg-3 col-xs-12\"><strong>작성자</strong>{{topic.user.username}}</li>\n              <li class=\"col-lg-3 col-xs-12\"><strong>작성일</strong>{{topic.createdDate}}</li>\n              <li class=\"col-lg-3 col-xs-12\"><strong>답변수</strong><span class=\"badge badge-info\">{{topic.answers.length}}</span></li>\n          </ul>\n          </a> \n      </div>\n    \n      <div class=\"col text-center\">\n          <ul class=\"pagination pagination-sm\">\n          <li [ngClass]=\"{'active':i==page}\" *ngFor=\"let p of pages; let i=index\">\n            <a class=\"page-link waves-light\" href=\"\" (click)=\"setPage(i,$event)\"  >{{i+1}}</a>\n          </li>\n        </ul>\n      </div>\n\n  </section>\n \n</article>"

/***/ }),

/***/ "./src/app/forum/guide/guide.component.ts":
/*!************************************************!*\
  !*** ./src/app/forum/guide/guide.component.ts ***!
  \************************************************/
/*! exports provided: GuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideComponent", function() { return GuideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_forum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/forum.service */ "./src/app/forum/service/forum.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GuideComponent = /** @class */ (function () {
    function GuideComponent(_forumService) {
        this._forumService = _forumService;
        this.page = 0;
    }
    GuideComponent.prototype.setPage = function (i, event) {
        event.preventDefault();
        this.page = i;
        this.getGuideList();
    };
    GuideComponent.prototype.ngOnInit = function () {
        this.getGuideList();
    };
    GuideComponent.prototype.getGuideList = function () {
        var _this = this;
        this._forumService.getGuideList(this.page).subscribe(function (data) {
            console.log(data);
            _this.topics = data['content'];
            _this.pages = new Array(data['totalPages']);
        }, function (err) {
            console.log(err, err.message);
        });
    };
    GuideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-guide',
            template: __webpack_require__(/*! ./guide.component.html */ "./src/app/forum/guide/guide.component.html"),
            styles: [__webpack_require__(/*! ./guide.component.css */ "./src/app/forum/guide/guide.component.css")]
        }),
        __metadata("design:paramtypes", [_service_forum_service__WEBPACK_IMPORTED_MODULE_1__["ForumService"]])
    ], GuideComponent);
    return GuideComponent;
}());



/***/ }),

/***/ "./src/app/forum/qna/qna-detail/qna-detail.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forum/qna/qna-detail/qna-detail.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forum/qna/qna-detail/qna-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forum/qna/qna-detail/qna-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<header class=\"jumbotron\">\n  <div class=\"container\">\n      <h1 class=\"text-center\">질문</h1>\n  </div>\n</header>\n<article class=\"container\">\n  <ol class=\"row breadcrumb\">\n      <li><a href=\"#\"><i class=\"glyphicon glyphicon-home\"></i> Home</a></li>\n      <li><a href=\"#\">Library</a></li>\n      <li class=\"active\">Data</li>\n  </ol>\n  <section class=\"row\">\n  <!-- 질문 -->\n      <div class=\"panel panel-default view-detail\">\n          <div class=\"panel-heading\">\n              <h2 class=\"panel-title\"><span>Q</span>{{topic_data.title}}</h2>\n          </div>\n          <div class=\"panel-body\">\n            <ul class=\"list-group-item-text clearfix\">\n                <li class=\"col-lg-3 col-xs-5\"><strong>작성자</strong>{{topic_user.username}}</li>\n                <li class=\"col-lg-3 col-xs-7\"><strong>작성일</strong>{{topic_data.createdDate}}</li>\n            </ul>\n            <p [innerHTML]=\"topic_data.content\"></p>\n            <div class=\"code-block\">\n                <h3>첨부파일 :</h3>\n                <blockquote>\n                    <ul class=\"list-group-item-text clearfix\">\n                        <li *ngFor=\"let attach_file of topic_attach_file\">\n                            \n                            {{attach_file.fileName}} \n                            <button class=\"page-link waves-light\" (click)=\"downloadFile(attach_file)\">다운로드</button>\n                            \n                        </li>\n                    </ul>\n                </blockquote>\n            </div>\n          </div>\n      </div>\n  <!-- //질문 -->\n  \n  <h2> 답변 : {{topic_answers.length}}</h2>\n  <!-- 답변 1 -->\n      <fieldset class=\"reply-box\" *ngFor=\"let answers of topic_answers\">\n          <div class=\"clearfix reply-title\">\n              <h2 class=\"panel-title pull-left\"><span>A</span>{{answers.user.username}} 답변 <div class=\"reply-date\">(2018-08-29 10:30:25)</div></h2>\n              <button class=\"btn pull-right\" type=\"button\" *ngIf=\"answers.user.id == current_user.id\"> 삭제</button>\n          </div>\n          <div class=\"panel panel-default view-detail \">\n              <div class=\"panel-body\">\n                  <div class=\"btn-group pull-right\" data-toggle=\"buttons\">\n                      <label class=\"btn btn-secondary\">\n                          <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked>\n                          도움이 됐다.</label>\n                      <label class=\"btn btn-secondary\">\n                          <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\">\n                          도움이 되지 않았다.</label>\n                  </div>\n                  <p [innerHTML]=\"answers.content\"></p>\n                  <div class=\"code-block\" >\n                        <h3>첨부파일 :</h3>\n                        <blockquote>\n                            <ul class=\"list-group-item-text clearfix\">\n                                <li *ngFor=\"let attach_file of answers.attachFile\">\n                                    \n                                    {{attach_file.fileName}} \n                                    <button class=\"page-link waves-light\" (click)=\"downloadFile(attach_file)\">다운로드</button>\n                                    \n                                </li>\n                            </ul>\n                        </blockquote>\n                  </div>\n              </div>\n          </div>\n      </fieldset>\n  <!-- //답변 1 -->\n  \n\n  <!-- 글쓰기 -->\n  <h2> 답변하기</h2>\n  <fieldset class=\"write-box\">\n    <div class=\"panel panel-info view-detail\">\n      <div class=\"panel-body\">\n        <div class=\"form-group\">\n          <label for=\"question\">본문 :</label>\n          <textarea class=\"form-control\" rows=\"5\" id=\"question\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"code\">첨부파일 :</label>\n          <textarea class=\"form-control\" rows=\"5\" id=\"code\"></textarea>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n  <!-- //글쓰기 -->\n      \n      <div class=\"text-center\">\n          <button class=\"btn btn-lg btn-default\" type=\"button\">목록</button>\n          <button class=\"btn btn-lg btn-primary\" type=\"button\">글쓰기</button>\n      </div> \n      \n  </section>\n  \n</article>\n<footer class=\"footer\">\n  <div class=\"container\">\n      <p class=\"text-muted\">Copyright (c) SSG PAY | API 관리운영시스템. All rights reserved.</p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/forum/qna/qna-detail/qna-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forum/qna/qna-detail/qna-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: QnaDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QnaDetailComponent", function() { return QnaDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_forum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/forum.service */ "./src/app/forum/service/forum.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QnaDetailComponent = /** @class */ (function () {
    function QnaDetailComponent(route, _forumService) {
        var _this = this;
        this.route = route;
        this._forumService = _forumService;
        this.topic_id = 0;
        this.topic_data = {};
        this.topic_user = {};
        this.topic_answers = [];
        this.topic_attach_file = [];
        this.answer_attach_file = [];
        this.current_user = {};
        this.route.params.subscribe(function (res) {
            return _this.topic_id = res.id;
        });
    }
    QnaDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._forumService.getTopicDetail(this.topic_id).subscribe(function (data) {
            console.log(data);
            _this.topic_data = data;
            _this.topic_user = data['user'];
            _this.topic_answers = data['answers'];
            _this.topic_attach_file = data['attachFile'];
        }, function (err) {
            console.log(err, err.message);
        });
        this._forumService.getUserSession().subscribe(function (data) {
            console.log(data);
            _this.current_user = data['user'];
        }, function (err) {
            console.log(err, err.message);
        });
    };
    QnaDetailComponent.prototype.downloadFile = function (attach_file) {
        console.log('downloadFile:' + attach_file.id);
        this._forumService.downloadByFileIdUrl(attach_file.id).subscribe(function (data) {
            console.log(data);
            window.URL.createObjectURL(data);
            var url = window.URL.createObjectURL(data);
            var a = document.createElement('a');
            document.body.appendChild(a);
            a.setAttribute('style', 'display: none');
            a.href = url;
            a.download = attach_file.fileName;
            a.click();
            window.URL.revokeObjectURL(url);
            a.remove(); // remove the element
        }, function (err) {
            console.log(err, err.message);
        });
    };
    QnaDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qna-detail',
            template: __webpack_require__(/*! ./qna-detail.component.html */ "./src/app/forum/qna/qna-detail/qna-detail.component.html"),
            styles: [__webpack_require__(/*! ./qna-detail.component.css */ "./src/app/forum/qna/qna-detail/qna-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_forum_service__WEBPACK_IMPORTED_MODULE_2__["ForumService"]])
    ], QnaDetailComponent);
    return QnaDetailComponent;
}());



/***/ }),

/***/ "./src/app/forum/qna/qna-write/qna-write.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forum/qna/qna-write/qna-write.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forum/qna/qna-write/qna-write.component.html":
/*!**************************************************************!*\
  !*** ./src/app/forum/qna/qna-write/qna-write.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<header class=\"jumbotron\">\n    <div class=\"container\">\n        <h1 class=\"text-center\">질문</h1>\n    </div>\n</header>\n<article class=\"container\">\n    <ol class=\"row breadcrumb\">\n        <li><a href=\"#\"><i class=\"glyphicon glyphicon-home\"></i> Home</a></li>\n        <li><a href=\"#\">Library</a></li>\n        <li class=\"active\">Data</li>\n    </ol>\n    <section class=\"row\">\n\t\t<!-- 글쓰기 -->\n\t\t<h2> 질문</h2>\n\t\t<fieldset class=\"write-box\">\n\t\t\t<div class=\"panel panel-info view-detail\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>먼저 질문한 사항을 확인한 뒤 질문하시기 바랍니다.</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\">\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit(fileInput.files)\">\n                <div class=\"form-group\">\n                    <label>제 목</label>\n                    <input type=\"text\" formControlName=\"title\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" />\n                    <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.title.errors.required\">제목을 입력하시요.</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label>본 문</label>\n                    <ckeditor name=\"qna_ckeditor\" class=\"ckeditorContent\" formControlName=\"content\"></ckeditor>\n                    <div *ngIf=\"submitted && f.content.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.content.errors.required\">본문을 입력하시오.</div>\n                    </div>\n                    \n                </div>\n                <div class=\"form-group\">\n                    <label>첨부파일</label>\n                    <input type=\"file\" class=\"form-control\" (change)=\"onFileChange(fileInput.files)\" #fileInput />\n                </div>\n                <div class=\"text-center\">\n                    <button class=\"btn btn-primary\">Register</button>\n                </div>\n            </form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</fieldset>\n\t\t<!-- //글쓰기 -->\n\n    </section>\n    \n</article>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/forum/qna/qna-write/qna-write.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forum/qna/qna-write/qna-write.component.ts ***!
  \************************************************************/
/*! exports provided: QnaWriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QnaWriteComponent", function() { return QnaWriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/urls */ "./src/app/common/urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QnaWriteComponent = /** @class */ (function () {
    function QnaWriteComponent(formBuilder, cd, _http) {
        this.formBuilder = formBuilder;
        this.cd = cd;
        this._http = _http;
        this.title = '';
        this.submitted = false;
        this.errors = { errors: {} };
        this.topicName = 'Q&A';
        this.registerForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            file: [''],
        });
    }
    QnaWriteComponent.prototype.ngOnInit = function () {
        var editor = this.ckEditor.instance;
        console.log('qna-write');
    };
    Object.defineProperty(QnaWriteComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    QnaWriteComponent.prototype.onFileChange = function (files) {
        var _this = this;
        var reader = new FileReader();
        console.log('onFileChange:' + event);
        if (files && files.length > 0) {
            // For Preview
            var file = files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.registerForm.patchValue({
                    file: reader.result
                });
                // need to run CD since file load runs outside of zone
                _this.cd.markForCheck();
            };
        }
    };
    QnaWriteComponent.prototype.onSubmit = function (files) {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
        var formData = new FormData();
        console.log(this.registerForm);
        console.log(files);
        var formValue = this.registerForm.value;
        if (files[0]) {
            formData.append('file', files[0]);
        }
        formData.append('title', formValue.title);
        formData.append('content', formValue.content);
        formData.append('category', 'qna');
        this._http.post(_common_urls__WEBPACK_IMPORTED_MODULE_4__["topicsUrl"], formData)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_1__["CKEditorComponent"]),
        __metadata("design:type", ng2_ckeditor__WEBPACK_IMPORTED_MODULE_1__["CKEditorComponent"])
    ], QnaWriteComponent.prototype, "ckEditor", void 0);
    QnaWriteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qna-write',
            template: __webpack_require__(/*! ./qna-write.component.html */ "./src/app/forum/qna/qna-write/qna-write.component.html"),
            styles: [__webpack_require__(/*! ./qna-write.component.css */ "./src/app/forum/qna/qna-write/qna-write.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], QnaWriteComponent);
    return QnaWriteComponent;
}());



/***/ }),

/***/ "./src/app/forum/qna/qna.component.css":
/*!*********************************************!*\
  !*** ./src/app/forum/qna/qna.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forum/qna/qna.component.html":
/*!**********************************************!*\
  !*** ./src/app/forum/qna/qna.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<header class=\"jumbotron\">\n    <div class=\"container\">\n        <h1 class=\"text-center\">Q & A</h1>\n    </div>\n</header>\n<article class=\"container\">\n\n    <ol class=\"row breadcrumb\">\n        <li><a href=\"#\"><i class=\"glyphicon glyphicon-home\"></i> Home</a></li>\n        <li><a href=\"#\">Library</a></li>\n        <li class=\"active\">Data</li>\n    </ol>\n\n    <div class=\"row search well\">\n        <div class=\"col-lg-4 col-xs-9\">\n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n                <span class=\"input-group-btn\">\n                <button class=\"btn btn-primary\" type=\"button\">검색</button>\n                </span> </div>\n        </div>\n        <div class=\"col-lg-8 col-xs-3 text-right\">\n            <button [routerLink]=\"['/forum/qna/write']\" class=\"btn btn-primary\" type=\"button\">글쓰기</button>\n        </div>\n    </div>\n\n    <section class=\"row\">\n      <div class=\"list-group\" *ngFor=\"let topic of topics\"> \n          <a routerLink=\"/forum/qna/detail/{{topic.id}}\" class=\"list-group-item\">\n          <h4 class=\"list-group-item-heading\">{{topic.title}}</h4>\n          <ul class=\"list-group-item-text clearfix\">\n              <li class=\"col-lg-3 col-xs-12\"><strong>작성자</strong>{{topic.user.username}}</li>\n              <li class=\"col-lg-3 col-xs-12\"><strong>작성일</strong>{{topic.createdDate}}</li>\n              <li class=\"col-lg-3 col-xs-6\"><strong>조회수</strong>0</li>\n              <li class=\"col-lg-3 col-xs-6\"><strong>답변수</strong><span class=\"badge badge-info\">{{topic.answers.length}}</span></li>\n          </ul>\n          </a> \n      </div>\n    \n      <div class=\"col text-center\">\n          <ul class=\"pagination pagination-sm\">\n          <li [ngClass]=\"{'active':i==page}\" *ngFor=\"let p of pages; let i=index\">\n            <a class=\"page-link waves-light\" href=\"\" (click)=\"setPage(i,$event)\"  >{{i+1}}</a>\n          </li>\n        </ul>\n      </div>\n\n  </section>\n \n</article>\n      \n  \n  \n      "

/***/ }),

/***/ "./src/app/forum/qna/qna.component.ts":
/*!********************************************!*\
  !*** ./src/app/forum/qna/qna.component.ts ***!
  \********************************************/
/*! exports provided: QnaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QnaComponent", function() { return QnaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_forum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/forum.service */ "./src/app/forum/service/forum.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QnaComponent = /** @class */ (function () {
    function QnaComponent(_forumService) {
        this._forumService = _forumService;
        this.page = 0;
    }
    QnaComponent.prototype.setPage = function (i, event) {
        event.preventDefault();
        this.page = i;
        this.getQnaList();
    };
    QnaComponent.prototype.ngOnInit = function () {
        this.getQnaList();
    };
    QnaComponent.prototype.getQnaList = function () {
        var _this = this;
        this._forumService.getQnaList(this.page).subscribe(function (data) {
            console.log(data);
            _this.topics = data['content'];
            _this.pages = new Array(data['totalPages']);
        }, function (err) {
            console.log(err, err.message);
        });
    };
    QnaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qna',
            template: __webpack_require__(/*! ./qna.component.html */ "./src/app/forum/qna/qna.component.html"),
            styles: [__webpack_require__(/*! ./qna.component.css */ "./src/app/forum/qna/qna.component.css")]
        }),
        __metadata("design:paramtypes", [_service_forum_service__WEBPACK_IMPORTED_MODULE_1__["ForumService"]])
    ], QnaComponent);
    return QnaComponent;
}());



/***/ }),

/***/ "./src/app/forum/service/forum.service.ts":
/*!************************************************!*\
  !*** ./src/app/forum/service/forum.service.ts ***!
  \************************************************/
/*! exports provided: ForumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumService", function() { return ForumService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/urls */ "./src/app/common/urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForumService = /** @class */ (function () {
    function ForumService(_http) {
        this._http = _http;
    }
    ForumService.prototype.getTopicList = function (page) {
        return this._http.get(_common_urls__WEBPACK_IMPORTED_MODULE_2__["topicsUrl"] + '?page=' + page);
    };
    ForumService.prototype.getTopicDetail = function (topicId) {
        return this._http.get(_common_urls__WEBPACK_IMPORTED_MODULE_2__["topicsUrl"] + '/' + topicId);
    };
    ForumService.prototype.getQnaList = function (page) {
        return this._http.get(_common_urls__WEBPACK_IMPORTED_MODULE_2__["qnaUrl"] + '?page=' + page);
    };
    ForumService.prototype.getGuideList = function (page) {
        return this._http.get(_common_urls__WEBPACK_IMPORTED_MODULE_2__["guideUrl"] + '?page=' + page);
    };
    ForumService.prototype.getGuideSpectator = function () {
        console.log(_common_urls__WEBPACK_IMPORTED_MODULE_2__["spectatorUrl"]);
        return this._http.get(_common_urls__WEBPACK_IMPORTED_MODULE_2__["spectatorUrl"]);
    };
    ForumService.prototype.getUserSession = function () {
        return this._http.get(_common_urls__WEBPACK_IMPORTED_MODULE_2__["userBySessionUrl"]);
    };
    ForumService.prototype.downloadByFileIdUrl = function (id) {
        return this._http.get(_common_urls__WEBPACK_IMPORTED_MODULE_2__["downloadByFileIdUrl"] + '/' + id, { responseType: 'blob' });
    };
    ForumService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ForumService);
    return ForumService;
}());



/***/ }),

/***/ "./src/app/forum/service/guide-template.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/forum/service/guide-template.service.ts ***!
  \*********************************************************/
/*! exports provided: GuideTemplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideTemplateService", function() { return GuideTemplateService; });
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

var GuideTemplateService = /** @class */ (function () {
    function GuideTemplateService() {
        this.restfulTemplate = "<div id=\"content\">\n  <div class=\"sect1\">\n  <h2>1. \uAC1C\uC694</h2>\n  \n  <div class=\"sectionbody\">\n  <div class=\"paragraph\">\n  <p>Petstore API Description</p>\n  </div>\n  \n  <div class=\"sect2\">\n  <h3>1.1. \uBC84\uC804 \uC815\uBCF4</h3>\n  \n  <div class=\"paragraph\">\n  <p><em>Version</em> : 1.0.0</p>\n  </div>\n  </div>\n  \n  <div class=\"sect2\">\n  <h3>1.2. \uC5F0\uB77D\uCC98 \uC815\uBCF4</h3>\n  \n  <div class=\"paragraph\">\n  <p><em>Contact</em> : \uC774\uB984<br />\n  <em>Contact Email</em> : \uC774\uBA54\uC77C@ssgpay.com</p>\n  </div>\n  </div>\n  \n  <div class=\"sect2\">\n  <h3>1.3. \uB77C\uC774\uC13C\uC2A4&nbsp;\uC815\uBCF4</h3>\n  \n  <div class=\"paragraph\">\n  <p><em>License</em> : Apache 2.0<br />\n  <em>License URL</em> : <a class=\"bare\" href=\"http://www.apache.org/licenses/LICENSE-2.0.html\">http://www.apache.org/licenses/LICENSE-2.0.html</a></p>\n  </div>\n  </div>\n  \n  <div class=\"sect2\">\n  <h3>1.4. URI \uC2A4\uD0B4</h3>\n  \n  <div class=\"paragraph\">\n  <p><em>Host</em> : localhost:8080<br />\n  <em>BasePath</em> : /</p>\n  </div>\n  </div>\n  \n  <div class=\"sect2\">\n  <h3>1.5. Tags</h3>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p>Stores : Operations about store</p>\n      </li>\n      <li>\n      <p>Users : Operations about user</p>\n      </li>\n      <li>\n      <p>Pets : Operations about pets</p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect1\">\n  <h2>2. \uC8FC \uC81C\uBAA9 1&nbsp;</h2>\n  \n  <div class=\"sectionbody\">\n  <div class=\"paragraph\">\n  <p>\uC8FC \uC81C\uBAA9 1\uC5D0 \uB300\uD55C \uC124\uBA85</p>\n  </div>\n  \n  <div class=\"sect2\">\n  <h3>2.1. \uBD80 \uC81C\uBAA9 chapter</h3>\n  \n  <div class=\"paragraph\">\n  <p>\uBD80 \uC81C\uBAA9\uC5D0 \uB300\uD55C \uC124\uBA85</p>\n  </div>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect1\">\n  <h2>3. \uC8FC \uC81C\uBAA9 2</h2>\n  \n  <div class=\"sectionbody\">\n  <div class=\"paragraph\">\n  <p>\uC8FC \uC81C\uBAA9 2 \uC5D0 \uB300\uD55C \uC124\uBA85</p>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect1\">\n  <h2>4. Resources</h2>\n  \n  <div class=\"sectionbody\">\n  <div class=\"sect2\">\n  <h3>4.1. Pets</h3>\n  \n  <div class=\"paragraph\">\n  <p>Operations about pets</p>\n  </div>\n  \n  <div class=\"sect3\">\n  <h4>4.1.1. Add a new pet to the store</h4>\n  \n  <div class=\"literalblock\">\n  <div class=\"content\">\n  <pre>\n  POST /pets</pre>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Parameters</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Type</th>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>Body</strong></p>\n              </td>\n              <td>\n              <p><strong>pet</strong><br />\n              <em>required</em></p>\n              </td>\n              <td>\n              <p>Pet object that needs to be added to the store</p>\n              </td>\n              <td>\n              <p>Pet</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Responses</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>HTTP Code</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>200</strong></p>\n              </td>\n              <td>\n              <p>OK</p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>201</strong></p>\n              </td>\n              <td>\n              <p>Created</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>401</strong></p>\n              </td>\n              <td>\n              <p>Unauthorized</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>403</strong></p>\n              </td>\n              <td>\n              <p>Forbidden</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>404</strong></p>\n              </td>\n              <td>\n              <p>Not Found</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>405</strong></p>\n              </td>\n              <td>\n              <p>Invalid input</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Consumes</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Produces</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/xml</code></p>\n      </li>\n      <li>\n      <p><code>application/x-smile</code></p>\n      </li>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Example HTTP request</h5>\n  \n  <div class=\"listingblock\">\n  <div class=\"content\">\n  <pre>\n  <code>POST /pets/ HTTP/1.1\n    Content-Type: application/json;charset=UTF-8\n    Host: localhost:8080\n    Content-Length: 96\n    \n    {&quot;id&quot;:1,&quot;category&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;Hund&quot;},&quot;name&quot;:&quot;Wuffy&quot;,&quot;photoUrls&quot;:[],&quot;tags&quot;:[],&quot;status&quot;:null}</code></pre>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Example HTTP response</h5>\n  \n  <div class=\"listingblock\">\n  <div class=\"content\">\n  <pre>\n  <code>HTTP/1.1 200 OK\n    Content-Type: application/json;charset=UTF-8\n    Content-Length: 7\n    \n    SUCCESS</code></pre>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Example Curl request</h5>\n  \n  <div class=\"listingblock\">\n  <div class=\"content\">\n  <pre>\n  <code>$ curl &#39;http://localhost:8080/pets/&#39; -i -X POST -H &#39;Content-Type: application/json;charset=UTF-8&#39; -d &#39;{&quot;id&quot;:1,&quot;category&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;Hund&quot;},&quot;name&quot;:&quot;Wuffy&quot;,&quot;photoUrls&quot;:[],&quot;tags&quot;:[],&quot;status&quot;:null}&#39;</code></pre>\n  </div>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect3\">\n  <h4>4.1.2. Update an existing pet</h4>\n  \n  <div class=\"literalblock\">\n  <div class=\"content\">\n  <pre>\n  PUT /pets</pre>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Parameters</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Type</th>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>Body</strong></p>\n              </td>\n              <td>\n              <p><strong>pet</strong><br />\n              <em>required</em></p>\n              </td>\n              <td>\n              <p>Pet object that needs to be added to the store</p>\n              </td>\n              <td>\n              <p>Pet</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Responses</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>HTTP Code</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>200</strong></p>\n              </td>\n              <td>\n              <p>OK</p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>201</strong></p>\n              </td>\n              <td>\n              <p>Created</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>400</strong></p>\n              </td>\n              <td>\n              <p>Invalid ID supplied</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>401</strong></p>\n              </td>\n              <td>\n              <p>Unauthorized</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>403</strong></p>\n              </td>\n              <td>\n              <p>Forbidden</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>404</strong></p>\n              </td>\n              <td>\n              <p>Pet not found</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>405</strong></p>\n              </td>\n              <td>\n              <p>Validation exception</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Consumes</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Produces</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/xml</code></p>\n      </li>\n      <li>\n      <p><code>application/x-smile</code></p>\n      </li>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Security</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Type</th>\n              <th>Name</th>\n              <th>Scopes</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>oauth2</strong></p>\n              </td>\n              <td>\n              <p><strong>petstore_auth</strong></p>\n              </td>\n              <td>\n              <p>write_pets,read_pets</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  </div>\n  \n  <div class=\"sect3\">\n  <h4>4.1.3. Finds Pets by status</h4>\n  \n  <div class=\"literalblock\">\n  <div class=\"content\">\n  <pre>\n  GET /pets/findByStatus</pre>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Description</h5>\n  \n  <div class=\"paragraph\">\n  <p>Multiple status values can be provided with comma seperated strings</p>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Parameters</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Type</th>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n              <th>Default</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>Query</strong></p>\n              </td>\n              <td>\n              <p><strong>status</strong><br />\n              <em>required</em></p>\n              </td>\n              <td>\n              <p>Status values that need to be considered for filter</p>\n              </td>\n              <td>\n              <p>enum (available, pending, sold)</p>\n              </td>\n              <td>\n              <p><code>&quot;available&quot;</code></p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Responses</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>HTTP Code</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>200</strong></p>\n              </td>\n              <td>\n              <p>OK</p>\n              </td>\n              <td>\n              <p>&lt; Pet &gt; array</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>400</strong></p>\n              </td>\n              <td>\n              <p>Invalid status value</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>401</strong></p>\n              </td>\n              <td>\n              <p>Unauthorized</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>403</strong></p>\n              </td>\n              <td>\n              <p>Forbidden</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>404</strong></p>\n              </td>\n              <td>\n              <p>Not Found</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Consumes</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Produces</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/xml</code></p>\n      </li>\n      <li>\n      <p><code>application/x-smile</code></p>\n      </li>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Security</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Type</th>\n              <th>Name</th>\n              <th>Scopes</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>oauth2</strong></p>\n              </td>\n              <td>\n              <p><strong>petstore_auth</strong></p>\n              </td>\n              <td>\n              <p>write_pets,read_pets</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  \n  <div class=\"admonitionblock caution\">\n  <table>\n      <tbody>\n          <tr>\n              <td>\n              <div class=\"title\">Caution</div>\n              </td>\n              <td>\n              <div class=\"paragraph\">\n              <p>This operation is deprecated.</p>\n              </div>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect3\">\n  <h4>4.1.4. Finds Pets by tags</h4>\n  \n  <div class=\"literalblock\">\n  <div class=\"content\">\n  <pre>\n  GET /pets/findByTags</pre>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Description</h5>\n  \n  <div class=\"paragraph\">\n  <p>Muliple tags can be provided with comma seperated strings. Use tag1, tag2, tag3 for testing.</p>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Parameters</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Type</th>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>Query</strong></p>\n              </td>\n              <td>\n              <p><strong>tags</strong><br />\n              <em>required</em></p>\n              </td>\n              <td>\n              <p>Tags to filter by</p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Responses</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>HTTP Code</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>200</strong></p>\n              </td>\n              <td>\n              <p>OK</p>\n              </td>\n              <td>\n              <p>&lt; Pet &gt; array</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>400</strong></p>\n              </td>\n              <td>\n              <p>Invalid tag value</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>401</strong></p>\n              </td>\n              <td>\n              <p>Unauthorized</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>403</strong></p>\n              </td>\n              <td>\n              <p>Forbidden</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>404</strong></p>\n              </td>\n              <td>\n              <p>Not Found</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Consumes</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Produces</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/xml</code></p>\n      </li>\n      <li>\n      <p><code>application/x-smile</code></p>\n      </li>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Security</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Type</th>\n              <th>Name</th>\n              <th>Scopes</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>oauth2</strong></p>\n              </td>\n              <td>\n              <p><strong>petstore_auth</strong></p>\n              </td>\n              <td>\n              <p>write_pets,read_pets</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  </div>\n  \n  <div class=\"sect3\">\n  <h4>4.1.5. Find pet by ID</h4>\n  \n  <div class=\"literalblock\">\n  <div class=\"content\">\n  <pre>\n  GET /pets/{petId}</pre>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Description</h5>\n  \n  <div class=\"paragraph\">\n  <p>Returns a pet when ID &lt; 10. ID &gt; 10 or nonintegers will simulate API error conditions</p>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Parameters</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Type</th>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>Path</strong></p>\n              </td>\n              <td>\n              <p><strong>petId</strong><br />\n              <em>required</em></p>\n              </td>\n              <td>\n              <p>ID of pet that needs to be fetched</p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Responses</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>HTTP Code</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>200</strong></p>\n              </td>\n              <td>\n              <p>OK</p>\n              </td>\n              <td>\n              <p>Pet</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>400</strong></p>\n              </td>\n              <td>\n              <p>Invalid ID supplied</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>401</strong></p>\n              </td>\n              <td>\n              <p>Unauthorized</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>403</strong></p>\n              </td>\n              <td>\n              <p>Forbidden</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>404</strong></p>\n              </td>\n              <td>\n              <p>Pet not found</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Consumes</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Produces</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/xml</code></p>\n      </li>\n      <li>\n      <p><code>application/x-smile</code></p>\n      </li>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Security</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Type</th>\n              <th>Name</th>\n              <th>Scopes</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>apiKey</strong></p>\n              </td>\n              <td>\n              <p><strong>api_key</strong></p>\n              </td>\n              <td>&nbsp;</td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>oauth2</strong></p>\n              </td>\n              <td>\n              <p><strong>petstore_auth</strong></p>\n              </td>\n              <td>\n              <p>write_pets,read_pets</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect2\">\n  <h3>4.2. Stores</h3>\n  \n  <div class=\"paragraph\">\n  <p>Operations about store</p>\n  </div>\n  \n  <div class=\"sect3\">\n  <h4>4.2.1. Place an order for a pet</h4>\n  \n  <div class=\"literalblock\">\n  <div class=\"content\">\n  <pre>\n  POST /stores/order</pre>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Parameters</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Type</th>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>Body</strong></p>\n              </td>\n              <td>\n              <p><strong>order</strong><br />\n              <em>required</em></p>\n              </td>\n              <td>\n              <p>order placed for purchasing the pet</p>\n              </td>\n              <td>\n              <p>Order</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Responses</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>HTTP Code</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>200</strong></p>\n              </td>\n              <td>\n              <p>OK</p>\n              </td>\n              <td>\n              <p>Order</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>201</strong></p>\n              </td>\n              <td>\n              <p>Created</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>400</strong></p>\n              </td>\n              <td>\n              <p>Invalid Order</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>401</strong></p>\n              </td>\n              <td>\n              <p>Unauthorized</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>403</strong></p>\n              </td>\n              <td>\n              <p>Forbidden</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>404</strong></p>\n              </td>\n              <td>\n              <p>Not Found</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Consumes</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Produces</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect3\">\n  <h4>4.2.2. Find purchase order by ID</h4>\n  \n  <div class=\"literalblock\">\n  <div class=\"content\">\n  <pre>\n  GET /stores/order/{orderId}</pre>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Description</h5>\n  \n  <div class=\"paragraph\">\n  <p>For valid response try integer IDs with value &lt;= 5 or &gt; 10. Other values will generated exceptions</p>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Parameters</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Type</th>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>Path</strong></p>\n              </td>\n              <td>\n              <p><strong>orderId</strong><br />\n              <em>required</em></p>\n              </td>\n              <td>\n              <p>ID of pet that needs to be fetched</p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Responses</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>HTTP Code</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>200</strong></p>\n              </td>\n              <td>\n              <p>OK</p>\n              </td>\n              <td>\n              <p>Order</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>400</strong></p>\n              </td>\n              <td>\n              <p>Invalid ID supplied</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>401</strong></p>\n              </td>\n              <td>\n              <p>Unauthorized</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>403</strong></p>\n              </td>\n              <td>\n              <p>Forbidden</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>404</strong></p>\n              </td>\n              <td>\n              <p>Order not found</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Consumes</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Produces</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect3\">\n  <h4>4.2.3. Delete purchase order by ID</h4>\n  \n  <div class=\"literalblock\">\n  <div class=\"content\">\n  <pre>\n  DELETE /stores/order/{orderId}</pre>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Description</h5>\n  \n  <div class=\"paragraph\">\n  <p>For valid response try integer IDs with value &lt; 1000. Anything above 1000 or nonintegers will generate API errors</p>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Parameters</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Type</th>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>Path</strong></p>\n              </td>\n              <td>\n              <p><strong>orderId</strong><br />\n              <em>required</em></p>\n              </td>\n              <td>\n              <p>ID of the order that needs to be deleted</p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Responses</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>HTTP Code</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>200</strong></p>\n              </td>\n              <td>\n              <p>OK</p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>204</strong></p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>400</strong></p>\n              </td>\n              <td>\n              <p>Invalid ID supplied</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>401</strong></p>\n              </td>\n              <td>\n              <p>Unauthorized</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>403</strong></p>\n              </td>\n              <td>\n              <p>Forbidden</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>404</strong></p>\n              </td>\n              <td>\n              <p>Order not found</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Consumes</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Produces</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect2\">\n  <h3>4.3. Users</h3>\n  \n  <div class=\"paragraph\">\n  <p>Operations about user</p>\n  </div>\n  \n  <div class=\"sect3\">\n  <h4>4.3.1. Create user</h4>\n  \n  <div class=\"literalblock\">\n  <div class=\"content\">\n  <pre>\n  POST /users</pre>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Description</h5>\n  \n  <div class=\"paragraph\">\n  <p>This can only be done by the logged in user.</p>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Parameters</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Type</th>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>Body</strong></p>\n              </td>\n              <td>\n              <p><strong>user</strong><br />\n              <em>required</em></p>\n              </td>\n              <td>\n              <p>Created user object</p>\n              </td>\n              <td>\n              <p>User</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Responses</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>HTTP Code</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>200</strong></p>\n              </td>\n              <td>\n              <p>OK</p>\n              </td>\n              <td>\n              <p>User</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>201</strong></p>\n              </td>\n              <td>\n              <p>Created</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>401</strong></p>\n              </td>\n              <td>\n              <p>Unauthorized</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>403</strong></p>\n              </td>\n              <td>\n              <p>Forbidden</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>404</strong></p>\n              </td>\n              <td>\n              <p>Not Found</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Consumes</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Produces</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect3\">\n  <h4>4.3.2. Creates list of users with given input array</h4>\n  \n  <div class=\"literalblock\">\n  <div class=\"content\">\n  <pre>\n  POST /users/createWithArray</pre>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Parameters</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Type</th>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>Body</strong></p>\n              </td>\n              <td>\n              <p><strong>users</strong><br />\n              <em>required</em></p>\n              </td>\n              <td>\n              <p>List of user object</p>\n              </td>\n              <td>\n              <p>&lt; User &gt; array</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Responses</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>HTTP Code</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>200</strong></p>\n              </td>\n              <td>\n              <p>OK</p>\n              </td>\n              <td>\n              <p>User</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>201</strong></p>\n              </td>\n              <td>\n              <p>Created</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>401</strong></p>\n              </td>\n              <td>\n              <p>Unauthorized</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>403</strong></p>\n              </td>\n              <td>\n              <p>Forbidden</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>404</strong></p>\n              </td>\n              <td>\n              <p>Not Found</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Consumes</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Produces</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect3\">\n  <h4>4.3.3. Creates list of users with given input array</h4>\n  \n  <div class=\"literalblock\">\n  <div class=\"content\">\n  <pre>\n  POST /users/createWithList</pre>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Parameters</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Type</th>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>Body</strong></p>\n              </td>\n              <td>\n              <p><strong>users</strong><br />\n              <em>required</em></p>\n              </td>\n              <td>\n              <p>List of user object</p>\n              </td>\n              <td>\n              <p>&lt; User &gt; array</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Responses</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>HTTP Code</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>200</strong></p>\n              </td>\n              <td>\n              <p>OK</p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>201</strong></p>\n              </td>\n              <td>\n              <p>Created</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>401</strong></p>\n              </td>\n              <td>\n              <p>Unauthorized</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>403</strong></p>\n              </td>\n              <td>\n              <p>Forbidden</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>404</strong></p>\n              </td>\n              <td>\n              <p>Not Found</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Consumes</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Produces</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect3\">\n  <h4>4.3.4. Logs user into the system</h4>\n  \n  <div class=\"literalblock\">\n  <div class=\"content\">\n  <pre>\n  GET /users/login</pre>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Parameters</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Type</th>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>Query</strong></p>\n              </td>\n              <td>\n              <p><strong>password</strong><br />\n              <em>required</em></p>\n              </td>\n              <td>\n              <p>The password for login in clear text</p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>Query</strong></p>\n              </td>\n              <td>\n              <p><strong>username</strong><br />\n              <em>required</em></p>\n              </td>\n              <td>\n              <p>The user name for login</p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Responses</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>HTTP Code</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>200</strong></p>\n              </td>\n              <td>\n              <p>OK</p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>400</strong></p>\n              </td>\n              <td>\n              <p>Invalid username/password supplied</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>401</strong></p>\n              </td>\n              <td>\n              <p>Unauthorized</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>403</strong></p>\n              </td>\n              <td>\n              <p>Forbidden</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>404</strong></p>\n              </td>\n              <td>\n              <p>Not Found</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Consumes</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Produces</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect3\">\n  <h4>4.3.5. Logs out current logged in user session</h4>\n  \n  <div class=\"literalblock\">\n  <div class=\"content\">\n  <pre>\n  GET /users/logout</pre>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Responses</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>HTTP Code</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>200</strong></p>\n              </td>\n              <td>\n              <p>OK</p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>401</strong></p>\n              </td>\n              <td>\n              <p>Unauthorized</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>403</strong></p>\n              </td>\n              <td>\n              <p>Forbidden</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>404</strong></p>\n              </td>\n              <td>\n              <p>Not Found</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Consumes</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Produces</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect3\">\n  <h4>4.3.6. Get user by user name</h4>\n  \n  <div class=\"literalblock\">\n  <div class=\"content\">\n  <pre>\n  GET /users/{username}</pre>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Parameters</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Type</th>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>Path</strong></p>\n              </td>\n              <td>\n              <p><strong>username</strong><br />\n              <em>required</em></p>\n              </td>\n              <td>\n              <p>The name that needs to be fetched. Use user1 for testing.</p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Responses</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>HTTP Code</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>200</strong></p>\n              </td>\n              <td>\n              <p>OK</p>\n              </td>\n              <td>\n              <p>User</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>400</strong></p>\n              </td>\n              <td>\n              <p>Invalid username supplied</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>401</strong></p>\n              </td>\n              <td>\n              <p>Unauthorized</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>403</strong></p>\n              </td>\n              <td>\n              <p>Forbidden</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>404</strong></p>\n              </td>\n              <td>\n              <p>User not found</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Consumes</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Produces</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect3\">\n  <h4>4.3.7. Updated user</h4>\n  \n  <div class=\"literalblock\">\n  <div class=\"content\">\n  <pre>\n  PUT /users/{username}</pre>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Description</h5>\n  \n  <div class=\"paragraph\">\n  <p>This can only be done by the logged in user.</p>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Parameters</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Type</th>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>Path</strong></p>\n              </td>\n              <td>\n              <p><strong>username</strong><br />\n              <em>required</em></p>\n              </td>\n              <td>\n              <p>name that need to be deleted</p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>Body</strong></p>\n              </td>\n              <td>\n              <p><strong>user</strong><br />\n              <em>required</em></p>\n              </td>\n              <td>\n              <p>Updated user object</p>\n              </td>\n              <td>\n              <p>User</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Responses</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>HTTP Code</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>200</strong></p>\n              </td>\n              <td>\n              <p>OK</p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>201</strong></p>\n              </td>\n              <td>\n              <p>Created</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>400</strong></p>\n              </td>\n              <td>\n              <p>Invalid user supplied</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>401</strong></p>\n              </td>\n              <td>\n              <p>Unauthorized</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>403</strong></p>\n              </td>\n              <td>\n              <p>Forbidden</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>404</strong></p>\n              </td>\n              <td>\n              <p>User not found</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Consumes</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Produces</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect3\">\n  <h4>4.3.8. Delete user</h4>\n  \n  <div class=\"literalblock\">\n  <div class=\"content\">\n  <pre>\n  DELETE /users/{username}</pre>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Description</h5>\n  \n  <div class=\"paragraph\">\n  <p>This can only be done by the logged in user.</p>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Parameters</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Type</th>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>Path</strong></p>\n              </td>\n              <td>\n              <p><strong>username</strong><br />\n              <em>required</em></p>\n              </td>\n              <td>\n              <p>The name that needs to be deleted</p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Responses</h5>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>HTTP Code</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>200</strong></p>\n              </td>\n              <td>\n              <p>OK</p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>204</strong></p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>400</strong></p>\n              </td>\n              <td>\n              <p>Invalid username supplied</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>401</strong></p>\n              </td>\n              <td>\n              <p>Unauthorized</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>403</strong></p>\n              </td>\n              <td>\n              <p>Forbidden</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>404</strong></p>\n              </td>\n              <td>\n              <p>User not found</p>\n              </td>\n              <td>\n              <p>No Content</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Consumes</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>Produces</h5>\n  \n  <div class=\"ulist\">\n  <ul>\n      <li>\n      <p><code>application/json</code></p>\n      </li>\n  </ul>\n  </div>\n  </div>\n  </div>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect1\">\n  <h2>5. Security</h2>\n  \n  <div class=\"sectionbody\">\n  <div class=\"sect2\">\n  <h3>5.1. petstore_auth</h3>\n  \n  <div class=\"paragraph\">\n  <p><em>Type</em> : oauth2<br />\n  <em>Flow</em> : implicit<br />\n  <em>Token URL</em> : <a class=\"bare\" href=\"http://petstore.swagger.io/api/oauth/dialog\">http://petstore.swagger.io/api/oauth/dialog</a></p>\n  </div>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Name</th>\n              <th>Description</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p>write_pets</p>\n              </td>\n              <td>\n              <p>modify pets in your account</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p>read_pets</p>\n              </td>\n              <td>\n              <p>read your pets</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect2\">\n  <h3>5.2. api_key</h3>\n  \n  <div class=\"paragraph\">\n  <p><em>Type</em> : apiKey<br />\n  <em>Name</em> : api_key<br />\n  <em>In</em> : HEADER</p>\n  </div>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect1\">\n  <h2>6. Definitions</h2>\n  \n  <div class=\"sectionbody\">\n  <div class=\"sect2\">\n  <h3>6.1. Category</h3>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>id</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>&nbsp;</td>\n              <td>\n              <p>integer(int64)</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>name</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>\n              <p><strong>Length</strong> : <code>1 - 100</code></p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect2\">\n  <h3>6.2. Order</h3>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>complete</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>&nbsp;</td>\n              <td>\n              <p>boolean</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>id</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>&nbsp;</td>\n              <td>\n              <p>integer(int64)</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>petId</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>&nbsp;</td>\n              <td>\n              <p>integer(int64)</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>quantity</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>\n              <p><strong>Minimum value</strong> : <code>1</code><br />\n              <strong>Maximum value</strong> : <code>100</code></p>\n              </td>\n              <td>\n              <p>integer(int32)</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>shipDate</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>&nbsp;</td>\n              <td>\n              <p>string(date-time)</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>status</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>\n              <p>Order Status</p>\n              </td>\n              <td>\n              <p>enum (placed, approved, delivered)</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect2\">\n  <h3>6.3. Pet</h3>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>category</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>&nbsp;</td>\n              <td>\n              <p>Category</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>id</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>&nbsp;</td>\n              <td>\n              <p>integer(int64)</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>name</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>\n              <p><strong>Length</strong> : <code>1 - 100</code></p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>photoUrls</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>&nbsp;</td>\n              <td>\n              <p>&lt; string &gt; array</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>status</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>\n              <p>pet status in the store</p>\n              </td>\n              <td>\n              <p>enum (available, pending, sold)</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>tags</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>&nbsp;</td>\n              <td>\n              <p>&lt; Tag &gt; array</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect2\">\n  <h3>6.4. Tag</h3>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>id</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>&nbsp;</td>\n              <td>\n              <p>integer(int64)</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>name</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>\n              <p><strong>Length</strong> : <code>1 - 100</code></p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect2\">\n  <h3>6.5. User</h3>\n  \n  <table class=\"frame-all grid-all spread tableblock\">\n      <thead>\n          <tr>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Schema</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td>\n              <p><strong>email</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>&nbsp;</td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>firstName</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>\n              <p><strong>Length</strong> : <code>1 - 200</code></p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>id</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>&nbsp;</td>\n              <td>\n              <p>integer(int64)</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>lastName</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>\n              <p><strong>Length</strong> : <code>1 - 200</code></p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>password</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>&nbsp;</td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>phone</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>&nbsp;</td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>userStatus</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>\n              <p>User Status</p>\n              </td>\n              <td>\n              <p>integer(int32)</p>\n              </td>\n          </tr>\n          <tr>\n              <td>\n              <p><strong>username</strong><br />\n              <em>optional</em></p>\n              </td>\n              <td>\n              <p><strong>Length</strong> : <code>1 - 100</code></p>\n              </td>\n              <td>\n              <p>string</p>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  </div>\n  </div>\n  </div>\n  </div>\n  ";
        this.tcpTemplate = "<div id=\"content\">\n  <div class=\"sect1\">\n  <h2>1. \uAC1C\uC694</h2>\n  \n  <div class=\"sectionbody\">\n  <div class=\"paragraph\">\n  <p>\uC2E0\uC138\uACC4 POSA \uC870\uD68C / \uC2B9\uC778 \uC804\uBB38</p>\n  </div>\n  \n  <div class=\"sect2\">\n  <h3>1.1. \uBC84\uC804 \uC815\uBCF4</h3>\n  \n  <div class=\"paragraph\">\n  <p><em>Version</em> : 1.0.0</p>\n  </div>\n  </div>\n  \n  <div class=\"sect2\">\n  <h3>1.2. \uC5F0\uB77D\uCC98 \uC815\uBCF4</h3>\n  \n  <div class=\"paragraph\">\n  <p><em>Contact</em> : \uC774\uB984<br />\n  <em>Contact Email</em> : \uC774\uBA54\uC77C@ssgpay.com</p>\n  </div>\n  </div>\n  \n  <div class=\"sect2\">\n  <h3>1.3. \uB77C\uC774\uC13C\uC2A4&nbsp;\uC815\uBCF4</h3>\n  \n  <div class=\"paragraph\">\n  <p><em>License</em> :&nbsp;<br />\n  <em>License URL</em> :&nbsp;</p>\n  </div>\n  </div>\n  \n  <div class=\"sect2\">\n  <h3>1.4. \uC804\uC1A1 \uC815\uBCF4</h3>\n  \n  <div class=\"paragraph\">\n  <p><em>\uC11C\uBC84</em> : localhost:8080<br />\n  &nbsp;</p>\n  </div>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect1\">\n  <h2>2. \uC804\uBB38 \uC124\uBA85&nbsp;</h2>\n  \n  <div class=\"sectionbody\">\n  <div class=\"paragraph\">\n  <p>\uC2E0\uC138\uACC4 POSA \uC870\uD68C/\uC2B9\uC778 \uC804\uBB38</p>\n  </div>\n  \n  <div class=\"sect2\">\n  <h3>2.1. \uAC1C\uC815\uC774\uB825</h3>\n  \n  <div class=\"paragraph\">\n  <p>2016.04.06 ,&nbsp;V1.6 ,&nbsp;TACK_TYPE \uC124\uBA85 \uBCC0\uACBD</p>\n  \n  <h3>2.2. POSA \uC870\uD68C</h3>\n  \n  <p>POSA \uC804\uBB38\uC774\uB780</p>\n  </div>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect1\">\n  <h2>3. \uC804\uBB38\uB0B4\uC6A9</h2>\n  \n  <div class=\"sectionbody\">\n  <div class=\"sect2\">\n  <h3>3.1. \uC870\uD68C \uC2B9\uC778 \uC804\uBB38</h3>\n  \n  <div class=\"sect3\">\n  <div class=\"sect4\">\n  <table class=\"frame-all grid-all spread tableblock\">\n    <thead>\n      <tr>\n        <th>\uC21C\uBC88</th>\n        <th colspan=\"3\">\uD56D\uBAA9</th>\n        <th>\uC18D\uC131</th>\n        <th>\uAE38\uC774</th>\n        <th>\uBE44\uACE0</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>\n        <p><strong>1</strong></p>\n        </td>\n        <td colspan=\"1\" rowspan=\"3\">HEADER</td>\n        <td>MSG_LEN</td>\n        <td>\uC804\uBB38\uAE38\uC774</td>\n        <td>\n        <p>N</p>\n        </td>\n        <td>\n        <p>4</p>\n        </td>\n        <td>&quot;0900&quot;</td>\n      </tr>\n      <tr>\n        <td>2</td>\n        <td>MSG_ID</td>\n        <td>\uC804\uBB38ID</td>\n        <td>AN</td>\n        <td>8</td>\n        <td>PSIF0100(\uC794\uC561\uC870\uD68C)</td>\n      </tr>\n      <tr>\n        <td>3</td>\n        <td>MCH_SEND_DATE</td>\n        <td>\uC804\uBB38\uC804\uC1A1\uC77C\uC790</td>\n        <td>N</td>\n        <td>8</td>\n        <td>YYYYMMDD</td>\n      </tr>\n      <tr>\n        <td>4</td>\n        <td colspan=\"1\" rowspan=\"3\">DATA</td>\n        <td>TRAN_TYPE</td>\n        <td>\uAC70\uB798 TYPE</td>\n        <td>AN</td>\n        <td>2</td>\n        <td>\uC2B9\uC778 : 00, \uCDE8\uC18C: 01, \uB9DD\uCDE8\uC18C : 03, \uC870\uD68C : 05</td>\n      </tr>\n      <tr>\n        <td>5</td>\n        <td>TRADE_TYPE</td>\n        <td>\uC694\uCCAD TYPE</td>\n        <td>AN</td>\n        <td>2</td>\n        <td>\n        <p>47 : \uC870\uD68C,</p>\n  \n        <p>29 : \uD65C\uC131\uD654, 69 : \uD65C\uC131\uD654 \uCDE8\uC18C</p>\n  \n        <p>25 : \uD68C\uC218, 65 : \uD68C\uC218 \uCDE8\uC18C</p>\n        </td>\n      </tr>\n      <tr>\n        <td>6</td>\n        <td>POSA_CARD_NO</td>\n        <td>POSA \uCE74\uB4DC\uBC88\uD638</td>\n        <td>AN</td>\n        <td>100</td>\n        <td>\uC5F0\uBC88\uD65C\uC131\uD654 \uC2DC \uB9C8\uC9C0\uB9C9 \uCE74\uB4DC \uBC88\uD638 \uC815\uBCF4</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n  \n  <div class=\"sect4\">\n  <h5>&nbsp;</h5>\n  </div>\n  </div>\n  </div>\n  </div>\n  </div>\n  \n  <div class=\"sect1\">\n  <div class=\"sectionbody\">&nbsp;</div>\n  </div>\n  </div>\n  ";
        this.etcTemplate = "<div>etc</div>";
    }
    GuideTemplateService.prototype.getRestfulTemplate = function () {
        return this.restfulTemplate;
    };
    GuideTemplateService.prototype.getTcpTemplate = function () {
        return this.tcpTemplate;
    };
    GuideTemplateService.prototype.getEtcTemplate = function () {
        return this.etcTemplate;
    };
    GuideTemplateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GuideTemplateService);
    return GuideTemplateService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!-- Carousel\n  ================================================== -->\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\"> \n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"item active\">\n          <div class=\"first-slide\">\n              <div class=\"container\">\n                  <div class=\"carousel-caption\">\n                      <h1>개발에 필요한 환경을 제공합니다.</h1>\n                      <p>사용자에게 검증받은 플랫폼을 이제 여러분들도 함께 사용할 수 있습니다. <br>\n                          여러분의 피드백을 통해 API로 계속 제공될 것입니다.</p>\n                      <p><a class=\"btn btn-md btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"item\">\n          <div class=\"second-slide\">\n              <div class=\"container\">\n                  <div class=\"carousel-caption\">\n                      <h1>개발자센터에서 빠르고 정확한 정보를 찾아보세요.</h1>\n                      <p>개발자센터의 모든 기능을 이용하기 위해서는 개발자 등록이 필요합니다.</p>\n                      <p><a class=\"btn btn-md btn-primary\" href=\"#\" role=\"button\">회원가입</a></p>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"item\">\n          <div class=\"third-slide\">\n              <div class=\"container\">\n                  <div class=\"carousel-caption\">\n                      <h1>2018 개발자 컨퍼런스 개최</h1>\n                      <p>2018-11-11(화) 2:00 PM 코엑스 그랜드 볼륨홀</p>\n                      <p><a class=\"btn btn-md btn-primary\" href=\"#\" role=\"button\">발표자료보기</a></p>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!-- //item end --> \n      \n  </div>\n  <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\"> <span class=\"glyphicon-chevron-left icon-chevron-thin-left\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Previous</span> </a> <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\"> <span class=\"glyphicon-chevron-right icon-chevron-thin-right\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Next</span> </a> </div>\n<!-- /.carousel -->\n\n<div class=\"container-fluid no-gutters\">\n  <div class=\"container main-block-title\">\n      <div class=\"row col-xs-12\">\n          <h1 class=\"text-center\">API 개발자 포털</h1>\n          <p class=\"text-center\">개발자가 API에 안전하게 응용 프로그램을 빌드하기 위해 필요한 모든 도구와 리소스를 제공하면서 개발자에게 API를 안전하게 표시합니다.</p>\n      </div>\n      <div class=\"row main-link\"> <a href=\"#\" class=\"col-xs-12 col-sm-6 col-lg-3\">\n          <div class=\"thumbnail\"><span class=\"icon-laptop\"></span></div>\n          <div class=\"caption\">\n              <h4>오픈 플랫폼이란?</h4>\n          </div>\n          </a> <a href=\"#\" class=\"col-xs-12 col-sm-6 col-lg-3\">\n          <div class=\"thumbnail\"><span class=\"icon-text-document\"></span></div>\n          <div class=\"caption\">\n              <h4>API 소개</h4>\n          </div>\n          </a> <a href=\"#\" class=\"col-xs-12 col-sm-6 col-lg-3\">\n          <div class=\"thumbnail\"><span class=\"icon-typing\"></span></div>\n          <div class=\"caption\">\n              <h4>이용안내</h4>\n          </div>\n          </a> <a routerLink=\"/forum/qna\" class=\"col-xs-12 col-sm-6 col-lg-3\">\n          <div class=\"thumbnail\"><span class=\"icon-keyboard\"></span></div>\n          <div class=\"caption\">\n              <h4>개발자 커뮤니티</h4>\n          </div>\n          </a> </div>\n  </div>\n  <hr>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-sm-5\"><img class=\"img-responsive\" src=\"assets/img/img_main_1.jpg\" alt=\"Sample image\"></div>\n      <div class=\"col-sm-7\">\n          <h2>API를 생성하는 방법</h2>\n          <p>API 추가 마법사는 기존 API를 포털에 쉽게 게시 할 수있는 방법을 제공합니다. API를 게시하기 전에 API와 연결할 EULA를 만들어야합니다. 또한 API를 게시하기 전에 API 백엔드가 CORS를 사용할 수 있는지 확인하십시오.</p>\n          <button type=\"button\" class=\"btn btn-primary\">상세보기</button>\n      </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n      <div class=\"col-sm-5 col-sm-push-7\"><img class=\"img-responsive\" src=\"assets/img/img_main_2.jpg\" alt=\"Sample image\"></div>\n      <div class=\"col-sm-7 col-sm-pull-5\">\n          <h2>API Key를 획득하는 방법</h2>\n          <p>API 키를 얻으려면 응용 프로그램을 포털에 추가하십시오. 포털은 등록 된 각 응용 프로그램에 고유 한 API 키를 할당합니다. API에 액세스하려면 API 키가 필요합니다. 또한 API 탐색기에서 API를 테스트하려면 API 키가 있어야합니다.</p>\n          <button type=\"button\" class=\"btn btn-primary\">상세보기</button>\n      </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n      <div class=\"col-sm-5\"><img class=\"img-responsive\" src=\"assets/img/img_main_3.jpg\" alt=\"Sample image\"></div>\n      <div class=\"col-sm-7\">\n          <h2>API를 테스트하는 방법</h2>\n          <p>API 탐색기를 사용하면 swagger, wadl 파일이있는 API와 상호 작용할 수 있습니다. 또한 API와 상호 작용하려면 응용 프로그램의 API 키가 필요합니다.</p>\n          <button type=\"button\" class=\"btn btn-primary\">상세보기</button>\n      </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
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
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! D:\Dev\angular\gt-ssgpay-internal-portal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map