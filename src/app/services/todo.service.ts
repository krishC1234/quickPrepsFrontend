import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
import { TodoListResponse } from '../models/todoListReponse';
import { TodoCreateResponse } from '../models/todoCreateResponse';
import { TodoDeleteResponse } from '../models/todoDeleteResponse';
import { HeaderTokenService } from './header-token.service';



@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public url: string = "http://newstein.in:8000/todo/";


  constructor(private httpClient: HttpClient, private headers: HeaderTokenService) { }

  public getAll(): Observable<TodoListResponse> {
    return this.httpClient.get<TodoListResponse>(this.url, { headers: this.headers.getHeader() });
  }

  public create(data: Todo): Observable<TodoCreateResponse> {
    return this.httpClient.post<TodoCreateResponse>("http://newstein.in:8000/todo/create", data, { headers: this.headers.getHeader() });
  }

  public getTodo(id: string): Observable<TodoCreateResponse> {
    return this.httpClient.get<TodoCreateResponse>(this.url + id);
  }

  public update(data: Todo): Observable<TodoCreateResponse> {
    return this.httpClient.put<TodoCreateResponse>("http://newstein.in:8000/todo/create", data);
  }

  public delete(id: string): Observable<TodoDeleteResponse> {
    return this.httpClient.delete<TodoDeleteResponse>(this.url + id);
  }

}
