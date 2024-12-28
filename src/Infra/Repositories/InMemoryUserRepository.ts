import { UserRepository } from '../../Application/Repositories/UserRepository'
import { User } from '../../Domain/Entities/User'

export class InMemoryUserRepository implements UserRepository {
    protected user: {
        id: string
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
    }[]

    constructor() {
        this.user = []
    }

    async save(sonSaint: User): Promise<void> {
        this.user.push({
            id: sonSaint.id,
            religiousInstitutionId: sonSaint.religiousInstitutionId,
            name: sonSaint.name,
            email: sonSaint.email,
            cpf: sonSaint.cpf,
            bio: sonSaint.bio,
            firstSaint: sonSaint.firstSaint,
            secondSaint: sonSaint.secondSaint,
            othersSpirits: sonSaint.othersSpirits,
            obligations: sonSaint.obligations,
            initiationDate: sonSaint.initiationDate,
            address: sonSaint.address,
            zipCode: sonSaint.zipCode,
            state: sonSaint.state,
            city: sonSaint.city,
            country: sonSaint.country,
            type: sonSaint.type,
        })
    }

    async update(sonSaint: User): Promise<User> {
        throw new Error('Method not implemented.')
    }

    async delete(id: string): Promise<void> {
        throw new Error('Method not implemented.')
    }

    async findById(id: string): Promise<User> {
        throw new Error('Method not implemented.')
    }

    async findAll(): Promise<User[]> {
        const users: User[] = []
        for (const sonSaint of this.user) {
            users.push(User.restore(sonSaint.id, sonSaint.religiousInstitutionId, sonSaint.name, sonSaint.email, sonSaint.cpf, sonSaint.bio, sonSaint.firstSaint, sonSaint.secondSaint, sonSaint.othersSpirits, sonSaint.obligations, sonSaint.initiationDate, sonSaint.address, sonSaint.zipCode, sonSaint.state, sonSaint.city, sonSaint.country, sonSaint.type))
        }
        return users
    }
}
