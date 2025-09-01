import { CreateLoanDto } from "src/loan/dto/create-loan.dto";
import { Loan } from "../entities/loan.entity";

export abstract class LoanRepository {
    abstract create(loan: CreateLoanDto): Promise<Loan>;
    abstract findAll(): Promise<Loan[]>;
    abstract findById(id: string): Promise<Loan | null>;
    abstract update(id: string, loan: Partial<Loan>): Promise<Loan | null>;
    abstract delete(id: string): Promise<boolean>;
}