webpackJsonp([12],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddNotePage = /** @class */ (function () {
    function AddNotePage(navCtrl, noteService) {
        this.navCtrl = navCtrl;
        this.noteService = noteService;
        this.date = new Date();
        this.title = '';
        this.content = '';
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            content: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            date: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]()
        });
    }
    AddNotePage.prototype.saveNote = function (note) {
        this.noteService.saveNote(note);
        this.navCtrl.pop();
    };
    AddNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-note',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/add-note/add-note.html"*/'<!--\n  Generated template for the AddNotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Note</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="formGroup" (ngSubmit)="saveNote(formGroup.value)"> \n      <ion-item>\n          <ion-label>Date</ion-label>\n          <ion-datetime displayFormat="MM/DD/YYYY" formControlName="date"></ion-datetime>\n         </ion-item>\n    <ion-item>\n      <ion-label>Title</ion-label>\n      <ion-input type = "text" name="title" formControlName="title" required></ion-input>\n      <div class ="alert" *ngIf="!formGroup.controls[\'title\'].valid\n       && formGroup.controls[\'title\'].touched">{{ titleAlert }}</div>\n    </ion-item>\n    <ion-item>\n        <ion-label>Note</ion-label>\n        <ion-input type = "text" name="content" formControlName="content" required></ion-input>\n        <div class ="alert" *ngIf="!formGroup.controls[\'content\'].valid\n         && formGroup.controls[\'content\'].touched">{{ contentAlert }}</div>\n      </ion-item>\n    <button ion-button type="submit" [disabled]="!formGroup.valid">Save Note</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/add-note/add-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__["a" /* NoteService */]])
    ], AddNotePage);
    return AddNotePage;
}());

//# sourceMappingURL=add-note.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n       <ion-title>About</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only><ion-icon name="logo-buffer"></ion-icon></button>\n      </ion-buttons>\n     \n    \n     \n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesToSelfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_note_add_note__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotesToSelfPage = /** @class */ (function () {
    function NotesToSelfPage(navCtrl, navParams, noteService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noteService = noteService;
    }
    NotesToSelfPage.prototype.ionViewWillEnter = function () {
        this.notes = this.getAllNotes();
    };
    NotesToSelfPage.prototype.addNote = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_note_add_note__["a" /* AddNotePage */]);
    };
    NotesToSelfPage.prototype.getAllNotes = function () {
        return this.noteService.getAllNotes();
    };
    NotesToSelfPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notes-to-self',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/notes-to-self/notes-to-self.html"*/'<!--\n  Generated template for the NotesToSelfPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Notes To Self</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let note of notes | async">\n        {{ note.title }}\n    </button>\n  </ion-list>\n    <button ion-button (click)="addNote()">Add Note</button>\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/notes-to-self/notes-to-self.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__["a" /* NoteService */]])
    ], NotesToSelfPage);
    return NotesToSelfPage;
}());

//# sourceMappingURL=notes-to-self.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafetyToolkitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_to_self_notes_to_self__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SafetyToolkitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SafetyToolkitPage = /** @class */ (function () {
    function SafetyToolkitPage(navCtrl, navParams, httpClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.films = this.httpClient.get('https://swapi.co/api/films');
    }
    SafetyToolkitPage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
    };
    SafetyToolkitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SafetyToolkitPage');
    };
    SafetyToolkitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-safety-toolkit',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/safety-toolkit/safety-toolkit.html"*/'<!--\n  Generated template for the SafetyToolkitPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n       <ion-title>Safety Toolkit</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n      </ion-buttons>\n  \n     \n    \n     \n    </ion-navbar>\n  </ion-header>\n\n\n  <ion-content padding class="has-header" overflow-scroll="true" class="background">\n    \n\n  \n  \n\n  </ion-content>\n  \n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/safety-toolkit/safety-toolkit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], SafetyToolkitPage);
    return SafetyToolkitPage;
}());

//# sourceMappingURL=safety-toolkit.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoLibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VideoLibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideoLibraryPage = /** @class */ (function () {
    function VideoLibraryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VideoLibraryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoLibraryPage');
    };
    VideoLibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-video-library',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/video-library/video-library.html"*/'<!--\n  Generated template for the VideoLibraryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Video Library</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/video-library/video-library.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], VideoLibraryPage);
    return VideoLibraryPage;
}());

//# sourceMappingURL=video-library.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		285,
		11
	],
	"../pages/add-note/add-note.module": [
		286,
		10
	],
	"../pages/e-diary/e-diary.module": [
		287,
		6
	],
	"../pages/e-psag/e-psag.module": [
		288,
		5
	],
	"../pages/neonatal-toolkit/neonatal-toolkit.module": [
		289,
		4
	],
	"../pages/notes-to-self/notes-to-self.module": [
		290,
		9
	],
	"../pages/safety-huddle/safety-huddle.module": [
		291,
		3
	],
	"../pages/safety-toolkit/safety-toolkit.module": [
		292,
		8
	],
	"../pages/situational-awareness/situational-awareness.module": [
		293,
		2
	],
	"../pages/tracheostomy-emergency-management/tracheostomy-emergency-management.module": [
		294,
		1
	],
	"../pages/vessel-health/vessel-health.module": [
		295,
		0
	],
	"../pages/video-library/video-library.module": [
		296,
		7
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>GOSH App</h3>\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_video_library_video_library__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notes_to_self_notes_to_self__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_note_add_note__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_note_service_note_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_video_library_video_library__["a" /* VideoLibraryPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__["a" /* SafetyToolkitPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_notes_to_self_notes_to_self__["a" /* NotesToSelfPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_note_add_note__["a" /* AddNotePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-note/add-note.module#AddNotePageModule', name: 'AddNotePage', segment: 'add-note', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/e-diary/e-diary.module#EDiaryPageModule', name: 'EDiaryPage', segment: 'e-diary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/e-psag/e-psag.module#EPsagPageModule', name: 'EPsagPage', segment: 'e-psag', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/neonatal-toolkit/neonatal-toolkit.module#NeonatalToolkitPageModule', name: 'NeonatalToolkitPage', segment: 'neonatal-toolkit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notes-to-self/notes-to-self.module#NotesToSelfPageModule', name: 'NotesToSelfPage', segment: 'notes-to-self', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/safety-huddle/safety-huddle.module#SafetyHuddlePageModule', name: 'SafetyHuddlePage', segment: 'safety-huddle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/safety-toolkit/safety-toolkit.module#SafetyToolkitPageModule', name: 'SafetyToolkitPage', segment: 'safety-toolkit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/situational-awareness/situational-awareness.module#SituationalAwarenessPageModule', name: 'SituationalAwarenessPage', segment: 'situational-awareness', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tracheostomy-emergency-management/tracheostomy-emergency-management.module#TracheostomyEmergencyManagementPageModule', name: 'TracheostomyEmergencyManagementPage', segment: 'tracheostomy-emergency-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vessel-health/vessel-health.module#VesselHealthPageModule', name: 'VesselHealthPage', segment: 'vessel-health', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video-library/video-library.module#VideoLibraryPageModule', name: 'VideoLibraryPage', segment: 'video-library', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["f" /* ReactiveFormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_video_library_video_library__["a" /* VideoLibraryPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__["a" /* SafetyToolkitPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_notes_to_self_notes_to_self__["a" /* NotesToSelfPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_note_add_note__["a" /* AddNotePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_note_service_note_service__["a" /* NoteService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_video_library_video_library__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */] },
            { title: 'Safety Toolkit', component: __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__["a" /* SafetyToolkitPage */] },
            { title: 'Video Library', component: __WEBPACK_IMPORTED_MODULE_7__pages_video_library_video_library__["a" /* VideoLibraryPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    \n  </ion-header>\n\n  <ion-content class="side-menu-gradient">\n    <ion-list>\n        <div class="spacer" style="height: 40px;"></div>\n        <h2 style="color:rgba(255, 255, 255, 0.927);text-align:center;font-weight:400;">GOSH App</h2>\n        <div class="spacer" style="height: 10px;"></div>\n      <button class="side-menu-item" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" no-line>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteService = /** @class */ (function () {
    function NoteService(storage) {
        this.storage = storage;
        this.notes = [];
    }
    NoteService.prototype.saveNote = function (note) {
        note.createDate = Date.now();
        this.notes.push(note);
        this.storage.set('notes', this.notes);
    };
    NoteService.prototype.getAllNotes = function () {
        var _this = this;
        return this.storage.get('notes').then(function (notes) {
            _this.notes = notes == null ? [] : notes;
            return _this.notes.slice();
        });
    };
    NoteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], NoteService);
    return NoteService;
}());

//# sourceMappingURL=note-service.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map