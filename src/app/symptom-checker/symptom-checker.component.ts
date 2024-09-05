import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-symptom-checker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 class="text-3xl font-bold mb-6 text-center text-blue-600">Select or Enter Your Symptoms</h1>
      <div class="mb-6">
        <input
          type="text"
          placeholder="Search symptoms..."
          [(ngModel)]="searchTerm"
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-50 p-4 rounded-lg">
          <h2 class="text-xl font-semibold mb-4 text-gray-700">Symptom List</h2>
          <ul class="space-y-2">
            <li
              *ngFor="let symptom of filteredSymptoms"
              (click)="addSymptom(symptom)"
              class="cursor-pointer hover:bg-blue-100 p-2 rounded transition duration-200 ease-in-out"
            >
              {{ symptom }}
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-4 text-gray-700">Selected Symptoms</h2>
          <ul class="space-y-2">
            <li *ngFor="let symptom of selectedSymptoms" class="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
              <span>{{ symptom }}</span>
              <button (click)="removeSymptom(symptom)" class="text-red-500 hover:text-red-700 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button
        (click)="handleSubmit()"
        class="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
       Submit
      </button>
      <div *ngIf="diagnosisResult" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <h3 class="text-lg font-semibold text-green-800 mb-2">Diagnosis Result:</h3>
        <p class="text-green-700">{{ diagnosisResult }}</p>
      </div>
    </div>
  `,
})
export class SymptomCheckerComponent {
  searchTerm: string = '';
  selectedSymptoms: string[] = [];
  diagnosisResult: string | null = null;

  symptoms: string[] = [
    'Pain urination', 'Discharge', 'Bleeding',
    'Odor', 'Bowel movements', 'Itching',
    'Painless sores', 'Fatigue', 'Weight loss',
    'Painful bumps', 'Reddened skin', 'Leakage pus'
  ];

  constructor(private http: HttpClient) {}

  get filteredSymptoms(): string[] {
    return this.symptoms.filter(symptom =>
      symptom.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addSymptom(symptom: string): void {
    if (!this.selectedSymptoms.includes(symptom)) {
      this.selectedSymptoms.push(symptom);
    }
  }

  removeSymptom(symptom: string): void {
    this.selectedSymptoms = this.selectedSymptoms.filter(s => s !== symptom);
  }

  handleSubmit(): void {
    // Replace 'YOUR_BACKEND_URL' with the actual URL of your backend API
    const backendUrl = 'YOUR_BACKEND_URL/analyze-symptoms';

    this.http.post<{ diagnosis: string }>(backendUrl, { symptoms: this.selectedSymptoms })
      .subscribe(
        (response) => {
          this.diagnosisResult = response.diagnosis;
        },
        (error) => {
          console.error('Error sending symptoms to backend:', error);
          this.diagnosisResult = 'An error occurred while analyzing symptoms. Please try again.';
        }
      );
  }
}