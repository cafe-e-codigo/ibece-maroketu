import * as crypto from 'node:crypto'
import { Cnpj } from '../ValueObjects/Cnpj'
import { Name } from '../ValueObjects/Name'
import { Email } from '../ValueObjects/Email'
import { Uuid } from '../ValueObjects/Uuid'

export default class ReligiousInstitution {
    private constructor(
        private readonly _id: Uuid,
        private readonly _name: Name,
        private readonly _email: Email,
        private readonly _address: string,
        private readonly _city: string,
        private readonly _country: string,
        private readonly _neighborhood: string,
        private readonly _zipCode: string,
        private readonly _cnpj: Cnpj,
        private readonly _history: string,
    ) {}

    static create(name: string, email: string, address: string, city: string, country: string, neighborhood: string, zipCode: string, cnpj: string, history: string): ReligiousInstitution {
        const id: string = crypto.randomUUID()
        return new ReligiousInstitution(new Uuid(id), new Name(name), new Email(email), address, city, country, neighborhood, zipCode, new Cnpj(cnpj), history)
    }

    static restore(id: string, name: string, email: string, address: string, city: string, country: string, neighborhood: string, zipCode: string, cnpj: string, history: string): ReligiousInstitution {
        return new ReligiousInstitution(new Uuid(id), new Name(name), new Email(email), address, city, country, neighborhood, zipCode, new Cnpj(cnpj), history)
    }

    get id(): string {
        return this._id.value
    }

    get name(): string {
        return this._name.value
    }

    get email(): string {
        return this._email.value
    }

    get address(): string {
        return this._address
    }

    get city(): string {
        return this._city
    }

    get country(): string {
        return this._country
    }

    get neighborhood(): string {
        return this._neighborhood
    }

    get zipCode(): string {
        return this._zipCode
    }

    get cnpj(): string {
        return this._cnpj.value
    }

    get history(): string {
        return this._history
    }
}
