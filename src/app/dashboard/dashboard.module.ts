import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SparepartFormComponent } from './components/sparepart-form/sparepart-form.component';

@NgModule({
  declarations: [DashboardComponent, SparepartFormComponent],
  imports: [CommonModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
