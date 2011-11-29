define([
  'jquery',
  'text!templates/home.html'
],
function($, tmpl){
  function render(){
    $('.hero-unit').html(tmpl);
  }

  return {
    render: render
  };
});
