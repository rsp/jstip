var a = 17, b = 3;
console.log( a + b );

((c, d) => {
    console.log( c + d );
})(17, 3);

(e => f => {
    console.log( e + f );
})(17)(3);
