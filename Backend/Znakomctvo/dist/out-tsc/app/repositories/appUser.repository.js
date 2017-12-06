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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var Pagination_class_1 = require("./config/Pagination.class");
var Filter_class_1 = require("./config/Filter.class");
var usersUrl = "/api/users";
var AppUserRepository = (function () {
    function AppUserRepository(http) {
        this.http = http;
        this.paginationInstance = new Pagination_class_1.Pagination();
        this.filterInstance = new Filter_class_1.Filter("all", 18, 99, "all", "all", false, false);
        this.requestCompleted = false;
        this.getAllUsers();
    }
    Object.defineProperty(AppUserRepository.prototype, "pagination", {
        get: function () {
            return this.paginationInstance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppUserRepository.prototype, "filter", {
        get: function () {
            return this.filterInstance;
        },
        enumerable: true,
        configurable: true
    });
    AppUserRepository.prototype.getAllUsers = function () {
        var _this = this;
        this.users = null;
        this.requestCompleted = false;
        this.sendRequest(http_1.RequestMethod.Get, usersUrl)
            .subscribe(function (response) {
            _this.users = response;
            _this.pagination.currentPage = 1;
        }, function (error) {
            console.log("*** " + error + " ***");
        }, function () {
            _this.requestCompleted = true;
        });
    };
    AppUserRepository.prototype.filterUsers = function () {
        var _this = this;
        this.users = null;
        this.requestCompleted = false;
        var url = usersUrl + "/filter";
        if (this.filter.gender) {
            url += "?gender=" + this.filter.gender;
        }
        if (this.filter.city) {
            url += "&city=" + this.filter.city;
        }
        if (this.filter.fromAge) {
            url += "&fromAge=" + this.filter.fromAge;
        }
        if (this.filter.toAge) {
            url += "&toAge=" + this.filter.toAge;
        }
        if (this.filter.region) {
            url += "&region=" + this.filter.region;
        }
        if (this.filter.photo) {
            url += "&photo=" + this.filter.photo;
        }
        if (this.filter.online) {
            url += "&online=" + this.filter.online;
        }
        this.sendRequest(http_1.RequestMethod.Get, url)
            .subscribe(function (response) {
            _this.users = response;
            _this.pagination.currentPage = 1;
        }, function (error) {
            console.log("***" + error + "***");
        }, function () {
            _this.requestCompleted = true;
        });
    };
    AppUserRepository.prototype.getMen = function () {
        var _this = this;
        this.users = null;
        this.requestCompleted = false;
        this.sendRequest(http_1.RequestMethod.Get, usersUrl + "/" + "men")
            .subscribe(function (response) {
            _this.users = response;
            _this.pagination.currentPage = 1;
        }, function (error) {
            console.log("***" + error + "***");
        }, function () {
            _this.requestCompleted = true;
        });
    };
    AppUserRepository.prototype.getWomen = function () {
        var _this = this;
        this.users = null;
        this.requestCompleted = false;
        this.sendRequest(http_1.RequestMethod.Get, usersUrl + "/" + "women")
            .subscribe(function (response) {
            _this.users = response;
            _this.pagination.currentPage = 1;
        }, function (error) {
            console.log("***" + error + "***");
        }, function () {
            _this.requestCompleted = true;
        });
    };
    AppUserRepository.prototype.sendRequest = function (verb, url, data) {
        return this.http.request(new http_1.Request({ method: verb, url: url, body: data })).map(function (response) { return response.json(); });
    };
    return AppUserRepository;
}());
AppUserRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AppUserRepository);
exports.AppUserRepository = AppUserRepository;
//# sourceMappingURL=appUser.repository.js.map