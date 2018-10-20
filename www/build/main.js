webpackJsonp([0],{

/***/ 195:
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
webpackEmptyAsyncContext.id = 195;

/***/ }),

/***/ 236:
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
webpackEmptyAsyncContext.id = 236;

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { SuperTabsModule } from 'ionic2-super-tabs';
//import 'rxjs/add/observable/fromEvent'
var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\nodejs\CommentIt\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Read Feedback" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Give Feedback" tabIcon="chatboxes"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="@bout" tabIcon="information-circle"></ion-tab>\n  \n</ion-tabs>\n'/*ion-inline-end:"C:\nodejs\CommentIt\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.swipe = function (event) {
        if (event.direction === 4) {
            this.navCtrl.parent.select(1);
        }
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\nodejs\CommentIt\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      @bout\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: bisque;">\n    <div class="main-content" (swipe)="swipe($event)">\n <p>\n   Developer : NOAH PINTO\n </p>\n <p>\n    Version : 2.3\n  </p>\n <p>\n   For more information contact : 8892841624\n </p>\n </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\nodejs\CommentIt\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
    }
    ContactPage.prototype.swipe = function (event) {
        if (event.direction === 2) {
            this.navCtrl.parent.select(2);
        }
        if (event.direction === 4) {
            this.navCtrl.parent.select(0);
        }
    };
    ContactPage.prototype.send = function () {
        var _this = this;
        if (!this.to || !this.msg) {
            var alert_1 = this.alertCtrl.create({
                title: "Please enter the user name and the comment",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.to = this.to.toLowerCase();
            var comment = { to: this.to, msg: this.msg };
            this.db.list('/comments').push(comment).then(function (saved) {
                console.log('saved', saved);
                _this.to = '';
                _this.msg = '';
            }, function (error) {
                console.log('error', error);
            });
            var alert_2 = this.alertCtrl.create({
                title: "Your comment is send sucessfully",
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\nodejs\CommentIt\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Give Feedback\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: bisque;">\n    <div class="main-content" (swipe)="swipe($event)">\n    <ion-list>\n        \n          <ion-item  style="background-color: antiquewhite;">\n              \n            <ion-input type="text" [(ngModel)]="to" placeholder="To"></ion-input>\n          </ion-item>\n        \n          <ion-item  style="background-color: antiquewhite;">\n              \n              <ion-textarea maxlength="200" [(ngModel)]="msg" placeholder="Comment"></ion-textarea>\n           \n          </ion-item>\n          <button style="float: right; background-color: antiquewhite;" >\n            <ion-icon full item-right color="primary"  name="send" (click)="send()"></ion-icon>\n            <p>Submit</p>\n          </button>\n        \n        </ion-list>\n        </div>\n        \n</ion-content>\n'/*ion-inline-end:"C:\nodejs\CommentIt\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(28);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function HomePage(navCtrl, alertCtrl, db, afAuth, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
        this.is_login = true;
        this.user_found = false;
        this.page_name = "Login";
    }
    HomePage.prototype.swipe = function (event) {
        if (event.direction === 2) {
            this.navCtrl.parent.select(1);
        }
    };
    HomePage.prototype.display = function () {
        var _this = this;
        this.user_found = true;
        this.page_name = "WELCOME " + this.username.toUpperCase();
        // this.comments=this.db.list('/comments').valueChanges();
        this.comments = this.db.list('/comments', function (ref) {
            return ref.orderByChild('to').equalTo(_this.username);
        });
        this.items = this.comments.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    HomePage.prototype.delete = function (key) {
        this.comments.remove(key);
    };
    HomePage.prototype.change_sign = function () {
        this.page_name = "Register";
        this.is_login = false;
    };
    HomePage.prototype.change_login = function () {
        this.page_name = "Login";
        this.is_login = true;
    };
    HomePage.prototype.reg = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        if (!this.username || !this.password) {
            var alert_1 = this.alertCtrl.create({
                title: "please enter username and password",
                buttons: ['OK']
            });
            alert_1.present();
            loader.dismiss();
        }
        else {
            this.username = this.username.toLowerCase();
            var user = this.username + "@abc.com";
            this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(user, this.password).then(function (result) {
                console.log('result', result);
                var user = { name: _this.username };
                _this.db.list('/users').push(user).then(function (saved) {
                    console.log('saved', saved);
                    window.localStorage.setItem('isuser', _this.username);
                    _this.display();
                }, function (error) {
                    console.log('error', error);
                });
                loader.dismiss();
            }, function (error) {
                var msg;
                if (_this.password.length < 6) {
                    msg = "please enter a password with min 6 char";
                }
                else {
                    msg = "username exists please select a different name";
                }
                var alert = _this.alertCtrl.create({
                    title: msg,
                    buttons: ['OK']
                });
                alert.present();
                loader.dismiss();
            });
        }
    };
    HomePage.prototype.onLogin = function () {
        var _this = this;
        if (!this.username || !this.password) {
            var alert_2 = this.alertCtrl.create({
                title: "please enter username and password",
                buttons: ['OK']
            });
            alert_2.present();
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: "Please wait...",
            });
            loader_1.present();
            var user = this.username + "@abc.com";
            this.username = this.username.toLowerCase();
            this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user, this.password).then(function (result) {
                console.log('result', result);
                _this.display();
                window.localStorage.setItem('isuser', _this.username);
                loader_1.dismiss();
            }, function (error) {
                console.log('error', error);
                var alert = _this.alertCtrl.create({
                    title: error,
                    buttons: ['OK']
                });
                alert.present();
                loader_1.dismiss();
            });
        }
    };
    HomePage.prototype.logout = function () {
        window.localStorage.removeItem('isuser');
        this.is_login = true;
        this.user_found = false;
        this.page_name = "Login";
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        if (this.username = window.localStorage.getItem('isuser')) {
            this.display();
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\nodejs\CommentIt\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{page_name}} \n    <div *ngIf="user_found">\n      <button style="float: right;">\n        <ion-icon item-right color="primary" name="log-out" (click)="logout()"></ion-icon>\n        </button>\n        </div>\n    </ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content padding style="background-color: bisque;">\n    <div class="main-content" (swipe)="swipe($event)">\n\n  \n  \n  <div *ngIf="!user_found">\n      \n          <div *ngIf="is_login">\n              \n              <ion-item style="\n              background-color: antiquewhite;\n          ">\n                  <ion-label floating>Username</ion-label>\n                  <ion-input type="text" [(ngModel)]="username"></ion-input>\n                </ion-item>\n            \n                <ion-item style="\n              background-color: antiquewhite;\n          ">\n                  <ion-label floating>Password</ion-label>\n                  <ion-input type="password" [(ngModel)]="password"></ion-input>\n                </ion-item>\n            \n                <ion-item style="\n              background-color: antiquewhite;\n          ">\n                  <button ion-button full (click)="onLogin()">Login</button>\n                </ion-item>\n        \n                <ion-item style="\n              background-color: antiquewhite;\n          ">\n          <p>If your a new user please Register yourself</p><br>\n                    <button ion-button full (click)="change_sign()">Register</button>\n                  </ion-item>\n            \n          </div>\n        \n          <div *ngIf="!is_login">\n            \n              \n            <ion-item style="\n              background-color: antiquewhite;\n          ">\n                  <ion-label floating>Username</ion-label>\n                  <ion-input type="text" [(ngModel)]="username"></ion-input>\n                </ion-item>\n            \n                <ion-item style="\n              background-color: antiquewhite;\n          ">\n                  <ion-label floating>Password</ion-label>\n                  <ion-input type="password" [(ngModel)]="password"></ion-input>\n                </ion-item>\n        \n                <ion-item style="\n              background-color: antiquewhite;\n          ">\n                  <button ion-button full (click)="reg()">Sign up</button>\n                </ion-item>\n            \n                <ion-item style="\n              background-color: antiquewhite;\n          ">\n          <p>If you have Registered please click on login</p><br>\n                  <button ion-button full (click)="change_login()">Login</button>\n                </ion-item>\n        \n             \n        \n          </div>\n        </div>\n        <div *ngIf="user_found">\n        \n        <div *ngFor="let item of items | async">\n        <ion-card style="background-color: gray;">\n              \n              <ion-card-content style="\n              background-color: antiquewhite;\n          ">\n                 {{item.msg}}\n               </ion-card-content>\n               <button ion-button style="\n               background-color:deepskyblue;\n           " round (click)="delete(item.key)">Delete</button>\n          </ion-card>\n        </div>\n          \n        </div>\n        </div>\n        \n      \n</ion-content>\n'/*ion-inline-end:"C:\nodejs\CommentIt\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(432);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic2_super_tabs__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_fire_database__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_fire_auth__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var config = {
    apiKey: "AIzaSyBSC0E-iDUYskwNltTzQg58yNU7w-nhDjE",
    authDomain: "commentit-34011.firebaseapp.com",
    databaseURL: "https://commentit-34011.firebaseio.com",
    projectId: "commentit-34011",
    storageBucket: "commentit-34011.appspot.com",
    messagingSenderId: "202780759703"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_fire__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_10_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_fire__["a" /* AngularFireModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_fire_auth__["a" /* AngularFireAuth */],
                //SuperTabsModule,
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(280);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\nodejs\CommentIt\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\nodejs\CommentIt\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[299]);
//# sourceMappingURL=main.js.map