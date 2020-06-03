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
      var token = result.credential.accessToken;
      var user = result.user;
    // ...
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      // ...
    });

  });

} ());
