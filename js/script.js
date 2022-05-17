// Nav Mobile Insert

document.getElementById("nav-container").innerHTML = `
<div class="title" id="title">
          <a href="/index.html"> <img src="https://media-prd.coachella.com/templates/template10/svgs/coachella-logo.svg" alt="logo"></a>
          <div class="mob-line"></div>
          <p class="fly">APR 15-17 & 22-24</p>
        </div>
        <nav>
          <!-- Burger menu icon and animation -->
          <div
            class="burger-menu-btn"
            onclick="hamFunction(this); toogleSlideMenu(this);"
          >
            <div class="ham-border">
              <div class="line lOne"></div>
              <div class="line lTwo"></div>
            </div>
            <!--
            <div class="ham-border-close">
              <div class="line clOne"></div>
              <div class="line clTwo"></div>
            </div>
            -->
          </div>
          <div class="ham-bar" id="myHam-bar">
            <div class="navigation-mobile">
              <ul>
                <li><a href="/html/music.html">Music</a></li>
                <li><a href="/html/passes.html">Passes</a></li>
                <li><a href="/html/plan.html">Plan</a></li>
                <li><a href="/html/experience.html">Experience</a></li>
                <li><a href="/html/shop.html">Shop</a></li>
                <li><a href="/html/contact.html">Contact</a></li>
                <li><a href="/html/search.html">Search</a></li>
                <li>
                  <a href="/html/search.html" class="search-icon hidden"></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
`;

/* xxxxxxxxxxxxxxxxxxxxxxxx */

// Navigation index Desktop Insert

document.getElementById("navigation-wrapper").innerHTML = `
<div class="desktop-nav-container-flex">
<div class="logo-desktop">
<a href="/index.html"> <img src="https://media-prd.coachella.com/templates/template10/svgs/coachella-logo.svg" alt="logo"></a>
<div class="mob-line">
<p class="fly">APR 15-17 & 22-24</p>
</div>
</div>
  <div class="c-navigation__container">
  <div class="c-navigation">
      <div class="c-navigation__innerContainer">

          <ul class="c-navigation__navList" id="nav-list">
              <li class="c-navigation__navItem">
                  <a class="c-title" href="/html/music.html"
                      target="_self">Music</a>
              </li>
              <li class="c-navigation__navItem" data-identifier="navitem2866">
                  <a class="c-title" href="/html/passes.html"
                      target="_self">Passes</a>
              </li>
              <li class="c-navigation__navItem" data-identifier="navitem2867">
                  <a class="c-title" href="/html/plan.html"
                      target="_self">Plan</a>
              </li>
              <li class="c-navigation__navItem" data-identifier="navitem2868">
                  <a class="c-title" href="/html/experience.html"
                      target="_self">Experience</a>
              </li>
              <li class="c-navigation__navItem" data-identifier="navitem2955">
                  <a class="c-title" href="/html/shop.html"
                      target="_self">Shop</a>
              </li>
              <li class="c-navigation__navItem" data-identifier="navitem2955">
                  <a class="c-title" href="/html/contact.html"
                      target="_self">Contact</a>
              </li>
              <li class="search-btn">
                  <img alt="search.svg" src="https://media-prd.coachella.com/templates/template10/svgs/search.svg" />
              </li>
          </ul>
          </div>
          </div>
          </div> 
          </div>
  `;

/* xxxxxxxxxxxxxxxxxxxxxxxx */


/* xxxxxxxxxxxxxxxxxxxxxxxx */

function hamFunction(x) {
  x.classList.toggle("change");
}

function toogleSlideMenu(x) {
  if (x.classList.contains("change")) {
    document.getElementById("myHam-bar").style.width = "100%";
    //document.getElementById("myHam-bar").style.marginTop = "64px";
  } else {
    document.getElementById("myHam-bar").style.width = "0px";
    //document.getElementById("myHam-bar").style.marginTop = "64px";
  }
}

/* xxxxxxxxxxxxxxxxxxxxxxxx */

// Jump to top button

const backToTopButton = document.querySelector(".jumpToButton");

const jumpToTop = () => {
  document.body.scrollIntoView();
};

//La función scrollIntoView()( Referencia de MDN ) desplaza la página para mostrar el elemento al que se está llamando. Aquí lo estamos llamando en el cuerpo para que la página se desplace hacia la parte superior.

backToTopButton.addEventListener("click", jumpToTop);

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

// Make scrolling smoother - Is working?

/* xxxxxxxxxxxxxxxxxxxxxxxx */
