let catchWindow = null;
let previousURL;

// * loading catch game when catch-button onclick
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
    const access = document.querySelector('.special-access');
    access.style.display = 'none';

    window.location.href = '/contact';
  }
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
