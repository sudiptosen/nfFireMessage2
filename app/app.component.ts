import {Component, OnInit} from "@angular/core";
import * as firebase from "nativescript-plugin-firebase";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    firebase.init()
      .then(()=> {console.log(`Init good`);})
      .catch(err => {console.log(`Init bad`);})
  }
}
