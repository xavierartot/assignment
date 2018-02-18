'use strict';

//https://toddmotto.com/mastering-the-module-pattern/#revealing-module-pattern
var Simon = function () {
  var _public = function _public(t) {
    var r = t === '' ? t : t;
  };
  // private
  var _private = function _private() {
    console.log('ddddd');
  };

  //main
  var main = function main() {
    _private();
  };

  //return an object
  return {
    main: main
  };
}();
Simon.main();
//Simon.anotherMethod ()
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJTaW1vbiIsIl9wdWJsaWMiLCJ0IiwiciIsIl9wcml2YXRlIiwiY29uc29sZSIsImxvZyIsIm1haW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxJQUFJQSxRQUFVLFlBQU07QUFDbEIsTUFBSUMsVUFBVSxTQUFWQSxPQUFVLENBQUNDLENBQUQsRUFBTztBQUNuQixRQUFJQyxJQUFLRCxNQUFNLEVBQVAsR0FBYUEsQ0FBYixHQUFpQkEsQ0FBekI7QUFDRCxHQUZEO0FBR0E7QUFDQSxNQUFJRSxXQUFXLFNBQVhBLFFBQVcsR0FBTTtBQUNuQkMsWUFBUUMsR0FBUixDQUFZLE9BQVo7QUFDRCxHQUZEOztBQUlBO0FBQ0EsTUFBSUMsT0FBUSxTQUFSQSxJQUFRLEdBQU07QUFDaEJIO0FBQ0EsR0FGRjs7QUFJQTtBQUNBLFNBQU87QUFDTEcsVUFBT0E7QUFERixHQUFQO0FBSUQsQ0FuQlcsRUFBWjtBQW9CQVAsTUFBTU8sSUFBTjtBQUNBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaHR0cHM6Ly90b2RkbW90dG8uY29tL21hc3RlcmluZy10aGUtbW9kdWxlLXBhdHRlcm4vI3JldmVhbGluZy1tb2R1bGUtcGF0dGVyblxubGV0IFNpbW9uID0gKCAoKSA9PiB7XG4gIGxldCBfcHVibGljID0gKHQpID0+IHtcbiAgICBsZXQgciA9ICh0ID09PSAnJykgPyB0IDogdFxuICB9XG4gIC8vIHByaXZhdGVcbiAgbGV0IF9wcml2YXRlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdkZGRkZCcpXG4gIH07XG5cbiAgLy9tYWluXG4gIGxldCBtYWluICA9ICgpID0+IHtcbiAgICBfcHJpdmF0ZSgpXG4gICB9O1xuXG4gIC8vcmV0dXJuIGFuIG9iamVjdFxuICByZXR1cm4ge1xuICAgIG1haW4gOiBtYWluXG4gIH07XG5cbn0pKCk7XG5TaW1vbi5tYWluKClcbi8vU2ltb24uYW5vdGhlck1ldGhvZCAoKVxuIl19
