import { NgModule } from "@angular/core";
import { UsersComponent } from "../components/users.component";
import { UserComponent } from "../components/user.component";
import { NavigationComponent } from "../components/navigation.component";
import { FooterComponent } from "../components/footer.component";
import { FilterComponent } from "../components/filter.component";
import { SidebarComponent } from "../components/sidebar.component";
import { PaginationComponent } from "../components/pagination.component";
import { StructureComponent } from "../components/structure.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ProfileCardComponent } from "../components/profile-card.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OutletComponent } from "../components/outlet.component";

@NgModule({
    declarations: [UsersComponent, OutletComponent , UserComponent, NavigationComponent,
        FooterComponent, FilterComponent, SidebarComponent, PaginationComponent, ProfileCardComponent, StructureComponent],
    imports: [BrowserModule, RouterModule, FormsModule, ReactiveFormsModule],
    exports: [StructureComponent]


})
export class StructureModule { }