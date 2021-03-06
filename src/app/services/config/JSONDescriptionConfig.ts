import { DescriptionConfig } from './DescriptionConfig';
import { TrueDescriptionConfig } from './TrueDescriptionConfig';
import { FalseDescriptionConfig } from './FalseDescriptionConfig';

export class JSONDescriptionConfig implements DescriptionConfig {
    constructor(private config: Object) {
    }

    public isFieldMandatory(name: string): boolean {
        let value = this.getValue(name);
        return typeof value === 'undefined' || !!value;
    }

    public getConfigFor(name: string): DescriptionConfig {
        let value = this.getValue(name);
        if (value === true || typeof value === 'undefined') {
            return new TrueDescriptionConfig();
        } else if (!value) {
            return new FalseDescriptionConfig();
        } else {
            return new JSONDescriptionConfig(value);
        }
    }

    private getValue(name: string): any {
        if (typeof name !== 'string' || name.length === 0) {
            return null;
        }

        return this.config[name];
    }
}
