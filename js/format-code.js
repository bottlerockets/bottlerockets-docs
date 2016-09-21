(function (window, document) {
  var slice = Array.prototype.slice;
  var codes = slice.call(document.getElementsByTagName('code'));
  var i = 0;
  for (; i < codes.length; i++) {
    codes[i].innerHTML = codes[i].innerHTML.replace(/([\[\]\{\}\(\)])/g, function (f, m) {
      return '<strong>' + m + '</strong';
    })
  }
}(this, document))