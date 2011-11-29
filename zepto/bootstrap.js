require({
  paths: {
    jquery: 'jquery-1.7.1'
  }
},[
  'adapter'
], function($){
  $(function(){
    $('#main').text('Hello World !!!');
  });
});
