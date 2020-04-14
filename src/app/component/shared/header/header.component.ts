import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/helper/logger';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //proprties

  //methods
  constructor(public logger: Logger) {
    this.logger.logInfo("Header Component constructor is called");
  }

  ngOnInit() {
  }

}
