import { Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { LoanRepository } from './domain/repositories/loan.repository';
import { Loan, PrismaClient } from 'generated/prisma';
import { BookService } from 'src/book/book.service';

@Injectable()
export class LoanService implements LoanRepository {
  private prisma = new PrismaClient();
  constructor(private readonly bookService: BookService) {}
  
  async create(loan: CreateLoanDto): Promise<Loan> {

    // set estado del libro a no disponible
    await this.bookService.update(loan.bookId, { available: false });

    return this.prisma.loan.create({ data: {
      userId: loan.userId,
      bookId: loan.bookId,
    } });
  }

  findAll(): Promise<Loan[]> {
    return this.prisma.loan.findMany();
  }
  findById(id: string): Promise<Loan | null> {
    return this.prisma.loan.findUnique({ where: { id } });
  }
  update(id: string, loan: Partial<Loan>): Promise<Loan | null> {
    return this.prisma.loan.update({
      where: { id },
      data: loan,
    });
  }
  delete(id: string): Promise<boolean> {
    this.prisma.loan.delete({ where: { id } });
    return Promise.resolve(true);
  }
}
