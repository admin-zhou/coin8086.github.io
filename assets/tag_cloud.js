$(function() {
  $('#tag-cloud a').each(function() {
    var $this = $(this);
    var count = null;
    var text = $this.text().replace(/\((\d+)\)$/, function (m, n) {
      count = parseInt(n);
      return '';
    });
    var weight = Math.sqrt(Math.log(count * 1.1) + 1);
    $this.css({fontSize: (weight * 100) + "%"});
  });
});
