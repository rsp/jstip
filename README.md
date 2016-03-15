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

The question is - which parts of the language are there only for convenience
and can be reduced to other constructs,
and which parts are fundamentally irreducible.

We will try to go through the most important parts of the language
and ask ourselves if we need it or not, trying to
achieve the same effect avoiding the construct.

Do we need var?
---------------
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




...

This is work in progress - more to come.

Issues
------
For any bug reports or feature requests please
[post an issue on GitHub](https://github.com/rsp/node-mijs/issues).

Author
------
Rafał Pocztarski - [https://github.com/rsp](https://github.com/rsp)
