require({
  paths: {
    jquery: 'jquery-1.7.1.min'
  }
},[
  'jquery', /* Call it jquery, nothing else ! */
  'data',
  'text!tmpl.html'
], function($, data, tmpl){

  $(document).ready(function(){
    var template = $(tmpl);
    var populated = template.find('input[name]').each(function(i, elem){
      var key = $(elem).attr('name');
      var value = data[key];
      $(elem).val(value);
    });
    $('#main').html(template);
  });
});
