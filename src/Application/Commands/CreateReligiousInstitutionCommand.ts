export class CreateReligiousInstitutionCommand {
    readonly name: string
    readonly email: string
    readonly address: string
    readonly city: string
    readonly country: string
    readonly neighborhood: string
    readonly zipCode: string
    readonly cnpj: string
    readonly history: string

    constructor({ name, email, address, city, country, neighborhood, zipCode, cnpj, history }: { name: string; email: string; address: string; city: string; country: string; neighborhood: string; zipCode: string; cnpj: string; history: string }) {
        this.name = name
        this.email = email
        this.address = address
        this.city = city
        this.country = country
        this.neighborhood = neighborhood
        this.zipCode = zipCode
        this.cnpj = cnpj
        this.history = history
    }
}
