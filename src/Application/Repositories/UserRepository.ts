import { User } from '../../Domain/Entities/User'

export interface UserRepository {
    save(sonSaint: User): Promise<void>
    update(sonSaint: User): Promise<User>
    delete(id: string): Promise<void>
    findById(id: string): Promise<User>
    findAll(): Promise<User[]>
}
