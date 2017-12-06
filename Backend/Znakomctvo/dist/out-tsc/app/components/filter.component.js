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
var enums_1 = require("../models/enums/enums");
var FilterComponent = (function () {
    function FilterComponent(repository) {
        this.repository = repository;
        this.ages = [];
        this.regionsEnum = enums_1.REGIONS;
        this.cities = this.setDefaultCities();
        this.genders = this.setGenders();
        for (var i = 18; i < 100; i++) {
            this.ages.push(i);
        }
        this.filter = repository.filter;
    }
    FilterComponent.prototype.filterUsers = function () {
        this.repository.filterUsers();
        console.log(this.filter);
    };
    Object.defineProperty(FilterComponent.prototype, "regions", {
        get: function () {
            var keys = Object.keys(this.regionsEnum);
            return keys.slice(keys.length / 2);
        },
        enumerable: true,
        configurable: true
    });
    FilterComponent.prototype.setDefaultCities = function () {
        var keys = Object.keys(enums_1.STOCKHOLMS);
        return keys.slice(keys.length / 2);
    };
    FilterComponent.prototype.setGenders = function () {
        var keys = Object.keys(enums_1.GENDERS);
        return keys.slice(keys.length / 2);
    };
    FilterComponent.prototype.getCities = function (regionString) {
        var keys = [];
        var cities = [];
        var region = enums_1.REGIONS[regionString];
        console.log(regionString);
        switch (region) {
            case enums_1.REGIONS.Stockholm:
                keys = Object.keys(enums_1.STOCKHOLMS);
                cities = keys.slice(keys.length / 2);
                break;
            case enums_1.REGIONS.Gothenburg:
                keys = Object.keys(enums_1.GOTHENBURGS);
                cities = keys.slice(keys.length / 2);
                break;
            default:
                keys = Object.keys(enums_1.STOCKHOLMS);
                cities = keys.slice(keys.length / 2);
        }
        this.cities = cities;
    };
    return FilterComponent;
}());
FilterComponent = __decorate([
    core_1.Component({
        selector: "zn-filter",
        templateUrl: "./filter.component.html",
        styleUrls: ["filter.component.css"]
    }),
    __metadata("design:paramtypes", [appUser_repository_1.AppUserRepository])
], FilterComponent);
exports.FilterComponent = FilterComponent;
//# sourceMappingURL=filter.component.js.map