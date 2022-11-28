// ==UserScript==
// @name          ELO
// @namespace     https://github.com/MartGroothuis
// @description   Usability improvements for the windesheim brightspace ELO
// @author        Mart Groothuis
// @license       MIT

// @downloadURL   https://github.com/MartGroothuis/ELO-usability-improvement/raw/master/elo.user.js
// @updateURL     https://github.com/MartGroothuis/ELO-usability-improvement/raw/master/elo.user.js
// @supportURL    https://github.com/MartGroothuis/ELO-usability-improvement/issues
// @version       1.0

// @match         https://leren.windesheim.nl/*
// @match         https://s.brightspace.com/*
// @grant         none
// @run-at        document-end
// @require       https://git.io/waitForKeyElements.js
// ==/UserScript==

(function () {
  if (window.top === window.self) {
    parseUrl();
    updateHomePage();
  }
  else {
    updateIframe();
  }
})();

// check every 10 miliseconds if the element d2l-heading-1 is there
function checkIfLoaded(className) {
  if (document.getElementsByClassName(className)[0]) {
    console.log("Loaded:", className)
    return true;
  } else {
    console.log('Not loaded');
    setTimeout(checkIfLoaded, 10);
  }
}

// This modifies the iframe
function updateIframe() {
  // if (!checkIfLoaded("content-panel")) return;

  let title = document.getElementsByClassName('d2l-heading-1')[0]
  console.log(title);
  title.style.backgroundColor = 'yellow';

  // Add click listener
  let navigation = document.getElementsByClassName('navigation-menu')[0]
  navigation.addEventListener('click', function () {
    console.log('Clicked');
    checkIfLoaded("content-panel");
  });
}

// This changes the way the home page looks
function updateHomePage() {
  // if (!checkIfLoaded("d2l-body")) return;

  // delete banner
  let banner = document.getElementById("CourseImageBannerPlaceholderId")
  banner.remove();

  let headerBar = document.getElementsByClassName("d2l-branding-navigation-background-color d2l-visible-on-ancestor-target")[0]
  headerBar.style.backgroundColor = "#05ACFF";

  // remove homepage-col-6 add homepage-col-12 to all in halfWidth
  let halfWidth = document.getElementsByClassName('homepage-col-6');
  for (let i = 0; i < halfWidth.length; i++) {
    halfWidth[i].classList.replace('homepage-col-6', 'homepage-col-12');
  }

  // Update the card links so they go to the correct page
  updateCardLinks();
}

function updateCardLinks() {
  // if (!checkIfLoaded("d2l-card-container")) return;
  let cards = document.getElementsByClassName('d2l-card-container');
  console.log(cards)
}

function parseUrl() {
  let url = window.location.pathname;
  if (!url.includes("/d2l/home/")) return;

  let courseCode = url.replace("/d2l/home/", "");
  window.location.replace(`/d2l/le/content/${courseCode}/Home`);
}
