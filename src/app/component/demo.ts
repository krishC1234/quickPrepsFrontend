import { Component } from "@angular/core";
import { Place } from "../models/places";
import { Logger } from '../helper/logger';
import { HttpClient } from '@angular/common/http';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: "Program",
  templateUrl: "./demo.html"
})
export class Demo {
  //properties

  public places: Place[];
  public selectedPlace: Place;
  public todoList: Todo[];

  //methods

  public constructor(public logger: Logger, private httpClient: HttpClient, private todoService: TodoService) {
    let place1: Place = new Place(
      "New York",
      "https://lp-cms-production.imgix.net/2019-06/GettyImages-538096543_medium.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4",
      "Industrial city",
      "Very beautiful and bustling city",
      "$400,000"
    );
    let place2: Place = new Place(
      "San Fran",
      "https://www.usnews.com/dims4/USNEWS/3e2b4ba/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Fbb%2Fc8%2F59c40cdd4cacbc74086e09589bff%2F1064-the-bay-lights-3-james-ewing.jpg",
      "Costal city",
      "Tourist spot",
      "$1,000,000"
    );
    let place3: Place = new Place(
      "Atlanta",
      "https://media-cdn.tripadvisor.com/media/photo-c/2560x500/14/10/2d/be/atlanta.jpg",
      "Suburban city",
      "Home to many sports teams",
      "$50,000"
    );
    let place4: Place = new Place(
      "Houston",
      "https://cdn.abcotvs.com/dip/images/5100072_012119-ktrk-shutter-houston-skyline-img.jpg?w=800&r=16%3A9",
      "Humid city",
      "In the middle of Texas",
      "$300,000"
    );
    this.places = [place1, place2, place3, place4];
    this.selectedPlace = this.places[0];

    // this.showFirst = false;
    this.logger.logInfo("Demo Component constructor is called");

  }

  public loadData(): void {
    this.todoService.getAll().subscribe((response: any) => {
      console.log(response);
      if (!response.isValid) {
        alert(response.errors[0]);
        return;
      }
      this.todoList = response.data;
      console.log(this.todoList);
    });
  }

  // public flip(): void {
  //   this.showFirst = !this.showFirst;
  //   this.logger.logInfo("Flip Button is clicked");
  // }

  public changeCity(place: Place): void {
    this.selectedPlace = place
  }
}
