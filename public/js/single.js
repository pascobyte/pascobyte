document.addEventListener('DOMContentLoaded', function() {
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
  