import {Name} from "../../src/Domain/ValueObjects/Name";

describe('[Unit]: Validação de nome', (): void => {
	test('Deve ter um nome válido', (): void => {
		const name: Name = new Name('John Doe');
		expect(name.value).toEqual('John Doe');
	});
	
	test('Não deve construir um mome com uma string vazia', (): void => {
		expect((): Name => new Name('')).toThrow(new Error('Invalid name.'));
	});
	
	test('Não deve construir um mome que não seja composto', (): void => {
		expect((): Name => new Name('John')).toThrow(new Error('Invalid name.'));
	});
});