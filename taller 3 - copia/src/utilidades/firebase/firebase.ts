import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDBjqDmr0lAgxpgua1aMIjPy_biszmt5FE",
    authDomain: "picsphere-b1893.firebaseapp.com",
    projectId: "picsphere-b1893",
    storageBucket: "picsphere-b1893.appspot.com",
    messagingSenderId: "977128288795",
    appId: "1:977128288795:web:ccdb577c9d65dec028febe",
    measurementId: "G-WCFZMB2X25"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Register new user
createUserWithEmailAndPassword(auth, 'juanez1999@gmail.com', '1234567')
.then((userCredential:any) => {
	// Signed in
	const user = userCredential.user;
	console.log(user);
	// ...
})
.catch((error:any) => {
	const errorCode = error.code;
	const errorMessage = error.message;
	console.log(errorMessage);
	// ..
});

//Login user
signInWithEmailAndPassword(auth, 'juanez1999@gmail.com', '1234567')
.then((userCredential:any) => {
	// Signed in
	const user2 = userCredential.user;
	console.log(user2);
	// ...
})
.catch((error:any) => {
	const errorCode = error.code;
	const errorMessage = error.message;
});

// sendPasswordResetEmail(auth, 'juanez1999@gmail.com')
//   .then(() => {
//     // Password reset email sent!
//     // ..
//   })
//   .catch((error:any) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

//Information about the user who accessed
onAuthStateChanged(auth, (user:any) => {
	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		const uid = user.uid;
		console.log(uid);
		// ...
	} else {
		// User is signed out
		// ...
	}
});