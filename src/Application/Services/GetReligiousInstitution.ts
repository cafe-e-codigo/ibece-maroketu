import { ReligiousRepository } from '../Repositories/ReligiousRepository'
import ReligiousInstitution from '../../Domain/Entities/ReligiousInstitution'

export class GetReligiousInstitution {
    constructor(readonly religiousInstitutionRepository: ReligiousRepository) {}

    async findAll(): Promise<ReligiousInstitution[]> {
        return this.religiousInstitutionRepository.findAll()
    }

    async findById(id: string): Promise<ReligiousInstitution> {
        return this.religiousInstitutionRepository.findById(id)
    }
}
