document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });

  function gdpr() {
    const gdprBanner = document.getElementById("gdpr-banner");
    const cookieJaButton = document.getElementById("cookies-ja");
    const cookieNeeButton = document.getElementById("cookies-nee");

    cookieJaButton.addEventListener("click", function () {
      localStorage.setItem("cookiesja", "true");
      location.reload();
    });

    cookieNeeButton.addEventListener("click", function () {
      localStorage.setItem("cookiesnee", "true");
      location.reload();
    });

    const expirationTime = 24 * 60 * 60 * 1000; // 1 day in milliseconds
    const currentTime = new Date().getTime();

    // Check cookiesja item
    const cookiesja = localStorage.getItem("cookiesja");
    if (cookiesja && currentTime - cookiesja > expirationTime) {
      localStorage.removeItem("cookiesja");
    } else if (cookiesja === "true") {
      gdprBanner.classList.add("is-hidden");
      console.log("cookiesja is set");
      loadClicky();
    }

    // Check cookiesnee item
    const cookiesnee = localStorage.getItem("cookiesnee");
    if (cookiesnee && currentTime - cookiesnee > expirationTime) {
      localStorage.removeItem("cookiesnee");
    } else if (cookiesnee === "true") {
      gdprBanner.classList.add("is-hidden");
      console.log("cookiesnee is set");
    }
  }
  gdpr();

  function loadClicky() {
    // Create the script element
    var scriptElement = document.createElement("script");
    scriptElement.async = true;
    scriptElement.setAttribute("data-id", "101418066");
    scriptElement.src = "//static.getclicky.com/js";

    // Create the noscript element
    var noscriptElement = document.createElement("noscript");
    var imgElement = document.createElement("img");
    imgElement.alt = "Clicky";
    imgElement.width = 1;
    imgElement.height = 1;
    imgElement.src = "//in.getclicky.com/101418066ns.gif";

    // Append the script element to the head tag
    var headElement = document.getElementsByTagName("head")[0];
    headElement.appendChild(scriptElement);

    // Check if noscript element exists
    var noscriptParentElement = document.querySelector("noscript");
    if (!noscriptParentElement) {
      // Create the noscript parent element (e.g., a div)
      var noscriptParent = document.createElement("div");
      noscriptParent.style.display = "none";
      document.body.appendChild(noscriptParent);
      noscriptParentElement = noscriptParent;
    }

    // Append the img element to the noscript parent element
    noscriptParentElement.appendChild(noscriptElement);
    noscriptElement.appendChild(imgElement);
  }
  if (window.location.pathname === "/") {
    const particleContainer = document.querySelector(".particle-container");
    const numParticles = 50; // Adjust the number of particles
    const particleSize = 2; // Adjust the particle size in rem
    const containerWidth = particleContainer.offsetWidth;
    const maxParticlesPerRow = Math.floor(containerWidth / (particleSize * 16)); // Convert rem to px
    const colors = ["#51d4e6", "#ff6c00"]; // Cyberpunk-style colors

    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      const row = Math.floor(i / maxParticlesPerRow);
      const col = i % maxParticlesPerRow;

      particle.style.left = `calc(${col} * ${particleSize}rem)`;
      particle.style.bottom = `calc(${row} * ${
        (particleSize * Math.sqrt(3)) / 2
      }rem)`; // Adjust vertical spacing for hexagons
      particle.style.animationDelay = `${Math.random() * 2}s`; // Add some variation to animation start times

      // Assign a random color from the 'colors' array
      particle.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

      particleContainer.appendChild(particle);
    }
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .then(function (registration) {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch(function (error) {
        console.log("Service Worker registration failed:", error);
      });
  });
}

// direct loading functions
function goToSelectedPage() {
  if (window.location.pathname === "/") {
    const selectElement = document.getElementById("page-select");
    const selectedValue = selectElement.value;

    if (selectedValue) {
      window.location.href = selectedValue;
    }
  }
}
