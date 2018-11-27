import * as firebase from 'firebase'
 const config = {
    apiKey: "AIzaSyChBlDPIU9kRQerHbS0vR3KRf10GPWYT0o",
    authDomain: "messageboard-f3db6.firebaseapp.com",
    databaseURL: "https://messageboard-f3db6.firebaseio.com",
    projectId: "messageboard-f3db6",
    storageBucket: "messageboard-f3db6.appspot.com",
    messagingSenderId: "501829342818"
  };
  firebase.initializeApp(config);

export const database = firebase.database().ref('posts/');