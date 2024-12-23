import {Uuid} from "../../src/Domain/ValueObjects/Uuid";

describe('[Unit]: Construção de identificadores unicos UUID', () => {
	test('Deve construir um identificador UUID', () => {
		const uuid: string = crypto.randomUUID();
		const uuidCreate: Uuid = new Uuid(uuid);
		expect(uuidCreate.value).toEqual(uuid);
	});
	
	test('Não deve construir um identificador UUID se for uma string inválida', () => {
		expect(() => new Uuid('')).toThrow(new Error('Invalid ID.'));
	});
	
	test('Não deve construir um identificador UUID se for null ou undefined', () => {
		expect(() => new Uuid(null as unknown as string)).toThrow(new Error('Invalid ID.'));
		expect(() => new Uuid(undefined as unknown as string)).toThrow(new Error('Invalid ID.'));
	});
});