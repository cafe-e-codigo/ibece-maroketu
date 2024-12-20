import { UseCase } from './UseCase'
import { CreateReligiousInstitutionCommand } from '../Commands/CreateReligiousInstitutionCommand'
import { ReligiousRepository } from '../Repositories/ReligiousRepository'
import ReligiousInstitution from '../../Domain/Entities/ReligiousInstitution'

export class CreateReligiousInstitution implements UseCase<CreateReligiousInstitutionCommand, void> {
    constructor(readonly religiousRepository: ReligiousRepository) {}

    async execute(input: CreateReligiousInstitutionCommand): Promise<void> {
        const religiousInstitution: ReligiousInstitution = ReligiousInstitution.create(input.name, input.email, input.address, input.city, input.country, input.neighborhood, input.zipCode, input.cnpj, input.history)
        await this.religiousRepository.save(religiousInstitution)
    }
}
