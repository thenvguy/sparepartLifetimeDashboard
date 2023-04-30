import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { SparepartState } from './shared/store/sparepart/sparepart.state';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { StoreModule } from './shared/store/store.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MachineState } from './shared/store/machine/machine.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([SparepartState, MachineState]),
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
