import ReligiousInstitution from "../../src/Domain/Entities/ReligiousInstitution";
import {fakerPT_BR as faker} from "@faker-js/faker";
import {
	InMemoryReligiousInstitutionRepository
} from "../../src/Infra/Repositories/InMemoryReligiousInstitutionRepository";
import {GetReligiousInstitution} from "../../src/Application/Services/GetReligiousInstitution";
import {DeleteReligiousInstitution} from "../../src/Application/UseCases/DeleteReligiousInstitution";

describe('[Integration]: Deleção de instituição religiosa', (): void => {
	test('Deve deletar uma uma instituição religiosa', async (): Promise<void> => {
		/**
		 * Construo uma instituição religiosa para cadastrar no banco.
		 */
		const religiousInstitutionOne: ReligiousInstitution = ReligiousInstitution.create(
			`${faker.company.name()} ${faker.company.name()}`,
			faker.internet.email(),
			faker.location.streetAddress(),
			faker.location.city(),
			faker.location.country(),
			'Vila Ioruba',
			faker.location.zipCode(),
			'31.777.718/0001-12',
			faker.lorem.paragraphs(5)
		);
		const religiousInstitutionTwo: ReligiousInstitution = ReligiousInstitution.create(
			`${faker.company.name()} ${faker.company.name()}`,
			faker.internet.email(),
			faker.location.streetAddress(),
			faker.location.city(),
			faker.location.country(),
			'Vila Ioruba',
			faker.location.zipCode(),
			'31.777.718/0001-12',
			faker.lorem.paragraphs(5)
		);
		
		/**
		 * Monto o Repository que vou usar no teste e executo o caso de uso que faz a criação.
		 */
		const religiousRepository: InMemoryReligiousInstitutionRepository = new InMemoryReligiousInstitutionRepository();
		await religiousRepository.save(religiousInstitutionOne);
		await religiousRepository.save(religiousInstitutionTwo);
		
		/**
		 * Faço a deleção de uma instituição religiosa da base de dados.
		 */
		const deleteReligiousInstitution: DeleteReligiousInstitution = new DeleteReligiousInstitution(religiousRepository);
		await deleteReligiousInstitution.execute(religiousInstitutionTwo.id);
		expect(deleteReligiousInstitution).toBeDefined();
		
		/**
		 * Verifico se o dado foi removido da base de dados e não está mais disponível no sistema.
		 */
		const getReligiousInstitution: GetReligiousInstitution = new GetReligiousInstitution(religiousRepository);
		const responseGetReligiousInstitution: ReligiousInstitution[] = await getReligiousInstitution.findAll();
		expect(responseGetReligiousInstitution.length).toBe(1);
		expect(responseGetReligiousInstitution[0].id).not.toEqual(religiousInstitutionTwo.id);
	});
});