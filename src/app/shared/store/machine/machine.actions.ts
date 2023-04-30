export namespace Machines {
  export class Load {
    static readonly type = '[Load] Load Spareparts';
  }

  export class LoadById {
    static readonly type = '[Load] Load Sparepart By Id';
    constructor(public sparepartId: string) {}
  }
}
