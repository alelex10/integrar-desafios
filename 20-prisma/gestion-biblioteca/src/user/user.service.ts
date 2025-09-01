import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './domain/repositories/user.repository';
import { User } from './domain/entities/user.entity';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class UserService implements UserRepository {

  private Prisma = new PrismaClient();
  create(user: Omit<User, 'id'>): Promise<User> {
    return this.Prisma.user.create({ data: user });
  }
  findAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  update(id: string, user: Partial<User>): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  getLoanHistory(userId: string) {
    return this.Prisma.loan.findMany({ where: { userId }, include: { book: true } });
  }
}
