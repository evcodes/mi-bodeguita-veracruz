interface UnitInterface {
  readonly unitNumber: number;
  readonly measurement: Sizes;
  clientName: string;
  available: boolean;
  lastDatePaid: string;
  dateOfEntry: string;
  pricePaid: number;
}

export enum Sizes {
  SMALL = "3x3",
  MED = "3x5",
  LARGE = "3x6",
  XL = "4x5",
  XXL = "4x6",
}

export class Unit {
  constructor(unit: UnitInterface) {
    Object.assign(this, unit);
  }

  // getters
  getAvailability(): boolean {
    return this.available;
  }
  getMeasurement(): Sizes {
    return this.measurement;
  }
  getClientName(): string {
    return this.clientName;
  }
  getUnitNumber(): number {
    return this.unitNumber;
  }
  getLastDatePaid(): string {
    return this.lastDatePaid;
  }
  getDateOfEntry(): string {
    return this.dateOfEntry;
  }
  getPricePaid(): number {
    return this.pricePaid;
  }

  //setters
  setClientName(newName: string): void {
    this.clientName = newName;
  }
  setPricePaid(price: number): void {
    this.pricePaid = price;
  }
  setAvailability(avail: boolean): void {
    this.available = avail;
  }
  setLastDatePaid(date: string): void {
    this.lastDatePaid = date;
  }
  setDateOfEntry(date: string): void {
    this.dateOfEntry = date;
  }
}

export interface Unit extends UnitInterface {}
