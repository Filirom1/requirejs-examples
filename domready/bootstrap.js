require([
       'foo',
       'domReady!'
], function (foo, doc){
  doc.getElementById('main').innerHTML = foo.name;
});
