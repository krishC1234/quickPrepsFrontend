import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-unit',
  templateUrl: './todo-unit.component.html',
  styleUrls: ['./todo-unit.component.css']
})

export class TodoUnitComponent implements OnInit {
  @Input() public todo: Todo;
  public currentDate: Date;
  public diffDays: number;
  public diffMins: number;


  constructor() {
  }

  ngOnInit() {

  }

  public createSince(): void {
    this.currentDate = new Date();
    let created = new Date(this.todo.createdAt);
    let diff_ms: number = Math.abs(this.currentDate.getTime() - created.getTime());

    this.diffDays = Math.round(diff_ms / (3600 * 24 * 1000));
    this.diffMins = Math.round(diff_ms / (24 * 1000));
  }

}
