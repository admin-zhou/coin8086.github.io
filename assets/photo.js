$(function() {
  $('.post img').wrap(function() {
    var url = $(this).attr('src');
    return '<a href="' + url + '">';
  });
});
