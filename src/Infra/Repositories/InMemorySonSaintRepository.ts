import { SonSaintRepository } from '../../Application/Repositories/SonSaintRepository'
import { SonSaint } from '../../Domain/Entities/SonSaint'

export class InMemorySonSaintRepository implements SonSaintRepository {
    protected sonsSaint: {
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
    }[]

    constructor() {
        this.sonsSaint = []
    }

    async save(sonSaint: SonSaint): Promise<void> {
        this.sonsSaint.push({
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
        })
    }

    async update(sonSaint: SonSaint): Promise<SonSaint> {
        throw new Error('Method not implemented.')
    }

    async delete(id: string): Promise<void> {
        throw new Error('Method not implemented.')
    }

    async findById(id: string): Promise<SonSaint> {
        throw new Error('Method not implemented.')
    }

    async findAll(): Promise<SonSaint[]> {
        const sonsSaints: SonSaint[] = []
        for (const sonSaint of this.sonsSaint) {
            sonsSaints.push(
                SonSaint.restore(
                    sonSaint.id,
                    sonSaint.religiousInstitutionId,
                    sonSaint.name,
                    sonSaint.email,
                    sonSaint.cpf,
                    sonSaint.bio,
                    sonSaint.firstSaint,
                    sonSaint.secondSaint,
                    sonSaint.othersSpirits,
                    sonSaint.obligations,
                    sonSaint.initiationDate,
                    sonSaint.address,
                    sonSaint.zipCode,
                    sonSaint.state,
                    sonSaint.city,
                    sonSaint.country,
                ),
            )
        }
        return sonsSaints
    }
}
