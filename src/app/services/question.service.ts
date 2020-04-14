import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/apiResponse';
import { Question } from '../models/question';
import { HeaderTokenService } from './header-token.service';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class questionService {
  public url: string = environment.host;

  constructor(private httpClient: HttpClient, private headers: HeaderTokenService) { }


  public getAll(): Observable<ApiResponse<Question[]>> {
    return this.httpClient.get<ApiResponse<Question[]>>(this.url + "/questions", { headers: this.headers.getHeader() });
  }

  public getType(type: string): Observable<ApiResponse<Question[]>> {
    return this.httpClient.post<ApiResponse<Question[]>>(this.url + "/questions/type", { "type": type }, { headers: this.headers.getHeader() });
  }

  public create(data: Question): Observable<ApiResponse<Question>> {
    console.log(data);
    return this.httpClient.post<ApiResponse<Question>>(this.url + "/questions", data, { headers: this.headers.getHeader() });
  }

  public getQuestion(id: string): Observable<ApiResponse<Question>> {
    return this.httpClient.get<ApiResponse<Question>>(this.url + "/questions/" + id, { headers: this.headers.getHeader() });
  }

  public update(data: Question): Observable<ApiResponse<Question>> {
    return this.httpClient.put<ApiResponse<Question>>(this.url + "/questions", data, { headers: this.headers.getHeader() });
  }

  public delete(id: string): Observable<ApiResponse<Question>> {
    return this.httpClient.delete<ApiResponse<Question>>(this.url + "/questions/" + id, { headers: this.headers.getHeader() });
  }
}
