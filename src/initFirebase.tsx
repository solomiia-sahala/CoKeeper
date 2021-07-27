import firebase from 'firebase';

import {firebaseConfig } from './constants/firebaseConfig';

firebase.initializeApp(firebaseConfig);

export default firebase;
