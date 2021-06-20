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
/* harmony import */ var _model_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/filter */ "./src/model/filter.ts");
/* harmony import */ var _services_space_xlaunch_program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/space-xlaunch-program.service */ "./src/services/space-xlaunch-program.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function AppComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_div_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const list_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.open(list_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Created Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "n", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "News Icon: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "n", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Post Title: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "n", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Total Comments: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "n", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "n", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", list_r4.Images, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r4.created_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", list_r4.newsIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", list_r4.post_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r4.post_title.length > 30 ? list_r4.post_title.substring(0, 30) + "..." : list_r4.post_title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r4.totalComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0", list_r4.totalLike, "");
} }
function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_0_div_2_Template, 30, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allImages);
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
} }
function AppComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_2_div_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const list_r8 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.open(list_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "video", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Post Title: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "n", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Report Message: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "n", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Reporting Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "n", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Show Report:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "n", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Created Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "n", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Thumb Image: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "n", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Liked Image: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "n", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Comment: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "n", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("poster", list_r8.post_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", list_r8.post_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r8.post_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", list_r8.submittedReportMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r8.submittedReportMessage.length > 30 ? list_r8.submittedReportMessage.substring(0, 30) + "..." : list_r8.submittedReportMessage, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r8.reportingStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r8.showReport);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r8.created_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", list_r8.post_thumb_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", list_r8.likedImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", list_r8.commentMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r8.commentMessage.length > 30 ? list_r8.commentMessage.substring(0, 30) + "..." : list_r8.commentMessage, "");
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_2_div_3_Template, 47, 12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.openDialog = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.allVideos);
} }
// import { MatChipInputEvent } from '@angular/material';
// import { ENTER, COMMA } from '@angular/cdk/keycodes';
class AppComponent {
    constructor(service, tostrService) {
        this.service = service;
        this.tostrService = tostrService;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.openDialog = false;
        this.numberArray = [10, 32, 12, 13];
        this.keywords = [];
        this.launchYear = Array();
        this.successLaunch = Array();
        this.successLand = Array();
        this.launcherDetail = Array();
        this.allImages = Array();
        this.allVideos = Array();
        this.programFilter = new _model_filter__WEBPACK_IMPORTED_MODULE_1__["ProgramFilter"];
    }
    ngOnInit() {
        this.isLoading = false;
        this.getAllSpaceXProgram();
        this.GetAllPost();
        // this.GetAllDetail();
    }
    getAllSpaceXProgram() {
        this.isLoading = false;
        this.launcherDetail = [];
        if (this.programFilter.launch_year === undefined) {
            this.programFilter.launch_year = '';
        }
        if (this.programFilter.land_success === undefined) {
            this.programFilter.land_success = '';
        }
        if (this.programFilter.launch_success === undefined) {
            this.programFilter.launch_success = '';
        }
        this.service.allSpaceXProgramList(100, this.programFilter.launch_success, this.programFilter.land_success, this.programFilter.launch_year).subscribe(res => {
            const response = JSON.parse(JSON.stringify(res));
            const launchYear = [...new Set(response.map(item => item.launch_year))];
            launchYear.forEach(element => {
                const isPresent = this.launchYear.filter(n => n.launch_Year === element);
                if (isPresent.length === 0) {
                    this.launchYear.push({ launch_Year: element, isActive: false });
                }
            });
            if (this.successLaunch.length === 0) {
                this.successLaunch.push({ successLaunch: 'True', isActive: false });
                this.successLaunch.push({ successLaunch: 'False', isActive: false });
                this.successLand.push({ successLand: 'True', isActive: false });
                this.successLand.push({ successLand: 'False', isActive: false });
                this.yearLaunch = 'Launch Year';
                this.successfulLaunch = 'Successful Launch';
                this.successfulLanding = 'Successfull Landing';
                this.title = 'SpaceX Launch Programs';
                this.filter = 'Filters';
                this.developerName = 'Vishal Verma';
            }
            const links = response.map(item => item.links);
            if (links.length === 0) {
                this.isLoading = true;
                return false;
            }
            links.forEach(element => {
                const detail = response.filter(n => n.links === element).map(n => n);
                const missionId = detail.filter(n => n.links === element).map(n => n.mission_id);
                const year = response.filter(n => n.links === element).map(n => n.launch_year);
                const launchSuccess = response.filter(n => n.links === element).map(n => n.launch_success);
                const land_success = response.filter(n => n.links === element).map(n => n.rocket.first_stage.cores.filter(n => n.core_serial).map(n => n.land_success));
                this.launcherDetail.push({ flightNumber: detail[0].flight_number, imageLink: detail[0].links.mission_patch_small, missionName: detail[0].mission_name, missionId: missionId, launchYear: year[0], landSuccess: land_success[0], launchSuccess: launchSuccess });
                this.isLoading = true;
            });
            localStorage.setItem('PROGRAMS', JSON.stringify(this.launcherDetail));
        });
    }
    clickProgram(e) {
        this.programFilter.launch_year = e.launch_Year;
        if (e.isActive === true) {
            this.programFilter.launch_year = '';
            if (this.programFilter.land_success === '' && this.programFilter.launch_success === '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails;
                this.launchYear.filter(n => n.launch_Year === e.launch_Year).map(n => n.isActive = false);
            }
            else if (this.programFilter.land_success !== '' && this.programFilter.launch_success !== '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.launchYear === '' && n.landSuccess === this.programFilter.land_success && n.launchSuccess === this.programFilter.launch_success).map(n => n);
                this.launchYear.filter(n => n.launch_Year === e.launch_Year).map(n => n.isActive = false);
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
            else if (this.programFilter.land_success !== '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.launchYear === '' && n.landSuccess === this.programFilter.land_success).map(n => n);
                this.launchYear.filter(n => n.launch_Year === e.launch_Year).map(n => n.isActive = false);
            }
            else {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.launchYear === '' && n.launchSuccess === this.programFilter.launch_success).map(n => n);
                this.launchYear.filter(n => n.launch_Year === e.launch_Year).map(n => n.isActive = false);
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
        }
        else {
            if (this.programFilter.land_success === '' && this.programFilter.launch_success === '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.launchYear === this.programFilter.launch_year).map(n => n);
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
            else if (this.programFilter.land_success !== '' && this.programFilter.launch_success !== '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.launchYear === this.programFilter.launch_year && n.landSuccess.toString() === this.programFilter.land_success.toString() && n.launchSuccess.toString() === this.programFilter.launch_success.toString()).map(n => n);
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
            else if (this.programFilter.land_success !== '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.launchYear === this.programFilter.launch_year && n.landSuccess.toString() === this.programFilter.land_success.toString()).map(n => n);
            }
            else {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.launchYear === this.programFilter.launch_year && n.launchSuccess.toString() === this.programFilter.launch_success.toString()).map(n => n);
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
            this.launchYear.map(n => n.isActive = false);
            const list = this.launchYear.filter(n => n.launch_Year === e.launch_Year).map(n => n);
            if (list[0].isActive === false || list[0].isActive === true) {
                this.launchYear.filter(n => n.launch_Year === e.launch_Year).map(n => n.isActive = true);
            }
        }
    }
    successLaunchEvent(e) {
        if (e.isActive === true) {
            this.successLaunch.map(n => n.isActive = false);
            this.programFilter.launch_success = '';
            // this.getAllSpaceXProgram();
            if (this.programFilter.land_success === '' && this.programFilter.launch_year === '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails;
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
            else if (this.programFilter.land_success !== '' && this.programFilter.launch_year !== '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.launchYear === this.programFilter.launch_year && n.landSuccess.toString() === this.programFilter.land_success.toString()).map(n => n);
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
            else if (this.programFilter.land_success !== '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.landSuccess === this.programFilter.land_success).map(n => n);
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
            else if (this.programFilter.launch_year !== '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.launchYear === this.programFilter.launch_year).map(n => n);
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
        }
        else {
            this.programFilter.launch_success = e.successLaunch.toLowerCase();
            this.successLaunch.map(n => n.isActive = false);
            if (this.programFilter.land_success === '' && this.programFilter.launch_year === '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.launchSuccess.toString() === this.programFilter.launch_success.toString()).map(n => n);
                this.successLaunch.filter(n => n.successLaunch === e.successLaunch).map(n => n.isActive = true);
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
            else if (this.programFilter.land_success !== '' && this.programFilter.launch_year !== '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.launchSuccess.toString() === this.programFilter.launch_success.toString() && n.launchYear === this.programFilter.launch_year && n.landSuccess.toString() === this.programFilter.land_success.toString()).map(n => n);
                this.successLaunch.filter(n => n.successLaunch === e.successLaunch).map(n => n.isActive = true);
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
            else if (this.programFilter.land_success !== '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.launchSuccess.toString() === this.programFilter.launch_success.toString() && n.landSuccess.toString() === this.programFilter.land_success.toString()).map(n => n);
                this.successLaunch.filter(n => n.successLaunch === e.successLaunch).map(n => n.isActive = true);
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
            else if (this.programFilter.launch_year !== '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.launchSuccess.toString() === this.programFilter.launch_success.toString() && n.launchYear === this.programFilter.launch_year).map(n => n);
                this.successLaunch.filter(n => n.successLaunch === e.successLaunch).map(n => n.isActive = true);
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
        }
    }
    successLandEvent(e) {
        if (e.isActive === true) {
            this.successLand.map(n => n.isActive = false);
            this.programFilter.land_success = '';
            if (this.programFilter.launch_success === '' && this.programFilter.launch_year === '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails;
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
            else if (this.programFilter.launch_success !== '' && this.programFilter.launch_year !== '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.launchYear === this.programFilter.launch_year && n.launchSuccess.toString() === this.programFilter.launch_success.toString()).map(n => n);
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
            else if (this.programFilter.launch_success !== '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.launchSuccess.toString() === this.programFilter.launch_success.toString()).map(n => n);
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
            else if (this.programFilter.launch_year !== '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.launchYear === this.programFilter.launch_year).map(n => n);
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
        }
        else {
            this.programFilter.land_success = e.successLand.toLowerCase();
            this.successLand.filter(n => n.successLand).map(n => n.isActive = false);
            if (this.programFilter.launch_success === '' && this.programFilter.launch_year === '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.landSuccess.toString() === this.programFilter.land_success.toString()).map(n => n);
                this.successLand.filter(n => n.successLand === e.successLand).map(n => n.isActive = true);
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
            else if (this.programFilter.launch_success !== '' && this.programFilter.launch_year !== '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.landSuccess.toString() === this.programFilter.land_success.toString() && n.launchYear === this.programFilter.launch_year && n.launchSuccess.toString() === this.programFilter.launch_success.toString()).map(n => n);
                this.successLand.filter(n => n.successLand.toString() === e.successLand.toString()).map(n => n.isActive = true);
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
            else if (this.programFilter.launch_success !== '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.landSuccess.toString() === this.programFilter.land_success.toString() && n.launchSuccess.toString() === this.programFilter.launch_success.toString()).map(n => n);
                this.successLand.filter(n => n.successLand === e.successLand).map(n => n.isActive = true);
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
            else if (this.programFilter.launch_year !== '') {
                this.launcherDetail = [];
                const programsDetails = JSON.parse(localStorage.getItem('PROGRAMS'));
                this.launcherDetail = programsDetails.filter(n => n.landSuccess.toString() === this.programFilter.land_success.toString() && n.launchYear === this.programFilter.launch_year).map(n => n);
                this.successLand.filter(n => n.successLand === e.successLand).map(n => n.isActive = true);
                if (this.launcherDetail.length === 0) {
                    this.noRecordFoundMessage = 'No Records Founds';
                }
            }
        }
    }
    GetAllPost() {
        const post = {
            "client_id": "CO-33",
            "empcode": "2",
            "device": "2",
            "deviceId": "browser",
            "app_version": "28",
            "value": 0
        };
        this.service.GetAllPost(post).subscribe(res => {
            const response = JSON.parse(JSON.stringify(res));
            let data = response.data;
            data.forEach(element => {
                this.allImages.push({ Images: element.Images, created_date: element.created_date, newsIcon: element.newsIcon, post_title: element.post_title, totalComment: element.totalComment, totalLike: element.totalLike, auto_id: element.auto_id, post_image: element.Images_orig[0].post_image, post_thumb_image: element.Images_orig[0].post_thumb_image });
            });
            this.title = response.title;
        });
    }
    GetAllDetail() {
        this.allVideos = [];
        const detail = {
            "client_id": "CO-33",
            "employee_id": "2",
            "device": "2",
            "device_id": "browser",
            "app_version": "28",
            "post_id": this.post_id,
            "newsType": "1"
        };
        this.service.GetAllDetail(detail).subscribe(res => {
            const response = JSON.parse(JSON.stringify(res));
            let data = response.data;
            this.openDialog = true;
            // data.forEach(element => {
            this.allVideos.push({ post_image: data.Images[0].post_image, post_thumb_image: data.Images[0].post_thumb_image, created_date: data.Images[0].created_date, commentMessage: data.commentMessage, post_title: data.post_title, submittedReportMessage: data.submittedReportMessage, likedImage: data.likedImage, reportingStatus: data.reportingStatus, showReport: data.showReport });
            // });
        });
    }
    open(data) {
        this.post_id = data.auto_id;
        this.GetAllDetail();
        // console.log(data);
        // this.openDialog = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_space_xlaunch_program_service__WEBPACK_IMPORTED_MODULE_2__["SpaceXLaunchProgramService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 3, consts: [["class", "container-fluid", 4, "ngIf"], ["class", "loader", 4, "ngIf"], ["class", "dialog1 gray_bg dialog", 4, "ngIf"], [1, "container-fluid"], [1, "row"], ["class", "col col-xs-12 col-sm-6 col-md-4 col-lg-3", "style", "padding:8px;cursor: pointer;", 4, "ngFor", "ngForOf"], [1, "col", "col-xs-12", "col-sm-6", "col-md-4", "col-lg-3", 2, "padding", "8px", "cursor", "pointer"], [1, "card", 3, "click"], [1, "image", 2, "margin-left", "69px", 3, "src"], [2, "margin-left", "67px"], [1, "launchDetail"], [2, "color", "#00008ba3", "font-size", "11px"], [2, "width", "12px", 3, "src"], [2, "color", "#00008ba3", "font-size", "11px", "cursor", "pointer", 3, "title"], ["src", "https://benepik.s3.amazonaws.com/uat/kpmg/likeReactions/Thumbs_up.svg", 2, "width", "22px"], [1, "loader"], [1, "dialog1", "gray_bg", "dialog"], [1, "content"], [1, "inner", 2, "height", "364px"], ["style", "padding:8px;cursor: pointer;", 4, "ngFor", "ngForOf"], [1, "modal-footer", "input_box", 2, "padding-bottom", "0", "padding-right", "0", "border-top", "none", "cursor", "pointer"], ["type", "button", 1, "btn", "standard_btn", "cancel", "common_button", 2, "margin-top", "55px", 3, "click"], [2, "padding", "8px", "cursor", "pointer"], [1, "card", "col-sm-6", 3, "click"], ["autoplay", "", "width", "420", "height", "315", "controls", "", 3, "poster"], ["videoPlayer", ""], ["type", "video/mp4", 3, "src"], [1, "container"], [1, "col-sm-6", 2, "margin-top", "33px"], [2, "width", "32px", 3, "src"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 8, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openDialog);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".card[_ngcontent-%COMP%] {\r\n  \r\n  transition: 0.3s;\r\n  \r\n  border-radius: 5px;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  border-radius: 5px 5px 0 0;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  padding: 2px 16px;\r\n  margin-left: 35px;\r\n}\r\n.launch_year[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  border: 1px solid #008000bd;\r\n  border-bottom-left-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n  border-top-left-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n  margin-right: 5px;\r\n  margin-bottom: 5px;\r\n color: black;\r\n}\r\n.loader[_ngcontent-%COMP%] {\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid #3498db;\r\n  width: 120px;\r\n  height: 120px; \r\n  animation: spin 2s linear infinite;\r\n  margin-left: 752px;\r\n  margin-top: 265px;\r\n  background: transparent;\r\n}\r\n.scroll[_ngcontent-%COMP%] {\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  height: 700px;\r\n  \r\n}\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n.missionNameAndFlightNumber[_ngcontent-%COMP%] {\r\n  color: #00008ba1;\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n}\r\n.missionId[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n  color:black\r\n}\r\n.launchDetail[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: black;\r\n}\r\n.image[_ngcontent-%COMP%] {\r\n  \r\n  height: 262px;\r\n    width: 64%;\r\n    background: #80808014;\r\n    margin-left: 50px;\r\n    margin-top: 13px;\r\n    margin-bottom: 13px;\r\n}\r\n.noRecordFound[_ngcontent-%COMP%] {\r\n  margin-left: 435px;\r\n  font-weight: bold;\r\n  font-size: 17px;\r\n  color: black;\r\n}\r\n.demo-chip-list[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.dialog1[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  background: rgba(0, 0, 0, .85);\r\n  height: 100vh;\r\n  z-index: 25;\r\n}\r\n.dialog1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  width: 75%;\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 3px 20px #0000001a;\r\n  text-align: center;\r\n  margin-top: 120px;\r\n}\r\n.dialog1[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  margin: 0 auto;\r\n  width: 40%;\r\n  height: auto;\r\n  margin-top: 276px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBNkM7RUFDN0MsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsd0NBQXdDOztBQUUxQztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CLFlBQVk7QUFDYjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWEsRUFDK0IsV0FBVztFQUN2RCxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDZDQUE2QztBQUMvQztBQUNBO0VBQ0UsS0FBSyx1QkFBdUIsRUFBRTtFQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3BDO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Y7QUFDRjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0U7Ozs7O3dCQUtzQjtFQUN0QixhQUFhO0lBQ1gsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIC8qIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTsgKi9cclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG5cclxufVxyXG5pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAycHggMTZweDtcclxuICBtYXJnaW4tbGVmdDogMzVweDtcclxufVxyXG4ubGF1bmNoX3llYXIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDA4MDAwYmQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gY29sb3I6IGJsYWNrO1xyXG59XHJcbi5sb2FkZXIge1xyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAvKiBTYWZhcmkgKi9cclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiA3NTJweDtcclxuICBtYXJnaW4tdG9wOiAyNjVweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnNjcm9sbCB7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDcwMHB4O1xyXG4gIC8qIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiKDAgMCAwIC8gMTklKTsgKi9cclxufVxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcbi5taXNzaW9uTmFtZUFuZEZsaWdodE51bWJlciB7XHJcbiAgY29sb3I6ICMwMDAwOGJhMTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLm1pc3Npb25JZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOmJsYWNrXHJcbn1cclxuLmxhdW5jaERldGFpbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uaW1hZ2Uge1xyXG4gIC8qIGhlaWdodDogMTcycHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBiYWNrZ3JvdW5kOiAjODA4MDgwMTQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTNweDtcclxuICBtYXJnaW4tYm90dG9tOiAxM3B4OyAqL1xyXG4gIGhlaWdodDogMjYycHg7XHJcbiAgICB3aWR0aDogNjQlO1xyXG4gICAgYmFja2dyb3VuZDogIzgwODA4MDE0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxufVxyXG5cclxuLm5vUmVjb3JkRm91bmQge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MzVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5kZW1vLWNoaXAtbGlzdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmRpYWxvZzEge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC44NSk7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB6LWluZGV4OiAyNTtcclxufVxyXG5cclxuLmRpYWxvZzEgLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCAyMHB4ICMwMDAwMDAxYTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbn1cclxuXHJcbi5kaWFsb2cxIC5kaWFsb2cgLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDQwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjc2cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_space_xlaunch_program_service__WEBPACK_IMPORTED_MODULE_2__["SpaceXLaunchProgramService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_space_xlaunch_program_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/space-xlaunch-program.service */ "./src/services/space-xlaunch-program.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_space_xlaunch_program_service__WEBPACK_IMPORTED_MODULE_4__["SpaceXLaunchProgramService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot()
                ],
                providers: [_services_space_xlaunch_program_service__WEBPACK_IMPORTED_MODULE_4__["SpaceXLaunchProgramService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


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

/***/ "./src/model/filter.ts":
/*!*****************************!*\
  !*** ./src/model/filter.ts ***!
  \*****************************/
/*! exports provided: ProgramFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramFilter", function() { return ProgramFilter; });
class ProgramFilter {
}


/***/ }),

/***/ "./src/services/space-xlaunch-program.service.ts":
/*!*******************************************************!*\
  !*** ./src/services/space-xlaunch-program.service.ts ***!
  \*******************************************************/
/*! exports provided: SpaceXLaunchProgramService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceXLaunchProgramService", function() { return SpaceXLaunchProgramService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class SpaceXLaunchProgramService {
    constructor(http) {
        this.http = http;
        this.allSpaceXProgramEndpoint = 'https://api.spacexdata.com/v3/launches';
    }
    allSpaceXProgramList(limit, launch_success, land_success, launch_year) {
        return this.http.get(this.allSpaceXProgramEndpoint + `?limit=${limit}&launch_success=${launch_success}&land_success=${land_success}&launch_year=${launch_year}`);
    }
    GetAllPost(post) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'OUlBV0Z5Y1R2TDNnRjRTVmdMMStTQT09OjqZq1UZPSgSoDXMefyz5L/3'
            })
        };
        // const value = "aa";
        return this.http.post(`https://benepik.org/kpmg/APIs/News/Get_post`, post, httpOptions);
    }
    GetAllDetail(detail) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'OUlBV0Z5Y1R2TDNnRjRTVmdMMStTQT09OjqZq1UZPSgSoDXMefyz5L/3'
            })
        };
        // const value = "aa";
        return this.http.post(`https://benepik.org/kpmg/APIs/News/Post_detail`, detail, httpOptions);
    }
}
SpaceXLaunchProgramService.ɵfac = function SpaceXLaunchProgramService_Factory(t) { return new (t || SpaceXLaunchProgramService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SpaceXLaunchProgramService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpaceXLaunchProgramService, factory: SpaceXLaunchProgramService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpaceXLaunchProgramService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Benepik\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map