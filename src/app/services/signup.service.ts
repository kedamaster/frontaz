import { Injectable } from '@angular/core';
import { RegistrationData } from '../signup/registration-data/registration-data.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private baseUrl = ' http://localhost:8080/api/students';

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    const url = `${this.baseUrl}/SignUp`; // Replace with the registration endpoint in your backend
    return this.http.post(url, userData);
  }

  
}
