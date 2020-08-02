import { Component } from "@angular/core";
import { EvansgrayComponent } from "./projects/evansgray.component";
import { KanbanComponent } from "./kanban.component";
import { FrontendComponent } from "./frontend.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  slides = [
    { component: EvansgrayComponent },
    { component: KanbanComponent },
    { component: FrontendComponent }
  ];
  title = "portfolio";
}
