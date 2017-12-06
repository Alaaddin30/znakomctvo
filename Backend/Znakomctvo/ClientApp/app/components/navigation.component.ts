import { Component } from "@angular/core";
import { AppUserRepository } from "../repositories/appUser.repository";

@Component({
    selector: "zn-navigation",
    templateUrl: "./navigation.component.html",
    styleUrls: ["./navigation.component.css"]
})

export class NavigationComponent {
    constructor(private repository: AppUserRepository) { }

    getAll(): void {
        this.repository.getAllUsers();
    }
    getMen(): void {
        this.repository.getMen();
    }
    getWomen(): void {
        this.repository.getWomen();
    }
}