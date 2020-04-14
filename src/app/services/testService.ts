import { HttpClient } from "@angular/common/http";
import { HeaderTokenService } from './header-token.service';
import { Observable } from "rxjs";
import { ApiResponse } from '../models/apiResponse';
import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { TestCreateResponse } from '../models/testCreateResponse';
import { TestCreateRequest } from '../models/testCreateRequest';
import { TestResumeRequest } from '../models/testResumeRequest';
import { TestResumeResponse } from '../models/testResumeResponse';
import { SubmitTestRequest } from '../models/testSubmitRequest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  public url = environment.host;

  constructor(private httpClient: HttpClient, private headers: HeaderTokenService) { }

  public book(data: TestCreateRequest): Observable<TestCreateResponse> {
    return this.httpClient.post<TestCreateResponse>(this.url + "/tests/book", data, { headers: this.headers.getGenericHeader() });
  }

  public resume(data: TestResumeRequest): Observable<TestResumeResponse> {
    return this.httpClient.post<TestResumeResponse>(this.url + "/tests/start", data, { headers: this.headers.getGenericHeader() });
  }

  public submit(data: SubmitTestRequest): Observable<TestResumeResponse> {
    return this.httpClient.post<TestResumeResponse>(this.url + "/tests/submit", data, { headers: this.headers.getGenericHeader() });
  }


}