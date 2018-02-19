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
  return { main: main };
}();
moduleSchwab.main();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjb2xvciIsIm1vZHVsZVNjaHdhYiIsImNoYW5nZUNvbG9yQnRuIiwiZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsImVsZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidGhyZWVNb2R1bGVzIiwiZWxlbWVudCIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwid2hpdGVNb2R1bGUiLCJ3aGl0ZUJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmVBdHRyaWJ1dGUiLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQSxJQUFNQSxRQUFRLENBQ1osU0FEWSxFQUVaLFNBRlksRUFHWixTQUhZLENBQWQ7QUFLQSxJQUFNQyxlQUFpQixZQUFNO0FBQzNCLFdBQVNDLGNBQVQsQ0FBd0JDLENBQXhCLEVBQTJCO0FBQ3pCLFdBQU8sNkJBQUlDLFNBQVNDLGdCQUFULENBQTBCLGFBQTFCLENBQUosR0FBOENDLEdBQTlDLENBQW1EO0FBQUEsYUFBT0MsSUFBSUMsS0FBSixDQUFVQyxlQUFWLEdBQTRCTixDQUFuQztBQUFBLEtBQW5ELENBQVA7QUFDRDtBQUNELE1BQU1PLGVBQWUsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFdBQU8sNkJBQUlOLFNBQVNDLGdCQUFULENBQTBCLGFBQTFCLENBQUosR0FDSkMsR0FESSxDQUNDLFVBQUNLLE9BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQ25CRCxjQUFRRSxnQkFBUixDQUEwQixPQUExQixFQUFtQyxZQUFZO0FBQzdDLGVBQU9YLGVBQWVGLE1BQU1ZLENBQU4sQ0FBZixDQUFQO0FBQ0QsT0FGRCxFQUVHLEtBRkg7QUFHRCxLQUxJLENBQVA7QUFNRCxHQVBEO0FBUUEsTUFBTUUsY0FBYyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBTUMsV0FBV1gsU0FBU1ksYUFBVCxDQUF1QixZQUF2QixDQUFqQjtBQUNBRCxhQUFTRixnQkFBVCxDQUEyQixPQUEzQixFQUFvQyxZQUFZO0FBQzlDLGFBQU8sNkJBQUlULFNBQVNDLGdCQUFULENBQTBCLGFBQTFCLENBQUosR0FBOENDLEdBQTlDLENBQW1EO0FBQUEsZUFBT0MsSUFBSVUsZUFBSixDQUFvQixPQUFwQixDQUFQO0FBQUEsT0FBbkQsQ0FBUDtBQUNELEtBRkQ7QUFHRCxHQUxEO0FBTUEsTUFBTUMsT0FBTyxTQUFQQSxJQUFPLEdBQU07QUFDakJSO0FBQ0FJO0FBQ0QsR0FIRDtBQUlBLFNBQU8sRUFBQ0ksVUFBRCxFQUFQO0FBQ0QsQ0F2Qm9CLEVBQXJCO0FBd0JBakIsYUFBYWlCLElBQWIiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9kZXNpZ24gcGF0dGVybjogbW9kdWxlIHBhdHRlcm5cbmNvbnN0IGNvbG9yID0gW1xuICAnIzhhMjUyZCcsXG4gICcjMzA2YjM2JyxcbiAgJyM0MjRhOTQnLFxuXVxuY29uc3QgbW9kdWxlU2Nod2FiID0gKCAoKSA9PiB7XG4gIGZ1bmN0aW9uIGNoYW5nZUNvbG9yQnRuKGUpIHtcbiAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tY2hhbmdlJyldLm1hcCggZWxlID0+IGVsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBlIClcbiAgfVxuICBjb25zdCB0aHJlZU1vZHVsZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWNoYW5nZScpXVxuICAgICAgLm1hcCggKGVsZW1lbnQsaSkgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY2hhbmdlQ29sb3JCdG4oY29sb3JbaV0pXG4gICAgICAgIH0sIGZhbHNlIClcbiAgICAgIH0pXG4gIH1cbiAgY29uc3Qgd2hpdGVNb2R1bGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2hpdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXdoaXRlJylcbiAgICB3aGl0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tY2hhbmdlJyldLm1hcCggZWxlID0+IGVsZS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJykgKVxuICAgIH0pXG4gIH1cbiAgY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgICB0aHJlZU1vZHVsZXMoKVxuICAgIHdoaXRlTW9kdWxlKCkgXG4gIH1cbiAgcmV0dXJuIHttYWlufVxufSkoKVxubW9kdWxlU2Nod2FiLm1haW4oKVxuIl19
