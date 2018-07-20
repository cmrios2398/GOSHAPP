webpackJsonp([14],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__ = __webpack_require__(48);
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
            selector: 'page-add-note',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/add-note/add-note.html"*/'<!--\n  Generated template for the AddNotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Note</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="formGroup" (ngSubmit)="saveNote(formGroup.value)"> \n      <ion-item>\n          <ion-label>Date</ion-label>\n          <ion-datetime displayFormat="MM/DD/YYYY" formControlName="date"></ion-datetime>\n         </ion-item>\n    <ion-item>\n      <ion-label>Title</ion-label>\n      <ion-input type = "text" name="title" formControlName="title" required></ion-input>\n      <div class ="alert" *ngIf="!formGroup.controls[\'title\'].valid\n       && formGroup.controls[\'title\'].touched">{{ titleAlert }}</div>\n    </ion-item>\n    <ion-item>\n        <ion-label>Note</ion-label>\n        <ion-input type = "text" name="content" formControlName="content" required></ion-input>\n        <div class ="alert" *ngIf="!formGroup.controls[\'content\'].valid\n         && formGroup.controls[\'content\'].touched">{{ contentAlert }}</div>\n      </ion-item>\n      <div style="margin-left: 15px;">\n        <button block ion-button type="submit" [disabled]="!formGroup.valid">Save Note</button>\n      </div>  \n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/add-note/add-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__["a" /* NoteService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IcuNewStartersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(30);
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
            selector: 'page-icu-new-starters',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/icu-new-starters/icu-new-starters.html"*/'<!--\n  Generated template for the IcuNewStartersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n     <ion-title>ICU-New Starters</ion-title>  \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <card *ngFor="let tool of tools" [title]="tool.title.rendered" [slug] = "tool.slug" [template] = "tool.template_name">\n        <div [innerHTML]="tool.content.rendered"></div>\n    </card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/icu-new-starters/icu-new-starters.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], IcuNewStartersPage);
    return IcuNewStartersPage;
}());

//# sourceMappingURL=icu-new-starters.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfectionControlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(30);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], InfectionControlPage);
    return InfectionControlPage;
}());

//# sourceMappingURL=infection-control.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_note_service_note_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(173);
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
            selector: 'page-view-note',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/view-note/view-note.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>View Note</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        {{ note.title }}\n      </ion-card-title>\n      <div class="note-date">{{ note.date }}</div>\n      <hr>\n      <div>{{ note.content }}</div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <button ion-button color="balanced" block (click)="send()">Send</button>\n  <button ion-button color="danger" block (click)="deleteNote(note.createDate)">Delete Note</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/view-note/view-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__ = __webpack_require__(30);
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
            selector: 'page-safety-toolkit',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/safety-toolkit/safety-toolkit.html"*/'<!--\n  Generated template for the SafetyToolkitPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation. -->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n     <ion-title>Safety Toolkit</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="has-header" overflow-scroll="true" class="background">\n\n      <accordion *ngFor="let tool of tools" [title]="tool.title.rendered" [icon]="tool.icon.guid" [slug] = "tool.slug" [template] = "tool.template_name">\n          <div [innerHTML]="tool.content.rendered"></div>\n        </accordion>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/safety-toolkit/safety-toolkit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], SafetyToolkitPage);
    return SafetyToolkitPage;
}());

//# sourceMappingURL=safety-toolkit.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoLibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
            selector: 'page-video-library',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/video-library/video-library.html"*/'\n<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Video Library</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n \n    <ion-content padding="true" class="has-header">\n      \n        \n       \n          <ion-searchbar \n\n            [(ngModel)] = "data.search" \n            [ngModelOptions]="{standalone: true}" \n            (keyup.enter)="search()"\n            (ionInput) = "search()"\n        \n          ></ion-searchbar>\n        \n      \n      <ion-list>\n        <ion-item (click)="viewVideo(tutorial.key)" *ngFor="let tutorial of narrowed_tutorials" class="item-thumbnail-left">\n          \n          <img src="https://img.youtube.com/vi/{{tutorial.id}}/maxresdefault.jpg">\n          <h2>{{ tutorial.name }}</h2>\n          <h3 class="lbl">{{ tutorial.description }}</h3>\n\n        </ion-item>\n      </ion-list>\n    </ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/video-library/video-library.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_video_service_video_service__["a" /* VideoService */]])
    ], VideoLibraryPage);
    return VideoLibraryPage;
}());

//# sourceMappingURL=video-library.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_video_service_video_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(27);
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
            selector: 'page-video',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/video/video.html"*/'<!--\n  Generated template for the VideoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> {{ video.name }} </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;">\n      <iframe [src]="trustedVideoUrl" frameborder="0" allowfullscreen="" width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n\n    <!-- {{ videourl }} -->\n    <div class="spacer" style="height: 10px;"></div>\n  {{ video.description }}\n\n  \n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/video/video.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_video_service_video_service__["a" /* VideoService */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], VideoPage);
    return VideoPage;
}());

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 129:
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
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		300,
		13
	],
	"../pages/add-note/add-note.module": [
		301,
		12
	],
	"../pages/icu-new-starters/icu-new-starters.module": [
		302,
		11
	],
	"../pages/infection-control/infection-control.module": [
		303,
		10
	],
	"../pages/notes-to-self/notes-to-self.module": [
		304,
		9
	],
	"../pages/safety-toolkit-more/safety-toolkit-more.module": [
		305,
		8
	],
	"../pages/safety-toolkit/safety-toolkit.module": [
		306,
		7
	],
	"../pages/template-quiz/template-quiz.module": [
		307,
		6
	],
	"../pages/template-simple/template-simple.module": [
		308,
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
		311,
		2
	],
	"../pages/video/video.module": [
		312,
		1
	],
	"../pages/view-note/view-note.module": [
		313,
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
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_icu_new_starters_icu_new_starters__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_video_library_video_library__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notes_to_self_notes_to_self__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_safety_toolkit_more_safety_toolkit_more__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_video_video__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_template_slider_template_slider__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_template_slides_arrows_template_slides_arrows__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_template_quiz_template_quiz__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_template_simple_template_simple__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_infection_control_infection_control__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_add_note_add_note__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_note_service_note_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_view_note_view_note__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_email_composer__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_wp_api_wp_api__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_accordion_accordion__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_accordion_more_accordion_more__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_card_card__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_video_service_video_service__ = __webpack_require__(89);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_video_library_video_library__["a" /* VideoLibraryPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__["a" /* SafetyToolkitPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_icu_new_starters_icu_new_starters__["a" /* IcuNewStartersPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_safety_toolkit_more_safety_toolkit_more__["a" /* SafetyToolkitMorePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_notes_to_self_notes_to_self__["a" /* NotesToSelfPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_add_note_add_note__["a" /* AddNotePage */],
                __WEBPACK_IMPORTED_MODULE_27__components_accordion_accordion__["a" /* AccordionComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_accordion_more_accordion_more__["a" /* AccordionMoreComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_card_card__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_view_note_view_note__["a" /* ViewNotePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_video_video__["a" /* VideoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_template_slider_template_slider__["a" /* TemplateSliderPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_template_quiz_template_quiz__["a" /* TemplateQuizPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_template_slides_arrows_template_slides_arrows__["a" /* TemplateSlidesArrowsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_template_simple_template_simple__["a" /* TemplateSimplePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_infection_control_infection_control__["a" /* InfectionControlPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-note/add-note.module#AddNotePageModule', name: 'AddNotePage', segment: 'add-note', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/icu-new-starters/icu-new-starters.module#IcuNewStartersPageModule', name: 'IcuNewStartersPage', segment: 'icu-new-starters', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/infection-control/infection-control.module#InfectionControlPageModule', name: 'InfectionControlPage', segment: 'infection-control', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notes-to-self/notes-to-self.module#NotesToSelfPageModule', name: 'NotesToSelfPage', segment: 'notes-to-self', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/safety-toolkit-more/safety-toolkit-more.module#SafetyToolkitMorePageModule', name: 'SafetyToolkitMorePage', segment: 'safety-toolkit-more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/safety-toolkit/safety-toolkit.module#SafetyToolkitPageModule', name: 'SafetyToolkitPage', segment: 'safety-toolkit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-quiz/template-quiz.module#TemplateQuizPageModule', name: 'TemplateQuizPage', segment: 'template-quiz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-simple/template-simple.module#TemplateSimplePageModule', name: 'TemplateSimplePage', segment: 'template-simple', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-slider/template-slider.module#TemplateSliderPageModule', name: 'TemplateSliderPage', segment: 'template-slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-slides-arrows/template-slides-arrows.module#TemplateSlidesArrowsPageModule', name: 'TemplateSlidesArrowsPage', segment: 'template-slides-arrows', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video-library/video-library.module#VideoLibraryPageModule', name: 'VideoLibraryPage', segment: 'video-library', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video/video.module#VideoPageModule', name: 'VideoPage', segment: 'video', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-note/view-note.module#ViewNotePageModule', name: 'ViewNotePage', segment: 'view-note', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_23__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_forms__["f" /* ReactiveFormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_video_library_video_library__["a" /* VideoLibraryPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__["a" /* SafetyToolkitPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_icu_new_starters_icu_new_starters__["a" /* IcuNewStartersPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_safety_toolkit_more_safety_toolkit_more__["a" /* SafetyToolkitMorePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_notes_to_self_notes_to_self__["a" /* NotesToSelfPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_add_note_add_note__["a" /* AddNotePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_view_note_view_note__["a" /* ViewNotePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_video_video__["a" /* VideoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_template_slider_template_slider__["a" /* TemplateSliderPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_template_quiz_template_quiz__["a" /* TemplateQuizPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_template_slides_arrows_template_slides_arrows__["a" /* TemplateSlidesArrowsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_template_simple_template_simple__["a" /* TemplateSimplePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_infection_control_infection_control__["a" /* InfectionControlPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_email_composer__["a" /* EmailComposer */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_note_service_note_service__["a" /* NoteService */],
                __WEBPACK_IMPORTED_MODULE_26__providers_wp_api_wp_api__["a" /* WpApiProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_video_service_video_service__["a" /* VideoService */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_safety_toolkit_safety_toolkit__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_video_library_video_library__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_icu_new_starters_icu_new_starters__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_infection_control_infection_control__ = __webpack_require__(114);
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
            { title: 'Infection Control', component: __WEBPACK_IMPORTED_MODULE_9__pages_infection_control_infection_control__["a" /* InfectionControlPage */] }
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

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_safety_toolkit_more_safety_toolkit_more__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_template_slider_template_slider__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_template_quiz_template_quiz__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_template_slides_arrows_template_slides_arrows__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_template_simple_template_simple__ = __webpack_require__(56);
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
    AccordionComponent.prototype.template_router = function (slug, title, template) {
        if (template == "template-slider") {
            this.template_slider(slug, title); //SLIDER TEMPLATE
        }
        if (template == "template-quiz") {
            this.template_quiz(slug, title); //QUIZ TEMPLATE
        }
        if (template == "template-slides-arrows") {
            this.template_slides_arrows(slug, title); //SLIDES WITH ARROWS TEMPLATE
        }
        if (template == "template-simple") {
            this.template_simple(slug, title); //SIMPLE TEMPLATE
        }
        else {
            this.safetyToolkitMore(slug, title); //DEFAULT TEMPLATE
        }
    };
    AccordionComponent.prototype.template_slider = function (slug, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_template_slider_template_slider__["a" /* TemplateSliderPage */], { slug: slug, title: title });
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
    AccordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'accordion',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/components/accordion/accordion.html"*/'\n\n<ion-card id="home-card21">\n     \n      \n    <ion-item color="none" id="home-list-item6">\n       \n      <ion-avatar item-left (click)="template_router(slug,title,template)">\n        <img src="{{ icon }}">\n        </ion-avatar>\n\n        <div style = "width: 150px; float:left ">\n             <h2>\n                  <div (click)="template_router(slug, title, template)">\n                         {{ title }}\n                  </div>\n             </h2>\n        </div>\n       \n        <button  ion-button icon-only class= "item-content" clear style="float:right;" (click)="toggleAccordion()">\n            <ion-icon name="ios-arrow-down"></ion-icon>\n        </button>\n\n    </ion-item>\n     \n        <ion-card-content #cc>\n          \n     <ng-content></ng-content>\n  \n    </ion-card-content>\n</ion-card>'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/components/accordion/accordion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], AccordionComponent);
    return AccordionComponent;
}());

//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ 298:
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
            selector: 'accordion-more',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/components/accordion-more/accordion-more.html"*/'<ion-card>\n    <ion-card-header (click)="toggleAccordion()">\n      {{ title }}\n    </ion-card-header>\n    <ion-card-content #cc>\n       <ng-content></ng-content>\n    </ion-card-content>\n  </ion-card>\n  \n  '/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/components/accordion-more/accordion-more.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], AccordionMoreComponent);
    return AccordionMoreComponent;
}());

//# sourceMappingURL=accordion-more.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_safety_toolkit_more_safety_toolkit_more__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_template_slider_template_slider__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_template_quiz_template_quiz__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_template_slides_arrows_template_slides_arrows__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_template_simple_template_simple__ = __webpack_require__(56);
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
        if (template == "template-quiz") {
            this.template_quiz(slug, title); //QUIZ TEMPLATE
        }
        if (template == "template-slides-arrows") {
            this.template_slides_arrows(slug, title); //SLIDES WITH ARROWS TEMPLATE
        }
        if (template == "template-simple") {
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
        __metadata("design:type", String)
    ], CardComponent.prototype, "template", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'card',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/components/card/card.html"*/'<ion-card>\n    <ion-item (click)="template_router(slug, title, template)">  \n  <ion-card-content>\n   \n      <!-- <ion-thumbnail item-start>\n          <img [src]="tool.image.guid">\n        </ion-thumbnail> -->\n    <ion-card-title>\n      \n     {{ title }}\n\n\n      </ion-card-title>\n  \n        <ng-content></ng-content>\n     \n  </ion-card-content>\n</ion-item>\n</ion-card>'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/components/card/card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CardComponent);
    return CardComponent;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WpApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
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
    WpApiProvider.prototype.getSTSpecific = function (slug) {
        return this.http.get('http://uclst.co.uk/wp-json/wp/v2/' + slug);
    };
    WpApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], WpApiProvider);
    return WpApiProvider;
}());

//# sourceMappingURL=wp-api.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesToSelfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_note_add_note__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__ = __webpack_require__(48);
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
            selector: 'page-notes-to-self',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/notes-to-self/notes-to-self.html"*/'<!--\n  Generated template for the NotesToSelfPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Notes To Self</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let note of notes | async" (click)="getNote(note.createDate)">\n        {{ note.title }}\n    </button>\n  </ion-list>\n    \n</ion-content>\n<ion-footer>\n  <button ion-button (click)="addNote()" block>Add Note</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/notes-to-self/notes-to-self.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_note_service_note_service__["a" /* NoteService */]])
    ], NotesToSelfPage);
    return NotesToSelfPage;
}());

//# sourceMappingURL=notes-to-self.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(172);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafetyToolkitMorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__ = __webpack_require__(30);
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
            selector: 'page-safety-toolkit-more',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/safety-toolkit-more/safety-toolkit-more.html"*/'<!--\n  Generated template for the SafetyToolkitDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <accordion-more *ngFor="let section of sections" [title]="section.title.rendered">\n      <div [innerHTML]="section.content.rendered"></div>\n    </accordion-more>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/safety-toolkit-more/safety-toolkit-more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__["a" /* WpApiProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], SafetyToolkitMorePage);
    return SafetyToolkitMorePage;
}());

//# sourceMappingURL=safety-toolkit-more.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateQuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
    function TemplateQuizPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TemplateQuizPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TemplateQuizPage');
    };
    TemplateQuizPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-template-quiz',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-quiz/template-quiz.html"*/'<!--\n  Generated template for the TemplateQuizPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>templateQuiz</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-quiz/template-quiz.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TemplateQuizPage);
    return TemplateQuizPage;
}());

//# sourceMappingURL=template-quiz.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateSimplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_to_self_notes_to_self__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__ = __webpack_require__(30);
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
            selector: 'page-template-simple',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-simple/template-simple.html"*/'<!--\n  Generated template for the SafetyToolkitDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n \n      <div *ngFor="let section of sections" [innerHTML]="section.content.rendered"></div>\n   \n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-simple/template-simple.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_wp_api_wp_api__["a" /* WpApiProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], TemplateSimplePage);
    return TemplateSimplePage;
}());

//# sourceMappingURL=template-simple.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateSliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_to_self_notes_to_self__ = __webpack_require__(34);
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
            selector: 'page-template-slider',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-slider/template-slider.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)= "notesToSelf()"><ion-icon name="logo-buffer"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-slides class="sliderr" pager>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-01.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-02.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-03.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-04.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-05.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-06.jpg">\n  </ion-slide>\n  <ion-slide>\n    <img src="assets/imgs/SA_Swiss_Cheese-07.jpg">\n  </ion-slide>\n</ion-slides>\n\n  <accordion-more *ngFor="let section of sections" [title]="section.title.rendered">\n      <div [innerHTML]="section.content.rendered"></div>\n    </accordion-more>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-slider/template-slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_api_wp_api__["a" /* WpApiProvider */]])
    ], TemplateSliderPage);
    return TemplateSliderPage;
}());

//# sourceMappingURL=template-slider.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateSlidesArrowsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
    function TemplateSlidesArrowsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TemplateSlidesArrowsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TemplateSlidesArrowsPage');
    };
    TemplateSlidesArrowsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-template-slides-arrows',template:/*ion-inline-start:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-slides-arrows/template-slides-arrows.html"*/'<!--\n  Generated template for the TemplateSlidesArrowsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>templateSlidesArrows</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ionicapp/Desktop/GOSHAPP/src/pages/template-slides-arrows/template-slides-arrows.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TemplateSlidesArrowsPage);
    return TemplateSlidesArrowsPage;
}());

//# sourceMappingURL=template-slides-arrows.js.map

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

},[217]);
//# sourceMappingURL=main.js.map