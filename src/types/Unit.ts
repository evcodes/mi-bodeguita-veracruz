interface UnitInterface {
  readonly id: string;
  readonly unitNumber: number;
  readonly measurement: Sizes;
  clientName: string;
  available: boolean;
  lastDatePaid: Date;
  dateOfEntry: Date;
  pricePaid: number;
}

enum Sizes {
  "3x3",
  "3x5",
  "3x6",
  "4x5",
  "4x6",
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
  getLastDatePaid(): Date {
    return this.lastDatePaid;
  }
  getDateOfEntry(): Date {
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
  setLastDatePaid(date: Date): void {
    this.lastDatePaid = date;
  }
  setDateOfEntry(date: Date): void {
    this.dateOfEntry = date;
  }
}

export interface Unit extends UnitInterface {}
