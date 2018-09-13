webpackJsonp([19],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(28);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(27);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
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
<<<<<<< HEAD
            selector: 'page-add-note',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/add-note/add-note.html"*/'<!--\n  Generated template for the AddNotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Note</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="formGroup" (ngSubmit)="saveNote(formGroup.value)"> \n      <ion-item>\n          <ion-label>Date</ion-label>\n          <ion-datetime displayFormat="MM/DD/YYYY" formControlName="date"></ion-datetime>\n         </ion-item>\n    <ion-item>\n      <ion-label>Title</ion-label>\n      <ion-input type = "text" name="title" formControlName="title" required></ion-input>\n      <div class ="alert" *ngIf="!formGroup.controls[\'title\'].valid\n       && formGroup.controls[\'title\'].touched">{{ titleAlert }}</div>\n    </ion-item>\n    <ion-item>\n        <ion-label>Note</ion-label>\n        <ion-input type = "text" name="content" formControlName="content" required></ion-input>\n        <div class ="alert" *ngIf="!formGroup.controls[\'content\'].valid\n         && formGroup.controls[\'content\'].touched">{{ contentAlert }}</div>\n      </ion-item>\n      <div style="margin-left: 15px;">\n        <button block ion-button type="submit" [disabled]="!formGroup.valid">Save Note</button>\n      </div>  \n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/add-note/add-note.html"*/,
=======
            selector: 'page-add-note',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\add-note\add-note.html"*/'<!--\n\n  Generated template for the AddNotePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Add Note</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="formGroup" (ngSubmit)="saveNote(formGroup.value)"> \n\n      <ion-item>\n\n          <ion-label>Date</ion-label>\n\n          <ion-datetime displayFormat="MM/DD/YYYY" formControlName="date"></ion-datetime>\n\n         </ion-item>\n\n    <ion-item>\n\n      <ion-label>Title</ion-label>\n\n      <ion-input type = "text" name="title" formControlName="title" required></ion-input>\n\n      <div class ="alert" *ngIf="!formGroup.controls[\'title\'].valid\n\n       && formGroup.controls[\'title\'].touched">{{ titleAlert }}</div>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Note</ion-label>\n\n        <ion-input type = "text" name="content" formControlName="content" required></ion-input>\n\n        <div class ="alert" *ngIf="!formGroup.controls[\'content\'].valid\n\n         && formGroup.controls[\'content\'].touched">{{ contentAlert }}</div>\n\n      </ion-item>\n\n      <div style="margin-left: 15px;">\n\n        <button block ion-button type="submit" [disabled]="!formGroup.valid">Save Note</button>\n\n      </div>  \n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\add-note\add-note.html"*/,
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__["a" /* NoteService */]])
    ], AddNotePage);
    return AddNotePage;
}());

//# sourceMappingURL=add-note.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
<<<<<<< HEAD
            selector: 'page-about',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n       <ion-title>About</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only><ion-icon name="logo-buffer"></ion-icon></button>\n      </ion-buttons>\n     \n    \n     \n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/about/about.html"*/,
=======
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\about\about.html"*/'<!--\n\n  Generated template for the AboutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n       <ion-title>About</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only><ion-icon name="logo-buffer"></ion-icon></button>\n\n      </ion-buttons>\n\n     \n\n    \n\n     \n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\about\about.html"*/,
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicalPoliciesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notes_to_self_notes_to_self__ = __webpack_require__(37);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




<<<<<<< HEAD

=======
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
var ClinicalPoliciesPage = /** @class */ (function () {
    function ClinicalPoliciesPage(storage, toastCtrl, navCtrl, navParams, wpApiProvider) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
<<<<<<< HEAD
        this.searchOpen = false;
=======
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        this.loadData();
    }
    ClinicalPoliciesPage.prototype.loadData = function (refresher) {
        var _this = this;
        if (this.wpApiProvider.isConnected() || navigator.onLine) {
            this.wpApiProvider.getClinicalPolicies().subscribe(function (data) {
                console.log(data);
                _this.tools = data;
                _this.storage.set('dataFrom' + 'ClinicalPolicies', _this.tools);
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'Data loaded from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
        else {
            this.storage.get('dataFrom' + 'ClinicalPolicies').then(function (data) {
                _this.tools = data;
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'No connection - failed to retrieve from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
    };
    ClinicalPoliciesPage.prototype.forceReload = function (refresher) {
        this.loadData(refresher);
        refresher.complete();
    };
<<<<<<< HEAD
    ClinicalPoliciesPage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
    };
    ClinicalPoliciesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clinical-policies',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/clinical-policies/clinical-policies.html"*/'<!--\n  Generated template for the InfectionControlPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle *ngIf ="!searchOpen">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n         <ion-title *ngIf ="!searchOpen">Clinical Policies</ion-title>\n         <ion-searchbar *ngIf ="searchOpen" showCancelButton="true" (ionCancel)="searchOpen=false" [(ngModel)]="terms"></ion-searchbar>\n        <ion-buttons end>\n          <button ion-button icon-only *ngIf ="!searchOpen" (click)="searchOpen=true">\n          <ion-icon name="search"></ion-icon></button>\n          <button ion-button icon-only *ngIf ="!searchOpen" (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n        </ion-buttons>\n      </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n        <ion-refresher (ionRefresh)="forceReload($event)">\n                <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n              </ion-refresher>\n              \n    <ion-content padding>\n\n        <card *ngFor="let tool of tools | search : terms" [title]="tool.title.rendered" [slug] = "tool.slug" [template] = "tool.template_name">\n            <div [innerHTML]="tool.content.rendered"></div>\n        </card>\n\n    </ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/clinical-policies/clinical-policies.html"*/,
=======
    ClinicalPoliciesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clinical-policies',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\clinical-policies\clinical-policies.html"*/'<!--\n\n  Generated template for the InfectionControlPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n         <ion-title>Clinical Policies</ion-title>\n\n      </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n        <ion-refresher (ionRefresh)="forceReload($event)">\n\n                <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n\n              </ion-refresher>\n\n    <ion-content padding>\n\n\n\n        <card *ngFor="let tool of tools" [title]="tool.title.rendered" [slug] = "tool.slug" [template] = "tool.template_name">\n\n            <div [innerHTML]="tool.content.rendered"></div>\n\n        </card>\n\n\n\n    </ion-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\clinical-policies\clinical-policies.html"*/,
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], ClinicalPoliciesPage);
    return ClinicalPoliciesPage;
}());

//# sourceMappingURL=clinical-policies.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(249);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




<<<<<<< HEAD
var ViewNotePage = /** @class */ (function () {
    function ViewNotePage(navCtrl, navParams, noteService, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noteService = noteService;
        this.emailComposer = emailComposer;
        this.note = this.navParams.get('note');
    }
    // subject=this.note.title;
    // body=this.note.content;
    // to='';
    ViewNotePage.prototype.deleteNote = function (createDate) {
        this.noteService.deleteNote(createDate);
        this.navCtrl.pop();
    };
    ViewNotePage.prototype.send = function () {
        var email = {
            // to: this.to,
            cc: [],
            bcc: [],
            attachment: [],
            subject: this.note.title,
            body: this.note.content,
            isHtml: false,
        };
        this.emailComposer.open(email);
    };
    ViewNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-note',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/view-note/view-note.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>View Note</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        {{ note.title }}\n      </ion-card-title>\n      <div class="note-date">{{ note.date }}</div>\n      <hr>\n      <div>{{ note.content }}</div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <button ion-button color="balanced" block (click)="send()">Send</button>\n  <button ion-button color="danger" block (click)="deleteNote(note.createDate)">Delete Note</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/view-note/view-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__["a" /* NoteService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], ViewNotePage);
    return ViewNotePage;
}());

//# sourceMappingURL=view-note.js.map
=======
var ClinicalQualityProjectsPage = /** @class */ (function () {
    function ClinicalQualityProjectsPage(storage, toastCtrl, navCtrl, navParams, wpApiProvider) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.loadData();
    }
    ClinicalQualityProjectsPage.prototype.loadData = function (refresher) {
        var _this = this;
        if (this.wpApiProvider.isConnected() || navigator.onLine) {
            this.wpApiProvider.getClinicalQualityProjects().subscribe(function (data) {
                console.log(data);
                _this.tools = data;
                _this.storage.set('dataFrom' + 'CQProjects', _this.tools);
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'Data loaded from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
        else {
            this.storage.get('dataFrom' + 'CQProjects').then(function (data) {
                _this.tools = data;
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'No connection - failed to retrieve from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
    };
    ClinicalQualityProjectsPage.prototype.forceReload = function (refresher) {
        this.loadData(refresher);
        refresher.complete();
    };
    ClinicalQualityProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clinical-quality-projects',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\clinical-quality-projects\clinical-quality-projects.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n         <ion-title>Clinical Quality Projects</ion-title>\n\n      </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-refresher (ionRefresh)="forceReload($event)">\n\n      <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n  <h4 class="title"><strong> A guide to defining Clinical Quality Projects at GOSH: Who to contact for support and governance</strong></h4>\n\n\n\n  <h6 class="paragraph-text"><strong>What is your project idea? Click on a card to reveal the project type and contact details</strong></h6>\n\n	<flash-card *ngFor="let tool of tools">\n\n\n\n		<div class="flash-card-front"><div [innerHTML]="tool.front"></div></div>\n\n\n\n		<div class="flash-card-back"><div [innerHTML]="tool.back"></div></div>\n\n\n\n	</flash-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\clinical-quality-projects\clinical-quality-projects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], ClinicalQualityProjectsPage);
    return ClinicalQualityProjectsPage;
}());

//# sourceMappingURL=clinical-quality-projects.js.map
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicalQualityProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(23);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfectionControlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(28);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




<<<<<<< HEAD
var ClinicalQualityProjectsPage = /** @class */ (function () {
    function ClinicalQualityProjectsPage(storage, toastCtrl, navCtrl, navParams, wpApiProvider) {
=======
/**
 * Generated class for the InfectionControlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfectionControlPage = /** @class */ (function () {
    function InfectionControlPage(storage, toastCtrl, navCtrl, navParams, wpApiProvider) {
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.loadData();
    }
<<<<<<< HEAD
    ClinicalQualityProjectsPage.prototype.loadData = function (refresher) {
        var _this = this;
        if (this.wpApiProvider.isConnected() || navigator.onLine) {
            this.wpApiProvider.getClinicalQualityProjects().subscribe(function (data) {
                console.log(data);
                _this.tools = data;
                _this.storage.set('dataFrom' + 'CQProjects', _this.tools);
=======
    InfectionControlPage.prototype.loadData = function (refresher) {
        var _this = this;
        if (this.wpApiProvider.isConnected() || navigator.onLine) {
            this.wpApiProvider.getInfectionControl().subscribe(function (data) {
                console.log(data);
                _this.tools = data;
                _this.storage.set('dataFrom' + 'InfectionControl', _this.tools);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'Data loaded from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
        else {
<<<<<<< HEAD
            this.storage.get('dataFrom' + 'CQProjects').then(function (data) {
=======
            this.storage.get('dataFrom' + 'InfectionControl').then(function (data) {
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
                _this.tools = data;
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'No connection - failed to retrieve from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
    };
<<<<<<< HEAD
    ClinicalQualityProjectsPage.prototype.forceReload = function (refresher) {
        this.loadData(refresher);
        refresher.complete();
    };
    ClinicalQualityProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clinical-quality-projects',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/clinical-quality-projects/clinical-quality-projects.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n         <ion-title>Clinical Quality Projects</ion-title>\n      </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="forceReload($event)">\n      <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n    </ion-refresher>\n\n          \n\n  <h4 class="title"><strong> A guide to defining Clinical Quality Projects at GOSH: Who to contact for support and governance</strong></h4>\n\n  <h6 class="paragraph-text"><strong>What is your project idea? Click on a card to reveal the project type and contact details</strong></h6>\n	<flash-card *ngFor="let tool of tools | search : terms">\n\n		<div class="flash-card-front"><div [innerHTML]="tool.front"></div></div>\n\n		<div class="flash-card-back"><div [innerHTML]="tool.back"></div></div>\n\n	</flash-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/clinical-quality-projects/clinical-quality-projects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], ClinicalQualityProjectsPage);
    return ClinicalQualityProjectsPage;
}());

//# sourceMappingURL=clinical-quality-projects.js.map
=======
    InfectionControlPage.prototype.forceReload = function (refresher) {
        this.loadData(refresher);
        refresher.complete();
    };
    InfectionControlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-infection-control',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\infection-control\infection-control.html"*/'<!--\n\n  Generated template for the InfectionControlPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n         <ion-title>Infection Control</ion-title>  \n\n      </ion-navbar>\n\n    \n\n   \n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n        <ion-refresher (ionRefresh)="forceReload($event)">\n\n            <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n\n        </ion-refresher>\n\n        <ion-content padding>\n\n\n\n            <card *ngFor="let tool of tools" [title]="tool.title.rendered" [slug] = "tool.slug" [template] = "tool.template_name">\n\n                <div [innerHTML]="tool.content.rendered"></div>\n\n            </card>\n\n    \n\n        </ion-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\infection-control\infection-control.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], InfectionControlPage);
    return InfectionControlPage;
}());

//# sourceMappingURL=infection-control.js.map
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IcuNewStartersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(18);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




<<<<<<< HEAD

=======
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
var IcuNewStartersPage = /** @class */ (function () {
    function IcuNewStartersPage(storage, toastCtrl, navCtrl, navParams, wpApiProvider) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
<<<<<<< HEAD
        this.searchOpen = false;
=======
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        this.loadData();
    }
    IcuNewStartersPage.prototype.loadData = function (refresher) {
        var _this = this;
        if (this.wpApiProvider.isConnected() || navigator.onLine) {
            this.wpApiProvider.getICU().subscribe(function (data) {
                console.log(data);
                _this.tools = data;
                _this.storage.set('dataFrom' + 'ICUNewStarters', _this.tools);
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'Data loaded from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
        else {
            this.storage.get('dataFrom' + 'ICUNewStarters').then(function (data) {
                _this.tools = data;
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'No connection - failed to retrieve from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
    };
    IcuNewStartersPage.prototype.forceReload = function (refresher) {
        this.loadData(refresher);
        refresher.complete();
    };
<<<<<<< HEAD
    IcuNewStartersPage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
    };
    IcuNewStartersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-icu-new-starters',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/icu-new-starters/icu-new-starters.html"*/'<!--\n  Generated template for the IcuNewStartersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle *ngIf ="!searchOpen">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n     <ion-title *ngIf ="!searchOpen">ICU-New Starters</ion-title>\n     <ion-searchbar *ngIf ="searchOpen" showCancelButton="true" (ionCancel)="searchOpen=false" [(ngModel)]="terms"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only *ngIf ="!searchOpen" (click)="searchOpen=true">\n      <ion-icon name="search"></ion-icon></button>\n      <button ion-button icon-only *ngIf ="!searchOpen" (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-refresher (ionRefresh)="forceReload($event)">\n      <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n    </ion-refresher>\n           \n    <card *ngFor="let tool of tools | search : terms" [title]="tool.title.rendered" [slug] = "tool.slug" [template] = "tool.template_name">\n        <div [innerHTML]="tool.content.rendered"></div>\n    </card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/icu-new-starters/icu-new-starters.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
=======
    IcuNewStartersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IcuNewStartersPage');
    };
    IcuNewStartersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-icu-new-starters',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\icu-new-starters\icu-new-starters.html"*/'<!--\n\n  Generated template for the IcuNewStartersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n     <ion-title>ICU-New Starters</ion-title>  \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-refresher (ionRefresh)="forceReload($event)">\n\n      <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n\n    </ion-refresher>\n\n    <card *ngFor="let tool of tools" [title]="tool.title.rendered" [slug] = "tool.slug" [template] = "tool.template_name">\n\n        <div [innerHTML]="tool.content.rendered"></div>\n\n    </card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\icu-new-starters\icu-new-starters.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
    ], IcuNewStartersPage);
    return IcuNewStartersPage;
}());

//# sourceMappingURL=icu-new-starters.js.map

/***/ }),

/***/ 165:
<<<<<<< HEAD
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfectionControlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notes_to_self_notes_to_self__ = __webpack_require__(37);
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
 * Generated class for the InfectionControlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfectionControlPage = /** @class */ (function () {
    function InfectionControlPage(storage, toastCtrl, navCtrl, navParams, wpApiProvider) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.searchOpen = false;
        this.loadData();
    }
    InfectionControlPage.prototype.loadData = function (refresher) {
        var _this = this;
        if (this.wpApiProvider.isConnected() || navigator.onLine) {
            this.wpApiProvider.getInfectionControl().subscribe(function (data) {
                console.log(data);
                _this.tools = data;
                _this.storage.set('dataFrom' + 'InfectionControl', _this.tools);
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'Data loaded from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
        else {
            this.storage.get('dataFrom' + 'InfectionControl').then(function (data) {
                _this.tools = data;
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'No connection - failed to retrieve from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
    };
    InfectionControlPage.prototype.forceReload = function (refresher) {
        this.loadData(refresher);
        refresher.complete();
    };
    InfectionControlPage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
    };
    InfectionControlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-infection-control',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/infection-control/infection-control.html"*/'<!--\n  Generated template for the InfectionControlPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle ngIf ="!searchOpen">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n         <ion-title ngIf ="!searchOpen">Infection Control</ion-title>\n         <ion-searchbar *ngIf ="searchOpen" showCancelButton="true" (ionCancel)="searchOpen=false" [(ngModel)]="terms"></ion-searchbar>\n        <ion-buttons end>\n          <button ion-button icon-only *ngIf ="!searchOpen" (click)="searchOpen=true">\n          <ion-icon name="search"></ion-icon></button>\n          <button ion-button icon-only *ngIf ="!searchOpen" (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n        </ion-buttons>\n      </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n        <ion-refresher (ionRefresh)="forceReload($event)">\n            <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n        </ion-refresher>\n            \n\n            <card *ngFor="let tool of tools | search : terms" [title]="tool.title.rendered" [slug] = "tool.slug" [template] = "tool.template_name">\n                <div [innerHTML]="tool.content.rendered"></div>\n            </card>\n\n        </ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/infection-control/infection-control.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], InfectionControlPage);
    return InfectionControlPage;
}());

//# sourceMappingURL=infection-control.js.map

/***/ }),

/***/ 166:
=======
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafetyToolkitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_cache__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(36);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(250);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
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
    // tool;
    function SafetyToolkitPage(http, navCtrl, navParams, cache, wpApiProvider, toastCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cache = cache;
        this.wpApiProvider = wpApiProvider;
        this.toastCtrl = toastCtrl;
        this.searchOpen = false;
        // console.log(this.loadData());
        // this.tools = this.loadData();
        this.loadData();
        // let req = this.wpApiProvider.getSafetyToolkit()
        // .subscribe(res => {
        //   let toast = this.toastCtrl.create({
        //     message: 'Data loaded from server',
        //     duration: 2000
        //   })
        //   console.log(res);
        //   toast.present();
        //   this.tools = res;
        // })
        // this.tools = this.cache.loadFromObservable('safetyTools', req)
    }
    SafetyToolkitPage.prototype.loadData = function (refresher) {
        var _this = this;
        var url = 'http://uclst.co.uk/wp-json/wp/v2/safety_toolkit';
        var req = this.http.get(url)
            .map(function (res) {
            var toast = _this.toastCtrl.create({
                message: 'Data loaded from server.',
                duration: 2000
            });
            toast.present();
            return res;
        });
        if (refresher) {
            if (!this.wpApiProvider.isConnected()) {
                var toast = this.toastCtrl.create({
                    message: 'No connection - failed to retrieve from server.',
                    duration: 2000
                });
                toast.present();
            }
            var delayType = 'all';
            this.tools = this.cache.loadFromDelayedObservable(url, req, undefined, undefined, delayType);
            this.tools.subscribe(function (data) {
                refresher.complete();
            });
        }
        else {
            this.tools = this.cache.loadFromObservable(url, req);
        }
    };
    SafetyToolkitPage.prototype.forceReload = function (refresher) {
        this.loadData(refresher);
    };
    SafetyToolkitPage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
    };
    SafetyToolkitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-safety-toolkit',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/safety-toolkit/safety-toolkit.html"*/'<!--\n  Generated template for the SafetyToolkitPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation. -->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle *ngIf ="!searchOpen">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n     <ion-title *ngIf ="!searchOpen">Safety Toolkit</ion-title>\n     <ion-searchbar *ngIf ="searchOpen" showCancelButton="true" (ionCancel)="searchOpen=false" [(ngModel)]="terms"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only *ngIf ="!searchOpen" (click)="searchOpen=true">\n      <ion-icon name="search"></ion-icon></button>\n      <button ion-button icon-only *ngIf ="!searchOpen" (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="has-header" overflow-scroll="true" class="background">\n\n  <ion-refresher (ionRefresh)="forceReload($event)">\n\n    <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n  </ion-refresher>\n\n  <accordion *ngFor="let tool of tools | async | search : terms" [title]="tool.title.rendered" [icon]="tool.icon.guid" [slug] = "tool.slug" [template] = "tool.template_name" [imagetop] = "tool.image_top.guid">\n      <div [innerHTML]="tool.content.rendered"></div>\n    </accordion>\n\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/safety-toolkit/safety-toolkit.html"*/,
=======
            selector: 'page-view-note',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\view-note\view-note.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>View Note</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{ note.title }}\n\n      </ion-card-title>\n\n      <div class="note-date">{{ note.date }}</div>\n\n      <hr>\n\n      <div>{{ note.content }}</div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n  <button ion-button color="balanced" block (click)="send()">Send</button>\n\n  <button ion-button color="danger" block (click)="deleteNote(note.createDate)">Delete Note</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\view-note\view-note.html"*/,
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_ionic_cache__["b" /* CacheService */], __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__["a" /* WpApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], SafetyToolkitPage);
    return SafetyToolkitPage;
}());

//# sourceMappingURL=safety-toolkit.js.map

/***/ }),

<<<<<<< HEAD
/***/ 167:
=======
/***/ 166:
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateImagetopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__ = __webpack_require__(23);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__ = __webpack_require__(28);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(18);
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
 * Generated class for the TemplateImagetopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TemplateImagetopPage = /** @class */ (function () {
    function TemplateImagetopPage(toastCtrl, storage, navCtrl, navParams, wpApiProvider) {
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.searchOpen = false;
        this.slug = this.navParams.get('slug');
        console.log(this.slug);
        this.title = this.navParams.get('title');
        console.log(this.title);
        this.imagetop = this.navParams.get('imagetop');
        console.log(this.imagetop);
        this.loadData();
    }
    TemplateImagetopPage.prototype.loadData = function (refresher) {
        var _this = this;
        if (this.wpApiProvider.isConnected() || navigator.onLine) {
            this.wpApiProvider.getSTSpecific(this.slug).subscribe(function (data) {
                console.log(data);
                _this.sections = data;
                _this.storage.set('dataFrom' + _this.slug, _this.sections);
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'Data loaded from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
        else {
            this.storage.get('dataFrom' + this.slug).then(function (data) {
                _this.sections = data;
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'No connection - failed to retrieve from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
    };
    TemplateImagetopPage.prototype.forceReload = function (refresher) {
        this.loadData(refresher);
        refresher.complete();
    };
    TemplateImagetopPage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
    };
    TemplateImagetopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TemplateImagetopPage');
    };
    TemplateImagetopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-template-imagetop',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-imagetop/template-imagetop.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title *ngIf ="!searchOpen">{{ title }}</ion-title>\n    <ion-searchbar *ngIf ="searchOpen" showCancelButton="true" (ionCancel)="searchOpen=false" [(ngModel)]="terms"></ion-searchbar>\n   <ion-buttons end>\n     <button ion-button icon-only *ngIf ="!searchOpen" (click)="searchOpen=true">\n     <ion-icon name="search"></ion-icon></button>\n     <button ion-button icon-only *ngIf ="!searchOpen" (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n   </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-refresher (ionRefresh)="forceReload($event)">\n\n        <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n      </ion-refresher>\n    \n\n<img src="{{ imagetop }} ">\n\n  <accordion-more *ngFor="let section of sections | search : terms" [title]="section.title.rendered">\n      <div [innerHTML]="section.content.rendered"></div>\n    </accordion-more>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-imagetop/template-imagetop.html"*/,
=======
            selector: 'page-template-imagetop',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\template-imagetop\template-imagetop.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{ title }}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-refresher (ionRefresh)="forceReload($event)">\n\n\n\n        <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n\n      </ion-refresher>\n\n      \n\n\n\n<img src="{{ imagetop }} ">\n\n\n\n  <accordion-more *ngFor="let section of sections" [title]="section.title.rendered">\n\n      <div [innerHTML]="section.content.rendered"></div>\n\n    </accordion-more>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\template-imagetop\template-imagetop.html"*/,
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], TemplateImagetopPage);
    return TemplateImagetopPage;
}());

//# sourceMappingURL=template-imagetop.js.map

/***/ }),

<<<<<<< HEAD
/***/ 168:
=======
/***/ 167:
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafetyToolkitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_video_service_video_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(18);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_cache__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(36);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





<<<<<<< HEAD
var VideoLibraryPage = /** @class */ (function () {
    function VideoLibraryPage(toastCtrl, storage, navCtrl, navParams, videoService, http) {
        // this.narrowed_tutorials = this.videoService.tutorials_list;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videoService = videoService;
        this.http = http;
        this.narrowed_tutorials = [];
        this.searchOpen = false;
        // this._net.onConnect().subscribe(() => {
        //   this.http.get('http://uclst.co.uk/wp-json/wp/v2/video_library').subscribe( data => {
        //   console.log(data);
        //   this.videos = data;
        //   storage.set('http://uclst.co.uk/wp-json/wp/v2/video_library', this.videos);
        //   alert("worksTS")
        //  })
        // })
        // this.narrowed_tutorials = this.videos;
        // this._net.onDisconnect().subscribe(() => {
        //   this.http.get('http://uclst.co.uk/wp-json/wp/v2/video_library').subscribe( data => {
        //     console.log(data);
        //     this.videos = data;
        //   })})
        this.data = {
            search: ''
        };
        this.loadData();
    }
    VideoLibraryPage.prototype.loadData = function (refresher) {
        var _this = this;
        if (this.videoService.isConnected() || navigator.onLine) {
            this.http.get('http://uclst.co.uk/wp-json/wp/v2/video_library').subscribe(function (data) {
                console.log(data);
                _this.videos = data;
                _this.storage.set('videosKey', _this.videos);
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'Data loaded from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
        else {
            this.storage.get('videosKey').then(function (val) {
                _this.videos = val;
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'No connection - failed to retrieve from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
    };
    VideoLibraryPage.prototype.forceReload = function (refresher) {
        this.loadData(refresher);
        refresher.complete();
    };
    VideoLibraryPage.prototype.search = function () {
        var searchedString = this.data.search.toLocaleLowerCase();
        if (searchedString == '') {
            this.videos = this.videoService.tutorials_list;
            return;
        }
        this.videos = this.videoService.tutorials_list.filter(function (tutorial) {
            // alert(tutorial.video_name);
            if (tutorial.video_name.toLocaleLowerCase().indexOf(searchedString) > -1 || tutorial.video_description.toLocaleLowerCase().indexOf(searchedString) > -1) {
                return true;
            }
            return false;
=======


/**
 * Generated class for the SafetyToolkitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SafetyToolkitPage = /** @class */ (function () {
    // tool;
    function SafetyToolkitPage(http, navCtrl, navParams, cache, wpApiProvider, toastCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cache = cache;
        this.wpApiProvider = wpApiProvider;
        this.toastCtrl = toastCtrl;
        // console.log(this.loadData());
        // this.tools = this.loadData();
        this.loadData();
        // let req = this.wpApiProvider.getSafetyToolkit()
        // .subscribe(res => {
        //   let toast = this.toastCtrl.create({
        //     message: 'Data loaded from server',
        //     duration: 2000
        //   })
        //   console.log(res);
        //   toast.present();
        //   this.tools = res;
        // })
        // this.tools = this.cache.loadFromObservable('safetyTools', req)
    }
    SafetyToolkitPage.prototype.loadData = function (refresher) {
        var _this = this;
        var url = 'http://uclst.co.uk/wp-json/wp/v2/safety_toolkit';
        var req = this.http.get(url)
            .map(function (res) {
            var toast = _this.toastCtrl.create({
                message: 'Data loaded from server.',
                duration: 2000
            });
            toast.present();
            return res;
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        });
        if (refresher) {
            if (!this.wpApiProvider.isConnected()) {
                var toast = this.toastCtrl.create({
                    message: 'No connection - failed to retrieve from server.',
                    duration: 2000
                });
                toast.present();
            }
            var delayType = 'all';
            this.tools = this.cache.loadFromDelayedObservable(url, req, undefined, undefined, delayType);
            this.tools.subscribe(function (data) {
                refresher.complete();
            });
        }
        else {
            this.tools = this.cache.loadFromObservable(url, req);
        }
    };
<<<<<<< HEAD
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('key'),
        __metadata("design:type", String)
    ], VideoLibraryPage.prototype, "key", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('id'),
        __metadata("design:type", String)
    ], VideoLibraryPage.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('description'),
        __metadata("design:type", String)
    ], VideoLibraryPage.prototype, "description", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('name'),
        __metadata("design:type", String)
    ], VideoLibraryPage.prototype, "name", void 0);
    VideoLibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-video-library',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/video-library/video-library.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle *ngIf ="!searchOpen">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n     <ion-title *ngIf ="!searchOpen">Video Library</ion-title>\n     <ion-searchbar *ngIf ="searchOpen" showCancelButton="true" (ionCancel)="searchOpen=false"\n     [(ngModel)] = "data.search"\n     [ngModelOptions]="{standalone: true}"\n     (keyup.enter)="search()"\n     (ionInput) = "search()"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only *ngIf ="!searchOpen" (click)="searchOpen=true">\n      <ion-icon name="search"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n    <ion-content padding="true" class="has-header">\n       <ion-refresher (ionRefresh)="forceReload($event)">\n    <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n  </ion-refresher>\n\n\n\n\n      <ion-list>\n\n      <!-- <ion-item *ngFor="let video of videos" [attr.id]="video.video_id" [attr.key]="video.video_key" [attr.name] = "video.video_name" [attr.description] = "video.video_description" (click)="viewVideo(video.key)" class="item-thumbnail-left"> -->\n        <video-item *ngFor="let video of videos" [id]="video.video_id" [key]="video.video_key" [name] = "video.video_name" [description] = "video.video_description">\n\n      </video-item>\n      </ion-list>\n    </ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/video-library/video-library.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_video_service_video_service__["a" /* VideoService */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], VideoLibraryPage);
    return VideoLibraryPage;
=======
    SafetyToolkitPage.prototype.forceReload = function (refresher) {
        this.loadData(refresher);
    };
    SafetyToolkitPage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
    };
    SafetyToolkitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-safety-toolkit',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\safety-toolkit\safety-toolkit.html"*/'<!--\n\n  Generated template for the SafetyToolkitPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation. -->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n     <ion-title>Safety Toolkit</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="has-header" overflow-scroll="true" class="background">\n\n  \n\n  <ion-refresher (ionRefresh)="forceReload($event)">\n\n\n\n    <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n\n  </ion-refresher>\n\n  \n\n  <accordion *ngFor="let tool of tools | async" [title]="tool.title.rendered" [icon]="tool.icon.guid" [slug] = "tool.slug" [template] = "tool.template_name" [imagetop] = "tool.image_top.guid">\n\n      <div [innerHTML]="tool.content.rendered"></div>\n\n    </accordion>\n\n\n\n  \n\n        \n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\safety-toolkit\safety-toolkit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_ionic_cache__["b" /* CacheService */], __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__["a" /* WpApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], SafetyToolkitPage);
    return SafetyToolkitPage;
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
}());

//# sourceMappingURL=safety-toolkit.js.map

/***/ }),

<<<<<<< HEAD
/***/ 169:
=======
/***/ 168:
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoLibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_video_service_video_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(46);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_video_service_video_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(18);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




<<<<<<< HEAD
=======

var VideoLibraryPage = /** @class */ (function () {
    function VideoLibraryPage(toastCtrl, storage, navCtrl, navParams, videoService, http) {
        // this.narrowed_tutorials = this.videoService.tutorials_list;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videoService = videoService;
        this.http = http;
        this.narrowed_tutorials = [];
        // this._net.onConnect().subscribe(() => {
        //   this.http.get('http://uclst.co.uk/wp-json/wp/v2/video_library').subscribe( data => {
        //   console.log(data);
        //   this.videos = data;
        //   storage.set('http://uclst.co.uk/wp-json/wp/v2/video_library', this.videos);
        //   alert("worksTS")
        //  })
        // })
        // this.narrowed_tutorials = this.videos;
        // this._net.onDisconnect().subscribe(() => {
        //   this.http.get('http://uclst.co.uk/wp-json/wp/v2/video_library').subscribe( data => {
        //     console.log(data);
        //     this.videos = data;
        //   })})
        this.data = {
            search: ''
        };
        this.loadData();
    }
    VideoLibraryPage.prototype.loadData = function (refresher) {
        var _this = this;
        if (this.videoService.isConnected() || navigator.onLine) {
            this.http.get('http://uclst.co.uk/wp-json/wp/v2/video_library').subscribe(function (data) {
                console.log(data);
                _this.videos = data;
                _this.storage.set('videosKey', _this.videos);
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'Data loaded from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
        else {
            this.storage.get('videosKey').then(function (val) {
                _this.videos = val;
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'No connection - failed to retrieve from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
    };
    VideoLibraryPage.prototype.forceReload = function (refresher) {
        this.loadData(refresher);
        refresher.complete();
    };
    VideoLibraryPage.prototype.search = function () {
        var searchedString = this.data.search.toLocaleLowerCase();
        if (searchedString == '') {
            this.videos = this.videoService.tutorials_list;
            return;
        }
        this.videos = this.videoService.tutorials_list.filter(function (tutorial) {
            // alert(tutorial.video_name);
            if (tutorial.video_name.toLocaleLowerCase().indexOf(searchedString) > -1 || tutorial.video_description.toLocaleLowerCase().indexOf(searchedString) > -1) {
                return true;
            }
            return false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('key'),
        __metadata("design:type", String)
    ], VideoLibraryPage.prototype, "key", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('id'),
        __metadata("design:type", String)
    ], VideoLibraryPage.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('description'),
        __metadata("design:type", String)
    ], VideoLibraryPage.prototype, "description", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('name'),
        __metadata("design:type", String)
    ], VideoLibraryPage.prototype, "name", void 0);
    VideoLibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-video-library',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\video-library\video-library.html"*/'\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Video Library</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n \n\n    <ion-content padding="true" class="has-header">\n\n       <ion-refresher (ionRefresh)="forceReload($event)">\n\n    <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n\n  </ion-refresher>\n\n               \n\n          <ion-searchbar \n\n\n\n            [(ngModel)] = "data.search" \n\n            [ngModelOptions]="{standalone: true}" \n\n            (keyup.enter)="search()"\n\n            (ionInput) = "search()"\n\n        \n\n          ></ion-searchbar>\n\n        \n\n      \n\n      <ion-list>\n\n        \n\n      <!-- <ion-item *ngFor="let video of videos" [attr.id]="video.video_id" [attr.key]="video.video_key" [attr.name] = "video.video_name" [attr.description] = "video.video_description" (click)="viewVideo(video.key)" class="item-thumbnail-left"> -->\n\n        <video-item *ngFor="let video of videos" [id]="video.video_id" [key]="video.video_key" [name] = "video.video_name" [description] = "video.video_description">\n\n          \n\n      </video-item>\n\n      </ion-list>\n\n    </ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\video-library\video-library.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_video_service_video_service__["a" /* VideoService */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], VideoLibraryPage);
    return VideoLibraryPage;
}());

//# sourceMappingURL=video-library.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_video_service_video_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideoPage = /** @class */ (function () {
    function VideoPage(navCtrl, navParams, videoService, domSanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videoService = videoService;
        this.domSanitizer = domSanitizer;
        // this.id = videoService.tutorials_keys[navParams.get('id')];
        this.id = this.navParams.get('id');
        this.name = this.navParams.get('name');
        this.description = this.navParams.get('description');
        this.videourl = "https://www.youtube.com/embed/" + this.id;
    }
    VideoPage.prototype.ionViewWillEnter = function () {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videourl);
    };
    VideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoPage');
    };
    VideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-video',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/video/video.html"*/'<!--\n  Generated template for the VideoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> {{ name }} </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;">\n      <iframe [src]="trustedVideoUrl" frameborder="0" allowfullscreen="" width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n\n    <!-- {{ videourl }} -->\n    <div class="spacer" style="height: 10px;"></div>\n  {{ description }}\n\n  \n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/video/video.html"*/,
=======
            selector: 'page-video',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\video\video.html"*/'<!--\n\n  Generated template for the VideoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title> {{ name }} </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;">\n\n      <iframe [src]="trustedVideoUrl" frameborder="0" allowfullscreen="" width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n\n    </div>\n\n\n\n    <!-- {{ videourl }} -->\n\n    <div class="spacer" style="height: 10px;"></div>\n\n  {{ description }}\n\n\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\video\video.html"*/,
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_video_service_video_service__["a" /* VideoService */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], VideoPage);
    return VideoPage;
}());

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 203:
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
webpackEmptyAsyncContext.id = 203;

/***/ }),

<<<<<<< HEAD
/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WpApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rxjs/add/operator/map'



/*
  Generated class for the WpApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WpApiProvider = /** @class */ (function () {
    function WpApiProvider(_net, http) {
        this._net = _net;
        this.http = http;
        console.log('Hello WpApiProvider Provider');
    }
    WpApiProvider.prototype.isConnected = function () {
        var conntype = this._net.type;
        return conntype && conntype !== 'unknown' && conntype !== 'none';
    };
    WpApiProvider.prototype.getSidebar = function () {
        return this.http.get('http://uclst.co.uk/wp-json/wp/v2/sidebar_sections');
    };
    WpApiProvider.prototype.getSafetyToolkit = function () {
        return this.http.get('http://uclst.co.uk/wp-json/wp/v2/safety_toolkit').pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    WpApiProvider.prototype.getICU = function () {
        return this.http.get('http://uclst.co.uk/wp-json/wp/v2/icu-new-starters').pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    WpApiProvider.prototype.getInfectionControl = function () {
        return this.http.get('http://uclst.co.uk/wp-json/wp/v2/infection_control').pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    WpApiProvider.prototype.getClinicalQualityProjects = function () {
        return this.http.get('http://uclst.co.uk/wp-json/wp/v2/clinical_quality_projects').pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    WpApiProvider.prototype.getClinicalPolicies = function () {
        return this.http.get('http://uclst.co.uk/wp-json/wp/v2/clinical_policies').pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    WpApiProvider.prototype.getSTSpecific = function (slug) {
        return this.http.get('http://uclst.co.uk/wp-json/wp/v2/' + slug).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    WpApiProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    WpApiProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    WpApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], WpApiProvider);
    return WpApiProvider;
}());

//# sourceMappingURL=wp-api.js.map

/***/ }),

=======
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
<<<<<<< HEAD
		479,
		17
	],
	"../pages/add-note/add-note.module": [
		480,
		16
	],
	"../pages/clinical-policies/clinical-policies.module": [
		481,
		15
	],
	"../pages/clinical-quality-projects/clinical-quality-projects.module": [
		482,
		14
	],
	"../pages/icu-new-starters/icu-new-starters.module": [
		483,
		13
	],
	"../pages/infection-control/infection-control.module": [
		484,
		12
	],
	"../pages/notes-to-self/notes-to-self.module": [
		485,
		11
	],
	"../pages/safety-toolkit-more/safety-toolkit-more.module": [
		486,
		10
	],
	"../pages/safety-toolkit/safety-toolkit.module": [
		487,
		9
	],
	"../pages/template-imagetop/template-imagetop.module": [
		490,
		8
	],
	"../pages/template-quiz/template-quiz.module": [
		491,
		7
	],
	"../pages/template-simple/template-simple.module": [
		492,
		6
	],
	"../pages/template-slider/template-slider.module": [
		493,
		5
	],
	"../pages/template-slides-arrows/template-slides-arrows.module": [
		494,
		4
	],
	"../pages/video-library/video-library.module": [
		495,
		3
	],
	"../pages/video/video.module": [
		496,
		2
	],
	"../pages/view-note/view-note.module": [
		497,
=======
		477,
		17
	],
	"../pages/add-note/add-note.module": [
		479,
		16
	],
	"../pages/clinical-policies/clinical-policies.module": [
		478,
		15
	],
	"../pages/clinical-quality-projects/clinical-quality-projects.module": [
		480,
		14
	],
	"../pages/icu-new-starters/icu-new-starters.module": [
		482,
		13
	],
	"../pages/infection-control/infection-control.module": [
		481,
		12
	],
	"../pages/notes-to-self/notes-to-self.module": [
		483,
		11
	],
	"../pages/safety-toolkit-more/safety-toolkit-more.module": [
		484,
		10
	],
	"../pages/safety-toolkit/safety-toolkit.module": [
		486,
		9
	],
	"../pages/template-imagetop/template-imagetop.module": [
		485,
		8
	],
	"../pages/template-quiz/template-quiz.module": [
		489,
		7
	],
	"../pages/template-simple/template-simple.module": [
		490,
		6
	],
	"../pages/template-slider/template-slider.module": [
		492,
		5
	],
	"../pages/template-slides-arrows/template-slides-arrows.module": [
		491,
		4
	],
	"../pages/video-library/video-library.module": [
		493,
		3
	],
	"../pages/video/video.module": [
		494,
		2
	],
	"../pages/view-note/view-note.module": [
		495,
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
		1
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
webpackAsyncContext.id = 244;
module.exports = webpackAsyncContext;
<<<<<<< HEAD

/***/ }),

/***/ 293:
=======

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WpApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the WpApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WpApiProvider = /** @class */ (function () {
    function WpApiProvider(_net, http) {
        this._net = _net;
        this.http = http;
        console.log('Hello WpApiProvider Provider');
    }
    WpApiProvider.prototype.isConnected = function () {
        var conntype = this._net.type;
        return conntype && conntype !== 'unknown' && conntype !== 'none';
    };
    WpApiProvider.prototype.getSafetyToolkit = function () {
        return this.http.get('http://uclst.co.uk/wp-json/wp/v2/safety_toolkit');
    };
    WpApiProvider.prototype.getICU = function () {
        return this.http.get('http://uclst.co.uk/wp-json/wp/v2/icu-new-starters');
    };
    WpApiProvider.prototype.getInfectionControl = function () {
        return this.http.get('http://uclst.co.uk/wp-json/wp/v2/infection_control');
    };
    WpApiProvider.prototype.getClinicalQualityProjects = function () {
        return this.http.get('http://uclst.co.uk/wp-json/wp/v2/clinical_quality_projects');
    };
    WpApiProvider.prototype.getClinicalPolicies = function () {
        return this.http.get('http://uclst.co.uk/wp-json/wp/v2/clinical_policies');
    };
    WpApiProvider.prototype.getSTSpecific = function (slug) {
        return this.http.get('http://uclst.co.uk/wp-json/wp/v2/' + slug);
    };
    WpApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], WpApiProvider);
    return WpApiProvider;
}());

//# sourceMappingURL=wp-api.js.map

/***/ }),

/***/ 294:
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.posts = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.posts = [
            {
                name: 'Clinical guidelines',
                image: 'http://via.placeholder.com/144x144'
            },
            {
                name: 'New Starters',
                image: 'http://via.placeholder.com/144x144'
            },
            {
                name: 'Video & resources',
                image: 'http://via.placeholder.com/144x144'
            },
            {
                name: 'Divisional info',
                image: 'http://via.placeholder.com/144x144'
            },
            {
                name: 'What\'s new',
                image: 'http://via.placeholder.com/144x144'
            },
            {
                name: 'My Notes',
                image: 'http://via.placeholder.com/144x144'
            }
        ];
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-home',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n      <ion-item *ngFor="let item of items">\n        {{ item }}\n      </ion-item>\n    </ion-list>\n  <img src="assets/imgs/gosh.jpeg">\n  <p class = "txt">[Text stating the purpose of the App]</p>\n  <!-- <h3>GOSH App</h3> -->\n  <!-- <div class="pins">\n    <ion-card class="pin" *ngFor="let post of posts">\n      <img [src]="post.image" />\n      <div *ngIf="post.description" class="post-description">\n        <small>{{ post.description }}</small>\n      </div>\n      <ion-item>\n\n        <div class="lbl">{{ post.name }}</div>\n\n      </ion-item>\n    </ion-card>\n  </div> -->\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/home/home.html"*/
=======
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>GOSH App</h3>\n\n  <div class="pins">\n\n    <ion-card class="pin" *ngFor="let post of posts">\n\n      <img [src]="post.image" />\n\n      <div *ngIf="post.description" class="post-description">\n\n        <small>{{ post.description }}</small>\n\n      </div>\n\n      <ion-item>\n\n\n\n        <div class="lbl">{{ post.name }}</div>\n\n\n\n      </ion-item>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\home\home.html"*/
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

<<<<<<< HEAD
/***/ 294:
=======
/***/ 295:
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(409);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(410);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

<<<<<<< HEAD
/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesToSelfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_note_add_note__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_note_view_note__ = __webpack_require__(162);
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
    NotesToSelfPage.prototype.getNote = function (createDate) {
        var _this = this;
        this.noteService.getNote(createDate).then(function (n) {
            _this.note = n;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__view_note_view_note__["a" /* ViewNotePage */], { note: _this.note });
        });
    };
    NotesToSelfPage.prototype.getAllNotes = function () {
        return this.noteService.getAllNotes();
    };
    NotesToSelfPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notes-to-self',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/notes-to-self/notes-to-self.html"*/'<!--\n  Generated template for the NotesToSelfPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Notes To Self</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let note of notes | async" (click)="getNote(note.createDate)">\n        {{ note.title }}\n    </button>\n  </ion-list>\n    \n</ion-content>\n<ion-footer>\n  <button ion-button (click)="addNote()" block>Add Note</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/notes-to-self/notes-to-self.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__["a" /* NoteService */]])
    ], NotesToSelfPage);
    return NotesToSelfPage;
}());

//# sourceMappingURL=notes-to-self.js.map

/***/ }),

/***/ 409:
=======
/***/ 410:
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_icu_new_starters_icu_new_starters__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_clinical_policies_clinical_policies__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_clinical_quality_projects_clinical_quality_projects__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_video_library_video_library__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notes_to_self_notes_to_self__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_safety_toolkit_more_safety_toolkit_more__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_template_slider_template_slider__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_template_imagetop_template_imagetop__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_video_video__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_template_slides_arrows_template_slides_arrows__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_template_quiz_template_quiz__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_template_simple_template_simple__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_infection_control_infection_control__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_add_note_add_note__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_note_service_note_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_view_note_view_note__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_email_composer__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_wp_api_wp_api__ = __webpack_require__(23);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_icu_new_starters_icu_new_starters__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_clinical_policies_clinical_policies__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_clinical_quality_projects_clinical_quality_projects__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_video_library_video_library__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notes_to_self_notes_to_self__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_safety_toolkit_more_safety_toolkit_more__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_template_slider_template_slider__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_template_imagetop_template_imagetop__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_video_video__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_template_slides_arrows_template_slides_arrows__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_template_quiz_template_quiz__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_template_simple_template_simple__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_infection_control_infection_control__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_add_note_add_note__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_note_service_note_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_view_note_view_note__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_email_composer__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_wp_api_wp_api__ = __webpack_require__(28);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_accordion_accordion__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_accordion_more_accordion_more__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_card_card__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_video_item_video_item__ = __webpack_require__(475);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_sidebar_sidebar__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ionic_cache__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pipes_search_search__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_video_service_video_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_flash_card_flash_card__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_network__ = __webpack_require__(135);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ionic_cache__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_video_service_video_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_flash_card_flash_card__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_network__ = __webpack_require__(134);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































<<<<<<< HEAD


=======
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_video_library_video_library__["a" /* VideoLibraryPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__["a" /* SafetyToolkitPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_icu_new_starters_icu_new_starters__["a" /* IcuNewStartersPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_clinical_quality_projects_clinical_quality_projects__["a" /* ClinicalQualityProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_clinical_policies_clinical_policies__["a" /* ClinicalPoliciesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_safety_toolkit_more_safety_toolkit_more__["a" /* SafetyToolkitMorePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_notes_to_self_notes_to_self__["a" /* NotesToSelfPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_note_add_note__["a" /* AddNotePage */],
                __WEBPACK_IMPORTED_MODULE_30__components_accordion_accordion__["a" /* AccordionComponent */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_38__components_flash_card_flash_card__["a" /* FlashCardComponent */],
=======
                __WEBPACK_IMPORTED_MODULE_36__components_flash_card_flash_card__["a" /* FlashCardComponent */],
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
                __WEBPACK_IMPORTED_MODULE_31__components_accordion_more_accordion_more__["a" /* AccordionMoreComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_card_card__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_sidebar_sidebar__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_video_item_video_item__["a" /* VideoItemComponent */],
                __WEBPACK_IMPORTED_MODULE_36__pipes_search_search__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_27__pages_view_note_view_note__["a" /* ViewNotePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_video_video__["a" /* VideoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_template_slider_template_slider__["a" /* TemplateSliderPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_template_imagetop_template_imagetop__["a" /* TemplateImagetopPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_template_quiz_template_quiz__["a" /* TemplateQuizPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_template_slides_arrows_template_slides_arrows__["a" /* TemplateSlidesArrowsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_template_simple_template_simple__["a" /* TemplateSimplePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_infection_control_infection_control__["a" /* InfectionControlPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    platforms: {
                        ios: {
                            backButtontext: ''
                        }
                    }
                }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
<<<<<<< HEAD
                        { loadChildren: '../pages/add-note/add-note.module#AddNotePageModule', name: 'AddNotePage', segment: 'add-note', priority: 'low', defaultHistory: [] },
=======
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
                        { loadChildren: '../pages/clinical-policies/clinical-policies.module#ClinicalPoliciesPageModule', name: 'ClinicalPoliciesPage', segment: 'clinical-policies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-note/add-note.module#AddNotePageModule', name: 'AddNotePage', segment: 'add-note', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clinical-quality-projects/clinical-quality-projects.module#ClinicalQualityProjectsPageModule', name: 'ClinicalQualityProjectsPage', segment: 'clinical-quality-projects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/infection-control/infection-control.module#InfectionControlPageModule', name: 'InfectionControlPage', segment: 'infection-control', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/icu-new-starters/icu-new-starters.module#IcuNewStartersPageModule', name: 'IcuNewStartersPage', segment: 'icu-new-starters', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notes-to-self/notes-to-self.module#NotesToSelfPageModule', name: 'NotesToSelfPage', segment: 'notes-to-self', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/safety-toolkit-more/safety-toolkit-more.module#SafetyToolkitMorePageModule', name: 'SafetyToolkitMorePage', segment: 'safety-toolkit-more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-imagetop/template-imagetop.module#TemplateImagetopPageModule', name: 'TemplateImagetopPage', segment: 'template-imagetop', priority: 'low', defaultHistory: [] },
<<<<<<< HEAD
                        { loadChildren: '../pages/template-quiz/template-quiz.module#TemplateQuizPageModule', name: 'TemplateQuizPage', segment: 'template-quiz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-simple/template-simple.module#TemplateSimplePageModule', name: 'TemplateSimplePage', segment: 'template-simple', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-slider/template-slider.module#TemplateSliderPageModule', name: 'TemplateSliderPage', segment: 'template-slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-slides-arrows/template-slides-arrows.module#TemplateSlidesArrowsPageModule', name: 'TemplateSlidesArrowsPage', segment: 'template-slides-arrows', priority: 'low', defaultHistory: [] },
=======
                        { loadChildren: '../pages/safety-toolkit/safety-toolkit.module#SafetyToolkitPageModule', name: 'SafetyToolkitPage', segment: 'safety-toolkit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-quiz/template-quiz.module#TemplateQuizPageModule', name: 'TemplateQuizPage', segment: 'template-quiz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-simple/template-simple.module#TemplateSimplePageModule', name: 'TemplateSimplePage', segment: 'template-simple', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-slides-arrows/template-slides-arrows.module#TemplateSlidesArrowsPageModule', name: 'TemplateSlidesArrowsPage', segment: 'template-slides-arrows', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-slider/template-slider.module#TemplateSliderPageModule', name: 'TemplateSliderPage', segment: 'template-slider', priority: 'low', defaultHistory: [] },
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
                        { loadChildren: '../pages/video-library/video-library.module#VideoLibraryPageModule', name: 'VideoLibraryPage', segment: 'video-library', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video/video.module#VideoPageModule', name: 'VideoPage', segment: 'video', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-note/view-note.module#ViewNotePageModule', name: 'ViewNotePage', segment: 'view-note', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_25__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_26__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_forms__["f" /* ReactiveFormsModule */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_35_ionic_cache__["a" /* CacheModule */].forRoot()
=======
                __WEBPACK_IMPORTED_MODULE_34_ionic_cache__["a" /* CacheModule */].forRoot()
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_video_library_video_library__["a" /* VideoLibraryPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__["a" /* SafetyToolkitPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_icu_new_starters_icu_new_starters__["a" /* IcuNewStartersPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_clinical_quality_projects_clinical_quality_projects__["a" /* ClinicalQualityProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_clinical_policies_clinical_policies__["a" /* ClinicalPoliciesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_safety_toolkit_more_safety_toolkit_more__["a" /* SafetyToolkitMorePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_notes_to_self_notes_to_self__["a" /* NotesToSelfPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_note_add_note__["a" /* AddNotePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_view_note_view_note__["a" /* ViewNotePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_video_video__["a" /* VideoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_template_slider_template_slider__["a" /* TemplateSliderPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_template_imagetop_template_imagetop__["a" /* TemplateImagetopPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_template_quiz_template_quiz__["a" /* TemplateQuizPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_template_slides_arrows_template_slides_arrows__["a" /* TemplateSlidesArrowsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_template_simple_template_simple__["a" /* TemplateSimplePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_infection_control_infection_control__["a" /* InfectionControlPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_email_composer__["a" /* EmailComposer */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__providers_note_service_note_service__["a" /* NoteService */],
                __WEBPACK_IMPORTED_MODULE_29__providers_wp_api_wp_api__["a" /* WpApiProvider */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_37__providers_video_service_video_service__["a" /* VideoService */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_network__["a" /* Network */]
=======
                __WEBPACK_IMPORTED_MODULE_35__providers_video_service_video_service__["a" /* VideoService */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_network__["a" /* Network */]
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_video_library_video_library__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_icu_new_starters_icu_new_starters__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_infection_control_infection_control__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_clinical_policies_clinical_policies__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_clinical_quality_projects_clinical_quality_projects__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_cache__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_wp_api_wp_api__ = __webpack_require__(23);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_video_library_video_library__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_icu_new_starters_icu_new_starters__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_infection_control_infection_control__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_clinical_policies_clinical_policies__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_clinical_quality_projects_clinical_quality_projects__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_cache__ = __webpack_require__(137);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













<<<<<<< HEAD

var MyApp = /** @class */ (function () {
    function MyApp(platform, cache, wpApiProvider, statusBar, splashScreen) {
        this.platform = platform;
        this.cache = cache;
        this.wpApiProvider = wpApiProvider;
=======
var MyApp = /** @class */ (function () {
    function MyApp(platform, cache, statusBar, splashScreen) {
        this.platform = platform;
        this.cache = cache;
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */] },
            { title: 'Safety Toolkit', component: __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__["a" /* SafetyToolkitPage */] },
            { title: 'Video Library', component: __WEBPACK_IMPORTED_MODULE_7__pages_video_library_video_library__["a" /* VideoLibraryPage */] },
            { title: 'ICU-New Starters', component: __WEBPACK_IMPORTED_MODULE_8__pages_icu_new_starters_icu_new_starters__["a" /* IcuNewStartersPage */] },
            { title: 'Infection Control', component: __WEBPACK_IMPORTED_MODULE_9__pages_infection_control_infection_control__["a" /* InfectionControlPage */] },
            { title: 'Clinical Policies', component: __WEBPACK_IMPORTED_MODULE_10__pages_clinical_policies_clinical_policies__["a" /* ClinicalPoliciesPage */] },
            { title: 'Clinical Quality Projects', component: __WEBPACK_IMPORTED_MODULE_11__pages_clinical_quality_projects_clinical_quality_projects__["a" /* ClinicalQualityProjectsPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.cache.setDefaultTTL(60 * 60 * 24); //24 hours
            _this.cache.setOfflineInvalidate(false);
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        //   this.wpApiProvider.getSidebar().subscribe( data => {
        //   console.log(data);
        //   this.tools = data;
        // })
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
<<<<<<< HEAD
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n\n  </ion-header>\n\n  <ion-content class="side-menu-gradient">\n    <ion-list>\n        <div class="spacer" style="height: 40px;"></div>\n        <h2 style="color:rgba(255, 255, 255, 0.927);text-align:center;font-weight:400;">GOSH App</h2>\n        <div class="spacer" style="height: 10px;"></div>\n      <button class="side-menu-item" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" no-line>\n        {{p.title}}\n      </button>\n  <!-- <sidebar *ngFor="let tool of tools" [title]="tool.title.rendered" [slug] = "tool.slug" [template] = "tool.template_name"></sidebar> -->\n     </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_12_ionic_cache__["b" /* CacheService */], __WEBPACK_IMPORTED_MODULE_13__providers_wp_api_wp_api__["a" /* WpApiProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
=======
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    \n\n  </ion-header>\n\n\n\n  <ion-content class="side-menu-gradient">\n\n    <ion-list>\n\n        <div class="spacer" style="height: 40px;"></div>\n\n        <h2 style="color:rgba(255, 255, 255, 0.927);text-align:center;font-weight:400;">GOSH App</h2>\n\n        <div class="spacer" style="height: 10px;"></div>\n\n      <button class="side-menu-item" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" no-line>\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_12_ionic_cache__["b" /* CacheService */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_safety_toolkit_more_safety_toolkit_more__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_template_slider_template_slider__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_template_quiz_template_quiz__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_template_slides_arrows_template_slides_arrows__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_template_simple_template_simple__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_template_imagetop_template_imagetop__ = __webpack_require__(167);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_safety_toolkit_more_safety_toolkit_more__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_template_slider_template_slider__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_template_quiz_template_quiz__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_template_slides_arrows_template_slides_arrows__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_template_simple_template_simple__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_template_imagetop_template_imagetop__ = __webpack_require__(166);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
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

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent(navCtrl, navParams, renderer) {
        // this.safetyToolkitMore();
        // alert(this.tools);
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.renderer = renderer;
        this.accordionExpanded = false;
        // alert(this.slug);
        // alert(this.template);
    }
    AccordionComponent.prototype.ngOnInit = function () {
        console.log(this.cardContent.nativeElement);
        this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 200ms, padding 200ms");
    };
    AccordionComponent.prototype.toggleAccordion = function () {
        if (this.accordionExpanded) {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");
        }
        else {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "1000px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");
        }
        this.accordionExpanded = !this.accordionExpanded;
    };
    AccordionComponent.prototype.template_router = function (slug, title, template, imagetop) {
        if (template == "template-slider") {
            this.template_slider(slug, title); //SLIDER TEMPLATE
        }
        else if (template == "template-quiz") {
            this.template_quiz(slug, title); //QUIZ TEMPLATE
        }
        else if (template == "template-slides-arrows") {
            this.template_slides_arrows(slug, title); //SLIDES WITH ARROWS TEMPLATE
        }
        else if (template == "template-imagetop") {
            this.template_imagetop(slug, title, imagetop); //IMAGETOP TEMPLATE
        }
        else if (template == "template-simple") {
            this.template_simple(slug, title); //SIMPLE TEMPLATE
        }
        else {
            this.safetyToolkitMore(slug, title); //DEFAULT TEMPLATE
        }
    };
    AccordionComponent.prototype.template_slider = function (slug, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_template_slider_template_slider__["a" /* TemplateSliderPage */], { slug: slug, title: title });
    };
    AccordionComponent.prototype.template_imagetop = function (slug, title, imagetop) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_template_imagetop_template_imagetop__["a" /* TemplateImagetopPage */], { slug: slug, title: title, imagetop: imagetop });
    };
    AccordionComponent.prototype.template_quiz = function (slug, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_template_quiz_template_quiz__["a" /* TemplateQuizPage */], { slug: slug, title: title });
    };
    AccordionComponent.prototype.template_slides_arrows = function (slug, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_template_slides_arrows_template_slides_arrows__["a" /* TemplateSlidesArrowsPage */], { slug: slug, title: title });
    };
    AccordionComponent.prototype.template_simple = function (slug, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_template_simple_template_simple__["a" /* TemplateSimplePage */], { slug: slug, title: title });
    };
    AccordionComponent.prototype.safetyToolkitMore = function (slug, title) {
        // alert(title);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_safety_toolkit_more_safety_toolkit_more__["a" /* SafetyToolkitMorePage */], { slug: slug, title: title });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("cc"),
        __metadata("design:type", Object)
    ], AccordionComponent.prototype, "cardContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('title'),
        __metadata("design:type", String)
    ], AccordionComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('icon'),
        __metadata("design:type", Object)
    ], AccordionComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('slug'),
        __metadata("design:type", Object)
    ], AccordionComponent.prototype, "slug", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('template'),
        __metadata("design:type", String)
    ], AccordionComponent.prototype, "template", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('imagetop'),
        __metadata("design:type", String)
    ], AccordionComponent.prototype, "imagetop", void 0);
    AccordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'accordion',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/components/accordion/accordion.html"*/'\n\n<ion-card id="home-card21">\n     \n      \n    <ion-item color="none" id="home-list-item6">\n       \n      <ion-avatar item-left (click)="template_router(slug,title,template,imagetop)">\n        <img src="{{ icon }}">\n        </ion-avatar>\n\n        <div style = "width: 150px; float:left ">\n             <h2>\n                  <div (click)="template_router(slug, title, template, imagetop)">\n                         {{ title }}\n                  </div>\n             </h2>\n        </div>\n       \n        <button  ion-button icon-only class= "item-content" clear style="float:right;" (click)="toggleAccordion()">\n            <ion-icon name="ios-arrow-down"></ion-icon>\n        </button>\n\n    </ion-item>\n     \n        <ion-card-content #cc>\n                \n     <ng-content></ng-content>\n                \n    </ion-card-content>\n</ion-card>'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/components/accordion/accordion.html"*/
=======
            selector: 'accordion',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\components\accordion\accordion.html"*/'\n\n<ion-card id="home-card21">\n     \n      \n    <ion-item color="none" id="home-list-item6">\n       \n      <ion-avatar item-left (click)="template_router(slug,title,template,imagetop)">\n        <img src="{{ icon }}">\n        </ion-avatar>\n\n        <div style = "width: 150px; float:left ">\n             <h2>\n                  <div (click)="template_router(slug, title, template, imagetop)">\n                         {{ title }}\n                  </div>\n             </h2>\n        </div>\n       \n        <button  ion-button icon-only class= "item-content" clear style="float:right;" (click)="toggleAccordion()">\n            <ion-icon name="ios-arrow-down"></ion-icon>\n        </button>\n\n    </ion-item>\n     \n        <ion-card-content #cc>\n                \n     <ng-content></ng-content>\n                \n    </ion-card-content>\n</ion-card>'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\components\accordion\accordion.html"*/
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], AccordionComponent);
    return AccordionComponent;
}());

//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionMoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AccordionMoreComponent = /** @class */ (function () {
    function AccordionMoreComponent(renderer) {
        this.renderer = renderer;
        this.accordionExpanded = false;
    }
    AccordionMoreComponent.prototype.ngOnInit = function () {
        console.log(this.cardContent.nativeElement);
        this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 300ms, padding 300ms");
    };
    AccordionMoreComponent.prototype.toggleAccordion = function () {
        if (this.accordionExpanded) {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");
        }
        else {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "1000px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");
        }
        this.accordionExpanded = !this.accordionExpanded;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("cc"),
        __metadata("design:type", Object)
    ], AccordionMoreComponent.prototype, "cardContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('title'),
        __metadata("design:type", String)
    ], AccordionMoreComponent.prototype, "title", void 0);
    AccordionMoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'accordion-more',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/components/accordion-more/accordion-more.html"*/'<ion-card>\n  <ion-card-header (click)="toggleAccordion()">\n    {{ title }}\n  </ion-card-header>\n  <!-- <ion-scroll zoom="true" scrollX="true" scrollY="true" overflow-scroll="false"> -->\n\n\n\n    <ion-card-content #cc>\n      <!-- <ion-scroll overflow-scroll="visible" zoom="true" zooming="true" max-zoom="3" min-zoom="1" scrollX="true" scrollY="true"> -->\n            <!-- <ion-scroll zooming="true" scrollY="true" scrollX="true" maxZoom="300px"> -->\n\n       \n            <ng-content></ng-content>\n          \n          \n        </ion-card-content>\n    <!-- </ion-scroll> -->\n  </ion-card>\n  \n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/components/accordion-more/accordion-more.html"*/
=======
            selector: 'accordion-more',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\components\accordion-more\accordion-more.html"*/'<ion-card>\n\n  <ion-card-header (click)="toggleAccordion()">\n\n    {{ title }}\n\n  </ion-card-header>\n\n  <!-- <ion-scroll zoom="true" scrollX="true" scrollY="true" overflow-scroll="false"> -->\n\n\n\n\n\n\n\n    <ion-card-content #cc>\n\n      <!-- <ion-scroll overflow-scroll="visible" zoom="true" zooming="true" max-zoom="3" min-zoom="1" scrollX="true" scrollY="true"> -->\n\n            <!-- <ion-scroll zooming="true" scrollY="true" scrollX="true" maxZoom="300px"> -->\n\n\n\n       \n\n            <ng-content></ng-content>\n\n          \n\n          \n\n        </ion-card-content>\n\n    <!-- </ion-scroll> -->\n\n  </ion-card>\n\n  \n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\components\accordion-more\accordion-more.html"*/
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], AccordionMoreComponent);
    return AccordionMoreComponent;
}());

//# sourceMappingURL=accordion-more.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_safety_toolkit_more_safety_toolkit_more__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_template_slider_template_slider__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_template_quiz_template_quiz__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_template_slides_arrows_template_slides_arrows__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_template_simple_template_simple__ = __webpack_require__(93);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_safety_toolkit_more_safety_toolkit_more__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_template_slider_template_slider__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_template_quiz_template_quiz__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_template_slides_arrows_template_slides_arrows__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_template_simple_template_simple__ = __webpack_require__(92);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
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
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CardComponent = /** @class */ (function () {
    function CardComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CardComponent.prototype.template_router = function (slug, title, template) {
        if (template == "template-slider") {
            this.template_slider(slug, title); //SLIDER TEMPLATE
        }
        else if (template == "template-quiz") {
            this.template_quiz(slug, title); //QUIZ TEMPLATE
        }
        else if (template == "template-slides-arrows") {
            this.template_slides_arrows(slug, title); //SLIDES WITH ARROWS TEMPLATE
        }
        else if (template == "template-simple") {
            this.template_simple(slug, title); //SIMPLE TEMPLATE
        }
        else {
            this.safetyToolkitMore(slug, title); //DEFAULT TEMPLATE
        }
    };
    CardComponent.prototype.template_slider = function (slug, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_template_slider_template_slider__["a" /* TemplateSliderPage */], { slug: slug, title: title });
    };
    CardComponent.prototype.template_quiz = function (slug, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_template_quiz_template_quiz__["a" /* TemplateQuizPage */], { slug: slug, title: title });
    };
    CardComponent.prototype.template_slides_arrows = function (slug, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_template_slides_arrows_template_slides_arrows__["a" /* TemplateSlidesArrowsPage */], { slug: slug, title: title });
    };
    CardComponent.prototype.template_simple = function (slug, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_template_simple_template_simple__["a" /* TemplateSimplePage */], { slug: slug, title: title });
    };
    CardComponent.prototype.safetyToolkitMore = function (slug, title) {
        // alert(title);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_safety_toolkit_more_safety_toolkit_more__["a" /* SafetyToolkitMorePage */], { slug: slug, title: title });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('title'),
        __metadata("design:type", String)
    ], CardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('slug'),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "slug", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('template'),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "template", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'card',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/components/card/card.html"*/'<ion-card>\n    <ion-item (click)="template_router(slug, title, template)">  \n  <ion-card-content>\n   \n      <!-- <ion-thumbnail item-start>\n          <img [src]="tool.image.guid">\n        </ion-thumbnail> -->\n    <ion-card-title>\n      \n     {{ title }}\n\n\n      </ion-card-title>\n  \n        <ng-content></ng-content>\n     \n  </ion-card-content>\n</ion-item>\n</ion-card>'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/components/card/card.html"*/
=======
            selector: 'card',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\components\card\card.html"*/'<ion-card>\n\n    <ion-item (click)="template_router(slug, title, template)">  \n\n  <ion-card-content>\n\n   \n\n      <!-- <ion-thumbnail item-start>\n\n          <img [src]="tool.image.guid">\n\n        </ion-thumbnail> -->\n\n    <ion-card-title>\n\n      \n\n     {{ title }}\n\n\n\n\n\n      </ion-card-title>\n\n  \n\n        <ng-content></ng-content>\n\n     \n\n  </ion-card-content>\n\n</ion-item>\n\n</ion-card>'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\components\card\card.html"*/
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CardComponent);
    return CardComponent;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_video_service_video_service__ = __webpack_require__(86);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_video_service_video_service__ = __webpack_require__(85);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_video_video__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_ionic_angular___ = __webpack_require__(11);
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
 * Generated class for the VideoItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var VideoItemComponent = /** @class */ (function () {
    function VideoItemComponent(videoService, http, navCtrl) {
        var _this = this;
        this.videoService = videoService;
        this.http = http;
        this.navCtrl = navCtrl;
        // this.narrowed_tutorials = this.videoService.tutorials_list;
        console.log('Hello VideoItemComponent Component');
        this.http.get('http://uclst.co.uk/wp-json/wp/v2/video_library').subscribe(function (data) {
            console.log(data);
            _this.videos = data;
            // alert(this.videos);
            // this.tool = data[''];
            // this.safetyToolkitMore();
            // alert(this.tools);
        });
        this.data = {
            search: ''
        };
        this.narrowed_tutorials = this.videos;
    }
    VideoItemComponent.prototype.search = function () {
        var searchedString = this.data.search.toLocaleLowerCase();
        if (searchedString == '') {
            this.narrowed_tutorials = this.videoService.tutorials_list;
            return;
        }
        this.narrowed_tutorials = this.videoService.tutorials_list.filter(function (tutorial) {
            if (tutorial.name.toLocaleLowerCase().indexOf(searchedString) > -1 || tutorial.description.toLocaleLowerCase().indexOf(searchedString) > -1) {
                return true;
            }
            return false;
        });
    };
    VideoItemComponent.prototype.viewVideo = function (id, name, description) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_video_video__["a" /* VideoPage */], { id: id, name: name, description: description });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('key'),
        __metadata("design:type", String)
    ], VideoItemComponent.prototype, "key", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('id'),
        __metadata("design:type", String)
    ], VideoItemComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('description'),
        __metadata("design:type", String)
    ], VideoItemComponent.prototype, "description", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('name'),
        __metadata("design:type", String)
    ], VideoItemComponent.prototype, "name", void 0);
    VideoItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'video-item',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/components/video-item/video-item.html"*/'<!-- Generated template for the VideoItemComponent component -->\n<ion-item (click)="viewVideo(id, name, description)" class="item-thumbnail-left">\n\n    <img src="https://img.youtube.com/vi/{{id}}/maxresdefault.jpg">\n  \n    <h2>{{ name }}</h2>\n    <h3 class="lbl">{{ description }}</h3>\n\n  </ion-item>'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/components/video-item/video-item.html"*/
=======
            selector: 'video-item',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\components\video-item\video-item.html"*/'<!-- Generated template for the VideoItemComponent component -->\n\n<ion-item (click)="viewVideo(id, name, description)" class="item-thumbnail-left">\n\n\n\n    <img src="https://img.youtube.com/vi/{{id}}/maxresdefault.jpg">\n\n  \n\n    <h2>{{ name }}</h2>\n\n    <h3 class="lbl">{{ description }}</h3>\n\n\n\n  </ion-item>'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\components\video-item\video-item.html"*/
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_video_service_video_service__["a" /* VideoService */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__node_modules_ionic_angular___["g" /* NavController */]])
    ], VideoItemComponent);
    return VideoItemComponent;
}());

//# sourceMappingURL=video-item.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the SidebarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('title'),
        __metadata("design:type", String)
    ], SidebarComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('slug'),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "slug", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('template'),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "template", void 0);
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'sidebar',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/components/sidebar/sidebar.html"*/'<button class="side-menu-item" menuClose ion-item no-line>\n  {{title}}\n</button>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/components/sidebar/sidebar.html"*/
=======
            selector: 'flash-card',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\components\flash-card\flash-card.html"*/'<div class="flip-container" (click)="flip()" [class.flipped]="flipped">\n\n\n\n	<div class="flipper">\n\n\n\n		<div class="front">\n\n			<ng-content select=".flash-card-front"></ng-content>\n\n		</div>\n\n\n\n		<div class="back">\n\n			<ng-content select=".flash-card-back"></ng-content>\n\n		</div>\n\n\n\n	</div>\n\n\n\n</div>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\components\flash-card\flash-card.html"*/
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());

//# sourceMappingURL=sidebar.js.map

/***/ }),

<<<<<<< HEAD
/***/ 477:
=======
/***/ 48:
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_note_add_note__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_note_view_note__ = __webpack_require__(165);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            return it.title.rendered.toLowerCase().includes(terms) || it.content.rendered.toLowerCase().includes(terms);
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlashCardComponent = /** @class */ (function () {
    function FlashCardComponent() {
        this.flipped = false;
    }
    FlashCardComponent.prototype.flip = function () {
        this.flipped = !this.flipped;
    };
    FlashCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'flash-card',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/components/flash-card/flash-card.html"*/'<div class="flip-container" (click)="flip()" [class.flipped]="flipped">\n\n	<div class="flipper">\n\n		<div class="front">\n			<ng-content select=".flash-card-front"></ng-content>\n		</div>\n\n		<div class="back">\n			<ng-content select=".flash-card-back"></ng-content>\n		</div>\n\n	</div>\n\n</div>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/components/flash-card/flash-card.html"*/
=======
            selector: 'page-notes-to-self',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\notes-to-self\notes-to-self.html"*/'<!--\n\n  Generated template for the NotesToSelfPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Notes To Self</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let note of notes | async" (click)="getNote(note.createDate)">\n\n        {{ note.title }}\n\n    </button>\n\n  </ion-list>\n\n    \n\n</ion-content>\n\n<ion-footer>\n\n  <button ion-button (click)="addNote()" block>Add Note</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\notes-to-self\notes-to-self.html"*/,
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        }),
        __metadata("design:paramtypes", [])
    ], FlashCardComponent);
    return FlashCardComponent;
}());

//# sourceMappingURL=flash-card.js.map

/***/ }),

<<<<<<< HEAD
/***/ 83:
=======
/***/ 84:
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(18);
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
    NoteService.prototype.getNote = function (createDate) {
        var _this = this;
        return this.storage.get('notes').then(function (notes) {
            _this.note = notes.slice().find(function (r) { return r.createDate === createDate; });
            return _this.note;
        });
    };
    NoteService.prototype.deleteNote = function (createDate) {
        this.notes = this.notes.filter(function (note) {
            return note.createDate !== createDate;
        });
        this.storage.set('notes', this.notes);
    };
    NoteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], NoteService);
    return NoteService;
}());

//# sourceMappingURL=note-service.js.map

/***/ }),

<<<<<<< HEAD
/***/ 86:
=======
/***/ 85:
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(135);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(134);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoService = /** @class */ (function () {
    function VideoService(http, _net, storage) {
        var _this = this;
        this.http = http;
        this._net = _net;
        this.tutorials_keys = {};
        if (this.isConnected()) {
            this.http.get('http://uclst.co.uk/wp-json/wp/v2/video_library').subscribe(function (data) {
                console.log(data);
                _this.tutorials_list = data;
                storage.set('videosKey', _this.tutorials_list);
            });
        }
        else {
            storage.get('videosKey').then(function (val) {
                _this.tutorials_list = val;
            });
        }
        console.log('Hello VideoService Service');
        for (var i in this.tutorials_list) {
            alert(this.tutorials_keys[this.tutorials_list[i].key]);
            this.tutorials_keys[this.tutorials_list[i].key] = this.tutorials_list[i];
        }
        // alert(this.tutorials_list)
    }
    // tutorials_list = [
    //   {
    //     key: 'vhp1',
    //     name: 'Vessel Health',
    //     description: 'Engagement video',
    //     id: 'LXChhaEAuJI'
    //   },
    //   {
    //     key: 'vhp2',
    //     name: 'Vessel Health',
    //     description: 'Education and training video',
    //     id: '5qQ09xz3hOo'
    //   },
    //   {
    //     key: 'sa',
    //     name: 'Situational Awareness',
    //     description: 'Situational Awareness for Everyone (SAFE)',
    //     id: 'UMVRgbN-AS0',
    //   },
    //   {
    //     key: 'phototherapy',
    //     name: 'Phototherapy',
    //     description: 'Preparing the baby for phototherapy training video',
    //     id: 'rm9tWpOZ-IY'
    //   },
    //   {
    //     key: 'babycheck',
    //     name: 'Baby check',
    //     description: 'How to conduct a newborn examination training video',
    //     id: 'IS8t2YaH6Jo'
    //   },
    //   {
    //     key: 'tracheostomy',
    //     name: 'Tracheostomy Support',
    //     description: 'Basic life support of babies and children with a tracheostomy training video',
    //     id: '5wd7KLo32fU'
    //   },
    //   {
    //     key: 'tracheostomytube',
    //     name: 'Changing a tracheostomy tube',
    //     description: "Tracheostomy elective tube change training video",
    //     id: "6vrYRKLhZSg"
    //   }
    // ];
    VideoService.prototype.isConnected = function () {
        var conntype = this._net.type;
        return conntype && conntype !== 'unknown' && conntype !== 'none';
    };
    VideoService.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoLibraryPage');
    };
    VideoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], VideoService);
    return VideoService;
}());

//# sourceMappingURL=video-service.js.map

/***/ }),

<<<<<<< HEAD
=======
/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafetyToolkitMorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(18);
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
 * Generated class for the SafetyToolkitMorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SafetyToolkitMorePage = /** @class */ (function () {
    function SafetyToolkitMorePage(storage, toastCtrl, navCtrl, navParams, wpApiProvider, http) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.http = http;
        this.slug = this.navParams.get('slug');
        console.log(this.slug);
        this.title = this.navParams.get('title');
        // alert(this.title);
        console.log(this.title);
        this.loadData();
    }
    SafetyToolkitMorePage.prototype.loadData = function (refresher) {
        var _this = this;
        if (this.wpApiProvider.isConnected() || navigator.onLine) {
            this.wpApiProvider.getSTSpecific(this.slug).subscribe(function (data) {
                console.log(data);
                _this.sections = data;
                _this.storage.set('dataFrom' + _this.slug, _this.sections);
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'Data loaded from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
        else {
            this.storage.get('dataFrom' + this.slug).then(function (data) {
                _this.sections = data;
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'No connection - failed to retrieve from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
    };
    SafetyToolkitMorePage.prototype.forceReload = function (refresher) {
        this.loadData(refresher);
        refresher.complete();
    };
    SafetyToolkitMorePage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
    };
    SafetyToolkitMorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-safety-toolkit-more',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\safety-toolkit-more\safety-toolkit-more.html"*/'<!--\n\n  Generated template for the SafetyToolkitDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{ title }}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-refresher (ionRefresh)="forceReload($event)">\n\n\n\n        <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n\n      </ion-refresher>\n\n      \n\n<div style="height:40px"></div>\n\n\n\n  <accordion-more *ngFor="let section of sections" [title]="section.title.rendered">\n\n      <div [innerHTML]="section.content.rendered"></div>\n\n     \n\n    </accordion-more>\n\n \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\safety-toolkit-more\safety-toolkit-more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__["a" /* WpApiProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], SafetyToolkitMorePage);
    return SafetyToolkitMorePage;
}());

//# sourceMappingURL=safety-toolkit-more.js.map

/***/ }),

>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafetyToolkitMorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(18);
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
 * Generated class for the SafetyToolkitMorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SafetyToolkitMorePage = /** @class */ (function () {
    function SafetyToolkitMorePage(storage, toastCtrl, navCtrl, navParams, wpApiProvider, http) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.http = http;
        this.searchOpen = false;
        this.slug = this.navParams.get('slug');
        console.log(this.slug);
        this.title = this.navParams.get('title');
        // alert(this.title);
        console.log(this.title);
        this.loadData();
    }
    SafetyToolkitMorePage.prototype.loadData = function (refresher) {
        var _this = this;
        if (this.wpApiProvider.isConnected() || navigator.onLine) {
            this.wpApiProvider.getSTSpecific(this.slug).subscribe(function (data) {
                console.log(data);
                _this.sections = data;
                _this.storage.set('dataFrom' + _this.slug, _this.sections);
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'Data loaded from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
        else {
            this.storage.get('dataFrom' + this.slug).then(function (data) {
                _this.sections = data;
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'No connection - failed to retrieve from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
    };
    SafetyToolkitMorePage.prototype.forceReload = function (refresher) {
        this.loadData(refresher);
        refresher.complete();
    };
    SafetyToolkitMorePage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
    };
    SafetyToolkitMorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-safety-toolkit-more',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/safety-toolkit-more/safety-toolkit-more.html"*/'<!--\n  Generated template for the SafetyToolkitDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n     <ion-title *ngIf ="!searchOpen"> {{ title }}</ion-title>\n     <ion-searchbar *ngIf ="searchOpen" showCancelButton="true" (ionCancel)="searchOpen=false" [(ngModel)]="terms"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only *ngIf ="!searchOpen" (click)="searchOpen=true">\n      <ion-icon name="search"></ion-icon></button>\n      <button ion-button icon-only *ngIf ="!searchOpen" (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-refresher (ionRefresh)="forceReload($event)">\n\n        <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n      </ion-refresher>\n\n<div style="height:40px"></div>\n\n  <accordion-more *ngFor="let section of sections | search : terms" [title]="section.title.rendered">\n      <div [innerHTML]="section.content.rendered"></div>\n\n    </accordion-more>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/safety-toolkit-more/safety-toolkit-more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__["a" /* WpApiProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], SafetyToolkitMorePage);
    return SafetyToolkitMorePage;
}());

//# sourceMappingURL=safety-toolkit-more.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateQuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(23);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateQuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(28);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(18);
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
 * Generated class for the TemplateQuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TemplateQuizPage = /** @class */ (function () {
    function TemplateQuizPage(toastCtrl, storage, alertCtrl, navCtrl, navParams, wpApiProvider, http) {
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.http = http;
        //NEEDS TO BE AUTOMATED - WORDPRESS 
        this.slides = [
            {
                title: 'Dream\'s Adventure',
                imageUrl: 'assets/img/lists/wishlist-1.jpg',
                songs: 2,
                private: false
            },
            {
                title: 'For the Weekend',
                imageUrl: 'assets/img/lists/wishlist-2.jpg',
                songs: 4,
                private: false
            },
            {
                title: 'Family Time',
                imageUrl: 'assets/img/lists/wishlist-3.jpg',
                songs: 5,
                private: true
            },
            {
                title: 'My Trip',
                imageUrl: 'assets/img/lists/wishlist-4.jpg',
                songs: 12,
                private: true
            },
            {
                title: 'My Trip',
                imageUrl: 'assets/img/lists/wishlist-4.jpg',
                songs: 12,
                private: true
            },
            {
                title: 'My Trip',
                imageUrl: 'assets/img/lists/wishlist-4.jpg',
                songs: 12,
                private: true
            }
        ];
        this.slug = this.navParams.get('slug');
        console.log(this.slug);
        this.title = this.navParams.get('title');
        // alert(this.title);
        console.log(this.title);
        this.loadData();
    }
    TemplateQuizPage.prototype.loadData = function (refresher) {
        var _this = this;
        if (this.wpApiProvider.isConnected() || navigator.onLine) {
            this.wpApiProvider.getSTSpecific(this.slug).subscribe(function (data) {
                console.log(data);
                _this.questions = data;
                _this.storage.set('dataFrom' + _this.slug, _this.questions);
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'Data loaded from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
        else {
            this.storage.get('dataFrom' + this.slug).then(function (data) {
                _this.questions = data;
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'No connection - failed to retrieve from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
    };
    TemplateQuizPage.prototype.forceReload = function (refresher) {
        this.loadData(refresher);
        refresher.complete();
    };
    TemplateQuizPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Excellent!',
            subTitle: 'Now move onto the next question...',
            buttons: ['Next']
        });
        alert.present();
    };
    TemplateQuizPage.prototype.wrongAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Think about this again',
            subTitle: 'Return to your step by step process for blood gas interpretation...',
            buttons: ['Return']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], TemplateQuizPage.prototype, "slider", void 0);
    TemplateQuizPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-template-quiz',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-quiz/template-quiz.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      {{title}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-refresher (ionRefresh)="forceReload($event)">\n\n        <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n      </ion-refresher>\n<ion-slides>\n  <ion-slide *ngFor="let question of questions">\n <ion-card class="question-card">\n   <ion-card-header>{{ question.title.rendered }}</ion-card-header>\n   <ion-card-content>\n  <div [innerHTML]="question.content.rendered"></div>\n </ion-card-content>\n </ion-card>\n\n <ion-list radio-group [(ngModel)]="relationship">\n    <ion-item >\n      <ion-label class="lbl">{{question.choice_1}}</ion-label>\n      <ion-radio (click)="wrongAlert()" value="friends" checked></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label class="lbl">{{question.choice_2}}</ion-label>\n      <ion-radio (click)="wrongAlert()" value="family"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label class="lbl">{{question.choice_3}}</ion-label>\n      <ion-radio (click)="showAlert()" value="enemies"></ion-radio>\n    </ion-item>\n    <ion-item>\n        <ion-label class="lbl">{{question.choice_4}}</ion-label>\n        <ion-radio (click)="wrongAlert()" value="lovers" ></ion-radio>\n      </ion-item> \n  </ion-list>\n  </ion-slide>\n</ion-slides>\n\n\n<div *ngIf="currentIndex > 0"\n    class="swiper-button-prev swiper-button-white"\n    (click)="previousSlide()"></div>\n<div *ngIf="currentIndex < slides.length-1"\n    class="swiper-button-next swiper-button-white"\n    (click)="nextSlide()"></div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-quiz/template-quiz.html"*/,
=======
            selector: 'page-template-quiz',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\template-quiz\template-quiz.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-refresher (ionRefresh)="forceReload($event)">\n\n\n\n        <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n\n      </ion-refresher>\n\n<ion-slides>\n\n  <ion-slide *ngFor="let question of questions">\n\n <ion-card class="question-card">\n\n   <ion-card-header>{{ question.title.rendered }}</ion-card-header>\n\n   <ion-card-content>\n\n  <div [innerHTML]="question.content.rendered"></div>\n\n </ion-card-content>\n\n </ion-card>\n\n\n\n <ion-list radio-group [(ngModel)]="relationship">\n\n    <ion-item >\n\n      <ion-label class="lbl">{{question.choice_1}}</ion-label>\n\n      <ion-radio (click)="wrongAlert()" value="friends" checked></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label class="lbl">{{question.choice_2}}</ion-label>\n\n      <ion-radio (click)="wrongAlert()" value="family"></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label class="lbl">{{question.choice_3}}</ion-label>\n\n      <ion-radio (click)="showAlert()" value="enemies"></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label class="lbl">{{question.choice_4}}</ion-label>\n\n        <ion-radio (click)="wrongAlert()" value="lovers" ></ion-radio>\n\n      </ion-item> \n\n  </ion-list>\n\n  </ion-slide>\n\n</ion-slides>\n\n\n\n\n\n<div *ngIf="currentIndex > 0"\n\n    class="swiper-button-prev swiper-button-white"\n\n    (click)="previousSlide()"></div>\n\n<div *ngIf="currentIndex < slides.length-1"\n\n    class="swiper-button-next swiper-button-white"\n\n    (click)="nextSlide()"></div>\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\template-quiz\template-quiz.html"*/,
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], TemplateQuizPage);
    return TemplateQuizPage;
}());

//# sourceMappingURL=template-quiz.js.map

/***/ }),

<<<<<<< HEAD
/***/ 93:
=======
/***/ 92:
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateSimplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__ = __webpack_require__(23);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__ = __webpack_require__(28);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(18);
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
 * Generated class for the SafetyToolkitMorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TemplateSimplePage = /** @class */ (function () {
    function TemplateSimplePage(storage, toastCtrl, navCtrl, navParams, wpApiProvider, http) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.http = http;
        this.searchOpen = false;
        this.slug = this.navParams.get('slug');
        console.log(this.slug);
        this.title = this.navParams.get('title');
        // alert(this.title);
        console.log(this.title);
        this.loadData();
    }
    TemplateSimplePage.prototype.loadData = function (refresher) {
        var _this = this;
        if (this.wpApiProvider.isConnected() || navigator.onLine) {
            this.wpApiProvider.getSTSpecific(this.slug).subscribe(function (data) {
                console.log(data);
                _this.sections = data;
                _this.storage.set('dataFrom' + _this.slug, _this.sections);
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'Data loaded from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
        else {
            this.storage.get('dataFrom' + this.slug).then(function (data) {
                _this.sections = data;
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'No connection - failed to retrieve from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
    };
    TemplateSimplePage.prototype.forceReload = function (refresher) {
        this.loadData(refresher);
        refresher.complete();
    };
    TemplateSimplePage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
    };
    TemplateSimplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-template-simple',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-simple/template-simple.html"*/'<!--\n  Generated template for the SafetyToolkitDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-header>\n    <ion-navbar color="primary">\n       <ion-title *ngIf ="!searchOpen"> {{ title }}</ion-title>\n       <ion-searchbar *ngIf ="searchOpen" showCancelButton="true" (ionCancel)="searchOpen=false" [(ngModel)]="terms"></ion-searchbar>\n      <ion-buttons end>\n        <button ion-button icon-only *ngIf ="!searchOpen" (click)="searchOpen=true">\n        <ion-icon name="search"></ion-icon></button>\n        <button ion-button icon-only *ngIf ="!searchOpen" (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n    <ion-refresher (ionRefresh)="forceReload($event)">\n\n        <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n      </ion-refresher>\n             <ion-searchbar [(ngModel)]="terms"></ion-searchbar>\n\n      <div *ngFor="let section of sections | search : terms" [innerHTML]="section.content.rendered"></div>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-simple/template-simple.html"*/,
=======
            selector: 'page-template-simple',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\template-simple\template-simple.html"*/'<!--\n\n  Generated template for the SafetyToolkitDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{ title }}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-refresher (ionRefresh)="forceReload($event)">\n\n\n\n        <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n\n      </ion-refresher>\n\n      \n\n \n\n      <div *ngFor="let section of sections" [innerHTML]="section.content.rendered"></div>\n\n   \n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\template-simple\template-simple.html"*/,
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__["a" /* WpApiProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], TemplateSimplePage);
    return TemplateSimplePage;
}());

//# sourceMappingURL=template-simple.js.map

/***/ }),

<<<<<<< HEAD
/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateSliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_to_self_notes_to_self__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(18);
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
 * Generated class for the TemplateSliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TemplateSliderPage = /** @class */ (function () {
    function TemplateSliderPage(storage, toastCtrl, navCtrl, navParams, wpApiProvider) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.searchOpen = false;
        this.slug = this.navParams.get('slug');
        console.log(this.slug);
        this.title = this.navParams.get('title');
        // alert(this.title);
        console.log(this.title);
        this.loadData();
    }
    TemplateSliderPage.prototype.loadData = function (refresher) {
        var _this = this;
        if (this.wpApiProvider.isConnected() || navigator.onLine) {
            this.wpApiProvider.getSTSpecific(this.slug).subscribe(function (data) {
                console.log(data);
                _this.sections = data;
                _this.storage.set('dataFrom' + _this.slug, _this.sections);
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'Data loaded from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
        else {
            this.storage.get('dataFrom' + this.slug).then(function (data) {
                _this.sections = data;
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'No connection - failed to retrieve from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
    };
    TemplateSliderPage.prototype.forceReload = function (refresher) {
        this.loadData(refresher);
        refresher.complete();
    };
    TemplateSliderPage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
    };
    TemplateSliderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TemplateSliderPage');
    };
    TemplateSliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-template-slider',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-slider/template-slider.html"*/'<ion-header>\n  <ion-navbar color="primary">\n     <ion-title *ngIf ="!searchOpen"> {{ title }}</ion-title>\n     <ion-searchbar *ngIf ="searchOpen" showCancelButton="true" (ionCancel)="searchOpen=false" [(ngModel)]="terms"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only *ngIf ="!searchOpen" (click)="searchOpen=true">\n      <ion-icon name="search"></ion-icon></button>\n      <button ion-button icon-only *ngIf ="!searchOpen" (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-refresher (ionRefresh)="forceReload($event)">\n\n        <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n      </ion-refresher>\n\n  <!--NEEDS WORDPRESS LINKING -->\n\n<ion-slides class="sliderr" pager>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-01.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-02.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-03.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-04.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-05.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-06.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-07.jpg">\n  </ion-slide>\n</ion-slides>\n\n  <accordion-more *ngFor="let section of sections" [title]="section.title.rendered">\n\n      <div [innerHTML]="section.content.rendered"></div>\n    </accordion-more>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-slider/template-slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], TemplateSliderPage);
    return TemplateSliderPage;
}());

//# sourceMappingURL=template-slider.js.map

/***/ }),

/***/ 95:
=======
/***/ 93:
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateSlidesArrowsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(23);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(28);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(18);
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
 * Generated class for the TemplateSlidesArrowsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TemplateSlidesArrowsPage = /** @class */ (function () {
    function TemplateSlidesArrowsPage(storage, toastCtrl, navCtrl, navParams, wpApiProvider, http) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.http = http;
        this.slides = [
            {
                title: 'Dream\'s Adventure',
                imageUrl: 'assets/img/lists/wishlist-1.jpg',
                songs: 2,
                private: false
            },
            {
                title: 'For the Weekend',
                imageUrl: 'assets/img/lists/wishlist-2.jpg',
                songs: 4,
                private: false
            },
            {
                title: 'Family Time',
                imageUrl: 'assets/img/lists/wishlist-3.jpg',
                songs: 5,
                private: true
            },
            {
                title: 'My Trip',
                imageUrl: 'assets/img/lists/wishlist-4.jpg',
                songs: 12,
                private: true
            },
            {
                title: 'My Trip',
                imageUrl: 'assets/img/lists/wishlist-4.jpg',
                songs: 12,
                private: true
            },
            {
                title: 'My Trip',
                imageUrl: 'assets/img/lists/wishlist-4.jpg',
                songs: 12,
                private: true
            }
        ];
        this.currentIndex = 0;
        this.slug = this.navParams.get('slug');
        console.log(this.slug);
        this.title = this.navParams.get('title');
        // alert(this.title);
        console.log(this.title);
        this.loadData();
    }
    TemplateSlidesArrowsPage.prototype.loadData = function (refresher) {
        var _this = this;
        if (this.wpApiProvider.isConnected() || navigator.onLine) {
            this.wpApiProvider.getSTSpecific(this.slug).subscribe(function (data) {
                console.log(data);
                _this.tools = data;
                _this.storage.set('dataFrom' + _this.slug, _this.tools);
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'Data loaded from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
        else {
            this.storage.get('dataFrom' + this.slug).then(function (data) {
                _this.tools = data;
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'No connection - failed to retrieve from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
    };
    TemplateSlidesArrowsPage.prototype.forceReload = function (refresher) {
        this.loadData(refresher);
        refresher.complete();
<<<<<<< HEAD
=======
    };
    TemplateSlidesArrowsPage.prototype.nextSlide = function () {
        this.slider.slideNext();
    };
    TemplateSlidesArrowsPage.prototype.previousSlide = function () {
        this.slider.slidePrev();
    };
    TemplateSlidesArrowsPage.prototype.onSlideChanged = function () {
        this.currentIndex = this.slider.getActiveIndex();
        console.log('Slide changed! Current index is', this.currentIndex);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], TemplateSlidesArrowsPage.prototype, "slider", void 0);
    TemplateSlidesArrowsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-template-slides-arrows',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\template-slides-arrows\template-slides-arrows.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Blood Culture Collection</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-refresher (ionRefresh)="forceReload($event)">\n\n\n\n        <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n\n      </ion-refresher>\n\n      \n\n \n\n  <ion-slides #slider effect="fade" (ionSlideWillChange)="onSlideChanged()">\n\n    <ion-slide *ngFor="let tool of tools"\n\n               class="swiper-no-swiping"\n\n               [ngStyle]="{\'background\' : \'url(\' + tool.image.guid + \')\'}">\n\n\n\n               <div [innerHTML]="tool.content.rendered"></div>\n\n    </ion-slide>\n\n    <!-- Add Pagination -->\n\n    <div *ngIf="currentIndex > 0"\n\n         class="swiper-button-prev swiper-button-white"\n\n         (click)="previousSlide()"></div>\n\n    <div *ngIf="currentIndex < slides.length-1"\n\n         class="swiper-button-next swiper-button-white"\n\n         (click)="nextSlide()"></div>\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\template-slides-arrows\template-slides-arrows.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], TemplateSlidesArrowsPage);
    return TemplateSlidesArrowsPage;
}());

//# sourceMappingURL=template-slides-arrows.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateSliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_to_self_notes_to_self__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(18);
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
 * Generated class for the TemplateSliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TemplateSliderPage = /** @class */ (function () {
    function TemplateSliderPage(storage, toastCtrl, navCtrl, navParams, wpApiProvider) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.slug = this.navParams.get('slug');
        console.log(this.slug);
        this.title = this.navParams.get('title');
        // alert(this.title);
        console.log(this.title);
        this.loadData();
    }
    TemplateSliderPage.prototype.loadData = function (refresher) {
        var _this = this;
        if (this.wpApiProvider.isConnected() || navigator.onLine) {
            this.wpApiProvider.getSTSpecific(this.slug).subscribe(function (data) {
                console.log(data);
                _this.sections = data;
                _this.storage.set('dataFrom' + _this.slug, _this.sections);
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'Data loaded from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
        else {
            this.storage.get('dataFrom' + this.slug).then(function (data) {
                _this.sections = data;
            });
            if (refresher) {
                var toast = this.toastCtrl.create({
                    message: 'No connection - failed to retrieve from server.',
                    duration: 2000
                });
                toast.present();
            }
        }
    };
    TemplateSliderPage.prototype.forceReload = function (refresher) {
        this.loadData(refresher);
        refresher.complete();
    };
    TemplateSliderPage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
    };
    TemplateSlidesArrowsPage.prototype.nextSlide = function () {
        this.slider.slideNext();
    };
    TemplateSlidesArrowsPage.prototype.previousSlide = function () {
        this.slider.slidePrev();
    };
    TemplateSlidesArrowsPage.prototype.onSlideChanged = function () {
        this.currentIndex = this.slider.getActiveIndex();
        console.log('Slide changed! Current index is', this.currentIndex);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], TemplateSlidesArrowsPage.prototype, "slider", void 0);
    TemplateSlidesArrowsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-template-slides-arrows',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-slides-arrows/template-slides-arrows.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Blood Culture Collection</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher (ionRefresh)="forceReload($event)">\n\n        <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n      </ion-refresher>\n      \n \n  <ion-slides #slider effect="fade" (ionSlideWillChange)="onSlideChanged()">\n    <ion-slide *ngFor="let tool of tools"\n               class="swiper-no-swiping"\n               [ngStyle]="{\'background\' : \'url(\' + tool.image.guid + \')\'}">\n\n               <div [innerHTML]="tool.content.rendered"></div>\n    </ion-slide>\n    <!-- Add Pagination -->\n    <div *ngIf="currentIndex > 0"\n         class="swiper-button-prev swiper-button-white"\n         (click)="previousSlide()"></div>\n    <div *ngIf="currentIndex < slides.length-1"\n         class="swiper-button-next swiper-button-white"\n         (click)="nextSlide()"></div>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-slides-arrows/template-slides-arrows.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], TemplateSlidesArrowsPage);
    return TemplateSlidesArrowsPage;
=======
            selector: 'page-template-slider',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\template-slider\template-slider.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{ title }}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-refresher (ionRefresh)="forceReload($event)">\n\n\n\n        <ion-refresher-content refreshingText="Reloading from server..."></ion-refresher-content>\n\n      </ion-refresher>\n\n      \n\n  <!--NEEDS WORDPRESS LINKING -->\n\n\n\n<ion-slides class="sliderr" pager>\n\n  <ion-slide>\n\n    <img src="assets/imgs/SA_Swiss_Cheese-01.jpg">\n\n  </ion-slide>\n\n  <ion-slide>\n\n    <img src="assets/imgs/SA_Swiss_Cheese-02.jpg">\n\n  </ion-slide>\n\n  <ion-slide>\n\n    <img src="assets/imgs/SA_Swiss_Cheese-03.jpg">\n\n  </ion-slide>\n\n  <ion-slide>\n\n    <img src="assets/imgs/SA_Swiss_Cheese-04.jpg">\n\n  </ion-slide>\n\n  <ion-slide>\n\n    <img src="assets/imgs/SA_Swiss_Cheese-05.jpg">\n\n  </ion-slide>\n\n  <ion-slide>\n\n    <img src="assets/imgs/SA_Swiss_Cheese-06.jpg">\n\n  </ion-slide>\n\n  <ion-slide>\n\n    <img src="assets/imgs/SA_Swiss_Cheese-07.jpg">\n\n  </ion-slide>\n\n</ion-slides>\n\n\n\n  <accordion-more *ngFor="let section of sections" [title]="section.title.rendered">\n\n\n\n      <div [innerHTML]="section.content.rendered"></div>\n\n    </accordion-more>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_8_Cache\src\pages\template-slider\template-slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], TemplateSliderPage);
    return TemplateSliderPage;
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
}());

//# sourceMappingURL=template-slides-arrows.js.map

/***/ })

<<<<<<< HEAD
},[294]);
=======
},[295]);
>>>>>>> f5f3f1477f80a851585f1e3aa2477a58b30ecaef
//# sourceMappingURL=main.js.map