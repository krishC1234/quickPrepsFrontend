import { Todo } from "./todo";

export class TodoCreateResponse {
  //properties
  public isValid: boolean;
  public data: Todo;
  public errors: string[];
}