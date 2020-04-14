import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { Observable } from 'rxjs';
import { TodoListResponse } from 'src/app/models/todoListReponse';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todoList: Todo[];

  constructor(private todoService: TodoService) { }

  public ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    let obsObj: Observable<TodoListResponse>;
    obsObj = this.todoService.getAll();
    obsObj.subscribe((response: TodoListResponse) => {
      console.log(response);
      if (!response.isValid) {
        alert(response.errors[0]);
        return;
      }
      this.todoList = response.data;
      console.log(this.todoList);
    });
  }

}
