import { Injectable } from "@nestjs/common";
import { Book } from "../entities/book.entity";

@Injectable()
export abstract class BookRepository {
    abstract create(book: Omit<Book, 'id'>): Promise<Book>;
    abstract findById(id: string): Promise<Book | null>;
    abstract findAll(): Promise<Book[]>;
    abstract update(id: string, book: Partial<Book>): Promise<Book | null>;
    abstract delete(id: string): Promise<boolean>;
    abstract findAllAvailable(): Promise<Book[]>;
}