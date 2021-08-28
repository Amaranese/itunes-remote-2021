# js-function-string

extract a function body with the proper indentation

## install

`npm install js-function-string`

## use

```
var STR = require('js-function-string');
console.log(STR(function() {
        calling(a(func(a, b, c)));
          var a = 1;
        var b = 2;
        var c = 3;
}))

/* outputs:
calling(a(func(a, b, c)));
  var a = 1;
var b = 2;
var c = 3;
*/
```

## license

[MIT](LICENSE.txt)
