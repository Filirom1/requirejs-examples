require( {
  paths: {
    'jquery': 'jquery-1.7.1.min'
  }
},[
  'jquery'
], function($){

  $(document).ready(function(){
    $('#main').text('Good');
  });
});
