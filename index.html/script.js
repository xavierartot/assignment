'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//https://toddmotto.com/mastering-the-module-pattern/#revealing-module-pattern

//Each box contains a button, and when clicked changes the color 
//of the other buttons to its color, except for the white box. 
//The white box always remains white and when its button is clicked, 
//it resets the colors of the other boxes to their original colors.
//
var color = ['#a3323b', '#3e9146', '#525fd6'];
var moduleSchwab = function () {
  var threeModules = function threeModules() {
    return [].concat(_toConsumableArray(document.querySelectorAll('.btn-change'))).map(function (element, i) {
      element.addEventListener('click', function (event) {
        event.preventDefault();
        return changeColorBtn(color[i]);
      }, false);
    });
    function changeColorBtn(e) {
      return [].concat(_toConsumableArray(document.querySelectorAll('.btn-change'))).map(function (ele) {
        return ele.style.backgroundColor = e;
      });
    }
  };

  var whiteModule = function whiteModule() {
    var whiteBtn = document.querySelector('.btn-white');
    whiteBtn.addEventListener('click', function (event) {
      event.preventDefault();
      return [].concat(_toConsumableArray(document.querySelectorAll('.btn-change'))).map(function (ele) {
        return ele.removeAttribute('style');
      });
    });
  };
  //main
  var main = function main() {
    threeModules();
    whiteModule();
  };

  //return an object
  return {
    main: main
  };
}();
moduleSchwab.main();
//Simon.anotherMethod ()
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjb2xvciIsIm1vZHVsZVNjaHdhYiIsInRocmVlTW9kdWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsImVsZW1lbnQiLCJpIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjaGFuZ2VDb2xvckJ0biIsImUiLCJlbGUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIndoaXRlTW9kdWxlIiwid2hpdGVCdG4iLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlQXR0cmlidXRlIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxRQUFRLENBQ1osU0FEWSxFQUVaLFNBRlksRUFHWixTQUhZLENBQWQ7QUFLQSxJQUFJQyxlQUFpQixZQUFNO0FBQ3pCLE1BQU1DLGVBQWUsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFdBQU8sNkJBQUlDLFNBQVNDLGdCQUFULENBQTBCLGFBQTFCLENBQUosR0FDSkMsR0FESSxDQUNDLFVBQUNDLE9BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQ25CRCxjQUFRRSxnQkFBUixDQUEwQixPQUExQixFQUFtQyxVQUFVQyxLQUFWLEVBQWlCO0FBQ2xEQSxjQUFNQyxjQUFOO0FBQ0EsZUFBT0MsZUFBZVgsTUFBTU8sQ0FBTixDQUFmLENBQVA7QUFDRCxPQUhELEVBR0csS0FISDtBQUlELEtBTkksQ0FBUDtBQU9BLGFBQVNJLGNBQVQsQ0FBd0JDLENBQXhCLEVBQTJCO0FBQ3pCLGFBQU8sNkJBQUlULFNBQVNDLGdCQUFULENBQTBCLGFBQTFCLENBQUosR0FBOENDLEdBQTlDLENBQW1EO0FBQUEsZUFBT1EsSUFBSUMsS0FBSixDQUFVQyxlQUFWLEdBQTRCSCxDQUFuQztBQUFBLE9BQW5ELENBQVA7QUFDRDtBQUNGLEdBWEQ7O0FBYUEsTUFBTUksY0FBYyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBTUMsV0FBV2QsU0FBU2UsYUFBVCxDQUF1QixZQUF2QixDQUFqQjtBQUNBRCxhQUFTVCxnQkFBVCxDQUEyQixPQUEzQixFQUFvQyxVQUFVQyxLQUFWLEVBQWlCO0FBQ25EQSxZQUFNQyxjQUFOO0FBQ0EsYUFBTyw2QkFBSVAsU0FBU0MsZ0JBQVQsQ0FBMEIsYUFBMUIsQ0FBSixHQUE4Q0MsR0FBOUMsQ0FBbUQ7QUFBQSxlQUFPUSxJQUFJTSxlQUFKLENBQW9CLE9BQXBCLENBQVA7QUFBQSxPQUFuRCxDQUFQO0FBRUQsS0FKRDtBQUtELEdBUEQ7QUFRQTtBQUNBLE1BQUlDLE9BQVEsU0FBUkEsSUFBUSxHQUFNO0FBQ2hCbEI7QUFDQWM7QUFDRCxHQUhEOztBQUtBO0FBQ0EsU0FBTztBQUNMSTtBQURLLEdBQVA7QUFJRCxDQWpDa0IsRUFBbkI7QUFrQ0FuQixhQUFhbUIsSUFBYjtBQUNBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaHR0cHM6Ly90b2RkbW90dG8uY29tL21hc3RlcmluZy10aGUtbW9kdWxlLXBhdHRlcm4vI3JldmVhbGluZy1tb2R1bGUtcGF0dGVyblxuXG4vL0VhY2ggYm94IGNvbnRhaW5zIGEgYnV0dG9uLCBhbmQgd2hlbiBjbGlja2VkIGNoYW5nZXMgdGhlIGNvbG9yIFxuLy9vZiB0aGUgb3RoZXIgYnV0dG9ucyB0byBpdHMgY29sb3IsIGV4Y2VwdCBmb3IgdGhlIHdoaXRlIGJveC4gXG4vL1RoZSB3aGl0ZSBib3ggYWx3YXlzIHJlbWFpbnMgd2hpdGUgYW5kIHdoZW4gaXRzIGJ1dHRvbiBpcyBjbGlja2VkLCBcbi8vaXQgcmVzZXRzIHRoZSBjb2xvcnMgb2YgdGhlIG90aGVyIGJveGVzIHRvIHRoZWlyIG9yaWdpbmFsIGNvbG9ycy5cbi8vXG5jb25zdCBjb2xvciA9IFtcbiAgJyNhMzMyM2InLFxuICAnIzNlOTE0NicsXG4gICcjNTI1ZmQ2Jyxcbl07XG5sZXQgbW9kdWxlU2Nod2FiID0gKCAoKSA9PiB7XG4gIGNvbnN0IHRocmVlTW9kdWxlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tY2hhbmdlJyldXG4gICAgICAubWFwKCAoZWxlbWVudCxpKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHJldHVybiBjaGFuZ2VDb2xvckJ0bihjb2xvcltpXSlcbiAgICAgICAgfSwgZmFsc2UgKTtcbiAgICAgIH0pO1xuICAgIGZ1bmN0aW9uIGNoYW5nZUNvbG9yQnRuKGUpIHtcbiAgICAgIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1jaGFuZ2UnKV0ubWFwKCBlbGUgPT4gZWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGUgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHdoaXRlTW9kdWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHdoaXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi13aGl0ZScpXG4gICAgd2hpdGVCdG4uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tY2hhbmdlJyldLm1hcCggZWxlID0+IGVsZS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJykgKVxuXG4gICAgfSk7XG4gIH07XG4gIC8vbWFpblxuICBsZXQgbWFpbiAgPSAoKSA9PiB7XG4gICAgdGhyZWVNb2R1bGVzKClcbiAgICB3aGl0ZU1vZHVsZSgpIFxuICB9O1xuXG4gIC8vcmV0dXJuIGFuIG9iamVjdFxuICByZXR1cm4ge1xuICAgIG1haW5cbiAgfTtcblxufSkoKTtcbm1vZHVsZVNjaHdhYi5tYWluKClcbi8vU2ltb24uYW5vdGhlck1ldGhvZCAoKVxuIl19
