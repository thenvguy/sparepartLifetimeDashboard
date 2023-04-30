import { Machine } from '../../interfaces/machine/machine';
import { Injectable } from '@angular/core';
import { Machines } from './machine.actions';
import {
  Action,
  Selector,
  State,
  StateContext,
  createSelector,
} from '@ngxs/store';
import { MachineService } from '../../services/api/machine/machine.service';
import { tap } from 'rxjs/operators';
import { patch } from '@ngxs/store/operators';

export interface MachineStateModel {
  entities: Machine[];
  loaded: boolean;
  currentMachine: Machine | undefined;
}

export const MachineStateDefaults = {
  entities: [],
  loaded: false,
  currentMachine: undefined,
};

@State<MachineStateModel>({
  name: 'machines',
  defaults: MachineStateDefaults,
})
@Injectable()
export class MachineState {
  constructor(private machineService: MachineService) {}

  @Action(Machines.Load)
  Load({ setState }: StateContext<MachineStateModel>) {
    return this.machineService.LoadMachines().pipe(
      tap((spareparts) => {
        setState(
          patch<MachineStateModel>({
            entities: spareparts,
            loaded: true,
          })
        );
      })
    );
  }

  @Selector([MachineState])
  public static getEntities(state: MachineStateModel): Machine[] {
    return state.entities;
  }

  static getMachinesById(machineId: string) {
    return createSelector([MachineState.getEntities], (machines: Machine[]) =>
      machines.filter((machine) => machine.id === machineId)
    );
  }
}
