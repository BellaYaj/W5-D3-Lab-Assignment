$(document).ready(function() {
  $("td").click(function() {
    var activities = $(this).text();
    // if activities does not equal Not Available which is pass as a str
    if (activities != "Not Available") {
      $(this).toggleClass("tdhighlight");

      if ($(this).hasClass("tdhighlight")) {
        $('#displaySelected').css("visibility","visible");
        $('#displaySelected').css("margin-top","2em");
        $('#result').append("<p>"+content+"</p>");
      } else {
        $('#result p:contains('+content+')').remove();

        if ($('#result').has('p').length == false) {
          $('#displaySelected').css("visibility","hidden");
          $('#displaySelected').css("margin-top","0");
        }
      }
    }
  });
});
