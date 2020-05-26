import { LoginComponent } from './../login/login.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/users/';

  login(loginPayload) : Observable<ApiResponse> {        
    return this.http.post<ApiResponse>('http://localhost:8765/user-registration/authenticateUser', loginPayload);
  }

  getUsers() : Observable<ApiResponse> {    
    return this.http.get<ApiResponse>('http://localhost:9090/zipkinTracer');
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createUser(user: User): Observable<ApiResponse> {    
    return this.http.post<ApiResponse>('http://localhost:9090/register', user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
