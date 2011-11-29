require( {
  paths: {
    jquery: 'jquery-1.7.1.min'
  }
}, [
  'jquery', /* Call it jquery, nothing else ! */
  'bar'
], function($, bar){

  $(function(){
    $('#main').text(bar.getName);
  });
});
