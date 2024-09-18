import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegistrationData } from '../signup/registration-data/registration-data.module';
import Swal from 'sweetalert2';
import { SignupService } from '../services/signup.service';
import { RouterModule, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  imports: [RouterModule, ReactiveFormsModule],
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
 
  

  constructor(private formBuilder: FormBuilder, private signupService: SignupService,private router: Router ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }
  
  onSubmit() {
    console.log('Register link clicked');
    const registrationData: RegistrationData = {      
      username: this.registerForm.get('username')?.value,
      password: this.registerForm.get('password')?.value,
      confirmPassword: this.registerForm.get('confirmPassword')?.value,
    };

    this.signupService.registerUser(registrationData).subscribe(
      (response: any) => {
        if (response.success) {
          console.log('object:', this.registerForm.value);
          Swal.fire({
            title: "Success!",
            text: response.message,
            icon: "success"
          }).then((onclick) => {
            this.router.navigate(['/login']); // Navigate to login or another page
          });
          console.log('Registered successfully:', response);
        } else {
          console.error('invalid');
          Swal.fire({
            title: "Error!",
            text: response.message,
            icon: "error"
          });
        }
        console.log('Registered successfully:', response);
    
      },
      (error) => {
        console.error('Registration error:', error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred during registration.",
          icon: "error"
        });
      }
    );
}
  }


