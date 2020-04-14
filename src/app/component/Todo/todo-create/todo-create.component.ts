import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { TodoCreateResponse } from 'src/app/models/todoCreateResponse';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent {
  //properties
  public todo: Todo;

  constructor(private todoService: TodoService, private route: Router) {
    this.todo = new Todo();
    this.todo.priority = "P5";
  }

  public dummyCreate(): void {
    console.log(this.todo);
  }

  public create(): void {
    let obsObj: Observable<TodoCreateResponse>;
    obsObj = this.todoService.create(this.todo);
    obsObj.subscribe((response: TodoCreateResponse) => {
      console.log(response);
      if (response.isValid) {
        this.route.navigate(['/todo/list']);
      }
      else {
        alert(response.errors[0]);
      }
    });
  }

}


