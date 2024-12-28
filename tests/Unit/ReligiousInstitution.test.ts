import ReligiousInstitution from "../../src/Domain/Entities/ReligiousInstitution";

describe('[Unit]: Construção e restauração de uma instituição religiosa', (): void => {
	test('Deve construir uma instituição religiosa', async (): Promise<void> => {
		const religiousInstitution: ReligiousInstitution = ReligiousInstitution.create(
			'Ibece Maroketu',
			'ibece.maroketu@gmail.com',
			'Rua dos orixas, 1234',
			'São Paulo',
			'Brasil',
			'Vila Medeiros',
			'12345-123',
			'48.964.488/0001-01',
			'Terreiro de candomblé, raiz ancestral do quilombola de Muritiba Bahia.'
		);

		expect(religiousInstitution.name).toEqual('Ibece Maroketu');
		expect(religiousInstitution.email).toEqual('ibece.maroketu@gmail.com');
		expect(religiousInstitution.address).toEqual('Rua dos orixas, 1234');
		expect(religiousInstitution.city).toEqual('São Paulo');
		expect(religiousInstitution.country).toEqual('Brasil');
		expect(religiousInstitution.neighborhood).toEqual('Vila Medeiros');
		expect(religiousInstitution.zipCode).toEqual('12345-123');
		expect(religiousInstitution.cnpj).toEqual('48964488000101');
		expect(religiousInstitution.history).toEqual('Terreiro de candomblé, raiz ancestral do quilombola de Muritiba Bahia.');
	});
	
	test('Deve construir uma instituição religiosa com data de atualização', async (): Promise<void> => {
		const religiousInstitution: ReligiousInstitution = ReligiousInstitution.create(
			'Ibece Maroketu',
			'ibece.maroketu@gmail.com',
			'Rua dos orixas, 1234',
			'São Paulo',
			'Brasil',
			'Vila Medeiros',
			'12345-123',
			'48.964.488/0001-01',
			'Terreiro de candomblé, raiz ancestral do quilombola de Muritiba Bahia.',
			'2024-12-24T16:27:00'
		);
		
		expect(religiousInstitution.name).toEqual('Ibece Maroketu');
		expect(religiousInstitution.email).toEqual('ibece.maroketu@gmail.com');
		expect(religiousInstitution.address).toEqual('Rua dos orixas, 1234');
		expect(religiousInstitution.city).toEqual('São Paulo');
		expect(religiousInstitution.country).toEqual('Brasil');
		expect(religiousInstitution.neighborhood).toEqual('Vila Medeiros');
		expect(religiousInstitution.zipCode).toEqual('12345-123');
		expect(religiousInstitution.cnpj).toEqual('48964488000101');
		expect(religiousInstitution.history).toEqual('Terreiro de candomblé, raiz ancestral do quilombola de Muritiba Bahia.');
	});
	
	test('Deve construir uma instituição religiosa com data de deleção', async (): Promise<void> => {
		const religiousInstitution: ReligiousInstitution = ReligiousInstitution.create(
			'Ibece Maroketu',
			'ibece.maroketu@gmail.com',
			'Rua dos orixas, 1234',
			'São Paulo',
			'Brasil',
			'Vila Medeiros',
			'12345-123',
			'48.964.488/0001-01',
			'Terreiro de candomblé, raiz ancestral do quilombola de Muritiba Bahia.',
			'2024-12-24T16:27:00',
			'2024-12-24T16:27:00'
		);
		
		expect(religiousInstitution.name).toEqual('Ibece Maroketu');
		expect(religiousInstitution.email).toEqual('ibece.maroketu@gmail.com');
		expect(religiousInstitution.address).toEqual('Rua dos orixas, 1234');
		expect(religiousInstitution.city).toEqual('São Paulo');
		expect(religiousInstitution.country).toEqual('Brasil');
		expect(religiousInstitution.neighborhood).toEqual('Vila Medeiros');
		expect(religiousInstitution.zipCode).toEqual('12345-123');
		expect(religiousInstitution.cnpj).toEqual('48964488000101');
		expect(religiousInstitution.history).toEqual('Terreiro de candomblé, raiz ancestral do quilombola de Muritiba Bahia.');
	});
});