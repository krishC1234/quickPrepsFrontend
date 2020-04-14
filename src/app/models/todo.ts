import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Todo {
  public _id: string;
  public task: string;
  public priority: string;
  public isComplete: boolean;
  public createdAt: Date;

  constructor() { }
}
