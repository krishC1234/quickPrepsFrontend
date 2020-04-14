import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequestModel } from '../models/user/login-request-model';
import { LoginResponseModel } from '../models/user/login-response-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url = environment.host;

  constructor(private httpClient: HttpClient) { }

  public login(login: LoginRequestModel): Observable<LoginResponseModel> {
    return this.httpClient.post<LoginResponseModel>(this.url + "/login", login)
  }
}
