import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/helper/logger';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public logger: Logger) {
    this.logger.logInfo("Footer Component constructor is called");
  }

  ngOnInit() {
  }

}
