export enum OrderByDirection {
    Asc = 'asc',
    Desc = 'desc'
}

export interface OrderByClause {
    property: string;
    order: OrderByDirection | undefined;
}

export class OrderBySettings {
    properties: OrderByClause[] = [];
    defaultProperty: OrderByClause | null = null;

    toString(): string {
        let formatted: string;
        if (!this.properties.length && this.defaultProperty) {
            formatted = this.formatClause(this.defaultProperty);
        } else {
            formatted = this.properties.map(x => this.formatClause(x)).join(',');
        }

        let qsValue = `$orderby=${formatted}`;

        return encodeURI(qsValue);
    }

    reset(): void {
        this.properties = [];
    }

    isSet(): boolean {
        return this.properties.length > 0 || this.defaultProperty !== null;
    }

    private formatClause(clause: OrderByClause): string {
        return clause.property + (clause.order ? ' ' + clause.order : '');
    }
}
