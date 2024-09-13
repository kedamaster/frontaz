import { Component, OnInit } from '@angular/core';
import { LogingService } from '../services/loging.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http'; // Import HttpErrorResponse

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private logingService: LogingService // Inject the LogingService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onLogin() {
    console.log('Login button clicked');
    const { username, password } = this.loginForm.value;
    if (this.loginForm.valid) {
     

      this.logingService.authenticate(username, password).subscribe(
        (response: any) => {
          console.log('Response received:', response);
    // Check if the response has the correct success flag
          if (response.success) {
            console.log('Login successful:', response);
            Swal.fire({
              title: "Success!",
              text: response.message,
              icon: "success"
            });
          } else {
            console.error('Login failed:', response.message);
            Swal.fire({
              title: "Error!",
              text: response.message,
              icon: "error"
            });
          }
        },
        (error: HttpErrorResponse) => { // Specify the type here
          console.error('Error during login:', error);
          Swal.fire('Error', 'Login failed. Please try again.', 'error');
        }
      );
    } 
  }
}