export class Email {
    protected readonly _value: string

    constructor(email: string) {
        if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) throw new Error('Invalid email.')
        this._value = email
    }

    get value(): string {
        return this._value
    }
}
