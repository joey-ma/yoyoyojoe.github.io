const $ = '712b054a2c30061f29245a96f5751335';
// If your here, please note nothing is being done with your ip address.

document.addEventListener('pointerdown', (e) => {
  // console.log(e.pointerType);
  // console.dir(e);

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

  const fakeBtn = e.target.matches('.login');

  if (fakeBtn) {
    fetch(`http://api.ipstack.com/check?access_key=${$}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log('your ip address is: ', data.ip);
        console.log(
          `Visitor at ${data.ip}, your visit has been logged. `
          + `According to this IP address, your current location is at or near ${data.city}, ${data.region_name} in ${data.country_name} ${data.location.country_flag_emoji}, and your country's language is ${data.location.languages[0].native}. `
          + 'Do not worry, this is only an exercise for fun. - from the developer.',
        );
      });
    const access = document.querySelector('.special-access');
    access.style.display = 'none';

    // console.log(e.target.className === 'login');
    // console.dir(e);
  }
});

/* the reason Fake Button doesn't work on mobile devices: I'm on the free plan!

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

document.querySelector('#catch').addEventListener('click', () => {
  // eslint-disable-next-line no-unused-vars
  const catchWindow = window.open(
    'https://yoyoyojoe.github.io/catch',
    'Catch - A Tribute to Snake Game',
    `popup=yes, 
    screenX=${(window.screen.availWidth - window.outerWidth) / 2},
    screenY=${(window.screen.availHeight * 0.1) / 2}, 
    innerWidth=950, innerHeight=950`,
  );
  // console.dir(catchWindow);
});
