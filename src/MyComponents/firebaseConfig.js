import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/app';
import {getDatabase} from 'firebase/database';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAtCQYxr4HVS7bgCYhkSfYM9DK0LALmGp8",
    authDomain: "portfolio-639d8.firebaseapp.com",
    databaseURL: "https://portfolio-639d8-default-rtdb.firebaseio.com",
    projectId: "portfolio-639d8",
    storageBucket: "portfolio-639d8.appspot.com",
    messagingSenderId: "821100706842",
    appId: "1:821100706842:web:ee307750dad0ca612b65a3",
    measurementId: "G-6DYNMJEFFC"
};

firebase.initializeApp(config);
export default firebase;
