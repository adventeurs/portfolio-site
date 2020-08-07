import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ProjectsModule } from "./projects/projects.module";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { ResumeComponent } from "./resume/resume.component";
import { ContactComponent } from "./contact/contact.component";

const components = [ResumeComponent, ContactComponent, AppComponent];

@NgModule({
  declarations: [...components],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
