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
var core_1 = require("@angular/core");
var AppUser_model_1 = require("../models/AppUser.model");
var UserComponent = (function () {
    function UserComponent() {
    }
    return UserComponent;
}());
__decorate([
    core_1.Input("zn-user"),
    __metadata("design:type", AppUser_model_1.AppUser)
], UserComponent.prototype, "user", void 0);
UserComponent = __decorate([
    core_1.Component({
        selector: 'zn-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.css']
    })
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map