// import { Component, OnInit } from '@angular/core';
// import { PersonaldetsService } from '../services/personaldets.service'; // Assume this service exists to fetch user data

// interface RegistrationData {
//   userId: string,
//   username: string;
//   firstName: string;
//   lastName: string;
//   gender: string;
//   email: string;
//   age: number;
//   dob: string;
//   city: string;
// }

// @Component({
//   selector: 'app-personal-details',
//   standalone: true,
//   imports: [],
//   templateUrl: './personal-details.component.html',
//   styleUrl: './personal-details.component.css'
// })
// export class UserProfileComponent implements OnInit {
//   RegistrationData: RegistrationData = {
//     userId: '',
//     username: '',
//     firstName: '',
//     lastName: '',
//     gender: '',
//     email: '',
//     age: 0,
//     dob: '',
//     city: ''
//   };

//   constructor(private personaldetsService: PersonaldetsService) {}

//   ngOnInit(): void {
//     this.loadRegistrationData();
//   }

//   loadRegistrationData(userId: string): void {
//   this.personaldetsService.getRegistrationData(userId).subscribe({
//     next: (data: RegistrationData) => {
//       this.RegistrationData = data;
//     },
//     error: (error) => {
//       console.error('Error fetching user data:', error);
//       // Handle error (e.g., show error message to user)
//     }
//   });
// }
// }





/*import { Component } from '@angular/core';
import { RegistrationData } from '../signup/registration-data/registration-data.module';

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.css'
})
export class PersonalDetailsComponent {
[x: string]: any;

fetchData(){
  
}

}
*/