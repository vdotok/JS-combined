"use strict";
(self["webpackChunkvdotok"] = self["webpackChunkvdotok"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/chat/chat.component */ 3203);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ 9166);
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ 5233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [{
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: 'signup',
  component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__.SignUpComponent
}, {
  path: 'chat',
  component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_0__.ChatComponent,
  canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]
}, {
  path: '**',
  redirectTo: 'login'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {}
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/chat/chat.component */ 3203);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ 9166);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/app-material/app-material.module */ 2859);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _components_chat_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/chat/add-group/add-group.component */ 4718);
/* harmony import */ var _components_chat_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/chat/new-chat/new-chat.component */ 5844);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/FormsHandler/get-errors.component */ 8967);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 7578);
/* harmony import */ var _shared_pipe_safeurl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/pipe/safeurl */ 3686);
/* harmony import */ var _shared_pipe_formatTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/pipe/formatTime */ 7165);























class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_5__.AppMaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrModule.forRoot({
      maxOpened: 1,
      preventDuplicates: true
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__.ChatComponent, _components_chat_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_7__.AddGroupComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _components_chat_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_8__.NewChatComponent, _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__.SignUpComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_5__.AppMaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrModule]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetComponentScope"](_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__.ChatComponent, function () {
  return [_shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_9__.GetErrorsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgTemplateOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatLegacyProgressSpinner, _components_chat_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_7__.AddGroupComponent, _components_chat_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_8__.NewChatComponent];
}, function () {
  return [_shared_pipe_safeurl__WEBPACK_IMPORTED_MODULE_10__.SafeUrlPipe, _shared_pipe_formatTime__WEBPACK_IMPORTED_MODULE_11__.FormatTimePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe];
});

/***/ }),

/***/ 4718:
/*!******************************************************************!*\
  !*** ./src/app/components/chat/add-group/add-group.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddGroupComponent": () => (/* binding */ AddGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/FormsHandler/FormsHandler */ 7724);
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/storage.service */ 1303);
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/observable/fromEvent */ 3280);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators/map */ 635);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ 1989);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ 8977);
/* harmony import */ var rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/mergeMap */ 1353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/pubsub.service */ 235);
/* harmony import */ var src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/base.service */ 2365);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/FormsHandler/get-errors.component */ 8967);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);


















const _c0 = ["searchInput"];
function AddGroupComponent_ng_container_18_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddGroupComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddGroupComponent_ng_container_18_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const user_r5 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.selectContact(user_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddGroupComponent_ng_container_18_div_6_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r5.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", user_r5["selected"]);
  }
}
function AddGroupComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "div", 28)(3, "div", 29)(4, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Create a group chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddGroupComponent_div_19_Template_img_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.closemodel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 32)(8, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function AddGroupComponent_div_19_Template_form_submit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.addGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Name your group chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 35)(12, "form-errors", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddGroupComponent_div_19_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.addGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " DONE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx_r2.form.get("group_title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.loading);
  }
}
function AddGroupComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27)(1, "div", 38)(2, "div", 29)(3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Create a group chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddGroupComponent_ng_template_20_Template_img_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const modal_r13 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](modal_r13.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 32)(7, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function AddGroupComponent_ng_template_20_Template_form_submit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.addGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Name your group chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 35)(11, "form-errors", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddGroupComponent_ng_template_20_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.addGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " DONE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx_r4.form.get("group_title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r4.loading);
  }
}
class AddGroupComponent {
  constructor(pubsubService, svc, toastr, _fb, changeDetector) {
    this.pubsubService = pubsubService;
    this.svc = svc;
    this.toastr = toastr;
    this._fb = _fb;
    this.changeDetector = changeDetector;
    this.currentUserName = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getAuthUsername();
    this.currentUserData = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getUserData();
    this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
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
    this.setActiveChat = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }
  ngOnInit() {
    this.form = this._fb.group({
      'group_title': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)])
    }, {
      updateOn: 'change'
    });
    document.addEventListener("keyup", event => {
      if (event.code === 'Enter' && !this.loading) {
        this.addGroup();
      }
    });
  }
  ngAfterViewInit() {
    if (this.searchInput) {
      (0,rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(this.searchInput.nativeElement, 'input').pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_8__.map)(event => event.target.value), (0,rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(1000), (0,rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(''), (0,rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_12__.mergeMap)(value => {
        this.loading = true;
        if (!value) {
          const data = {
            sorting: "ORDER BY full_name ASC",
            search_field: "full_name",
            search_value: '',
            condition: "contains"
          };
          return this.svc.post('AllUsers', data).pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_8__.map)(res => {
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
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(returnData);
      })).subscribe(res => {
        this.loading = false;
        if (!res.users || !res.users.length) {
          this.toastr.error("Opps!", "No contacts found");
          this.AllUsers = [];
        } else {
          this.AllUsers = res.users;
        }
        this.setAlreadySelected();
      });
    }
  }
  setAlreadySelected() {
    this.selectedUsers.map(user => {
      const userIndex = this.AllUsers.find(alluser => alluser.user_id == user.user_id);
      if (userIndex) userIndex['selected'] = true;
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
    } else if (this.selectedUsers.length > 4) {
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
    } else if (this.selectedUsers.length > 4) {
      this.groupnameError = 'Participants cannot be more than 4';
      return;
    }
    if (this.selectedUsers.length == 1) {
      const useridArray = this.selectedUsers.map(user => user.user_id);
      let data = {
        participants: useridArray,
        auto_created: useridArray.length > 1 ? 0 : 1,
        group_title: "One to One chat"
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
    } else {
      this.addGroupModel = true;
    }
  }
  addGroup() {
    src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_0__["default"].validateForm(this.form);
    const useridArray = this.selectedUsers.map(user => user.user_id);
    console.log("userIdArray", useridArray);
    if (this.form.invalid || !useridArray.length || this.loading) return;
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
    data = {
      ...data,
      ...this.form.value
    };
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
  static #_ = this.ɵfac = function AddGroupComponent_Factory(t) {
    return new (t || AddGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_2__.PubsubService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__.BaseService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AddGroupComponent,
    selectors: [["add-group"]],
    viewQuery: function AddGroupComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
      }
    },
    outputs: {
      changeEvent: "changeEvent",
      setActiveChat: "setActiveChat"
    },
    decls: 22,
    vars: 4,
    consts: [[1, "newChatContainer"], [1, "newChatHeader"], [1, "newChatLeft", "hand"], ["src", "./assets/images/arrow-left.png", 1, "arrowLeft", "hand", 3, "click"], [1, "newChatHeading"], [1, "newChatRight", "hand", 3, "click"], ["src", "./assets/images/checkmark.png", 1, "goodMark"], [1, "newChatSearchBox"], [1, "input-group"], [1, "input-group-prepend"], ["src", "./assets/images/search.png", 1, "seacrchIcon"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["searchInput", ""], [1, "newGrpChat"], [3, "ngClass"], [1, "newListContainer", "max-height"], [4, "ngFor", "ngForOf"], ["id", "myModal", "class", "modal", 4, "ngIf"], ["content", ""], [1, "contactListCard", "hand", 3, "click"], [1, "contactListCardLeft"], ["src", "./assets/images/user.png", 1, "ListCardIcon"], [1, "ListCardName", "text-capitalize", "pb-1"], ["class", "selectuser contactListCardRight", 4, "ngIf"], [1, "selectuser", "contactListCardRight"], ["src", "./assets/images/checkmark-circle.png", 1, "ListCardButton"], ["id", "myModal", 1, "modal"], [1, "createChatPopup"], [1, "chatPopupContent", "groupPopup"], [1, "modalHeader"], [1, "modalHeading"], ["src", "./assets/images/cross.png", 1, "modalCross", "hand", 3, "click"], [1, "modalContent"], [1, "w-100", 3, "formGroup", "submit"], [1, "modalContentHeading"], ["type", "text", "placeholder", "ex: Deeper team", "formControlName", "group_title", 1, "form-control"], [3, "control"], ["type", "submit", 1, "btn", "doneButton", "mt-3", 3, "disabled", "click"], [1, "chatPopupContent"]],
    template: function AddGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddGroupComponent_Template_img_click_3_listener() {
          return ctx.backScreen();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Create Group Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddGroupComponent_Template_div_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.openDialog(_r3));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 13)(15, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AddGroupComponent_ng_container_18_Template, 7, 2, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AddGroupComponent_div_19_Template, 15, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AddGroupComponent_ng_template_20_Template, 14, 3, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.groupnameError ? "text-danger" : "cntct");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.groupnameError ? ctx.groupnameError : "Select Contacts", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.AllUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.addGroupModel);
      }
    },
    dependencies: [_shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_4__.GetErrorsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf],
    styles: [".roomNameText[_ngcontent-%COMP%] {\n  font-family: manrope-semibold;\n  font-size: 34px;\n  line-height: 38px;\n  letter-spacing: -0.12px;\n  color: #31394d;\n}\n\n.chatbtn[_ngcontent-%COMP%] {\n  border-right: 1px solid #ebedf4;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #b0d7dd !important;\n  border: 1px solid #2196f3;\n}\n\n.selectuser[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  min-width: 30px;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jaGF0L2FkZC1ncm91cC9hZGQtZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsK0JBQUE7QUFFRjs7QUFDQTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vbU5hbWVUZXh0IHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtc2VtaWJvbGQ7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xMnB4O1xuICBjb2xvcjogIzMxMzk0ZDtcbn1cbi5jaGF0YnRuIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ViZWRmNDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMGQ3ZGQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxOTZmMztcbn1cblxuLnNlbGVjdHVzZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3203:
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatComponent": () => (/* binding */ ChatComponent)
/* harmony export */ });
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/observable/fromEvent */ 3280);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ 1989);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ 8977);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/operators/map */ 635);
/* harmony import */ var src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/helpers/helpersFunctions */ 8288);
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/storage.service */ 1303);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/FormsHandler/FormsHandler */ 7724);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 8947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/pubsub.service */ 235);
/* harmony import */ var src_app_shared_services_vdk_one2one_call_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/vdk-one2one-call.service */ 2036);
/* harmony import */ var src_app_shared_services_vdk_m2m_call_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/vdk-m2m-call.service */ 618);
/* harmony import */ var src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/base.service */ 2365);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ 4817);


















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
function ChatComponent_ng_container_5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 59)(1, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "No Available ChatRoom");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Tap and hold on any message to star it, so you can easily find it later.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ChatComponent_ng_container_5_ng_container_9_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", group_r43.unReadCount, "");
  }
}
function ChatComponent_ng_container_5_ng_container_9_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](group_r43 == null ? null : group_r43.userTypingContent);
  }
}
function ChatComponent_ng_container_5_ng_container_9_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", group_r43.unReadCount ? "misreadMsg" : "readMsg");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r46.getLastMessage(group_r43), " ");
  }
}
function ChatComponent_ng_container_5_ng_container_9_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", group_r43.Online ? "cardOnlineStatus" : "cardOfflineStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", group_r43.Online ? "Online" : "Offline", " ");
  }
}
function ChatComponent_ng_container_5_ng_container_9_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", group_r43.onlineParticipants + "/" + group_r43.TotalParticipants, " Online ");
  }
}
function ChatComponent_ng_container_5_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_container_5_ng_container_9_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55);
      const group_r43 = restoredCtx.$implicit;
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r54.setActiveChat(group_r43));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 63)(3, "div", 64)(4, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_ng_container_5_ng_container_9_span_6_Template, 2, 1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ChatComponent_ng_container_5_ng_container_9_p_7_Template, 2, 1, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ChatComponent_ng_container_5_ng_container_9_p_8_Template, 2, 2, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 69)(10, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 72)(13, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_container_5_ng_container_9_Template_a_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55);
      const group_r43 = restoredCtx.$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r56.openModal(group_r43));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "EDIT GROUP NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_container_5_ng_container_9_Template_a_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55);
      const group_r43 = restoredCtx.$implicit;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r57.deleteGroup(group_r43));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ChatComponent_ng_container_5_ng_container_9_p_17_Template, 2, 2, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ChatComponent_ng_container_5_ng_container_9_p_18_Template, 2, 1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const group_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](group_r43.chatTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", group_r43.unReadCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", group_r43.userTyping);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !group_r43.userTyping);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", group_r43.auto_created);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !group_r43.auto_created);
  }
}
function ChatComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 53)(2, "h4", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "CHATROOMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h4", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_container_5_Template_h4_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r58.newChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Create +");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_ng_container_5_div_6_Template, 5, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 57)(8, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ChatComponent_ng_container_5_ng_container_9_Template, 19, 6, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.AllGroups.length && !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.AllGroups);
  }
}
function ChatComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "add-group", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("setActiveChat", function ChatComponent_ng_container_6_Template_add_group_setActiveChat_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r60.setchat($event));
    })("changeEvent", function ChatComponent_ng_container_6_Template_add_group_changeEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r62.changeSidebar($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function ChatComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "new-chat", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("setActiveChat", function ChatComponent_ng_container_7_Template_new_chat_setActiveChat_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r64);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r63.setchat($event));
    })("changeEvent", function ChatComponent_ng_container_7_Template_new_chat_changeEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r64);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r65.changeSidebar($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function ChatComponent_img_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_img_19_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r67);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r66.backScreen());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ChatComponent_p_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r4.activeChat.chatTitle, " ");
  }
}
function ChatComponent_ng_container_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](group_r68 == null ? null : group_r68.userTypingContent);
  }
}
function ChatComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_ng_container_24_span_1_Template, 2, 1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const group_r68 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", group_r68.userTyping && group_r68.chatTitle == ctx_r5.activeChat.chatTitle);
  }
}
function ChatComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_25_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r72);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r71.startAudioCall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_25_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r72);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r73.startVideoCall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ChatComponent_div_26_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0, 95);
  }
  if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", ctx_r74.selectedTemplate);
  }
}
function ChatComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 89)(1, "div", 80)(2, "div", 90)(3, "video", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "source", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 93)(6, "video", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "source", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ChatComponent_div_26_ng_container_8_Template, 1, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r7.calling.templateName == "noCall" ? "messagesBox" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r7.calling.templateName == "noCall" ? "" : "callContainer oncall");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r7.isShowRemoteVideo())("ngClass", ctx_r7.isShowRemoteVideo() ? "IncommingVideo VideoCallBlock" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r7.isHideLocalVideo());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.isShowOne2oneCall());
  }
}
function ChatComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0, 95);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.selectedTemplate);
  }
}
function ChatComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0, 95);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r37);
  }
}
function ChatComponent_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_container_31_Template_span_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r75.removeAttachment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r10.fileToSend.name);
  }
}
function ChatComponent_input_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 100, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function ChatComponent_input_32_Template_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r79);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r78.typingmessage($event));
    })("ngModelChange", function ChatComponent_input_32_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r79);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r80.message = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r11.message);
  }
}
function ChatComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 102)(1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_49_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r82);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r81.closeImage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 1, ctx_r13.popupimagesrc), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 102)(1, "div", 105)(2, "div", 106)(3, "div", 107)(4, "p", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Edit group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_50_Template_img_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r84);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r83.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 110)(8, "form", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function ChatComponent_div_50_Template_form_submit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r84);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r85.editGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Name your group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 113)(12, "form-errors", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_50_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r84);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r86.editGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " DONE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r14.groupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx_r14.groupForm.get("group_title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r14.loading);
  }
}
function ChatComponent_ng_template_51_ng_container_0_ng_container_1_h4_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h4", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chat_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](chat_r90.messageBy);
  }
}
function ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 124)(1, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chat_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](chat_r90.content);
  }
}
function ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_5_mat_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-spinner", 129);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 30);
  }
}
function ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_5_mat_spinner_1_Template, 1, 1, "mat-spinner", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_5_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r101);
      const chat_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r99.openImage(chat_r90.content));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chat_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !chat_r90.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, chat_r90.content), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_6_mat_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-spinner", 129);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 30);
  }
}
function ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const chat_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r104.checkFileType(chat_r90.content), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, chat_r90.content), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_6_mat_spinner_1_Template, 1, 1, "mat-spinner", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_6_ng_container_2_Template, 5, 4, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chat_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !chat_r90.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", chat_r90.content);
  }
}
function ChatComponent_ng_template_51_ng_container_0_ng_container_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Read ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function ChatComponent_ng_template_51_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChatComponent_ng_template_51_ng_container_0_ng_container_1_h4_2_Template, 2, 1, "h4", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_4_Template, 3, 1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_5_Template, 4, 4, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_ng_template_51_ng_container_0_ng_container_1_div_6_Template, 3, 2, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ChatComponent_ng_template_51_ng_container_0_ng_container_1_ng_container_8_Template, 3, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const chat_r90 = ctx.$implicit;
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", chat_r90.from == ctx_r89.currentUserName ? "senderChatContainer" : "receiverChatContainer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", chat_r90.from != ctx_r89.currentUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", chat_r90.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", chat_r90.type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", chat_r90.type != "text" && chat_r90.type != "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", chat_r90.readCount && chat_r90.from == ctx_r89.currentUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](11, 7, chat_r90.date, "shortTime"), "");
  }
}
function ChatComponent_ng_template_51_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_ng_template_51_ng_container_0_ng_container_1_Template, 12, 10, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r87.activeChat["chatHistory"]);
  }
}
function ChatComponent_ng_template_51_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 133)(1, "div", 134)(2, "div", 135)(3, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "div")(5, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 138)(7, "p", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "No Conversation Yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Tap and hold on any message to star it, so you can easily find it later. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 141)(12, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_51_div_1_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r108);
      const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r107.newChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " NEW CHAT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_51_div_1_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r108);
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r109.getAllGroups());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " REFRESH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
}
function ChatComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ChatComponent_ng_template_51_ng_container_0_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_ng_template_51_div_1_Template, 16, 0, "div", 116);
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r16.activeChat.chatTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r16.activeChat.chatTitle && !ctx_r16.loading);
  }
}
function ChatComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Incoming Call");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "audio", 146)(5, "img", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 148)(7, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_53_Template_img_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r111);
      const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r110.stopCall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_53_Template_img_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r111);
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r112.acceptcall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r18.calling["callerName"]);
  }
}
function ChatComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Calling");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 148)(6, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_55_Template_img_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r114);
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r113.stopCall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_55_Template_img_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r114);
      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r115.changeSettings("isOnInProgressMicrophone"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r20.calling["callerName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "./assets/images/microphone-", ctx_r20.settings.isOnInProgressMicrophone ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "formatTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 148)(7, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_57_Template_img_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r117);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r116.stopCall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_57_Template_img_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r117);
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r118.changeSettings("isOnInProgressMicrophone"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, ctx_r22.callTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r22.calling["callerName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "./assets/images/microphone-", ctx_r22.settings.isOnInProgressMicrophone ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "audio", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Incoming Call");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 155)(7, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_59_Template_img_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r120);
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r119.stopCall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_59_Template_img_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r120);
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r121.acceptcall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r24.calling["callerName"]);
  }
}
function ChatComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Calling ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 156)(6, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_61_Template_img_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r123);
      const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r122.changeSettings("isOnInProgressCamara"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_61_Template_img_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r123);
      const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r124.stopCall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_61_Template_img_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r123);
      const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r125.changeSettings("isOnInProgressMicrophone"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r26.calling["callerName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "./assets/images/video-call-", ctx_r26.settings.isOnInProgressCamara ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "./assets/images/microphone-", ctx_r26.settings.isOnInProgressMicrophone ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "formatTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 156)(7, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_63_Template_img_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r127);
      const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r126.changeSettings("isOnInProgressCamara"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_63_Template_img_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r127);
      const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r128.stopCall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_63_Template_img_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r127);
      const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r129.changeSettings("isOnInProgressMicrophone"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "img", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_63_Template_img_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r127);
      const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r130.setChatDuringCall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 4, ctx_r28.callTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r28.calling["callerName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "./assets/images/video-call-", ctx_r28.settings.isOnInProgressCamara ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "./assets/images/microphone-", ctx_r28.settings.isOnInProgressMicrophone ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 159)(1, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "audio", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Incomming Call From");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 156)(9, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_65_Template_img_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r132);
      const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r131.acceptcall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_65_Template_img_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r132);
      const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r133.stopCall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_65_Template_img_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r132);
      const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r134.changeSettings("isOnInProgressMicrophone"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r30.calling.callerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "./assets/images/microphone-", ctx_r30.settings.isOnInProgressMicrophone ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 159)(1, "div", 160)(2, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Calling");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 148)(8, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_67_Template_img_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r136);
      const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r135.stopCall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_67_Template_img_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r136);
      const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r137.changeSettings("isOnInProgressMicrophone"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r32.calling.callerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "./assets/images/microphone-", ctx_r32.settings.isOnInProgressMicrophone ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_ng_template_69_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 172)(1, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "audio", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " /> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r139 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](user_r139.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", user_r139.ref_id);
  }
}
function ChatComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 161)(1, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "formatTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 162)(5, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_ng_template_69_div_6_Template, 7, 2, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 165)(8, "div", 166)(9, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "img", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "p", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "audio", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " /> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 171)(16, "div", 148)(17, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_69_Template_img_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r141);
      const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r140.stopCall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_69_Template_img_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r141);
      const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r142.changeSettings("isOnInProgressMicrophone"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "img", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_69_Template_img_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r141);
      const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r143.setChatDuringCall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 4, ctx_r34.callTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r34.calling.participant);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r34.currentUserData.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "./assets/images/microphone-", ctx_r34.settings.isOnInProgressMicrophone ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 159)(1, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "audio", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Incomming Call From");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 156)(9, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_71_Template_img_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r145);
      const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r144.acceptcall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_71_Template_img_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r145);
      const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r146.stopCall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_71_Template_img_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r145);
      const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r147.changeSettings("isOnInProgressMicrophone"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r36.calling.callerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "./assets/images/microphone-", ctx_r36.settings.isOnInProgressMicrophone ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_ng_template_73_ng_container_1_ng_container_1_h4_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h4", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chat_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](chat_r151.messageBy);
  }
}
function ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 124)(1, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chat_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](chat_r151.content);
  }
}
function ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_5_mat_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-spinner", 129);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 30);
  }
}
function ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_5_mat_spinner_1_Template, 1, 1, "mat-spinner", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_5_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r162);
      const chat_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r160.openImage(chat_r151.content));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chat_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !chat_r151.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, chat_r151.content), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_6_mat_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-spinner", 129);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 30);
  }
}
function ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const chat_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r165.checkFileType(chat_r151.content), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, chat_r151.content), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_6_mat_spinner_1_Template, 1, 1, "mat-spinner", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_6_ng_container_2_Template, 5, 4, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chat_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !chat_r151.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", chat_r151.content);
  }
}
function ChatComponent_ng_template_73_ng_container_1_ng_container_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Read ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function ChatComponent_ng_template_73_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChatComponent_ng_template_73_ng_container_1_ng_container_1_h4_2_Template, 2, 1, "h4", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_4_Template, 3, 1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_5_Template, 4, 4, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_ng_template_73_ng_container_1_ng_container_1_div_6_Template, 3, 2, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ChatComponent_ng_template_73_ng_container_1_ng_container_1_ng_container_8_Template, 3, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const chat_r151 = ctx.$implicit;
    const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", chat_r151.from == ctx_r150.currentUserName ? "senderChatContainer" : "receiverChatContainer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", chat_r151.from != ctx_r150.currentUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", chat_r151.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", chat_r151.type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", chat_r151.type != "text" && chat_r151.type != "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", chat_r151.readCount && chat_r151.from == ctx_r150.currentUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](11, 7, chat_r151.date, "shortTime"), "");
  }
}
function ChatComponent_ng_template_73_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_ng_template_73_ng_container_1_ng_container_1_Template, 12, 10, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r148.activeChat["chatHistory"]);
  }
}
function ChatComponent_ng_template_73_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 133)(1, "div", 134)(2, "div", 135)(3, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "div")(5, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 138)(7, "p", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "No Conversation Yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Tap and hold on any message to star it, so you can easily find it later. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 141)(12, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_73_div_2_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r169);
      const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r168.newChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " NEW CHAT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_73_div_2_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r169);
      const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r170.getAllGroups());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " REFRESH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
}
function ChatComponent_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_ng_template_73_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChatComponent_ng_template_73_div_2_Template, 16, 0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r38.activeChat.chatTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r38.activeChat.chatTitle && !ctx_r38.loading);
  }
}
function ChatComponent_ng_template_75_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 183)(1, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Calling");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r171.calling.callerName);
  }
}
function ChatComponent_ng_template_75_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 172)(1, "div", 167)(2, "div", 184)(3, "video", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "source", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r173 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", user_r173.ref_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](user_r173.full_name);
  }
}
function ChatComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r175 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 175)(1, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "formatTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 176)(5, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_ng_template_75_div_6_Template, 5, 1, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ChatComponent_ng_template_75_div_7_Template, 8, 2, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 178)(9, "div", 166)(10, "div", 179)(11, "div", 180)(12, "video", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "source", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "img", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "p", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 171)(19, "div", 156)(20, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_75_Template_img_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r175);
      const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r174.changeSettings("isOnInProgressCamara"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_75_Template_img_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r175);
      const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r176.stopCall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_75_Template_img_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r175);
      const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r177.changeSettings("isOnInProgressMicrophone"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "img", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_ng_template_75_Template_img_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r175);
      const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r178.setChatDuringCall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 9, ctx_r40.callTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r40.groupOutgoingVideoCall ? "noCallBackground" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r40.groupOutgoingVideoCall);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r40.calling.participant);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r40.groupOutgoingVideoCall ? "noCallBackground" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r40.groupOutgoingVideoCall ? "groupVideoCallWrapper_noCall " : "groupVideoCallWrapper_Call");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r40.currentUserData.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "./assets/images/video-call-", ctx_r40.settings.isOnInProgressCamara ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "./assets/images/microphone-", ctx_r40.settings.isOnInProgressMicrophone ? "on.png" : "off.png", "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
class ChatComponent {
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
    this.currentUserName = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getAuthUsername();
    this.currentUserData = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getUserData();
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
      callType: 'video',
      templateName: 'noCall',
      callerName: '',
      from: "",
      session: "",
      uuid: ""
    };
    this.settings = {
      isOnInProgressCamara: true,
      isOnInProgressMicrophone: true
    };
    this.groupForm = this._fb.group({
      'group_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      'group_title': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(100)])
    }, {
      updateOn: 'change'
    });
    this.pubsubService.initConfigure();
    this.vdkOne2OneCallSVC.initConfigure();
    // this.vdkM2MCallSVC.initConfigure();
  }

  ngOnInit() {
    this.pubsubService.Client.on("connect", response => {
      console.log("connect", response);
      this.sdkconnected = true;
      if (!this.AllGroups.length) {
        this.getAllGroups();
      }
    });
    this.pubsubService.Client.on("disconnect", response => {
      console.log("disconnect", response);
      this.sdkconnected = false;
    });
    this.vdkOne2OneCallSVC.Client.on("register", response => {
      console.log("register response", response);
    });
    this.vdkOne2OneCallSVC.Client.on("connected", response => {
      this.sdkconnected = true;
      console.log("connected response", response);
    });
    this.vdkOne2OneCallSVC.Client.on("call", response => {
      console.log("call response", response);
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
          this.calling.templateName = response.callType == 'video' ? 'incommingVideoCall' : 'incommingAudioCall';
          this.calling.callType = response.callType;
          this.calling.uuid = response.uuid;
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
            this.calling.templateName = this.calling.callType == 'video' ? 'VideoCallInProgress' : 'AudioCallInProgress';
            this.startWatch();
            this.changeDetector.detectChanges();
          }
          break;
        case "CALL_STATUS":
          const displaystyle = response.video_status ? 'block' : 'none';
          const callerHolderstyle = response.video_status ? 'none' : 'block';
          if (document.getElementById('remoteVideo')) document.getElementById('remoteVideo').style.display = displaystyle;
          if (document.getElementById('callerHolder')) document.getElementById('callerHolder').style.display = callerHolderstyle;
          break;
        case "REMOTE_STREAM":
          this.addParticipant(response, 1);
          break;
      }
    });
    // this.vdkM2MCallSVC.Client.on("connected", responses => {
    //   console.error("m2m connected response", response);
    // });
    this.vdkOne2OneCallSVC.Client.on("groupCall", response => {
      console.log("groupCall response", response);
      switch (response.type) {
        case "CALL_RECEIVED":
          this.screen = 'MAIN';
          this.calling.callerName = this.findUserName(response.from);
          this.calling.templateName = response.callType == 'video' ? 'groupIncommingVideoCall' : 'groupIncommingAudioCall';
          this.calling.callType = response.callType;
          this.changeDetector.detectChanges();
          break;
        case "NEW_PARTICIPANT":
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
          if (document.getElementById(response.participant)) document.getElementById(response.participant).style.display = displaystyle;
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
    this.pubsubService.Client.on("authentication_error", res => {
      console.log("authentication_error", res);
    });
    this.pubsubService.Client.on("offline", response => {
      console.log("offline", response);
      this.setOfflineStatus(response);
    });
    this.pubsubService.Client.on("online", response => {
      console.log("online", response);
      this.setOnlineStatus(response);
    });
    this.pubsubService.Client.on("message", response => {
      response = JSON.parse(JSON.stringify(response));
      //console.trace("new message", response);
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
      } else if (response.type == 'typing') {
        this.setUserTyping(response);
      } else if (response.receiptType == 3) {
        let chName = response.topic || response.to;
        if (response.to != undefined) chName = response.to;
        const chatthread = this.findChatThread(chName);
        let message = (0,src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_0__.FindArrayObject)(chatthread.chatHistory, 'id', response.messageId);
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
      (0,rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_9__.fromEvent)(this.messageInputElement.nativeElement, 'input').pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_10__.map)(event => event.target.value), (0,rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(3000), (0,rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__.distinctUntilChanged)()).subscribe(data => {
        const sendMessage = {
          status: 0,
          size: 0,
          type: "typing",
          isGroupMessage: false,
          from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getAuthUsername(),
          content: '0',
          id: new Date().getTime().toString(),
          key: this.activeChat.channel_key,
          to: this.activeChat.channel_name,
          date: new Date().getTime()
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
      condition: "contains"
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
      } else {
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
    src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_2__["default"].validateForm(this.groupForm);
    console.log("this.groupForm.", this.groupForm.invalid);
    if (this.groupForm.invalid || this.loading) return;
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
        console.log("this.activeChat.chatTitle", this.activeChat);
        if (!this.activeChat.chatTitle) {
          this.activeChat = this.AllGroups.length ? this.AllGroups['0'] : {};
        }
        if (this.setToActive) {
          const indexchat = this.AllGroups.find(group => group.id == this.setToActive);
          this.activeChat = indexchat ? indexchat : this.AllGroups['0'];
          this.setToActive = null;
        }
        this.isActiveThread = true;
        console.log("this.activeChat.chatTitle", this.activeChat);
        this.pubsubService.subscribeToChat(this.AllGroups);
      }
      setTimeout(() => {
        this.sortThread();
      }, 500);
      this.changeDetector.detectChanges();
    });
  }
  checkFileType(content) {
    let preview = content.includes('text/plain') ? './assets/images/txt.png' : content.includes('/pdf') ? './assets/images/pdf.png' : content.includes('/json') ? './assets/images/json.png' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Icon-doc.svg/810px-Icon-doc.svg.png';
    if (content.includes('video/')) preview = './assets/images/video.png';
    if (content.includes('audio/')) preview = './assets/images/audio.png';
    return preview;
  }
  fileType(content) {
    return content.split(";")[0].split(":")[1];
  }
  findChatThread(channel) {
    return (0,src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_0__.FindArrayObject)(this.AllGroups, 'channel_name', channel);
  }
  setActiveChat(group) {
    console.log("clicke");
    this.isActiveThread = group.id == this.activeChat.id;
    if (!this.isActiveThread) this.message = '';
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
    if (response.from == this.currentUserName || !isActiveThread) return;
    const chatobj = {
      messageId: response.id,
      receiptType: 3,
      from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getAuthUsername(),
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
        from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getAuthUsername(),
        key: chat.key,
        to: chat.to,
        date: new Date().getTime()
      };
      return chatobj;
    });
    if (unreadchatHistory.length) this.pubsubService.readMessage(unreadchatHistory);
    chatHistory = chatHistory.map(chat => {
      chat.isRead = true;
      return chat;
    });
  }
  handleFileInput(files) {
    this.fileToSend = files.item(0);
  }
  invalidSize() {
    return this.fileToSend.size / 1024 > 6144;
  }
  removeAttachment() {
    this.fileToSend = null;
  }
  getFileType(fileR) {
    let type = "file";
    const filetype = fileR.type;
    if (filetype.includes('image')) type = "image";else if (filetype.includes('audio')) type = "audio";else if (filetype.includes('video')) type = "video";
    return type;
  }
  sendTextMessage() {
    if (!/\S/.test(this.message) && !this.fileToSend) {
      return;
    } else if (this.message.length > 400) {
      this.toastr.error("Message can not be more than 400 characters", "Opps!");
      return;
    } else if (this.fileToSend && this.invalidSize()) {
      this.toastr.error("The maximum size of file should be 6MBs.", "Opps!");
      this.fileToSend = null;
      return;
    }
    this.scroll();
    if (!this.message && !this.fileToSend) return;
    if (this.fileToSend) {
      var option = {
        id: new Date().getTime().toString(),
        from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getAuthUsername(),
        topic: this.activeChat.channel_name,
        to: this.activeChat.channel_name,
        key: this.activeChat.channel_key,
        type: this.getFileType(this.fileToSend),
        date: new Date().getTime()
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
    if (!this.message) return;
    const sendMessage = {
      status: 1,
      size: 0,
      type: "text",
      isGroupMessage: false,
      from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getAuthUsername(),
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
      from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.getAuthUsername(),
      content: "1",
      id: new Date().getTime().toString(),
      key: this.activeChat.channel_key,
      to: this.activeChat.channel_name,
      date: new Date().getTime()
    };
    this.pubsubService.sendMessage(sendMessage);
  }
  setOnlineStatusforSubscribe(response) {
    const indexchat = this.findChatThread(response.channel);
    if (indexchat) {
      let onlineNumbers = [...new Set(response.who.map(n => n.username))];
      indexchat['onlineParticipants'] = onlineNumbers && onlineNumbers.length || 1;
      if (indexchat && indexchat.auto_created) indexchat['Online'] = onlineNumbers.length > 1;
    }
    this.changeDetector.detectChanges();
  }
  setOnlineStatus(response) {
    let indexchat = this.findChatThread(response.channel);
    if (!indexchat) return;
    if (indexchat.auto_created) indexchat['Online'] = true;
    if (!indexchat.auto_created) {
      indexchat['onlineParticipants'] = indexchat['onlineParticipants'] < indexchat['TotalParticipants'] ? indexchat['onlineParticipants'] + 1 : indexchat['onlineParticipants'];
    }
    this.changeDetector.detectChanges();
  }
  setOfflineStatus(response) {
    const indexchat = this.findChatThread(response.channel);
    if (indexchat && indexchat.auto_created) indexchat['Online'] = false;
    if (!indexchat.auto_created) {
      indexchat['onlineParticipants'] = indexchat['onlineParticipants'] > 2 ? indexchat['onlineParticipants'] - 1 : 1;
    }
    this.changeDetector.detectChanges();
  }
  setUserTyping(response) {
    if (response.from == this.currentUserData.ref_id) return;
    let indexchat = (0,src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_0__.FindArrayObject)(this.AllGroups, 'channel_name', response.to);
    let typinguser = indexchat["participants"].find(e => e.ref_id == response.from);
    if (response.content == '1') {
      indexchat['TypingUserList'] = indexchat['TypingUserList'] || [];
      indexchat['TypingUserList'] = [...new Set([typinguser])];
    } else if (response.content == '0') {
      indexchat['TypingUserList'] = indexchat['TypingUserList'].filter(e => e.ref_id != response.from);
    }
    indexchat['userTyping'] = indexchat['TypingUserList'].length && response.content != '0';
    let nameList = indexchat['TypingUserList'].map(userObj => userObj.full_name);
    if (nameList.length == 1) {
      indexchat['userTypingContent'] = nameList + ' ' + 'is typing...';
    } else if (nameList.length == 2) {
      indexchat['userTypingContent'] = nameList.join() + ' ' + 'are typing...';
    } else if (nameList.length > 2) {
      indexchat['userTypingContent'] = nameList.filter((i, j) => j < 2).join() + ' ' + 'and other are typing...';
    }
    this.changeDetector.detectChanges();
  }
  setMultiUserTyping(response, typinguser, indexchat) {
    if (response.content == '1') {
      indexchat['TypingUserList'] = [...new Set(typinguser)];
    } else if (response.content == '0') {
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
    src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService.clearLocalStorge();
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
      const messageByObj = (0,src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_0__.FindArrayObject)(chatthread.participants, 'ref_id', response.from);
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
    } else {
      var foundIndex = thread.chatHistory.findIndex(x => x.id == response.id);
      thread.chatHistory[foundIndex] = response;
    }
  }
  getLastMessage(group) {
    const isactivethread = group.id == this.activeChat.id;
    if (!isactivethread && group.unReadCount) {
      return "Misread messages";
    } else if (group.type != 'text') {
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
    const user = (0,src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_0__.FindArrayObject)(this.CopyAllUsers, 'ref_id', ref_id);
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
      callType: 'video',
      templateName: 'noCall',
      callerName: '',
      from: "",
      session: "",
      uuid: ""
    };
    this.callTime = 0;
    this.screen = 'LISTING';
    if (this.countDownTime) {
      this.countDownTime.unsubscribe();
    }
    if (document.getElementById('OutgoingVideo')) document.getElementById('OutgoingVideo').style.display = 'block';
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
    console.log("stopCall");
  }
  inCall() {
    return this.calling.templateName != 'noCall';
  }
  startVideoCall() {
    this.resetCall();
    if (this.activeChat.auto_created) {
      this.startOne2OneVideoCall();
    } else {
      this.startM2MVideoCall();
    }
  }
  startOne2OneVideoCall() {
    if (this.inCall()) return;
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
      audio: 1,
      video: 1
    };
    this.vdkOne2OneCallSVC.Call(params);
  }
  startM2MVideoCall() {
    if (this.inCall()) return;
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
      callType: "video",
      localVideo: document.getElementById("localVideo"),
      to: [...p],
      video: 1,
      audio: 1,
      //timeout: 40,
      isPeer: 0
    };
    this.vdkOne2OneCallSVC.groupCall(params);
  }
  acceptcall() {
    console.log("acceptcall");
    if (this.calling.session == 'one_to_one') {
      console.log("acceptcall one_to_one");
      this.acceptOne2oneCall();
    } else {
      console.log("acceptcall acceptM2MCall");
      this.acceptM2MCall();
    }
  }
  acceptOne2oneCall() {
    this.vdkOne2OneCallSVC.acceptCall({
      localVideo: document.getElementById("localVideo"),
      remoteVideo: document.getElementById("remoteVideo"),
      sessionUUID: this.calling.uuid,
      audio: 1,
      video: this.calling.callType == 'video'
    });
    this.changeDetector.detectChanges();
    this.calling.templateName = this.calling.callType == 'video' ? 'VideoCallInProgress' : 'AudioCallInProgress';
    this.startWatch();
    this.ongoingCall = true;
    this.changeDetector.detectChanges();
  }
  acceptM2MCall() {
    if (this.isM2MProgressCall()) return;
    this.ongoingCall = true;
    this.calling.templateName = this.calling.callType == 'video' ? 'groupVideoCall' : 'groupOngoingAudioCall';
    this.changeDetector.detectChanges();
    const params = {
      localVideo: document.getElementById("localVideo"),
      callType: this.calling.callType
    };
    this.startWatch();
    this.changeDetector.detectChanges();
    this.groupOutgoingVideoCall = false;
    this.vdkOne2OneCallSVC.joinGroupCall(params);
    this.changeDetector.detectChanges();
  }
  startWatch() {
    //console.trace()
    if (!this.callTime) {
      this.countDownTime = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.timer)(0, 1000).subscribe(() => ++this.callTime);
    }
  }
  startAudioCall() {
    if (this.activeChat.auto_created) {
      this.startone2oneAudioCall();
    } else {
      this.startm2mAudioCall();
    }
  }
  startone2oneAudioCall() {
    if (this.inCall()) return;
    const participantsList = this.getChatParticipants();
    if (!participantsList.length) {
      this.toastr.error('Please select someone to call!', 'Opps!');
      return;
    }
    this.calling.session = 'one_to_one';
    this.calling.callType = 'audio';
    this.ongoingCall = true;
    this.screen = 'MAIN';
    this.calling.templateName = 'outgoingAudioCall';
    this.calling.callerName = this.activeChat.chatTitle ? this.activeChat.chatTitle : this.activeChat.group_title;
    const params = {
      localVideo: document.getElementById("localVideo"),
      remoteVideo: document.getElementById("remoteVideo"),
      to: [...participantsList],
      data: {
        calleName: this.currentUserData.full_name
      }
    };
    this.vdkOne2OneCallSVC.audioCall(params);
  }
  startm2mAudioCall() {
    if (this.inCall()) return;
    const participants = this.getChatParticipants();
    if (!participants.length) {
      this.toastr.error('Please select someone to call!', 'Opps!');
      return;
    }
    this.calling.callType = 'audio';
    this.ongoingCall = true;
    this.screen = 'MAIN';
    this.calling.templateName = 'groupOutgoingAudioCall';
    this.calling['callerName'] = this.activeChat.chatTitle;
    const params = {
      callType: "audio",
      localVideo: document.getElementById("localAudio"),
      to: [...participants],
      video: 0,
      audio: 1,
      timeout: 40,
      isPeer: 0
    };
    this.vdkOne2OneCallSVC.groupCall(params);
  }
  changeSettings(filed) {
    if (this.calling.session == 'one_to_one') {
      this.changeOne2OneSettings(filed);
    } else {
      this.changeM2MSettings(filed);
    }
  }
  changeOne2OneSettings(filed) {
    this.settings[filed] = !this.settings[filed];
    switch (filed) {
      case 'isOnInProgressCamara':
        this.settings[filed] ? this.vdkOne2OneCallSVC.setCameraOn() : this.vdkOne2OneCallSVC.setCameraOff();
        const displaystyle = this.settings[filed] ? 'block' : 'none';
        if (document.getElementById('OutgoingVideo')) document.getElementById('OutgoingVideo').style.display = displaystyle;
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
    return this.calling.templateName != 'VideoCallInProgress' && this.calling.callType != 'video';
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
  addParticipant(response, fromRemoteStream = 0) {
    this.calling.templateName = this.calling.callType == 'video' ? 'groupVideoCall' : 'groupOngoingAudioCall';
    this.groupOutgoingVideoCall = false;
    const user = this.AllUsers.find(user => user.ref_id == response.participant);
    if (!this.calling.participant.includes(user)) {
      this.calling.participant.push(user);
    }
    this.changeDetector.detectChanges();
    setTimeout(() => {
      this.changeDetector.detectChanges();
      const user = this.findUserName(response.participant);
      const textmsg = user + ' ' + 'has joined';
      this.toastr.success(textmsg);
      if (fromRemoteStream) {
        //Peer to Peer Call
        let video = document.getElementById(response.participant);
        if (video) {
          video.srcObject = response.stream[response.participant].stream[0];
        } else {
          console.error("Video Element not found to set remote stream for", response.participant);
        }
      } else {
        //Media server call
        this.vdkOne2OneCallSVC.setParticipantVideo(response.participant, document.getElementById(response.participant));
      }
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
  static #_ = this.ɵfac = function ChatComponent_Factory(t) {
    return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_3__.PubsubService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_vdk_one2one_call_service__WEBPACK_IMPORTED_MODULE_4__.VdkOne2OneCallService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_vdk_m2m_call_service__WEBPACK_IMPORTED_MODULE_5__.VdkM2MCallService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_6__.BaseService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_15__.MatLegacyDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ChatComponent,
    selectors: [["chat"]],
    viewQuery: function ChatComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c9, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c10, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c11, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c12, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c13, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.noCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.chatDuringCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.incommingAudioCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.outgoingAudioCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.AudioCallInProgress = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.incommingVideoCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.outgoingVideoCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.VideoCallInProgress = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.groupIncommingAudioCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.groupOutgoingAudioCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.groupOngoingAudioCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.groupIncommingVideoCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.groupVideoCall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.messageInputElement = _t.first);
      }
    },
    decls: 77,
    vars: 19,
    consts: [[1, "row", "dashboardContainer"], [1, "col-sm-4", "leftSide", 3, "hidden"], [1, "leftSideHeader"], ["src", "./assets/images/logo2.png", 1, "dashboardLogo"], [1, "leftSideListContainer"], [4, "ngIf"], [1, "leftSideFooter"], [1, "logoutContainer", 3, "click"], ["src", "./assets/images/log-out.png", 1, "logoutLogo"], [1, "logoutText"], [1, "ml-1", 3, "ngClass"], [1, "col-sm-8", "rightSide", 3, "hidden"], [1, "rightSideHeader", "alignBottom", "chatholder"], [1, "d-flex"], [2, "display", "flex", "flex-direction", "row", "align-items", "center"], [2, "display", "flex", "flex-direction", "column"], ["src", "./assets/images/arrow-left.png", "class", "arrowLeft hand", 3, "click", 4, "ngIf"], ["id", "roomNameText", "class", "roomNameText text-capitalize", 4, "ngIf"], ["id", "returnedtocall", 1, "btn", "btn-success", 2, "display", "none", "align-items", "center", "height", "30px", "margin", "auto", 3, "click"], [2, "margin", "0px", "padding", "0px", "border", "0"], [4, "ngFor", "ngForOf"], ["id", "messagesBox", "class", "messagesBox", 3, "ngClass", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], ["id", "sendInputContainer", 1, "sendInputContainer", 3, "hidden"], [1, "sendInputWrapper"], ["type", "text", "class", "form-control", "placeholder", "Type to reply..", 3, "ngModel", "keyup", "ngModelChange", 4, "ngIf"], [1, "sendInputButtonContainer", "dropup", 2, "border-right", "1px solid #ebedf4"], ["src", "./assets/images/attachment.png", "data-toggle", "dropdown", 1, "sendIcon", "dropdown-toggle"], [1, "attachmentpopup", "dropdown-menu", "dropdown-menu-right", "selectOptionContainer"], [1, "attachmentPopHeader", "mx-3"], [1, "attachmentHeading"], [1, "attachmentPopContent", 3, "click"], [1, "attachmentTool"], [1, "attachmentToolIcon"], ["src", "./assets/images/Document.png", 1, "attachmentItemIcon"], ["type", "file", "id", "fileinput", 1, "d-none", 3, "change"], ["fileuploader", ""], [1, "sendInputButtonContainer", 3, "click"], ["src", "./assets/images/send.png", 1, "sendIcon"], ["id", "myModal", "class", "modal", 4, "ngIf"], ["noCall", ""], ["incommingAudioCall", ""], ["outgoingAudioCall", ""], ["AudioCallInProgress", ""], ["incommingVideoCall", ""], ["outgoingVideoCall", ""], ["VideoCallInProgress", ""], ["groupIncommingAudioCall", ""], ["groupOutgoingAudioCall", ""], ["groupOngoingAudioCall", ""], ["groupIncommingVideoCall", ""], ["chatDuringCall", ""], ["groupVideoCall", ""], [1, "leftSectionHeader", 2, "align-items", "center", "margin", "0px"], [1, "leftHeading"], [1, "createText", 3, "click"], ["class", "leftSectionEmptyContainer", 4, "ngIf"], [1, "listingContainer", "fullHeight"], [1, "chatListContainer", "noHorizontalPadding"], [1, "leftSectionEmptyContainer"], [1, "noAvailableText"], [1, "tapText"], [1, "chatsCardContainer", "hand", 3, "click"], [1, "chatsCardLeft"], [1, "chatsNameWrap"], [1, "chatName", "text-capitalize"], ["class", "unreadBadge", 4, "ngIf"], ["class", "misreadMsg", 4, "ngIf"], ["class", "misreadMsg text-capitalize", 3, "ngClass", 4, "ngIf"], [1, "chatsCardRight", "mr-1"], [1, "dropdown", "mt-1", 2, "align-self", "flex-end"], ["src", "./assets/images/more.png", 1, "moreIcon"], [1, "dropdown-content"], [1, "edit", 3, "click"], [1, "delete", 3, "click"], [3, "ngClass", 4, "ngIf"], ["class", "cardOnlineStatus", 4, "ngIf"], [1, "unreadBadge"], [1, "misreadMsg"], [1, "misreadMsg", "text-capitalize", 3, "ngClass"], [3, "ngClass"], [1, "cardOnlineStatus"], [3, "setActiveChat", "changeEvent"], ["src", "./assets/images/arrow-left.png", 1, "arrowLeft", "hand", 3, "click"], ["id", "roomNameText", 1, "roomNameText", "text-capitalize"], ["type", "submit", 1, "btn", "callButton", "mr-1", 3, "click"], ["src", "./assets/images/call.png", 1, "callIcon"], ["type", "submit", 1, "btn", "broadcastButton", 3, "click"], ["src", "./assets/images/video-call.png", 1, "callIcon"], ["id", "messagesBox", 1, "messagesBox", 3, "ngClass"], [1, "IncommingVideo", "VideoCallBlock", 2, "pointer-events", "none", 3, "hidden", "ngClass"], ["id", "remoteVideo", "muted", "", "autoplay", "", "poster", "./assets/images/vidd.mp4", 1, "IncommingVideo", 2, "object-fit", "fill", "position", "absolute", "left", "0"], ["src", "", "type", "video/mp4"], ["id", "OutgoingVideo", 1, "OutgoingVideo", "VideoCallBlock", 3, "hidden"], ["draggable", "true", "id", "localVideo", "muted", "", "autoplay", "", 1, "w-100", 2, "object-fit", "fill"], [3, "ngTemplateOutlet"], [1, "w-100"], ["src", "./assets/images/Document.png", 1, "attachmentItemIcon", "ml-4"], [1, "ml-2"], [1, "font-weight-bolder", "hand", "ml-2", "text-danger", 3, "click"], ["type", "text", "placeholder", "Type to reply..", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["messageInputElement", ""], ["id", "myModal", 1, "modal"], [1, "close", 3, "click"], ["id", "img01", 1, "modal-content", 3, "src"], [1, "createChatPopup"], [1, "chatPopupContent", "groupPopup"], [1, "modalHeader"], [1, "modalHeading"], ["src", "./assets/images/cross.png", 1, "modalCross", "hand", 3, "click"], [1, "modalContent"], [1, "w-100", 3, "formGroup", "submit"], [1, "modalContentHeading"], ["type", "text", "placeholder", "ex: Deeper team", "formControlName", "group_title", 1, "form-control"], [3, "control"], ["type", "submit", 1, "btn", "doneButton", "mt-3", 3, "disabled", "click"], ["class", "chatRoomContainer", 4, "ngIf"], ["class", "msgBy text-capitalize", 4, "ngIf"], [1, "bubbleContainer"], ["class", "bubble", 4, "ngIf"], ["class", "imgbubble", 4, "ngIf"], ["class", "imgbubble file-attachment", 4, "ngIf"], [1, "time"], [1, "msgBy", "text-capitalize"], [1, "bubble"], [1, "msgText"], [1, "imgbubble"], [3, "diameter", 4, "ngIf"], [1, "w-100", "msgImage", "img-thumbnail", "img-fluid", 3, "src", "click"], [3, "diameter"], [1, "imgbubble", "file-attachment"], [1, "w-100", "msgImage", "thumbnail", "img-fluid", 3, "src"], ["download", "", 3, "href"], [1, "chatRoomContainer"], [1, "listingContainer", 2, "height", "100%"], [1, "emptyListContainer"], [1, "emptyListTop"], ["src", "./assets/images/shipping.png", 1, "shippingIcon"], [1, "noConvoTextWrapper"], [1, "noConvoText"], [1, "noConvoSub", 2, "max-width", "200px"], [1, "emptyListBottom"], ["type", "submit", 1, "btn", "newChatButton", 3, "click"], ["type", "submit", 1, "btn", "refreshButton", 3, "click"], [1, "callContainerStatus"], [1, "callerName", "text-capitalize"], ["id", "Incomingaudio", "autoplay", "", "src", "./assets/images/calling_you.mp3", "preload", "auto"], ["src", "./assets/images/audio.png", 1, "audioIcon"], [1, "callButtonsContainer", 2, "width", "150px"], ["src", "./assets/images/decline-button.png", 1, "responseButtonImg", 3, "click"], ["src", "./assets/images/Accept-button.png", 1, "responseButtonImg", 3, "click"], ["src", "./assets/images/blue-avatar.png", 1, "avatarIcon"], [1, "responseButtonImg", 3, "src", "click"], [1, "settingsIcon", "callContainerStatus", "white", "m-3"], ["id", "audiotag1", "autoplay", "", "src", "./assets/images/calling_you.mp3", "preload", "auto"], [1, "callButtonsContainer", 2, "width", "140px"], [1, "callButtonsContainer", 2, "width", "200px"], ["id", "callerHolder", 1, "callerName", "text-capitalize"], ["src", "./assets/images/chat1.png", 1, "callicon", 2, "z-index", "10000", "cursor", "pointer", 3, "click"], ["id", "messagesBox", 1, "messagesBox"], [1, "callContainer"], [1, "messagesBox", "noPadding", 2, "border-radius", "0px"], [1, "groupCallContainer"], [1, "upperVideoContainer"], ["class", "singleParticipantContainer", 4, "ngFor", "ngForOf"], [1, "bottomVideoContainer"], [1, "localVideoContainer"], [1, "singleInner"], ["src", "./assets/images/blue-avatar.png", 1, "singleInnAvatar"], [1, "innerCallerName", "text-capitalize"], ["id", "localAudio", "autoplay", "", "autoplay", "", 2, "object-fit", "cover"], [1, "groupCallControllContainer"], [1, "singleParticipantContainer"], ["autoplay", "", "autoplay", "", 2, "object-fit", "cover", 3, "id"], ["id", "appendChatDuringCall"], ["id", "messagesBox", 1, "messagesBox", "noPadding", 2, "border-radius", "0px"], ["id", "groupCallContainer", 1, "groupCallContainer", 3, "ngClass"], ["class", "conditionalName", 4, "ngIf"], [1, "bottomVideoContainer", 3, "ngClass"], [1, "singleInner", 2, "margin-bottom", "50px"], [1, "groupVideoCallWrapperBlock", 3, "ngClass"], ["id", "localVideo", "autoplay", "", "muted", "", "autoplay", "", 2, "object-fit", "cover", "width", "100%"], ["id", "localNameHolder", 1, "singleInner"], [1, "conditionalName"], [1, "groupVideoCallWrapper", "groupVideoCallWrapperBlock"], ["autoplay", "", "muted", "", "autoplay", "", 2, "object-fit", "contain", "height", "100%", "width", "100%", 3, "id"], [1, "innerCallerName"]],
    template: function ChatComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ChatComponent_ng_container_5_Template, 10, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_ng_container_6_Template, 2, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ChatComponent_ng_container_7_Template, 2, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_9_listener() {
          return ctx.logout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ChatComponent_img_19_Template, 1, 0, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ChatComponent_p_20_Template, 2, 1, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_21_listener() {
          return ctx.returntoCall();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "return to Call");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, ChatComponent_ng_container_24_Template, 2, 1, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, ChatComponent_div_25_Template, 5, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ChatComponent_div_26_Template, 9, 6, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, ChatComponent_ng_container_27_Template, 1, 1, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, ChatComponent_ng_container_28_Template, 1, 1, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 23)(30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, ChatComponent_ng_container_31_Template, 7, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, ChatComponent_input_32_Template, 2, 1, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 28)(36, "div", 29)(37, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "ADD ATTACHMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_41_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r179);
          const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](46);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r12.click());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 32)(43, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_Template_input_change_45_listener($event) {
          return ctx.handleFileInput($event.target.files);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_47_listener() {
          return ctx.sendTextMessage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, ChatComponent_div_49_Template, 5, 3, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, ChatComponent_div_50_Template, 15, 3, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, ChatComponent_ng_template_51_Template, 2, 2, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, ChatComponent_ng_template_53_Template, 9, 1, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, ChatComponent_ng_template_55_Template, 8, 2, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, ChatComponent_ng_template_57_Template, 9, 5, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, ChatComponent_ng_template_59_Template, 9, 1, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, ChatComponent_ng_template_61_Template, 9, 3, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, ChatComponent_ng_template_63_Template, 11, 6, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, ChatComponent_ng_template_65_Template, 12, 2, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, ChatComponent_ng_template_67_Template, 10, 2, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, ChatComponent_ng_template_69_Template, 20, 6, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](71, ChatComponent_ng_template_71_Template, 12, 2, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, ChatComponent_ng_template_73_Template, 3, 2, "ng-template", null, 51, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, ChatComponent_ng_template_75_Template, 24, 11, "ng-template", null, 52, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx.isHideThread());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.threadType === "THREAD");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.threadType === "GROUP");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.threadType === "CHAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("LOG OUT ", ctx.currentUserData.full_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.sdkconnected ? "online" : "offline");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx.isHideChatScreen());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isMobile());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.activeChat.chatTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.AllGroups);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.calling.templateName == "noCall");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isShowOne2oneCall());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isShowM2MCall());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.chatDCall());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !ctx.activeChat.chatTitle || ctx.calling.templateName != "noCall");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.fileToSend);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.fileToSend);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.popupimagesrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.editGroupModel);
      }
    },
    styles: [".roomNameText[_ngcontent-%COMP%] {\n  font-family: manrope-semibold;\n  font-size: 34px;\n  line-height: 38px;\n  letter-spacing: -0.12px;\n  color: #31394d;\n}\n\n.chatbtn[_ngcontent-%COMP%] {\n  border-right: 1px solid #ebedf4;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #b0d7dd !important;\n  border: 1px solid #2196f3;\n}\n\n.attachmentpopup[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  padding: 15px 5px;\n}\n\n.msgText[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n          hyphens: auto;\n  padding: 0;\n  margin: 0;\n  font-family: inter-regular;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n}\n\n.thumbnail[_ngcontent-%COMP%] {\n  width: 60px !important;\n}\n\n\n.modal[_ngcontent-%COMP%] {\n  display: block; \n  position: fixed; \n  z-index: 1; \n  padding-top: 100px; \n  left: 0;\n  top: 0;\n  width: 100%; \n  height: 100%; \n  overflow: auto; \n  background-color: rgb(0, 0, 0); \n  background-color: rgba(0, 0, 0, 0.9); \n}\n\n\n.modal-content[_ngcontent-%COMP%] {\n  margin: auto;\n  display: block;\n  width: 80%;\n  max-width: 700px;\n  border-radius: 6px !important;\n}\n@keyframes _ngcontent-%COMP%_zoom {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #f1f1f1;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n\n@media only screen and (max-width: 700px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.editgroup[_ngcontent-%COMP%] {\n  width: 485px;\n  margin: auto;\n}\n\n.chatholder[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n.online[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  background-color: green;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.offline[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  background: red;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n#localNameHolder[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.groupVideoCallWrapperBlock[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsK0JBQUE7QUFFRjs7QUFDQTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7VUFBQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLHNCQUFBO0FBR0Y7O0FBQUEsMkJBQUE7QUFDQTtFQUNFLGNBQUEsRUFBQSxzQkFBQTtFQUNBLGVBQUEsRUFBQSxrQkFBQTtFQUNBLFVBQUEsRUFBQSxlQUFBO0VBQ0Esa0JBQUEsRUFBQSx3QkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQSxFQUFBLGVBQUE7RUFDQSxZQUFBLEVBQUEsZ0JBQUE7RUFDQSxjQUFBLEVBQUEsNEJBQUE7RUFDQSw4QkFBQSxFQUFBLG1CQUFBO0VBQ0Esb0NBQUEsRUFBQSxxQkFBQTtBQUdGOztBQUFBLDBCQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FBR0Y7QUFTQTtFQUNFO0lBQ0UsbUJBQUE7RUFFRjtFQUFBO0lBQ0UsbUJBQUE7RUFFRjtBQUNGO0FBQ0EscUJBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTs7RUFFRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUEsd0NBQUE7QUFDQTtFQUNFO0lBQ0UsV0FBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vbU5hbWVUZXh0IHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtc2VtaWJvbGQ7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xMnB4O1xuICBjb2xvcjogIzMxMzk0ZDtcbn1cbi5jaGF0YnRuIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ViZWRmNDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMGQ3ZGQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxOTZmMztcbn1cblxuLmF0dGFjaG1lbnRwb3B1cCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDE1cHggNXB4O1xufVxuXG4ubXNnVGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGh5cGhlbnM6IGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IGludGVyLXJlZ3VsYXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbi50aHVtYm5haWwge1xuICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXG4ubW9kYWwge1xuICBkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cbiAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbn1cblxuLyogTW9kYWwgQ29udGVudCAoaW1hZ2UpICovXG4ubW9kYWwtY29udGVudCB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbSB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgem9vbSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xuLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIHJpZ2h0OiAzNXB4O1xuICBjb2xvcjogI2YxZjFmMTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmNsb3NlOmhvdmVyLFxuLmNsb3NlOmZvY3VzIHtcbiAgY29sb3I6ICNiYmI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiAxMDAlIEltYWdlIFdpZHRoIG9uIFNtYWxsZXIgU2NyZWVucyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAubW9kYWwtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmVkaXRncm91cCB7XG4gIHdpZHRoOiA0ODVweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2hhdGhvbGRlciB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLm9ubGluZSB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm9mZmxpbmUge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jbG9jYWxOYW1lSG9sZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5ncm91cFZpZGVvQ2FsbFdyYXBwZXJCbG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5844:
/*!****************************************************************!*\
  !*** ./src/app/components/chat/new-chat/new-chat.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewChatComponent": () => (/* binding */ NewChatComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/fromEvent */ 3280);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ 1989);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ 8977);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/map */ 635);
/* harmony import */ var rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators/mergeMap */ 1353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/pubsub.service */ 235);
/* harmony import */ var src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/base.service */ 2365);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);














const _c0 = ["searchInput"];
function NewChatComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 20)(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 24)(7, "div", 25)(8, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewChatComponent_ng_container_22_Template_img_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const user_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.startChat(user_r2, "video"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 27)(10, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewChatComponent_ng_container_22_Template_img_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const user_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.startChat(user_r2, "audio"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 29)(12, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewChatComponent_ng_container_22_Template_img_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const user_r2 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.startChat(user_r2, "chat"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](user_r2.full_name);
  }
}
class NewChatComponent {
  constructor(pubsubService, svc, dialog, toastr) {
    this.pubsubService = pubsubService;
    this.svc = svc;
    this.dialog = dialog;
    this.toastr = toastr;
    this.loading = true;
    this.AllUsers = [];
    this.CopyAllUsers = [];
    this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.setActiveChat = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngOnInit() {}
  ngAfterViewInit() {
    if (this.searchInput) {
      (0,rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.searchInput.nativeElement, 'input').pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__.map)(event => event.target.value), (0,rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(1000), (0,rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0,rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(value => {
        this.loading = true;
        if (!value) {
          const data = {
            sorting: "ORDER BY full_name ASC",
            search_field: "full_name",
            search_value: '',
            condition: "contains"
          };
          return this.svc.post('AllUsers', data).pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__.map)(res => {
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
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(returnData);
      })).subscribe(res => {
        this.loading = false;
        if (!res.users || !res.users.length) {
          this.toastr.error("No contacts found", "Opps!");
          this.AllUsers = [];
        } else {
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
    if (this.loading) return;
    this.loading = true;
    let data = {
      group_title: user.full_name,
      participants: [user.user_id],
      auto_created: 1
    };
    this.svc.post('CreateGroup', data).subscribe(v => {
      if (v && v.status == 200) {
        let subscribedata = {
          ...v.group,
          key: v.group['channel_key'],
          channel: v.group['channel_name']
        };
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
  static #_ = this.ɵfac = function NewChatComponent_Factory(t) {
    return new (t || NewChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_0__.PubsubService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_10__.MatLegacyDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NewChatComponent,
    selectors: [["new-chat"]],
    viewQuery: function NewChatComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
      }
    },
    outputs: {
      changeEvent: "changeEvent",
      setActiveChat: "setActiveChat"
    },
    decls: 23,
    vars: 1,
    consts: [[1, "newChatHeader"], [1, "newChatLeft", "hand"], ["src", "./assets/images/arrow-left.png", 1, "arrowLeft", 3, "click"], [1, "newChatHeading"], [1, "newChatRight", "hand"], ["src", "./assets/images/checkmark.png", 1, "goodMark"], [1, "newChatSearchBox"], [1, "input-group"], [1, "input-group-prepend"], ["src", "./assets/images/search.png", 1, "seacrchIcon"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["searchInput", ""], [1, "addGrpChat"], [1, "addGrpChatTop", "hand", 3, "click"], ["src", "./assets/images/Group Chat.png", 1, "addgrpIcon"], [1, "addGrpTitle"], [1, "addGrpSep"], [1, "cntct"], [1, "contactListContainer", "max-height"], [4, "ngFor", "ngForOf"], [1, "contactListCard", "hand"], [1, "contactListCardLeft"], ["src", "./assets/images/user.png", 1, "ListCardIcon"], [1, "ListCardName", "text-capitalize", "pb-1"], [1, "iconsdiv", "contactListCardRight", "justify-content-end", "pl-1"], [1, "videoicon"], ["src", "./assets/images/video-call.png", 1, "pl-1", "ListCardButton", "hand", 3, "click"], [1, "audioicon", "contactListCardRight", "justify-content-end", "pl-1"], ["src", "./assets/images/call.png", 1, "pl-1", "ListCardButton", "hand", 3, "click"], [1, "contactListCardRight", "justify-content-end", "pl-1"], ["src", "./assets/images/chat.png", 1, "pl-1", "ListCardButton", "hand", 3, "click"]],
    template: function NewChatComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewChatComponent_Template_img_click_2_listener() {
          return ctx.backScreen();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "New Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12)(14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewChatComponent_Template_div_click_14_listener() {
          return ctx.addGroupEvent();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Add Group Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, NewChatComponent_ng_container_22_Template, 13, 1, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.AllUsers);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf],
    styles: [".roomNameText[_ngcontent-%COMP%] {\n  font-family: manrope-semibold;\n  font-size: 34px;\n  line-height: 38px;\n  letter-spacing: -0.12px;\n  color: #31394d;\n}\n\n.chatbtn[_ngcontent-%COMP%] {\n  border-right: 1px solid #ebedf4;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #b0d7dd !important;\n  border: 1px solid #2196f3;\n}\n\n.selectuser[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  min-width: 30px;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jaGF0L25ldy1jaGF0L25ldy1jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLCtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb21OYW1lVGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLXNlbWlib2xkO1xuICBmb250LXNpemU6IDM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTJweDtcbiAgY29sb3I6ICMzMTM5NGQ7XG59XG4uY2hhdGJ0biB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmVkZjQ7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBkN2RkICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2ZjM7XG59XG5cbi5zZWxlY3R1c2VyIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/storage.service */ 1303);
/* harmony import */ var _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/FormsHandler/FormsHandler */ 7724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/auth/auth.service */ 866);
/* harmony import */ var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/FormsHandler/get-errors.component */ 8967);








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
      'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(50)]),
      'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(14)])
    }, {
      updateOn: 'change'
    });
  }
  onLogin() {
    _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_1__["default"].validateForm(this.loginForm);
    if (this.loginForm.invalid) return;
    const saveData = this.loginForm.value;
    saveData.project_id = '115G1WZI';
    this.loading = true;
    this.formError = null;
    this.auth.login(saveData).subscribe(v => {
      this.loading = false;
      if (v && v.status == 200) {
        src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.setUserData(v);
        src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.setAuthToken(v.auth_token);
        src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.setAuthUsername(v.ref_id);
        this.router.navigate(['chat']);
        this.loginForm.reset();
      } else {
        this.formError = v.message;
      }
    });
  }
  ngOnDestroy() {
    this.loginForm.reset();
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["ngx-login"]],
    decls: 21,
    vars: 5,
    consts: [[1, "containerWrapper"], ["src", "./assets/images/logo2.png", 1, "logo"], [1, "innerWrapper"], [1, "wrapperHeading"], [1, "text-danger", "text-capitalize"], [1, "inputsContainer", "form-group"], [1, "w-100", 3, "formGroup", "submit"], ["type", "email", "placeholder", "Email/Username", "formControlName", "email", 1, "form-control"], [3, "control"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control"], [1, "buttonsContainer"], ["type", "submit", 1, "signButton", 3, "disabled", "click"], [1, "bottomLink"], ["routerLink", "/signup"], [1, "text-muted"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5)(8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_8_listener() {
          return ctx.onLogin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 7)(10, "form-errors", 8)(11, "input", 9)(12, "form-errors", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 10)(14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() {
          return ctx.onLogin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "SIGN IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "h5", 12)(17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Version:2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.formError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.loginForm.get("username"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.loginForm.get("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.loading);
      }
    },
    dependencies: [_shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_3__.GetErrorsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
    styles: [".wrapperHeading[_ngcontent-%COMP%] {\n  font-family: manrope-medium;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 27px;\n  line-height: 32px;\n  text-align: center;\n  letter-spacing: -0.12px;\n  color: #171725;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlckhlYWRpbmcge1xuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLW1lZGl1bTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xMnB4O1xuICAgIGNvbG9yOiAjMTcxNzI1O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9166:
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/FormsHandler/FormsHandler */ 7724);
/* harmony import */ var src_app_shared_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/validators */ 5060);
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/storage.service */ 1303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth/auth.service */ 866);
/* harmony import */ var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/FormsHandler/get-errors.component */ 8967);









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
      'full_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, src_app_shared_validators__WEBPACK_IMPORTED_MODULE_1__.ValidationService.usernameValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)]),
      'device_type': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('web', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      'device_model': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('web', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      'device_os_ver': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(navigator.platform, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(null, [src_app_shared_validators__WEBPACK_IMPORTED_MODULE_1__.ValidationService.emailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
    }, {
      updateOn: 'change'
    });
    console.log('this.signupForm', this.loginForm);
  }
  onLogin() {
    _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_0__["default"].validateForm(this.loginForm);
    if (this.loginForm.invalid) return;
    const saveData = this.loginForm.value;
    saveData.project_id = '115G1WZI';
    this.loading = true;
    this.formError = null;
    this.auth.signup(saveData).subscribe(v => {
      this.loading = false;
      if (v && v.status == 200) {
        src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService.setUserData(v);
        src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService.setAuthToken(v.auth_token);
        src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService.setAuthUsername(v.ref_id);
        this.router.navigate(['chat']);
        this.loginForm.reset();
      } else {
        this.formError = v.message;
      }
    });
  }
  static #_ = this.ɵfac = function SignUpComponent_Factory(t) {
    return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: SignUpComponent,
    selectors: [["sign-up"]],
    decls: 21,
    vars: 6,
    consts: [[1, "containerWrapper"], ["src", "./assets/images/logo2.png", 1, "logo"], [1, "innerWrapper"], [1, "wrapperHeading"], [1, "text-danger", "text-capitalize"], [1, "inputsContainer", "form-group"], [1, "w-100", 3, "formGroup", "submit"], ["type", "text", "placeholder", "Your Username", "formControlName", "full_name", 1, "form-control"], [3, "control"], ["type", "email", "placeholder", "Your Email", "formControlName", "email", 1, "form-control"], ["type", "password", "placeholder", "Your Password", "formControlName", "password", 1, "form-control"], [1, "buttonsContainer"], ["type", "submit", 1, "signButton", 3, "disabled", "click"], [1, "bottomLink"], ["routerLink", "/login"]],
    template: function SignUpComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2)(3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Sign Up to your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5)(8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function SignUpComponent_Template_form_submit_8_listener() {
          return ctx.onLogin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "input", 7)(10, "form-errors", 8)(11, "input", 9)(12, "form-errors", 8)(13, "input", 10)(14, "form-errors", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 11)(16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_16_listener() {
          return ctx.onLogin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "h5", 13)(19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "SIGN IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.formError);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.loginForm.get("full_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.loginForm.get("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.loginForm.get("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.loading);
      }
    },
    dependencies: [_shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_4__.GetErrorsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
    styles: [".wrapperHeading[_ngcontent-%COMP%] {\n  font-family: manrope-medium;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 27px;\n  line-height: 32px;\n  text-align: center;\n  letter-spacing: -0.12px;\n  color: #171725;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJIZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbWVkaXVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XG4gIGNvbG9yOiAjMTcxNzI1O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7724:
/*!*****************************************************!*\
  !*** ./src/app/shared/FormsHandler/FormsHandler.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormsHandler)
/* harmony export */ });
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
    } else {
      if (form.controls) {
        for (const field in form.controls) {
          const control = form.get(field);
          if (control.invalid) {
            control.markAsTouched({
              onlySelf: true
            });
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
    } else {
      if (form.controls) {
        for (const group in form.controls) {
          const groupFiled = form.get(group);
          for (const field in groupFiled.controls) {
            const control = groupFiled.get(field);
            if (control.invalid) {
              control.markAsTouched({
                onlySelf: true
              });
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

/***/ 8967:
/*!*************************************************************!*\
  !*** ./src/app/shared/FormsHandler/get-errors.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetErrorsComponent": () => (/* binding */ GetErrorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GetErrorsComponent {
  static #_ = this.errorMessages = {
    'required': () => 'The specified information is required.',
    'minlength': params => 'The min number of characters is ' + params.requiredLength,
    'maxlength': params => 'The max allowed number of characters is ' + params.requiredLength,
    'pattern': params => 'The required pattern is: ' + params.requiredPattern,
    'years': params => params.message,
    'countryCity': params => params.message,
    'uniqueName': params => params.message,
    'telephoneNumbers': params => params.message,
    'telephoneNumber': params => params.message,
    'invalidNumber': () => 'The specified information is invalid.',
    'emptySpaces': () => 'The specified information is invalid.',
    'email': () => 'Email is not valid',
    'invalidPassword': () => 'Password must be a minimum of 8 characters and contain at least 1 uppercase character and 1 numeric value',
    'invalidUsernameCharacters': () => 'invalid user name',
    'invalidInputCharacters': () => 'The specified information is invalid.',
    'invalidEmailAddress': () => 'Email is not valid'
  };
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
  static #_2 = this.ɵfac = function GetErrorsComponent_Factory(t) {
    return new (t || GetErrorsComponent)();
  };
  static #_3 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GetErrorsComponent,
    selectors: [["form-errors"]],
    inputs: {
      control: "control"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "text-danger"]],
    template: function GetErrorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hasErrors() ? ctx.listOfErrors() : "", " ");
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 2859:
/*!************************************************************!*\
  !*** ./src/app/shared/app-material/app-material.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMaterialModule": () => (/* binding */ AppMaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ 7520);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ 9673);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/legacy-table */ 6538);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/platform */ 9107);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 7101);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-select */ 6002);
/* harmony import */ var _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-checkbox */ 8469);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-input */ 2044);
/* harmony import */ var _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-radio */ 3493);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/legacy-slide-toggle */ 3921);
/* harmony import */ var _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/legacy-tooltip */ 3370);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-tabs */ 2821);
/* harmony import */ var _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/legacy-progress-bar */ 5042);
/* harmony import */ var _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/legacy-menu */ 1051);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 7578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


























const globalRippleConfig = {
  disabled: true
};
class AppMaterialModule {
  static #_ = this.ɵfac = function AppMaterialModule_Factory(t) {
    return new (t || AppMaterialModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppMaterialModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_RIPPLE_GLOBAL_OPTIONS,
      useValue: globalRippleConfig
    }],
    imports: [_angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLegacyFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRippleModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_3__.MatLegacyDialogModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSortModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_5__.MatLegacyPaginatorModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkTableModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.PortalModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_10__.MatLegacySelectModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatLegacyCheckboxModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_12__.MatLegacyInputModule, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_13__.MatLegacyRadioModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatNativeDateModule, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_15__.MatLegacyTabsModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_16__.MatLegacyButtonModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_17__.MatLegacyTableModule, _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatLegacySlideToggleModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__.OverlayModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatLegacyTooltipModule, _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatLegacyProgressBarModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_22__.MatLegacyMenuModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatLegacyProgressSpinnerModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLegacyFormFieldModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__.PlatformModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRippleModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSortModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_5__.MatLegacyPaginatorModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkTableModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.PortalModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_10__.MatLegacySelectModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatLegacyCheckboxModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_12__.MatLegacyInputModule, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_13__.MatLegacyRadioModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatNativeDateModule, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_15__.MatLegacyTabsModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_17__.MatLegacyTableModule, _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatLegacySlideToggleModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_16__.MatLegacyButtonModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatLegacyTooltipModule, _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatLegacyProgressBarModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__.LayoutModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatLegacyProgressSpinnerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppMaterialModule, {
    imports: [_angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLegacyFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRippleModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_3__.MatLegacyDialogModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSortModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_5__.MatLegacyPaginatorModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkTableModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.PortalModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_10__.MatLegacySelectModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatLegacyCheckboxModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_12__.MatLegacyInputModule, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_13__.MatLegacyRadioModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatNativeDateModule, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_15__.MatLegacyTabsModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_16__.MatLegacyButtonModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_17__.MatLegacyTableModule, _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatLegacySlideToggleModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__.OverlayModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatLegacyTooltipModule, _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatLegacyProgressBarModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_22__.MatLegacyMenuModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatLegacyProgressSpinnerModule],
    exports: [_angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLegacyFormFieldModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__.PlatformModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRippleModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSortModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_5__.MatLegacyPaginatorModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkTableModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.PortalModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_10__.MatLegacySelectModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatLegacyCheckboxModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_12__.MatLegacyInputModule, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_13__.MatLegacyRadioModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatNativeDateModule, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_15__.MatLegacyTabsModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_17__.MatLegacyTableModule, _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatLegacySlideToggleModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_16__.MatLegacyButtonModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatLegacyTooltipModule, _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatLegacyProgressBarModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__.LayoutModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatLegacyProgressSpinnerModule]
  });
})();

/***/ }),

/***/ 5233:
/*!***************************************************!*\
  !*** ./src/app/shared/auth/auth-guard.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 866);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



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
  static #_ = this.ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac
  });
}

/***/ }),

/***/ 866:
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/storage.service */ 1303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);




class AuthService {
  constructor(http) {
    this.http = http;
    this.userSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
  }
  login(data) {
    return this.http.post('Login', data);
  }
  signup(data) {
    return this.http.post('SignUp', data);
  }
  logout() {
    _services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.clearLocalStorge();
  }
  getToken() {
    return _services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.getAuthToken();
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
    this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
  }
  getUserId() {
    const userdata = _services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.getUserData();
    return userdata._id;
  }
  isAuthUser() {
    return this.http.get('users/current-user');
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac
  });
}

/***/ }),

/***/ 8288:
/*!****************************************************!*\
  !*** ./src/app/shared/helpers/helpersFunctions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoUnsubscribe": () => (/* binding */ AutoUnsubscribe),
/* harmony export */   "FindArrayObject": () => (/* binding */ FindArrayObject),
/* harmony export */   "FindObjectByValue": () => (/* binding */ FindObjectByValue),
/* harmony export */   "isEmail": () => (/* binding */ isEmail),
/* harmony export */   "isEmptyArray": () => (/* binding */ isEmptyArray),
/* harmony export */   "isEmptyObj": () => (/* binding */ isEmptyObj),
/* harmony export */   "isMobile": () => (/* binding */ isMobile)
/* harmony export */ });
function isEmptyObj(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}
function isEmptyArray(array) {
  if (!Array.isArray(array) || !array.length) {
    return true;
  } else {
    return false;
  }
}
function isEmail(email) {
  const emailLowercase = email.toLowerCase();
  if (email == null || emailLowercase.match(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/)) {
    return true;
  } else {
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
        if (property && typeof property.unsubscribe === 'function') {
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

/***/ 6241:
/*!***************************************!*\
  !*** ./src/app/shared/pipe/filter.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterPipe": () => (/* binding */ filterPipe)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/base.service */ 2365);





class filterPipe {
  constructor(toastr, svc) {
    this.toastr = toastr;
    this.svc = svc;
  }
  transform(items, value) {
    if (!items) return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
    if (!value) return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(items);
    const data = {
      "search_field": "full_name",
      "search_value": value,
      "condition": "contains"
    };
    return this.svc.post('AllUsers', data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      if (res.status == 400) {
        this.toastr.error("No contacts found", "Opps!");
        return [];
      }
      return res.users;
    }));
  }
  static #_ = this.ɵfac = function filterPipe_Factory(t) {
    return new (t || filterPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService, 16), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefinePipe"]({
    name: "filter",
    type: filterPipe,
    pure: true
  });
}

/***/ }),

/***/ 7165:
/*!*******************************************!*\
  !*** ./src/app/shared/pipe/formatTime.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatTimePipe": () => (/* binding */ FormatTimePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FormatTimePipe {
  transform(value) {
    const minutes = Math.floor(value / 60);
    return ("00" + minutes).slice(-2) + ":" + ("00" + Math.floor(value - minutes * 60)).slice(-2);
  }
  static #_ = this.ɵfac = function FormatTimePipe_Factory(t) {
    return new (t || FormatTimePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "formatTime",
    type: FormatTimePipe,
    pure: true
  });
}

/***/ }),

/***/ 3686:
/*!****************************************!*\
  !*** ./src/app/shared/pipe/safeurl.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeUrlPipe": () => (/* binding */ SafeUrlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);


class SafeUrlPipe {
  constructor(domSanitizer) {
    this.domSanitizer = domSanitizer;
  }
  transform(url) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
  static #_ = this.ɵfac = function SafeUrlPipe_Factory(t) {
    return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "safeUrl",
    type: SafeUrlPipe,
    pure: true
  });
}

/***/ }),

/***/ 2365:
/*!*************************************************!*\
  !*** ./src/app/shared/services/base.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseService": () => (/* binding */ BaseService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);



class BaseService {
  constructor(http) {
    this.http = http;
    this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject();
    this.userData$ = this.userData.asObservable();
    this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
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
  static #_ = this.ɵfac = function BaseService_Factory(t) {
    return new (t || BaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: BaseService,
    factory: BaseService.ɵfac
  });
}

/***/ }),

/***/ 4691:
/*!*************************************************!*\
  !*** ./src/app/shared/services/http.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 1303);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ 2365);








class HttpService {
  constructor(router, svc) {
    this.router = router;
    this.svc = svc;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl;
  }
  intercept(req, next) {
    req = this.getModifiedReq(req);
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(event => {
      if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse) {
        if (event && event.body) {
          const serRes = event.body;
          this.svc.isLoading.next(false);
          if (serRes.code === 401) {
            _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.clearLocalStorge();
            this.showErrorMsg(serRes.message);
            this.router.navigate(['/login']);
          } else if (serRes.code === 407) {
            // StorageService.clearLocalStorge();
            this.showErrorMsg(serRes.message);
            // this.router.navigate(['/auth/login']);
          } else if (serRes.code === 200 || serRes.code === 201) {} else {
            this.showErrorMsg(serRes.message);
          }
        }
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(errorRes => {
      this.svc.isLoading.next(false);
      console.log('this should print your error!', errorRes.error);
      if (errorRes instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
        if (errorRes.status === 500) {
          // this.toastrService.danger('Opps!', "Something went wrong");
        } else {
          this.showErrorMsg(errorRes.message);
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(errorRes);
    }));
  }
  getModifiedReq(req) {
    req = req.clone({
      url: this.baseUrl + req.url
    });
    const formdata = JSON.stringify(req.body);
    const auth_token = _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.getAuthToken();
    if (auth_token) req = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + auth_token)
    });
    req = req.clone({
      headers: req.headers.set('Content-Type', 'application/json')
    });
    req = req.clone({
      body: formdata
    });
    return req;
  }
  showErrorMsg(errorResponse) {
    if (typeof errorResponse == 'string') {
      // this.toastrService.danger('Opps!', errorResponse);
    }
  }
  static #_ = this.ɵfac = function HttpService_Factory(t) {
    return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_base_service__WEBPACK_IMPORTED_MODULE_2__.BaseService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: HttpService,
    factory: HttpService.ɵfac
  });
}

/***/ }),

/***/ 235:
/*!***************************************************!*\
  !*** ./src/app/shared/services/pubsub.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PubsubService": () => (/* binding */ PubsubService)
/* harmony export */ });
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 1303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class PubsubService {
  constructor() {}
  ngOnDestroy() {
    this.wsSubscription.unsubscribe();
  }
  initConfigure() {
    const user = _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.getUserData();
    this.Client = new MVDOTOK.Client({
      projectID: "115G1WZI",
      host: `${user.messaging_server_map.complete_address}`
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
  static #_ = this.ɵfac = function PubsubService_Factory(t) {
    return new (t || PubsubService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: PubsubService,
    factory: PubsubService.ɵfac
  });
}

/***/ }),

/***/ 1303:
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class StorageService {
  static #_ = this.STORAGE_KEY_AUTH_TOKEN = 'auth_token';
  static #_2 = this.STORAGE_KEY_USER_NAME = 'username';
  static #_3 = this.STORAGE_KEY_USER_DATA = 'user_data';
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
  static #_4 = this.ɵfac = function StorageService_Factory(t) {
    return new (t || StorageService)();
  };
  static #_5 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: StorageService,
    factory: StorageService.ɵfac
  });
}

/***/ }),

/***/ 618:
/*!*********************************************************!*\
  !*** ./src/app/shared/services/vdk-m2m-call.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VdkM2MCallService": () => (/* binding */ VdkM2MCallService)
/* harmony export */ });
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 1303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class VdkM2MCallService {
  constructor() {}
  initConfigure() {
    this.Client = new CVDOTOK.ManyToMany({
      projectId: "115G1WZI",
      secret: "3d9686b635b15b5bc2d19800407609fa"
    });
    this.Client.on("connected", res => {
      let user = _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.getUserData();
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
  static #_ = this.ɵfac = function VdkM2MCallService_Factory(t) {
    return new (t || VdkM2MCallService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: VdkM2MCallService,
    factory: VdkM2MCallService.ɵfac
  });
}

/***/ }),

/***/ 2036:
/*!*************************************************************!*\
  !*** ./src/app/shared/services/vdk-one2one-call.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VdkOne2OneCallService": () => (/* binding */ VdkOne2OneCallService)
/* harmony export */ });
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 1303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class VdkOne2OneCallService {
  constructor() {}
  initConfigure() {
    const user = _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.getUserData();
    this.Client = new CVDOTOK.Client({
      projectId: "115G1WZI",
      host: `wss://r-stun2.vdotok.dev:8443/call`,
      stunServer: `${user.stun_server_map.complete_address}`
    });
    this.Client.on("connected", res => {
      let user = _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.getUserData();
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
  acceptCall(params) {
    this.Client.AcceptCall(params);
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
  static #_ = this.ɵfac = function VdkOne2OneCallService_Factory(t) {
    return new (t || VdkOne2OneCallService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: VdkOne2OneCallService,
    factory: VdkOne2OneCallService.ɵfac
  });
}

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/storage.service */ 1303);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ 866);
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth-guard.service */ 5233);
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/base.service */ 2365);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/http.service */ 4691);
/* harmony import */ var _services_pubsub_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/pubsub.service */ 235);
/* harmony import */ var _FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormsHandler/get-errors.component */ 8967);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _pipe_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipe/filter */ 6241);
/* harmony import */ var _pipe_safeurl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipe/safeurl */ 3686);
/* harmony import */ var _pipe_formatTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipe/formatTime */ 7165);
/* harmony import */ var _services_vdk_m2m_call_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/vdk-m2m-call.service */ 618);
/* harmony import */ var _services_vdk_one2one_call_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/vdk-one2one-call.service */ 2036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);

















const components = [_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_6__.GetErrorsComponent, _pipe_filter__WEBPACK_IMPORTED_MODULE_7__.filterPipe, _pipe_safeurl__WEBPACK_IMPORTED_MODULE_8__.SafeUrlPipe, _pipe_formatTime__WEBPACK_IMPORTED_MODULE_9__.FormatTimePipe];
class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService, _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService, _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuard, _services_base_service__WEBPACK_IMPORTED_MODULE_3__.BaseService, _services_pubsub_service__WEBPACK_IMPORTED_MODULE_5__.PubsubService, _services_vdk_one2one_call_service__WEBPACK_IMPORTED_MODULE_11__.VdkOne2OneCallService, _services_vdk_m2m_call_service__WEBPACK_IMPORTED_MODULE_10__.VdkM2MCallService, {
      provide: _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_13__.MAT_LEGACY_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: false
      }
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
      useClass: _services_http_service__WEBPACK_IMPORTED_MODULE_4__.HttpService,
      multi: true
    }],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_6__.GetErrorsComponent, _pipe_filter__WEBPACK_IMPORTED_MODULE_7__.filterPipe, _pipe_safeurl__WEBPACK_IMPORTED_MODULE_8__.SafeUrlPipe, _pipe_formatTime__WEBPACK_IMPORTED_MODULE_9__.FormatTimePipe],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule],
    exports: [_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_6__.GetErrorsComponent, _pipe_filter__WEBPACK_IMPORTED_MODULE_7__.filterPipe, _pipe_safeurl__WEBPACK_IMPORTED_MODULE_8__.SafeUrlPipe, _pipe_formatTime__WEBPACK_IMPORTED_MODULE_9__.FormatTimePipe]
  });
})();

/***/ }),

/***/ 5060:
/*!**************************************!*\
  !*** ./src/app/shared/validators.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationService": () => (/* binding */ ValidationService)
/* harmony export */ });
class ValidationService {
  static specialCharValidator(control) {
    if (control.value == null || control.value.match(/^[a-zA-Z0-9._]*$/)) {
      return null;
    } else {
      return {
        'invalidCharacters': true
      };
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
        return {
          'uppercaseCharacterRule': true
        };
      }
      return undefined;
    };
  }
  static creditCardValidator(control) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
      return null;
    } else {
      return {
        'invalidCreditCard': true
      };
    }
  }
  static emailValidator(control) {
    // RFC 2822 compliant regex
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    const emailLowercase = control.value.toLowerCase();
    if (control.value == null || emailLowercase.match(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/)) {
      return null;
    } else {
      return {
        'invalidEmailAddress': true
      };
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
    } else {
      return {
        'emptySpaces': true
      };
    }
  }
  static removeSpace(value) {
    return value.trim();
  }
  static englishWordsValidator(control) {
    console.log('englishWordsValidator', control);
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    const tempstring = ValidationService.removeSpace(control.value);
    if (tempstring.match(/^[a-zA-Z]+( [\&a-zA-Z]+)*$/)) {
      return null;
    } else {
      return {
        'invalidCharacters': true
      };
    }
  }
  static nameValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    if (control.value.match(/^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,30}$/)) {
      return null;
    } else {
      return {
        'invalidNameCharacters': true
      };
    }
  }
  static whiteSpaceValidator(control) {
    // RFC 2822 compliant regex
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    if (control.value.match(/^[-a-zA-Z\u0600-\u06FF0-9-()]+(\s+[-a-zA-Z\u0600-\u06FF0-9-()]+)*$/)) {
      return null;
    } else {
      return {
        'invalidWhiteSpace': true
      };
    }
  }
  static phoneValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    if (control.value.match(/^\+?[0-9]+$/g)) {
      return null;
    } else {
      return {
        'invalidPhone': true
      };
    }
  }
  static phoneUsernameEmailValidator(control) {
    if (control.value == null) return;
    let validEmail = true,
      validPhone = true,
      validUsername = true;
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
    if (validEmail || validUsername || validPhone) return null;
    return {
      'invalidUsernameEmail': true
    };
  }
  static usernameValidator(control) {
    // RFC 2822 compliant regex
    if (control.value == null || control.value.match(/^[a-zA-Z0-9]+$/)) {
      return null;
    } else {
      return {
        'invalidUsernameCharacters': true
      };
    }
  }
  static passwordValidator(control) {
    // {8,100}           - Assert password is between 8 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value && !ValidationService.uppercaseCharacterRule(1)(control) && control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return {
        'invalidPassword': true
      };
    }
  }
  static MatchPassword(control, crud) {
    if (control.value == null) return null;
    return control.root.get('password').value != control.value ? {
      passworMismatch: true
    } : null;
  }
  static pinCodeValidator(control) {
    if (control.value && control.value.match(/^[0-9]{4}$/)) {
      return null;
    } else {
      return {
        'invalidPinCode': true
      };
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
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    if (parseFloat(control.value) == 0 || (parseFloat(control.value) || parseInt(control.value)) && !isNaN(control.value)) {
      return null;
    } else {
      return {
        'invalidNumber': true
      };
    }
  }
  static alphnumericValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    if (ValidationService.whiteSpaceValidator(control.value)) return;
    // if (control.value.match(/^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,0-9]{1,500}$/)) {
    if (control.value.match(/^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
      return null;
    } else {
      return {
        'invalidInputCharacters': true
      };
    }
  }
  static stringvalidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    if (control.value.match(/^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
      return null;
    } else {
      return {
        'invalidInputCharacters': true
      };
    }
  }
  static disallowspecial(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    if (control.value.match(/^[A-Za-z0-9 ]+$/)) {
      return null;
    } else {
      return {
        'invalidInputCharacters': true
      };
    }
  }
  static alphValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    if (control.value.match(/^\+?[A-Za-z]+$/g)) {
      return null;
    } else {
      return {
        'invalidString': true
      };
    }
  }
  static numericValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    if (ValidationService.whiteSpaceValidator(control.value)) return;
    const value = control.value.toString();
    if (value.match(/^\+?[0-9]+$/g)) {
      return null;
    } else {
      return {
        'invalidNumeric': true
      };
    }
  }
  static floatNumberValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    const value = control.value.toString();
    if (value.match(/^[+-]?\d+(\.\d+)?$/g)) {
      return null;
    } else {
      return {
        'invalidNumeric': true
      };
    }
  }
  static mackAddressValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    const value = control.value.toString();
    if (value.match(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/g)) {
      return null;
    } else {
      return {
        'invalidMackAddress': true
      };
    }
  }
  static gatewayAddressValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    const value = control.value.toString();
    if (value.match(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/g)) {
      return null;
    } else {
      return {
        'invalidMackAddress': true
      };
    }
  }
  static ipValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    const value = control.value.toString();
    if (value.match(/^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/g)) {
      return null;
    } else {
      return {
        'invalidIp': true
      };
    }
  }
  static domainNameValidator(control) {
    if (ValidationService.isEmptyInputValue(control.value)) return null;
    const value = control.value.toString();
    if (value.match(/^(?=^.{1,254}$)(^(?:(?!\d+\.)[a-zA-Z0-9_\-]{1,63}\.?)+(?:[a-zA-Z]{2,})$)/g)) {
      return null;
    } else {
      return {
        'invalidDomainName': true
      };
    }
  }
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map