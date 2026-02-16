import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  selectedImage!: File;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(private router: Router) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.selectedImage = file;

    const reader = new FileReader();
    reader.onload = () => this.previewUrl = reader.result;
    reader.readAsDataURL(file);
  }

  analyzeImage() {
    // 🔜 Backend API call later
    console.log('Analyzing image...', this.selectedImage);

    // Navigate to analysis page
    this.router.navigate(['/analysis']);
  }
}