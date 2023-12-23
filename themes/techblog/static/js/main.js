document.addEventListener('DOMContentLoaded', () => {

  // Register the service worker with a specific scope
  navigator.serviceWorker.register('/sw.js', { scope: '/' })
  .then(registration => {
    console.log('Service Worker registered with scope:', registration.scope);
  })
  .catch(error => {
    console.error('Service Worker registration failed:', error);
  });


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

  // Function to open the cookie modal
  const modal = document.querySelector('#modal');
  const agreeButton = document.querySelector('#agreeButton');

  if (!getCookie('consent') && !localStorage.getItem('consent')) {
    modal.classList.add('is-active');
  }

  agreeButton.addEventListener('click', () => {
    setCookie('consent', 'true', 1);
    localStorage.setItem('consent', 'true');
    modal.classList.remove('is-active');

    // Add Microsoft Clarity tracking script
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "k8yq73vd7f");
    
  });

  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

  
});