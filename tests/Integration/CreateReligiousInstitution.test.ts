import {fakerPT_BR as faker} from "@faker-js/faker";
import {CreateReligiousInstitutionCommand} from "../../src/Application/Commands/CreateReligiousInstitutionCommand";
import {
	InMemoryReligiousInstitutionRepository
} from "../../src/Infra/Repositories/InMemoryReligiousInstitutionRepository";
import {CreateReligiousInstitution} from "../../src/Application/UseCases/CreateReligiousInstitution";
import ReligiousInstitution from "../../src/Domain/Entities/ReligiousInstitution";
describe('[Integration]: Criação de instituição religiosa', () => {
	test('Deve criar uma instituição religiosa', async () => {
		//Monto o input de entrada
		const inputCreateReligiousInstitution: CreateReligiousInstitutionCommand = new CreateReligiousInstitutionCommand({
			name: `${faker.company.name()} ${faker.company.name()}`,
			email: faker.internet.email(),
			address: faker.location.streetAddress(),
			city: faker.location.city(),
			country: faker.location.country(),
			neighborhood: 'Vila Ioruba',
			zipCode: faker.location.zipCode(),
			cnpj: '31.777.718/0001-12',
			history: faker.lorem.paragraphs(5)
		});

		//Monto o Repository que vou usar no teste e executo o caso de uso que faz a criação.
		const religiousRepository: InMemoryReligiousInstitutionRepository = new InMemoryReligiousInstitutionRepository();
		const createReligiousUseCase: CreateReligiousInstitution = new CreateReligiousInstitution(religiousRepository);
		await createReligiousUseCase.execute(inputCreateReligiousInstitution);
		expect(createReligiousUseCase).toBeDefined();
		
		//Verifico se o dado foi persistido no banco.
		const religiousInstitutions: ReligiousInstitution[] = await religiousRepository.findAll();
		expect(religiousInstitutions[0].name).toEqual(inputCreateReligiousInstitution.name)
		expect(religiousInstitutions[0].email).toEqual(inputCreateReligiousInstitution.email)
		expect(religiousInstitutions[0].address).toEqual(inputCreateReligiousInstitution.address)
		expect(religiousInstitutions[0].city).toEqual(inputCreateReligiousInstitution.city)
		expect(religiousInstitutions[0].country).toEqual(inputCreateReligiousInstitution.country)
		expect(religiousInstitutions[0].neighborhood).toEqual(inputCreateReligiousInstitution.neighborhood)
		expect(religiousInstitutions[0].zipCode).toEqual(inputCreateReligiousInstitution.zipCode)
		expect(religiousInstitutions[0].cnpj).toEqual('31777718000112')
		expect(religiousInstitutions[0].history).toEqual(inputCreateReligiousInstitution.history)
	});
	
	test('Não deve criar uma instituição religiosa com um CNPJ inválido', async () => {
		//Monto o input de entrada
		const inputCreateReligiousInstitution: CreateReligiousInstitutionCommand = new CreateReligiousInstitutionCommand({
			name: `${faker.company.name()} ${faker.company.name()}`,
			email: faker.internet.email(),
			address: faker.location.streetAddress(),
			city: faker.location.city(),
			country: faker.location.country(),
			neighborhood: 'Vila Ioruba',
			zipCode: faker.location.zipCode(),
			cnpj: '11.111.111/11111-11',
			history: faker.lorem.paragraphs(5)
		});
		
		//Monto o Repository que vou usar no teste e executo o caso de uso que faz a criação.
		const religiousRepository: InMemoryReligiousInstitutionRepository = new InMemoryReligiousInstitutionRepository();
		const createReligiousUseCase: CreateReligiousInstitution = new CreateReligiousInstitution(religiousRepository);
		await expect(() => createReligiousUseCase.execute(inputCreateReligiousInstitution))
			.rejects
			.toThrow(new Error('Invalid CNPJ.'));
	});
	
	test('Não deve criar uma instituição religiosa sem nome', async () => {
		//Monto o input de entrada
		const inputCreateReligiousInstitution: CreateReligiousInstitutionCommand = new CreateReligiousInstitutionCommand({
			name: '',
			email: faker.internet.email(),
			address: faker.location.streetAddress(),
			city: faker.location.city(),
			country: faker.location.country(),
			neighborhood: 'Vila Ioruba',
			zipCode: faker.location.zipCode(),
			cnpj: '31.777.718/0001-12',
			history: faker.lorem.paragraphs(5)
		});
		
		//Monto o Repository que vou usar no teste e executo o caso de uso que faz a criação.
		const religiousRepository: InMemoryReligiousInstitutionRepository = new InMemoryReligiousInstitutionRepository();
		const createReligiousUseCase: CreateReligiousInstitution = new CreateReligiousInstitution(religiousRepository);
		await expect(() => createReligiousUseCase.execute(inputCreateReligiousInstitution))
			.rejects
			.toThrow(new Error('Invalid name.'));
	});
	
	test('Não deve criar uma instituição religiosa com um email inválido', async () => {
		//Monto o input de entrada
		const inputCreateReligiousInstitution: CreateReligiousInstitutionCommand = new CreateReligiousInstitutionCommand({
			name: `${faker.company.name()} ${faker.company.name()}`,
			email: 'ibece@ibece',
			address: faker.location.streetAddress(),
			city: faker.location.city(),
			country: faker.location.country(),
			neighborhood: 'Vila Ioruba',
			zipCode: faker.location.zipCode(),
			cnpj: '31.777.718/0001-12',
			history: faker.lorem.paragraphs(5)
		});
		
		//Monto o Repository que vou usar no teste e executo o caso de uso que faz a criação.
		const religiousRepository: InMemoryReligiousInstitutionRepository = new InMemoryReligiousInstitutionRepository();
		const createReligiousUseCase: CreateReligiousInstitution = new CreateReligiousInstitution(religiousRepository);
		await expect(() => createReligiousUseCase.execute(inputCreateReligiousInstitution))
			.rejects
			.toThrow(new Error('Invalid email.'));
	});
});