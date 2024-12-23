import {Cnpj} from "../../src/Domain/ValueObjects/Cnpj";

describe('[Unit]: Validação de CNPJ', (): void => {
	test('Deve validar um CNPJ autentico', (): void => {
		const cnpj: Cnpj = new Cnpj('48.964.488/0001-01');
		expect(cnpj.value).toEqual('48964488000101');
	});
	
	test('Deve falhar se for passado um CNPJ com um tamanho invalido', (): void => {
		expect((): Cnpj => new Cnpj('43.872.171')).toThrow(new Error('Invalid CNPJ.'));
	});
	
	test('Deve falhar se for passado um CNPJ com todos os números iguais', (): void => {
		expect((): Cnpj => new Cnpj('11.111.111/1111-11')).toThrow(new Error('Invalid CNPJ.'));
	});
	
	test('Deve falhar se for passado um CNPJ com dígitos não numéricos', (): void => {
		expect((): Cnpj => new Cnpj('43.872.abc/0001-13')).toThrow(new Error('Invalid CNPJ.'));
	});
	
	test('Deve falhar se for passado um CNPJ com valor null ou undefined', (): void => {
		expect((): Cnpj => new Cnpj(null as unknown as string)).toThrow(new Error('Invalid CNPJ.'));
		expect((): Cnpj => new Cnpj(undefined as unknown as string)).toThrow(new Error('Invalid CNPJ.'));
	});
});