require(
{
  paths: {
    director: 'libs/director-1.0.3.min',
    jquery: 'libs/jquery-1.7.1.min',
    pubsub: 'libs/minpubsub.src',
    underscore: 'libs/underscore-min'
  }
},
[
  'domReady!',
  'director',
  'pubsub',
  'controllers/loading',
  'controllers/home',
  'controllers/about'
],
function(doc, Router, pubsub, loading, home, about){

  var routes = {
    '/': home.render,
    '/about': about.render,
    '/fun': function(){
      require(['controllers/fun'], function(fun){
        fun.render();
      });
    }
  };

  function allRoutes(){
    console.log('allRoutes');
  }

  Router(routes).configure({
    on: allRoutes
  }).init();

  loading.loaded();
});
