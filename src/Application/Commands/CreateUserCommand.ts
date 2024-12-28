export class CreateUserCommand {
    public religiousInstitutionId: string
    public name: string
    public email: string
    public cpf: string
    public bio: string
    public firstSaint: string
    public secondSaint: string
    public othersSpirits: { name: string; type: string }[]
    public obligations: { name: string; type: string; date: string }[]
    public initiationDate: string
    public address: string
    public zipCode: string
    public state: string
    public city: string
    public country: string
    public type: string

    constructor({
        religiousInstitutionId,
        name,
        email,
        cpf,
        bio,
        firstSaint,
        secondSaint,
        othersSpirits,
        obligations,
        initiationDate,
        address,
        zipCode,
        state,
        city,
        country,
        type,
    }: {
        religiousInstitutionId: string
        name: string
        email: string
        cpf: string
        bio: string
        firstSaint: string
        secondSaint: string
        othersSpirits: { name: string; type: string }[]
        obligations: { name: string; type: string; date: string }[]
        initiationDate: string
        address: string
        zipCode: string
        state: string
        city: string
        country: string
        type: string
    }) {
        this.religiousInstitutionId = religiousInstitutionId
        this.name = name
        this.email = email
        this.cpf = cpf
        this.bio = bio
        this.firstSaint = firstSaint
        this.secondSaint = secondSaint
        this.othersSpirits = othersSpirits
        this.obligations = obligations
        this.initiationDate = initiationDate
        this.address = address
        this.zipCode = zipCode
        this.state = state
        this.city = city
        this.country = country
        this.type = type
    }
}
