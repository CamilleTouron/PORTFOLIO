export class Footer {
    private _text: string;

    constructor(text: string) {
        this._text = text;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }
}
