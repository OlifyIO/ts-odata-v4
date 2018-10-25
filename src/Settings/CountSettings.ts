export class CountSettings {
  countExists: boolean;

  constructor() {
      this.countExists = false;
  }

  toString(): string {
      return '$count=true';
  }

  reset(): void {
      this.countExists = false;
  }

  set(): void {
    this.countExists = true;
  }

  isSet(): boolean {
      return this.countExists;
  }
}
