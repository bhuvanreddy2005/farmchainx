import { Routes } from '@angular/router';
import { UploadComponent } from './modules/prediction/upload/upload.component';
import { AnalysisComponent } from './modules/prediction/analysis/analysis.component';

export const routes: Routes = [
  { path: '', redirectTo: 'upload', pathMatch: 'full' },
  { path: 'upload', component: UploadComponent },
  { path: 'analysis', component: AnalysisComponent }
];