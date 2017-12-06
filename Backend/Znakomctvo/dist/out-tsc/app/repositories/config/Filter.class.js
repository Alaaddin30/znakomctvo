"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Filter = (function () {
    //gender?: GENDERS = GENDERS.Female;
    //fromAge?: number = 18;
    //toAge?: number = 99;
    //region?: REGIONS = REGIONS.Stockholm;
    //city?: string = "Stockholm";
    //photo?: boolean = false;
    //online?: boolean = false;
    function Filter(gender, fromAge, toAge, region, city, photo, online) {
        this.gender = gender;
        this.fromAge = fromAge;
        this.toAge = toAge;
        this.region = region;
        this.city = city;
        this.photo = photo;
        this.online = online;
    }
    return Filter;
}());
exports.Filter = Filter;
//# sourceMappingURL=Filter.class.js.map