function parseCount(count) {
	if (isNaN(Number.parseFloat(count))) {
		throw new Error("Невалидное значение");
	}
	return Number.parseFloat(count);
}

function validateCount(count) {
	try {
		if (!isNaN(parseCount(count))) {
			return (parseCount(count))
		}
	} catch (error) {
		return (error);
	}
}
class Triangle {
	constructor(a, b, c) {
		if (a + b <= c || a + c <= b || c + b <= a) {
			throw new Error("Треугольник с такими сторонами не существует")
		};
		this.a = a;
		this.b = b;
		this.c = c;
	}
	get perimeter() {
		return (this.a + this.b + this.c);
	}
	get area() {
		return +((Math.sqrt((this.perimeter / 2) * (this.perimeter / 2 - this.a) * (this.perimeter / 2 - this.b) * (this.perimeter / 2 - this.c))).toFixed(3));
	}
}
const getTriangle = (a, b, c) => {
	try {
		const triangle = new Triangle(a, b, c);
		return triangle;
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует"
			},
			get area() {
				return "Ошибка! Треугольник не существует"
			}
		}
	}
}