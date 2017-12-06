import { Genders, Regions, Orientations } from "./enums.model";
import { Message } from "./Message.model";
import { Photo} from "./Photo.model";

export class AppUser {
    constructor(
        public id?: string,
        public name?: string,
        public email?: string,
        public password?: string,
        public birthDate?: string,
        public registerDate?: string,
        public city?: string,
        public viewCount?: number,
        public lastLogin?: string,
        public rating?: number,
        public height?: number,
        public weight?: number,
        public description?: string,
        public gender?: Genders,
        public orientation?: Orientations,
        public region?: Regions,
        public photos?: Photo[],
        public messages?:Message[]
    ) { }

}