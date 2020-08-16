import { Component } from "@angular/core";

@Component({
  selector: "app-project-kanban",
  templateUrl: "./project-kanban.component.html",
  styleUrls: ["../project.component.scss"]
})
export class ProjectKanbanComponent {
  images = [
    "../assets/angular-icon.svg",
    "../assets/firebase.png",
    "../assets/rxjs.png",
    "../assets/sendgrid.png",
    "../assets/Stripe-Payment-Logo.png"
  ];
}
