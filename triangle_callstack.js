// triangle rectangle

const mult = (x, y) => x * y;

const quadrat = (x) => mult(x, x);

const isTriangleRectangle = (a, b, c) => quadrat(a) + quadrat(b) === quadrat(c);

console.log(isTriangleRectangle(3, 4, 5));
