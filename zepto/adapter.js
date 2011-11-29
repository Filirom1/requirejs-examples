define([
  RegExp(" AppleWebKit/").test(navigator.userAgent)? 'zepto' : 'jquery'
], function($){
  return $;
});
