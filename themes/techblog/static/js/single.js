document.addEventListener('DOMContentLoaded', function() {


  // Get the h1 and content elements
  var articleTitle = document.querySelector('h1');
  var articleContent = document.getElementById('single-content');

  // Get the talk button
  var talkButton = document.getElementById('speakcontent');

  // Add click event listener to the talk button
  talkButton.addEventListener('click', function() {
      // Combine the article title and content text
      var textToRead = articleTitle.innerText + ' ' + articleContent.innerText;

      // Use the Web Speech API to speak the text
      var speechSynthesis = window.speechSynthesis;
      var speechUtterance = new SpeechSynthesisUtterance(textToRead);

      // Customize options
      speechUtterance.voice = speechSynthesis.getVoices()[0]; // Change the voice (you can iterate through available voices)
      speechUtterance.lang = 'en-US'; // Change the language
      speechUtterance.rate = 1.0; // Change the speed (1.0 is normal speed)


      speechSynthesis.speak(speechUtterance);
  });






  function addNofollowToLinks() {
    // Get the element with the ID 'single-content'
    var singleContent = document.getElementById('single-content');
  
    // Get all the anchor tags within the 'single-content' element
    var links = singleContent.getElementsByTagName('a');
  
    // Loop through each link
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
  
      // Check if the link does not contain 'https://pascobyte.blog' in its href attribute
      if (link.href.indexOf('https://pascobyte.blog') === -1) {
        // Add 'nofollow noopener' attributes to the link
        link.setAttribute('rel', 'nofollow noopener');
        // Add 'target="_blank"' attribute to the link
        link.setAttribute('target', '_blank');
      }
    }
  }
  
  addNofollowToLinks();
  
  });
  