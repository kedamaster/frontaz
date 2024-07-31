import { Component } from '@angular/core';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {

  doctorscount:number = 0;

  doctorscountstop:any = setInterval(()=>{
    this.doctorscount++;

    if(this.doctorscount == 20)
    {
      clearInterval(this.doctorscountstop);
    }
  },100)//milliseconds



  experiencecount:number = 0;

  experiencecountstop:any = setInterval(()=>{
    this.experiencecount++;

    if(this.experiencecount == 11)
    {
      clearInterval(this.experiencecountstop);
    }
  },100)//milliseconds

  casualtiescount:number = 0;

  casualtiescountstop:any = setInterval(()=>{
    this.casualtiescount++;

    if(this.casualtiescount == 300)
    {
      clearInterval(this.casualtiescountstop);
    }
  },100)//milliseconds

  countriescount:number = 0;

  countriescountstop:any = setInterval(()=>{
    this.countriescount++;

    if(this.countriescount == 3)
    {
      clearInterval(this.countriescountstop);
    }
  },100)//milliseconds

}
