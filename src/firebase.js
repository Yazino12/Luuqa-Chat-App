import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDZh4vmMsCZ53HWHd_88eYwAubOl_n8qgg",
    authDomain: "luuqa-8fd37.firebaseapp.com",
    projectId: "luuqa-8fd37",
    storageBucket: "luuqa-8fd37.appspot.com",
    messagingSenderId: "1017668902485",
    appId: "1:1017668902485:web:75cd2a3bc7789664e4fedc"
  }).auth();