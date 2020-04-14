import { Component, OnInit } from '@angular/core';
import { TodoCreateResponse } from 'src/app/models/todoCreateResponse';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoDeleteResponse } from 'src/app/models/todoDeleteResponse';

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent implements OnInit {

  public todo: Todo;
  public id: string;

  constructor(private todoService: TodoService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
  }


  public delete(): void {
    let obsObj: Observable<TodoDeleteResponse>;
    obsObj = this.todoService.delete(this.id);
    obsObj.subscribe((response: TodoDeleteResponse) => {
      if (response.isValid) {
        this.route.navigate(['/todo/list']);
      }
      else {
        alert(response.errors[0]);
      }
    })
  }
}