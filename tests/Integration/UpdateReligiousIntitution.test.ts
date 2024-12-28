import ReligiousInstitution from "../../src/Domain/Entities/ReligiousInstitution";
import {fakerPT_BR as faker} from "@faker-js/faker";
import {
	InMemoryReligiousInstitutionRepository
} from "../../src/Infra/Repositories/InMemoryReligiousInstitutionRepository";
import {CreateReligiousInstitution} from "../../src/Application/UseCases/CreateReligiousInstitution";
import {UpdateReligiousInstitution} from "../../src/Application/UseCases/UpdateReligiousInstitution";

describe('[Integration]: Atualização de uma instituição religiosa', (): void => {
	test('Deve atualizar o cadastro de uma entidade religiosa', async (): Promise<void> => {
		/**
		 * Construo uma instituição religiosa;
		 */
		const inputCreateReligiousInstitution: ReligiousInstitution = ReligiousInstitution.create(
			faker.person.fullName({firstName: 'Ibece', lastName: 'Maroketu'}),
			faker.internet.email({firstName: 'ibece', lastName: 'maroketu', provider: 'ibece.com.br'}),
			faker.location.streetAddress({useFullAddress: true}),
			faker.location.city(),
			faker.location.country(),
			faker.location.street(),
			faker.location.zipCode(),
			'48.964.488/0001-01',
			faker.lorem.paragraphs(5)
		);
		
		const inputUpdateReligiousInstitution: ReligiousInstitution = ReligiousInstitution.create(
			faker.person.fullName({firstName: 'Ibece', lastName: 'Maroketu Editado'}),
			faker.internet.email({firstName: 'ibece', lastName: 'maroketu', provider: 'ibece.com.br'}),
			faker.location.streetAddress({useFullAddress: true}),
			faker.location.city(),
			faker.location.country(),
			faker.location.street(),
			faker.location.zipCode(),
			'48.964.488/0001-01',
			faker.lorem.paragraphs(5)
		);

		/**
		 * Gravo a instituição religiosa na base de dados;
		 */
		const religiousRepository: InMemoryReligiousInstitutionRepository = new InMemoryReligiousInstitutionRepository();
		const createReligiousUseCase: CreateReligiousInstitution = new CreateReligiousInstitution(religiousRepository);
		await createReligiousUseCase.execute(inputCreateReligiousInstitution);
		
		/**
		 * Atualizo os dados da instituição religiosa.
 		 */
		const updateReligiousInstitution: UpdateReligiousInstitution = new UpdateReligiousInstitution(religiousRepository);
		const responseReligiousInstitutionUpdated: ReligiousInstitution = await updateReligiousInstitution.execute(inputUpdateReligiousInstitution);
		expect(updateReligiousInstitution).toBeDefined();
		
		/**
		 * Verifica se os dados foram alterados.
		 */
		expect(responseReligiousInstitutionUpdated.name).toEqual(inputUpdateReligiousInstitution.name);
		expect(responseReligiousInstitutionUpdated.email).toEqual(inputUpdateReligiousInstitution.email);
		expect(responseReligiousInstitutionUpdated.address).toEqual(inputUpdateReligiousInstitution.address);
		expect(responseReligiousInstitutionUpdated.city).toEqual(inputUpdateReligiousInstitution.city);
		expect(responseReligiousInstitutionUpdated.country).toEqual(inputUpdateReligiousInstitution.country);
		expect(responseReligiousInstitutionUpdated.neighborhood).toEqual(inputUpdateReligiousInstitution.neighborhood);
		expect(responseReligiousInstitutionUpdated.zipCode).toEqual(inputUpdateReligiousInstitution.zipCode);
		expect(responseReligiousInstitutionUpdated.cnpj).toEqual(inputUpdateReligiousInstitution.cnpj);
		expect(responseReligiousInstitutionUpdated.history).toEqual(inputUpdateReligiousInstitution.history);
	});
});