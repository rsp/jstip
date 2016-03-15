var a = (x, y) => x+y;
console.log( a(2, 3) );

var b = x => y => x+y;
console.log( b(2)(3) );
