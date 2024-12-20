import ReligiousInstitution from '../../Domain/Entities/ReligiousInstitution'

export interface ReligiousRepository {
    save(religiousInstitution: ReligiousInstitution): Promise<void>
    update(religiousInstitution: ReligiousInstitution): Promise<ReligiousInstitution>
    delete(id: string): Promise<void>
    findAll(): Promise<ReligiousInstitution[]>
    findById(id: string): Promise<ReligiousInstitution>
}
