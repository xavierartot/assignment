//https://toddmotto.com/mastering-the-module-pattern/#revealing-module-pattern
let Simon = ( () => {
  let _public = (t) => {
    let r = (t === '') ? t : t
  }
  // private
  let _private = () => {
    console.log('ddddd')
  };

  //main
  let main  = () => {
    _private()
   };

  //return an object
  return {
    main : main
  };

})();
Simon.main()
//Simon.anotherMethod ()
