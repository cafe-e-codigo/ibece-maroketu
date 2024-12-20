import * as crypto from 'node:crypto'
import { Cpf } from '../ValueObjects/Cpf'
import { Name } from '../ValueObjects/Name'
import { Email } from '../ValueObjects/Email'
import { Uuid } from '../ValueObjects/Uuid'

export class SonSaint {
    private constructor(
        private readonly _id: Uuid,
        private readonly _religiousInstitutionId: Uuid,
        private readonly _name: Name,
        private readonly _email: Email,
        private readonly _cpf: Cpf,
        private readonly _bio: string,
        private readonly _firstSaint: string,
        private readonly _secondSaint: string,
        private readonly _othersSpirits: { name: string; type: string }[],
        private readonly _obligations: {
            name: string
            type: string
            date: string
        }[],
        private readonly _initiationDate: string,
        private readonly _address: string,
        private readonly _zipCode: string,
        private readonly _state: string,
        private readonly _city: string,
        private readonly _country: string,
    ) {}

    static create(
        religiousInstitutionId: string,
        name: string,
        email: string,
        cpf: string,
        bio: string,
        firstSaint: string,
        secondSaint: string,
        othersSpirits: { name: string; type: string }[],
        obligations: { name: string; type: string; date: string }[],
        initiationDate: string,
        address: string,
        zipCode: string,
        state: string,
        city: string,
        country: string,
    ): SonSaint {
        const id: string = crypto.randomUUID()
        return new SonSaint(new Uuid(id), new Uuid(religiousInstitutionId), new Name(name), new Email(email), new Cpf(cpf), bio, firstSaint, secondSaint, othersSpirits, obligations, initiationDate, address, zipCode, state, city, country)
    }

    static restore(
        id: string,
        religiousInstitutionId: string,
        name: string,
        email: string,
        cpf: string,
        bio: string,
        firstSaint: string,
        secondSaint: string,
        othersSpirits: { name: string; type: string }[],
        obligations: { name: string; type: string; date: string }[],
        initiationDate: string,
        address: string,
        zipCode: string,
        state: string,
        city: string,
        country: string,
    ): SonSaint {
        return new SonSaint(new Uuid(id), new Uuid(religiousInstitutionId), new Name(name), new Email(email), new Cpf(cpf), bio, firstSaint, secondSaint, othersSpirits, obligations, initiationDate, address, zipCode, state, city, country)
    }

    get id(): string {
        return this._id.value
    }

    get religiousInstitutionId(): string {
        return this._religiousInstitutionId.value
    }

    get name(): string {
        return this._name.value
    }

    get email(): string {
        return this._email.value
    }

    get cpf(): string {
        return this._cpf.value
    }

    get bio(): string {
        return this._bio
    }

    get firstSaint(): string {
        return this._firstSaint
    }

    get secondSaint(): string {
        return this._secondSaint
    }

    get othersSpirits(): { name: string; type: string }[] {
        return this._othersSpirits
    }

    get obligations(): { name: string; type: string; date: string }[] {
        return this._obligations
    }

    get initiationDate(): string {
        return this._initiationDate
    }

    get address(): string {
        return this._address
    }

    get zipCode(): string {
        return this._zipCode
    }

    get state(): string {
        return this._state
    }

    get city(): string {
        return this._city
    }

    get country(): string {
        return this._country
    }
}
