function getQuote() {
  var ajaxRequest = new XMLHttpRequest();
  ajaxRequest.open("GET", "https://andruxnet-random-famous-quotes.p.mashape.com/", false);
  ajaxRequest.setRequestHeader("X-Mashape-Key", "ugRAQTYUqFmshNtS8wkkvxVjGyfrp1LbIKYjsnnZpJLFaoFWPz");
  ajaxRequest.send(); // this is the authentication key provided at the site, need this or will not successfully connect!!

  var json_obj = JSON.parse(ajaxRequest.responseText); // this will be the actual entire JSON object with all brackets and attributes
  var randomQuote = json_obj.quote;
  var quoteAuthor = json_obj.author;

  $(document).ready(function() {
    document.getElementById("quoteText").innerHTML = "\"" + randomQuote + "\"";
    document.getElementById("quoteAuthor").innerHTML = "-" + quoteAuthor;
  })
};

$(document).ready(function() {
  getQuote();
  $('#randomQuote').on('click', getQuote);
  $('#tweetQuote').on('click', function() {
    window.open('https://twitter.com/intent/tweet?text=' + document.getElementById("quoteText").innerHTML + "\n" + "-" + document.getElementById("quoteAuthor").innerHTML);
  });
});
