function foo(){
  var bar;
  quux=2;
  function zip(){
    var quux=4;
    bar=true;
  }
  return zip;
}
