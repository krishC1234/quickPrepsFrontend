import { Component, Inject } from "@angular/core";
import { Logger } from './helper/logger';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  //properties


  //method
  public constructor(public logger: Logger) {
    this.logger.logInfo("App Component constructor is called");
  }
}
