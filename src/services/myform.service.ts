import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MyformService {

  constructor(private http:HttpClient) {}

  login(_username:string,_password:string):Observable<{token:string}>
  {
    return this.http.post<{token:string}>(`${environment.url}/login`,_username)
  }
}
