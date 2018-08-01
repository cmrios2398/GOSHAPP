webpackJsonp([17],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
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
            selector: 'page-add-note',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\add-note\add-note.html"*/'<!--\n\n  Generated template for the AddNotePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Add Note</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="formGroup" (ngSubmit)="saveNote(formGroup.value)"> \n\n      <ion-item>\n\n          <ion-label>Date</ion-label>\n\n          <ion-datetime displayFormat="MM/DD/YYYY" formControlName="date"></ion-datetime>\n\n         </ion-item>\n\n    <ion-item>\n\n      <ion-label>Title</ion-label>\n\n      <ion-input type = "text" name="title" formControlName="title" required></ion-input>\n\n      <div class ="alert" *ngIf="!formGroup.controls[\'title\'].valid\n\n       && formGroup.controls[\'title\'].touched">{{ titleAlert }}</div>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Note</ion-label>\n\n        <ion-input type = "text" name="content" formControlName="content" required></ion-input>\n\n        <div class ="alert" *ngIf="!formGroup.controls[\'content\'].valid\n\n         && formGroup.controls[\'content\'].touched">{{ contentAlert }}</div>\n\n      </ion-item>\n\n      <div style="margin-left: 15px;">\n\n        <button block ion-button type="submit" [disabled]="!formGroup.valid">Save Note</button>\n\n      </div>  \n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\add-note\add-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__["a" /* NoteService */]])
    ], AddNotePage);
    return AddNotePage;
}());

//# sourceMappingURL=add-note.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
<<<<<<< HEAD
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\about\about.html"*/'<!--\n\n  Generated template for the AboutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n       <ion-title>About</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only><ion-icon name="logo-buffer"></ion-icon></button>\n\n      </ion-buttons>\n\n     \n\n    \n\n     \n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\about\about.html"*/,
=======
            selector: 'page-clinical-policies',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/clinical-policies/clinical-policies.html"*/'<!--\n  Generated template for the InfectionControlPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n         <ion-title>Clinical Policies</ion-title>\n      </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-content padding>\n\n        <card *ngFor="let tool of tools" [title]="tool.title.rendered" [slug] = "tool.slug" [template] = "tool.template_name">\n            <div [innerHTML]="tool.content.rendered"></div>\n        </card>\n\n    </ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/clinical-policies/clinical-policies.html"*/,
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33
>>>>>>> 87febe287c6ade90c6bd9c35988d605b2f0f0fbf
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IcuNewStartersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(14);
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
 * Generated class for the IcuNewStartersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IcuNewStartersPage = /** @class */ (function () {
    function IcuNewStartersPage(navCtrl, navParams, wpApiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.wpApiProvider.getICU().subscribe(function (data) {
            console.log(data);
            _this.tools = data;
        });
    }
    IcuNewStartersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IcuNewStartersPage');
    };
    IcuNewStartersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-icu-new-starters',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\icu-new-starters\icu-new-starters.html"*/'<!--\n\n  Generated template for the IcuNewStartersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n     <ion-title>ICU-New Starters</ion-title>  \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <card *ngFor="let tool of tools" [title]="tool.title.rendered" [slug] = "tool.slug" [template] = "tool.template_name">\n\n        <div [innerHTML]="tool.content.rendered"></div>\n\n    </card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\icu-new-starters\icu-new-starters.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], IcuNewStartersPage);
    return IcuNewStartersPage;
}());

//# sourceMappingURL=icu-new-starters.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicalPoliciesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(14);
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
 * Generated class for the ClinicalPoliciesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClinicalPoliciesPage = /** @class */ (function () {
    function ClinicalPoliciesPage(navCtrl, navParams, wpApiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.wpApiProvider.getClinicalPolicies().subscribe(function (data) {
            console.log(data);
            _this.tools = data;
        });
    }
    ClinicalPoliciesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-clinical-policies',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/clinical-policies/clinical-policies.html"*/'<!--\n  Generated template for the InfectionControlPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n         <ion-title>Clinical Policies</ion-title>\n      </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-content padding>\n\n        <card *ngFor="let tool of tools" [title]="tool.title.rendered" [slug] = "tool.slug" [template] = "tool.template_name">\n            <div [innerHTML]="tool.content.rendered"></div>\n        </card>\n\n    </ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/clinical-policies/clinical-policies.html"*/,
=======
            selector: 'page-infection-control',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\infection-control\infection-control.html"*/'<!--\n\n  Generated template for the InfectionControlPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n         <ion-title>Infection Control</ion-title>  \n\n      </ion-navbar>\n\n    \n\n   \n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-content padding>\n\n\n\n        <card *ngFor="let tool of tools" [title]="tool.title.rendered" [slug] = "tool.slug" [template] = "tool.template_name">\n\n            <div [innerHTML]="tool.content.rendered"></div>\n\n        </card>\n\n    \n\n    </ion-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\infection-control\infection-control.html"*/,
>>>>>>> 87febe287c6ade90c6bd9c35988d605b2f0f0fbf
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], ClinicalPoliciesPage);
    return ClinicalPoliciesPage;
}());

//# sourceMappingURL=clinical-policies.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
            selector: 'page-view-note',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\view-note\view-note.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>View Note</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{ note.title }}\n\n      </ion-card-title>\n\n      <div class="note-date">{{ note.date }}</div>\n\n      <hr>\n\n      <div>{{ note.content }}</div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n  <button ion-button color="balanced" block (click)="send()">Send</button>\n\n  <button ion-button color="danger" block (click)="deleteNote(note.createDate)">Delete Note</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\view-note\view-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__["a" /* NoteService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], ViewNotePage);
    return ViewNotePage;
}());

//# sourceMappingURL=view-note.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafetyToolkitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__ = __webpack_require__(14);
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
    function SafetyToolkitPage(navCtrl, navParams, wpApiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.wpApiProvider.getSafetyToolkit().subscribe(function (data) {
            console.log(data);
            _this.tools = data;
            // this.tool = data[''];
            // this.safetyToolkitMore();
            // alert(this.tools);
        });
    }
    SafetyToolkitPage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
    };
    SafetyToolkitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-safety-toolkit',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\safety-toolkit\safety-toolkit.html"*/'<!--\n\n  Generated template for the SafetyToolkitPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation. -->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n     <ion-title>Safety Toolkit</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="has-header" overflow-scroll="true" class="background">\n\n\n\n      <accordion *ngFor="let tool of tools" [title]="tool.title.rendered" [icon]="tool.icon.guid" [slug] = "tool.slug" [template] = "tool.template_name" [imagetop] = "tool.image_top.guid">\n\n          <div [innerHTML]="tool.content.rendered"></div>\n\n        </accordion>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\safety-toolkit\safety-toolkit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], SafetyToolkitPage);
    return SafetyToolkitPage;
}());

//# sourceMappingURL=safety-toolkit.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfectionControlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(14);
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
    function InfectionControlPage(navCtrl, navParams, wpApiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.wpApiProvider.getInfectionControl().subscribe(function (data) {
            console.log(data);
            _this.tools = data;
        });
    }
    InfectionControlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-infection-control',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/infection-control/infection-control.html"*/'<!--\n  Generated template for the InfectionControlPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n         <ion-title>Infection Control</ion-title>  \n      </ion-navbar>\n    \n   \n</ion-header>\n\n\n<ion-content padding>\n    <ion-content padding>\n\n        <card *ngFor="let tool of tools" [title]="tool.title.rendered" [slug] = "tool.slug" [template] = "tool.template_name">\n            <div [innerHTML]="tool.content.rendered"></div>\n        </card>\n    \n    </ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/infection-control/infection-control.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], InfectionControlPage);
    return InfectionControlPage;
}());

//# sourceMappingURL=infection-control.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicalQualityProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(14);
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
 * Generated class for the ClinicalQualityProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClinicalQualityProjectsPage = /** @class */ (function () {
    function ClinicalQualityProjectsPage(navCtrl, navParams, wpApiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.wpApiProvider.getClinicalQualityProjects().subscribe(function (data) {
            console.log(data);
            _this.tools = data;
        });
    }
    ClinicalQualityProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clinical-quality-projects',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/clinical-quality-projects/clinical-quality-projects.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n         <ion-title>Clinical Quality Projects</ion-title>\n      </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content>\n\n  <h4 class="title"><strong> A guide to defining Clinical Quality Projects at GOSH: Who to contact for support and governance</strong></h4>\n\n  <h6 class="paragraph-text"><strong>What is your project idea? Click on a card to reveal the project type and contact details</strong></h6>\n	<flash-card *ngFor="let tool of tools">\n\n		<div class="flash-card-front"><div [innerHTML]="tool.front"></div></div>\n\n		<div class="flash-card-back"><div [innerHTML]="tool.back"></div></div>\n\n	</flash-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/clinical-quality-projects/clinical-quality-projects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], ClinicalQualityProjectsPage);
    return ClinicalQualityProjectsPage;
}());

//# sourceMappingURL=clinical-quality-projects.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateImagetopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__ = __webpack_require__(14);
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
    function TemplateImagetopPage(navCtrl, navParams, wpApiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.slug = this.navParams.get('slug');
        console.log(this.slug);
        this.title = this.navParams.get('title');
        console.log(this.title);
        this.imagetop = this.navParams.get('imagetop');
        console.log(this.imagetop);
        this.wpApiProvider.getSTSpecific(this.slug).subscribe(function (data) {
            console.log(data);
            _this.sections = data;
        });
    }
    TemplateImagetopPage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
    };
    TemplateImagetopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TemplateImagetopPage');
    };
    TemplateImagetopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-template-imagetop',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\template-imagetop\template-imagetop.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{ title }}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<img src="{{ imagetop }} ">\n\n\n\n  <accordion-more *ngFor="let section of sections" [title]="section.title.rendered">\n\n      <div [innerHTML]="section.content.rendered"></div>\n\n    </accordion-more>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\template-imagetop\template-imagetop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], TemplateImagetopPage);
    return TemplateImagetopPage;
}());

//# sourceMappingURL=template-imagetop.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_video_service_video_service__ = __webpack_require__(89);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_video__ = __webpack_require__(121);
=======
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(28);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_video__ = __webpack_require__(120);
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33
>>>>>>> 87febe287c6ade90c6bd9c35988d605b2f0f0fbf
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
        this.video = videoService.tutorials_keys[navParams.get('videokey')];
        this.videourl = "https://www.youtube.com/embed/" + this.video.id;
    }
    VideoPage.prototype.ionViewWillEnter = function () {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videourl);
    };
    VideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoPage');
    };
    VideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-video',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\video\video.html"*/'<!--\n\n  Generated template for the VideoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title> {{ video.name }} </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;">\n\n      <iframe [src]="trustedVideoUrl" frameborder="0" allowfullscreen="" width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n\n    </div>\n\n\n\n    <!-- {{ videourl }} -->\n\n    <div class="spacer" style="height: 10px;"></div>\n\n  {{ video.description }}\n\n\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\video\video.html"*/,
        }),
<<<<<<< HEAD
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_video_service_video_service__["a" /* VideoService */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], VideoPage);
    return VideoPage;
=======
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_video_service_video_service__["a" /* VideoService */]])
    ], VideoLibraryPage);
    return VideoLibraryPage;
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33
}());

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoLibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_video_service_video_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_video__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoLibraryPage = /** @class */ (function () {
    function VideoLibraryPage(navCtrl, navParams, videoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videoService = videoService;
        this.narrowed_tutorials = this.videoService.tutorials_list;
        this.data = {
            search: ''
        };
    }
    VideoLibraryPage.prototype.search = function () {
        alert("working");
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
    VideoLibraryPage.prototype.viewVideo = function (key) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__video_video__["a" /* VideoPage */], { videokey: key });
    };
    VideoLibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-video-library',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\video-library\video-library.html"*/'\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Video Library</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n \n\n    <ion-content padding="true" class="has-header">\n\n      \n\n        \n\n       \n\n          <ion-searchbar \n\n\n\n            [(ngModel)] = "data.search" \n\n            [ngModelOptions]="{standalone: true}" \n\n            (keyup.enter)="search()"\n\n            (ionInput) = "search()"\n\n        \n\n          ></ion-searchbar>\n\n        \n\n      \n\n      <ion-list>\n\n        <ion-item (click)="viewVideo(tutorial.key)" *ngFor="let tutorial of narrowed_tutorials" class="item-thumbnail-left">\n\n          \n\n          <img src="https://img.youtube.com/vi/{{tutorial.id}}/maxresdefault.jpg">\n\n          <h2>{{ tutorial.name }}</h2>\n\n          <h3 class="lbl">{{ tutorial.description }}</h3>\n\n\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\video-library\video-library.html"*/,
        }),
<<<<<<< HEAD
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_video_service_video_service__["a" /* VideoService */]])
    ], VideoLibraryPage);
    return VideoLibraryPage;
=======
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_video_service_video_service__["a" /* VideoService */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], VideoPage);
    return VideoPage;
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33
}());

//# sourceMappingURL=video-library.js.map

/***/ }),

/***/ 132:
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
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WpApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
    function WpApiProvider(http) {
        this.http = http;
        console.log('Hello WpApiProvider Provider');
    }
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
        return this.http.get('http://uclst.co.uk/wp-json/wp/v2/' + slug + '/?per_page=100');
    };
    WpApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], WpApiProvider);
    return WpApiProvider;
}());

//# sourceMappingURL=wp-api.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		304,
		16
	],
	"../pages/add-note/add-note.module": [
		305,
		15
	],
	"../pages/clinical-policies/clinical-policies.module": [
		307,
		14
	],
	"../pages/clinical-quality-projects/clinical-quality-projects.module": [
		312,
		13
	],
	"../pages/icu-new-starters/icu-new-starters.module": [
		306,
		12
	],
	"../pages/infection-control/infection-control.module": [
		311,
		11
	],
	"../pages/notes-to-self/notes-to-self.module": [
		308,
		10
	],
	"../pages/safety-toolkit-more/safety-toolkit-more.module": [
<<<<<<< HEAD
		307,
		9
	],
	"../pages/safety-toolkit/safety-toolkit.module": [
		308,
		8
	],
	"../pages/template-imagetop/template-imagetop.module": [
		312,
		7
	],
	"../pages/template-quiz/template-quiz.module": [
		306,
		6
	],
	"../pages/template-simple/template-simple.module": [
		311,
		5
	],
	"../pages/template-slider/template-slider.module": [
		309,
		4
	],
	"../pages/template-slides-arrows/template-slides-arrows.module": [
		310,
		3
	],
	"../pages/video-library/video-library.module": [
		314,
		2
	],
	"../pages/video/video.module": [
		313,
=======
		309,
		9
	],
	"../pages/safety-toolkit/safety-toolkit.module": [
		310,
		8
	],
	"../pages/template-imagetop/template-imagetop.module": [
		313,
		7
	],
	"../pages/template-quiz/template-quiz.module": [
		315,
		6
	],
	"../pages/template-simple/template-simple.module": [
		316,
		5
	],
	"../pages/template-slider/template-slider.module": [
		314,
		4
	],
	"../pages/template-slides-arrows/template-slides-arrows.module": [
		320,
		3
	],
	"../pages/video-library/video-library.module": [
		317,
		2
	],
	"../pages/video/video.module": [
<<<<<<< HEAD
		318,
=======
		316,
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33
>>>>>>> 87febe287c6ade90c6bd9c35988d605b2f0f0fbf
		1
	],
	"../pages/view-note/view-note.module": [
		319,
		0
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
webpackAsyncContext.id = 174;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>GOSH App</h3>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\home\home.html"*/
=======
            selector: 'page-home',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>GOSH App</h3>\n  <div class="pins">\n    <ion-card class="pin" *ngFor="let post of posts">\n      <img [src]="post.image" />\n      <div *ngIf="post.description" class="post-description">\n        <small>{{ post.description }}</small>\n      </div>\n      <ion-item>\n\n        <div class="lbl">{{ post.name }}</div>\n\n      </ion-item>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/home/home.html"*/
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_icu_new_starters_icu_new_starters__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_video_library_video_library__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notes_to_self_notes_to_self__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_safety_toolkit_more_safety_toolkit_more__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_template_slider_template_slider__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_template_imagetop_template_imagetop__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_video_video__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_template_slides_arrows_template_slides_arrows__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_template_quiz_template_quiz__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_template_simple_template_simple__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_infection_control_infection_control__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_add_note_add_note__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_note_service_note_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_view_note_view_note__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_email_composer__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_wp_api_wp_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_accordion_accordion__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_accordion_more_accordion_more__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_card_card__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_video_service_video_service__ = __webpack_require__(89);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_icu_new_starters_icu_new_starters__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_clinical_policies_clinical_policies__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_clinical_quality_projects_clinical_quality_projects__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_video_library_video_library__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notes_to_self_notes_to_self__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_safety_toolkit_more_safety_toolkit_more__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_template_slider_template_slider__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_template_imagetop_template_imagetop__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_video_video__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_template_slides_arrows_template_slides_arrows__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_template_quiz_template_quiz__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_template_simple_template_simple__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_infection_control_infection_control__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_add_note_add_note__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_note_service_note_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_storage__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_view_note_view_note__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_email_composer__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_wp_api_wp_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_accordion_accordion__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_accordion_more_accordion_more__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_card_card__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_video_service_video_service__ = __webpack_require__(89);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_flash_card_flash_card__ = __webpack_require__(303);
=======
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33
>>>>>>> 87febe287c6ade90c6bd9c35988d605b2f0f0fbf
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
                __WEBPACK_IMPORTED_MODULE_10__pages_video_library_video_library__["a" /* VideoLibraryPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__["a" /* SafetyToolkitPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_icu_new_starters_icu_new_starters__["a" /* IcuNewStartersPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_clinical_quality_projects_clinical_quality_projects__["a" /* ClinicalQualityProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_clinical_policies_clinical_policies__["a" /* ClinicalPoliciesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_safety_toolkit_more_safety_toolkit_more__["a" /* SafetyToolkitMorePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_notes_to_self_notes_to_self__["a" /* NotesToSelfPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_note_add_note__["a" /* AddNotePage */],
                __WEBPACK_IMPORTED_MODULE_30__components_accordion_accordion__["a" /* AccordionComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_flash_card_flash_card__["a" /* FlashCardComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_accordion_more_accordion_more__["a" /* AccordionMoreComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_card_card__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_view_note_view_note__["a" /* ViewNotePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_video_video__["a" /* VideoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_template_slider_template_slider__["a" /* TemplateSliderPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_template_imagetop_template_imagetop__["a" /* TemplateImagetopPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_template_quiz_template_quiz__["a" /* TemplateQuizPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_template_slides_arrows_template_slides_arrows__["a" /* TemplateSlidesArrowsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_template_simple_template_simple__["a" /* TemplateSimplePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_infection_control_infection_control__["a" /* InfectionControlPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-note/add-note.module#AddNotePageModule', name: 'AddNotePage', segment: 'add-note', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/icu-new-starters/icu-new-starters.module#IcuNewStartersPageModule', name: 'IcuNewStartersPage', segment: 'icu-new-starters', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clinical-policies/clinical-policies.module#ClinicalPoliciesPageModule', name: 'ClinicalPoliciesPage', segment: 'clinical-policies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notes-to-self/notes-to-self.module#NotesToSelfPageModule', name: 'NotesToSelfPage', segment: 'notes-to-self', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-quiz/template-quiz.module#TemplateQuizPageModule', name: 'TemplateQuizPage', segment: 'template-quiz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/safety-toolkit-more/safety-toolkit-more.module#SafetyToolkitMorePageModule', name: 'SafetyToolkitMorePage', segment: 'safety-toolkit-more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/safety-toolkit/safety-toolkit.module#SafetyToolkitPageModule', name: 'SafetyToolkitPage', segment: 'safety-toolkit', priority: 'low', defaultHistory: [] },
<<<<<<< HEAD
                        { loadChildren: '../pages/infection-control/infection-control.module#InfectionControlPageModule', name: 'InfectionControlPage', segment: 'infection-control', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clinical-quality-projects/clinical-quality-projects.module#ClinicalQualityProjectsPageModule', name: 'ClinicalQualityProjectsPage', segment: 'clinical-quality-projects', priority: 'low', defaultHistory: [] },
=======
<<<<<<< HEAD
                        { loadChildren: '../pages/template-slider/template-slider.module#TemplateSliderPageModule', name: 'TemplateSliderPage', segment: 'template-slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-slides-arrows/template-slides-arrows.module#TemplateSlidesArrowsPageModule', name: 'TemplateSlidesArrowsPage', segment: 'template-slides-arrows', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-simple/template-simple.module#TemplateSimplePageModule', name: 'TemplateSimplePage', segment: 'template-simple', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-imagetop/template-imagetop.module#TemplateImagetopPageModule', name: 'TemplateImagetopPage', segment: 'template-imagetop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video/video.module#VideoPageModule', name: 'VideoPage', segment: 'video', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video-library/video-library.module#VideoLibraryPageModule', name: 'VideoLibraryPage', segment: 'video-library', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-note/view-note.module#ViewNotePageModule', name: 'ViewNotePage', segment: 'view-note', priority: 'low', defaultHistory: [] }
=======
>>>>>>> 87febe287c6ade90c6bd9c35988d605b2f0f0fbf
                        { loadChildren: '../pages/template-imagetop/template-imagetop.module#TemplateImagetopPageModule', name: 'TemplateImagetopPage', segment: 'template-imagetop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-slider/template-slider.module#TemplateSliderPageModule', name: 'TemplateSliderPage', segment: 'template-slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-quiz/template-quiz.module#TemplateQuizPageModule', name: 'TemplateQuizPage', segment: 'template-quiz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-simple/template-simple.module#TemplateSimplePageModule', name: 'TemplateSimplePage', segment: 'template-simple', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video-library/video-library.module#VideoLibraryPageModule', name: 'VideoLibraryPage', segment: 'video-library', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video/video.module#VideoPageModule', name: 'VideoPage', segment: 'video', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-note/view-note.module#ViewNotePageModule', name: 'ViewNotePage', segment: 'view-note', priority: 'low', defaultHistory: [] },
<<<<<<< HEAD
                        { loadChildren: '../pages/template-slides-arrows/template-slides-arrows.module#TemplateSlidesArrowsPageModule', name: 'TemplateSlidesArrowsPage', segment: 'template-slides-arrows', priority: 'low', defaultHistory: [] }
=======
                        { loadChildren: '../pages/template-slides-arrows/template-slides-arrows.module#TemplateSlidesArrowsPageModule', name: 'TemplateSlidesArrowsPage', segment: 'template-slides-arrows', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] }
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33
>>>>>>> 87febe287c6ade90c6bd9c35988d605b2f0f0fbf
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_25__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_26__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_forms__["f" /* ReactiveFormsModule */]
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
                __WEBPACK_IMPORTED_MODULE_33__providers_video_service_video_service__["a" /* VideoService */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_video_library_video_library__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_icu_new_starters_icu_new_starters__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_infection_control_infection_control__ = __webpack_require__(114);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(219);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_video_library_video_library__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_icu_new_starters_icu_new_starters__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_infection_control_infection_control__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_clinical_policies_clinical_policies__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_clinical_quality_projects_clinical_quality_projects__ = __webpack_require__(118);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_video_library_video_library__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_icu_new_starters_icu_new_starters__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_infection_control_infection_control__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_clinical_policies_clinical_policies__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_clinical_quality_projects_clinical_quality_projects__ = __webpack_require__(113);
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33
>>>>>>> 87febe287c6ade90c6bd9c35988d605b2f0f0fbf
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    \n\n  </ion-header>\n\n\n\n  <ion-content class="side-menu-gradient">\n\n    <ion-list>\n\n        <div class="spacer" style="height: 40px;"></div>\n\n        <h2 style="color:rgba(255, 255, 255, 0.927);text-align:center;font-weight:400;">GOSH App</h2>\n\n        <div class="spacer" style="height: 10px;"></div>\n\n      <button class="side-menu-item" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" no-line>\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_safety_toolkit_more_safety_toolkit_more__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_template_slider_template_slider__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_template_quiz_template_quiz__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_template_slides_arrows_template_slides_arrows__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_template_simple_template_simple__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_template_imagetop_template_imagetop__ = __webpack_require__(117);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_safety_toolkit_more_safety_toolkit_more__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_template_slider_template_slider__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_template_quiz_template_quiz__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_template_slides_arrows_template_slides_arrows__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_template_simple_template_simple__ = __webpack_require__(57);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_template_imagetop_template_imagetop__ = __webpack_require__(119);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_template_imagetop_template_imagetop__ = __webpack_require__(118);
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33
>>>>>>> 87febe287c6ade90c6bd9c35988d605b2f0f0fbf
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
            selector: 'accordion',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\components\accordion\accordion.html"*/'\n\n\n\n<ion-card id="home-card21">\n\n     \n\n      \n\n    <ion-item color="none" id="home-list-item6">\n\n       \n\n      <ion-avatar item-left (click)="template_router(slug,title,template,imagetop)">\n\n        <img src="{{ icon }}">\n\n        </ion-avatar>\n\n\n\n        <div style = "width: 150px; float:left ">\n\n             <h2>\n\n                  <div (click)="template_router(slug, title, template, imagetop)">\n\n                         {{ title }}\n\n                  </div>\n\n             </h2>\n\n        </div>\n\n       \n\n        <button  ion-button icon-only class= "item-content" clear style="float:right;" (click)="toggleAccordion()">\n\n            <ion-icon name="ios-arrow-down"></ion-icon>\n\n        </button>\n\n\n\n    </ion-item>\n\n     \n\n        <ion-card-content #cc>\n\n                \n\n     <ng-content></ng-content>\n\n                \n\n    </ion-card-content>\n\n</ion-card>'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\components\accordion\accordion.html"*/
>>>>>>> 87febe287c6ade90c6bd9c35988d605b2f0f0fbf
        }),
<<<<<<< HEAD
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
=======
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33
    ], AccordionComponent);
    return AccordionComponent;
}());

//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ 301:
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
            selector: 'accordion-more',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\components\accordion-more\accordion-more.html"*/'<ion-card>\n\n    <ion-card-header (click)="toggleAccordion()">\n\n      {{ title }}\n\n    </ion-card-header>\n\n    <ion-card-content #cc>\n\n       <ng-content></ng-content>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  \n\n  '/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\components\accordion-more\accordion-more.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], AccordionMoreComponent);
    return AccordionMoreComponent;
}());

//# sourceMappingURL=accordion-more.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_safety_toolkit_more_safety_toolkit_more__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_template_slider_template_slider__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_template_quiz_template_quiz__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_template_slides_arrows_template_slides_arrows__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_template_simple_template_simple__ = __webpack_require__(58);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_safety_toolkit_more_safety_toolkit_more__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_template_slider_template_slider__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_template_quiz_template_quiz__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_template_slides_arrows_template_slides_arrows__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_template_simple_template_simple__ = __webpack_require__(57);
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33
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
            selector: 'card',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\components\card\card.html"*/'<ion-card>\n\n    <ion-item (click)="template_router(slug, title, template)">  \n\n  <ion-card-content>\n\n   \n\n      <!-- <ion-thumbnail item-start>\n\n          <img [src]="tool.image.guid">\n\n        </ion-thumbnail> -->\n\n    <ion-card-title>\n\n      \n\n     {{ title }}\n\n\n\n\n\n      </ion-card-title>\n\n  \n\n        <ng-content></ng-content>\n\n     \n\n  </ion-card-content>\n\n</ion-item>\n\n</ion-card>'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\components\card\card.html"*/
        }),
<<<<<<< HEAD
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
=======
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33
    ], CardComponent);
    return CardComponent;
    var _a, _b;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 303:
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
            selector: 'flash-card',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/components/flash-card/flash-card.html"*/'<div class="flip-container" (click)="flip()" [class.flipped]="flipped">\n\n	<div class="flipper">\n\n		<div class="front">\n			<ng-content select=".flash-card-front"></ng-content>\n		</div>\n\n		<div class="back">\n			<ng-content select=".flash-card-back"></ng-content>\n		</div>\n\n	</div>\n\n</div>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/components/flash-card/flash-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FlashCardComponent);
    return FlashCardComponent;
}());

//# sourceMappingURL=flash-card.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesToSelfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_note_add_note__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_note_view_note__ = __webpack_require__(115);
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
            selector: 'page-notes-to-self',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\notes-to-self\notes-to-self.html"*/'<!--\n\n  Generated template for the NotesToSelfPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Notes To Self</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let note of notes | async" (click)="getNote(note.createDate)">\n\n        {{ note.title }}\n\n    </button>\n\n  </ion-list>\n\n    \n\n</ion-content>\n\n<ion-footer>\n\n  <button ion-button (click)="addNote()" block>Add Note</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\notes-to-self\notes-to-self.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__["a" /* NoteService */]])
    ], NotesToSelfPage);
    return NotesToSelfPage;
}());

//# sourceMappingURL=notes-to-self.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(175);
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

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafetyToolkitMorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(35);
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
    function SafetyToolkitMorePage(navCtrl, navParams, wpApiProvider, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.http = http;
        this.slug = this.navParams.get('slug');
        console.log(this.slug);
        this.title = this.navParams.get('title');
        // alert(this.title);
        console.log(this.title);
        this.wpApiProvider.getSTSpecific(this.slug).subscribe(function (data) {
            console.log(data);
            _this.sections = data;
        });
    }
    SafetyToolkitMorePage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
    };
    SafetyToolkitMorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-safety-toolkit-more',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/safety-toolkit-more/safety-toolkit-more.html"*/'<!--\n  Generated template for the SafetyToolkitDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    \n<ion-scroll zoom="true">\n</ion-scroll>\n<div style="height:40px"></div>\n\n  <accordion-more *ngFor="let section of sections" [title]="section.title.rendered">\n      <div [innerHTML]="section.content.rendered"></div>\n     \n    </accordion-more>\n \n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/safety-toolkit-more/safety-toolkit-more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__["a" /* WpApiProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], SafetyToolkitMorePage);
    return SafetyToolkitMorePage;
}());

//# sourceMappingURL=safety-toolkit-more.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateSliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_to_self_notes_to_self__ = __webpack_require__(31);
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
    function TemplateSliderPage(navCtrl, navParams, wpApiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.slug = this.navParams.get('slug');
        console.log(this.slug);
        this.title = this.navParams.get('title');
        // alert(this.title);
        console.log(this.title);
        this.wpApiProvider.getSTSpecific(this.slug).subscribe(function (data) {
            console.log(data);
            _this.sections = data;
        });
    }
    TemplateSliderPage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
    };
    TemplateSliderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TemplateSliderPage');
    };
    TemplateSliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-template-slider',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-slider/template-slider.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-slides class="sliderr" pager>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-01.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-02.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-03.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-04.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-05.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-06.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-07.jpg">\n  </ion-slide>\n</ion-slides>\n\n  <accordion-more *ngFor="let section of sections" [title]="section.title.rendered">\n\n      <div [innerHTML]="section.content.rendered"></div>\n    </accordion-more>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-slider/template-slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], TemplateSliderPage);
    return TemplateSliderPage;
}());

//# sourceMappingURL=template-slider.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
=======
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33
>>>>>>> 87febe287c6ade90c6bd9c35988d605b2f0f0fbf
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateQuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(35);
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
    function TemplateQuizPage(alertCtrl, navCtrl, navParams, wpApiProvider, http) {
        var _this = this;
        this.alertCtrl = alertCtrl;
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
        this.slug = this.navParams.get('slug');
        console.log(this.slug);
        this.title = this.navParams.get('title');
        // alert(this.title);
        console.log(this.title);
        this.wpApiProvider.getSTSpecific(this.slug).subscribe(function (data) {
            console.log(data);
            _this.questions = data;
        });
    }
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
            selector: 'page-template-quiz',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\template-quiz\template-quiz.html"*/'<!--\n\n  Generated template for the TemplateQuizPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>templateQuiz</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\template-quiz\template-quiz.html"*/,
=======
            selector: 'page-template-quiz',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-quiz/template-quiz.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      {{title}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-slides>\n  <ion-slide *ngFor="let question of questions">\n <ion-card class="question-card">\n   <ion-card-header>{{ question.title.rendered }}</ion-card-header>\n   <ion-card-content>\n  <div [innerHTML]="question.content.rendered"></div>\n </ion-card-content>\n </ion-card>\n\n <ion-list radio-group [(ngModel)]="relationship">\n    <ion-item >\n      <ion-label class="lbl">{{question.choice_1}}</ion-label>\n      <ion-radio (click)="wrongAlert()" value="friends" checked></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label class="lbl">{{question.choice_2}}</ion-label>\n      <ion-radio (click)="wrongAlert()" value="family"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label class="lbl">{{question.choice_3}}</ion-label>\n      <ion-radio (click)="showAlert()" value="enemies"></ion-radio>\n    </ion-item>\n    <ion-item>\n        <ion-label class="lbl">{{question.choice_4}}</ion-label>\n        <ion-radio (click)="wrongAlert()" value="lovers" ></ion-radio>\n      </ion-item> \n  </ion-list>\n  </ion-slide>\n</ion-slides>\n\n\n<div *ngIf="currentIndex > 0"\n    class="swiper-button-prev swiper-button-white"\n    (click)="previousSlide()"></div>\n<div *ngIf="currentIndex < slides.length-1"\n    class="swiper-button-next swiper-button-white"\n    (click)="nextSlide()"></div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-quiz/template-quiz.html"*/,
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], TemplateQuizPage);
    return TemplateQuizPage;
}());

//# sourceMappingURL=template-quiz.js.map

/***/ }),

<<<<<<< HEAD
/***/ 57:
=======
/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafetyToolkitMorePage; });
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateSliderPage; });
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_to_self_notes_to_self__ = __webpack_require__(31);
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
<<<<<<< HEAD
var SafetyToolkitMorePage = /** @class */ (function () {
    function SafetyToolkitMorePage(navCtrl, navParams, wpApiProvider, http) {
=======
var TemplateSliderPage = /** @class */ (function () {
    function TemplateSliderPage(navCtrl, navParams, wpApiProvider) {
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.slug = this.navParams.get('slug');
        console.log(this.slug);
        this.title = this.navParams.get('title');
        // alert(this.title);
        console.log(this.title);
        this.wpApiProvider.getSTSpecific(this.slug).subscribe(function (data) {
            console.log(data);
            _this.sections = data;
        });
    }
<<<<<<< HEAD
    SafetyToolkitMorePage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
    };
    SafetyToolkitMorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-safety-toolkit-more',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\safety-toolkit-more\safety-toolkit-more.html"*/'<!--\n\n  Generated template for the SafetyToolkitDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{ title }}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    \n\n<ion-scroll zoom="true">\n\n</ion-scroll>\n\n<div style="height:40px"></div>\n\n\n\n  <accordion-more *ngFor="let section of sections" [title]="section.title.rendered">\n\n      <div [innerHTML]="section.content.rendered"></div>\n\n     \n\n    </accordion-more>\n\n \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\safety-toolkit-more\safety-toolkit-more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__["a" /* WpApiProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], SafetyToolkitMorePage);
    return SafetyToolkitMorePage;
}());

//# sourceMappingURL=safety-toolkit-more.js.map
=======
    TemplateSliderPage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
    };
    TemplateSliderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TemplateSliderPage');
    };
    TemplateSliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-template-slider',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-slider/template-slider.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-slides class="sliderr" pager>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-01.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-02.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-03.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-04.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-05.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-06.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-07.jpg">\n  </ion-slide>\n</ion-slides>\n\n  <accordion-more *ngFor="let section of sections" [title]="section.title.rendered">\n\n      <div [innerHTML]="section.content.rendered"></div>\n    </accordion-more>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-slider/template-slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], TemplateSliderPage);
    return TemplateSliderPage;
}());

//# sourceMappingURL=template-slider.js.map
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33

/***/ }),

/***/ 56:
>>>>>>> 87febe287c6ade90c6bd9c35988d605b2f0f0fbf
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateSimplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(35);
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
    function TemplateSimplePage(navCtrl, navParams, wpApiProvider, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.http = http;
        this.slug = this.navParams.get('slug');
        console.log(this.slug);
        this.title = this.navParams.get('title');
        // alert(this.title);
        console.log(this.title);
        this.wpApiProvider.getSTSpecific(this.slug).subscribe(function (data) {
            console.log(data);
            _this.sections = data;
        });
    }
    TemplateSimplePage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
    };
    TemplateSimplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-template-slider',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\template-slider\template-slider.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{ title }}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ion-slides class="sliderr" pager>\n\n  <ion-slide>\n\n    <img src="assets/imgs/SA_Swiss_Cheese-01.jpg">\n\n  </ion-slide>\n\n  <ion-slide>\n\n    <img src="assets/imgs/SA_Swiss_Cheese-02.jpg">\n\n  </ion-slide>\n\n  <ion-slide>\n\n    <img src="assets/imgs/SA_Swiss_Cheese-03.jpg">\n\n  </ion-slide>\n\n  <ion-slide>\n\n    <img src="assets/imgs/SA_Swiss_Cheese-04.jpg">\n\n  </ion-slide>\n\n  <ion-slide>\n\n    <img src="assets/imgs/SA_Swiss_Cheese-05.jpg">\n\n  </ion-slide>\n\n  <ion-slide>\n\n    <img src="assets/imgs/SA_Swiss_Cheese-06.jpg">\n\n  </ion-slide>\n\n  <ion-slide>\n\n    <img src="assets/imgs/SA_Swiss_Cheese-07.jpg">\n\n  </ion-slide>\n\n</ion-slides>\n\n\n\n  <accordion-more *ngFor="let section of sections" [title]="section.title.rendered">\n\n\n\n      <div [innerHTML]="section.content.rendered"></div>\n\n    </accordion-more>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\template-slider\template-slider.html"*/,
=======
            selector: 'page-template-simple',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-simple/template-simple.html"*/'<!--\n  Generated template for the SafetyToolkitDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n \n      <div *ngFor="let section of sections" [innerHTML]="section.content.rendered"></div>\n   \n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-simple/template-simple.html"*/,
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__["a" /* WpApiProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], TemplateSimplePage);
    return TemplateSimplePage;
}());

//# sourceMappingURL=template-simple.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateSlidesArrowsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(35);
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
    function TemplateSlidesArrowsPage(navCtrl, navParams, wpApiProvider, http) {
        var _this = this;
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
        this.wpApiProvider.getSTSpecific(this.slug).subscribe(function (data) {
            console.log(data);
            _this.tools = data;
        });
    }
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
            selector: 'page-template-slides-arrows',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\template-slides-arrows\template-slides-arrows.html"*/'<!--\n\n  Generated template for the TemplateSlidesArrowsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>templateSlidesArrows</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\template-slides-arrows\template-slides-arrows.html"*/,
=======
            selector: 'page-template-slides-arrows',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-slides-arrows/template-slides-arrows.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Blood Culture Collection</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides #slider effect="fade" (ionSlideWillChange)="onSlideChanged()">\n    <ion-slide *ngFor="let tool of tools"\n               class="swiper-no-swiping"\n               [ngStyle]="{\'background\' : \'url(\' + tool.image.guid + \')\'}">\n\n               <div [innerHTML]="tool.content.rendered"></div>\n    </ion-slide>\n    <!-- Add Pagination -->\n    <div *ngIf="currentIndex > 0"\n         class="swiper-button-prev swiper-button-white"\n         (click)="previousSlide()"></div>\n    <div *ngIf="currentIndex < slides.length-1"\n         class="swiper-button-next swiper-button-white"\n         (click)="nextSlide()"></div>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-slides-arrows/template-slides-arrows.html"*/,
>>>>>>> 501ca32b50c4b2dedbb51a2f506c84d4594a9d33
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], TemplateSlidesArrowsPage);
    return TemplateSlidesArrowsPage;
}());

//# sourceMappingURL=template-slides-arrows.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateSimplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(49);
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
    function TemplateSimplePage(navCtrl, navParams, wpApiProvider, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wpApiProvider = wpApiProvider;
        this.http = http;
        this.slug = this.navParams.get('slug');
        console.log(this.slug);
        this.title = this.navParams.get('title');
        // alert(this.title);
        console.log(this.title);
        this.wpApiProvider.getSTSpecific(this.slug).subscribe(function (data) {
            console.log(data);
            _this.sections = data;
        });
    }
    TemplateSimplePage.prototype.notesToSelf = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__["a" /* NotesToSelfPage */]);
    };
    TemplateSimplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-template-simple',template:/*ion-inline-start:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\template-simple\template-simple.html"*/'<!--\n\n  Generated template for the SafetyToolkitDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{ title }}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n \n\n      <div *ngFor="let section of sections" [innerHTML]="section.content.rendered"></div>\n\n   \n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Christian\Documents\GOSH_Internship\GITHUB\GOSHAPP_1 - Templates\src\pages\template-simple\template-simple.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__["a" /* WpApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__["a" /* WpApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object])
    ], TemplateSimplePage);
    return TemplateSimplePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=template-simple.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
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

var VideoService = /** @class */ (function () {
    function VideoService() {
        this.tutorials_keys = {};
        this.tutorials_list = [
            {
                key: 'vhp1',
                name: 'Vessel Health',
                description: 'Engagement video',
                id: 'LXChhaEAuJI'
            },
            {
                key: 'vhp2',
                name: 'Vessel Health',
                description: 'Education and training video',
                id: '5qQ09xz3hOo'
            },
            {
                key: 'sa',
                name: 'Situational Awareness',
                description: 'Situational Awareness for Everyone (SAFE)',
                id: 'UMVRgbN-AS0',
            },
            {
                key: 'phototherapy',
                name: 'Phototherapy',
                description: 'Preparing the baby for phototherapy training video',
                id: 'rm9tWpOZ-IY'
            },
            {
                key: 'babycheck',
                name: 'Baby check',
                description: 'How to conduct a newborn examination training video',
                id: 'IS8t2YaH6Jo'
            },
            {
                key: 'tracheostomy',
                name: 'Tracheostomy Support',
                description: 'Basic life support of babies and children with a tracheostomy training video',
                id: '5wd7KLo32fU'
            },
            {
                key: 'tracheostomytube',
                name: 'Changing a tracheostomy tube',
                description: "Tracheostomy elective tube change training video",
                id: "6vrYRKLhZSg"
            }
        ];
        console.log('Hello VideoService Service');
        for (var i in this.tutorials_list) {
            this.tutorials_keys[this.tutorials_list[i].key] = this.tutorials_list[i];
        }
    }
    VideoService.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoLibraryPage');
    };
    VideoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], VideoService);
    return VideoService;
}());

//# sourceMappingURL=video-service.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map