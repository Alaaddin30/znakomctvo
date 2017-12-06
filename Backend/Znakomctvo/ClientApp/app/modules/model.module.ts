import { NgModule } from "@angular/core";
import { AppUserRepository } from "../repositories/appUser.repository";
@NgModule({
    providers:[AppUserRepository] // registering repo for DI
})
export class ModelModule{}