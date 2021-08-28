var test = require('tape');
var STR = require('./js-function-string');

test('stringify function (single line)', function(t) {

  var r = STR(function() {
    calling(a(func(a, b, c)))
  })

  t.equal(r, 'calling(a(func(a, b, c)))', 'trimmed and indented');

  t.end();
});

test('stringify function (multiline)', function(t) {

  var r = STR(function() {
            calling(a(func(a, b, c)));
              var a = 1;
            var b = 2;
            var c = 3;
  })

  t.equal(r, 'calling(a(func(a, b, c)));\n  var a = 1;\nvar b = 2;\nvar c = 3;', 'trimmed and indented');

  t.end();
});
