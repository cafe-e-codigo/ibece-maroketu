export class Cnpj {
    private readonly _value: string
    private readonly CNPJ_LENGTH: number = 14
    private readonly FACTOR_FIRST_DIGIT: number[] = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    private readonly FACTOR_SECOND_DIGIT: number[] = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

    constructor(cnpj: string) {
        if (!this.validade(cnpj)) throw new Error('Invalid CNPJ.')
        this._value = cnpj
    }

    private validade(rawCnpj: string): boolean {
        if (!rawCnpj) return false
        const cnpj: string = this.removeNonDigits(rawCnpj)
        if (cnpj.length !== this.CNPJ_LENGTH) return false
        if (this.allDigitsTheSame(cnpj)) return false
        const digit1: number = this.calculate(cnpj, this.FACTOR_FIRST_DIGIT)
        const digit2: number = this.calculate(cnpj, this.FACTOR_SECOND_DIGIT)
        return this.extractActualDigit(cnpj) === `${digit1}${digit2}`
    }

    get value(): string {
        return this.removeNonDigits(this._value)
    }

    private removeNonDigits(cnpj: string): string {
        return cnpj.replace(/\D/g, '')
    }

    private allDigitsTheSame(cnpj: string): boolean {
        const [firstDigit] = cnpj
        return [...cnpj].every((digit) => digit === firstDigit)
    }

    private calculate(cnpj: string, factors: number[]): number {
        const total: number = factors.reduce((acc: number, factor: number, index: number): number => {
            return acc + parseInt(cnpj[index]) * factor
        }, 0)
        const remainder: number = total % 11
        return remainder < 2 ? 0 : 11 - remainder
    }

    private extractActualDigit(cnpj: string): string {
        return cnpj.slice(12)
    }
}
