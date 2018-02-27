'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//design pattern: module pattern
var color = ['#8a252d', '#306b36', '#424a94'];
var moduleSchwab = function () {
  function changeColorBtn(e) {
    return [].concat(_toConsumableArray(document.querySelectorAll('.btn-change'))).map(function (ele) {
      return ele.style.backgroundColor = e;
    });
  }
  var changeThreeModules = function changeThreeModules() {
    return [].concat(_toConsumableArray(document.querySelectorAll('.btn-change'))).map(function (element, i) {
      element.addEventListener('click', function () {
        return changeColorBtn(color[i]);
      }, false);
    });
  };
  var whiteModule = function whiteModule() {
    var whiteBtn = document.querySelector('.btn-white');
    whiteBtn.addEventListener('click', function () {
      return [].concat(_toConsumableArray(document.querySelectorAll('.btn-change'))).map(function (ele) {
        return ele.removeAttribute('style');
      });
    });
  };
  var main = function main() {
    changeThreeModules();
    whiteModule();
  };
  return { main: main };
}();
moduleSchwab.main();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjb2xvciIsIm1vZHVsZVNjaHdhYiIsImNoYW5nZUNvbG9yQnRuIiwiZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsImVsZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2hhbmdlVGhyZWVNb2R1bGVzIiwiZWxlbWVudCIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwid2hpdGVNb2R1bGUiLCJ3aGl0ZUJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmVBdHRyaWJ1dGUiLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQSxJQUFNQSxRQUFRLENBQ1osU0FEWSxFQUVaLFNBRlksRUFHWixTQUhZLENBQWQ7QUFLQSxJQUFNQyxlQUFpQixZQUFNO0FBQzNCLFdBQVNDLGNBQVQsQ0FBd0JDLENBQXhCLEVBQTJCO0FBQ3pCLFdBQU8sNkJBQUlDLFNBQVNDLGdCQUFULENBQTBCLGFBQTFCLENBQUosR0FBOENDLEdBQTlDLENBQW1EO0FBQUEsYUFBT0MsSUFBSUMsS0FBSixDQUFVQyxlQUFWLEdBQTRCTixDQUFuQztBQUFBLEtBQW5ELENBQVA7QUFDRDtBQUNELE1BQU1PLHFCQUFxQixTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsV0FBTyw2QkFBSU4sU0FBU0MsZ0JBQVQsQ0FBMEIsYUFBMUIsQ0FBSixHQUNKQyxHQURJLENBQ0MsVUFBQ0ssT0FBRCxFQUFTQyxDQUFULEVBQWU7QUFDbkJELGNBQVFFLGdCQUFSLENBQTBCLE9BQTFCLEVBQW1DLFlBQVk7QUFDN0MsZUFBT1gsZUFBZUYsTUFBTVksQ0FBTixDQUFmLENBQVA7QUFDRCxPQUZELEVBRUcsS0FGSDtBQUdELEtBTEksQ0FBUDtBQU1ELEdBUEQ7QUFRQSxNQUFNRSxjQUFjLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUFNQyxXQUFXWCxTQUFTWSxhQUFULENBQXVCLFlBQXZCLENBQWpCO0FBQ0FELGFBQVNGLGdCQUFULENBQTJCLE9BQTNCLEVBQW9DLFlBQVk7QUFDOUMsYUFBTyw2QkFBSVQsU0FBU0MsZ0JBQVQsQ0FBMEIsYUFBMUIsQ0FBSixHQUE4Q0MsR0FBOUMsQ0FBbUQ7QUFBQSxlQUFPQyxJQUFJVSxlQUFKLENBQW9CLE9BQXBCLENBQVA7QUFBQSxPQUFuRCxDQUFQO0FBQ0QsS0FGRDtBQUdELEdBTEQ7QUFNQSxNQUFNQyxPQUFPLFNBQVBBLElBQU8sR0FBTTtBQUNqQlI7QUFDQUk7QUFDRCxHQUhEO0FBSUEsU0FBTyxFQUFDSSxVQUFELEVBQVA7QUFDRCxDQXZCb0IsRUFBckI7QUF3QkFqQixhQUFhaUIsSUFBYiIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2Rlc2lnbiBwYXR0ZXJuOiBtb2R1bGUgcGF0dGVyblxuY29uc3QgY29sb3IgPSBbXG4gICcjOGEyNTJkJyxcbiAgJyMzMDZiMzYnLFxuICAnIzQyNGE5NCcsXG5dXG5jb25zdCBtb2R1bGVTY2h3YWIgPSAoICgpID0+IHtcbiAgZnVuY3Rpb24gY2hhbmdlQ29sb3JCdG4oZSkge1xuICAgIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1jaGFuZ2UnKV0ubWFwKCBlbGUgPT4gZWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGUgKVxuICB9XG4gIGNvbnN0IGNoYW5nZVRocmVlTW9kdWxlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tY2hhbmdlJyldXG4gICAgICAubWFwKCAoZWxlbWVudCxpKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjaGFuZ2VDb2xvckJ0bihjb2xvcltpXSlcbiAgICAgICAgfSwgZmFsc2UgKVxuICAgICAgfSlcbiAgfVxuICBjb25zdCB3aGl0ZU1vZHVsZSA9ICgpID0+IHtcbiAgICBjb25zdCB3aGl0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4td2hpdGUnKVxuICAgIHdoaXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1jaGFuZ2UnKV0ubWFwKCBlbGUgPT4gZWxlLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKSApXG4gICAgfSlcbiAgfVxuICBjb25zdCBtYWluID0gKCkgPT4ge1xuICAgIGNoYW5nZVRocmVlTW9kdWxlcygpXG4gICAgd2hpdGVNb2R1bGUoKVxuICB9XG4gIHJldHVybiB7bWFpbn1cbn0pKClcbm1vZHVsZVNjaHdhYi5tYWluKClcbiJdfQ==
