export class ColorMode {
    private _light: string;
    private _dark: string;

    constructor(light: string, dark: string) {
        this._light = light;
        this._dark = dark;
    }

    get light(): string {
        return this._light;
    }

    set light(value: string) {
        this._light = value;
    }

    get dark(): string {
        return this._dark;
    }

    set dark(value: string) {
        this._dark = value;
    }
}
