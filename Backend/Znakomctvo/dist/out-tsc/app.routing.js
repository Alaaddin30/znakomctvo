"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var users_component_1 = require("./app/components/users.component");
var routes = [
    { path: "users", component: users_component_1.UsersComponent },
    { path: "", component: users_component_1.UsersComponent }
];
exports.RoutingConfig = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map