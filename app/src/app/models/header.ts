export class Header {
    private _brand: string;
    private _about: string;
    private _current: string;
    private _toolbox: string;
    private _projects: string;
    private _contact: string;

    constructor() {
        this._brand = '';
        this._about = '';
        this._current = '';
        this._toolbox = '';
        this._projects = '';
        this._contact = '';
    }

    get brand(): string {
        return this._brand;
    }

    set brand(value: string) {
        this._brand = value;
    }

    get about(): string {
        return this._about;
    }

    set about(value: string) {
        this._about = value;
    }

    get current(): string {
        return this._current;
    }

    set current(value: string) {
        this._current = value;
    }

    get toolbox(): string {
        return this._toolbox;
    }

    set toolbox(value: string) {
        this._toolbox = value;
    }

    get projects(): string {
        return this._projects;
    }

    set projects(value: string) {
        this._projects = value;
    }

    get contact(): string {
        return this._contact;
    }

    set contact(value: string) {
        this._contact = value;
    }
}
