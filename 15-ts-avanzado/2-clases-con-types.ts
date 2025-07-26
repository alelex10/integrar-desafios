/* Sistema de Gestión Escolar */
type UserRol = "admin" | "teacher" | "student";
type Subject = "math" | "science" | "history" | "geography" | "english";
type Status = "deleted" | "active";

interface IAutenticable {
	login(password: string): boolean;
}
abstract class User implements IAutenticable {
	constructor(protected name: string, protected email: string, protected password: string) {}

	public login(password: string): boolean {
		return this.password === password;
	}
	public getName(): string {
		return this.name;
	}
	public setName(name: string): void {
		this.name = name;
	}
	public getEmail(): string {
		return this.email;
	}
	public setEmail(email: string): void {
		this.email = email;
	}
	public setPassword(password: string): void {
		this.password = password;
	}
	abstract getRol(): UserRol;
}

class Admin extends User {
	private ROL: UserRol = "admin";
	constructor(name: string, email: string, password: string) {
		super(name, email, password);
	}
	getRol(): UserRol {
		return this.ROL;
	}
}

class Teacher extends User {
	private ROL: UserRol = "teacher";
	constructor(name: string, email: string, password: string) {
		super(name, email, password);
		console.log(`El profesor ${this} ha sido creado.`);
	}
	getRol(): UserRol {
		return this.ROL;
	}

	public qualifyStudent(student: Student, subject: Subject, score: number): void {
		student.addNote(subject, score);
		console.log(`El profesor ${this.name} califico al estudiante ${student.getName()} en ${subject} con un ${score}`);
	}
}

class Student extends User {
	private readonly ROL: UserRol = "student";
	private notes: Map<Subject, number> = new Map();
	constructor(name: string, email: string, password: string) {
		super(name, email, password);
	}
	getRol(): UserRol {
		return this.ROL;
	}
	getNotes(): Map<Subject, number> {
		return this.notes;
	}
	addNote(subject: Subject, score: number): void {
		this.notes.set(subject, score);
	}
}

const admin: Admin = new Admin("Luis Perez", "pW9d3@example.com", "secureAdminPassw0rd!");
const teacher: Teacher = new Teacher("Maria Rodriguez", "maria.rodriguez@example.com", "tnsl_2345");
const student: Student = new Student("Carlos Martinez", "carlos.martinez@example.com", "stdnt_6789!");

console.log(`El administrador: ${admin.getName()} ha sido creado.`);

// Teacher qualifies a student
teacher.qualifyStudent(student, "math", 90);
teacher.qualifyStudent(student, "science", 85);

// Display student notes
const studentNotes = student.getNotes();
studentNotes.forEach((score, subject) => {
    console.log(`El estudiante ${student.getName()} tiene una nota de ${score} en ${subject}`);
});

// Admin actions (if needed)
console.log(`El administrador ${admin.getName()} esta gestionando al usuario ${student.getName}`);