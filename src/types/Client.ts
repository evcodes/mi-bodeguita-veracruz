import { Unit } from "./Unit";
export interface Client {
  name: string;
  email: string;
  phoneNumber: string;
  units: [Unit];
}
