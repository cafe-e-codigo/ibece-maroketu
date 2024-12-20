import {fakerPT_BR as faker} from "@faker-js/faker";
import {CreateSonSaintCommand} from "../../src/Application/Commands/CreateSonSaintCommand";
import {InMemorySonSaintRepository} from "../../src/Infra/Repositories/InMemorySonSaintRepository";
import {CreateSonSaint} from "../../src/Application/UseCases/CreateSonSaint";
import {SonSaint} from "../../src/Domain/Entities/SonSaint";

describe('[Integration]: Criação de um filho de santo', (): void => {
	test('Deve criar um novo cadastro de um filho de santo', async (): Promise<void> => {
		//Monto o input de entrada
		const inputCreateSon: CreateSonSaintCommand = new CreateSonSaintCommand({
			religiousInstitutionId: crypto.randomUUID(),
			name: faker.person.fullName(),
			email: faker.internet.email(),
			cpf: '503.026.170-27',
			bio: '',
			firstSaint: '',
			secondSaint: '',
			othersSpirits: [
				{name: '', type: ''}
			],
			obligations: [
				{name: '', type: '', date: ''}
			],
			initiationDate: String(faker.date.birthdate()),
			address: faker.location.streetAddress(),
			zipCode: faker.location.zipCode(),
			state: faker.location.state(),
			city: faker.location.city(),
			country: faker.location.country()
		});
		
		//Monto o Repository que vou usar no teste e executo o caso de uso de criação de um filho de santo
		const sonSaintRepository: InMemorySonSaintRepository = new InMemorySonSaintRepository();
		const createSonSaint: CreateSonSaint = new CreateSonSaint(sonSaintRepository);
		await createSonSaint.execute(inputCreateSon);
		expect(createSonSaint).toBeDefined();
		
		//Verifico se o dado foi persistido no banco corretamente
		const sonSaint: SonSaint[] = await sonSaintRepository.findAll();
		expect(sonSaint[0].religiousInstitutionId).toEqual(inputCreateSon.religiousInstitutionId);
		expect(sonSaint[0].name).toEqual(inputCreateSon.name);
		expect(sonSaint[0].email).toEqual(inputCreateSon.email);
		expect(sonSaint[0].cpf).toEqual(inputCreateSon.cpf.replace(/\D/g, ""));
		expect(sonSaint[0].bio).toEqual(inputCreateSon.bio);
		expect(sonSaint[0].firstSaint).toEqual(inputCreateSon.firstSaint);
		expect(sonSaint[0].secondSaint).toEqual(inputCreateSon.secondSaint);
		expect(sonSaint[0].othersSpirits).toEqual(inputCreateSon.othersSpirits);
		expect(sonSaint[0].initiationDate).toEqual(inputCreateSon.initiationDate);
		expect(sonSaint[0].address).toEqual(inputCreateSon.address);
		expect(sonSaint[0].zipCode).toEqual(inputCreateSon.zipCode);
		expect(sonSaint[0].state).toEqual(inputCreateSon.state);
		expect(sonSaint[0].city).toEqual(inputCreateSon.city);
		expect(sonSaint[0].country).toEqual(inputCreateSon.country);
	});
	
	test('Não deve criar um novo cadastro de um filho de santo com cpf inválido', async (): Promise<void> => {
		//Monto o input de entrada
		const inputCreateSon: CreateSonSaintCommand = new CreateSonSaintCommand({
			religiousInstitutionId: crypto.randomUUID(),
			name: faker.person.fullName(),
			email: faker.internet.email(),
			cpf: '111.111.111-11',
			bio: '',
			firstSaint: '',
			secondSaint: '',
			othersSpirits: [
				{name: '', type: ''}
			],
			obligations: [
				{name: '', type: '', date: ''}
			],
			initiationDate: String(faker.date.birthdate()),
			address: faker.location.streetAddress(),
			zipCode: faker.location.zipCode(),
			state: faker.location.state(),
			city: faker.location.city(),
			country: faker.location.country()
		});
		
		//Monto o Repository que vou usar no teste e executo o caso de uso de criação de um filho de santo
		const sonSaintRepository: InMemorySonSaintRepository = new InMemorySonSaintRepository();
		const createSonSaint: CreateSonSaint = new CreateSonSaint(sonSaintRepository);
		await expect((): Promise<void> => createSonSaint.execute(inputCreateSon))
			.rejects
			.toThrow(new Error('Invalid CPF.')
		);
	});
	
	test('Não deve criar um novo cadastro de um filho de santo com nome inválido', async (): Promise<void> => {
		//Monto o input de entrada
		const inputCreateSon: CreateSonSaintCommand = new CreateSonSaintCommand({
			religiousInstitutionId: crypto.randomUUID(),
			name: '',
			email: faker.internet.email(),
			cpf: '503.026.170-27',
			bio: '',
			firstSaint: '',
			secondSaint: '',
			othersSpirits: [
				{name: '', type: ''}
			],
			obligations: [
				{name: '', type: '', date: ''}
			],
			initiationDate: String(faker.date.birthdate()),
			address: faker.location.streetAddress(),
			zipCode: faker.location.zipCode(),
			state: faker.location.state(),
			city: faker.location.city(),
			country: faker.location.country()
		});
		
		//Monto o Repository que vou usar no teste e executo o caso de uso de criação de um filho de santo
		const sonSaintRepository: InMemorySonSaintRepository = new InMemorySonSaintRepository();
		const createSonSaint: CreateSonSaint = new CreateSonSaint(sonSaintRepository);
		await expect((): Promise<void> => createSonSaint.execute(inputCreateSon))
			.rejects
			.toThrow(new Error('Invalid name.')
			);
	});
	
	test('Não deve criar um novo cadastro de um filho de santo com email inválido', async (): Promise<void> => {
		//Monto o input de entrada
		const inputCreateSon: CreateSonSaintCommand = new CreateSonSaintCommand({
			religiousInstitutionId: crypto.randomUUID(),
			name: faker.person.fullName(),
			email: 'email@errado',
			cpf: '503.026.170-27',
			bio: '',
			firstSaint: '',
			secondSaint: '',
			othersSpirits: [
				{name: '', type: ''}
			],
			obligations: [
				{name: '', type: '', date: ''}
			],
			initiationDate: String(faker.date.birthdate()),
			address: faker.location.streetAddress(),
			zipCode: faker.location.zipCode(),
			state: faker.location.state(),
			city: faker.location.city(),
			country: faker.location.country()
		});
		
		//Monto o Repository que vou usar no teste e executo o caso de uso de criação de um filho de santo
		const sonSaintRepository: InMemorySonSaintRepository = new InMemorySonSaintRepository();
		const createSonSaint: CreateSonSaint = new CreateSonSaint(sonSaintRepository);
		await expect((): Promise<void> => createSonSaint.execute(inputCreateSon))
			.rejects
			.toThrow(new Error('Invalid email.')
			);
	});
});