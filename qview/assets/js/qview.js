var navbarHTML = `
<nav class="navbar" role="navigation" aria-label="main navigation">  
    <div class="navbar-brand">
        <a class="navbar-item is-size-5" href="/qview">qView</a>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="qviewnavbar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>
    <div class="navbar-menu" id="qviewnavbar">
        <div class="navbar-start">
            <a class="navbar-item" href="/qview/download">Download</a>
            <a class="navbar-item" href="/qview/changelog">Changelog</a>
            <a class="navbar-item" href="/qview/formats">Supported Formats</a>
            <a class="navbar-item" href="https://github.com/jurplel/qView">GitHub</a>
            <a class="navbar-item" href="/discord">Discord</a>
        </div>
        <div class="navbar-end">
            <a class="navbar-item" href="/">Interverse</a>
        </div>
    </div>
</nav>`

var footerHTML =`
<div class="intvfooter">
        Copyright © 2021 jurplel All rights reserved. 
</div>`

var navbarHTMLobj = document.createElement('div');
var footerHTMLobj = document.createElement('div');
navbarHTMLobj.innerHTML = navbarHTML;
footerHTMLobj.innerHTML = footerHTML;

var header = document.getElementsByTagName("header");
var footer = document.getElementsByTagName("footer");

header[0].insertBefore(navbarHTMLobj.firstElementChild, header[0].firstChild);
footer[0].insertBefore(footerHTMLobj.firstElementChild, footer[0].firstChild);

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

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
  }

});
