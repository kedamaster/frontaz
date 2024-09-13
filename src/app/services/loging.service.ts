import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  success: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class LogingService {
  private baseUrl = 'http://localhost:8080/api/students'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string): Observable<LoginResponse> {
    const url = `${this.baseUrl}/login`;
    const body: LoginRequest = { username, password };
    
    return this.http.post<LoginResponse>(url, body);
  }
}


