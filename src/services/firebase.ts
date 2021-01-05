import * as firebase from 'firebase';

// TODO: fill in your firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCEC4qgqgMsHXTWo_tyCCTvZ36LOCcJklA",
    authDomain: "crwn-db-a6609.firebaseapp.com",
    projectId: "crwn-db-a6609",
    storageBucket: "crwn-db-a6609.appspot.com",
    messagingSenderId: "546307313760",
    appId: "1:546307313760:web:77fe05d46fa096ae0fb305"
};

firebase.initializeApp(firebaseConfig);

export default firebase;