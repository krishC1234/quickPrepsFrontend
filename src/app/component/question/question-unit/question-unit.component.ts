import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-question-unit',
  templateUrl: './question-unit.component.html',
  styleUrls: ['./question-unit.component.css']
})
export class QuestionUnitComponent implements OnInit {
  @Input() public question: Question;

  constructor() { }

  ngOnInit() {
  }


}
