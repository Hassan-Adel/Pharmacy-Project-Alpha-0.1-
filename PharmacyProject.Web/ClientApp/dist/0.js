exports.ids = [0];
exports.modules = {

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(5);
var shared_module_1 = __webpack_require__(105);
var social_login_component_1 = __webpack_require__(453);
var login_component_1 = __webpack_require__(452);
var login_routes_1 = __webpack_require__(461);
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [login_routes_1.routing, shared_module_1.SharedModule],
        declarations: [login_component_1.LoginComponent, social_login_component_1.SocialLoginComponent]
    })
], LoginModule);
exports.LoginModule = LoginModule;


/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(5);
var router_1 = __webpack_require__(36);
var account_service_1 = __webpack_require__(51);
var control_textbox_1 = __webpack_require__(457);
var utility_service_1 = __webpack_require__(38);
var LoginComponent = (function () {
    function LoginComponent(accountService, router, utilityService) {
        this.accountService = accountService;
        this.router = router;
        this.utilityService = utilityService;
        this.errors = [];
    }
    LoginComponent.prototype.login = function (model) {
        var _this = this;
        this.errors = [];
        this.accountService.login(model)
            .subscribe(function () {
            _this.utilityService.navigate('');
        }, function (errors) {
            _this.errors.push(errors['error_description']);
        });
    };
    ;
    LoginComponent.prototype.ngOnInit = function () {
        var controls = [
            new control_textbox_1.ControlTextbox({
                key: 'username',
                label: 'Email',
                placeholder: 'Email',
                value: '',
                type: 'email',
                required: true,
                order: 1
            }),
            new control_textbox_1.ControlTextbox({
                key: 'password',
                label: 'Password',
                placeholder: 'Password',
                value: '',
                type: 'password',
                required: true,
                order: 2
            })
        ];
        this.controls = controls;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'appc-login',
        styles: [__webpack_require__(458)],
        template: __webpack_require__(460)
    }),
    __metadata("design:paramtypes", [account_service_1.AccountService,
        router_1.Router,
        utility_service_1.UtilityService])
], LoginComponent);
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(5);
var common_1 = __webpack_require__(37);
var SocialLoginComponent = (function () {
    function SocialLoginComponent(location) {
        this.location = location;
    }
    SocialLoginComponent.prototype.loginGoogle = function () {
        this.redirect('Google');
    };
    SocialLoginComponent.prototype.loginFacebook = function () {
        this.redirect('Facebook');
    };
    SocialLoginComponent.prototype.loginMicrosoft = function () {
        this.redirect('Microsoft');
    };
    SocialLoginComponent.prototype.loginTwitter = function () {
        this.redirect('Twitter');
    };
    SocialLoginComponent.prototype.loginGithub = function () {
        this.redirect('GitHub');
    };
    SocialLoginComponent.prototype.loginLinkedIn = function () {
        this.redirect('LinkedIn');
    };
    SocialLoginComponent.prototype.redirect = function (provider) {
        var url = window.location.protocol + '//' + window.location.host + '/api/account/ExternalLogin?provider=' + provider;
        console.log(url);
        window.location.href = url;
    };
    return SocialLoginComponent;
}());
SocialLoginComponent = __decorate([
    core_1.Component({
        selector: 'appc-social-login',
        styles: [__webpack_require__(454)],
        template: __webpack_require__(456)
    }),
    __metadata("design:paramtypes", [common_1.Location])
], SocialLoginComponent);
exports.SocialLoginComponent = SocialLoginComponent;


/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(455);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 456:
/***/ (function(module, exports) {

module.exports = "<button class=\"btn social-login-button google\" (click)=\"loginGoogle()\">\r\n    <div layout=\"row\" layout-align=\"center center\">\r\n        <span>\r\n            <i class=\"fa fa-google\" aria-hidden=\"true\"></i>\r\n            <span>Log in with Google</span>\r\n        </span>\r\n    </div>\r\n</button>\r\n\r\n<button class=\"btn social-login-button facebook\" (click)=\"loginFacebook()\">\r\n    <div layout=\"row\" layout-align=\"center center\">\r\n        <span>\r\n            <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\r\n            <span>Log in with Facebook</span>\r\n        </span>\r\n    </div>\r\n</button>\r\n\r\n<button class=\"btn social-login-button microsoft\" (click)=\"loginMicrosoft()\">\r\n    <div layout=\"row\" layout-align=\"center center\">\r\n        <span>\r\n            <i class=\"fa fa-windows\" aria-hidden=\"true\"></i>\r\n            <span>Log in with Microsoft</span>\r\n        </span>\r\n    </div>\r\n</button>\r\n\r\n<button class=\"btn social-login-button twitter\" (click)=\"loginTwitter()\">\r\n    <div layout=\"row\" layout-align=\"center center\">\r\n        <span>\r\n            <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\r\n            <span>Log in with Twitter</span>\r\n        </span>\r\n    </div>\r\n</button>\r\n\r\n<button class=\"btn social-login-button github\" (click)=\"loginGithub()\">\r\n    <div layout=\"row\" layout-align=\"center center\">\r\n        <span>\r\n            <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\r\n            <span>Log in with Github</span>\r\n        </span>\r\n    </div>\r\n</button>\r\n\r\n<button class=\"btn social-login-button linkedin\" (click)=\"loginLinkedIn()\">\r\n    <div layout=\"row\" layout-align=\"center center\">\r\n        <span>\r\n            <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\r\n            <span>Log in with LinkedIn</span>\r\n        </span>\r\n    </div>\r\n</button>";

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var control_base_1 = __webpack_require__(50);
var ControlTextbox = (function (_super) {
    __extends(ControlTextbox, _super);
    function ControlTextbox(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.type = options.type || 'textbox';
        return _this;
    }
    return ControlTextbox;
}(control_base_1.ControlBase));
exports.ControlTextbox = ControlTextbox;


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(459);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 460:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\">\r\n            Login\r\n        </div>\r\n\r\n        <div class=\"card-block\">\r\n            <appc-error-summary [errors]=\"errors\"></appc-error-summary>\r\n            <appc-dynamic-form (formsubmit)=\"login($event)\" [controls]=\"controls\" [btnText]=\"'Login'\"></appc-dynamic-form>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <p class=\"text-center font-weight-bold\">\r\n        OR\r\n    </p>\r\n\r\n    <div class=\"text-center\">\r\n        <appc-social-login></appc-social-login>\r\n    </div>\r\n\r\n</div>";

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(36);
var login_component_1 = __webpack_require__(452);
var routes = [
    { path: '', component: login_component_1.LoginComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL3NvY2lhbGxvZ2luL3NvY2lhbC1sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL3NvY2lhbGxvZ2luL3NvY2lhbC1sb2dpbi5jb21wb25lbnQuc2Nzcz8yYmU3Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9zb2NpYWxsb2dpbi9zb2NpYWwtbG9naW4uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL3NvY2lhbGxvZ2luL3NvY2lhbC1sb2dpbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvcm1zL2NvbnRyb2wtdGV4dGJveC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3M/MGQwZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0NBQXlDO0FBRXpDLCtDQUF1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QURHLEtBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUM7O0lBQzFDLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQ0FMbUMsMEJBQVcsR0FLOUM7QUFMWSx3Q0FBYzs7Ozs7Ozs7O0FDRDNCOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7OztBQ1BBLHVvQjs7Ozs7Ozs7OztBQ0FBLHVDQUF1RDtBQUV2RCxpREFBbUQ7QUFFbkQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0NBQzFDLENBQUM7QUFFVyxlQUFPLEdBQUcscUJBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNvY2lhbExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9zb2NpYWxsb2dpbi9zb2NpYWwtbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHJvdXRpbmcgfSBmcm9tICcuL2xvZ2luLnJvdXRlcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW3JvdXRpbmcsIFNoYXJlZE1vZHVsZV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtMb2dpbkNvbXBvbmVudCwgU29jaWFsTG9naW5Db21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbk1vZHVsZSB7IH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgTG9naW5Nb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvbW9kZWxzL2xvZ2luLW1vZGVsJztcclxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL2FjY291bnQvYWNjb3VudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29udHJvbEJhc2UgfSBmcm9tICcuLi9zaGFyZWQvZm9ybXMvY29udHJvbC1iYXNlJztcclxuaW1wb3J0IHsgQ29udHJvbFRleHRib3ggfSBmcm9tICcuLi9zaGFyZWQvZm9ybXMvY29udHJvbC10ZXh0Ym94JztcclxuaW1wb3J0IHsgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3V0aWxpdHkuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwYy1sb2dpbicsXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2xvZ2luLmNvbXBvbmVudC5zY3NzJyldLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIGxvZ2luTW9kZWw6IExvZ2luTW9kZWw7XHJcbiAgICBwdWJsaWMgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHVibGljIGNvbnRyb2xzOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSxcclxuICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHVibGljIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgbG9naW4obW9kZWw6IExvZ2luTW9kZWwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UubG9naW4obW9kZWwpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51dGlsaXR5U2VydmljZS5uYXZpZ2F0ZSgnJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcnM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChlcnJvcnNbJ2Vycm9yX2Rlc2NyaXB0aW9uJ10pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xzOiBBcnJheTxDb250cm9sQmFzZTxhbnk+PiA9IFtcclxuICAgICAgICAgICAgbmV3IENvbnRyb2xUZXh0Ym94KHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3VzZXJuYW1lJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnRW1haWwnLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdFbWFpbCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjogMVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IENvbnRyb2xUZXh0Ym94KHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnUGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdQYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvcmRlcjogMlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBjb250cm9scztcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwYy1zb2NpYWwtbG9naW4nLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9zb2NpYWwtbG9naW4uY29tcG9uZW50LnNjc3MnKV0sXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zb2NpYWwtbG9naW4uY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29jaWFsTG9naW5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGxvY2F0aW9uOiBMb2NhdGlvbikgeyB9XHJcblxyXG4gICAgcHVibGljIGxvZ2luR29vZ2xlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3QoJ0dvb2dsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dpbkZhY2Vib29rKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3QoJ0ZhY2Vib29rJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ2luTWljcm9zb2Z0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3QoJ01pY3Jvc29mdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dpblR3aXR0ZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZWRpcmVjdCgnVHdpdHRlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dpbkdpdGh1YigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlZGlyZWN0KCdHaXRIdWInKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9naW5MaW5rZWRJbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlZGlyZWN0KCdMaW5rZWRJbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWRpcmVjdChwcm92aWRlcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgJy9hcGkvYWNjb3VudC9FeHRlcm5hbExvZ2luP3Byb3ZpZGVyPScgKyBwcm92aWRlcjtcclxuICAgICAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL3NvY2lhbGxvZ2luL3NvY2lhbC1sb2dpbi5jb21wb25lbnQudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc29jaWFsLWxvZ2luLmNvbXBvbmVudC5zY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9zb2NpYWxsb2dpbi9zb2NpYWwtbG9naW4uY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQ1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vc29jaWFsbG9naW4vc29jaWFsLWxvZ2luLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0NTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxidXR0b24gY2xhc3M9XFxcImJ0biBzb2NpYWwtbG9naW4tYnV0dG9uIGdvb2dsZVxcXCIgKGNsaWNrKT1cXFwibG9naW5Hb29nbGUoKVxcXCI+XFxyXFxuICAgIDxkaXYgbGF5b3V0PVxcXCJyb3dcXFwiIGxheW91dC1hbGlnbj1cXFwiY2VudGVyIGNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8c3Bhbj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtZ29vZ2xlXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDxzcGFuPkxvZyBpbiB3aXRoIEdvb2dsZTwvc3Bhbj5cXHJcXG4gICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9idXR0b24+XFxyXFxuXFxyXFxuPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIHNvY2lhbC1sb2dpbi1idXR0b24gZmFjZWJvb2tcXFwiIChjbGljayk9XFxcImxvZ2luRmFjZWJvb2soKVxcXCI+XFxyXFxuICAgIDxkaXYgbGF5b3V0PVxcXCJyb3dcXFwiIGxheW91dC1hbGlnbj1cXFwiY2VudGVyIGNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8c3Bhbj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtZmFjZWJvb2tcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPHNwYW4+TG9nIGluIHdpdGggRmFjZWJvb2s8L3NwYW4+XFxyXFxuICAgICAgICA8L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvYnV0dG9uPlxcclxcblxcclxcbjxidXR0b24gY2xhc3M9XFxcImJ0biBzb2NpYWwtbG9naW4tYnV0dG9uIG1pY3Jvc29mdFxcXCIgKGNsaWNrKT1cXFwibG9naW5NaWNyb3NvZnQoKVxcXCI+XFxyXFxuICAgIDxkaXYgbGF5b3V0PVxcXCJyb3dcXFwiIGxheW91dC1hbGlnbj1cXFwiY2VudGVyIGNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8c3Bhbj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtd2luZG93c1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICA8c3Bhbj5Mb2cgaW4gd2l0aCBNaWNyb3NvZnQ8L3NwYW4+XFxyXFxuICAgICAgICA8L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvYnV0dG9uPlxcclxcblxcclxcbjxidXR0b24gY2xhc3M9XFxcImJ0biBzb2NpYWwtbG9naW4tYnV0dG9uIHR3aXR0ZXJcXFwiIChjbGljayk9XFxcImxvZ2luVHdpdHRlcigpXFxcIj5cXHJcXG4gICAgPGRpdiBsYXlvdXQ9XFxcInJvd1xcXCIgbGF5b3V0LWFsaWduPVxcXCJjZW50ZXIgY2VudGVyXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10d2l0dGVyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDxzcGFuPkxvZyBpbiB3aXRoIFR3aXR0ZXI8L3NwYW4+XFxyXFxuICAgICAgICA8L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvYnV0dG9uPlxcclxcblxcclxcbjxidXR0b24gY2xhc3M9XFxcImJ0biBzb2NpYWwtbG9naW4tYnV0dG9uIGdpdGh1YlxcXCIgKGNsaWNrKT1cXFwibG9naW5HaXRodWIoKVxcXCI+XFxyXFxuICAgIDxkaXYgbGF5b3V0PVxcXCJyb3dcXFwiIGxheW91dC1hbGlnbj1cXFwiY2VudGVyIGNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8c3Bhbj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtZ2l0aHViXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDxzcGFuPkxvZyBpbiB3aXRoIEdpdGh1Yjwvc3Bhbj5cXHJcXG4gICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9idXR0b24+XFxyXFxuXFxyXFxuPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIHNvY2lhbC1sb2dpbi1idXR0b24gbGlua2VkaW5cXFwiIChjbGljayk9XFxcImxvZ2luTGlua2VkSW4oKVxcXCI+XFxyXFxuICAgIDxkaXYgbGF5b3V0PVxcXCJyb3dcXFwiIGxheW91dC1hbGlnbj1cXFwiY2VudGVyIGNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8c3Bhbj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbGlua2VkaW5cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPHNwYW4+TG9nIGluIHdpdGggTGlua2VkSW48L3NwYW4+XFxyXFxuICAgICAgICA8L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvYnV0dG9uPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL3NvY2lhbGxvZ2luL3NvY2lhbC1sb2dpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbnRyb2xCYXNlIH0gZnJvbSAnLi9jb250cm9sLWJhc2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xUZXh0Ym94IGV4dGVuZHMgQ29udHJvbEJhc2U8c3RyaW5nPiB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBhbnkgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZSB8fCAndGV4dGJveCc7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvZm9ybXMvY29udHJvbC10ZXh0Ym94LnRzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2xvZ2luLmNvbXBvbmVudC5zY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNiBvZmZzZXQtbWQtM1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgIExvZ2luXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiPlxcclxcbiAgICAgICAgICAgIDxhcHBjLWVycm9yLXN1bW1hcnkgW2Vycm9yc109XFxcImVycm9yc1xcXCI+PC9hcHBjLWVycm9yLXN1bW1hcnk+XFxyXFxuICAgICAgICAgICAgPGFwcGMtZHluYW1pYy1mb3JtIChmb3Jtc3VibWl0KT1cXFwibG9naW4oJGV2ZW50KVxcXCIgW2NvbnRyb2xzXT1cXFwiY29udHJvbHNcXFwiIFtidG5UZXh0XT1cXFwiJ0xvZ2luJ1xcXCI+PC9hcHBjLWR5bmFtaWMtZm9ybT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPHAgY2xhc3M9XFxcInRleHQtY2VudGVyIGZvbnQtd2VpZ2h0LWJvbGRcXFwiPlxcclxcbiAgICAgICAgT1JcXHJcXG4gICAgPC9wPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8YXBwYy1zb2NpYWwtbG9naW4+PC9hcHBjLXNvY2lhbC1sb2dpbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGluZyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLnJvdXRlcy50cyJdLCJzb3VyY2VSb290IjoiIn0=