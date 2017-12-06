import {AppUser} from "./AppUser.model";
export class Photo{
    constructor(
        public id?:number,
        public userPhoto?:any,
        public primaryPhot?:boolean,
        public userId?:string,
        public user?:AppUser
    ){}
}