import { UseCase } from './UseCase'
import { CreateSonSaintCommand } from '../Commands/CreateSonSaintCommand'
import { SonSaintRepository } from '../Repositories/SonSaintRepository'
import { SonSaint } from '../../Domain/Entities/SonSaint'

export class CreateSonSaint implements UseCase<CreateSonSaintCommand, void> {
    constructor(readonly sonSaintRepository: SonSaintRepository) {}

    async execute(input: CreateSonSaintCommand): Promise<void> {
        const sonSaint: SonSaint = SonSaint.create(
            input.religiousInstitutionId,
            input.name,
            input.email,
            input.cpf,
            input.bio,
            input.firstSaint,
            input.secondSaint,
            input.othersSpirits,
            input.obligations,
            input.initiationDate,
            input.address,
            input.zipCode,
            input.state,
            input.city,
            input.country,
        )
        await this.sonSaintRepository.save(sonSaint)
    }
}
