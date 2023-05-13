export class Current {
    private _title: string;
    private _content: string;
    private _link: string;
    private _titleLink: string;
    private _pictureLink: string;

    constructor(title: string, content: string, link: string, titleLink: string, pictureLink: string) {
        this._title = title;
        this._content = content;
        this._link = link;
        this._titleLink = titleLink;
        this._pictureLink = pictureLink;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get link(): string {
        return this._link;
    }

    set link(value: string) {
        this._link = value;
    }

    get titleLink(): string {
        return this._titleLink;
    }

    set titleLink(value: string) {
        this._titleLink = value;
    }

    get pictureLink(): string {
        return this._pictureLink;
    }

    set pictureLink(value: string) {
        this._pictureLink = value;
    }
}
