require({
  paths: {
    jquery: 'libs/jquery-1.7.1.min',
    weld: 'libs/weld-min'
  }
},
[
  'cs!controllers/hello'
], function(HelloController, doc){
  new HelloController();
});
