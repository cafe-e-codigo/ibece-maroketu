import { SonSaint } from '../../Domain/Entities/SonSaint'

export interface SonSaintRepository {
    save(sonSaint: SonSaint): Promise<void>
    update(sonSaint: SonSaint): Promise<SonSaint>
    delete(id: string): Promise<void>
    findById(id: string): Promise<SonSaint>
    findAll(): Promise<SonSaint[]>
}
