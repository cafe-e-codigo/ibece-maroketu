import { UseCase } from './UseCase'
import { ReligiousRepository } from '../Repositories/ReligiousRepository'

export class DeleteReligiousInstitution implements UseCase<string, void> {
    constructor(readonly religiousInstitutionRepository: ReligiousRepository) {}

    async execute(id: string): Promise<void> {
        await this.religiousInstitutionRepository.delete(id)
    }
}
