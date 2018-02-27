//design pattern: module pattern
const color = [
  '#8a252d',
  '#306b36',
  '#424a94',
]
const moduleSchwab = ( () => {
  function changeColorBtn(e) {
    return [...document.querySelectorAll('.btn-change')].map( ele => ele.style.backgroundColor = e )
  }
  const changeThreeModules = () => {
    return [...document.querySelectorAll('.btn-change')]
      .map( (element,i) => {
        element.addEventListener( 'click', function () {
          return changeColorBtn(color[i])
        }, false )
      })
  }
  const resetWhiteButton = () => {
    const whiteBtn = document.querySelector('.btn-reset')
    whiteBtn.addEventListener( 'click', function () {
      return [...document.querySelectorAll('.btn-change')].map( ele => ele.removeAttribute('style') )
    })
  }
  const main = () => {
    changeThreeModules()
    resetWhiteButton()
  }
  return {main}
})()
moduleSchwab.main()
