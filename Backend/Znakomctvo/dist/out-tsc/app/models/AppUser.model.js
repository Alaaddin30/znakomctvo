"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppUser = (function () {
    function AppUser(id, name, email, password, birthDate, registerDate, city, viewCount, lastLogin, rating, height, weight, description, gender, orientation, region, photos, messages) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.birthDate = birthDate;
        this.registerDate = registerDate;
        this.city = city;
        this.viewCount = viewCount;
        this.lastLogin = lastLogin;
        this.rating = rating;
        this.height = height;
        this.weight = weight;
        this.description = description;
        this.gender = gender;
        this.orientation = orientation;
        this.region = region;
        this.photos = photos;
        this.messages = messages;
    }
    return AppUser;
}());
exports.AppUser = AppUser;
//# sourceMappingURL=AppUser.model.js.map