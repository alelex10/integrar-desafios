export class Loan {
    id: string;
    userId: string;
    bookId: string;
    loanedAt: Date;
    returnedAt: Date | null;
}
