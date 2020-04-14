
export class ApiResponse<T> {
  public isValid: boolean;
  public data: T;
  public errors: string[];
}