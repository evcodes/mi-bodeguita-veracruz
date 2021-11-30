import { Unit } from "./Unit";
interface ClientInterface {
  name: string;
  email: string;
  phoneNumber: string;
  units: [Unit];
}

export class Client {
  constructor(client: ClientInterface) {
    Object.assign(this, client);
  }
}

export interface Client extends ClientInterface {}
