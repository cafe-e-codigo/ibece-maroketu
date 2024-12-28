import { UseCase } from './UseCase'
import { CreateUserCommand } from '../Commands/CreateUserCommand'
import { UserRepository } from '../Repositories/UserRepository'
import { User } from '../../Domain/Entities/User'

export class CreateUser implements UseCase<CreateUserCommand, void> {
    constructor(readonly sonSaintRepository: UserRepository) {}

    async execute(input: CreateUserCommand): Promise<void> {
        const sonSaint: User = User.create(input.religiousInstitutionId, input.name, input.email, input.cpf, input.bio, input.firstSaint, input.secondSaint, input.othersSpirits, input.obligations, input.initiationDate, input.address, input.zipCode, input.state, input.city, input.country, input.type)
        await this.sonSaintRepository.save(sonSaint)
    }
}
