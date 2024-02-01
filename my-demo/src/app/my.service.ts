import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor(private http: HttpClient) {
    console.log('Sono in my service');
   }
}
