import { GENDERS, REGIONS, STOCKHOLMS, GOTHENBURGS } from "../../models/enums/enums";

export class Filter {
    //gender?: GENDERS = GENDERS.Female;
    //fromAge?: number = 18;
    //toAge?: number = 99;
    //region?: REGIONS = REGIONS.Stockholm;
    //city?: string = "Stockholm";
    //photo?: boolean = false;
    //online?: boolean = false;

    constructor(public gender?: string,
                public fromAge?: number,
                public toAge?: number,
                public region?: string,
                public city?: string,
                public photo?: boolean,
                public online?: boolean){}
}