import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "",
    authDomain: "revents-49091.firebaseapp.com",
    databaseURL: "https://revents-49091.firebaseio.com",
    projectId: "revents-49091",
    storageBucket: "revents-49091.appspot.com",
    messagingSenderId: "779466494539",
    appId: "1:779466494539:web:5aef5b8ecacf1b9d8273ce"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.firestore()

  export default firebase