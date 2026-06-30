import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brochure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brochure.component.html',
  styleUrls: ['./brochure.component.css']
})
export class BrochureComponent {
  brochureUrl = 'https://drive.google.com/file/d/1a5_93MQvuW4pGuTQ2uhBc6hBqWmzzELN/view?usp=sharing';
  
  downloadBrochure() {
    window.open(this.brochureUrl, '_blank');
  }
}
