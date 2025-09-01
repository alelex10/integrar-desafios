import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanController } from './loan.controller';
import { BookService } from 'src/book/book.service';

@Module({
  controllers: [LoanController],
  providers: [LoanService, BookService],
})
export class LoanModule {}
