import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderTokenService {
  public myHeaders: HttpHeaders;

  public constructor(private httpClient: HttpClient) { }

  public getHeader(): HttpHeaders {
    this.myHeaders = new HttpHeaders({
      "Authorization": localStorage.getItem("Token"),
      "Content-Type": "application/json"
    })
    return this.myHeaders;
  }

  public getGenericHeader(): HttpHeaders {
    this.myHeaders = new HttpHeaders({
      "Content-Type": "application/json"
    })
    return this.myHeaders;
  }
}
