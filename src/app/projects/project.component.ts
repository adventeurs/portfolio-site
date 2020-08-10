import { Component, OnInit } from "@angular/core";
import { ProjectEvansgrayComponent } from "./project-evansgray/project-evansgray.component";
import { ProjectFrontendComponent } from "./project-frontend/project-frontend.component";
import { ProjectKanbanComponent } from "./project-kanban/project-kanban.component";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"]
})
export class ProjectComponent implements OnInit {
  projects = [
    { component: ProjectEvansgrayComponent },
    { component: ProjectFrontendComponent },
    { component: ProjectKanbanComponent }
  ];
  constructor() {}

  ngOnInit() {}
}
