import { UseCase } from './UseCase'
import { CreateReligiousInstitutionCommand } from '../Commands/CreateReligiousInstitutionCommand'
import { ReligiousRepository } from '../Repositories/ReligiousRepository'
import ReligiousInstitution from '../../Domain/Entities/ReligiousInstitution'

export class UpdateReligiousInstitution implements UseCase<CreateReligiousInstitutionCommand, ReligiousInstitution> {
    constructor(readonly religiousRepository: ReligiousRepository) {}

    async execute(input: CreateReligiousInstitutionCommand): Promise<ReligiousInstitution> {
        const religiousInstitution: ReligiousInstitution = ReligiousInstitution.create(input.name, input.email, input.address, input.city, input.country, input.neighborhood, input.zipCode, input.cnpj, input.history)
        return await this.religiousRepository.update(religiousInstitution)
    }
}
