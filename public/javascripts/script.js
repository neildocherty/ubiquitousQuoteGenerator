var container = document.getElementById('container'),
    quotecontainer = document.getElementById('quote-container'),
    quote = document.getElementById('quote')

function load(){
  getImage()
  getQuote()
  setQuotePosition()
}

load()

window.onresize = function(event) {
  setQuotePosition()
}


// Get an image from the Unsplash API. Set the it as the background of the #image div. Use the user information to add attribution.
function getImage() {

  let xhr = new XMLHttpRequest()

  xhr.open('GET', "/images", true)
  xhr.send()
  xhr.addEventListener("readystatechange", logThing, false)

  function logThing(e) {
    if ( xhr.readyState == 4 && xhr.status == 200 ) {

      let response = JSON.parse(xhr.responseText);

      let img = response[Math.floor(Math.random() * response.length)]

      document.getElementById('image').style.backgroundImage = "url('"+img.urls.regular+"')";
      document.getElementById('credit-name').innerHTML = img.user.first_name + " " + img.user.last_name;
      document.getElementById('credit-link').href = img.user.links.html;
    }
  }

}


// Retrieve a random quote from a list.
// TODO: Find a good API and implement that.
function getQuote() {

  let xhr = new XMLHttpRequest()

  xhr.open('GET', "/quotes", true)
  xhr.send()
  xhr.addEventListener("readystatechange", asdgasdgsadg, false)

  function asdgasdgsadg(e) {
    if ( xhr.readyState == 4 && xhr.status == 200 ) {

      let response = JSON.parse(xhr.responseText);
      let quote = response[Math.floor(Math.random() * response.length)]

      document.getElementById("quote").innerHTML = quote.text
      document.getElementById("name").innerHTML = quote.attr

      setQuotePosition()
    }
  }

}


// Position the quotation in the middle of the container
function setQuotePosition(){
  quotecontainer.setAttribute("style","top:"+(container.clientHeight - quotecontainer.clientHeight)/2+"px;");
}


// tweetButton script
function tweetQuote(){

  var getQuote    = document.getElementById("quote").innerHTML,
      getName     = document.getElementById("name").innerHTML;

  window.open("http://twitter.com/intent/tweet?text=\"" + getQuote + "\" - " + getName + "&via=NeilDocherty&", "twitterwindow", "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0")

}
