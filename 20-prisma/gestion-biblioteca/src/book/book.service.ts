import { Injectable } from '@nestjs/common';

import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookRepository } from './domain/repositories/book.repository';
import { Book } from './domain/entities/book.entity';
import { PrismaClient } from 'generated/prisma';
@Injectable()
export class BookService implements BookRepository {
  
  private prisma = new PrismaClient();

  findAllAvailable() {
    return this.prisma.book.findMany({ where: { available: true } });
  }
  create(createBookDto: CreateBookDto): Promise<Book> {
    return this.prisma.book.create({ data: createBookDto });
  }

  findAll(): Promise<Book[]> {
    return this.prisma.book.findMany();
  }

  findById(id: string): Promise<Book | null> {
    return this.prisma.book.findUnique({ where: { id } });
  }

  
  update(id: string, updateBookDto: UpdateBookDto): Promise<Book | null> {
    console.log('Updating book with ID:', id, 'with data:', updateBookDto);
    // existe el libro?
    const book = this.prisma.book.findUnique({ where: { id } });
    if (!book) {
      console.log('Book not found with ID:', id);
    }
    return this.prisma.book.update({
      where: { id },
      data: updateBookDto,
    });
  }
  async delete(id: string): Promise<boolean> {
    await this.prisma.book.delete({ where: { id } });
    return true;
  }
}
