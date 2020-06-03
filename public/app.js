(function() {

  var firebaseConfig = {
    apiKey: "AIzaSyCWCA2KSAZ-lAXAggKpg-hsMuNlA6CyN60",
    authDomain: "pencilproject-b9ef8.firebaseapp.com",
    databaseURL: "https://pencilproject-b9ef8.firebaseio.com",
    projectId: "pencilproject-b9ef8",
    storageBucket: "pencilproject-b9ef8.appspot.com",
  };
  firebase.initializeApp(firebaseConfig);

  var provider = new firebase.auth.GoogleAuthProvider();

  const loginBtn = document.getElementById('btnLogin');

  loginBtn.addEventListener('click', e => {

    const auth = firebase.auth();

    const promise = auth.signInWithPopup(provider);

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
    // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

  });

} ());