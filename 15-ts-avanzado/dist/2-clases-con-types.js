"use strict";
class User {
    name;
    email;
    password;
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    login(password) {
        return this.password === password;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    setPassword(password) {
        this.password = password;
    }
}
class Admin extends User {
    ROL = "admin";
    constructor(name, email, password) {
        super(name, email, password);
    }
    getRol() {
        return this.ROL;
    }
}
class Teacher extends User {
    ROL = "teacher";
    constructor(name, email, password) {
        super(name, email, password);
        console.log(`El profesor ${this} ha sido creado.`);
    }
    getRol() {
        return this.ROL;
    }
    qualifyStudent(student, subject, score) {
        student.addNote(subject, score);
        console.log(`El profesor ${this.name} califico al estudiante ${student.getName()} en ${subject} con un ${score}`);
    }
}
class Student extends User {
    ROL = "student";
    notes = new Map();
    constructor(name, email, password) {
        super(name, email, password);
    }
    getRol() {
        return this.ROL;
    }
    getNotes() {
        return this.notes;
    }
    addNote(subject, score) {
        this.notes.set(subject, score);
    }
}
const admin = new Admin("Luis Perez", "pW9d3@example.com", "secureAdminPassw0rd!");
const teacher = new Teacher("Maria Rodriguez", "maria.rodriguez@example.com", "tnsl_2345");
const student = new Student("Carlos Martinez", "carlos.martinez@example.com", "stdnt_6789!");
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
