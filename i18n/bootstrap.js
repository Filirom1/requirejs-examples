require({
  paths: {
    jquery: 'jquery-1.7.1.min',
    underscore: 'underscore-min'
  }
  /* ,locale: "en" */
},[
  'jquery', /* Call it jquery, nothing else ! */
  'underscore', /* Call it underscore, nothing else */
  'i18n!nls/color',
  'text!tmpl.html'
], function($, _, data, tmpl){

  $(document).ready(function(){
    var populated = _.template(tmpl, data);
    $('#main').html(populated);
  });
});
