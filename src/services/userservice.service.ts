import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  postfile(data:any)
  {
    return this.http.post(`${environment.url}/postdata/`,data)
  }
  downloadfile()
  {
    return this.http.get(`${environment.url}/download`,{
      reportProgress:true,
      responseType:"blob"
    })

    
    
  }
}
