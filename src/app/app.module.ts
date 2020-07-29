import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarouselComponent } from "./slider/carousel.component";
import { CarouselItemDirective } from "./slider/carousel-item.directive";
import { EvansgrayComponent } from "./projects/evansgray.component";
import { KanbanComponent } from "./kanban.component";
import { FrontendComponent } from "./frontend.component";

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselItemDirective,
    EvansgrayComponent,
    KanbanComponent,
    FrontendComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
