function sendEmail(name, email, subject, message) {
  document.querySelector('.status').innerHTML = 'Working...';

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    console.log(this.readyState);
    if (this.readyState === 1) {
      document.querySelector('.status').innerHTML = 'Not quite sent yet...';
    }
    if (this.readyState === 2) {
      document.querySelector('.status').innerHTML = 'Sending...';
    }
    if (this.readyState === 4) {
      console.dir(document.querySelectorAll('input'));
      document.querySelectorAll('input').forEach((el) => el.value = '');
      document.getElementById('message').value = '';
      document.querySelector('.status').innerHTML = 'Message sent!';
    }
  };
  xhttp.open('POST', 'mail.php', true);
  xhttp.send();
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
  sendEmail(name, email, subject, message);
}
