import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjectComponent } from "./projects/project.component";
import { ResumeComponent } from "./resume/resume.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: "", component: ProjectComponent, data: { animation: "project" } },
  {
    path: "projects",
    component: ProjectComponent,
    data: { animation: "projects" }
  },
  {
    path: "contact",
    component: ContactComponent,
    data: { animation: "contact" }
  },
  { path: "resume", component: ResumeComponent, data: { animation: "resume" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
