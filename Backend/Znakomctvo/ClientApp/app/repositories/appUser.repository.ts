import { Http, RequestMethod , Request, Response} from "@angular/http";
import { Injectable } from "@angular/core";
import { AppUser } from "../models/AppUser.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Pagination } from "./config/Pagination.class";
import { Filter } from "./config/Filter.class";
import { REGIONS, STOCKHOLMS, GENDERS } from "../models/enums/enums";


const usersUrl = "/api/users";
@Injectable()
export class AppUserRepository {

    users: AppUser[];
    user: AppUser;
    private paginationInstance = new Pagination();
    private filterInstance = new Filter("all", 18, 99, "all", "all", false, false);
    requestCompleted: boolean = false;

    get pagination(): Pagination {
        return this.paginationInstance;
    }

    get filter(): Filter {
        return this.filterInstance;
    }


    constructor(private http: Http) {
        this.getAllUsers();
    }

    getAllUsers(): void {
        this.users = null;
        this.requestCompleted = false;
        this.sendRequest(RequestMethod.Get, usersUrl)
            .subscribe(response => {
                this.users = response;
                this.pagination.currentPage = 1;
            },
            error => {
                console.log("*** " + error + " ***");
            },
            () =>
            {
                this.requestCompleted = true;
            });
    }

    filterUsers(): void {
        this.users = null;
        this.requestCompleted = false;
        let url = usersUrl + "/filter";
        if (this.filter.gender) {
            url += "?gender=" + this.filter.gender;
        }
        if (this.filter.city) {
            url += "&city=" + this.filter.city;
        }
        if (this.filter.fromAge) {
            url += "&fromAge=" + this.filter.fromAge;
        }
        if (this.filter.toAge) {
            url += "&toAge=" + this.filter.toAge;
        }
        if (this.filter.region) {
            url += "&region=" + this.filter.region;
        }
        if (this.filter.photo) {
            url += "&photo=" + this.filter.photo;
        }
        if (this.filter.online) {
            url += "&online=" + this.filter.online;
        }
        this.sendRequest(RequestMethod.Get, url)
            .subscribe(response => {
                this.users = response;
                this.pagination.currentPage = 1;
            }, error => {
                console.log("***" + error + "***");
            },
            () => {
                this.requestCompleted = true;
            });
    }


    getMen(): void {
        this.users = null;
        this.requestCompleted = false;
        this.sendRequest(RequestMethod.Get, usersUrl + "/" + "men")
            .subscribe(response => {
                this.users = response;
                this.pagination.currentPage = 1;
            },
            error => {
                console.log("***" + error + "***");
            },
            () => {
                this.requestCompleted = true;
            });
    }

    getWomen(): void {
        this.users = null;
        this.requestCompleted = false;
        this.sendRequest(RequestMethod.Get, usersUrl + "/" + "women")
            .subscribe(response => {
                this.users = response;
                this.pagination.currentPage = 1;
            },
            error => {
                console.log("***" + error + "***");
            },
            () => {
                this.requestCompleted = true;
            });
    }

    private sendRequest(verb: RequestMethod, url: string, data?: any): Observable<any> {
        return this.http.request(new Request({method:verb, url: url, body: data})).map(response => response.json());
    }

}