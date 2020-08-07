import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectEvansgrayComponent } from "./project-evansgray/project-evansgray.component";
import { ProjectFrontendComponent } from "./project-frontend/project-frontend.component";
import { ProjectKanbanComponent } from "./project-kanban/project-kanban.component";
import { ProjectComponent } from "./project.component";

const components = [
  ProjectEvansgrayComponent,
  ProjectFrontendComponent,
  ProjectKanbanComponent,
  ProjectComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components]
})
export class ProjectsModule {}
