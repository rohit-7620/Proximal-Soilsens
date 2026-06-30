import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-request-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './request-demo.component.html',
  styleUrls: ['./request-demo.component.css']
})
export class RequestDemoComponent {
  private http = inject(HttpClient);
  private dataService = inject(DataService);

  companyInfo = this.dataService.companyInfo;
  
  formData = signal({
    name: '',
    email: '',
    role: '',
    company: '',
    cropType: '',
    mobile: '',
    message: ''
  });

  isSubmitting = signal(false);
  submitSuccess = signal(false);
  submitError = signal(false);

  // Google Sheets URL is loaded from environment (never hardcoded)
  private readonly GOOGLE_SCRIPT_URL = environment.googleSheetUrl;

  onSubmit() {
    if (this.isSubmitting()) return;

    this.isSubmitting.set(true);
    this.submitSuccess.set(false);
    this.submitError.set(false);

    // Send data to Google Sheets via Google Apps Script (using fetch with no-cors to bypass preflight)
    fetch(this.GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(this.formData())
    }).then(() => {
      this.isSubmitting.set(false);
      this.submitSuccess.set(true);
      this.resetForm();
    }).catch((err) => {
      console.error('Submission error:', err);
      this.isSubmitting.set(false);
      this.submitError.set(true);
    });
  }

  private resetForm() {
    this.formData.set({
      name: '',
      email: '',
      role: '',
      company: '',
      cropType: '',
      mobile: '',
      message: ''
    });
  }
}
