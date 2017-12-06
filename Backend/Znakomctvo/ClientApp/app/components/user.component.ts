import { Component, Input } from '@angular/core';
import { AppUser } from "../models/AppUser.model";

@Component({
    selector: 'zn-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {
    @Input("zn-user")
    user: AppUser;

}