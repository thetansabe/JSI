import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';
import { auth } from './firebase-init.js';

const errorWhenLogIn = {
  'auth/invalid-email': 'Invalid email',
  'auth/user-not-found': 'User not found',
  'auth/wrong-password': 'Wrong password',
  'auth/missing-password': 'Missing password',
  'auth/weak-password': 'Weak password',
};

const register = document.getElementById('register-btn');
if (register != null) {
  register.addEventListener('click', async (e) => {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    //   validate user

    try {
      //sucess
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);

      window.location.href = '../pages/register.html';
    } catch (error) {
      //fail
      if (errorWhenLogIn[error.code] === 'Invalid email') {
        document.getElementById('register-email-err').innerText =
          'Invalid email';
        document.getElementById('register-password-err').innerText = '';
      } else if (errorWhenLogIn[error.code] === 'Missing password') {
        document.getElementById('register-password-err').innerText =
          'Enter your password';
        document.getElementById('register-email-err').innerText = '';
      } else if (errorWhenLogIn[error.code] === 'Weak password') {
        document.getElementById('register-password-err').innerText =
          'Weak password';
        document.getElementById('register-email-err').innerText = '';
      }
      console.log(error.code);
    }
  });
}

const login = document.getElementById('btn');
if (login != null) {
  login.addEventListener('click', async (e) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    //   validate user
    try {
      //sucess
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      localStorage.setItem('isLogged', true);

      window.location.href = '../home.html';
    } catch (error) {
      //fail
      console.log(error.code);
      if (errorWhenLogIn[error.code] === 'Invalid email') {
        document.getElementById('email-err').innerText = 'Invalid email';
      } else if (errorWhenLogIn[error.code] === 'User not found') {
        document.getElementById('email-err').innerText = 'User not found';
        document.getElementById('password-err').innerText = '';
      } else if (errorWhenLogIn[error.code] == 'Missing password') {
        document.getElementById('password-err').innerText =
          'Please enter password';
      } else {
        document.getElementById('password-err').innerText = 'Wrong password';
      }
    }
  });
}
