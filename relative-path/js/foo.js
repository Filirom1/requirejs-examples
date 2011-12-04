define(['./bar'], function(bar){
  return {
    name: 'foo ' + bar.name
  };
});
