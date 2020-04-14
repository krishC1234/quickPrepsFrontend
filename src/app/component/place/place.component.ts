import { Component, OnInit, Input } from "@angular/core";
import { Place } from "src/app/models/places";
import { Logger } from 'src/app/helper/logger';

@Component({
  selector: "app-place",
  templateUrl: "./place.component.html",
  styleUrls: ["./place.component.css"]
})
export class PlaceComponent {
  @Input() public pk: Place;
  // public nm: string;
  // public name: string;

  public constructor(public logger: Logger) {
    // this.name = "Gaurav";
    // this.nm = "Gaurav";
    this.logger.logInfo("Place Component constructor is called");
  }
}
