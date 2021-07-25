export class UnreachableCaseError extends Error {
  constructor(value?: never, message?: string) {
    super([`Unreachable case: ${value}`, message].join("\n"))
    this.name = "UnreachableCaseError"
  }
}
