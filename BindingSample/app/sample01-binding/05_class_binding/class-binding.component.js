"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ClassBindingComponent = /** @class */ (function () {
    function ClassBindingComponent() {
        this.allClasses = "accent-border error-text highlighted";
        this.currentClasses = "";
        this.isAccentBorder = false;
        this.isErrorText = false;
        this.isHighlighted = false;
    }
    ClassBindingComponent.prototype.toggleAllClasses = function () {
        if (this.currentClasses == "") {
            this.currentClasses = this.allClasses;
        }
        else {
            this.currentClasses = "";
        }
    };
    ClassBindingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "class-binding",
            templateUrl: "class-binding.component.html",
            styleUrls: ["class-binding.component.css"]
        })
    ], ClassBindingComponent);
    return ClassBindingComponent;
}());
exports.ClassBindingComponent = ClassBindingComponent;
//# sourceMappingURL=class-binding.component.js.map