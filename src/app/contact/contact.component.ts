import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore/firestore";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent {
  constructor(private db: AngularFirestore) {}

  postContact() {
    this.db.collection("contact").add({});
  }
}
