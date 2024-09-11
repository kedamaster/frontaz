import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupModule } from './signup/signup/signup.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  
    
  ]
})
export class AppModule { }
