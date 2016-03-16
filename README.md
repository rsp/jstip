JavaScript: The Irreducible Parts
=================================

[https://github.com/rsp/jstip](https://github.com/rsp/jstip)
([readme](https://github.com/rsp/jstip#readme))

This is a try to find a minimal, irreducible set of JavaScript features
that can be used to write useful programs.

This is not an attempt to produce anything even remotely practical.
If any feature of the language can be avoided ad reimplemented using a smaller
set of features making programs run million times slower, it will be.

Syntax
------
In the examples below I'll be using the ES6 fat arrow function syntax.

So instead of:
```js
f = function (x) { return x+5; };
```
i will use:
```js
f = x => x+5;
```
Those two functions are the same for our needs
(they differ with the scope of `this` and `arguments` which we will not use).
So every time you see `x=>2*x` just think of `function(x){return 2*x;}`
only written in a much shorter way.

Also this:
```js
f = a => b => a+b;
```
is a shorthand of this:
```js
f = function (a) { return function (b) { return a+b; }; };
```
I don't have to tell you that writing functions such as:
```js
f = a => b => c => d => a(b(c))(d);
```
is *much* more convenient with the fat arrow syntax.

The question
------------
The question is - which parts of the language are there only for convenience
and can be reduced to other constructs,
and which parts are fundamentally irreducible.

We will try to go through the most important parts of the language
and ask ourselves if we need it or not, trying to
achieve the same effect avoiding the construct.

Do we need var?
---------------
Variables seem to be a pretty fundamental feature of the language
but it turns out that we don't need them. As long as we have
function calls then function parameters can serve the role of our variables.

With var:
```js
var a = 17;
console.log(a);
```

Without var:
```js
(b => {
    console.log(b);
})(17);
```

Using multiple variables - with var:
```js
var a = 17, b = 3;
console.log( a + b );
```

Without var:
```js
((c, d) => {
    console.log( c + d );
})(17, 3);
```

We can get rid of var.

Multi-parameter functions
-------------------------
In the previous example we used a function of multiple parameters.
Do we really need such functions? No. Every time we need a function
of two parameters we can use a function of one parameter that returns
another function of one parameter.

With multiple parameters:
```js
var a = (x, y) => x+y;
console.log( a(2, 3) );
```

Without multiple parameters:
```js
var b = x => y => x+y;
console.log( b(2)(3) );
```

We can change our `var` example even further:

With var:
```js
var a = 17, b = 3;
console.log( a + b );
```

Without var and without multiple parameters:
```js
(e => f => {
    console.log( e + f );
})(17)(3);
```

Such functions have some interesting properties - more about this later.

...

This is work in progress - more to come.

Issues
------
For any bug reports or feature requests please
[post an issue on GitHub](https://github.com/rsp/node-mijs/issues).

Author
------
Rafał Pocztarski - [https://github.com/rsp](https://github.com/rsp)
