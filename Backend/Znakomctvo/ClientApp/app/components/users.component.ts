import { Component } from '@angular/core';
import { AppUserRepository } from "../repositories/appUser.repository";
import { AppUser } from "../models/AppUser.model";

@Component({
    selector: 'zn-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent {
    
    constructor(private repository: AppUserRepository) { }
    get users(): AppUser[]{
        if (this.repository.users) {
            let pageIndex = (this.repository.pagination.currentPage - 1) * this.repository.pagination.usersPerPage;
            return this.repository.users.slice(pageIndex, pageIndex + this.repository.pagination.usersPerPage);
        }
    }

    get requestDone(): boolean {
        console.log(this.repository.requestCompleted);
        return this.repository.requestCompleted;
    }
}