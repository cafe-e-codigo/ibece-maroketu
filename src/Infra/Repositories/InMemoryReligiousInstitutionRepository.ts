import { ReligiousRepository } from '../../Application/Repositories/ReligiousRepository'
import ReligiousInstitution from '../../Domain/Entities/ReligiousInstitution'

export class InMemoryReligiousInstitutionRepository implements ReligiousRepository {
    protected religiousInstitutions: {
        id: string
        name: string
        email: string
        address: string
        city: string
        country: string
        neighborhood: string
        zipCode: string
        cnpj: string
        history: string
    }[]

    constructor() {
        this.religiousInstitutions = []
    }

    async save(religiousInstitution: ReligiousInstitution): Promise<void> {
        this.religiousInstitutions.push(religiousInstitution)
    }

    async update(religiousInstitution: ReligiousInstitution): Promise<ReligiousInstitution> {
        const index: number = this.religiousInstitutions.findIndex(
            (ri: { id: string; name: string; email: string; address: string; city: string; country: string; neighborhood: string; zipCode: string; cnpj: string; history: string }): boolean => ri.id === religiousInstitution.id,
        )
        this.religiousInstitutions[index] = religiousInstitution
        return ReligiousInstitution.restore(
            religiousInstitution.id,
            religiousInstitution.name,
            religiousInstitution.email,
            religiousInstitution.address,
            religiousInstitution.city,
            religiousInstitution.country,
            religiousInstitution.neighborhood,
            religiousInstitution.zipCode,
            religiousInstitution.cnpj,
            religiousInstitution.history,
        )
    }

    async delete(id: string): Promise<void> {
        throw new Error('Method not implemented.')
    }

    async findAll(): Promise<ReligiousInstitution[]> {
        const religiousInstitutions: ReligiousInstitution[] = []
        for (const religiousInstitution of this.religiousInstitutions) {
            religiousInstitutions.push(
                ReligiousInstitution.restore(
                    religiousInstitution.id,
                    religiousInstitution.name,
                    religiousInstitution.email,
                    religiousInstitution.address,
                    religiousInstitution.city,
                    religiousInstitution.country,
                    religiousInstitution.neighborhood,
                    religiousInstitution.zipCode,
                    religiousInstitution.cnpj,
                    religiousInstitution.history,
                ),
            )
        }
        return religiousInstitutions
    }

    async findById(id: string): Promise<ReligiousInstitution> {
        throw new Error('Method not implemented.')
    }
}
