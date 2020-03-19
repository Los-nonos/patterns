interface Shape {
	func calcArea();
}

type Circle : Shape {
	radious: int;
	func calcArea(): int {
		return radious * radious;
	}
}

type Rectangule : Shape {
	width: int;
	height: int;

	func calcArea(): int {
		return width * height;
	}
}

rectangule := Rectangule {
	width = 10;
	height = 20;
};

circle := Circle {
	radious = 10
}

areaCircle := circle.calcArea();
areaRectangle := rectangule.calcArea();
