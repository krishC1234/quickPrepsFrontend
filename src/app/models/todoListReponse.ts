
import { Todo } from './todo';

export class TodoListResponse {
  //properties
  public isValid: boolean;
  public data: Todo[];
  public errors: string[];
}
