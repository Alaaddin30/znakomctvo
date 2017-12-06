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
var appUser_repository_1 = require("../repositories/appUser.repository");
var UsersComponent = (function () {
    function UsersComponent(repository) {
        this.repository = repository;
    }
    Object.defineProperty(UsersComponent.prototype, "users", {
        get: function () {
            if (this.repository.users) {
                var pageIndex = (this.repository.pagination.currentPage - 1) * this.repository.pagination.usersPerPage;
                return this.repository.users.slice(pageIndex, pageIndex + this.repository.pagination.usersPerPage);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "requestDone", {
        get: function () {
            console.log(this.repository.requestCompleted);
            return this.repository.requestCompleted;
        },
        enumerable: true,
        configurable: true
    });
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'zn-users',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.css']
    }),
    __metadata("design:paramtypes", [appUser_repository_1.AppUserRepository])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map