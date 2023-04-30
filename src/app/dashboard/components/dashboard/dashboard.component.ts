import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Spareparts } from 'src/app/shared/store/sparepart';
import { SparepartState } from 'src/app/shared/store/sparepart/sparepart.state';
import { SparepartService } from 'src/app/shared/services/api/sparepart/sparepart.service';
import { Sparepart } from 'src/app/shared/interfaces/sparepart/sparepart';
import { MachineState } from 'src/app/shared/store/machine/machine.state';
import { map } from 'rxjs';
import { Machine } from 'src/app/shared/interfaces/machine/machine';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  spareparts$ = this.store.select(SparepartState.getEntities);
  machines$ = this.store.select(MachineState.getEntities);
  constructor(
    private store: Store,
    private sparepartService: SparepartService
  ) {
    this.store.dispatch(new Spareparts.Load());
  }
  sparepartsSidebarOpen = false;
  selectedMachineId: string | undefined;
  selectedSparepartId: string | undefined;
  sparepartsOfCurrentMachine: any;
  currentMachine: Machine | undefined;
  currentSparepart: Sparepart | undefined;
  remainingTimeInDays: number | undefined;
  actualLifetimeInDays: number | undefined;
  totalLifetimeInDays: number | undefined;

  showNewSparepartModal = false;

  ngOnInit(): void {}

  openSparepartsSidebar(machineId: string) {
    this.selectedMachineId = machineId;

    this.store
      .select(SparepartState.getEntities)
      .pipe(
        map((spareparts) =>
          spareparts.filter((sparepart) => sparepart.machineId === machineId)
        )
      )
      .subscribe((spareparts) => {
        this.sparepartsOfCurrentMachine = spareparts;
      });

    this.store
      .select(MachineState.getMachinesById(machineId))
      .pipe(
        map((spareparts) =>
          spareparts.find((machine) => machine.id === machineId)
        )
      )
      .subscribe((machine) => {
        this.currentMachine = machine;
      });

    this.sparepartsSidebarOpen = true;
  }

  calculateRemainingTime(sparepart: Sparepart) {
    this.currentSparepart = sparepart;

    this.remainingTimeInDays = Math.floor(
      (sparepart.totalLifetime - sparepart.actualLifetime) / 24
    );
    this.actualLifetimeInDays = Math.floor(sparepart.actualLifetime / 24);

    this.totalLifetimeInDays = Math.floor(sparepart.totalLifetime / 24);
  }

  closeSparepartsSidebar() {
    this.sparepartsSidebarOpen = false;
  }

  openModal() {
    this.showNewSparepartModal != this.showNewSparepartModal;
  }

  closeModal() {
    this.showNewSparepartModal != this.showNewSparepartModal;
  }
}
