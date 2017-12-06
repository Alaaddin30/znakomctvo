import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ModelModule } from "./modules/model.module";
import { StructureComponent } from "./components/structure.component";
import { StructureModule } from "./modules/structure.module";
import { RoutingConfig } from "../app.routing";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingConfig,
    ModelModule,
    StructureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
