'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//https://toddmotto.com/mastering-the-module-pattern/#revealing-module-pattern
//design pattern: module pattern
var color = ['#8a252d', '#306b36', '#424a94'];

var moduleSchwab = function () {
  function changeColorBtn(e) {
    return [].concat(_toConsumableArray(document.querySelectorAll('.btn-change'))).map(function (ele) {
      return ele.style.backgroundColor = e;
    });
  }
  var threeModules = function threeModules() {
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
    threeModules();
    whiteModule();
  };
  return {
    main: main
  };
}();
moduleSchwab.main();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjb2xvciIsIm1vZHVsZVNjaHdhYiIsImNoYW5nZUNvbG9yQnRuIiwiZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsImVsZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidGhyZWVNb2R1bGVzIiwiZWxlbWVudCIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwid2hpdGVNb2R1bGUiLCJ3aGl0ZUJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmVBdHRyaWJ1dGUiLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLFFBQVEsQ0FDWixTQURZLEVBRVosU0FGWSxFQUdaLFNBSFksQ0FBZDs7QUFNQSxJQUFNQyxlQUFpQixZQUFNO0FBQzNCLFdBQVNDLGNBQVQsQ0FBd0JDLENBQXhCLEVBQTJCO0FBQ3pCLFdBQU8sNkJBQUlDLFNBQVNDLGdCQUFULENBQTBCLGFBQTFCLENBQUosR0FBOENDLEdBQTlDLENBQW1EO0FBQUEsYUFBT0MsSUFBSUMsS0FBSixDQUFVQyxlQUFWLEdBQTRCTixDQUFuQztBQUFBLEtBQW5ELENBQVA7QUFDRDtBQUNELE1BQU1PLGVBQWUsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFdBQU8sNkJBQUlOLFNBQVNDLGdCQUFULENBQTBCLGFBQTFCLENBQUosR0FDSkMsR0FESSxDQUNDLFVBQUNLLE9BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQ25CRCxjQUFRRSxnQkFBUixDQUEwQixPQUExQixFQUFtQyxZQUFZO0FBQzdDLGVBQU9YLGVBQWVGLE1BQU1ZLENBQU4sQ0FBZixDQUFQO0FBQ0QsT0FGRCxFQUVHLEtBRkg7QUFHRCxLQUxJLENBQVA7QUFNRCxHQVBEO0FBUUEsTUFBTUUsY0FBYyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBTUMsV0FBV1gsU0FBU1ksYUFBVCxDQUF1QixZQUF2QixDQUFqQjtBQUNBRCxhQUFTRixnQkFBVCxDQUEyQixPQUEzQixFQUFvQyxZQUFZO0FBQzlDLGFBQU8sNkJBQUlULFNBQVNDLGdCQUFULENBQTBCLGFBQTFCLENBQUosR0FBOENDLEdBQTlDLENBQW1EO0FBQUEsZUFBT0MsSUFBSVUsZUFBSixDQUFvQixPQUFwQixDQUFQO0FBQUEsT0FBbkQsQ0FBUDtBQUNELEtBRkQ7QUFHRCxHQUxEO0FBTUEsTUFBTUMsT0FBUSxTQUFSQSxJQUFRLEdBQU07QUFDbEJSO0FBQ0FJO0FBQ0QsR0FIRDtBQUlBLFNBQU87QUFDTEk7QUFESyxHQUFQO0FBR0QsQ0F6Qm9CLEVBQXJCO0FBMEJBakIsYUFBYWlCLElBQWIiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9odHRwczovL3RvZGRtb3R0by5jb20vbWFzdGVyaW5nLXRoZS1tb2R1bGUtcGF0dGVybi8jcmV2ZWFsaW5nLW1vZHVsZS1wYXR0ZXJuXG4vL2Rlc2lnbiBwYXR0ZXJuOiBtb2R1bGUgcGF0dGVyblxuY29uc3QgY29sb3IgPSBbXG4gICcjOGEyNTJkJyxcbiAgJyMzMDZiMzYnLFxuICAnIzQyNGE5NCcsXG5dXG5cbmNvbnN0IG1vZHVsZVNjaHdhYiA9ICggKCkgPT4ge1xuICBmdW5jdGlvbiBjaGFuZ2VDb2xvckJ0bihlKSB7XG4gICAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWNoYW5nZScpXS5tYXAoIGVsZSA9PiBlbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZSApXG4gIH1cbiAgY29uc3QgdGhyZWVNb2R1bGVzID0gKCkgPT4ge1xuICAgIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1jaGFuZ2UnKV1cbiAgICAgIC5tYXAoIChlbGVtZW50LGkpID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNoYW5nZUNvbG9yQnRuKGNvbG9yW2ldKVxuICAgICAgICB9LCBmYWxzZSApXG4gICAgICB9KVxuICB9XG4gIGNvbnN0IHdoaXRlTW9kdWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHdoaXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi13aGl0ZScpXG4gICAgd2hpdGVCdG4uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWNoYW5nZScpXS5tYXAoIGVsZSA9PiBlbGUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpIClcbiAgICB9KVxuICB9XG4gIGNvbnN0IG1haW4gID0gKCkgPT4ge1xuICAgIHRocmVlTW9kdWxlcygpXG4gICAgd2hpdGVNb2R1bGUoKSBcbiAgfVxuICByZXR1cm4ge1xuICAgIG1haW5cbiAgfVxufSkoKVxubW9kdWxlU2Nod2FiLm1haW4oKVxuIl19
