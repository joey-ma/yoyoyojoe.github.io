// * functions!
function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  // if there's any match or value at all
  if (match) {
    console.log('Cookie with key', name, 'is found, and its value is', match[2]);
    return match[2]; // returns a string
  }
  // if the darkMode cookie does not exist || there is no match
  console.log('--cookie name not found, setting cookie "darkMode=false"---');
  document.cookie = 'darkMode=false';
  return false;
}

function goDark() {
  console.log(darkModeToggle);
  // check document.cookie darkMode = true or false
  const isDark = getCookie('darkMode') === 'true';
  console.log('going dark, getting cookie darkMode', isDark);
  if (isDark) {
    console.log('cookie darkMode value was true', isDark);
    darkModeToggle.src = './assets/night-dark.png';
    document.cookie = 'darkMode=false';
    console.log('setting cookie darkMode to be false', getCookie('darkMode'));
    const menuText = document.querySelectorAll('header > div > button');
    menuText.forEach((el) => el.style.setProperty('color', '#666'));
    console.log('-----------------gone bright-------------------');
  } else {
    console.log('cookie darkMode value was false', isDark);
    darkModeToggle.src = './assets/icons8-sun.svg';
    document.cookie = 'darkMode=true';
    console.log('setting cookie darkMode to be true', getCookie('darkMode'));
    const menuText = document.querySelectorAll('header > div > button');
    menuText.forEach((el) => el.style.setProperty('color', '#f3f3f3'));
    console.log('-----------------gone dark-------------------');
  }

  console.log(document.body);
  const header = document.body.firstElementChild.firstElementChild;
  const content = document.body;
  // header.classList.toggle('dark-mode');
  content.classList.toggle('dark-mode');

  const headerStyle = document.querySelectorAll('.header');
  headerStyle.style.setProperty('color', '#f3f3f3');
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
    console.log(catchWindow);
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

function load() {
  console.log('loading');
  // on page load, check the darkMode key value pair
  const darkModeOnLoad = getCookie('darkMode') === 'true';
  const darkModeToggle = document.getElementById('darkModeToggle');

  console.log('dark mode on load:', darkModeOnLoad);
  // getCookie returns a string
  if (darkModeOnLoad) {
    console.log('dark mode on load should be true:', darkModeOnLoad);
    console.log(darkModeToggle);
    darkModeToggle.src = './assets/icons8-sun.svg';
    // darkModeToggle.src = './assets/night-dark.png';
    const header = document.body.firstElementChild.firstElementChild;
    const content = document.body;
    header.classList.toggle('dark-mode');
    content.classList.toggle('dark-mode');
    console.log('dark mode on load should be true', darkModeOnLoad);
    // goDark();
    // document.cookie = 'darkMode=false';
    console.log('sun', darkModeToggle);
  } else {
    // load dark mode && change toggle img src to sun
    console.log('dark mode on load should be false:', darkModeOnLoad);
    darkModeToggle.src = './assets/night-dark.png';
    // darkModeToggle.src = './assets/icons8-sun.svg';
    console.log('moon', darkModeToggle);
  }
  // console.log('document cookie', document.cookie);
}

// * load
load();
let catchWindow = null;
let previousURL;

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
  if (darkModeButton) goDark();
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
