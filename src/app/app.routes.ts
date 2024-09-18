import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component'
import { LoginComponent } from './login/login.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { DoctorsComponent } from './doctors/doctors.component';
//import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SessionComponent } from './personal-details/session/session.component';
import { SymptomCheckerComponent } from './symptom-checker/symptom-checker.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'home', component:HomeComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'symptoms', component: SymptomsComponent},
    { path: 'doctors', component:DoctorsComponent},
    //{ path: 'personal-details', component:PersonalDetailsComponent},
    { path: 'session', component:SessionComponent},
    { path: 'symptom-checker', component:SymptomCheckerComponent}
];
