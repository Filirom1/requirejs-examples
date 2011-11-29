define([
  'jquery'
], function(){

  function loaded(){
    $('#loading').addClass('hidden');
    $('#content').removeClass('hidden');
  }

  return {
    loaded: loaded
  };
});
