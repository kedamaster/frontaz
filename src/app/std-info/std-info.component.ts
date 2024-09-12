import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface STDInfo {
  name: string;
  description: string;
  symptomsWomen: string[];
  symptomsMen: string[];
  prevention: string[];
  testing: string[];
  symptomTimeline: string;
}

@Component({
  selector: 'app-std-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './std-info.component.html',
  styleUrls: ['./std-info.component.css']
})
export class StdInfoComponent {
  stdList: STDInfo[] = [
    {
      name: 'Chlamydia',
      description: 'Chlamydia is a common bacterial STD that can infect both men and women. Its often asymptomatic but can cause serious damage to reproductive organs if left untreated.',
      symptomsWomen: ['Abnormal vaginal discharge', 'Burning sensation when urinating', 'Pain during sexual intercourse'],
      symptomsMen: ['Discharge from penis', 'Burning sensation when urinating', 'Pain and swelling in testicles'],
      prevention: ['Use condoms', 'Regular testing', 'Limit sexual partners'],
      testing: ['Urine test', 'Swab of affected area'],
      symptomTimeline: '1-3 weeks after exposure'
    },
    {
      name: 'Gonorrhea',
      description: 'Gonorrhea is a bacterial infection that can affect the genitals, rectum, and throat. Its a common STD, especially among young people aged 15-24.',
      symptomsWomen: ['Increased vaginal discharge', 'Painful urination', 'Vaginal bleeding between periods'],
      symptomsMen: ['Painful urination', 'Pus-like discharge from penis', 'Pain in testicles'],
      prevention: ['Use condoms', 'Regular testing', 'Avoid sharing sex toys'],
      testing: ['Urine test', 'Swab of throat, urethra, or rectum'],
      symptomTimeline: '2-14 days after exposure'
    },
    {
      name: 'HIV/AIDS',
      description: 'HIV (Human Immunodeficiency Virus) is a virus that attacks the bodys immune system. If not treated, it can lead to AIDS (Acquired Immunodeficiency Syndrome). While theres no cure, with proper medical care, HIV can be controlled.',
      symptomsWomen: ['Flu-like symptoms', 'Rapid weight loss', 'Recurring fever or night sweats'],
      symptomsMen: ['Flu-like symptoms', 'Rapid weight loss', 'Recurring fever or night sweats'],
      prevention: ['Use condoms', 'Pre-exposure prophylaxis (PrEP)', 'Regular testing'],
      testing: ['Blood test', 'Oral fluid test'],
      symptomTimeline: '2-4 weeks after exposure for acute symptoms, years for later-stage symptoms'
    },
    {
      name: 'Syphilis',
      description: 'Syphilis is a bacterial infection that affects the genitals, skin, and mucous membranes, but it can also involve many other parts of the body, including the brain and nervous system. It progresses in stages and can be very serious if left untreated.',
      symptomsWomen: ['Painless sores on genitals or mouth', 'Skin rash', 'Fever'],
      symptomsMen: ['Painless sores on genitals or mouth', 'Skin rash', 'Fever'],
      prevention: ['Use condoms', 'Regular testing', 'Avoid direct contact with syphilis sores'],
      testing: ['Blood test', 'Fluid sample from sore'],
      symptomTimeline: '10 days to 3 months after exposure for primary stage'
    },
    {
      name: 'Herpes (HSV)',
      description: 'Herpes is caused by the herpes simplex virus (HSV). There are two types: HSV-1, which mainly causes oral herpes, and HSV-2, which mainly causes genital herpes. Both can affect the oral or genital area.',
      symptomsWomen: ['Painful blisters on genitals, rectum, or mouth', 'Itching or tingling sensation'],
      symptomsMen: ['Painful blisters on genitals, rectum, or mouth', 'Itching or tingling sensation'],
      prevention: ['Use condoms', 'Avoid sexual contact during outbreaks', 'Antiviral medications'],
      testing: ['PCR test', 'Blood test for antibodies'],
      symptomTimeline: '2-12 days after exposure'
    },
    {
      name: 'Human Papillomavirus (HPV)',
      description: 'HPV is the most common STD. There are many types of HPV; some can cause genital warts, while others can lead to various types of cancer, including cervical cancer in women.',
      symptomsWomen: ['Genital warts', 'Usually no symptoms'],
      symptomsMen: ['Genital warts', 'Usually no symptoms'],
      prevention: ['HPV vaccine', 'Use condoms', 'Regular Pap smears for women'],
      testing: ['Pap smear for women', 'Visual inspection for warts'],
      symptomTimeline: 'Weeks to months after exposure for warts, years for cancer'
    },
    {
      name: 'Trichomoniasis',
      description: 'Trichomoniasis is a common STD caused by a parasite. It affects both women and men but symptoms are more common in women. Many people with trich dont have any symptoms.',
      symptomsWomen: ['Frothy, foul-smelling vaginal discharge', 'Genital itching', 'Painful urination'],
      symptomsMen: ['Irritation inside the penis', 'Burning after urination or ejaculation'],
      prevention: ['Use condoms', 'Regular testing', 'Avoid sharing wet towels or washcloths'],
      testing: ['Microscopic examination of sample', 'Rapid antigen test'],
      symptomTimeline: '5-28 days after exposure'
    },
    {
      name: 'Hepatitis B',
      description: 'Hepatitis B is a viral infection that attacks the liver and can cause both acute and chronic disease. It can be transmitted through sexual contact or contact with infected blood.',
      symptomsWomen: ['Fatigue', 'Nausea', 'Abdominal pain', 'Jaundice'],
      symptomsMen: ['Fatigue', 'Nausea', 'Abdominal pain', 'Jaundice'],
      prevention: ['Hepatitis B vaccine', 'Use condoms', 'Avoid sharing needles'],
      testing: ['Blood test'],
      symptomTimeline: '6 weeks to 6 months after exposure'
    },
    {
      name: 'Mycoplasma Genitalium',
      description: 'Mycoplasma genitalium is a bacterium that can cause inflammation of the urethra in men and women, and inflammation of the cervix in women. Its a relatively newly discovered STD and is becoming increasingly common.',
      symptomsWomen: ['Vaginal discharge', 'Pain during sex', 'Pelvic pain'],
      symptomsMen: ['Watery discharge from penis', 'Burning sensation when urinating'],
      prevention: ['Use condoms', 'Regular testing', 'Limit sexual partners'],
      testing: ['Urine test', 'Swab test'],
      symptomTimeline: 'Often asymptomatic, can develop weeks after exposure'
    },
    {
      name: 'Pubic Lice (Crabs)',
      description: 'Pubic lice, also known as crabs, are tiny insects that infest the coarse hair of the genital area. They cause intense itching and are spread through close personal contact, including sexual contact.',
      symptomsWomen: ['Intense itching in pubic area', 'Visible lice or eggs on pubic hair'],
      symptomsMen: ['Intense itching in pubic area', 'Visible lice or eggs on pubic hair'],
      prevention: ['Avoid sexual contact with infected individuals', 'Wash bedding and clothing in hot water'],
      testing: ['Visual inspection', 'Microscopic examination of sample'],
      symptomTimeline: 'Symptoms may appear 5 days after exposure'
    }
  ];

  selectedSTD: STDInfo | null = null;

  selectSTD(std: STDInfo) {
    this.selectedSTD = std;
  }
}