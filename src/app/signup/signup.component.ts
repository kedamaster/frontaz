import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegistrationData } from '../signup/registration-data/registration-data.module';
import Swal from 'sweetalert2';
import { SignupService } from '../services/signup.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  imports: [RouterModule, ReactiveFormsModule],
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private signupService: SignupService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required], 
      confirmPassword: ['', Validators.required],     
      age: ['', [Validators.required, Validators.min(1)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      location: ['', Validators.required],
      // dob: ['', Validators.required] // Uncomment if needed
    });
  }

  onSubmit() {
    console.log('Register link clicked');
    if (this.registerForm.valid) {
      const registrationData: RegistrationData = {
        firstName: this.registerForm.get('firstName')?.value,
        lastName: this.registerForm.get('lastName')?.value,
        username: this.registerForm.get('username')?.value,
        password: this.registerForm.get('password')?.value,
        confirmPassword: this.registerForm.get('confirmPassword')?.value,
        age: this.registerForm.get('age')?.value,
        gender: this.registerForm.get('gender')?.value,
        email: this.registerForm.get('email')?.value,
        location: this.registerForm.get('location')?.value,
      };

      this.signupService.registerUser(registrationData).subscribe(
        (response: any) => {
          console.log('Registration successful:', response);
          Swal.fire({
            title: "Welcome!",
            text: "You have successfully registered",
            icon: "success"
          });
          // Handle successful registration, e.g., navigate to a confirmation page
        },
        (error: any) => {
          Swal.fire({
            title: "Oops!",
            text: "An error occurred!",
            icon: "error"
          });
          console.error('Registration failed:', error);
          // Handle registration failure, e.g., display an error message
        }
      );
    } else {
      Swal.fire({
        title: "Invalid Form",
        text: "Please fill all required fields correctly.",
        icon: "warning"
      });
    }
  }
}