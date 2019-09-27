import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyC0bHlChquiGOk4PnYGhkXs8RNC4vs0DzM",
    authDomain: "todoist-cdf25.firebaseapp.com",
    databaseURL: "https://todoist-cdf25.firebaseio.com",
    projectId: "todoist-cdf25",
    storageBucket: "todoist-cdf25.appspot.com",
    messagingSenderId: "737504672641",
    appId: "1:737504672641:web:06ff2e3b92e8e99f52c680"
})

export { firebaseConfig as firebase }