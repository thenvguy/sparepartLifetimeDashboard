import { Sparepart } from '../../interfaces/sparepart/sparepart';
import { Injectable } from '@angular/core';
import { Spareparts } from './sparepart.actions';
import {
  Action,
  Select,
  Selector,
  State,
  StateContext,
  createSelector,
} from '@ngxs/store';
import { SparepartService } from '../../services/api/sparepart/sparepart.service';
import { tap } from 'rxjs/operators';
import { patch } from '@ngxs/store/operators';
import { pipe } from 'rxjs';

export interface SparepartStateModel {
  entities: Sparepart[];
  loaded: boolean;
  currentSparepart: Sparepart | undefined;
}

export const SparepartStateDefaults = {
  entities: [],
  loaded: false,
  currentSparepart: undefined,
};

@State<SparepartStateModel>({
  name: 'spareparts',
  defaults: SparepartStateDefaults,
})
@Injectable()
export class SparepartState {
  constructor(private sparepartService: SparepartService) {}

  @Action(Spareparts.Load)
  Load({ setState }: StateContext<SparepartStateModel>) {
    return this.sparepartService.LoadSpareparts().pipe(
      tap((spareparts) => {
        setState(
          patch<SparepartStateModel>({
            entities: spareparts,
            loaded: true,
          })
        );
      })
    );
  }

  @Selector([SparepartState])
  public static getEntities(state: SparepartStateModel): Sparepart[] {
    return state.entities;
  }

  static getSparepartsByMachineId(machineId: string) {
    return createSelector(
      [SparepartState.getEntities],
      (spareparts: Sparepart[]) =>
        spareparts.filter((sparepart) => sparepart.machineId === machineId)
    );
  }
}
