import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCZgx1NSVPO8pkp7Qiy6jggGfOiXuMVHaY',
  authDomain: 'clone-ac62f.firebaseapp.com',
  projectId: 'clone-ac62f',
  storageBucket: 'clone-ac62f.appspot.com',
  messagingSenderId: '569412099886',
  appId: '1:569412099886:web:d6a2bb6b0a28f5f85ea4bf',
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
