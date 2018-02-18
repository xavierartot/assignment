//https://toddmotto.com/mastering-the-module-pattern/#revealing-module-pattern

//Each box contains a button, and when clicked changes the color 
//of the other buttons to its color, except for the white box. 
//The white box always remains white and when its button is clicked, 
//it resets the colors of the other boxes to their original colors.
//
const color = [
  '#a3323b',
  '#3e9146',
  '#525fd6',
];
let moduleSchwab = ( () => {
  const threeModules = () => {
    return [...document.querySelectorAll('.btn-change')]
      .map( (element,i) => {
        element.addEventListener( 'click', function (event) {
          event.preventDefault()
          return changeColorBtn(color[i])
        }, false );
      });
    function changeColorBtn(e) {
      return [...document.querySelectorAll('.btn-change')].map( ele => ele.style.backgroundColor = e )
    }
  }

  const whiteModule = () => {
    const whiteBtn = document.querySelector('.btn-white')
    whiteBtn.addEventListener( 'click', function (event) {
      event.preventDefault()
      return [...document.querySelectorAll('.btn-change')].map( ele => ele.removeAttribute('style') )

    });
  };
  //main
  let main  = () => {
    threeModules()
    whiteModule() 
  };

  //return an object
  return {
    main
  };

})();
moduleSchwab.main()
//Simon.anotherMethod ()
