window.onload = function() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });

    function gdpr() {
      const gdprBanner = document.getElementById('gdpr-banner');
      const cookieJaButton = document.getElementById('cookies-ja');
      const cookieNeeButton = document.getElementById('cookies-nee');
    
      cookieJaButton.addEventListener('click', function () {
        localStorage.setItem('cookiesja', 'true');
        location.reload();
      });
    
      cookieNeeButton.addEventListener('click', function () {
        localStorage.setItem('cookiesnee', 'true');
        location.reload();
      });
    
      const expirationTime = 24 * 60 * 60 * 1000; // 1 day in milliseconds
      const currentTime = new Date().getTime();
    
      // Check cookiesja item
      const cookiesja = localStorage.getItem('cookiesja');
      if (cookiesja && (currentTime - cookiesja > expirationTime)) {
        localStorage.removeItem('cookiesja');
        

      } else if (cookiesja === 'true') {
        gdprBanner.classList.add('is-hidden');
        console.log('cookiesja is set');
        loadClicky();
      }
    
      // Check cookiesnee item
      const cookiesnee = localStorage.getItem('cookiesnee');
      if (cookiesnee && (currentTime - cookiesnee > expirationTime)) {
        localStorage.removeItem('cookiesnee');
      } else if (cookiesnee === 'true') {
        gdprBanner.classList.add('is-hidden');
        console.log('cookiesnee is set');
      }
    }
    gdpr();
    
    function loadClicky() {
      // Create the script element
      var scriptElement = document.createElement('script');
      scriptElement.async = true;
      scriptElement.setAttribute('data-id', '101418066');
      scriptElement.src = '//static.getclicky.com/js';
    
      // Create the noscript element
      var noscriptElement = document.createElement('noscript');
      var imgElement = document.createElement('img');
      imgElement.alt = 'Clicky';
      imgElement.width = 1;
      imgElement.height = 1;
      imgElement.src = '//in.getclicky.com/101418066ns.gif';
    
      // Append the script element to the head tag
      var headElement = document.getElementsByTagName('head')[0];
      headElement.appendChild(scriptElement);
    
      // Check if noscript element exists
      var noscriptParentElement = document.querySelector('noscript');
      if (!noscriptParentElement) {
        // Create the noscript parent element (e.g., a div)
        var noscriptParent = document.createElement('div');
        noscriptParent.style.display = 'none';
        document.body.appendChild(noscriptParent);
        noscriptParentElement = noscriptParent;
      }
    
      // Append the img element to the noscript parent element
      noscriptParentElement.appendChild(noscriptElement);
      noscriptElement.appendChild(imgElement);
    }
    
    
   
};




// direct loading functions
function goToSelectedPage() {
  if (window.location.pathname === '/') {
    const selectElement = document.getElementById('page-select');
    const selectedValue = selectElement.value;

    if (selectedValue) {
      window.location.href = selectedValue;
    }
  }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js')
      .then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(function(error) {
        console.log('Service Worker registration failed:', error);
      });
  });
}