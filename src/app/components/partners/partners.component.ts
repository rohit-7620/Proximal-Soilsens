import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface PartnerFormData {
  name: string;
  companyName: string;
  email: string;
  mobile: string;
  comment: string;
}

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  // Form data
  formData = signal<PartnerFormData>({
    name: '',
    companyName: '',
    email: '',
    mobile: '',
    comment: ''
  });

  // Form submission state
  isSubmitting = signal(false);
  submitSuccess = signal(false);
  submitError = signal(false);

  // Google Sheets Web App URL
  private googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbxwS1AZPOuOvGlzvTLX_X--drtLroRfvTylERR-FsNfoLvaiafPI8sC3NYJ4PAu0LM/exec';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const data = this.formData();
    
    // Basic validation
    if (!data.name || !data.companyName || !data.email || !data.mobile) {
      alert('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
      alert('Please enter a valid email address');
      return;
    }

    this.isSubmitting.set(true);
    this.submitSuccess.set(false);
    this.submitError.set(false);

    // Create URL with query parameters for GET request (works better with Google Sheets)
    const params = new URLSearchParams({
      name: data.name,
      companyName: data.companyName,
      email: data.email,
      mobile: data.mobile,
      comment: data.comment
    });

    const url = `${this.googleSheetsUrl}?${params.toString()}`;

    // Use HttpClient with GET request
    this.http.get(url).subscribe({
      next: (response: any) => {
        console.log('Form submission response:', response);
        this.isSubmitting.set(false);
        this.submitSuccess.set(true);
        this.resetForm();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess.set(false);
        }, 5000);
      },
      error: (error) => {
        console.error('Form submission error:', error);
        this.isSubmitting.set(false);
        this.submitError.set(true);
        
        // Hide error message after 5 seconds
        setTimeout(() => {
          this.submitError.set(false);
        }, 5000);
      }
    });
  }

  resetForm() {
    this.formData.set({
      name: '',
      companyName: '',
      email: '',
      mobile: '',
      comment: ''
    });
  }

  updateFormField(field: keyof PartnerFormData, value: string) {
    this.formData.update(data => ({
      ...data,
      [field]: value
    }));
  }
}
