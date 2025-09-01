export class Book {
    public id: string;
    public title: string;
    public author: string
    public published: Date;
    public available: boolean;
    // lo genera Prisma
    public createdAt: Date;
    // lo genera Prisma
    public updatedAt: Date;

    constructor(
        id: string,
        title: string,
        author: string,
        published: Date,
        available: boolean
    ) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.published = published;
        this.available = available;
    }
}  