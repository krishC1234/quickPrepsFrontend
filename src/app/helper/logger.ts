import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class Logger {

  //methods
  public constructor() {
    this.logInfo("Logger constructor is called");
  }

  public logInfo(msg: any): void {
    console.log(msg);
  }

  public logWarning(msg: any): void {
    console.warn(msg);
  }

  public logError(msg: any): void {
    console.error(msg);
  }
}