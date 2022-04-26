let previousURL;
const catchWindow = null;
// let lsDarkModePref = localStorage.getItem('darkMode');
const darkModeToggle = document.getElementById('darkModeToggle');

// const enableDarkMode = () => {
//   document.body.classList.add('dark-mode');
//   localStorage.setItem('darkModePreference', 'enabled');
// };

// const disableDarkMode = () => {
//   document.body.classList.remove('dark-mode');
//   localStorage.setItem('darkModePreference', null);
// };

// on load
// if (lsDarkModePref === 'enabled') enableDarkMode();

// on click
// darkModeToggle.addEventListener('click', () => {
//   lsDarkModePref = localStorage.getItem('darkMode');
//   if (lsDarkModePref !== 'enabled') enableDarkMode();
//   else disableDarkMode();
// });

// * functions!
// function getLocalStorage(key) {
// only on the client side, stored locally, no cookie warning, not used for the server side

// }

// version 2
function getCookie(key) {
  const cookieName = `${key}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const allCookies = decodedCookie.split(';');
  for (let i = 0; i < allCookies.length; i += 1) {
    let currentCookie = allCookies[i];
    while (currentCookie.charAt(0) === ' ') {
      currentCookie = currentCookie.substring(1);
    }
    if (currentCookie.indexOf(key) === 0) {
      if (currentCookie.substring(cookieName.length, currentCookie.length) === 'true') return true;
      if (currentCookie.substring(cookieName.length, currentCookie.length) === 'false') return false;
    }
  }
  return undefined;
}

// version 1
// function getCookie(key) {
//   const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
//   // if there's any match or value at all
//   if (match) {
//     // console.log('Cookie:', name, 'found;', 'value:', match[2]);
//     // match[2] would be a string
//     if (match[2] === 'true') return true;
//     if (match[2] === 'false') return false;
//   }
//   return undefined;
// }

function changeView() {
  // check current view in cookie
  const isDark = getCookie('darkModePreference');
  // console.log('isDark:', getCookie('darkModePreference'));

  if (isDark) { // if current view is dark, then change to bright
    // console.log(darkModeToggle);
    // console.log('going from dark', isDark, 'to bright');
    darkModeToggle.src = './assets/icons8-sun.svg';

    const header = document.querySelector('.header');
    header.style.setProperty('background-color', '#f3f3f3');

    const links = document.querySelectorAll('.link');
    links.forEach((link) => {
      link.style.setProperty('color', '#666');
    });

    const contactButton = document.querySelector('#contact') || document.querySelector('#send');
    if (contactButton) {
      if (contactButton.className === 'button') {
        contactButton.className = 'dark-button';
      } else {
        contactButton.className = 'button';
      }
    }

    const contactDiv = document.querySelector('#hello');
    if (contactDiv) contactDiv.style.setProperty('background-color', 'white');

    // console.log('----------gone bright----------');

    // console.log('setting cookie darkModePreference to be false');
    document.cookie = 'darkModePreference=false;path=/';
    // console.log('darkModePreference now:', getCookie('darkModePreference'));
  } else {
    // console.log(darkModeToggle);
    // console.log('isDark?', isDark);
    // console.log('going from bright', !isDark, 'to dark');
    darkModeToggle.src = './assets/night-dark.png';

    const header = document.querySelector('.header');
    header.style.setProperty('background-color', '#202020');

    const links = document.querySelectorAll('.link');
    links.forEach((link) => {
      link.style.setProperty('color', '#E1E1E1');
    });

    const contactButton = document.querySelector('#contact') || document.querySelector('#send');
    // console.log('Here', contactButton.className === 'button');
    if (contactButton.className === 'button') {
      contactButton.className = 'dark-button';
    } else {
      contactButton.className = 'button';
    }

    if (document.querySelector('#hello')) {
      const contactDiv = document.querySelector('#hello');
      contactDiv.style.setProperty('background-color', 'rgb(175, 175, 175)');
    }

    // console.log('-----------------gone dark-------------------');

    // console.log('setting cookie darkModePreference to be true');
    document.cookie = 'darkModePreference=true;path=/';
    // console.log('darkModePreference now:', getCookie('darkModePreference'));
  }

  const header = document.querySelector('.header');
  const content = document.body;
  header.classList.toggle('dark-mode');
  content.classList.toggle('dark-mode');
}

function letsGoCatchEmAll(url) {
  const innerWidth = 950;
  const innerHeight = 930;
  const windowFeatures = `popup,
  screenX = ${((window.screen.availWidth - innerWidth) / 2)},
  screenY = ${(window.screen.availHeight - innerHeight) / 2}, 
  innerWidth=${innerWidth}, innerHeight=${innerHeight}`;
  // screenX = ${((window.screen.width - window.outerWidth) / 2)},
  // screenY = ${((window.screen.height * 0.1) / 2)},

  if (catchWindow === null || catchWindow.closed) {
    catchWindow = window.open(
      url,
      'CatchGameWindow',
      windowFeatures,
    );
    // console.log(catchWindow);
  } else if (previousURL !== url) {
    catchWindow = window.open(
      url,
      'CatchGameWindow',
      windowFeatures,
    );
    catchWindow.focus();
  } else {
    catchWindow.focus();
  }
  previousURL = url;
  return false;
}

function validateForm() {
  const name = document.getElementById('name').value;
  if (name === '') {
    document.querySelector('.status').innerHTML = 'Name cannot be empty';
    return false;
  }
  const email = document.getElementById('email').value;
  if (email === '') {
    document.querySelector('.status').innerHTML = 'Email cannot be empty';
    return false;
  }
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email)) {
    document.querySelector('.status').innerHTML = 'Email format invalid';
    return false;
  }

  const subject = document.getElementById('subject').value;
  if (subject === '') {
    document.querySelector('.status').innerHTML = 'Subject cannot be empty';
    return false;
  }
  const message = document.getElementById('message').value;
  if (message === '') {
    document.querySelector('.status').innerHTML = 'Message cannot be empty';
    return false;
  }
  return false;
}

// * on load
document.addEventListener('DOMContentLoaded', (e) => {
  // on page load, check the darkMode key value pair
  const darkModeOnLoad = getCookie('darkModePreference');

  // console.log('loading dark mode preference:', darkModeOnLoad);

  if (darkModeOnLoad === undefined) {
    // if the darkModePreference cookie does not exist || there is no match
    // console.log('--cookie name not found, setting cookie "darkModePreference=false"---');
    document.cookie = 'darkModePreference=false;path=/';
  }

  if (darkModeOnLoad) {
    // console.log('dark mode on load should be true:', darkModeOnLoad);

    darkModeToggle.src = './assets/night-dark.png';

    const header = document.querySelector('.header');
    header.style.setProperty('background-color', '#202020');

    const links = document.querySelectorAll('.link');
    links.forEach((link) => {
      link.style.setProperty('color', '#E1E1E1');
    });

    const contactButton = document.querySelector('#contact') || document.querySelector('#send');

    if (contactButton.className === 'button') {
      contactButton.className = 'dark-button';
    } else {
      contactButton.className = 'button';
    }

    const content = document.body;
    header.classList.toggle('dark-mode');
    content.classList.toggle('dark-mode');

    // console.log(window.location.pathname);
    if (window.location.pathname === '/contact/') {
      const contactDiv = document.querySelector('#hello');
      // console.log('Here', contactDiv.classList);
      contactDiv.style.setProperty('background-color', 'rgb(175, 175, 175)');
      // contactDiv.classList.add('#hello-dark-mode');
    }
  } else {
    // console.log('dark mode on load should be false:', getCookie('darkModePreference'));
  }
});

// * event.target matching
document.addEventListener('pointerdown', (e) => {
  // when clicking on the specific button, (using selector & data attribute)
  const dropdownBtn = e.target.matches('[data-dropdown-button]');

  let currentDropdownContainer; // to store the current dropdown clicked
  // if dropdownBtn clicked && if the parent / closet element is 'data-dropdown' -> leave it open
  if (dropdownBtn) {
    currentDropdownContainer = e.target.closest('[data-dropdown-container]');
    // hide or show this dropdown depending on if it's opened or not
    currentDropdownContainer.classList.toggle('active');
  }
  // if not clicked && if the parent / closet element is not null -> close the dropdown menu
  if (!dropdownBtn && e.target.closest('[data-dropdown-container]') != null) return;

  // closes all the dropdowns that are already opened, except for the one just opened
  document.querySelectorAll('[data-dropdown-container].active').forEach((dropdown) => {
    if (dropdown === currentDropdownContainer) return;
    dropdown.classList.remove('active');
  });

  // * contact us button
  const contactBtn = e.target.matches('#contact');

  if (contactBtn) {
    // window.location.href = '/contact';
    window.location.assign('/contact');

    const access = document.querySelector('.special-access');
    access.style.display = 'none';

    // fetch(`http://api.ipstack.com/check?access_key=${ACCESS_KEY}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    // * currently blocked if using HTTPS, only works for HTTP (local environment testing):
    // [Warning] [blocked] The page at https://yoyoyojoe.github.io/ was not allowed to display insecure content from http://api.ipstack.com/check?access_key=712b054a2c30061f29245a96f5751335. (index.js, line 30)
    // [Error] Not allowed to request resource (anonymous function)(index.js: 30)
    // [Error] Fetch API cannot load http://api.ipstack.com/check?access_key=712b054a2c30061f29245a96f5751335 due to access control checks. (anonymous function)(index.js: 30)
    // * currently only works for HTTP, not HTTPS (with encryption)
    // console.log(
    //   `Visitor at ${data.ip}, your visit has been logged. `
    //   + 'According to this IP address, your current location is at or near'
    //   + `${data.city}, ${data.region_name} in ${data.country_name}`
    //   + `${data.location.country_flag_emoji}, and your country's language is`
    //   + `${data.location.languages[0].native}.`
    //   + 'Do not worry, this is only an exercise for fun. - from the developer.',
    // );
    // })
    // .catch((error) => console.log(`the entire error: ${error}`));
  }

  const catchButton = e.target.matches('#catch');
  if (catchButton) letsGoCatchEmAll(contactBtn.href);

  const darkModeButton = e.target.matches('#darkModeToggle');
  if (darkModeButton) changeView();
});

/* ipstack: Locate and identify website visitors by IP address

> index.js:32
Mixed Content: The page at 'https://yoyoyojoe.github.io/' was loaded over HTTPS, but requested an insecure resource 'http://api.ipstack.com/check?access_key=712b054a2c30061f29245a96f5751335'. This request has been blocked; the content must be served over HTTPS.
> (anonymous) @ index.js:32

> yoyoyojoe.github.io/:1
Uncaught (in promise) TypeError: Failed to fetch
Promise.then (async)
> (anonymous) @ index.js:34

> https://ipstack.com/documentation

Connecting via HTTPS

All premium subscription plans come with support for 256-bit SSL encryption.
To connect to the API via HTTPS, simply use the https protocol instead of standard http.

> https://ipstack.com/product

FREE

$0
No hidden costs

SHOW OPTIONS
100 requests / mo
Limited Support
Location Module */
