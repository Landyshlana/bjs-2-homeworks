function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}
let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Иван", "мужской", 20);
Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName
}
student1.setSubject("a");
student2.setSubject("b");
Student.prototype.addMarks = function(...tooAddmarks) {
	if ('marks' in this) {
		this.marks.push(...tooAddmarks)
	}
}
student1.addMarks(5, 5);
student2.addMarks(3, 3, 3);
console.log(student1);
console.log(student2);
Student.prototype.getAverage = function() {
	if ("marks" in this === false || this.marks.length === 0) {
		return 0;
	}
	let sum = 0;
	for (let i = 0; i < this.marks.length; i++) {
		sum += this.marks[i];
	}
	return sum / this.marks.length
};
console.log(student1.getAverage());
console.log(student2.getAverage());
Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}
student2.exclude('неуд')
student2.addMarks(3, 3, 3);
console.log(student2);
console.log(student2.getAverage());