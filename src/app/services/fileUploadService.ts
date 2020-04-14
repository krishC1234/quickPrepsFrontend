import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/apiResponse';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private headers: HttpHeaders
  public url = environment.host;


  public constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
    });
  }
  public uploadFile(file: File): Observable<ApiResponse<string>> {
    let uploadData = new FormData();
    uploadData.append('file', file, file.name);

    let url: string = this.url + "/upload";

    return this.http.post<ApiResponse<string>>(url, uploadData, { headers: this.headers });
  }
}