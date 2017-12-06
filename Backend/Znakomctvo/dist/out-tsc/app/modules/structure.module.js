"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var users_component_1 = require("../components/users.component");
var user_component_1 = require("../components/user.component");
var navigation_component_1 = require("../components/navigation.component");
var footer_component_1 = require("../components/footer.component");
var filter_component_1 = require("../components/filter.component");
var sidebar_component_1 = require("../components/sidebar.component");
var pagination_component_1 = require("../components/pagination.component");
var structure_component_1 = require("../components/structure.component");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var profile_card_component_1 = require("../components/profile-card.component");
var forms_1 = require("@angular/forms");
var outlet_component_1 = require("../components/outlet.component");
var StructureModule = (function () {
    function StructureModule() {
    }
    return StructureModule;
}());
StructureModule = __decorate([
    core_1.NgModule({
        declarations: [users_component_1.UsersComponent, outlet_component_1.OutletComponent, user_component_1.UserComponent, navigation_component_1.NavigationComponent,
            footer_component_1.FooterComponent, filter_component_1.FilterComponent, sidebar_component_1.SidebarComponent, pagination_component_1.PaginationComponent, profile_card_component_1.ProfileCardComponent, structure_component_1.StructureComponent],
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        exports: [structure_component_1.StructureComponent]
    })
], StructureModule);
exports.StructureModule = StructureModule;
//# sourceMappingURL=structure.module.js.map