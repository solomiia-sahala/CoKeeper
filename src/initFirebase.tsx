import firebase from 'firebase';
import 'firebase/storage';

import { firebaseConfig } from './constants/firebaseConfig';

firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();

export default firebase;
