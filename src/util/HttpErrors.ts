export class BadRequest extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

export class NotFound extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

export class NotUnique extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

