export class SearchSettings {
    search: string | null;

    constructor() {
        this.search = null;
    }

    toString(): string {
        return '$search=' + (this.search);
    }

    reset(): void {
        this.search = null;
    }

    isSet(): boolean {
        return this.search !== null;
    }
}
