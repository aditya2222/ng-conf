import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  ngOnInit() {
// Initialize Firebase
const config = {
  apiKey: "AIzaSyCt0jYBHJvXieQWayR1_8qeXxLuQv5wEMs",
  authDomain: "ng5-instagram.firebaseapp.com",
  databaseURL: "https://ng5-instagram.firebaseio.com",
  projectId: "ng5-instagram",
  storageBucket: "ng5-instagram.appspot.com",
  messagingSenderId: "796248404792"
};
firebase.initializeApp(config);

  }
}
