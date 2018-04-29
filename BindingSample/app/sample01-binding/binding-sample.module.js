"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var index_1 = require("./index");
var BindingSamplesModule = /** @class */ (function () {
    function BindingSamplesModule() {
    }
    BindingSamplesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [
                index_1.InterpolationComponent,
                index_1.PropertyBindingComponent,
                index_1.EventBindingComponent,
                index_1.AttributeBindingComponent,
                index_1.ClassBindingComponent,
                index_1.StyleBindingComponent,
            ]
        })
    ], BindingSamplesModule);
    return BindingSamplesModule;
}());
exports.BindingSamplesModule = BindingSamplesModule;
//# sourceMappingURL=binding-sample.module.js.map