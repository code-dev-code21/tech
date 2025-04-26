import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword,  onAuthStateChanged,
    signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,
    } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDmlg8wnGF9Apkt7WBRZArghRb3GkKxPd8",
    authDomain: "mini-hacathon-2cabe.firebaseapp.com",
    projectId: "mini-hacathon-2cabe",
    storageBucket: "mini-hacathon-2cabe.firebasestorage.app",
    messagingSenderId: "1053891275360",
    appId: "1:1053891275360:web:6c3f0ec0ca3950a1c9f105",
    measurementId: "G-FJQJ6H69VS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 
  const auth = getAuth(app);
const provider= new GoogleAuthProvider();

  document.getElementById("btn")?.addEventListener("click",()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    createUserWithEmailAndPassword(auth,email,password)
    .then(()=>{
        alert("sign-in sucessfully");
        window.location.href="index.html"
    })
    .catch((error)=>{
        alert(error.meesage)
    })
  })
  document.getElementById("btn")?.addEventListener("click",()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    signInWithEmailAndPassword(auth,password,email)
    .then(()=>{
        alert("Login succesfully")
        window.location.herf="./index.html"
    })
    .catch((error)=>{
        alert(error.message)
    })
  })
  document.getElementById("googleAuth")?.addEventListener("click",()=>{
signInWithPopup(auth,provider)
.then(()=>{
    alert("Login successfull!!")
    window.location.href="index.html"
})
.catch((error)=>{
alert(error.message)
})

  })
  onAuthStateChanged(auth, (user) => {
    if (user && window.location.pathname.includes("welcome.html")) {
    document.getElementById("user-email").textContent = user.email;
    } else if (!user && window.location.pathname.includes("welcome.html")) {
    window.location.href = "index.html";
    }
    });