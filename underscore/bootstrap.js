require({
  paths: {
    jquery: 'jquery-1.7.1.min'
  }
},[
  'jquery', /* Call it jquery, nothing else ! */
  'underscore', /* Call it underscore, nothing else */
  'data',
  'text!tmpl.html'
], function($, _, data, tmpl){

  $(document).ready(function(){
    var populated = _.template(tmpl, data);
    $('#main').html(populated);
  });
});
