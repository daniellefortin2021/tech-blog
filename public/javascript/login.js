async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
    event.preventDefault();
    
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response);
      // check the response status
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert(response.statusText);
      }
    }
}

if (document.querySelector('.login-form') !== null){
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
}

if(document.querySelector('.signup-form') !== null) {
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
}


