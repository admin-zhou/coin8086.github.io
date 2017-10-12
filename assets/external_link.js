// Works like jQuery's $(document).ready.
// Supports IE8+. Courtesy of http://youmightnotneedjquery.com/
function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

ready(function() {
  var hostname = window.location.hostname;
  var anchors = document.querySelectorAll('a');
  for (var i = 0; i < anchors.length; i++) {
    if (hostname != anchors[i].hostname) {
      anchors[i].setAttribute('target', '_blank');
    }
  }
});
