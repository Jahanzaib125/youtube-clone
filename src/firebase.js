import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCh_SKJadvHsP8rlMTxGJJYLjk3axjdOpU',
  authDomain: 'clone-9b6bf.firebaseapp.com',
  projectId: 'clone-9b6bf',
  storageBucket: 'clone-9b6bf.appspot.com',
  messagingSenderId: '446843253172',
  appId: '1:446843253172:web:fe53b814f7112f95b342e1',
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
