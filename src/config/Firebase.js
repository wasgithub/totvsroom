  import firebase from "firebase";
  
  const inicializaFirebase = () => {
      // Your web app's Firebase configuration
      let firebaseConfig = {
        apiKey: "AIzaSyDAS74x2BFRV2JSCVLf2SdShtUQ-addLoY",
        authDomain: "totvsroom-85098.firebaseapp.com",
        databaseURL: "https://totvsroom-85098.firebaseio.com",
        projectId: "totvsroom-85098",
        storageBucket: "totvsroom-85098.appspot.com",
        messagingSenderId: "703945921691",
        appId: "1:703945921691:web:1e2ee183be9835f797623e",
        measurementId: "G-9KT1ECCGYB"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  }

  export default inicializaFirebase;