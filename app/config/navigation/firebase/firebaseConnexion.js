import firebase from 'firebase';
import 'firebase/firestore';


let firebaseConfig = {
    apiKey: "AIzaSyCs6ZVLU8g5jBvMZlhd2D_lIyYn2X-n-SM",
    authDomain: "krimaccess.firebaseapp.com",
    databaseURL: "https://krimaccess.firebaseio.com",
    projectId: "krimaccess",
    storageBucket: "krimaccess.appspot.com",
    messagingSenderId: "655560231224",
    appId: "1:655560231224:web:2b39bee1c718b62d4399cd",
    measurementId: "G-0CZFZ5P3Z6"     
};


// Initialise firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
