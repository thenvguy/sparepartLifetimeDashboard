// Purpose: Interface for spare part object

export interface Sparepart {
  id: string;
  machineId: string;
  name: string;
  totalLifetime: number; // in hours
  actualLifetime: number; // in hours
}
