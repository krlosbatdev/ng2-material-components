"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var input_base_component_1 = require('../input-base/input-base.component');
var custom_validators_1 = require('../validators/custom-validators');
var EmailComponent = (function (_super) {
    __extends(EmailComponent, _super);
    function EmailComponent(el) {
        _super.call(this, el);
    }
    EmailComponent.prototype.addValidators = function () {
        this.validations.push({
            validator: custom_validators_1.CustomValidators.emailAddress,
            type: 'invalidEmail',
            message: "Email address is invalid",
        });
    };
    EmailComponent.prototype.ngOnInit = function () {
        this.onInit();
        if (!this.leftIcon) {
            this.leftIcon = 'email';
        }
    };
    EmailComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroupDirective)
    ], EmailComponent.prototype, "fgd", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EmailComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EmailComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EmailComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], EmailComponent.prototype, "floatingLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EmailComponent.prototype, "leftIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EmailComponent.prototype, "rightIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], EmailComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EmailComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], EmailComponent.prototype, "required", void 0);
    EmailComponent = __decorate([
        core_1.Component({
            selector: 'email',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, forms_1.DefaultValueAccessor],
            template: "\n      <div class=\"input-group m-b-15 w-100\" [class.fg-float]=\"floatingLabel\" style=\"{ 'has-error': !control.valid &amp;&amp; (fgd.form.submitted || control.dirty)}\"><label *ngIf=\"label &amp;&amp; !floatingLabel\">{{label}}</label><span class=\"input-group-addon\" *ngIf=\"leftIcon\"><i class=\"zmdi zmdi-{{leftIcon}}\"></i></span><div class=\"fg-line\" [class.disabled]=\"disabled\" [class.fg-toggled]=\"toggled\"><input class=\"form-control\" #i type=\"text\" placeholder=\"{{placeholder}}\" [formControl]=\"control\" [attr.disabled]=\"disabled\" (focus)=\"onFocus(i)\" (blur)=\"onBlur(i)\"><label class=\"fg-label\" *ngIf=\"label &amp;&amp; floatingLabel\">{{label}}</label></div><span class=\"input-group-addon last\" *ngIf=\"rightIcon\"><i class=\"zmdi zmdi-{{rightIcon}}\"></i></span><div *ngIf=\"!control.valid &amp;&amp; (control.dirty || fgd.form.submitted)\"><small class=\"help-block animated fadeInDown\" *ngFor=\"let v of validations\" [class.hidden]=\"!control.errors[v.type]\">{{v.message}}</small></div></div>\n    ",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], EmailComponent);
    return EmailComponent;
}(input_base_component_1.InputBase));
exports.EmailComponent = EmailComponent;