const S = '712513b96fc30061f054a229245a5735';
const $ = '712b054a2c30061f29245a96f5751335';
const s = '72b961f054a229245a556fc303130751';
// If your here, please note nothing is being done with your ip address.

document.addEventListener('pointerup', (e) => {
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
          data.ip,
          'Your visit has been logged.',
        );
        const access = document.querySelector('.special-access');
        access.style.display = 'none';
      });
  }
});

document.querySelector('.login').addEventListener('touchend', () => {
  if (fakeBtn) {
    fetch(`http://api.ipstack.com/check?access_key=${$}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log('your ip address is: ', data.ip);
        console.log(
          data.ip,
          'Your visit has been logged.',
        );
        const access = document.querySelector('.special-access');
        access.style.display = 'none';
      });
  }
});

document.querySelector('#catch').addEventListener('click', () => {
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
