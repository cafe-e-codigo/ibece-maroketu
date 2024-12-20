export interface UseCase<UInput, UOutput> {
    execute(input: UInput): Promise<UOutput>
}
