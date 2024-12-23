import {Cpf} from "../../src/Domain/ValueObjects/Cpf";

describe('[Unit]: Validação de CPF', (): void => {
	test('Deve validar um CPF autentico', (): void => {
		const cpf: Cpf = new Cpf('548.278.430-40');
		expect(cpf.value).toEqual('54827843040');
	});
	
	test('Deve falhar se for passado um CPF com um tamanho invalido', (): void => {
		expect((): Cpf => new Cpf('548.278.430')).toThrow(new Error('Invalid CPF.'));
	});
	
	test('Deve falhar se for passado um CPF com todos os números iguais', (): void => {
		expect((): Cpf => new Cpf('111.111.111-11')).toThrow(new Error('Invalid CPF.'));
	});
	
	test('Deve falhar se for passado um CPF com dígitos não numéricos', (): void => {
		expect((): Cpf => new Cpf('548.278.abc-40')).toThrow(new Error('Invalid CPF.'));
	});
	
	test('Deve falhar se for passado um CPF com valor null ou undefined', (): void => {
		expect((): Cpf => new Cpf(null as unknown as string)).toThrow(new Error('Invalid CPF.'));
		expect((): Cpf => new Cpf(undefined as unknown as string)).toThrow(new Error('Invalid CPF.'));
	});
});