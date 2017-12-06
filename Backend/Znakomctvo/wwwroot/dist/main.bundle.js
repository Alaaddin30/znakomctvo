webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(105);


var bootApplication = function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
};
if (true) {
    module["hot"].accept();
    module["hot"].dispose(function () {
        var oldRootElem = document.querySelector("app-root");
        var newRootElem = document.createElement("app-root");
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().destroy();
    });
}
if (document.readyState === "complete") {
    bootApplication();
}
else {
    document.addEventListener("DOMContentLoaded", bootApplication);
}
//# sourceMappingURL=boot.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_components_user_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_components_outlet_component__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingConfig; });



var routes = [
    { path: "outlet", component: __WEBPACK_IMPORTED_MODULE_2__app_components_outlet_component__["a" /* OutletComponent */] },
    { path: "profile/:id", component: __WEBPACK_IMPORTED_MODULE_1__app_components_user_component__["a" /* UserComponent */] },
    { path: "", component: __WEBPACK_IMPORTED_MODULE_2__app_components_outlet_component__["a" /* OutletComponent */] },
    { path: "**", redirectTo: "/outlet" }
];
var RoutingConfig = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(128),
        styles: [__webpack_require__(120)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_model_module__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_structure_module__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* RoutingConfig */],
            __WEBPACK_IMPORTED_MODULE_5__modules_model_module__["a" /* ModelModule */],
            __WEBPACK_IMPORTED_MODULE_6__modules_structure_module__["a" /* StructureModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repositories_appUser_repository__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_enums_enums__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterComponent = (function () {
    function FilterComponent(repository) {
        this.repository = repository;
        this.ages = [];
        this.regionsEnum = __WEBPACK_IMPORTED_MODULE_2__models_enums_enums__["a" /* REGIONS */];
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
        var keys = Object.keys(__WEBPACK_IMPORTED_MODULE_2__models_enums_enums__["b" /* STOCKHOLMS */]);
        return keys.slice(keys.length / 2);
    };
    FilterComponent.prototype.setGenders = function () {
        var keys = Object.keys(__WEBPACK_IMPORTED_MODULE_2__models_enums_enums__["c" /* GENDERS */]);
        return keys.slice(keys.length / 2);
    };
    FilterComponent.prototype.getCities = function (regionString) {
        var keys = [];
        var cities = [];
        var region = __WEBPACK_IMPORTED_MODULE_2__models_enums_enums__["a" /* REGIONS */][regionString];
        console.log(regionString);
        switch (region) {
            case __WEBPACK_IMPORTED_MODULE_2__models_enums_enums__["a" /* REGIONS */].Stockholm:
                keys = Object.keys(__WEBPACK_IMPORTED_MODULE_2__models_enums_enums__["b" /* STOCKHOLMS */]);
                cities = keys.slice(keys.length / 2);
                break;
            case __WEBPACK_IMPORTED_MODULE_2__models_enums_enums__["a" /* REGIONS */].Gothenburg:
                keys = Object.keys(__WEBPACK_IMPORTED_MODULE_2__models_enums_enums__["d" /* GOTHENBURGS */]);
                cities = keys.slice(keys.length / 2);
                break;
            default:
                keys = Object.keys(__WEBPACK_IMPORTED_MODULE_2__models_enums_enums__["b" /* STOCKHOLMS */]);
                cities = keys.slice(keys.length / 2);
        }
        this.cities = cities;
    };
    return FilterComponent;
}());
FilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "zn-filter",
        template: __webpack_require__(129),
        styles: [__webpack_require__(121)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__repositories_appUser_repository__["a" /* AppUserRepository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__repositories_appUser_repository__["a" /* AppUserRepository */]) === "function" && _a || Object])
], FilterComponent);

var _a;
//# sourceMappingURL=filter.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "zn-footer",
        template: __webpack_require__(130)
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repositories_appUser_repository__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(repository) {
        this.repository = repository;
    }
    NavigationComponent.prototype.getAll = function () {
        this.repository.getAllUsers();
    };
    NavigationComponent.prototype.getMen = function () {
        this.repository.getMen();
    };
    NavigationComponent.prototype.getWomen = function () {
        this.repository.getWomen();
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "zn-navigation",
        template: __webpack_require__(131),
        styles: [__webpack_require__(122)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__repositories_appUser_repository__["a" /* AppUserRepository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__repositories_appUser_repository__["a" /* AppUserRepository */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repositories_appUser_repository__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = (function () {
    function PaginationComponent(repository) {
        this.repository = repository;
    }
    Object.defineProperty(PaginationComponent.prototype, "current", {
        get: function () {
            return this.repository.pagination.currentPage;
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.changePage = function (newPage) {
        this.repository.pagination.currentPage = newPage;
    };
    Object.defineProperty(PaginationComponent.prototype, "pages", {
        get: function () {
            if (this.repository.users != null) {
                return Array(Math.ceil(this.repository.users.length / this.repository.pagination.usersPerPage))
                    .fill(0).map(function (x, i) { return i + 1; });
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    return PaginationComponent;
}());
PaginationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "zn-pagination",
        template: __webpack_require__(133),
        styles: [__webpack_require__(123)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__repositories_appUser_repository__["a" /* AppUserRepository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__repositories_appUser_repository__["a" /* AppUserRepository */]) === "function" && _a || Object])
], PaginationComponent);

var _a;
//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileCardComponent = (function () {
    function ProfileCardComponent() {
    }
    return ProfileCardComponent;
}());
ProfileCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'zn-profile-card',
        template: __webpack_require__(134),
        styles: [__webpack_require__(124)]
    }),
    __metadata("design:paramtypes", [])
], ProfileCardComponent);

//# sourceMappingURL=profile-card.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'zn-sidebar',
        template: __webpack_require__(135),
        styles: [__webpack_require__(125)]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StructureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StructureComponent = (function () {
    function StructureComponent() {
    }
    return StructureComponent;
}());
StructureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "zn-structure",
        template: __webpack_require__(136)
    })
], StructureComponent);

//# sourceMappingURL=structure.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repositories_appUser_repository__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'zn-users',
        template: __webpack_require__(138),
        styles: [__webpack_require__(127)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__repositories_appUser_repository__["a" /* AppUserRepository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__repositories_appUser_repository__["a" /* AppUserRepository */]) === "function" && _a || Object])
], UsersComponent);

var _a;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUser; });
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

//# sourceMappingURL=AppUser.model.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GENDERS; });
/* unused harmony export ORIENTATIONS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REGIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return STOCKHOLMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GOTHENBURGS; });
var GENDERS;
(function (GENDERS) {
    GENDERS[GENDERS["Female"] = 0] = "Female";
    GENDERS[GENDERS["Male"] = 1] = "Male";
})(GENDERS || (GENDERS = {}));
;
var ORIENTATIONS;
(function (ORIENTATIONS) {
    ORIENTATIONS[ORIENTATIONS["Heterosexual"] = 0] = "Heterosexual";
    ORIENTATIONS[ORIENTATIONS["Homosexual"] = 1] = "Homosexual";
    ORIENTATIONS[ORIENTATIONS["Bisexual"] = 2] = "Bisexual";
})(ORIENTATIONS || (ORIENTATIONS = {}));
;
var REGIONS;
(function (REGIONS) {
    REGIONS[REGIONS["Stockholm"] = 0] = "Stockholm";
    REGIONS[REGIONS["Gothenburg"] = 1] = "Gothenburg";
})(REGIONS || (REGIONS = {}));
;
var STOCKHOLMS;
(function (STOCKHOLMS) {
    STOCKHOLMS[STOCKHOLMS["Stockholm"] = 0] = "Stockholm";
    STOCKHOLMS[STOCKHOLMS["Botkyrka"] = 1] = "Botkyrka";
    STOCKHOLMS[STOCKHOLMS["Danderyd"] = 2] = "Danderyd";
    STOCKHOLMS[STOCKHOLMS["Eker\u00F6"] = 3] = "Eker\u00F6";
    STOCKHOLMS[STOCKHOLMS["Haninge"] = 4] = "Haninge";
    STOCKHOLMS[STOCKHOLMS["Huddinge"] = 5] = "Huddinge";
    STOCKHOLMS[STOCKHOLMS["J\u00E4rf\u00E4lla"] = 6] = "J\u00E4rf\u00E4lla";
    STOCKHOLMS[STOCKHOLMS["Liding\u00F6"] = 7] = "Liding\u00F6";
    STOCKHOLMS[STOCKHOLMS["Nacka"] = 8] = "Nacka";
    STOCKHOLMS[STOCKHOLMS["Norrt\u00E4lje"] = 9] = "Norrt\u00E4lje";
    STOCKHOLMS[STOCKHOLMS["Nykvarn"] = 10] = "Nykvarn";
    STOCKHOLMS[STOCKHOLMS["Nyn\u00E4shamn"] = 11] = "Nyn\u00E4shamn";
    STOCKHOLMS[STOCKHOLMS["Salem"] = 12] = "Salem";
    STOCKHOLMS[STOCKHOLMS["Sigtuna"] = 13] = "Sigtuna";
    STOCKHOLMS[STOCKHOLMS["Sollentuna"] = 14] = "Sollentuna";
    STOCKHOLMS[STOCKHOLMS["Solna"] = 15] = "Solna";
    STOCKHOLMS[STOCKHOLMS["Sundbyberg"] = 16] = "Sundbyberg";
    STOCKHOLMS[STOCKHOLMS["S\u00F6dert\u00E4lje"] = 17] = "S\u00F6dert\u00E4lje";
    STOCKHOLMS[STOCKHOLMS["Tyres\u00F6"] = 18] = "Tyres\u00F6";
    STOCKHOLMS[STOCKHOLMS["T\u00E4by"] = 19] = "T\u00E4by";
    STOCKHOLMS[STOCKHOLMS["UpplandsBro"] = 20] = "UpplandsBro";
    STOCKHOLMS[STOCKHOLMS["UpplandsV\u00E4sby"] = 21] = "UpplandsV\u00E4sby";
    STOCKHOLMS[STOCKHOLMS["Vallentuna"] = 22] = "Vallentuna";
    STOCKHOLMS[STOCKHOLMS["Vaxholm"] = 23] = "Vaxholm";
    STOCKHOLMS[STOCKHOLMS["V\u00E4rmd\u00F6"] = 24] = "V\u00E4rmd\u00F6";
    STOCKHOLMS[STOCKHOLMS["\u00D6ster\u00E5ker"] = 25] = "\u00D6ster\u00E5ker";
})(STOCKHOLMS || (STOCKHOLMS = {}));
;
var GOTHENBURGS;
(function (GOTHENBURGS) {
    GOTHENBURGS[GOTHENBURGS["G\u00F6teborg"] = 0] = "G\u00F6teborg";
    GOTHENBURGS[GOTHENBURGS["Ale"] = 1] = "Ale";
    GOTHENBURGS[GOTHENBURGS["Alings\u00E5s"] = 2] = "Alings\u00E5s";
    GOTHENBURGS[GOTHENBURGS["Bengtsfors"] = 3] = "Bengtsfors";
    GOTHENBURGS[GOTHENBURGS["Bollebygd"] = 4] = "Bollebygd";
    GOTHENBURGS[GOTHENBURGS["Bor\u00E5s"] = 5] = "Bor\u00E5s";
    GOTHENBURGS[GOTHENBURGS["DalsEd"] = 6] = "DalsEd";
    GOTHENBURGS[GOTHENBURGS["Essunga"] = 7] = "Essunga";
    GOTHENBURGS[GOTHENBURGS["Falk\u00F6ping"] = 8] = "Falk\u00F6ping";
    GOTHENBURGS[GOTHENBURGS["F\u00E4rgelanda"] = 9] = "F\u00E4rgelanda";
    GOTHENBURGS[GOTHENBURGS["Gr\u00E4storp"] = 10] = "Gr\u00E4storp";
    GOTHENBURGS[GOTHENBURGS["Gullsp\u00E5ng"] = 11] = "Gullsp\u00E5ng";
    GOTHENBURGS[GOTHENBURGS["G\u00F6tene"] = 12] = "G\u00F6tene";
    GOTHENBURGS[GOTHENBURGS["Herrljunga"] = 13] = "Herrljunga";
    GOTHENBURGS[GOTHENBURGS["Hjo"] = 14] = "Hjo";
    GOTHENBURGS[GOTHENBURGS["H\u00E4rryda"] = 15] = "H\u00E4rryda";
    GOTHENBURGS[GOTHENBURGS["Karlsborg"] = 16] = "Karlsborg";
    GOTHENBURGS[GOTHENBURGS["Kung\u00E4lv"] = 17] = "Kung\u00E4lv";
    GOTHENBURGS[GOTHENBURGS["Lerum"] = 18] = "Lerum";
    GOTHENBURGS[GOTHENBURGS["Lidk\u00F6ping"] = 19] = "Lidk\u00F6ping";
    GOTHENBURGS[GOTHENBURGS["LillaEdet"] = 20] = "LillaEdet";
    GOTHENBURGS[GOTHENBURGS["Lysekil"] = 21] = "Lysekil";
    GOTHENBURGS[GOTHENBURGS["Mariestad"] = 22] = "Mariestad";
    GOTHENBURGS[GOTHENBURGS["Mark"] = 23] = "Mark";
    GOTHENBURGS[GOTHENBURGS["Mellerud"] = 24] = "Mellerud";
    GOTHENBURGS[GOTHENBURGS["Munkedal"] = 25] = "Munkedal";
    GOTHENBURGS[GOTHENBURGS["M\u00F6lndal"] = 26] = "M\u00F6lndal";
    GOTHENBURGS[GOTHENBURGS["Orust"] = 27] = "Orust";
    GOTHENBURGS[GOTHENBURGS["Partille"] = 28] = "Partille";
    GOTHENBURGS[GOTHENBURGS["Skara"] = 29] = "Skara";
    GOTHENBURGS[GOTHENBURGS["Sk\u00F6vde"] = 30] = "Sk\u00F6vde";
    GOTHENBURGS[GOTHENBURGS["Soten\u00E4s"] = 31] = "Soten\u00E4s";
    GOTHENBURGS[GOTHENBURGS["Stenungsund"] = 32] = "Stenungsund";
    GOTHENBURGS[GOTHENBURGS["Str\u00F6mstad"] = 33] = "Str\u00F6mstad";
    GOTHENBURGS[GOTHENBURGS["Svenljunga"] = 34] = "Svenljunga";
    GOTHENBURGS[GOTHENBURGS["Tanum"] = 35] = "Tanum";
    GOTHENBURGS[GOTHENBURGS["Tibro"] = 36] = "Tibro";
    GOTHENBURGS[GOTHENBURGS["Tidaholm"] = 37] = "Tidaholm";
    GOTHENBURGS[GOTHENBURGS["Tj\u00F6rn"] = 38] = "Tj\u00F6rn";
    GOTHENBURGS[GOTHENBURGS["Tranemo"] = 39] = "Tranemo";
    GOTHENBURGS[GOTHENBURGS["Trollh\u00E4ttan"] = 40] = "Trollh\u00E4ttan";
    GOTHENBURGS[GOTHENBURGS["T\u00F6reboda"] = 41] = "T\u00F6reboda";
    GOTHENBURGS[GOTHENBURGS["Uddevalla"] = 42] = "Uddevalla";
    GOTHENBURGS[GOTHENBURGS["Ulricehamn"] = 43] = "Ulricehamn";
    GOTHENBURGS[GOTHENBURGS["Vara"] = 44] = "Vara";
    GOTHENBURGS[GOTHENBURGS["V\u00E5rg\u00E5rda"] = 45] = "V\u00E5rg\u00E5rda";
    GOTHENBURGS[GOTHENBURGS["V\u00E4nersborg"] = 46] = "V\u00E4nersborg";
    GOTHENBURGS[GOTHENBURGS["\u00C5m\u00E5l"] = 47] = "\u00C5m\u00E5l";
    GOTHENBURGS[GOTHENBURGS["\u00D6cker\u00F6"] = 48] = "\u00D6cker\u00F6";
})(GOTHENBURGS || (GOTHENBURGS = {}));
;
//# sourceMappingURL=enums.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repositories_appUser_repository__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ModelModule = (function () {
    function ModelModule() {
    }
    return ModelModule;
}());
ModelModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__repositories_appUser_repository__["a" /* AppUserRepository */]] // registering repo for DI
    })
], ModelModule);

//# sourceMappingURL=model.module.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_users_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navigation_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_filter_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_sidebar_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_pagination_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_structure_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_card_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_outlet_component__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StructureModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var StructureModule = (function () {
    function StructureModule() {
    }
    return StructureModule;
}());
StructureModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__components_users_component__["a" /* UsersComponent */], __WEBPACK_IMPORTED_MODULE_13__components_outlet_component__["a" /* OutletComponent */], __WEBPACK_IMPORTED_MODULE_2__components_user_component__["a" /* UserComponent */], __WEBPACK_IMPORTED_MODULE_3__components_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_5__components_filter_component__["a" /* FilterComponent */], __WEBPACK_IMPORTED_MODULE_6__components_sidebar_component__["a" /* SidebarComponent */], __WEBPACK_IMPORTED_MODULE_7__components_pagination_component__["a" /* PaginationComponent */], __WEBPACK_IMPORTED_MODULE_11__components_profile_card_component__["a" /* ProfileCardComponent */], __WEBPACK_IMPORTED_MODULE_8__components_structure_component__["a" /* StructureComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_12__angular_forms__["b" /* ReactiveFormsModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_8__components_structure_component__["a" /* StructureComponent */]]
    })
], StructureModule);

//# sourceMappingURL=structure.module.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });
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

//# sourceMappingURL=Filter.class.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pagination; });
var Pagination = (function () {
    function Pagination() {
        this.usersPerPage = 12;
        this.currentPage = 1;
    }
    return Pagination;
}());

//# sourceMappingURL=Pagination.class.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "button.btn-link {\r\n    color:#fff;\r\n}\r\n    button.btn-link,button.btn-link:focus, button.btn-link:active {\r\n        text-decoration: none;\r\n        border: none !important;\r\n        /*background-color: #3ba4f9;*/\r\n    }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".main-section {\n    border: 0px solid #138496;\n    background-color: #fff;\n}\n\n.profile-header {\n    background-color: #17a2b8;\n    height: 150px;\n}\n\n.user-detail {\n    margin: -50px 0px 30px 0px;\n}\n\n    .user-detail img {\n        height: 100px;\n        width: 100px;\n    }\n\n    .user-detail h5 {\n        margin: 15px 0px 5px 0px;\n    }\n\n.user-social-detail {\n    padding: 15px 0px;\n    background-color: #17a2b8;\n}\n\n    .user-social-detail a i {\n        color: #fff;\n        font-size: 23px;\n        padding: 0px 5px;\n    }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "#users {\r\n    border-left:1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

module.exports = "<zn-structure></zn-structure>\n"

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

module.exports = "<form novalidate #searchForm=\"ngForm\">\r\n    <div class=\"mt-4 mb-4\">\r\n        <div class=\"row form-inline ml-2 mb-3\">\r\n            <label class=\"mr-sm-2\">Looking for</label>\r\n            <select #gender=\"ngModel\" name=\"gender\" [(ngModel)]=\"filter.gender\" class=\"custom-select mb-2 mr-sm-2 mb-sm-0\">\r\n                <option value=\"all\">--Choose gender--</option>\r\n                <option *ngFor=\"let gender of genders\">{{gender}}</option>\r\n            </select>\r\n            <label class=\"mr-sm-2\">Region</label>\r\n            <select #region=\"ngModel\" name=\"region\" [(ngModel)]=\"filter.region\"  (change)=\"getCities($event.target.value)\"  class=\"custom-select mb-2 mr-sm-2 mb-sm-0\">\r\n                <option value=\"all\">--Choose Region--</option>\r\n                <option *ngFor=\"let region of regions\">{{region}}</option>\r\n            </select>\r\n            <label class=\"mr-sm-2\">City</label>\r\n            <select #city=\"ngModel\" name=\"city\" [(ngModel)]=\"filter.city\"  class=\"custom-select mb-2 mr-sm-2 mb-sm-0\">\r\n                <option value=\"all\" selected>--Choose city--</option>\r\n                <option *ngFor=\"let city of cities\">{{city}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"row form-inline ml-2\">\r\n            <label class=\"mr-sm-2\">from</label>\r\n            <select #fromAge=\"ngModel\" name=\"fromAge\" [(ngModel)]=\"filter.fromAge\"  class=\"custom-select mb-2 mr-2 mb-sm-0\">\r\n                <option *ngFor=\"let age of ages\">{{age}}</option>\r\n            </select>\r\n            <label class=\"mr-sm-2\">to</label>\r\n            <select #toAge=\"ngModel\" name=\"toAge\" [(ngModel)]=\"filter.toAge\"  class=\"custom-select mb-2 mr-2 mb-sm-0\">\r\n                <option *ngFor=\"let age of ages\">{{age}}</option>\r\n            </select>\r\n            <div class=\"form-check mr-2\">\r\n                <label class=\"form-check-label\">\r\n                    <input #online=\"ngModel\" name=\"online\" [(ngModel)]=\"filter.online\"  type=\"checkbox\" class=\"form-check-input\">\r\n                    Online only\r\n                </label>\r\n            </div>\r\n\r\n            <div class=\"form-check mr-2\">\r\n                <label class=\"form-check-label\">\r\n                    <input #photo=\"ngModel\" name=\"photo\" [(ngModel)]=\"filter.photo\"  type=\"checkbox\" class=\"form-check-input\">\r\n                    Photo\r\n                </label>\r\n            </div>\r\n\r\n            <button (click)=\"filterUsers()\" class=\"btn btn-info btn-sm pt-2 pb-2 pr-4 pl-4 mr-2\">Search</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n<hr />\r\n"

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

module.exports = "<hr />\r\n<footer>\r\n    <p class=\"text-center\">&copy; 2017 - Znakomctvo.demo</p>\r\n    <p class=\"text-center\">alaaddin.albakkour@gmail.com</p>\r\n</footer>"

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse bg-info navbar-toggleable-md bg-faded\">\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <a class=\"navbar-brand\" href=\"#\">Znakomctvo.demo</a>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <button class=\"btn btn-link\" (click)=\"getAll()\" routerLink=\"/\">All users <span class=\"sr-only\">(current)</span></button>\r\n            </li>\r\n            <li class=\"nav-item active\" [routerLinkActive]=\"['active']\">\r\n                <button class=\"btn btn-link\" (click)=\"getMen()\" routerLink=\"/\">All Men</button>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <button class=\"btn btn-link\" (click)=\"getWomen()\" routerLink=\"/\">All Women</button>\r\n            </li>\r\n            <!--<li class=\"nav-item\">\r\n                <a class=\"btn btn-link\" routerLink=\"/outlet\">outlet</a>\r\n            </li>-->\r\n        </ul>\r\n        <!--<form class=\"form-inline my-2 my-lg-0\">\r\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\r\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n        </form>-->\r\n    </div>\r\n</nav>"

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

module.exports = "<zn-filter></zn-filter>\r\n<zn-users></zn-users>\r\n<zn-pagination></zn-pagination>\r\n"

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pages.length>1\">\r\n    <button *ngFor=\"let page of pages\"\r\n            class=\"btn btn-outline-info mx-1\"\r\n            [class.active]=\"current==page\"\r\n            (click)=\"changePage(page)\"\r\n            >\r\n        {{page}}\r\n    </button>\r\n</div>"

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"main-section text-center\">\r\n            <div class=\"row\">\r\n                <div class=\"profile-header\"></div>\r\n            </div>\r\n            <div class=\"row user-detail\">\r\n                <div class=\"\">\r\n                    <img src=\"http://via.placeholder.com/300x200\" class=\"rounded-circle img-thumbnail\">\r\n                    <h5>John Addison</h5>\r\n                    <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> New Jersey, USA.</p>\r\n                    <hr>\r\n                    <a href=\"#\" class=\"btn btn-success btn-sm\">Follow</a>\r\n                    <a href=\"#\" class=\"btn btn-info btn-sm\">Send Messege</a>\r\n                    <hr>\r\n                    <span>Lorem ips consectetur adipisium ,eiusmod tempor incididuin reprehendeanim.</span>\r\n                </div>\r\n            </div>\r\n            <!--<div class=\"row user-social-detail\">\r\n                <div class=\"\">\r\n                    <a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\r\n                    <a href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\r\n                    <a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\r\n                </div>\r\n            </div>-->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

module.exports = "<zn-profile-card></zn-profile-card>"

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

module.exports = "<zn-navigation></zn-navigation>\r\n<div class=\"row no-gutters\">\r\n    <div class=\"col-3 m-1\">\r\n        <zn-sidebar></zn-sidebar>\r\n    </div>\r\n    <div class=\"col\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n<div>\r\n    <zn-footer></zn-footer>\r\n</div>"

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports = "<div [routerLink]=\"['/profile', user?.id]\" class=\"card mb-2\" style=\"width: 100%;\">\r\n    <img class=\"card-img-top\" src=\"http://via.placeholder.com/300x200\" alt=\"Card image cap\">\r\n    <div class=\"card-block\">\r\n        <h4 class=\"card-title\">{{user?.name}}</h4>\r\n        <p class=\"card-text\">{{user?.city}}</p>\r\n        <button class=\"btn btn-info btn-sm pt-2 pb-2 pr-3 pl-3\">Send message</button>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"requestDone; else waiting\" class=\"p-1 ml-2\">\r\n        <div class=\"row\" *ngIf=\"users?.length > 0;else nodata\">\r\n            <div *ngFor=\"let user of users;\" class=\"col-sm-4 col-lg-4 col-md-4\">\r\n                <zn-user [zn-user]=\"user\"></zn-user>\r\n            </div>\r\n        </div>\r\n    </div>\r\n<ng-template #waiting>\r\n    <h4 class=\"m-5 text-center text-info\">Waiting for data...</h4>\r\n</ng-template>\r\n<ng-template #nodata>\r\n    <h4 class=\"m-5 text-center text-info\">No Users.</h4>\r\n</ng-template>"

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_Pagination_class__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_Filter_class__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUserRepository; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var usersUrl = "/api/users";
var AppUserRepository = (function () {
    function AppUserRepository(http) {
        this.http = http;
        this.paginationInstance = new __WEBPACK_IMPORTED_MODULE_3__config_Pagination_class__["a" /* Pagination */]();
        this.filterInstance = new __WEBPACK_IMPORTED_MODULE_4__config_Filter_class__["a" /* Filter */]("all", 18, 99, "all", "all", false, false);
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
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* RequestMethod */].Get, usersUrl)
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
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* RequestMethod */].Get, url)
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
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* RequestMethod */].Get, usersUrl + "/" + "men")
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
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* RequestMethod */].Get, usersUrl + "/" + "women")
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
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Request */]({ method: verb, url: url, body: data })).map(function (response) { return response.json(); });
    };
    return AppUserRepository;
}());
AppUserRepository = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AppUserRepository);

var _a;
//# sourceMappingURL=appUser.repository.js.map

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);
module.exports = __webpack_require__(100);


/***/ }),

/***/ 67:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 67;

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutletComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OutletComponent = (function () {
    function OutletComponent() {
    }
    return OutletComponent;
}());
OutletComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "zn-outlet",
        template: __webpack_require__(132)
    })
], OutletComponent);

//# sourceMappingURL=outlet.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_AppUser_model__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent() {
    }
    return UserComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])("zn-user"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_AppUser_model__["a" /* AppUser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_AppUser_model__["a" /* AppUser */]) === "function" && _a || Object)
], UserComponent.prototype, "user", void 0);
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'zn-user',
        template: __webpack_require__(137),
        styles: [__webpack_require__(126)]
    })
], UserComponent);

var _a;
//# sourceMappingURL=user.component.js.map

/***/ })

},[254]);
//# sourceMappingURL=main.bundle.js.map