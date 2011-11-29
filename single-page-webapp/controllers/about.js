define([
  'jquery',
  'text!templates/about.html'
],
function($, tmpl){
  function render(){
    $('.hero-unit').html(tmpl);
  }

  return {
    render: render
  };
});
