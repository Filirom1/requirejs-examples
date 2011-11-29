require({
  paths: {
    jqueryui: 'js/jqueryui'
  }
},[
  'jqueryui/datepicker'
], function() {
  $(function() {
    $( "#datepicker" ).datepicker();
  });
});
