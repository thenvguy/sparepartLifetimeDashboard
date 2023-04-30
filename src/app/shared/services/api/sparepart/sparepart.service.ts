import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sparepart } from '../../../interfaces/sparepart/sparepart';

@Injectable({
  providedIn: 'root',
})
export class SparepartService {
  constructor() {}

  public LoadSpareparts(): Observable<Sparepart[]> {
    console.log('clicky');
    //transforming the dummydata to an observable
    const spareparts$ = of(this.spareparts);
    return spareparts$;
  }

  public LoadSparepartById(sparepartId: string) {
    //transforming the dummydata to an observable

    const sparepart = this.spareparts.find(
      (sparepart) => sparepart.id === sparepartId
    );
    const sparepart$ = of(sparepart);

    return sparepart$;
  }

  //dummy data for frontend only purpose
  spareparts = [
    {
      id: '1',
      machineId: '1',
      name: 'Oil filter',
      totalLifetime: 5000,
      actualLifetime: 2000,
    },
    {
      id: '2',
      machineId: '1',
      name: 'Air filter',
      totalLifetime: 10000,
      actualLifetime: 3000,
    },
    {
      id: '3',
      machineId: '1',
      name: 'Fuel filter',
      totalLifetime: 8000,
      actualLifetime: 2500,
    },
    {
      id: '4',
      machineId: '2',
      name: 'Spark plug',
      totalLifetime: 500,
      actualLifetime: 200,
    },
    {
      id: '5',
      machineId: '2',
      name: 'Ignition coil',
      totalLifetime: 10000,
      actualLifetime: 8000,
    },
    {
      id: '6',
      machineId: '2',
      name: 'Distributor cap',
      totalLifetime: 15000,
      actualLifetime: 11000,
    },
    {
      id: '7',
      machineId: '3',
      name: 'Brake pads',
      totalLifetime: 50000,
      actualLifetime: 35000,
    },
    {
      id: '8',
      machineId: '3',
      name: 'Brake rotors',
      totalLifetime: 100000,
      actualLifetime: 80000,
    },
    {
      id: '9',
      machineId: '3',
      name: 'Brake fluid',
      totalLifetime: 20000,
      actualLifetime: 15000,
    },
    {
      id: '10',
      machineId: '4',
      name: 'Timing belt',
      totalLifetime: 60000,
      actualLifetime: 40000,
    },
  ];
}
