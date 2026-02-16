import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QualityService {

  private apiUrl = 'http://localhost:8080/api/quality';

  constructor(private http: HttpClient) {}

  predict(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(`${this.apiUrl}/predict`, formData);
  }
}