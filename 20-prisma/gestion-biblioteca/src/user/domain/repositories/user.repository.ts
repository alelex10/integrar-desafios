import { User } from "../entities/user.entity";

export abstract class UserRepository {
    abstract create(user: Omit<User, 'id'>): Promise<User>;
    abstract findAll(): Promise<User[]>;
    abstract findById(id: string): Promise<User | null>;
    abstract update(id: string, user: Partial<User>): Promise<User | null>;
    abstract delete(id: string): Promise<boolean>;
}