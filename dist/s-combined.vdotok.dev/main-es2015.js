(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");








const routes = [
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
    },
    {
        path: 'chat',
        component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"],
        canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    { path: '**', redirectTo: 'login' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `<router-outlet></router-outlet>`
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/app-material/app-material.module */ "./src/app/shared/app-material/app-material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_chat_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/chat/add-group/add-group.component */ "./src/app/components/chat/add-group/add-group.component.ts");
/* harmony import */ var _components_chat_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/chat/new-chat/new-chat.component */ "./src/app/components/chat/new-chat/new-chat.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/FormsHandler/get-errors.component */ "./src/app/shared/FormsHandler/get-errors.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _shared_pipe_filter__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./shared/pipe/filter */ "./src/app/shared/pipe/filter.ts");
/* harmony import */ var _shared_pipe_safeurl__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./shared/pipe/safeurl */ "./src/app/shared/pipe/safeurl.ts");
/* harmony import */ var _shared_pipe_formatTime__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./shared/pipe/formatTime */ "./src/app/shared/pipe/formatTime.ts");
















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_10__["AppMaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot({
                maxOpened: 1,
                preventDuplicates: true
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"],
        _components_chat_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_13__["AddGroupComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _components_chat_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_14__["NewChatComponent"],
        _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_10__["AppMaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"],
                    _components_chat_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_13__["AddGroupComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _components_chat_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_14__["NewChatComponent"],
                    _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"]
                ],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_10__["AppMaterialModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot({
                        maxOpened: 1,
                        preventDuplicates: true
                    })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"], [_shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_16__["GetErrorsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__["Dir"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatSuffix"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatRipple"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__["MatSort"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__["MatSortHeader"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginator"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkTable"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkCellOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkHeaderCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkFooterCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkColumnDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkHeaderCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkFooterCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkHeaderRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkHeaderRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkFooterRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkFooterRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["DataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["HeaderRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["FooterRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkTextColumn"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__["CdkScrollable"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_25__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_25__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_25__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_25__["CdkDragHandle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_25__["CdkDragPreview"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_25__["CdkDragPlaceholder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["CdkConnectedOverlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["CdkOverlayOrigin"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__["CdkVirtualForOf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__["CdkVirtualScrollViewport"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__["CdkPortal"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__["CdkPortalOutlet"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__["TemplatePortalDirective"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__["PortalHostDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOptgroup"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__["MatCheckboxRequiredValidator"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__["CdkTextareaAutosize"], _angular_material_input__WEBPACK_IMPORTED_MODULE_31__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_31__["MatTextareaAutosize"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioButton"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatCalendar"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatCalendarBody"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatDatepicker"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatDatepickerContent"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatDatepickerToggleIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatMonthView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatMultiYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatCalendarHeader"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTabContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTextColumn"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleRequiredValidator"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_37__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_37__["MatAnchor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__["MatTooltip"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__["TooltipComponent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_39__["MatProgressBar"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_40__["MatProgressSpinner"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_40__["MatSpinner"], ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["Toast"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
    _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"],
    _components_chat_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_13__["AddGroupComponent"],
    _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
    _components_chat_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_14__["NewChatComponent"],
    _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"]], [_shared_pipe_filter__WEBPACK_IMPORTED_MODULE_41__["filterPipe"], _shared_pipe_safeurl__WEBPACK_IMPORTED_MODULE_42__["SafeUrlPipe"], _shared_pipe_formatTime__WEBPACK_IMPORTED_MODULE_43__["FormatTimePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/components/chat/add-group/add-group.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/chat/add-group/add-group.component.ts ***!
  \******************************************************************/
/*! exports provided: AddGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupComponent", function() { return AddGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/FormsHandler/FormsHandler */ "./src/app/shared/FormsHandler/FormsHandler.ts");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/observable/fromEvent */ "./node_modules/rxjs/internal/observable/fromEvent.js");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators/mergeMap */ "./node_modules/rxjs/internal/operators/mergeMap.js");
/* harmony import */ var rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/pubsub.service */ "./src/app/shared/services/pubsub.service.ts");
/* harmony import */ var src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/FormsHandler/get-errors.component */ "./src/app/shared/FormsHandler/get-errors.component.ts");


















const _c0 = ["searchInput"];
function AddGroupComponent_ng_container_18_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddGroupComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddGroupComponent_ng_container_18_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r188); const user_r185 = ctx.$implicit; const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r187.selectContact(user_r185); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddGroupComponent_ng_container_18_div_6_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const user_r185 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r185.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r185["selected"]);
} }
function AddGroupComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create a group chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddGroupComponent_div_19_Template_img_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190); const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r189.closemodel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddGroupComponent_div_19_Template_form_submit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190); const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r191.addGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name your group chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "form-errors", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddGroupComponent_div_19_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190); const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r192.addGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " DONE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r182.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r182.form.get("group_title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r182.loading);
} }
function AddGroupComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create a group chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddGroupComponent_ng_template_20_Template_img_click_5_listener() { const modal_r193 = ctx.$implicit; return modal_r193.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddGroupComponent_ng_template_20_Template_form_submit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r196); const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r195.addGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name your group chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "form-errors", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddGroupComponent_ng_template_20_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r196); const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r197.addGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " DONE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r184.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r184.form.get("group_title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r184.loading);
} }
class AddGroupComponent {
    constructor(pubsubService, svc, toastr, _fb, changeDetector) {
        this.pubsubService = pubsubService;
        this.svc = svc;
        this.toastr = toastr;
        this._fb = _fb;
        this.changeDetector = changeDetector;
        this.currentUserName = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].getAuthUsername();
        this.currentUserData = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].getUserData();
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loading = true;
        this.addGroupModel = false;
        this.AllUsers = [];
        this.activeChat = {
            chatHistory: []
        };
        this.message = '';
        this.group_title = '';
        this.groupnameError = '';
        this.selectedUsers = [];
        this.CopyAllUsers = [];
        this.setActiveChat = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.form = this._fb.group({
            'group_title': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]),
        }, { updateOn: 'change' });
        document.addEventListener("keyup", event => {
            if (event.code === 'Enter' && !this.loading) {
                this.addGroup();
            }
        });
    }
    ngAfterViewInit() {
        if (this.searchInput) {
            Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.searchInput.nativeElement, 'input')
                .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])((event) => event.target.value), Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(1000), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(value => {
                this.loading = true;
                if (!value) {
                    const data = {
                        sorting: "ORDER BY full_name ASC",
                        search_field: "full_name",
                        search_value: '',
                        condition: "contains",
                    };
                    return this.svc.post('AllUsers', data).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
                        if (!(res.users && res.users.length)) {
                            res.users = [];
                        }
                        this.CopyAllUsers = [...res.users];
                        return res;
                    }));
                }
                const temparaay = [...this.CopyAllUsers];
                const filteruser = temparaay.filter(user => {
                    let searchValue = value.toLowerCase();
                    if (user.full_name.toLowerCase().startsWith(searchValue)) {
                        return -1;
                    }
                });
                const returnData = {
                    users: filteruser
                };
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(returnData);
            }))
                .subscribe(res => {
                this.loading = false;
                if (!res.users || !res.users.length) {
                    this.toastr.error("Opps!", "No contacts found");
                    this.AllUsers = [];
                }
                else {
                    this.AllUsers = res.users;
                }
                this.setAlreadySelected();
            });
        }
    }
    setAlreadySelected() {
        this.selectedUsers.map(user => {
            const userIndex = this.AllUsers.find(alluser => alluser.user_id == user.user_id);
            if (userIndex)
                userIndex['selected'] = true;
        });
        this.changeDetector.detectChanges();
    }
    selectContact(contact) {
        this.groupnameError = '';
        contact['selected'] = !contact['selected'];
        this.changeDetector.detectChanges();
        this.selectedUsers.push(contact);
        this.selectedUsers = this.selectedUsers.filter(user => user.selected);
        this.selectedUsers = [...new Set(this.selectedUsers)];
        if (!this.selectedUsers.length) {
            this.groupnameError = 'Please Select Contacts';
        }
        else if (this.selectedUsers.length > 4) {
            this.groupnameError = 'Participants cannot be more than 4';
        }
        console.error('groupnameError', this.groupnameError);
        this.changeDetector.detectChanges();
    }
    openDialog(content) {
        this.groupnameError = '';
        this.selectedUsers = this.selectedUsers.filter(user => user.selected);
        this.changeDetector.detectChanges();
        if (!this.selectedUsers.length) {
            this.groupnameError = 'Please Select Contacts';
            return;
        }
        else if (this.selectedUsers.length > 4) {
            this.groupnameError = 'Participants cannot be more than 4';
            return;
        }
        if (this.selectedUsers.length == 1) {
            const useridArray = this.selectedUsers.map(user => user.user_id);
            let data = {
                participants: useridArray,
                auto_created: useridArray.length > 1 ? 0 : 1,
                group_title: "One to One chat",
            };
            this.svc.post('CreateGroup', data).subscribe(v => {
                this.changeDetector.detectChanges();
                if (v && v.status == 200) {
                    this.groupnameError = '';
                    this.setActiveChat.emit(v.group);
                    this.form.reset();
                }
                this.selectedUsers = [];
                this.changeDetector.detectChanges();
                this.loading = false;
                this.changeEvent.emit("THREAD");
            });
        }
        else {
            this.addGroupModel = true;
        }
    }
    addGroup() {
        src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_2__["default"].validateForm(this.form);
        const useridArray = this.selectedUsers.map(user => user.user_id);
        console.log("userIdArray", useridArray);
        if (this.form.invalid || !useridArray.length || this.loading)
            return;
        if (useridArray.length > 5) {
            this.toastr.error('OPPS!', 'participants Can not be more than 5!');
            return;
        }
        this.loading = true;
        this.changeDetector.detectChanges();
        let data = {
            participants: useridArray,
            auto_created: useridArray.length > 1 ? 0 : 1
        };
        data = Object.assign(Object.assign({}, data), this.form.value);
        this.svc.post('CreateGroup', data).subscribe(v => {
            this.changeDetector.detectChanges();
            if (v && v.status == 200) {
                this.groupnameError = '';
                this.setActiveChat.emit(v.group);
                this.toastr.success('Success!', 'The group has been created!');
                this.closemodel();
                this.form.reset();
            }
            this.selectedUsers = [];
            this.changeDetector.detectChanges();
            this.loading = false;
        });
    }
    closemodel() {
        this.selectedUsers = [];
        this.addGroupModel = false;
        this.AllUsers.forEach(element => element['selected'] = false);
        this.changeEvent.emit("THREAD");
        this.changeDetector.detectChanges();
    }
    backScreen() {
        this.changeEvent.emit("CHAT");
    }
}
AddGroupComponent.ɵfac = function AddGroupComponent_Factory(t) { return new (t || AddGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_11__["PubsubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_12__["BaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AddGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddGroupComponent, selectors: [["add-group"]], viewQuery: function AddGroupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, outputs: { changeEvent: "changeEvent", setActiveChat: "setActiveChat" }, decls: 22, vars: 4, consts: [[1, "newChatContainer"], [1, "newChatHeader"], [1, "newChatLeft", "hand"], ["src", "./assets/images/arrow-left.png", 1, "arrowLeft", "hand", 3, "click"], [1, "newChatHeading"], [1, "newChatRight", "hand", 3, "click"], ["src", "./assets/images/checkmark.png", 1, "goodMark"], [1, "newChatSearchBox"], [1, "input-group"], [1, "input-group-prepend"], ["src", "./assets/images/search.png", 1, "seacrchIcon"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["searchInput", ""], [1, "newGrpChat"], [3, "ngClass"], [1, "newListContainer", "max-height"], [4, "ngFor", "ngForOf"], ["id", "myModal", "class", "modal", 4, "ngIf"], ["content", ""], [1, "contactListCard", "hand", 3, "click"], [1, "contactListCardLeft"], ["src", "./assets/images/user.png", 1, "ListCardIcon"], [1, "ListCardName", "text-capitalize", "pb-1"], ["class", "selectuser contactListCardRight", 4, "ngIf"], [1, "selectuser", "contactListCardRight"], ["src", "./assets/images/checkmark-circle.png", 1, "ListCardButton"], ["id", "myModal", 1, "modal"], [1, "createChatPopup"], [1, "chatPopupContent", "groupPopup"], [1, "modalHeader"], [1, "modalHeading"], ["src", "./assets/images/cross.png", 1, "modalCross", "hand", 3, "click"], [1, "modalContent"], [1, "w-100", 3, "formGroup", "submit"], [1, "modalContentHeading"], ["type", "text", "placeholder", "ex: Deeper team", "formControlName", "group_title", 1, "form-control"], [3, "control"], ["type", "submit", 1, "btn", "doneButton", "mt-3", 3, "disabled", "click"], [1, "chatPopupContent"]], template: function AddGroupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddGroupComponent_Template_img_click_3_listener() { return ctx.backScreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create Group Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddGroupComponent_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); const _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return ctx.openDialog(_r183); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddGroupComponent_ng_container_18_Template, 7, 2, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddGroupComponent_div_19_Template, 15, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AddGroupComponent_ng_template_20_Template, 14, 3, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.groupnameError ? "text-danger" : "cntct");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.groupnameError ? ctx.groupnameError : "Select Contacts", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.AllUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addGroupModel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_15__["GetErrorsComponent"]], styles: [".roomNameText[_ngcontent-%COMP%] {\n  font-family: manrope-semibold;\n  font-size: 34px;\n  line-height: 38px;\n  letter-spacing: -0.12px;\n  color: #31394d;\n}\n\n.chatbtn[_ngcontent-%COMP%] {\n  border-right: 1px solid #ebedf4;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #b0d7dd !important;\n  border: 1px solid #2196f3;\n}\n\n.selectuser[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  min-width: 30px;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2FkZC1ncm91cC9DOlxcVXNlcnNcXFN1bW1lbiBaYWhpZFxcRGVza3RvcFxcY2FsbCB2ZG90b2sgYW5ndWxhclxcY29tYmluZSBhcHBcXEpTLXdlYmFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2hhdFxcYWRkLWdyb3VwXFxhZGQtZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9hZGQtZ3JvdXAvYWRkLWdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQUNFLCtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2FkZC1ncm91cC9hZGQtZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vbU5hbWVUZXh0IHtcclxuICBmb250LWZhbWlseTogbWFucm9wZS1zZW1pYm9sZDtcclxuICBmb250LXNpemU6IDM0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XHJcbiAgY29sb3I6ICMzMTM5NGQ7XHJcbn1cclxuLmNoYXRidG4ge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmVkZjQ7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMGQ3ZGQgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjE5NmYzO1xyXG59XHJcblxyXG4uc2VsZWN0dXNlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbiIsIi5yb29tTmFtZVRleHQge1xuICBmb250LWZhbWlseTogbWFucm9wZS1zZW1pYm9sZDtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XG4gIGNvbG9yOiAjMzEzOTRkO1xufVxuXG4uY2hhdGJ0biB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmVkZjQ7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBkN2RkICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2ZjM7XG59XG5cbi5zZWxlY3R1c2VyIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'add-group',
                templateUrl: './add-group.component.html',
                styleUrls: ['./add-group.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_11__["PubsubService"] }, { type: src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_12__["BaseService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { changeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchInput']
        }], setActiveChat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/observable/fromEvent */ "./node_modules/rxjs/internal/observable/fromEvent.js");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helpers/helpersFunctions */ "./src/app/shared/helpers/helpersFunctions.ts");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/FormsHandler/FormsHandler */ "./src/app/shared/FormsHandler/FormsHandler.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/pubsub.service */ "./src/app/shared/services/pubsub.service.ts");
/* harmony import */ var src_app_shared_services_vdk_one2one_call_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/vdk-one2one-call.service */ "./src/app/shared/services/vdk-one2one-call.service.ts");
/* harmony import */ var src_app_shared_services_vdk_m2m_call_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/vdk-m2m-call.service */ "./src/app/shared/services/vdk-m2m-call.service.ts");
/* harmony import */ var src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");



















const _c0 = ["noCall"];
const _c1 = ["chatDuringCall"];
const _c2 = ["incommingAudioCall"];
const _c3 = ["outgoingAudioCall"];
const _c4 = ["AudioCallInProgress"];
const _c5 = ["incommingVideoCall"];
const _c6 = ["outgoingVideoCall"];
const _c7 = ["VideoCallInProgress"];
const _c8 = ["groupIncommingAudioCall"];
const _c9 = ["groupOutgoingAudioCall"];
const _c10 = ["groupOngoingAudioCall"];
const _c11 = ["groupIncommingVideoCall"];
const _c12 = ["groupVideoCall"];
const _c13 = ["messageInputElement"];
function ChatComponent_ng_container_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Available ChatRoom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tap and hold on any message to star it, so you can easily find it later.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatComponent_ng_container_5_ng_container_9_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r43.unReadCount, "");
} }
function ChatComponent_ng_container_5_ng_container_9_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r43 == null ? null : group_r43.userTypingContent);
} }
function ChatComponent_ng_container_5_ng_container_9_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", group_r43.unReadCount ? "misreadMsg" : "readMsg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r46.getLastMessage(group_r43), " ");
} }
function ChatComponent_ng_container_5_ng_container_9_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", group_r43.Online ? "cardOnlineStatus" : "cardOfflineStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r43.Online ? "Online" : "Offline", " ");
} }
function ChatComponent_ng_container_5_ng_container_9_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r43.onlineParticipants + "/" + group_r43.TotalParticipants, " Online ");
} }
function ChatComponent_ng_container_5_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_container_5_ng_container_9_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const group_r43 = ctx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r54.setActiveChat(group_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatComponent_ng_container_5_ng_container_9_span_6_Template, 2, 1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatComponent_ng_container_5_ng_container_9_p_7_Template, 2, 1, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatComponent_ng_container_5_ng_container_9_p_8_Template, 2, 2, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_container_5_ng_container_9_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const group_r43 = ctx.$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r56.openModal(group_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "EDIT GROUP NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_container_5_ng_container_9_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const group_r43 = ctx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r57.deleteGroup(group_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ChatComponent_ng_container_5_ng_container_9_p_17_Template, 2, 2, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ChatComponent_ng_container_5_ng_container_9_p_18_Template, 2, 1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const group_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r43.chatTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", group_r43.unReadCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", group_r43.userTyping);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !group_r43.userTyping);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", group_r43.auto_created);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !group_r43.auto_created);
} }
function ChatComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CHATROOMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_container_5_Template_h4_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.newChat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatComponent_ng_container_5_div_6_Template, 5, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatComponent_ng_container_5_ng_container_9_Template, 19, 6, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.AllGroups.length && !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.AllGroups);
} }
function ChatComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "add-group", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setActiveChat", function ChatComponent_ng_container_6_Template_add_group_setActiveChat_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.setchat($event); })("changeEvent", function ChatComponent_ng_container_6_Template_add_group_changeEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.changeSidebar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ChatComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "new-chat", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setActiveChat", function ChatComponent_ng_container_7_Template_new_chat_setActiveChat_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.setchat($event); })("changeEvent", function ChatComponent_ng_container_7_Template_new_chat_changeEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.changeSidebar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ChatComponent_img_19_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_img_19_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.backScreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.activeChat.chatTitle, " ");
} }
function ChatComponent_ng_container_24_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r68 == null ? null : group_r68.userTypingContent);
} }
function ChatComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_ng_container_24_span_1_Template, 2, 1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const group_r68 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", group_r68.userTyping && group_r68.chatTitle == ctx_r5.activeChat.chatTitle);
} }
function ChatComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.startAudioCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_25_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.startVideoCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatComponent_div_26_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 95);
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r74.selectedTemplate);
} }
function ChatComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "video", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "video", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "source", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatComponent_div_26_ng_container_8_Template, 1, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.calling.templateName == "noCall" ? "messagesBox" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.calling.templateName == "noCall" ? "" : "callContainer oncall");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r7.isShowRemoteVideo())("ngClass", ctx_r7.isShowRemoteVideo() ? "IncommingVideo VideoCallBlock" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r7.isHideLocalVideo());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isShowOne2oneCall());
} }
function ChatComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 95);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.selectedTemplate);
} }
function ChatComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 95);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r37);
} }
function ChatComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_container_31_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.removeAttachment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.fileToSend.name);
} }
function ChatComponent_input_32_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 100, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChatComponent_input_32_Template_input_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.typingmessage($event); })("ngModelChange", function ChatComponent_input_32_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.message = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.message);
} }
function ChatComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_49_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.closeImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r13.popupimagesrc), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_50_Template_img_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ChatComponent_div_50_Template_form_submit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.editGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name your group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "form-errors", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_50_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.editGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " DONE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r14.groupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r14.groupForm.get("group_title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r14.loading);
} }
function ChatComponent_ng_template_51_ng_container_0_ng_container_1_h4_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r90.messageBy);
} }
function ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r90.content);
} }
function ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_5_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 129);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
} }
function ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_5_mat_spinner_1_Template, 1, 1, "mat-spinner", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_5_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const chat_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r99.openImage(chat_r90.content); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !chat_r90.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, chat_r90.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_6_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 129);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
} }
function ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const chat_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r104.checkFileType(chat_r90.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, chat_r90.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_6_mat_spinner_1_Template, 1, 1, "mat-spinner", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_6_ng_container_2_Template, 5, 4, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !chat_r90.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r90.content);
} }
function ChatComponent_ng_template_51_ng_container_0_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Read ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ChatComponent_ng_template_51_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_ng_template_51_ng_container_0_ng_container_1_h4_2_Template, 2, 1, "h4", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_4_Template, 3, 1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_5_Template, 4, 4, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_6_Template, 3, 2, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatComponent_ng_template_51_ng_container_0_ng_container_1_ng_container_8_Template, 3, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const chat_r90 = ctx.$implicit;
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", chat_r90.from == ctx_r89.currentUserName ? "senderChatContainer" : "receiverChatContainer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r90.from != ctx_r89.currentUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r90.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r90.type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r90.type != "text" && chat_r90.type != "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r90.readCount && chat_r90.from == ctx_r89.currentUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 7, chat_r90.date, "shortTime"), "");
} }
function ChatComponent_ng_template_51_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_ng_template_51_ng_container_0_ng_container_1_Template, 12, 10, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r87.activeChat["chatHistory"]);
} }
function ChatComponent_ng_template_51_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No Conversation Yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Tap and hold on any message to star it, so you can easily find it later. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_51_div_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r107.newChat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " NEW CHAT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_51_div_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r109.getAllGroups(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " REFRESH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatComponent_ng_template_51_ng_container_0_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_ng_template_51_div_1_Template, 16, 0, "div", 116);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.activeChat.chatTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.activeChat.chatTitle && !ctx_r16.loading);
} }
function ChatComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Incoming Call");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "audio", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_53_Template_img_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.stopCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_53_Template_img_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r112.acceptcall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.calling["callerName"]);
} }
function ChatComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Calling");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_55_Template_img_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r113.stopCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_55_Template_img_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r115.changeSettings("isOnInProgressMicrophone"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.calling["callerName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/images/microphone-", ctx_r20.settings.isOnInProgressMicrophone ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "formatTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_57_Template_img_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r116.stopCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_57_Template_img_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r118.changeSettings("isOnInProgressMicrophone"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r22.callTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.calling["callerName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/images/microphone-", ctx_r22.settings.isOnInProgressMicrophone ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "audio", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Incoming Call");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_59_Template_img_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r119.stopCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_59_Template_img_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r121.acceptcall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.calling["callerName"]);
} }
function ChatComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Calling ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_61_Template_img_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r122.changeSettings("isOnInProgressCamara"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_61_Template_img_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r124.stopCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_61_Template_img_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r125.changeSettings("isOnInProgressMicrophone"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.calling["callerName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/images/video-call-", ctx_r26.settings.isOnInProgressCamara ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/images/microphone-", ctx_r26.settings.isOnInProgressMicrophone ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "formatTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_63_Template_img_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r126.changeSettings("isOnInProgressCamara"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_63_Template_img_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r128.stopCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_63_Template_img_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r129.changeSettings("isOnInProgressMicrophone"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_63_Template_img_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r130.setChatDuringCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r28.callTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.calling["callerName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/images/video-call-", ctx_r28.settings.isOnInProgressCamara ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/images/microphone-", ctx_r28.settings.isOnInProgressMicrophone ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "audio", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Incomming Call From");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_65_Template_img_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r131.acceptcall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_65_Template_img_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r133.stopCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_65_Template_img_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r134.changeSettings("isOnInProgressMicrophone"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r30.calling.callerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/images/microphone-", ctx_r30.settings.isOnInProgressMicrophone ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Calling");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_67_Template_img_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r135.stopCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_67_Template_img_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136); const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r137.changeSettings("isOnInProgressMicrophone"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r32.calling.callerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/images/microphone-", ctx_r32.settings.isOnInProgressMicrophone ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_ng_template_69_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "audio", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " /> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r139 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r139.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", user_r139.ref_id);
} }
function ChatComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "formatTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatComponent_ng_template_69_div_6_Template, 7, 2, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "audio", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " /> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_69_Template_img_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r141); const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r140.stopCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_69_Template_img_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r141); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r142.changeSettings("isOnInProgressMicrophone"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "img", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_69_Template_img_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r141); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r143.setChatDuringCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r34.callTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r34.calling.participant);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r34.currentUserData.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/images/microphone-", ctx_r34.settings.isOnInProgressMicrophone ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "audio", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Incomming Call From");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_71_Template_img_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r144.acceptcall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_71_Template_img_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r146.stopCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_71_Template_img_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145); const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r147.changeSettings("isOnInProgressMicrophone"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r36.calling.callerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/images/microphone-", ctx_r36.settings.isOnInProgressMicrophone ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_ng_template_73_ng_container_1_ng_container_1_h4_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r151.messageBy);
} }
function ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r151.content);
} }
function ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_5_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 129);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
} }
function ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_5_mat_spinner_1_Template, 1, 1, "mat-spinner", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_5_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r162); const chat_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r160.openImage(chat_r151.content); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !chat_r151.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, chat_r151.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_6_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 129);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
} }
function ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const chat_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r165.checkFileType(chat_r151.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, chat_r151.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_6_mat_spinner_1_Template, 1, 1, "mat-spinner", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_6_ng_container_2_Template, 5, 4, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !chat_r151.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r151.content);
} }
function ChatComponent_ng_template_73_ng_container_1_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Read ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ChatComponent_ng_template_73_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_ng_template_73_ng_container_1_ng_container_1_h4_2_Template, 2, 1, "h4", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_4_Template, 3, 1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_5_Template, 4, 4, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_6_Template, 3, 2, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatComponent_ng_template_73_ng_container_1_ng_container_1_ng_container_8_Template, 3, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const chat_r151 = ctx.$implicit;
    const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", chat_r151.from == ctx_r150.currentUserName ? "senderChatContainer" : "receiverChatContainer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r151.from != ctx_r150.currentUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r151.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r151.type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r151.type != "text" && chat_r151.type != "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r151.readCount && chat_r151.from == ctx_r150.currentUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 7, chat_r151.date, "shortTime"), "");
} }
function ChatComponent_ng_template_73_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_ng_template_73_ng_container_1_ng_container_1_Template, 12, 10, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r148.activeChat["chatHistory"]);
} }
function ChatComponent_ng_template_73_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No Conversation Yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Tap and hold on any message to star it, so you can easily find it later. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_73_div_2_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r169); const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r168.newChat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " NEW CHAT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_73_div_2_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r169); const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r170.getAllGroups(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " REFRESH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_ng_template_73_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_ng_template_73_div_2_Template, 16, 0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r38.activeChat.chatTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r38.activeChat.chatTitle && !ctx_r38.loading);
} }
function ChatComponent_ng_template_75_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Calling");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r171.calling.callerName);
} }
function ChatComponent_ng_template_75_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "video", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r173 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", user_r173.ref_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r173.full_name);
} }
function ChatComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    const _r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "formatTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatComponent_ng_template_75_div_6_Template, 5, 1, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatComponent_ng_template_75_div_7_Template, 8, 2, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "video", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "source", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_75_Template_img_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r175); const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r174.changeSettings("isOnInProgressCamara"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_75_Template_img_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r175); const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r176.stopCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_75_Template_img_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r175); const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r177.changeSettings("isOnInProgressMicrophone"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "img", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_template_75_Template_img_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r175); const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r178.setChatDuringCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, ctx_r40.callTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r40.groupOutgoingVideoCall ? "noCallBackground" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.groupOutgoingVideoCall);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r40.calling.participant);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r40.groupOutgoingVideoCall ? "noCallBackground" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r40.groupOutgoingVideoCall ? "groupVideoCallWrapper_noCall " : "groupVideoCallWrapper_Call");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r40.currentUserData.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/images/video-call-", ctx_r40.settings.isOnInProgressCamara ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/images/microphone-", ctx_r40.settings.isOnInProgressMicrophone ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ChatComponent {
    constructor(pubsubService, vdkOne2OneCallSVC, vdkM2MCallSVC, svc, router, elRef, dialog, toastr, changeDetector, _fb) {
        this.pubsubService = pubsubService;
        this.vdkOne2OneCallSVC = vdkOne2OneCallSVC;
        this.vdkM2MCallSVC = vdkM2MCallSVC;
        this.svc = svc;
        this.router = router;
        this.elRef = elRef;
        this.dialog = dialog;
        this.toastr = toastr;
        this.changeDetector = changeDetector;
        this._fb = _fb;
        this.ongoingCall = false;
        this.editGroupModel = false;
        this.loading = true;
        this.AllGroups = [];
        this.AllUsers = [];
        this.CopyAllUsers = [];
        this.activeChat = {
            chatHistory: []
        };
        this.message = '';
        this.currentUserName = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername();
        this.currentUserData = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getUserData();
        this.threadType = 'THREAD';
        this.fileToSend = null;
        this.isActiveThread = false;
        this.popupimagesrc = '';
        this.screen = 'CHAT';
        this.sdkconnected = false;
        this.setToActive = null;
        this.callTime = 0;
        this.groupOutgoingVideoCall = false;
        this.calling = {
            participant: [],
            call_type: 'video',
            templateName: 'noCall',
            callerName: '',
            from: "",
            session: "",
        };
        this.settings = {
            isOnInProgressCamara: true,
            isOnInProgressMicrophone: true
        };
        this.groupForm = this._fb.group({
            'group_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            'group_title': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(100)]),
        }, { updateOn: 'change' });
        this.pubsubService.initConfigure();
        this.vdkOne2OneCallSVC.initConfigure();
        // this.vdkM2MCallSVC.initConfigure();
    }
    get selectedTemplate() {
        const templateList = {
            noCall: this.noCall,
            incommingAudioCall: this.incommingAudioCall,
            outgoingAudioCall: this.outgoingAudioCall,
            AudioCallInProgress: this.AudioCallInProgress,
            incommingVideoCall: this.incommingVideoCall,
            outgoingVideoCall: this.outgoingVideoCall,
            VideoCallInProgress: this.VideoCallInProgress,
            groupIncommingAudioCall: this.groupIncommingAudioCall,
            groupOutgoingAudioCall: this.groupOutgoingAudioCall,
            groupOngoingAudioCall: this.groupOngoingAudioCall,
            groupIncommingVideoCall: this.groupIncommingVideoCall,
            groupVideoCall: this.groupVideoCall
        };
        return templateList[this.calling.templateName];
    }
    ngOnInit() {
        this.pubsubService.Client.on("connect", response => {
            console.error("connect", response);
            this.sdkconnected = true;
            if (!this.AllGroups.length) {
                this.getAllGroups();
            }
        });
        this.pubsubService.Client.on("disconnect", (response) => {
            console.log("disconnect", response);
            this.sdkconnected = false;
        });
        this.vdkOne2OneCallSVC.Client.on("register", response => {
            console.error("register response", response);
        });
        this.vdkOne2OneCallSVC.Client.on("connected", response => {
            this.sdkconnected = true;
            console.error("connected response", response);
        });
        this.vdkOne2OneCallSVC.Client.on("call", response => {
            console.error("call response", response);
            console.log("ongoing call", this.ongoingCall);
            switch (response.type) {
                case "CALL_RECEIVED":
                    if (this.ongoingCall) {
                        this.vdkOne2OneCallSVC.rejectCall(response.from, false);
                        return;
                    }
                    this.calling.session = response.session;
                    this.calling.from = response.from;
                    this.changeDetector.detectChanges();
                    const full_name = this.findUserName(response.from);
                    this.calling.callerName = full_name;
                    this.calling.templateName = response.call_type == 'video' ? 'incommingVideoCall' : 'incommingAudioCall';
                    this.calling.call_type = response.call_type;
                    this.changeDetector.detectChanges();
                    this.screen = 'MAIN';
                    break;
                case "CALL_ENDED":
                    this.ongoingCall = false;
                    this.resetCall();
                    break;
                case "MISSED_CALL":
                    this.resetCall();
                    this.toastr.error('You have Missed Call', 'Opps!');
                    break;
                case "CALL_REJECTED":
                    this.ongoingCall = false;
                    this.resetCall();
                    this.toastr.error('User is busy', "Opps!");
                    break;
                case "CALL_ACCEPTED":
                    if (response.to) {
                        this.changeDetector.detectChanges();
                        this.calling.templateName = this.calling.call_type == 'video' ? 'VideoCallInProgress' : 'AudioCallInProgress';
                        this.startWatch();
                        this.changeDetector.detectChanges();
                    }
                    break;
                case "CALL_STATUS":
                    const displaystyle = response.video_status ? 'block' : 'none';
                    const callerHolderstyle = response.video_status ? 'none' : 'block';
                    if (document.getElementById('remoteVideo'))
                        document.getElementById('remoteVideo').style.display = displaystyle;
                    if (document.getElementById('callerHolder'))
                        document.getElementById('callerHolder').style.display = callerHolderstyle;
                    break;
            }
        });
        // this.vdkM2MCallSVC.Client.on("connected", responses => {
        //   console.error("m2m connected response", response);
        // });
        this.vdkOne2OneCallSVC.Client.on("groupCall", response => {
            console.error("groupCall response", response);
            switch (response.type) {
                case "CALL_RECEIVED":
                    this.screen = 'MAIN';
                    this.calling.callerName = this.findUserName(response.from);
                    this.calling.templateName = response.call_type == 'video' ? 'groupIncommingVideoCall' : 'groupIncommingAudioCall';
                    this.calling.call_type = response.call_type;
                    this.changeDetector.detectChanges();
                    break;
                case "NEW_PARTICIPANT":
                    this.calling.templateName = this.calling.call_type == 'video' ? 'groupVideoCall' : 'groupOngoingAudioCall';
                    this.groupOutgoingVideoCall = false;
                    this.addParticipant(response);
                    break;
                case "PARTICIPANT_LEFT":
                    document.getElementById("sendInputContainer").style.display = 'flex';
                    document.getElementById('roomNameText').style.display = "block";
                    document.getElementById('appendChatDuringCall').style.display = "none";
                    document.getElementById('returnedtocall').style.display = "none";
                    this.removeParticipant(response);
                    break;
                case "CALL_STARTED":
                    this.startWatch();
                    break;
                case "PARTICIPANT_STATUS":
                    const displaystyle = response.video_status ? 'block' : 'none';
                    if (document.getElementById(response.participant))
                        document.getElementById(response.participant).style.display = displaystyle;
                    break;
            }
        });
    }
    chatDCall() {
        return true;
    }
    ngAfterViewInit() {
        document.addEventListener("keyup", event => {
            if (event.code === 'Enter') {
                this.sendTextMessage();
            }
        });
        this.getUsers();
        this.pubsubService.Client.on("authentication_error", (res) => {
            console.log("authentication_error", res);
        });
        this.pubsubService.Client.on("offline", response => {
            console.log("offline", response);
            this.setOfflineStatus(response);
        });
        this.pubsubService.Client.on("online", (response) => {
            console.log("online", response);
            this.setOnlineStatus(response);
        });
        this.pubsubService.Client.on("message", response => {
            response = JSON.parse(JSON.stringify(response));
            console.trace("new message", response);
            if (response.type == 'text' || response.type == 'file' || response.type == 'image' || response.type == 'audio' || response.type == 'video') {
                this.scroll();
                const chatthread = this.findChatThread(response.to);
                const isActiveThread = chatthread.id == this.activeChat.id;
                chatthread['unReadCount'] = isActiveThread ? 0 : (chatthread['unReadCount'] || 0) + 1;
                response = this.messageBy(chatthread, response);
                response['isRead'] = isActiveThread;
                response['auto_created'] = chatthread['auto_created'];
                chatthread['lastMessage'] = response.content;
                chatthread['time'] = new Date(response.id);
                chatthread['type'] = response.type;
                this.pushMessage(chatthread, response);
                this.readSingleMessage(response, isActiveThread);
                setTimeout(() => {
                    this.AllGroups.sort((a, b) => {
                        return a.id == chatthread.id ? -1 : 1;
                    });
                }, 500);
                this.changeDetector.detectChanges();
            }
            else if (response.type == 'typing') {
                this.setUserTyping(response);
            }
            else if (response.receiptType == 3) {
                let chName = response.topic || response.to;
                if (response.to != undefined)
                    chName = response.to;
                const chatthread = this.findChatThread(chName);
                let message = Object(src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_5__["FindArrayObject"])(chatthread.chatHistory, 'id', response.messageId);
                if (message) {
                    message['readCount'] = (message['readCount'] || 0) + 1;
                }
                this.changeDetector.detectChanges();
            }
        });
        this.pubsubService.Client.on("subscribed", response => {
            console.log("subscribed", response);
            this.setOnlineStatusforSubscribe(response);
        });
        if (this.messageInputElement) {
            Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.messageInputElement.nativeElement, 'input')
                .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => event.target.value), Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(3000), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(data => {
                const sendMessage = {
                    status: 0,
                    size: 0,
                    type: "typing",
                    isGroupMessage: false,
                    from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername(),
                    content: '0',
                    id: new Date().getTime().toString(),
                    key: this.activeChat.channel_key,
                    to: this.activeChat.channel_name,
                    date: new Date().getTime(),
                };
                this.pubsubService.sendMessage(sendMessage);
            });
        }
    }
    getUsers() {
        const data = {
            sorting: "ORDER BY full_name ASC",
            search_field: "full_name",
            search_value: '',
            condition: "contains",
        };
        this.svc.post('AllUsers', data).subscribe(res => {
            this.loading = false;
            if (res.status == 200) {
                this.CopyAllUsers = [...res.users];
                this.AllUsers = res.users;
            }
        });
    }
    deleteGroup(group) {
        this.loading = true;
        const playload = {
            group_id: group.id
        };
        this.svc.post('DeleteGroup', playload).subscribe(v => {
            this.changeDetector.detectChanges();
            if (v && v.status == 200) {
                this.loading = false;
                this.getAllGroups();
                this.toastr.success('The group has been deleted!', 'Success!');
            }
            else {
                console.error(v.message);
                alert(v.message);
                this.changeDetector.detectChanges();
            }
        });
    }
    openModal(group) {
        if (group.auto_created) {
            alert('Can not change One to one group title');
            return;
        }
        group['group_id'] = group.id;
        this.groupForm.reset(group);
        this.editGroupModel = true;
        this.changeDetector.detectChanges();
    }
    editGroup() {
        src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_8__["default"].validateForm(this.groupForm);
        console.error("this.groupForm.", this.groupForm.invalid);
        if (this.groupForm.invalid || this.loading)
            return;
        const playload = this.groupForm.value;
        this.loading = true;
        this.svc.post('RenameGroup', playload).subscribe(v => {
            if (v && v.status == 200) {
                this.getAllGroups();
                this.editGroupModel = false;
                this.loading = false;
                this.toastr.success('The group has been updated!', 'Success!');
            }
        });
    }
    getAllGroups() {
        this.loading = true;
        this.svc.get('AllGroups').subscribe(v => {
            this.loading = false;
            if (v && v.status == 200) {
                this.AllGroups = v.groups.map(chat => {
                    if (chat['participants'].length) {
                        chat['participants'] = chat['participants'].map(r => {
                            r['username'] = r['username'] || r['full_name'];
                            return r;
                        });
                    }
                    chat['chatTitle'] = chat.auto_created ? chat['participants'][0]['full_name'] : chat.group_title;
                    chat['Online'] = false;
                    chat['key'] = chat.channel_key;
                    chat['channel'] = chat.channel_name;
                    chat['chatHistory'] = [];
                    chat['TotalParticipants'] = chat['participants'].length;
                    chat['onlineParticipants'] = 1;
                    chat['isSeen'] = true;
                    return chat;
                });
                console.error("this.activeChat.chatTitle", this.activeChat);
                if (!this.activeChat.chatTitle) {
                    this.activeChat = this.AllGroups.length ? this.AllGroups['0'] : {};
                }
                if (this.setToActive) {
                    const indexchat = this.AllGroups.find(group => group.id == this.setToActive);
                    this.activeChat = indexchat ? indexchat : this.AllGroups['0'];
                    this.setToActive = null;
                }
                this.isActiveThread = true;
                console.error("this.activeChat.chatTitle", this.activeChat);
                this.pubsubService.subscribeToChat(this.AllGroups);
            }
            setTimeout(() => {
                this.sortThread();
            }, 500);
            this.changeDetector.detectChanges();
        });
    }
    checkFileType(content) {
        let preview = content.includes('text/plain') ? ('./assets/images/txt.png') : content.includes('/pdf') ? ('./assets/images/pdf.png') : content.includes('/json') ? ('./assets/images/json.png') : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Icon-doc.svg/810px-Icon-doc.svg.png';
        if (content.includes('video/'))
            preview = './assets/images/video.png';
        if (content.includes('audio/'))
            preview = './assets/images/audio.png';
        return preview;
    }
    fileType(content) {
        return content.split(";")[0].split(":")[1];
    }
    findChatThread(channel) {
        return Object(src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_5__["FindArrayObject"])(this.AllGroups, 'channel_name', channel);
    }
    setActiveChat(group) {
        console.log("clicke");
        this.isActiveThread = group.id == this.activeChat.id;
        if (!this.isActiveThread)
            this.message = '';
        this.activeChat = group;
        group['unReadCount'] = 0;
        this.screen = 'MSG';
        this.scroll();
        group.chatHistory = group.chatHistory || [];
        this.readsendMessage(group.chatHistory);
        this.changeDetector.detectChanges();
    }
    setChatDuringCall() {
        console.log("active chat", this.activeChat);
        document.getElementById("returnedtocall").style.display = 'flex';
        document.getElementById('messagesBox').style.display = 'none';
        document.getElementById('appendChatDuringCall').style.display = "block";
        let el = document.getElementById("sendInputContainer");
        el.removeAttribute('hidden');
        document.getElementById("sendInputContainer").style.display = 'flex';
        document.getElementById('roomNameText').style.display = "block";
    }
    returntoCall() {
        document.getElementById('appendChatDuringCall').style.display = "none";
        document.getElementById('returnedtocall').style.display = "none";
        document.getElementById('messagesBox').style.display = 'block';
        document.getElementById('roomNameText').style.display = "none";
        document.getElementById("sendInputContainer").style.display = 'none';
    }
    setchat(chat) {
        this.setActiveChat(chat);
        this.setToActive = chat.id;
        if (chat.clicked_item == "audio") {
            this.startone2oneAudioCall();
        }
        if (chat.clicked_item == "video") {
            this.startOne2OneVideoCall();
        }
    }
    readSingleMessage(response, isActiveThread) {
        if (response.from == this.currentUserName || !isActiveThread)
            return;
        const chatobj = {
            messageId: response.id,
            receiptType: 3,
            from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername(),
            key: response.key,
            to: response.to,
            date: new Date().getTime()
        };
        this.pubsubService.readSingleMessage(chatobj);
    }
    readsendMessage(chatHistory) {
        const unreadchatHistory = chatHistory.filter(chat => !chat.isRead).map(chat => {
            const chatobj = {
                messageId: chat.id,
                receiptType: 3,
                from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername(),
                key: chat.key,
                to: chat.to,
                date: new Date().getTime()
            };
            return chatobj;
        });
        if (unreadchatHistory.length)
            this.pubsubService.readMessage(unreadchatHistory);
        chatHistory = chatHistory.map(chat => {
            chat.isRead = true;
            return chat;
        });
    }
    handleFileInput(files) {
        this.fileToSend = files.item(0);
    }
    invalidSize() {
        return ((this.fileToSend.size / 1024) > 6144);
    }
    removeAttachment() {
        this.fileToSend = null;
    }
    getFileType(fileR) {
        let type = "file";
        const filetype = fileR.type;
        if (filetype.includes('image'))
            type = "image";
        else if (filetype.includes('audio'))
            type = "audio";
        else if (filetype.includes('video'))
            type = "video";
        return type;
    }
    sendTextMessage() {
        if ((!(/\S/.test(this.message))) && !this.fileToSend) {
            return;
        }
        else if (this.message.length > 400) {
            this.toastr.error("Message can not be more than 400 characters", "Opps!");
            return;
        }
        else if (this.fileToSend && this.invalidSize()) {
            this.toastr.error("The maximum size of file should be 6MBs.", "Opps!");
            this.fileToSend = null;
            return;
        }
        this.scroll();
        if (!this.message && !this.fileToSend)
            return;
        if (this.fileToSend) {
            var option = {
                id: new Date().getTime().toString(),
                from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername(),
                topic: this.activeChat.channel_name,
                to: this.activeChat.channel_name,
                key: this.activeChat.channel_key,
                type: this.getFileType(this.fileToSend),
                date: new Date().getTime(),
            };
            console.log("file to send", this.fileToSend);
            const toBase64 = file => new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });
            let base64 = toBase64(this.fileToSend);
            console.log("base64444", base64);
            this.pubsubService.Client.SendFile(this.fileToSend, option);
            this.fileToSend = null;
        }
        if (!this.message)
            return;
        const sendMessage = {
            status: 1,
            size: 0,
            type: "text",
            isGroupMessage: false,
            from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername(),
            content: this.message,
            id: new Date().getTime().toString(),
            date: new Date().getTime(),
            key: this.activeChat.channel_key,
            to: this.activeChat.channel_name
        };
        this.pubsubService.sendMessage(sendMessage);
        this.message = '';
        this.scroll();
        if (!(this.AllGroups.length && this.activeChat.id == this.AllGroups[0].id)) {
            this.sortThread();
        }
    }
    typingmessage($event) {
        if ($event.key === "Enter") {
            this.sendTextMessage();
            return;
        }
        const sendMessage = {
            status: 0,
            size: 0,
            type: "typing",
            isGroupMessage: false,
            from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername(),
            content: "1",
            id: new Date().getTime().toString(),
            key: this.activeChat.channel_key,
            to: this.activeChat.channel_name,
            date: new Date().getTime(),
        };
        this.pubsubService.sendMessage(sendMessage);
    }
    setOnlineStatusforSubscribe(response) {
        const indexchat = this.findChatThread(response.channel);
        if (indexchat) {
            let onlineNumbers = [...new Set(response.who.map(n => n.username))];
            indexchat['onlineParticipants'] = onlineNumbers && onlineNumbers.length || 1;
            if (indexchat && indexchat.auto_created)
                indexchat['Online'] = onlineNumbers.length > 1;
        }
        this.changeDetector.detectChanges();
    }
    setOnlineStatus(response) {
        let indexchat = this.findChatThread(response.channel);
        if (!indexchat)
            return;
        if (indexchat.auto_created)
            indexchat['Online'] = true;
        if (!indexchat.auto_created) {
            indexchat['onlineParticipants'] = indexchat['onlineParticipants'] < indexchat['TotalParticipants'] ? indexchat['onlineParticipants'] + 1 : indexchat['onlineParticipants'];
        }
        this.changeDetector.detectChanges();
    }
    setOfflineStatus(response) {
        const indexchat = this.findChatThread(response.channel);
        if (indexchat && indexchat.auto_created)
            indexchat['Online'] = false;
        if (!indexchat.auto_created) {
            indexchat['onlineParticipants'] = indexchat['onlineParticipants'] > 2 ? indexchat['onlineParticipants'] - 1 : 1;
        }
        this.changeDetector.detectChanges();
    }
    setUserTyping(response) {
        if (response.from == this.currentUserData.ref_id)
            return;
        let indexchat = Object(src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_5__["FindArrayObject"])(this.AllGroups, 'channel_name', response.to);
        let typinguser = indexchat["participants"].find(e => e.ref_id == response.from);
        if (response.content == '1') {
            indexchat['TypingUserList'] = (indexchat['TypingUserList'] || []);
            indexchat['TypingUserList'] = [...new Set([typinguser])];
        }
        else if (response.content == '0') {
            indexchat['TypingUserList'] = indexchat['TypingUserList'].filter(e => e.ref_id != response.from);
        }
        indexchat['userTyping'] = indexchat['TypingUserList'].length && response.content != '0';
        let nameList = indexchat['TypingUserList'].map(userObj => userObj.full_name);
        if (nameList.length == 1) {
            indexchat['userTypingContent'] = nameList + ' ' + 'is typing...';
        }
        else if (nameList.length == 2) {
            indexchat['userTypingContent'] = nameList.join() + ' ' + 'are typing...';
        }
        else if (nameList.length > 2) {
            indexchat['userTypingContent'] = nameList.filter((i, j) => j < 2).join() + ' ' + 'and other are typing...';
        }
        this.changeDetector.detectChanges();
    }
    setMultiUserTyping(response, typinguser, indexchat) {
        if (response.content == '1') {
            indexchat['TypingUserList'] = [...new Set(typinguser)];
        }
        else if (response.content == '0') {
            indexchat['TypingUserList'] = indexchat['TypingUserList'].filter(e => e.ref_id != response.from);
        }
        this.changeDetector.detectChanges();
    }
    scroll() {
        setTimeout(() => {
            this.elRef.nativeElement.querySelector('.messagesBox').scrollTop = this.elRef.nativeElement.querySelector('.messagesBox').scrollHeight;
        }, 500);
    }
    changeSidebar($event) {
        this.threadType = $event;
        if (this.threadType == 'THREAD') {
            this.getAllGroups();
        }
    }
    newChat() {
        this.threadType = 'CHAT';
        this.changeDetector.detectChanges();
    }
    logout() {
        this.pubsubService.Disconnect();
        src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].clearLocalStorge();
        this.router.navigate(['login']);
    }
    sortThread() {
        if (this.activeChat.id) {
            this.AllGroups.sort((a, b) => {
                return a.id == this.activeChat.id ? -1 : 1;
            });
        }
    }
    messageBy(chatthread, response) {
        if (this.isShowName(chatthread, response)) {
            const messageByObj = Object(src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_5__["FindArrayObject"])(chatthread.participants, 'ref_id', response.from);
            response['messageBy'] = messageByObj && messageByObj.full_name || '';
        }
        return response;
    }
    isShowName(chatthread, response) {
        if (chatthread['chatHistory'].length && response.from) {
            const previourmessage = chatthread['chatHistory'][chatthread['chatHistory'].length - 1];
            return previourmessage.from != response.from;
        }
        return true;
    }
    pushMessage(thread, response) {
        let newResponse = {};
        newResponse = JSON.parse(JSON.stringify(response));
        if (response.type == 'text' || !response.content) {
            thread['chatHistory'].push(newResponse);
        }
        else {
            var foundIndex = thread.chatHistory.findIndex(x => x.id == response.id);
            thread.chatHistory[foundIndex] = response;
        }
    }
    getLastMessage(group) {
        const isactivethread = group.id == this.activeChat.id;
        if (!isactivethread && group.unReadCount) {
            return "Misread messages";
        }
        else if (group.type != 'text') {
            return group.type;
        }
        return group.lastMessage;
    }
    openImage(imagesrc) {
        this.popupimagesrc = imagesrc;
        this.changeDetector.detectChanges();
    }
    closeImage() {
        this.popupimagesrc = null;
        this.changeDetector.detectChanges();
    }
    closeModal() {
        this.editGroupModel = false;
        this.changeDetector.detectChanges();
    }
    isHideThread() {
        return this.isMobile() ? this.screen != 'CHAT' : false;
    }
    isHideChatScreen() {
        return this.isMobile() ? this.screen != 'MSG' : false;
    }
    backScreen() {
        this.threadType = "THREAD";
        this.screen = "CHAT";
        this.changeDetector.detectChanges();
    }
    isMobile() {
        return window.innerWidth < 768;
    }
    findUserName(ref_id) {
        const user = Object(src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_5__["FindArrayObject"])(this.CopyAllUsers, 'ref_id', ref_id);
        return user ? user.full_name : '';
    }
    resetCall() {
        document.getElementById("sendInputContainer").style.display = 'flex';
        document.getElementById('roomNameText').style.display = "block";
        document.getElementById('appendChatDuringCall').style.display = "none";
        document.getElementById('returnedtocall').style.display = "none";
        this.settings = {
            isOnInProgressCamara: true,
            isOnInProgressMicrophone: true
        };
        this.calling = {
            participant: [],
            call_type: 'video',
            templateName: 'noCall',
            callerName: '',
            from: "",
            session: "",
        };
        this.callTime = 0;
        this.screen = 'LISTING';
        if (this.countDownTime) {
            this.countDownTime.unsubscribe();
        }
        if (document.getElementById('OutgoingVideo'))
            document.getElementById('OutgoingVideo').style.display = 'block';
        this.changeDetector.detectChanges();
        this.ongoingCall = false;
    }
    stopCall() {
        document.getElementById("sendInputContainer").style.display = 'flex';
        document.getElementById('roomNameText').style.display = "block";
        document.getElementById('appendChatDuringCall').style.display = "none";
        document.getElementById('returnedtocall').style.display = "none";
        this.ongoingCall = false;
        this.calling.templateName = 'noCall';
        this.vdkOne2OneCallSVC.endCall();
        this.vdkOne2OneCallSVC.leaveGroupCall();
        this.resetCall();
        this.changeDetector.detectChanges();
        console.error("stopCall");
    }
    inCall() {
        return this.calling.templateName != 'noCall';
    }
    startVideoCall() {
        this.resetCall();
        if (this.activeChat.auto_created) {
            this.startOne2OneVideoCall();
        }
        else {
            this.startM2MVideoCall();
        }
    }
    startOne2OneVideoCall() {
        if (this.inCall())
            return;
        this.calling.session = 'one_to_one';
        document.getElementById('OutgoingVideo').style.display = 'block';
        this.startWatch();
        this.screen = 'MAIN';
        this.ongoingCall = true;
        this.calling.templateName = 'outgoingVideoCall';
        // this.calling['callerName'] = this.activeChat.chatTitle;
        this.calling.callerName = this.activeChat.chatTitle ? this.activeChat.chatTitle : this.activeChat.group_title;
        this.changeDetector.detectChanges();
        const participantsList = this.activeChat.participants.filter(g => g.ref_id != this.currentUserName).map(g => g.ref_id);
        const params = {
            localVideo: document.getElementById("localVideo"),
            remoteVideo: document.getElementById("remoteVideo"),
            to: [...participantsList],
        };
        this.vdkOne2OneCallSVC.Call(params);
    }
    startM2MVideoCall() {
        if (this.inCall())
            return;
        const p = this.getChatParticipants();
        if (!p.length) {
            this.toastr.error('Please select someone to call!', 'Opps!');
            return;
        }
        this.ongoingCall = true;
        this.screen = 'MAIN';
        this.groupOutgoingVideoCall = true;
        this.calling.templateName = 'groupVideoCall';
        this.calling['callerName'] = this.activeChat.chatTitle;
        this.changeDetector.detectChanges();
        const params = {
            call_type: "video",
            localVideo: document.getElementById("localVideo"),
            to: [...p],
        };
        this.vdkOne2OneCallSVC.groupCall(params);
    }
    acceptcall() {
        console.error("acceptcall");
        if (this.calling.session == 'one_to_one') {
            console.error("acceptcall one_to_one");
            this.acceptOne2oneCall();
        }
        else {
            console.error("acceptcall acceptM2MCall");
            this.acceptM2MCall();
        }
    }
    acceptOne2oneCall() {
        this.vdkOne2OneCallSVC.acceptCall(document.getElementById("localVideo"), document.getElementById("remoteVideo"));
        this.changeDetector.detectChanges();
        this.calling.templateName = this.calling.call_type == 'video' ? 'VideoCallInProgress' : 'AudioCallInProgress';
        this.startWatch();
        this.ongoingCall = true;
        this.changeDetector.detectChanges();
    }
    acceptM2MCall() {
        if (this.isM2MProgressCall())
            return;
        this.ongoingCall = true;
        this.calling.templateName = this.calling.call_type == 'video' ? 'groupVideoCall' : 'groupOngoingAudioCall';
        this.changeDetector.detectChanges();
        const params = {
            localVideo: document.getElementById("localVideo"),
            call_type: this.calling.call_type
        };
        this.startWatch();
        this.changeDetector.detectChanges();
        this.groupOutgoingVideoCall = false;
        this.vdkOne2OneCallSVC.joinGroupCall(params);
        this.changeDetector.detectChanges();
    }
    startWatch() {
        console.trace();
        if (!this.callTime) {
            this.countDownTime = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(0, 1000).subscribe(() => ++this.callTime);
        }
    }
    startAudioCall() {
        if (this.activeChat.auto_created) {
            this.startone2oneAudioCall();
        }
        else {
            this.startm2mAudioCall();
        }
    }
    startone2oneAudioCall() {
        if (this.inCall())
            return;
        const participantsList = this.getChatParticipants();
        if (!participantsList.length) {
            this.toastr.error('Please select someone to call!', 'Opps!');
            return;
        }
        this.calling.session = 'one_to_one';
        this.calling.call_type = 'audio';
        this.ongoingCall = true;
        this.screen = 'MAIN';
        this.calling.templateName = 'outgoingAudioCall';
        this.calling.callerName = this.activeChat.chatTitle ? this.activeChat.chatTitle : this.activeChat.group_title;
        const params = {
            localVideo: document.getElementById("localVideo"),
            remoteVideo: document.getElementById("remoteVideo"),
            to: [...participantsList],
            data: { calleName: this.currentUserData.full_name }
        };
        this.vdkOne2OneCallSVC.audioCall(params);
    }
    startm2mAudioCall() {
        if (this.inCall())
            return;
        const participants = this.getChatParticipants();
        if (!participants.length) {
            this.toastr.error('Please select someone to call!', 'Opps!');
            return;
        }
        this.calling.call_type = 'audio';
        this.ongoingCall = true;
        this.screen = 'MAIN';
        this.calling.templateName = 'groupOutgoingAudioCall';
        this.calling['callerName'] = this.activeChat.chatTitle;
        const params = {
            call_type: "audio",
            localVideo: document.getElementById("localAudio"),
            to: [...participants],
        };
        this.vdkOne2OneCallSVC.groupCall(params);
    }
    changeSettings(filed) {
        if (this.calling.session == 'one_to_one') {
            this.changeOne2OneSettings(filed);
        }
        else {
            this.changeM2MSettings(filed);
        }
    }
    changeOne2OneSettings(filed) {
        this.settings[filed] = !this.settings[filed];
        switch (filed) {
            case 'isOnInProgressCamara':
                this.settings[filed] ? this.vdkOne2OneCallSVC.setCameraOn() : this.vdkOne2OneCallSVC.setCameraOff();
                const displaystyle = this.settings[filed] ? 'block' : 'none';
                if (document.getElementById('OutgoingVideo'))
                    document.getElementById('OutgoingVideo').style.display = displaystyle;
                break;
            case 'isOnInProgressMicrophone':
                this.settings[filed] ? this.vdkOne2OneCallSVC.setMicUnmute() : this.vdkOne2OneCallSVC.setMicMute();
                const enabled = this.settings[filed];
                const audiotrack = document.getElementById("localAudio");
                if (audiotrack && audiotrack.audioTracks) {
                    audiotrack.audioTracks[0].enabled = enabled;
                }
                break;
        }
    }
    changeM2MSettings(filed) {
        this.settings[filed] = !this.settings[filed];
        switch (filed) {
            case 'isOnInProgressCamara':
                this.settings[filed] ? this.vdkOne2OneCallSVC.setCameraOn() : this.vdkOne2OneCallSVC.setCameraOff();
                const displaystyle = this.settings[filed] ? 'block' : 'none';
                const displayNamestyle = this.settings[filed] ? 'none' : 'block';
                document.getElementById('localVideo').style.display = displaystyle;
                document.getElementById('localNameHolder').style.display = displayNamestyle;
                break;
            case 'isOnInProgressMicrophone':
                this.settings[filed] ? this.vdkOne2OneCallSVC.setMicUnmute() : this.vdkOne2OneCallSVC.setMicMute();
                const enabled = this.settings[filed];
                const audiotrack = document.getElementById("localAudio");
                if (audiotrack && audiotrack.audioTracks) {
                    audiotrack.audioTracks[0].enabled = enabled;
                }
                break;
        }
    }
    isShowRemoteVideo() {
        return this.calling.templateName != 'VideoCallInProgress' && this.calling.call_type != 'video';
    }
    isHideLocalVideo() {
        const ishide = !(this.calling.templateName == 'VideoCallInProgress' || this.calling.templateName == 'outgoingVideoCall');
        return ishide;
    }
    isShowOne2oneCall() {
        const one2onetemplateList = `noCall,incommingAudioCall,outgoingAudioCall,
    AudioCallInProgress,incommingVideoCall,outgoingVideoCall,VideoCallInProgress`;
        return one2onetemplateList.includes(this.calling.templateName);
    }
    isShowM2MCall() {
        const one2onetemplateList = `groupIncommingAudioCall,groupOutgoingAudioCall,groupOngoingAudioCall,
    groupIncommingVideoCall,groupVideoCall`;
        return one2onetemplateList.includes(this.calling.templateName);
    }
    isM2MProgressCall() {
        return this.calling.templateName == 'groupVideoCall' || this.calling.templateName == 'groupOngoingAudioCall';
    }
    addParticipant(response) {
        const user = this.AllUsers.find(user => user.ref_id == response.participant);
        this.calling.participant.push(user);
        this.changeDetector.detectChanges();
        setTimeout(() => {
            this.changeDetector.detectChanges();
            this.vdkOne2OneCallSVC.setParticipantVideo(response.participant, document.getElementById(response.participant));
            const user = this.findUserName(response.participant);
            const textmsg = user + ' ' + 'has joined';
            this.toastr.success(textmsg);
        });
        this.changeDetector.detectChanges();
    }
    removeParticipant(response) {
        //this.ongoingCall = false;
        const index = this.calling.participant.findIndex(user => user.ref_id == response.participant);
        if (index >= 0) {
            const user = this.findUserName(response.participant);
            if (user) {
                const textmsg = user + ' ' + 'has left';
                this.toastr.success(textmsg);
            }
            this.calling.participant.splice(index, 1);
            if (!this.calling.participant.length) {
                this.resetCall();
            }
        }
        this.changeDetector.detectChanges();
    }
    getChatParticipants() {
        let participants = [];
        if (this.activeChat && this.activeChat['participants'] && this.activeChat['participants'].length) {
            participants = this.activeChat['participants'].filter(g => g.ref_id != this.currentUserName).map(g => g.ref_id);
        }
        return participants;
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_10__["PubsubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_vdk_one2one_call_service__WEBPACK_IMPORTED_MODULE_11__["VdkOne2OneCallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_vdk_m2m_call_service__WEBPACK_IMPORTED_MODULE_12__["VdkM2MCallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_13__["BaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["chat"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c10, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c11, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c12, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c13, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.noCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chatDuringCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.incommingAudioCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.outgoingAudioCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.AudioCallInProgress = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.incommingVideoCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.outgoingVideoCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.VideoCallInProgress = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.groupIncommingAudioCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.groupOutgoingAudioCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.groupOngoingAudioCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.groupIncommingVideoCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.groupVideoCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messageInputElement = _t.first);
    } }, decls: 77, vars: 19, consts: [[1, "row", "dashboardContainer"], [1, "col-sm-4", "leftSide", 3, "hidden"], [1, "leftSideHeader"], ["src", "./assets/images/logo2.png", 1, "dashboardLogo"], [1, "leftSideListContainer"], [4, "ngIf"], [1, "leftSideFooter"], [1, "logoutContainer", 3, "click"], ["src", "./assets/images/log-out.png", 1, "logoutLogo"], [1, "logoutText"], [1, "ml-1", 3, "ngClass"], [1, "col-sm-8", "rightSide", 3, "hidden"], [1, "rightSideHeader", "alignBottom", "chatholder"], [1, "d-flex"], [2, "display", "flex", "flex-direction", "row", "align-items", "center"], [2, "display", "flex", "flex-direction", "column"], ["src", "./assets/images/arrow-left.png", "class", "arrowLeft hand", 3, "click", 4, "ngIf"], ["id", "roomNameText", "class", "roomNameText text-capitalize", 4, "ngIf"], ["id", "returnedtocall", 1, "btn", "btn-success", 2, "display", "none", "align-items", "center", "height", "30px", "margin", "auto", 3, "click"], [2, "margin", "0px", "padding", "0px", "border", "0"], [4, "ngFor", "ngForOf"], ["id", "messagesBox", "class", "messagesBox", 3, "ngClass", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], ["id", "sendInputContainer", 1, "sendInputContainer", 3, "hidden"], [1, "sendInputWrapper"], ["type", "text", "class", "form-control", "placeholder", "Type to reply..", 3, "ngModel", "keyup", "ngModelChange", 4, "ngIf"], [1, "sendInputButtonContainer", "dropup", 2, "border-right", "1px solid #ebedf4"], ["src", "./assets/images/attachment.png", "data-toggle", "dropdown", 1, "sendIcon", "dropdown-toggle"], [1, "attachmentpopup", "dropdown-menu", "dropdown-menu-right", "selectOptionContainer"], [1, "attachmentPopHeader", "mx-3"], [1, "attachmentHeading"], [1, "attachmentPopContent", 3, "click"], [1, "attachmentTool"], [1, "attachmentToolIcon"], ["src", "./assets/images/Document.png", 1, "attachmentItemIcon"], ["type", "file", "id", "fileinput", 1, "d-none", 3, "change"], ["fileuploader", ""], [1, "sendInputButtonContainer", 3, "click"], ["src", "./assets/images/send.png", 1, "sendIcon"], ["id", "myModal", "class", "modal", 4, "ngIf"], ["noCall", ""], ["incommingAudioCall", ""], ["outgoingAudioCall", ""], ["AudioCallInProgress", ""], ["incommingVideoCall", ""], ["outgoingVideoCall", ""], ["VideoCallInProgress", ""], ["groupIncommingAudioCall", ""], ["groupOutgoingAudioCall", ""], ["groupOngoingAudioCall", ""], ["groupIncommingVideoCall", ""], ["chatDuringCall", ""], ["groupVideoCall", ""], [1, "leftSectionHeader", 2, "align-items", "center", "margin", "0px"], [1, "leftHeading"], [1, "createText", 3, "click"], ["class", "leftSectionEmptyContainer", 4, "ngIf"], [1, "listingContainer", "fullHeight"], [1, "chatListContainer", "noHorizontalPadding"], [1, "leftSectionEmptyContainer"], [1, "noAvailableText"], [1, "tapText"], [1, "chatsCardContainer", "hand", 3, "click"], [1, "chatsCardLeft"], [1, "chatsNameWrap"], [1, "chatName", "text-capitalize"], ["class", "unreadBadge", 4, "ngIf"], ["class", "misreadMsg", 4, "ngIf"], ["class", "misreadMsg text-capitalize", 3, "ngClass", 4, "ngIf"], [1, "chatsCardRight", "mr-1"], [1, "dropdown", "mt-1", 2, "align-self", "flex-end"], ["src", "./assets/images/more.png", 1, "moreIcon"], [1, "dropdown-content"], [1, "edit", 3, "click"], [1, "delete", 3, "click"], [3, "ngClass", 4, "ngIf"], ["class", "cardOnlineStatus", 4, "ngIf"], [1, "unreadBadge"], [1, "misreadMsg"], [1, "misreadMsg", "text-capitalize", 3, "ngClass"], [3, "ngClass"], [1, "cardOnlineStatus"], [3, "setActiveChat", "changeEvent"], ["src", "./assets/images/arrow-left.png", 1, "arrowLeft", "hand", 3, "click"], ["id", "roomNameText", 1, "roomNameText", "text-capitalize"], ["type", "submit", 1, "btn", "callButton", "mr-1", 3, "click"], ["src", "./assets/images/call.png", 1, "callIcon"], ["type", "submit", 1, "btn", "broadcastButton", 3, "click"], ["src", "./assets/images/video-call.png", 1, "callIcon"], ["id", "messagesBox", 1, "messagesBox", 3, "ngClass"], [1, "IncommingVideo", "VideoCallBlock", 2, "pointer-events", "none", 3, "hidden", "ngClass"], ["id", "remoteVideo", "muted", "", "autoplay", "", "poster", "./assets/images/vidd.mp4", 1, "IncommingVideo", 2, "object-fit", "fill", "position", "absolute", "left", "0"], ["src", "", "type", "video/mp4"], ["id", "OutgoingVideo", 1, "OutgoingVideo", "VideoCallBlock", 3, "hidden"], ["draggable", "true", "id", "localVideo", "muted", "", "autoplay", "", 1, "w-100", 2, "object-fit", "fill"], [3, "ngTemplateOutlet"], [1, "w-100"], ["src", "./assets/images/Document.png", 1, "attachmentItemIcon", "ml-4"], [1, "ml-2"], [1, "font-weight-bolder", "hand", "ml-2", "text-danger", 3, "click"], ["type", "text", "placeholder", "Type to reply..", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["messageInputElement", ""], ["id", "myModal", 1, "modal"], [1, "close", 3, "click"], ["id", "img01", 1, "modal-content", 3, "src"], [1, "createChatPopup"], [1, "chatPopupContent", "groupPopup"], [1, "modalHeader"], [1, "modalHeading"], ["src", "./assets/images/cross.png", 1, "modalCross", "hand", 3, "click"], [1, "modalContent"], [1, "w-100", 3, "formGroup", "submit"], [1, "modalContentHeading"], ["type", "text", "placeholder", "ex: Deeper team", "formControlName", "group_title", 1, "form-control"], [3, "control"], ["type", "submit", 1, "btn", "doneButton", "mt-3", 3, "disabled", "click"], ["class", "chatRoomContainer", 4, "ngIf"], ["class", "msgBy text-capitalize", 4, "ngIf"], [1, "bubbleContainer"], ["class", "bubble", 4, "ngIf"], ["class", "imgbubble", 4, "ngIf"], ["class", "imgbubble file-attachment", 4, "ngIf"], [1, "time"], [1, "msgBy", "text-capitalize"], [1, "bubble"], [1, "msgText"], [1, "imgbubble"], [3, "diameter", 4, "ngIf"], [1, "w-100", "msgImage", "img-thumbnail", "img-fluid", 3, "src", "click"], [3, "diameter"], [1, "imgbubble", "file-attachment"], [1, "w-100", "msgImage", "thumbnail", "img-fluid", 3, "src"], ["download", "", 3, "href"], [1, "chatRoomContainer"], [1, "listingContainer", 2, "height", "100%"], [1, "emptyListContainer"], [1, "emptyListTop"], ["src", "./assets/images/shipping.png", 1, "shippingIcon"], [1, "noConvoTextWrapper"], [1, "noConvoText"], [1, "noConvoSub", 2, "max-width", "200px"], [1, "emptyListBottom"], ["type", "submit", 1, "btn", "newChatButton", 3, "click"], ["type", "submit", 1, "btn", "refreshButton", 3, "click"], [1, "callContainerStatus"], [1, "callerName", "text-capitalize"], ["id", "Incomingaudio", "autoplay", "", "src", "./assets/images/calling_you.mp3", "preload", "auto"], ["src", "./assets/images/audio.png", 1, "audioIcon"], [1, "callButtonsContainer", 2, "width", "150px"], ["src", "./assets/images/decline-button.png", 1, "responseButtonImg", 3, "click"], ["src", "./assets/images/Accept-button.png", 1, "responseButtonImg", 3, "click"], ["src", "./assets/images/blue-avatar.png", 1, "avatarIcon"], [1, "responseButtonImg", 3, "src", "click"], [1, "settingsIcon", "callContainerStatus", "white", "m-3"], ["id", "audiotag1", "autoplay", "", "src", "./assets/images/calling_you.mp3", "preload", "auto"], [1, "callButtonsContainer", 2, "width", "140px"], [1, "callButtonsContainer", 2, "width", "200px"], ["id", "callerHolder", 1, "callerName", "text-capitalize"], ["src", "./assets/images/chat1.png", 1, "callicon", 2, "z-index", "10000", "cursor", "pointer", 3, "click"], ["id", "messagesBox", 1, "messagesBox"], [1, "callContainer"], [1, "messagesBox", "noPadding", 2, "border-radius", "0px"], [1, "groupCallContainer"], [1, "upperVideoContainer"], ["class", "singleParticipantContainer", 4, "ngFor", "ngForOf"], [1, "bottomVideoContainer"], [1, "localVideoContainer"], [1, "singleInner"], ["src", "./assets/images/blue-avatar.png", 1, "singleInnAvatar"], [1, "innerCallerName", "text-capitalize"], ["id", "localAudio", "autoplay", "", "autoplay", "", 2, "object-fit", "cover"], [1, "groupCallControllContainer"], [1, "singleParticipantContainer"], ["autoplay", "", "autoplay", "", 2, "object-fit", "cover", 3, "id"], ["id", "appendChatDuringCall"], ["id", "messagesBox", 1, "messagesBox", "noPadding", 2, "border-radius", "0px"], ["id", "groupCallContainer", 1, "groupCallContainer", 3, "ngClass"], ["class", "conditionalName", 4, "ngIf"], [1, "bottomVideoContainer", 3, "ngClass"], [1, "singleInner", 2, "margin-bottom", "50px"], [1, "groupVideoCallWrapperBlock", 3, "ngClass"], ["id", "localVideo", "autoplay", "", "muted", "", "autoplay", "", 2, "object-fit", "cover", "width", "100%"], ["id", "localNameHolder", 1, "singleInner"], [1, "conditionalName"], [1, "groupVideoCallWrapper", "groupVideoCallWrapperBlock"], ["autoplay", "", "muted", "", "autoplay", "", 2, "object-fit", "contain", "height", "100%", "width", "100%", 3, "id"], [1, "innerCallerName"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatComponent_ng_container_5_Template, 10, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatComponent_ng_container_6_Template, 2, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatComponent_ng_container_7_Template, 2, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_9_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ChatComponent_img_19_Template, 1, 0, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ChatComponent_p_20_Template, 2, 1, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_21_listener() { return ctx.returntoCall(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "return to Call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ChatComponent_ng_container_24_Template, 2, 1, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ChatComponent_div_25_Template, 5, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ChatComponent_div_26_Template, 9, 6, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ChatComponent_ng_container_27_Template, 1, 1, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ChatComponent_ng_container_28_Template, 1, 1, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ChatComponent_ng_container_31_Template, 7, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ChatComponent_input_32_Template, 2, 1, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "ADD ATTACHMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r179); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46); return _r12.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChatComponent_Template_input_change_45_listener($event) { return ctx.handleFileInput($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_47_listener() { return ctx.sendTextMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ChatComponent_div_49_Template, 5, 3, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ChatComponent_div_50_Template, 15, 3, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ChatComponent_ng_template_51_Template, 2, 2, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ChatComponent_ng_template_53_Template, 9, 1, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ChatComponent_ng_template_55_Template, 8, 2, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ChatComponent_ng_template_57_Template, 9, 5, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ChatComponent_ng_template_59_Template, 9, 1, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ChatComponent_ng_template_61_Template, 9, 3, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ChatComponent_ng_template_63_Template, 11, 6, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ChatComponent_ng_template_65_Template, 12, 2, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ChatComponent_ng_template_67_Template, 10, 2, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ChatComponent_ng_template_69_Template, 20, 6, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ChatComponent_ng_template_71_Template, 12, 2, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ChatComponent_ng_template_73_Template, 3, 2, "ng-template", null, 51, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, ChatComponent_ng_template_75_Template, 24, 11, "ng-template", null, 52, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isHideThread());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.threadType === "THREAD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.threadType === "GROUP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.threadType === "CHAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("LOG OUT ", ctx.currentUserData.full_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.sdkconnected ? "online" : "offline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isHideChatScreen());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeChat.chatTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.AllGroups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.calling.templateName == "noCall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowOne2oneCall());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowM2MCall());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chatDCall());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.activeChat.chatTitle || ctx.calling.templateName != "noCall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fileToSend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.fileToSend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popupimagesrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editGroupModel);
    } }, styles: [".roomNameText[_ngcontent-%COMP%] {\n  font-family: manrope-semibold;\n  font-size: 34px;\n  line-height: 38px;\n  letter-spacing: -0.12px;\n  color: #31394d;\n}\n\n.chatbtn[_ngcontent-%COMP%] {\n  border-right: 1px solid #ebedf4;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #b0d7dd !important;\n  border: 1px solid #2196f3;\n}\n\n.attachmentpopup[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  padding: 15px 5px;\n}\n\n.msgText[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n          hyphens: auto;\n  padding: 0;\n  margin: 0;\n  font-family: inter-regular;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n}\n\n.thumbnail[_ngcontent-%COMP%] {\n  width: 60px !important;\n}\n\n\n\n.modal[_ngcontent-%COMP%] {\n  display: block;\n  \n  position: fixed;\n  \n  z-index: 1;\n  \n  padding-top: 100px;\n  \n  left: 0;\n  top: 0;\n  width: 100%;\n  \n  height: 100%;\n  \n  overflow: auto;\n  \n  background-color: black;\n  \n  background-color: rgba(0, 0, 0, 0.9);\n  \n}\n\n\n\n.modal-content[_ngcontent-%COMP%] {\n  margin: auto;\n  display: block;\n  width: 80%;\n  max-width: 700px;\n  border-radius: 6px !important;\n}\n\n@-webkit-keyframes zoom {\n  from {\n    -webkit-transform: scale(0);\n  }\n  to {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes zoom {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #f1f1f1;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n\n\n@media only screen and (max-width: 700px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.editgroup[_ngcontent-%COMP%] {\n  width: 485px;\n  margin: auto;\n}\n\n.chatholder[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n.online[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  background-color: green;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.offline[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  background: red;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n#localNameHolder[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.groupVideoCallWrapperBlock[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L0M6XFxVc2Vyc1xcU3VtbWVuIFphaGlkXFxEZXNrdG9wXFxjYWxsIHZkb3RvayBhbmd1bGFyXFxjb21iaW5lIGFwcFxcSlMtd2ViYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjaGF0XFxjaGF0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwrQkFBQTtBQ0VGOztBRENBO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtVQUFBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VGOztBREFBO0VBQ0Usc0JBQUE7QUNHRjs7QURBQSwyQkFBQTs7QUFDQTtFQUNFLGNBQUE7RUFBZ0Isc0JBQUE7RUFDaEIsZUFBQTtFQUFpQixrQkFBQTtFQUNqQixVQUFBO0VBQVksZUFBQTtFQUNaLGtCQUFBO0VBQW9CLHdCQUFBO0VBQ3BCLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCxjQUFBO0VBQWdCLDRCQUFBO0VBQ2hCLHVCQUFBO0VBQWdDLG1CQUFBO0VBQ2hDLG9DQUFBO0VBQXNDLHFCQUFBO0FDWXhDOztBRFRBLDBCQUFBOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ1lGOztBRFRBO0VBQ0U7SUFDRSwyQkFBQTtFQ1lGO0VEVkE7SUFDRSwyQkFBQTtFQ1lGO0FBQ0Y7O0FEVEE7RUFDRTtJQUNFLG1CQUFBO0VDV0Y7RURUQTtJQUNFLG1CQUFBO0VDV0Y7QUFDRjs7QURSQSxxQkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNVRjs7QURQQTs7RUFFRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDVUY7O0FEUEEsd0NBQUE7O0FBQ0E7RUFDRTtJQUNFLFdBQUE7RUNVRjtBQUNGOztBRFBBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNTRjs7QUROQTtFQUNFLDJCQUFBO0FDU0Y7O0FETkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ1NGOztBRE5BO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ1NGOztBRE5BO0VBQ0UsYUFBQTtBQ1NGOztBRFBBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNVRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb21OYW1lVGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtc2VtaWJvbGQ7XHJcbiAgZm9udC1zaXplOiAzNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xMnB4O1xyXG4gIGNvbG9yOiAjMzEzOTRkO1xyXG59XHJcbi5jaGF0YnRuIHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWJlZGY0O1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBkN2RkICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxOTZmMztcclxufVxyXG5cclxuLmF0dGFjaG1lbnRwb3B1cCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAxNXB4IDVweDtcclxufVxyXG5cclxuLm1zZ1RleHQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIGh5cGhlbnM6IGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IGludGVyLXJlZ3VsYXI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcbi50aHVtYm5haWwge1xyXG4gIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG59XHJcblxyXG4vKiBNb2RhbCBDb250ZW50IChpbWFnZSkgKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogODAlO1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB6b29tIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbi5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICByaWdodDogMzVweDtcclxuICBjb2xvcjogI2YxZjFmMTtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gIGNvbG9yOiAjYmJiO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIDEwMCUgSW1hZ2UgV2lkdGggb24gU21hbGxlciBTY3JlZW5zICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5lZGl0Z3JvdXAge1xyXG4gIHdpZHRoOiA0ODVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jaGF0aG9sZGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5vbmxpbmUge1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ub2ZmbGluZSB7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4jbG9jYWxOYW1lSG9sZGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5ncm91cFZpZGVvQ2FsbFdyYXBwZXJCbG9jayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4iLCIucm9vbU5hbWVUZXh0IHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtc2VtaWJvbGQ7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xMnB4O1xuICBjb2xvcjogIzMxMzk0ZDtcbn1cblxuLmNoYXRidG4ge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWJlZGY0O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwZDdkZCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjE5NmYzO1xufVxuXG4uYXR0YWNobWVudHBvcHVwIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMTVweCA1cHg7XG59XG5cbi5tc2dUZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgaHlwaGVuczogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogaW50ZXItcmVndWxhcjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4udGh1bWJuYWlsIHtcbiAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xuLm1vZGFsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogU3RheSBpbiBwbGFjZSAqL1xuICB6LWluZGV4OiAxO1xuICAvKiBTaXQgb24gdG9wICovXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogRnVsbCBoZWlnaHQgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbn1cblxuLyogTW9kYWwgQ29udGVudCAoaW1hZ2UpICovXG4ubW9kYWwtY29udGVudCB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbSB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHpvb20ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IDM1cHg7XG4gIGNvbG9yOiAjZjFmMWYxO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uY2xvc2U6aG92ZXIsXG4uY2xvc2U6Zm9jdXMge1xuICBjb2xvcjogI2JiYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIDEwMCUgSW1hZ2UgV2lkdGggb24gU21hbGxlciBTY3JlZW5zICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmVkaXRncm91cCB7XG4gIHdpZHRoOiA0ODVweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2hhdGhvbGRlciB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLm9ubGluZSB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm9mZmxpbmUge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jbG9jYWxOYW1lSG9sZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmdyb3VwVmlkZW9DYWxsV3JhcHBlckJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_10__["PubsubService"] }, { type: src_app_shared_services_vdk_one2one_call_service__WEBPACK_IMPORTED_MODULE_11__["VdkOne2OneCallService"] }, { type: src_app_shared_services_vdk_m2m_call_service__WEBPACK_IMPORTED_MODULE_12__["VdkM2MCallService"] }, { type: src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_13__["BaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }]; }, { noCall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['noCall']
        }], chatDuringCall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chatDuringCall']
        }], incommingAudioCall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['incommingAudioCall']
        }], outgoingAudioCall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['outgoingAudioCall']
        }], AudioCallInProgress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['AudioCallInProgress']
        }], incommingVideoCall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['incommingVideoCall']
        }], outgoingVideoCall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['outgoingVideoCall']
        }], VideoCallInProgress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['VideoCallInProgress']
        }], groupIncommingAudioCall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['groupIncommingAudioCall']
        }], groupOutgoingAudioCall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['groupOutgoingAudioCall']
        }], groupOngoingAudioCall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['groupOngoingAudioCall']
        }], groupIncommingVideoCall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['groupIncommingVideoCall']
        }], groupVideoCall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['groupVideoCall']
        }], messageInputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['messageInputElement']
        }] }); })();


/***/ }),

/***/ "./src/app/components/chat/new-chat/new-chat.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/chat/new-chat/new-chat.component.ts ***!
  \****************************************************************/
/*! exports provided: NewChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewChatComponent", function() { return NewChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/observable/fromEvent */ "./node_modules/rxjs/internal/observable/fromEvent.js");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/mergeMap */ "./node_modules/rxjs/internal/operators/mergeMap.js");
/* harmony import */ var rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/pubsub.service */ "./src/app/shared/services/pubsub.service.ts");
/* harmony import */ var src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");














const _c0 = ["searchInput"];
function NewChatComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    const _r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewChatComponent_ng_container_22_Template_img_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r203); const user_r201 = ctx.$implicit; const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r202.startChat(user_r201, "video"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewChatComponent_ng_container_22_Template_img_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r203); const user_r201 = ctx.$implicit; const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r204.startChat(user_r201, "audio"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewChatComponent_ng_container_22_Template_img_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r203); const user_r201 = ctx.$implicit; const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r205.startChat(user_r201, "chat"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const user_r201 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r201.full_name);
} }
class NewChatComponent {
    constructor(pubsubService, svc, dialog, toastr) {
        this.pubsubService = pubsubService;
        this.svc = svc;
        this.dialog = dialog;
        this.toastr = toastr;
        this.loading = true;
        this.AllUsers = [];
        this.CopyAllUsers = [];
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setActiveChat = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        if (this.searchInput) {
            Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.searchInput.nativeElement, 'input')
                .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => event.target.value), Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(value => {
                this.loading = true;
                if (!value) {
                    const data = {
                        sorting: "ORDER BY full_name ASC",
                        search_field: "full_name",
                        search_value: '',
                        condition: "contains",
                    };
                    return this.svc.post('AllUsers', data).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
                        if (!(res.users && res.users.length)) {
                            res.users = [];
                        }
                        this.CopyAllUsers = [...res.users];
                        return res;
                    }));
                }
                const temparaay = [...this.CopyAllUsers];
                const filteruser = temparaay.filter(user => {
                    let searchValue = value.toLowerCase();
                    if (user.full_name.toLowerCase().startsWith(searchValue)) {
                        return -1;
                    }
                });
                const returnData = {
                    users: filteruser
                };
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(returnData);
            }))
                .subscribe(res => {
                this.loading = false;
                if (!res.users || !res.users.length) {
                    this.toastr.error("No contacts found", "Opps!");
                    this.AllUsers = [];
                }
                else {
                    this.AllUsers = res.users;
                }
            });
        }
    }
    backScreen() {
        this.changeEvent.emit("THREAD");
    }
    addGroupEvent() {
        this.changeEvent.emit("GROUP");
    }
    startChat(user, val) {
        if (this.loading)
            return;
        this.loading = true;
        let data = {
            group_title: user.full_name,
            participants: [user.user_id],
            auto_created: 1
        };
        this.svc.post('CreateGroup', data).subscribe(v => {
            if (v && v.status == 200) {
                let subscribedata = Object.assign(Object.assign({}, v.group), { key: v.group['channel_key'], channel: v.group['channel_name'] });
                let data = [];
                data.push(subscribedata);
                this.pubsubService.subscribeToChat(data);
                this.changeEvent.emit("THREAD");
                v.group.clicked_item = val;
                this.setActiveChat.emit(v.group);
                this.loading = false;
            }
        });
    }
}
NewChatComponent.ɵfac = function NewChatComponent_Factory(t) { return new (t || NewChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_8__["PubsubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_9__["BaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"])); };
NewChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewChatComponent, selectors: [["new-chat"]], viewQuery: function NewChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, outputs: { changeEvent: "changeEvent", setActiveChat: "setActiveChat" }, decls: 23, vars: 1, consts: [[1, "newChatHeader"], [1, "newChatLeft", "hand"], ["src", "./assets/images/arrow-left.png", 1, "arrowLeft", 3, "click"], [1, "newChatHeading"], [1, "newChatRight", "hand"], ["src", "./assets/images/checkmark.png", 1, "goodMark"], [1, "newChatSearchBox"], [1, "input-group"], [1, "input-group-prepend"], ["src", "./assets/images/search.png", 1, "seacrchIcon"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["searchInput", ""], [1, "addGrpChat"], [1, "addGrpChatTop", "hand", 3, "click"], ["src", "./assets/images/Group Chat.png", 1, "addgrpIcon"], [1, "addGrpTitle"], [1, "addGrpSep"], [1, "cntct"], [1, "contactListContainer", "max-height"], [4, "ngFor", "ngForOf"], [1, "contactListCard", "hand"], [1, "contactListCardLeft"], ["src", "./assets/images/user.png", 1, "ListCardIcon"], [1, "ListCardName", "text-capitalize", "pb-1"], [1, "iconsdiv", "contactListCardRight", "justify-content-end", "pl-1"], [1, "videoicon"], ["src", "./assets/images/video-call.png", 1, "pl-1", "ListCardButton", "hand", 3, "click"], [1, "audioicon", "contactListCardRight", "justify-content-end", "pl-1"], ["src", "./assets/images/call.png", 1, "pl-1", "ListCardButton", "hand", 3, "click"], [1, "contactListCardRight", "justify-content-end", "pl-1"], ["src", "./assets/images/chat.png", 1, "pl-1", "ListCardButton", "hand", 3, "click"]], template: function NewChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewChatComponent_Template_img_click_2_listener() { return ctx.backScreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "New Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewChatComponent_Template_div_click_14_listener() { return ctx.addGroupEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add Group Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NewChatComponent_ng_container_22_Template, 13, 1, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.AllUsers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"]], styles: [".roomNameText[_ngcontent-%COMP%] {\n  font-family: manrope-semibold;\n  font-size: 34px;\n  line-height: 38px;\n  letter-spacing: -0.12px;\n  color: #31394d;\n}\n\n.chatbtn[_ngcontent-%COMP%] {\n  border-right: 1px solid #ebedf4;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #b0d7dd !important;\n  border: 1px solid #2196f3;\n}\n\n.selectuser[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  min-width: 30px;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L25ldy1jaGF0L0M6XFxVc2Vyc1xcU3VtbWVuIFphaGlkXFxEZXNrdG9wXFxjYWxsIHZkb3RvayBhbmd1bGFyXFxjb21iaW5lIGFwcFxcSlMtd2ViYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjaGF0XFxuZXctY2hhdFxcbmV3LWNoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9uZXctY2hhdC9uZXctY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwrQkFBQTtBQ0VGOztBRENBO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9uZXctY2hhdC9uZXctY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb29tTmFtZVRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLXNlbWlib2xkO1xyXG4gIGZvbnQtc2l6ZTogMzRweDtcclxuICBsaW5lLWhlaWdodDogMzhweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTJweDtcclxuICBjb2xvcjogIzMxMzk0ZDtcclxufVxyXG4uY2hhdGJ0biB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ViZWRmNDtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwZDdkZCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2ZjM7XHJcbn1cclxuXHJcbi5zZWxlY3R1c2VyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn0iLCIucm9vbU5hbWVUZXh0IHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtc2VtaWJvbGQ7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xMnB4O1xuICBjb2xvcjogIzMxMzk0ZDtcbn1cblxuLmNoYXRidG4ge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWJlZGY0O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwZDdkZCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjE5NmYzO1xufVxuXG4uc2VsZWN0dXNlciB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'new-chat',
                templateUrl: './new-chat.component.html',
                styleUrls: ['./new-chat.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_8__["PubsubService"] }, { type: src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_9__["BaseService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] }]; }, { changeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchInput']
        }], setActiveChat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/FormsHandler/FormsHandler */ "./src/app/shared/FormsHandler/FormsHandler.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/FormsHandler/get-errors.component */ "./src/app/shared/FormsHandler/get-errors.component.ts");









class LoginComponent {
    constructor(router, _fb, auth) {
        this.router = router;
        this._fb = _fb;
        this.auth = auth;
        this.loading = false;
        this.formError = '';
    }
    ngOnInit() {
        if (this.auth.islogin()) {
            this.router.navigate(['chat']);
        }
        this.buildForm();
        document.addEventListener("keyup", event => {
            if (event.code === 'Enter') {
                this.onLogin();
            }
        });
    }
    buildForm() {
        this.loginForm = this._fb.group({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(14)])
        }, { updateOn: 'change' });
    }
    onLogin() {
        _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_3__["default"].validateForm(this.loginForm);
        if (this.loginForm.invalid)
            return;
        const saveData = this.loginForm.value;
        saveData.project_id = '143LV8M8';
        this.loading = true;
        this.formError = null;
        this.auth.login(saveData).subscribe(v => {
            this.loading = false;
            if (v && v.status == 200) {
                src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].setUserData(v);
                src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].setAuthToken(v.auth_token);
                src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].setAuthUsername(v.ref_id);
                this.router.navigate(['chat']);
                this.loginForm.reset();
            }
            else {
                this.formError = v.message;
            }
        });
    }
    ngOnDestroy() {
        this.loginForm.reset();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["ngx-login"]], decls: 21, vars: 5, consts: [[1, "containerWrapper"], ["src", "./assets/images/logo2.png", 1, "logo"], [1, "innerWrapper"], [1, "wrapperHeading"], [1, "text-danger", "text-capitalize"], [1, "inputsContainer", "form-group"], [1, "w-100", 3, "formGroup", "submit"], ["type", "email", "placeholder", "Email/Username", "formControlName", "email", 1, "form-control"], [3, "control"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control"], [1, "buttonsContainer"], ["type", "submit", 1, "signButton", 3, "disabled", "click"], [1, "bottomLink"], ["routerLink", "/signup"], [1, "text-muted"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_8_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "form-errors", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "form-errors", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SIGN IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Version:2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.loginForm.get("username"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.loginForm.get("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_6__["GetErrorsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".wrapperHeading[_ngcontent-%COMP%] {\n  font-family: manrope-medium;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 27px;\n  line-height: 32px;\n  text-align: center;\n  letter-spacing: -0.12px;\n  color: #171725;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXFN1bW1lbiBaYWhpZFxcRGVza3RvcFxcY2FsbCB2ZG90b2sgYW5ndWxhclxcY29tYmluZSBhcHBcXEpTLXdlYmFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlckhlYWRpbmcge1xyXG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbWVkaXVtO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XHJcbiAgICBjb2xvcjogIzE3MTcyNTtcclxufSIsIi53cmFwcGVySGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLW1lZGl1bTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDI3cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xMnB4O1xuICBjb2xvcjogIzE3MTcyNTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/FormsHandler/FormsHandler */ "./src/app/shared/FormsHandler/FormsHandler.ts");
/* harmony import */ var src_app_shared_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/validators */ "./src/app/shared/validators.ts");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/FormsHandler/get-errors.component */ "./src/app/shared/FormsHandler/get-errors.component.ts");










class SignUpComponent {
    constructor(router, _fb, auth) {
        this.router = router;
        this._fb = _fb;
        this.auth = auth;
        this.loading = false;
    }
    ngOnInit() {
        this.buildForm();
        document.addEventListener("keyup", event => {
            if (event.code === 'Enter') {
                this.onLogin();
            }
        });
    }
    buildForm() {
        this.loginForm = this._fb.group({
            'full_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_shared_validators__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].usernameValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]),
            'device_type': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('web', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'device_model': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('web', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'device_os_ver': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](navigator.platform, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [src_app_shared_validators__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].emailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        }, { updateOn: 'change' });
        console.log('this.signupForm', this.loginForm);
    }
    onLogin() {
        _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_2__["default"].validateForm(this.loginForm);
        if (this.loginForm.invalid)
            return;
        const saveData = this.loginForm.value;
        saveData.project_id = '143LV8M8';
        this.loading = true;
        this.formError = null;
        this.auth.signup(saveData).subscribe(v => {
            this.loading = false;
            if (v && v.status == 200) {
                src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"].setUserData(v);
                src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"].setAuthToken(v.auth_token);
                src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"].setAuthUsername(v.ref_id);
                this.router.navigate(['chat']);
                this.loginForm.reset();
            }
            else {
                this.formError = v.message;
            }
        });
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["sign-up"]], decls: 21, vars: 6, consts: [[1, "containerWrapper"], ["src", "./assets/images/logo2.png", 1, "logo"], [1, "innerWrapper"], [1, "wrapperHeading"], [1, "text-danger", "text-capitalize"], [1, "inputsContainer", "form-group"], [1, "w-100", 3, "formGroup", "submit"], ["type", "text", "placeholder", "Your Username", "formControlName", "full_name", 1, "form-control"], [3, "control"], ["type", "email", "placeholder", "Your Email", "formControlName", "email", 1, "form-control"], ["type", "password", "placeholder", "Your Password", "formControlName", "password", 1, "form-control"], [1, "buttonsContainer"], ["type", "submit", 1, "signButton", 3, "disabled", "click"], [1, "bottomLink"], ["routerLink", "/login"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign Up to your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SignUpComponent_Template_form_submit_8_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "form-errors", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "form-errors", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "form-errors", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_16_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "SIGN IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.loginForm.get("full_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.loginForm.get("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.loginForm.get("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_7__["GetErrorsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".wrapperHeading[_ngcontent-%COMP%] {\n  font-family: manrope-medium;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 27px;\n  line-height: 32px;\n  text-align: center;\n  letter-spacing: -0.12px;\n  color: #171725;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLXVwL0M6XFxVc2Vyc1xcU3VtbWVuIFphaGlkXFxEZXNrdG9wXFxjYWxsIHZkb3RvayBhbmd1bGFyXFxjb21iaW5lIGFwcFxcSlMtd2ViYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaWduLXVwXFxzaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVySGVhZGluZyB7XHJcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbWVkaXVtO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XHJcbiAgY29sb3I6ICMxNzE3MjU7XHJcbn0iLCIud3JhcHBlckhlYWRpbmcge1xuICBmb250LWZhbWlseTogbWFucm9wZS1tZWRpdW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTJweDtcbiAgY29sb3I6ICMxNzE3MjU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/FormsHandler/FormsHandler.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/FormsHandler/FormsHandler.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormsHandler; });
class FormsHandler {
    /**
     * This method is use to validate Form
     * @param formErrors string
     * @param form  form instance | object
     * @return errors as string
     * @author  Mukhtiar Hussain <muhammad.mukhtiar@norgic.com>
     **/
    static validateForm(form) {
        if (form.valid) {
            return true;
        }
        else {
            if (form.controls) {
                for (const field in form.controls) {
                    const control = form.get(field);
                    if (control.invalid) {
                        control.markAsTouched({ onlySelf: true });
                    }
                }
            }
            return false;
        }
    }
    /**
    * this method is use to validate Form Array
    * @param formErrors string
    * @param form  form instance | object
    * @return errors as string
    * @author  Mukhtiar Hussain <muhammad.mukhtiar@norgic.com>
    **/
    static validateFormArray(form) {
        if (form.valid) {
            return true;
        }
        else {
            if (form.controls) {
                for (const group in form.controls) {
                    const groupFiled = form.get(group);
                    for (const field in groupFiled.controls) {
                        const control = groupFiled.get(field);
                        if (control.invalid) {
                            control.markAsTouched({ onlySelf: true });
                        }
                    }
                }
            }
            return false;
        }
    }
    static deleteEmptyFileds(data) {
        if (data) {
            for (const key in data) {
                if (data[key] == '' || data[key] == null) {
                    delete data[key];
                }
                if (data[key] && typeof data[key] === 'string') {
                    data[key] = data[key].trim();
                }
            }
            return data;
        }
    }
}


/***/ }),

/***/ "./src/app/shared/FormsHandler/get-errors.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/FormsHandler/get-errors.component.ts ***!
  \*************************************************************/
/*! exports provided: GetErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetErrorsComponent", function() { return GetErrorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GetErrorsComponent {
    hasErrors() {
        return this.control && this.control.errors && (this.control.dirty || this.control.touched);
    }
    listOfErrors() {
        const errors = Object.keys(this.control.errors).map(field => this.getMessage(field, this.control.errors[field]));
        return errors.length ? errors[0] : errors;
    }
    getMessage(type, params) {
        return GetErrorsComponent.errorMessages[type](params);
    }
}
GetErrorsComponent.errorMessages = {
    'required': () => 'The specified information is required.',
    'minlength': (params) => 'The min number of characters is ' + params.requiredLength,
    'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
    'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
    'years': (params) => params.message,
    'countryCity': (params) => params.message,
    'uniqueName': (params) => params.message,
    'telephoneNumbers': (params) => params.message,
    'telephoneNumber': (params) => params.message,
    'invalidNumber': () => 'The specified information is invalid.',
    'emptySpaces': () => 'The specified information is invalid.',
    'email': () => 'Email is not valid',
    'invalidPassword': () => 'Password must be a minimum of 8 characters and contain at least 1 uppercase character and 1 numeric value',
    'invalidUsernameCharacters': () => 'invalid user name',
    'invalidInputCharacters': () => 'The specified information is invalid.',
    'invalidEmailAddress': () => 'Email is not valid',
};
GetErrorsComponent.ɵfac = function GetErrorsComponent_Factory(t) { return new (t || GetErrorsComponent)(); };
GetErrorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetErrorsComponent, selectors: [["form-errors"]], inputs: { control: "control" }, decls: 2, vars: 1, consts: [[1, "text-danger"]], template: function GetErrorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hasErrors() ? ctx.listOfErrors() : "", " ");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetErrorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'form-errors',
                template: `
    <p class='text-danger'>
     {{hasErrors() ? listOfErrors() : ''}}
    </p>`,
            }]
    }], null, { control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/app-material/app-material.module.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/app-material/app-material.module.ts ***!
  \************************************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");



























const globalRippleConfig = { disabled: true };
class AppMaterialModule {
}
AppMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppMaterialModule });
AppMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppMaterialModule_Factory(t) { return new (t || AppMaterialModule)(); }, providers: [
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MAT_RIPPLE_GLOBAL_OPTIONS"], useValue: globalRippleConfig }
    ], imports: [[
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]
        ],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["PlatformModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppMaterialModule, { imports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]], exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["PlatformModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]
                ],
                declarations: [],
                entryComponents: [],
                providers: [
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MAT_RIPPLE_GLOBAL_OPTIONS"], useValue: globalRippleConfig }
                ],
                exports: [
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["PlatformModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/auth/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/auth/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        const isAuthenticated = this.authService.isAuthenticated();
        if (!isAuthenticated) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/auth/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class AuthService {
    constructor(http) {
        this.http = http;
        this.userSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    login(data) {
        return this.http.post('Login', data);
    }
    signup(data) {
        return this.http.post('SignUp', data);
    }
    logout() {
        _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].clearLocalStorge();
    }
    getToken() {
        return _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].getAuthToken();
    }
    isAuthenticated() {
        return !!this.getToken();
    }
    islogin() {
        return !!this.getToken();
    }
    resetUser() {
        this.currentUserId = null;
        this.userRequest = null;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    getUserId() {
        const userdata = _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].getUserData();
        return userdata._id;
    }
    isAuthUser() {
        return this.http.get('users/current-user');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/helpers/helpersFunctions.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/helpers/helpersFunctions.ts ***!
  \****************************************************/
/*! exports provided: isEmptyObj, isEmptyArray, isEmail, FindObjectByValue, FindArrayObject, AutoUnsubscribe, isMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyObj", function() { return isEmptyObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyArray", function() { return isEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return isEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindObjectByValue", function() { return FindObjectByValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindArrayObject", function() { return FindArrayObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoUnsubscribe", function() { return AutoUnsubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
function isEmptyObj(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
function isEmptyArray(array) {
    if (!Array.isArray(array) || !array.length) {
        return true;
    }
    else {
        return false;
    }
}
function isEmail(email) {
    const emailLowercase = email.toLowerCase();
    if (email == null || emailLowercase.match(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/)) {
        return true;
    }
    else {
        return false;
    }
}
function FindObjectByValue(inputArray, value) {
    return inputArray.find(e => e == value);
}
function FindArrayObject(inputArray, key, value) {
    return inputArray.find(e => e[key] == value);
}
function AutoUnsubscribe(constructor) {
    const original = constructor.prototype.ngOnDestroy;
    constructor.prototype.ngOnDestroy = function () {
        for (const prop in this) {
            if (prop) {
                const property = this[prop];
                if (property && (typeof property.unsubscribe === 'function')) {
                    property.unsubscribe();
                }
            }
        }
        if (original && typeof original === 'function') {
            original.apply(this, arguments);
        }
        ;
    };
}
function isMobile() {
    return window.innerWidth < 768;
}


/***/ }),

/***/ "./src/app/shared/pipe/filter.ts":
/*!***************************************!*\
  !*** ./src/app/shared/pipe/filter.ts ***!
  \***************************************/
/*! exports provided: filterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterPipe", function() { return filterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/base.service */ "./src/app/shared/services/base.service.ts");






class filterPipe {
    constructor(toastr, svc) {
        this.toastr = toastr;
        this.svc = svc;
    }
    transform(items, value) {
        if (!items)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        if (!value)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(items);
        const data = {
            "search_field": "full_name",
            "search_value": value,
            "condition": "contains",
        };
        return this.svc.post('AllUsers', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            if (res.status == 400) {
                this.toastr.error("No contacts found", "Opps!");
                return [];
            }
            return res.users;
        }));
    }
}
filterPipe.ɵfac = function filterPipe_Factory(t) { return new (t || filterPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"])); };
filterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: filterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](filterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter'
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/pipe/formatTime.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipe/formatTime.ts ***!
  \*******************************************/
/*! exports provided: FormatTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatTimePipe", function() { return FormatTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FormatTimePipe {
    transform(value) {
        const minutes = Math.floor(value / 60);
        return (("00" + minutes).slice(-2) +
            ":" +
            ("00" + Math.floor(value - minutes * 60)).slice(-2));
    }
}
FormatTimePipe.ɵfac = function FormatTimePipe_Factory(t) { return new (t || FormatTimePipe)(); };
FormatTimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatTime", type: FormatTimePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatTimePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "formatTime"
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipe/safeurl.ts":
/*!****************************************!*\
  !*** ./src/app/shared/pipe/safeurl.ts ***!
  \****************************************/
/*! exports provided: SafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return SafeUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class SafeUrlPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafeUrlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeUrl", type: SafeUrlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeUrlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safeUrl'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/base.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/base.service.ts ***!
  \*************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class BaseService {
    constructor(http) {
        this.http = http;
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
        this.userData$ = this.userData.asObservable();
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.isLoadingResponse = this.isLoading.asObservable();
    }
    /**
    * This method is used to Call API using Http GET method.
    * @param URL
    * @return obserables responsce
    * @author  Muhammad Mukhtiar  <muhammad.mukhtiar@norgic.com>
    **/
    get(URL) {
        return this.http.get(URL);
    }
    /**
    * This method is use to add or update data using API
    * @param formData
    * @return obserables responsce
    * @author  Mukhtiar Hussain <muhammad.mukhtiar@norgic.com>
    **/
    save(URL, data = {}) {
        return this.http.post(URL, data);
    }
    /**
    * This method is used to Call API using Http Post method.
    * @param URL
    * @param URL
    * @return obserables responsce
    * @author  Mukhtiar Hussain <muhammad.mukhtiar@norgic.com>
    **/
    post(URL, payload = {}) {
        return this.http.post(URL, payload);
    }
}
BaseService.ɵfac = function BaseService_Factory(t) { return new (t || BaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BaseService, factory: BaseService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/http.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/http.service.ts ***!
  \*************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");









class HttpService {
    constructor(router, svc) {
        this.router = router;
        this.svc = svc;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl;
    }
    intercept(req, next) {
        req = this.getModifiedReq(req);
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(event => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                if (event && event.body) {
                    const serRes = event.body;
                    this.svc.isLoading.next(false);
                    if (serRes.code === 401) {
                        _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"].clearLocalStorge();
                        this.showErrorMsg(serRes.message);
                        this.router.navigate(['/login']);
                    }
                    else if (serRes.code === 407) {
                        // StorageService.clearLocalStorge();
                        this.showErrorMsg(serRes.message);
                        // this.router.navigate(['/auth/login']);
                    }
                    else if (serRes.code === 200 || serRes.code === 201) {
                    }
                    else {
                        this.showErrorMsg(serRes.message);
                    }
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(errorRes => {
            this.svc.isLoading.next(false);
            console.log('this should print your error!', errorRes.error);
            if (errorRes instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (errorRes.status === 500) {
                    // this.toastrService.danger('Opps!', "Something went wrong");
                }
                else {
                    this.showErrorMsg(errorRes.message);
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorRes);
        }));
    }
    ;
    getModifiedReq(req) {
        req = req.clone({ url: this.baseUrl + req.url });
        const formdata = JSON.stringify(req.body);
        const auth_token = _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"].getAuthToken();
        if (auth_token)
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + auth_token) });
        req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        req = req.clone({ body: formdata });
        return req;
    }
    showErrorMsg(errorResponse) {
        if (typeof errorResponse == 'string') {
            // this.toastrService.danger('Opps!', errorResponse);
        }
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/pubsub.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/pubsub.service.ts ***!
  \***************************************************/
/*! exports provided: PubsubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubsubService", function() { return PubsubService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "./src/app/shared/services/storage.service.ts");



class PubsubService {
    constructor() {
    }
    ngOnDestroy() {
        this.wsSubscription.unsubscribe();
    }
    initConfigure() {
        const user = _storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"].getUserData();
        this.Client = new MVDOTOK.Client({
            projectID: "143LV8M8",
            secret: "3d9686b635b15b5bc2d19800407609fa",
            host: `${user.messaging_server_map.protocol}://${user.messaging_server_map.host}:${user.messaging_server_map.port}`
        });
        this.Client.Register(user.ref_id.toString(), user.authorization_token.toString());
    }
    sendMessage(message) {
        this.Client.SendMessage(message);
    }
    subscribeToChat(groups) {
        groups.map(chanelObj => {
            this.Client.Subscribe(chanelObj);
        });
    }
    unsubscribeToChat(groups) {
        this.Client.UnSubscribe(groups);
    }
    Disconnect() {
        this.Client.Disconnect();
    }
    readMessage(chatMessages) {
        chatMessages.map(chat => {
            this.Client.SendReceipt(chat);
        });
    }
    readSingleMessage(chatMessages) {
        this.Client.SendReceipt(chatMessages);
    }
}
PubsubService.ɵfac = function PubsubService_Factory(t) { return new (t || PubsubService)(); };
PubsubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PubsubService, factory: PubsubService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PubsubService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, { wsSubscription: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/services/storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
class StorageService {
    static clearLocalStorge() {
        localStorage.clear();
        sessionStorage.clear();
        return;
    }
    static getAuthToken() {
        return localStorage.getItem(StorageService.STORAGE_KEY_AUTH_TOKEN);
    }
    static setAuthToken(token) {
        localStorage.setItem(StorageService.STORAGE_KEY_AUTH_TOKEN, token);
    }
    static removeAuthToken() {
        localStorage.removeItem(StorageService.STORAGE_KEY_AUTH_TOKEN);
    }
    static getAuthUsername() {
        return localStorage.getItem(StorageService.STORAGE_KEY_USER_NAME);
    }
    static setAuthUsername(username) {
        localStorage.setItem(StorageService.STORAGE_KEY_USER_NAME, username);
    }
    static removeAuthUsername() {
        localStorage.removeItem(StorageService.STORAGE_KEY_USER_NAME);
    }
    static setUserData(userData) {
        localStorage.setItem(StorageService.STORAGE_KEY_USER_DATA, JSON.stringify(userData));
    }
    static getUserData() {
        return JSON.parse(localStorage.getItem(StorageService.STORAGE_KEY_USER_DATA));
    }
    static removeUserData() {
        localStorage.removeItem(StorageService.STORAGE_KEY_USER_DATA);
    }
}
StorageService.STORAGE_KEY_AUTH_TOKEN = 'auth_token';
StorageService.STORAGE_KEY_USER_NAME = 'username';
StorageService.STORAGE_KEY_USER_DATA = 'user_data';


/***/ }),

/***/ "./src/app/shared/services/vdk-m2m-call.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/vdk-m2m-call.service.ts ***!
  \*********************************************************/
/*! exports provided: VdkM2MCallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VdkM2MCallService", function() { return VdkM2MCallService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "./src/app/shared/services/storage.service.ts");



class VdkM2MCallService {
    constructor() {
    }
    initConfigure() {
        this.Client = new CVDOTOK.ManyToMany({
            projectID: "143LV8M8",
            secret: "3d9686b635b15b5bc2d19800407609fa",
        });
        this.Client.on("connected", (res) => {
            let user = _storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"].getUserData();
            this.Client.Register(user.ref_id.toString(), user.authorization_token.toString());
        });
    }
    groupCall(params) {
        this.Client.GroupCall(params);
    }
    joinGroupCall(params) {
        this.Client.JoinGroupCall(params);
    }
    leaveGroupCall() {
        this.Client.LeaveGroupCall();
    }
    setCameraOn() {
        this.Client.SetCameraOn();
    }
    setCameraOff() {
        this.Client.SetCameraOff();
    }
    setMicMute() {
        this.Client.SetMicMute();
    }
    setMicUnmute() {
        this.Client.SetMicUnmute();
    }
    setParticipantVideo(participant, vidio) {
        this.Client.SetParticipantVideo(participant, vidio);
    }
}
VdkM2MCallService.ɵfac = function VdkM2MCallService_Factory(t) { return new (t || VdkM2MCallService)(); };
VdkM2MCallService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VdkM2MCallService, factory: VdkM2MCallService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VdkM2MCallService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, { Client: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/services/vdk-one2one-call.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/vdk-one2one-call.service.ts ***!
  \*************************************************************/
/*! exports provided: VdkOne2OneCallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VdkOne2OneCallService", function() { return VdkOne2OneCallService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "./src/app/shared/services/storage.service.ts");



class VdkOne2OneCallService {
    constructor() {
    }
    initConfigure() {
        const user = _storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"].getUserData();
        this.Client = new CVDOTOK.Client({
            projectID: "143LV8M8",
            secret: "3d9686b635b15b5bc2d19800407609fa",
            host: `${user.media_server_map.protocol}://${user.media_server_map.host}:${user.media_server_map.port}/${user.media_server_map.end_point}`
        });
        this.Client.on("connected", (res) => {
            let user = _storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"].getUserData();
            this.Client.Register(user.ref_id.toString(), user.authorization_token.toString());
        });
    }
    Disconnect() {
        // this.Client.Disconnect();
    }
    Call(params) {
        this.Client.Call(params);
    }
    audioCall(params) {
        this.Client.AudioCall(params);
    }
    acceptCall(local, remote) {
        this.Client.AcceptCall(local, remote);
    }
    rejectCall(from, val) {
        this.Client.RejectCall(from, val);
    }
    endCall() {
        this.Client.EndCall();
    }
    cancelCall() {
        this.Client.CancelCall();
    }
    setCameraOn() {
        this.Client.SetCameraOn();
    }
    setCameraOff() {
        this.Client.SetCameraOff();
    }
    setMicMute() {
        this.Client.SetMicMute();
    }
    setMicUnmute() {
        this.Client.SetMicUnmute();
    }
    groupCall(params) {
        this.Client.GroupCall(params);
    }
    joinGroupCall(params) {
        this.Client.JoinGroupCall(params);
    }
    leaveGroupCall() {
        this.Client.LeaveGroupCall();
    }
    setParticipantVideo(participant, vidio) {
        this.Client.SetParticipantVideo(participant, vidio);
    }
}
VdkOne2OneCallService.ɵfac = function VdkOne2OneCallService_Factory(t) { return new (t || VdkOne2OneCallService)(); };
VdkOne2OneCallService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VdkOne2OneCallService, factory: VdkOne2OneCallService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VdkOne2OneCallService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, { Client: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _services_pubsub_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/pubsub.service */ "./src/app/shared/services/pubsub.service.ts");
/* harmony import */ var _FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormsHandler/get-errors.component */ "./src/app/shared/FormsHandler/get-errors.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _pipe_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipe/filter */ "./src/app/shared/pipe/filter.ts");
/* harmony import */ var _pipe_safeurl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipe/safeurl */ "./src/app/shared/pipe/safeurl.ts");
/* harmony import */ var _pipe_formatTime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipe/formatTime */ "./src/app/shared/pipe/formatTime.ts");
/* harmony import */ var _services_vdk_m2m_call_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/vdk-m2m-call.service */ "./src/app/shared/services/vdk-m2m-call.service.ts");
/* harmony import */ var _services_vdk_one2one_call_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/vdk-one2one-call.service */ "./src/app/shared/services/vdk-one2one-call.service.ts");


















const components = [
    _FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_10__["GetErrorsComponent"],
    _pipe_filter__WEBPACK_IMPORTED_MODULE_12__["filterPipe"],
    _pipe_safeurl__WEBPACK_IMPORTED_MODULE_13__["SafeUrlPipe"],
    _pipe_formatTime__WEBPACK_IMPORTED_MODULE_14__["FormatTimePipe"]
];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
        _services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"],
        _services_pubsub_service__WEBPACK_IMPORTED_MODULE_9__["PubsubService"],
        _services_vdk_one2one_call_service__WEBPACK_IMPORTED_MODULE_16__["VdkOne2OneCallService"],
        _services_vdk_m2m_call_service__WEBPACK_IMPORTED_MODULE_15__["VdkM2MCallService"],
        { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: false } },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"], multi: true },
    ], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_10__["GetErrorsComponent"],
        _pipe_filter__WEBPACK_IMPORTED_MODULE_12__["filterPipe"],
        _pipe_safeurl__WEBPACK_IMPORTED_MODULE_13__["SafeUrlPipe"],
        _pipe_formatTime__WEBPACK_IMPORTED_MODULE_14__["FormatTimePipe"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_10__["GetErrorsComponent"],
        _pipe_filter__WEBPACK_IMPORTED_MODULE_12__["filterPipe"],
        _pipe_safeurl__WEBPACK_IMPORTED_MODULE_13__["SafeUrlPipe"],
        _pipe_formatTime__WEBPACK_IMPORTED_MODULE_14__["FormatTimePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                declarations: [...components],
                exports: [...components],
                providers: [
                    _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
                    _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
                    _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
                    _services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"],
                    _services_pubsub_service__WEBPACK_IMPORTED_MODULE_9__["PubsubService"],
                    _services_vdk_one2one_call_service__WEBPACK_IMPORTED_MODULE_16__["VdkOne2OneCallService"],
                    _services_vdk_m2m_call_service__WEBPACK_IMPORTED_MODULE_15__["VdkM2MCallService"],
                    { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: false } },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"], multi: true },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/validators.ts":
/*!**************************************!*\
  !*** ./src/app/shared/validators.ts ***!
  \**************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
class ValidationService {
    static specialCharValidator(control) {
        if (control.value == null || control.value.match(/^[a-zA-Z0-9._]*$/)) {
            return null;
        }
        else {
            return { 'invalidCharacters': true };
        }
    }
    static uppercaseCharacterRule(amount) {
        return function validate(control) {
            const value = control.value;
            if (value.length === 0) {
                return undefined;
            }
            const pattern = /[^A-Z]+/g;
            const stripped = value.replace(pattern, '');
            if (stripped.length < amount) {
                return { 'uppercaseCharacterRule': true };
            }
            return undefined;
        };
    }
    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    }
    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        const emailLowercase = control.value.toLowerCase();
        if (control.value == null || emailLowercase.match(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    }
    static isEmptyInputValue(value) {
        // we don't check for string here so it also works with arrays
        return value == null || value.length === 0;
    }
    static emptySpacesValidator(control) {
        console.log('emptySpacesValidator', control, control.value);
        if (control.value.match(/([^\s])/)) {
            return null;
        }
        else {
            return { 'emptySpaces': true };
        }
    }
    static removeSpace(value) {
        return value.trim();
    }
    static englishWordsValidator(control) {
        console.log('englishWordsValidator', control);
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        const tempstring = ValidationService.removeSpace(control.value);
        if (tempstring.match(/^[a-zA-Z]+( [\&a-zA-Z]+)*$/)) {
            return null;
        }
        else {
            return { 'invalidCharacters': true };
        }
    }
    static nameValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        if (control.value.match(/^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,30}$/)) {
            return null;
        }
        else {
            return { 'invalidNameCharacters': true };
        }
    }
    static whiteSpaceValidator(control) {
        // RFC 2822 compliant regex
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        if (control.value.match(/^[-a-zA-Z\u0600-\u06FF0-9-()]+(\s+[-a-zA-Z\u0600-\u06FF0-9-()]+)*$/)) {
            return null;
        }
        else {
            return { 'invalidWhiteSpace': true };
        }
    }
    static phoneValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        if (control.value.match(/^\+?[0-9]+$/g)) {
            return null;
        }
        else {
            return { 'invalidPhone': true };
        }
    }
    static phoneUsernameEmailValidator(control) {
        if (control.value == null)
            return;
        let validEmail = true, validPhone = true, validUsername = true;
        if (ValidationService.emailValidator(control) != null) {
            validEmail = false;
        }
        if (!control.value.match(/^[a-zA-Z0-9]{5,17}$/)) {
            validUsername = false;
        }
        if (!control.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
            validPhone = false;
        }
        console.log('phoneUsernameEmailValidator', ValidationService.emailValidator(control), validEmail, validUsername, validPhone);
        if (validEmail || validUsername || validPhone)
            return null;
        return { 'invalidUsernameEmail': true };
    }
    static usernameValidator(control) {
        // RFC 2822 compliant regex
        if (control.value == null || control.value.match(/^[a-zA-Z0-9]+$/)) {
            return null;
        }
        else {
            return { 'invalidUsernameCharacters': true };
        }
    }
    static passwordValidator(control) {
        // {8,100}           - Assert password is between 8 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value && !ValidationService.uppercaseCharacterRule(1)(control) && control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    }
    static MatchPassword(control, crud) {
        if (control.value == null)
            return null;
        return control.root.get('password').value != control.value ? { passworMismatch: true } : null;
    }
    static pinCodeValidator(control) {
        if (control.value && control.value.match(/^[0-9]{4}$/)) {
            return null;
        }
        else {
            return { 'invalidPinCode': true };
        }
    }
    static trimData(data) {
        if (data) {
            for (const key in data) {
                if (data[key] && typeof data[key] == "string") {
                    data[key] = data[key].trim();
                }
            }
            return data;
        }
    }
    static checkInteger(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        if (parseFloat(control.value) == 0 || (parseFloat(control.value) || parseInt(control.value)) && !isNaN(control.value)) {
            return null;
        }
        else {
            return { 'invalidNumber': true };
        }
    }
    static alphnumericValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        if (ValidationService.whiteSpaceValidator(control.value))
            return;
        // if (control.value.match(/^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,0-9]{1,500}$/)) {
        if (control.value.match(/^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
            return null;
        }
        else {
            return { 'invalidInputCharacters': true };
        }
    }
    static stringvalidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        if (control.value.match(/^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
            return null;
        }
        else {
            return { 'invalidInputCharacters': true };
        }
    }
    static disallowspecial(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        if (control.value.match(/^[A-Za-z0-9 ]+$/)) {
            return null;
        }
        else {
            return { 'invalidInputCharacters': true };
        }
    }
    static alphValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        if (control.value.match(/^\+?[A-Za-z]+$/g)) {
            return null;
        }
        else {
            return { 'invalidString': true };
        }
    }
    static numericValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        if (ValidationService.whiteSpaceValidator(control.value))
            return;
        const value = control.value.toString();
        if (value.match(/^\+?[0-9]+$/g)) {
            return null;
        }
        else {
            return { 'invalidNumeric': true };
        }
    }
    static floatNumberValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        const value = control.value.toString();
        if (value.match(/^[+-]?\d+(\.\d+)?$/g)) {
            return null;
        }
        else {
            return { 'invalidNumeric': true };
        }
    }
    static mackAddressValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        const value = control.value.toString();
        if (value.match(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/g)) {
            return null;
        }
        else {
            return { 'invalidMackAddress': true };
        }
    }
    static gatewayAddressValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        const value = control.value.toString();
        if (value.match(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/g)) {
            return null;
        }
        else {
            return { 'invalidMackAddress': true };
        }
    }
    static ipValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        const value = control.value.toString();
        if (value.match(/^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/g)) {
            return null;
        }
        else {
            return { 'invalidIp': true };
        }
    }
    static domainNameValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        const value = control.value.toString();
        if (value.match(/^(?=^.{1,254}$)(^(?:(?!\d+\.)[a-zA-Z0-9_\-]{1,63}\.?)+(?:[a-zA-Z]{2,})$)/g)) {
            return null;
        }
        else {
            return { 'invalidDomainName': true };
        }
    }
}


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
const environment = {
    production: false,
    apiBaseUrl: 'https://q-tenant.vdotok.dev/API/v0/'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Summen Zahid\Desktop\call vdotok angular\combine app\JS-webapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map