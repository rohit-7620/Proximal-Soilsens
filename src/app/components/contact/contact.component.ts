import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  companyInfo: any;

  formData = signal({ name: '', email: '', role: '', company: '', cropType: '', mobile: '', message: '' });
  isSubmitting = signal(false);
  submitSuccess = signal(false);

  // Google Sheets URL is loaded from environment (never hardcoded)
  private readonly GOOGLE_SHEET_URL = environment.googleSheetUrl;

  constructor(private dataService: DataService) {}

  ngOnInit() { this.companyInfo = this.dataService.companyInfo; }



  async onSubmit() {
    this.isSubmitting.set(true);
    this.submitSuccess.set(false);
    
    try {
      const response = await fetch(this.GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({
          name: this.formData().name,
          email: this.formData().email,
          role: this.formData().role,
          company: this.formData().company,
          cropType: this.formData().cropType,
          mobile: this.formData().mobile,
          message: this.formData().message,
          timestamp: new Date().toISOString()
        })
      });
      
      this.isSubmitting.set(false);
      this.submitSuccess.set(true);
      this.formData.set({ name: '', email: '', role: '', company: '', cropType: '', mobile: '', message: '' });
      setTimeout(() => this.submitSuccess.set(false), 6000);
    } catch (error) {
      console.error('Error submitting form:', error);
      this.isSubmitting.set(false);
      alert('There was an error submitting the form. Please try again or contact us directly.');
    }
  }
}
