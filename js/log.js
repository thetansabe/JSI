import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

import { auth } from '../js/firebase-init.js';

const authErrorCodes = {
    "auth/invalid-email": "Wrong email",
    "auth/wrong-password": "Wrong password"
}

document.getElementById('login-btn').addEventListener('click', async e => {
    const email= document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    console.log(email, password);

    //check xem tai khoan, mat khau da duoc luu tren firebase chua
    try{
        const userCreadential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCreadential);
        
    }catch(error){
        console.log(error);
        console.log("Readable error message: ", authErrorCodes[error.code]);
    }

    //store is logged into localstorage
    localStorage.setItem("isLogged", true);

    //redirect to homepage
    window.location.href = '../index.html';
});

//acc: test1@gmail.com/xinchao123