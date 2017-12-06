import {Routes, RouterModule} from "@angular/router";
import { UsersComponent } from "./app/components/users.component";
const routes: Routes = [
    { path: "users", component: UsersComponent },
    { path: "", component:UsersComponent }
]

export const RoutingConfig = RouterModule.forRoot(routes);