import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogingService {
  private apiUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  // constructor(private http: HttpClient) {}

  // login(RegistrationData: { user_name: string; password: string }): Observable<{ token: string }> {
  //   const url = `${this.apiUrl}/login`; 
  //   return this.http.post<{ token: string }>(this.apiUrl, RegistrationData);
  // }
}

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { RegistrationData } from '../signup/registration-data/registration-data.module';
// import { SignupService } from './signup.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class LogingService {
  
//     private baseUrl = 'http://localhost:8080/api/students';
  
//     constructor(private http: HttpClient) {}
  
//     loginUser(userData: any): Observable<any> {
//       const url = `${this.baseUrl}/login`; // Replace with the registration endpoint in your backend
//       return this.http.post(url, userData);
//     }

  

