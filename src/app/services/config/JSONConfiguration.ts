import {Configuration} from './Configuration';
import {TrueConfiguration} from './TrueConfiguration';
import {FalseConfiguration} from './FalseConfiguration';

export class JSONConfiguration implements Configuration {
    constructor(private config: Object) {
    }

    public isFieldMandatory(name: string): boolean {
        var value = this.getValue(name);
        return typeof value === 'undefined' || !!value;
    }

    private getValue(name: string): any {
        if (typeof name !== 'string' || name.length === 0) {
            return null;
        }

        return this.config[name];
    }

    public getConfigFor(name: string): Configuration {
        var value = this.getValue(name);
        if (value === true || typeof value === 'undefined') {
            return new TrueConfiguration();
        } else if (!value) {
            return new FalseConfiguration();
        } else {
            return new JSONConfiguration(value);
        }
    }
}
