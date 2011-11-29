require([
  'foo',
  window.fn1 ? '' : 'js!fn1.js',
  window.JSON ? '' : 'js!fn2.js'
], function(foo){
  console.log(foo.name);
});
