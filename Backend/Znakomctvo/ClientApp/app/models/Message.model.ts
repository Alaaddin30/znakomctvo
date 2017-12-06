import {AppUser} from "./AppUser.model";
export class Message {
     constructor(
        public id?:number,
        public from?:string,
        public to?:string,
        public text?:string,
        public sentDate?: string,
        public userId?:string,
        public user?:AppUser
    ){}
}