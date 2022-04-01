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
});
