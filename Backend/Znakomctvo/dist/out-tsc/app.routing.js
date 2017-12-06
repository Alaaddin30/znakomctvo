"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var user_component_1 = require("./app/components/user.component");
var outlet_component_1 = require("./app/components/outlet.component");
var routes = [
    { path: "outlet", component: outlet_component_1.OutletComponent },
    { path: "profile/:id", component: user_component_1.UserComponent },
    { path: "", component: outlet_component_1.OutletComponent },
    { path: "**", redirectTo: "/outlet" }
];
exports.RoutingConfig = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map