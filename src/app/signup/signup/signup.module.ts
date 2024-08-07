import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupService } from '../../services/signup.service';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[SignupService],
  exports: [SignupComponent]
})
export class SignupModule { }
