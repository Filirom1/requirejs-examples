define([
  'jquery',
  'underscore',
  'text!templates/fun.html'
], function($, _, tmpl){

  function render(){
    $.ajax({
      url: 'http://search.twitter.com/search.json?q=%40lyonJS',
      dataType: "jsonp",
      success: function(json){
        var el = $('.hero-unit');
        var result = _.template(tmpl, json.results[0]);
        el.html(result);
      },
      error: function(){
        console.log(erguments);
      }
    });
  }

  return {
    render: render
  };
});
