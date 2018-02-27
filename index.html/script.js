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
  var resetWhiteButton = function resetWhiteButton() {
    var whiteBtn = document.querySelector('.btn-reset');
    whiteBtn.addEventListener('click', function () {
      return [].concat(_toConsumableArray(document.querySelectorAll('.btn-change'))).map(function (ele) {
        return ele.removeAttribute('style');
      });
    });
  };
  var main = function main() {
    changeThreeModules();
    resetWhiteButton();
  };
  return { main: main };
}();
moduleSchwab.main();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjb2xvciIsIm1vZHVsZVNjaHdhYiIsImNoYW5nZUNvbG9yQnRuIiwiZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsImVsZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2hhbmdlVGhyZWVNb2R1bGVzIiwiZWxlbWVudCIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzZXRXaGl0ZUJ1dHRvbiIsIndoaXRlQnRuIiwicXVlcnlTZWxlY3RvciIsInJlbW92ZUF0dHJpYnV0ZSIsIm1haW4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLElBQU1BLFFBQVEsQ0FDWixTQURZLEVBRVosU0FGWSxFQUdaLFNBSFksQ0FBZDtBQUtBLElBQU1DLGVBQWlCLFlBQU07QUFDM0IsV0FBU0MsY0FBVCxDQUF3QkMsQ0FBeEIsRUFBMkI7QUFDekIsV0FBTyw2QkFBSUMsU0FBU0MsZ0JBQVQsQ0FBMEIsYUFBMUIsQ0FBSixHQUE4Q0MsR0FBOUMsQ0FBbUQ7QUFBQSxhQUFPQyxJQUFJQyxLQUFKLENBQVVDLGVBQVYsR0FBNEJOLENBQW5DO0FBQUEsS0FBbkQsQ0FBUDtBQUNEO0FBQ0QsTUFBTU8scUJBQXFCLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQixXQUFPLDZCQUFJTixTQUFTQyxnQkFBVCxDQUEwQixhQUExQixDQUFKLEdBQ0pDLEdBREksQ0FDQyxVQUFDSyxPQUFELEVBQVNDLENBQVQsRUFBZTtBQUNuQkQsY0FBUUUsZ0JBQVIsQ0FBMEIsT0FBMUIsRUFBbUMsWUFBWTtBQUM3QyxlQUFPWCxlQUFlRixNQUFNWSxDQUFOLENBQWYsQ0FBUDtBQUNELE9BRkQsRUFFRyxLQUZIO0FBR0QsS0FMSSxDQUFQO0FBTUQsR0FQRDtBQVFBLE1BQU1FLG1CQUFtQixTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsUUFBTUMsV0FBV1gsU0FBU1ksYUFBVCxDQUF1QixZQUF2QixDQUFqQjtBQUNBRCxhQUFTRixnQkFBVCxDQUEyQixPQUEzQixFQUFvQyxZQUFZO0FBQzlDLGFBQU8sNkJBQUlULFNBQVNDLGdCQUFULENBQTBCLGFBQTFCLENBQUosR0FBOENDLEdBQTlDLENBQW1EO0FBQUEsZUFBT0MsSUFBSVUsZUFBSixDQUFvQixPQUFwQixDQUFQO0FBQUEsT0FBbkQsQ0FBUDtBQUNELEtBRkQ7QUFHRCxHQUxEO0FBTUEsTUFBTUMsT0FBTyxTQUFQQSxJQUFPLEdBQU07QUFDakJSO0FBQ0FJO0FBQ0QsR0FIRDtBQUlBLFNBQU8sRUFBQ0ksVUFBRCxFQUFQO0FBQ0QsQ0F2Qm9CLEVBQXJCO0FBd0JBakIsYUFBYWlCLElBQWIiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9kZXNpZ24gcGF0dGVybjogbW9kdWxlIHBhdHRlcm5cbmNvbnN0IGNvbG9yID0gW1xuICAnIzhhMjUyZCcsXG4gICcjMzA2YjM2JyxcbiAgJyM0MjRhOTQnLFxuXVxuY29uc3QgbW9kdWxlU2Nod2FiID0gKCAoKSA9PiB7XG4gIGZ1bmN0aW9uIGNoYW5nZUNvbG9yQnRuKGUpIHtcbiAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tY2hhbmdlJyldLm1hcCggZWxlID0+IGVsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBlIClcbiAgfVxuICBjb25zdCBjaGFuZ2VUaHJlZU1vZHVsZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWNoYW5nZScpXVxuICAgICAgLm1hcCggKGVsZW1lbnQsaSkgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY2hhbmdlQ29sb3JCdG4oY29sb3JbaV0pXG4gICAgICAgIH0sIGZhbHNlIClcbiAgICAgIH0pXG4gIH1cbiAgY29uc3QgcmVzZXRXaGl0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCB3aGl0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcmVzZXQnKVxuICAgIHdoaXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1jaGFuZ2UnKV0ubWFwKCBlbGUgPT4gZWxlLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKSApXG4gICAgfSlcbiAgfVxuICBjb25zdCBtYWluID0gKCkgPT4ge1xuICAgIGNoYW5nZVRocmVlTW9kdWxlcygpXG4gICAgcmVzZXRXaGl0ZUJ1dHRvbigpXG4gIH1cbiAgcmV0dXJuIHttYWlufVxufSkoKVxubW9kdWxlU2Nod2FiLm1haW4oKVxuIl19
