import {Name} from "../../src/Domain/ValueObjects/Name";

describe('[Unit]: Validação de nome', (): void => {
	test('Deve ter um nome válido', (): void => {
		const name: Name = new Name('John Doe');
		expect(name.value).toEqual('John Doe');
	});
	
	test('Não deve construir un mome com ums string vazia', (): void => {
		expect((): Name => new Name('')).toThrow(new Error('Invalid name.'));
	});
});