import { Component } from "@angular/core";
import { EMPTY_PARSE_LOCATION } from "@angular/compiler";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-project-frontend",
  templateUrl: "./project-frontend.component.html",
  styleUrls: ["../project.component.scss"]
})
export class ProjectFrontendComponent {
  images = [
    "../assets/angular-icon.svg",
    "../assets/firebase.png",
    "../assets/rxjs.png",
    "../assets/sendgrid.png",
    "../assets/Stripe-Payment-Logo.png"
  ];
}
