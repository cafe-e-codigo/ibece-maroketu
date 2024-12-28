import {fakerPT_BR as faker} from "@faker-js/faker";
import {
	InMemoryReligiousInstitutionRepository
} from "../../src/Infra/Repositories/InMemoryReligiousInstitutionRepository";
import ReligiousInstitution from "../../src/Domain/Entities/ReligiousInstitution";
import {GetReligiousInstitution} from "../../src/Application/Services/GetReligiousInstitution";

describe('[Integration]: Busca de instituição religiosas', (): void => {
	test('Deve mostrar uma lista de instituição religiosas ativas', async (): Promise<void> => {
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
		const religiousInstitutionThree: ReligiousInstitution = ReligiousInstitution.create(
			`${faker.company.name()} ${faker.company.name()}`,
			faker.internet.email(),
			faker.location.streetAddress(),
			faker.location.city(),
			faker.location.country(),
			'Vila Ioruba',
			faker.location.zipCode(),
			'31.777.718/0001-12',
			faker.lorem.paragraphs(5),
			'2024-12-24T16:27:00',
			'2024-12-24T16:27:00'
		);
		
		/**
		 * Monto o Repository que vou usar no teste e executo o caso de uso que faz a criação.
		 */
		const religiousRepository: InMemoryReligiousInstitutionRepository = new InMemoryReligiousInstitutionRepository();
		await religiousRepository.save(religiousInstitutionOne);
		await religiousRepository.save(religiousInstitutionTwo);
		await religiousRepository.save(religiousInstitutionThree);
		
		/**
		 * Busco uma lista de instituições religiosas cadastradas no sistema.
		 */
		const getReligiousInstitution: GetReligiousInstitution = new GetReligiousInstitution(religiousRepository);
		const responseGetReligiousInstitution: ReligiousInstitution[] = await getReligiousInstitution.findAll();
		expect(getReligiousInstitution).toBeDefined();
		expect(responseGetReligiousInstitution.length).toBe(2);
		expect(responseGetReligiousInstitution[0].id).toEqual(religiousInstitutionOne.id);
		expect(responseGetReligiousInstitution[1].id).toEqual(religiousInstitutionTwo.id);
	});
	
	test('Deve uma instituição religiosa por ID', async (): Promise<void> => {
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
		 * Busco uma lista de instituições religiosas cadastradas no sistema.
		 */
		const getReligiousInstitution: GetReligiousInstitution = new GetReligiousInstitution(religiousRepository);
		const responseGetReligiousInstitution: ReligiousInstitution = await getReligiousInstitution.findById(religiousInstitutionTwo.id);
		expect(getReligiousInstitution).toBeDefined();
		expect(responseGetReligiousInstitution.id).toEqual(religiousInstitutionTwo.id);
	});
});