import { Component } from "@angular/core";
import { AppUserRepository } from "../repositories/appUser.repository";

@Component({
    selector: "zn-pagination",
    templateUrl: './pagination.component.html',
    styleUrls: ["./pagination.component.css"]
})

export class PaginationComponent {
    constructor(private repository: AppUserRepository) { }

    get current(): number {
        return this.repository.pagination.currentPage;
    }
    changePage(newPage: number) {
        this.repository.pagination.currentPage = newPage;
    }

    get pages(): number[]{
        if (this.repository.users != null) {
            return Array(Math.ceil(this.repository.users.length / this.repository.pagination.usersPerPage))
                .fill(0).map((x, i) => i+1);
        } else {
            return [];
        }
    }
}