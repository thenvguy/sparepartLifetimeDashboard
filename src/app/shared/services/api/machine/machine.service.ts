import { Injectable } from '@angular/core';
import { Machine } from '../../../interfaces/machine/machine';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MachineService {
  constructor() {}

  public LoadMachines(): Observable<Machine[]> {
    console.log('clicky');
    //transforming the dummydata to an observable
    const machines$ = of(this.machines);
    return machines$;
  }

  public LoadMachineById(machineId: string) {
    //transforming the dummydata to an observable

    const machine = this.machines.find((machine) => machine.id === machineId);
    const machine$ = of(machine);

    return machine$;
  }

  machines = [
    {
      id: '1',
      name: 'Machine 1',
    },
    {
      id: '2',
      name: 'Machine 2',
    },
    {
      id: '3',
      name: 'Machine 3',
    },
    {
      id: '4',
      name: 'Machine 4',
    },
  ];
}
