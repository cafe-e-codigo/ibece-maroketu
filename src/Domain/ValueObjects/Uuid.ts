export class Uuid {
    protected readonly _value: string

    constructor(uuid: string) {
        if (!uuid || !uuid.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) throw new Error('Invalid ID.')
        this._value = uuid
    }

    get value(): string {
        return this._value
    }
}
