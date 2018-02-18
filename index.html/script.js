'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//https://toddmotto.com/mastering-the-module-pattern/#revealing-module-pattern
//design pattern: module pattern
var color = ['#8a252d', '#306b36', '#424a94'];

var moduleSchwab = function () {
  var threeModules = function threeModules() {
    return [].concat(_toConsumableArray(document.querySelectorAll('.btn-change'))).map(function (element, i) {
      element.addEventListener('click', function () {
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
    whiteBtn.addEventListener('click', function () {
      return [].concat(_toConsumableArray(document.querySelectorAll('.btn-change'))).map(function (ele) {
        return ele.removeAttribute('style');
      });
    });
  };
  var main = function main() {
    threeModules();
    whiteModule();
  };
  return {
    main: main
  };
}();
moduleSchwab.main();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjb2xvciIsIm1vZHVsZVNjaHdhYiIsInRocmVlTW9kdWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsImVsZW1lbnQiLCJpIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoYW5nZUNvbG9yQnRuIiwiZSIsImVsZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwid2hpdGVNb2R1bGUiLCJ3aGl0ZUJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmVBdHRyaWJ1dGUiLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLFFBQVEsQ0FDWixTQURZLEVBRVosU0FGWSxFQUdaLFNBSFksQ0FBZDs7QUFNQSxJQUFNQyxlQUFpQixZQUFNO0FBQzNCLE1BQU1DLGVBQWUsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFdBQU8sNkJBQUlDLFNBQVNDLGdCQUFULENBQTBCLGFBQTFCLENBQUosR0FDSkMsR0FESSxDQUNDLFVBQUNDLE9BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQ25CRCxjQUFRRSxnQkFBUixDQUEwQixPQUExQixFQUFtQyxZQUFZO0FBQzdDLGVBQU9DLGVBQWVULE1BQU1PLENBQU4sQ0FBZixDQUFQO0FBQ0QsT0FGRCxFQUVHLEtBRkg7QUFHRCxLQUxJLENBQVA7QUFNQSxhQUFTRSxjQUFULENBQXdCQyxDQUF4QixFQUEyQjtBQUN6QixhQUFPLDZCQUFJUCxTQUFTQyxnQkFBVCxDQUEwQixhQUExQixDQUFKLEdBQThDQyxHQUE5QyxDQUFtRDtBQUFBLGVBQU9NLElBQUlDLEtBQUosQ0FBVUMsZUFBVixHQUE0QkgsQ0FBbkM7QUFBQSxPQUFuRCxDQUFQO0FBQ0Q7QUFDRixHQVZEO0FBV0EsTUFBTUksY0FBYyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBTUMsV0FBV1osU0FBU2EsYUFBVCxDQUF1QixZQUF2QixDQUFqQjtBQUNBRCxhQUFTUCxnQkFBVCxDQUEyQixPQUEzQixFQUFvQyxZQUFZO0FBQzlDLGFBQU8sNkJBQUlMLFNBQVNDLGdCQUFULENBQTBCLGFBQTFCLENBQUosR0FBOENDLEdBQTlDLENBQW1EO0FBQUEsZUFBT00sSUFBSU0sZUFBSixDQUFvQixPQUFwQixDQUFQO0FBQUEsT0FBbkQsQ0FBUDtBQUNELEtBRkQ7QUFHRCxHQUxEO0FBTUEsTUFBTUMsT0FBUSxTQUFSQSxJQUFRLEdBQU07QUFDbEJoQjtBQUNBWTtBQUNELEdBSEQ7QUFJQSxTQUFPO0FBQ0xJO0FBREssR0FBUDtBQUdELENBekJvQixFQUFyQjtBQTBCQWpCLGFBQWFpQixJQUFiIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaHR0cHM6Ly90b2RkbW90dG8uY29tL21hc3RlcmluZy10aGUtbW9kdWxlLXBhdHRlcm4vI3JldmVhbGluZy1tb2R1bGUtcGF0dGVyblxuLy9kZXNpZ24gcGF0dGVybjogbW9kdWxlIHBhdHRlcm5cbmNvbnN0IGNvbG9yID0gW1xuICAnIzhhMjUyZCcsXG4gICcjMzA2YjM2JyxcbiAgJyM0MjRhOTQnLFxuXVxuXG5jb25zdCBtb2R1bGVTY2h3YWIgPSAoICgpID0+IHtcbiAgY29uc3QgdGhyZWVNb2R1bGVzID0gKCkgPT4ge1xuICAgIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1jaGFuZ2UnKV1cbiAgICAgIC5tYXAoIChlbGVtZW50LGkpID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNoYW5nZUNvbG9yQnRuKGNvbG9yW2ldKVxuICAgICAgICB9LCBmYWxzZSApXG4gICAgICB9KVxuICAgIGZ1bmN0aW9uIGNoYW5nZUNvbG9yQnRuKGUpIHtcbiAgICAgIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1jaGFuZ2UnKV0ubWFwKCBlbGUgPT4gZWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGUgKVxuICAgIH1cbiAgfVxuICBjb25zdCB3aGl0ZU1vZHVsZSA9ICgpID0+IHtcbiAgICBjb25zdCB3aGl0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4td2hpdGUnKVxuICAgIHdoaXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1jaGFuZ2UnKV0ubWFwKCBlbGUgPT4gZWxlLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKSApXG4gICAgfSlcbiAgfVxuICBjb25zdCBtYWluICA9ICgpID0+IHtcbiAgICB0aHJlZU1vZHVsZXMoKVxuICAgIHdoaXRlTW9kdWxlKCkgXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYWluXG4gIH1cbn0pKClcbm1vZHVsZVNjaHdhYi5tYWluKClcbiJdfQ==
