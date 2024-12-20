export class Cpf {
    private readonly _value: string
    private readonly CPF_LENGTH: number = 11
    private readonly FACTOR_FIRST_DIGIT: number = 10
    private readonly FACTOR_SECOND_DIGIT: number = 11

    constructor(cpf: string) {
        if (!this.validade(cpf)) throw new Error('Invalid CPF.')
        this._value = cpf
    }

    private validade(rawCpf: string): boolean {
        if (!rawCpf) return false
        const cpf: string = this.removeNonDigits(rawCpf)
        if (cpf.length !== this.CPF_LENGTH) return false
        if (this.allDigitsTheSame(cpf)) return false
        const digit1: number = this.calculate(cpf, this.FACTOR_FIRST_DIGIT)
        const digit2: number = this.calculate(cpf, this.FACTOR_SECOND_DIGIT)
        return this.extractActualDigit(cpf) === `${digit1}${digit2}`
    }

    get value(): string {
        return this.removeNonDigits(this._value)
    }

    private removeNonDigits(cpf: string): string {
        return cpf.replace(/\D/g, '')
    }

    private allDigitsTheSame(cpf: string): boolean {
        const [firstDigit] = cpf
        return [...cpf].every((digit: string): boolean => digit === firstDigit)
    }

    private calculate(cpf: string, factor: number): number {
        const total: number = [...cpf].reduce((acc: number, digit: string): number => {
            if (factor > 1) acc += parseInt(digit) * factor--
            return acc
        }, 0)
        const remainder: number = total % 11
        return remainder < 2 ? 0 : 11 - remainder
    }

    private extractActualDigit(cpf: string): string {
        return cpf.slice(9)
    }
}
