import { Component } from "@angular/core";
import { AppUserRepository } from "../repositories/appUser.repository";
import { REGIONS, STOCKHOLMS, GOTHENBURGS, GENDERS } from "../models/enums/enums";
import { Filter } from "../repositories/config/Filter.class";

@Component({
    selector: "zn-filter",
    templateUrl: "./filter.component.html",
    styleUrls: ["filter.component.css"]
})

export class FilterComponent {

    constructor(private repository: AppUserRepository) {
        this.cities = this.setDefaultCities();
        this.genders = this.setGenders();
        for (var i = 18; i < 100; i++) {
            this.ages.push(i);
        }
        this.filter = repository.filter;
    }

    cities: string[];
    genders: string[];
    ages: number[] = [];
    filter: Filter;
    private regionsEnum = REGIONS;

    filterUsers(): void {
        this.repository.filterUsers();
        console.log(this.filter);
    }
    get regions(): string[] {
        var keys = Object.keys(this.regionsEnum);
        return keys.slice(keys.length / 2);
    }

    setDefaultCities(): string[]{
        let keys = Object.keys(STOCKHOLMS);
        return keys.slice(keys.length / 2);
    }

    setGenders(): string[]{
        let keys= Object.keys(GENDERS);
        return keys.slice(keys.length / 2);
    }

    getCities(regionString): void{
        let keys: string[] = [];
        let cities: string[] = [];

        let region: REGIONS = (<any>REGIONS)[regionString];
        console.log(regionString);

        switch (region) {
            case REGIONS.Stockholm:
                keys = Object.keys(STOCKHOLMS);
                cities= keys.slice(keys.length / 2);
                break;
            case REGIONS.Gothenburg:
                keys = Object.keys(GOTHENBURGS);
                cities= keys.slice(keys.length / 2);
                break;
            default:
                keys = Object.keys(STOCKHOLMS);
                cities = keys.slice(keys.length / 2);
        }
        this.cities = cities;
    }
}