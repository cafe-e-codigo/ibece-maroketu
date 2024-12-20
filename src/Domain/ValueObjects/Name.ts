export class Name {
    private readonly _value: string

    constructor(name: string) {
        if (!name || !name.match(/[a-zA-z] [a-zA-z]+/)) throw new Error('Invalid name.')
        this._value = name
    }

    get value(): string {
        return this._value
    }
}
