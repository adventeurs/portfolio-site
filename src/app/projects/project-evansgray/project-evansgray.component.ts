import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-project-evansgray",
  templateUrl: "./project-evansgray.component.html",
  styleUrls: ["../project.component.scss"]
})
export class ProjectEvansgrayComponent implements OnInit {
  images = [
    "../assets/angular-icon.svg",
    "../assets/firebase.png",
    "../assets/rxjs.png",
    "../assets/sendgrid.png",
    "../assets/Stripe-Payment-Logo.png"
  ];

  constructor() {}

  ngOnInit() {}
}
