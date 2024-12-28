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
        createdAt: string
        updatedAt: string
        deletedAt: string
    }[]

    constructor() {
        this.religiousInstitutions = []
    }

    async save(religiousInstitution: any): Promise<void> {
        this.religiousInstitutions.push(religiousInstitution)
    }

    async update(religiousInstitution: ReligiousInstitution): Promise<ReligiousInstitution> {
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
            String(religiousInstitution.createdAt),
            String(religiousInstitution.updatedAt),
            String(religiousInstitution.deletedAt),
        )
    }

    async delete(id: string): Promise<void> {
        this.religiousInstitutions = this.religiousInstitutions.filter((religiousInstitution: any): any => religiousInstitution.id !== id)
    }

    async findAll(): Promise<ReligiousInstitution[]> {
        const religiousInstitutionData: any = this.religiousInstitutions.filter((religiousInstitution: any): any => religiousInstitution.deletedAt === null)
        const religiousInstitutions: ReligiousInstitution[] = []
        for (const religiousInstitution of religiousInstitutionData) {
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
                    religiousInstitution.createdAt,
                    religiousInstitution.updatedAt,
                    religiousInstitution.deletedAt,
                ),
            )
        }
        return religiousInstitutions
    }

    async findById(id: string): Promise<ReligiousInstitution> {
        const religiousInstitutionData: any = this.religiousInstitutions.filter((religiousInstitution: any): any => religiousInstitution.id === id)[0]
        return ReligiousInstitution.restore(
            religiousInstitutionData.id,
            religiousInstitutionData.name,
            religiousInstitutionData.email,
            religiousInstitutionData.address,
            religiousInstitutionData.city,
            religiousInstitutionData.country,
            religiousInstitutionData.neighborhood,
            religiousInstitutionData.zipCode,
            religiousInstitutionData.cnpj,
            religiousInstitutionData.history,
            religiousInstitutionData.createdAt,
            religiousInstitutionData.updatedAt,
            religiousInstitutionData.deletedAt,
        )
    }
}
