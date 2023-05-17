import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgrxService {

  constructor(private http:HttpClient) { }

  
}
