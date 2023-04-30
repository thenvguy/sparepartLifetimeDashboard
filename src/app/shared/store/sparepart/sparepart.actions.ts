export namespace Spareparts {
  export class Load {
    static readonly type = '[Load] Load Spareparts';
  }

  export class LoadById {
    static readonly type = '[Load] Load Sparepart By Id';
    constructor(public sparepartId: string) {}
  }
  export class LoadByMachineId {
    static readonly type = '[Load] Load Sparepart By Id';
    constructor(public machineId: string) {}
  }
}
