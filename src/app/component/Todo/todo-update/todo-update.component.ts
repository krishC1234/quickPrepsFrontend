import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TodoUnitComponent } from '../todo-unit/todo-unit.component';
import { Observable } from 'rxjs';
import { TodoCreateResponse } from 'src/app/models/todoCreateResponse';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {

  //properties
  public todo: Todo;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private todoService: TodoService) { }

  ngOnInit() {
    let id: string = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(id);
    this.loadData(id);
  }

  public loadData(id: string): void {
    let obsObj: Observable<TodoCreateResponse>;
    obsObj = this.todoService.getTodo(id);
    obsObj.subscribe((response: TodoCreateResponse) => {
      if (response.isValid) {
        this.todo = response.data;
        console.log("This is the todo");
      }
      else {
        alert(response.errors[0]);
      }
    })
  }

  public update(): void {
    let obsObj: Observable<TodoCreateResponse>;
    obsObj = this.todoService.update(this.todo);
    obsObj.subscribe((response: TodoCreateResponse) => {
      console.log(response);
      if (response.isValid) {
        this.router.navigate(['/todo/list']);
      }
      else {
        alert(response.errors[0]);
      }
    });
  }

}
