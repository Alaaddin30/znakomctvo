import {Routes, RouterModule} from "@angular/router";
import { UsersComponent } from "./app/components/users.component";
import { UserComponent } from "./app/components/user.component";
import { OutletComponent } from "./app/components/outlet.component";
const routes: Routes = [
    { path: "outlet", component: OutletComponent },
    { path: "profile/:id", component: UserComponent },
    { path: "", component: OutletComponent  },
    { path: "**", redirectTo: "/outlet" }
]

export const RoutingConfig = RouterModule.forRoot(routes);