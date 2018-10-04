
console.log('ahoy hoy!');
const API_URL = 'http://localhost:8080';
let ACCESS_TOKEN;

window.onload = function() {
  // This will still leave it exposed on client lol:
  // $.get('/clientID').then(res => {
  //   console.log(res);
  // });

  // from new Application in Auth0:
  const webAuth = new auth0.WebAuth({
    domain: 'zstout.auth0.com',
    clientID: 'mT9e05V1DhN2Us8od1dhx2AbJ2XNa0Ay',
    responseType: 'token', // removed 'token_id'
    audience: 'demo', // huh.....it didn't give us this.. or 'secure-spa-auto0'??
    scope: '', // removed
    redirectUri: window.location.href
  });

  // This fires when we log in:
  const parseHash = () => {
    webAuth.parseHash((err, res) => {
      if (res && res.accessToken) {
        window.location.hash = '';
        ACCESS_TOKEN = res.accessToken;
        console.log('we loggin in baby');
      }
    });
  };

  $('#headline').on("click", (event) => {
    fetch(`${API_URL}/resource`)
    .then(res => res.text())
    .then(data => {
      console.log(data);
    });

  });

  $('#secret').on("click", (event) => {
    const headers = ACCESS_TOKEN ? { "Authorization" : `Bearer ${ACCESS_TOKEN}` } : {};

    fetch(`${API_URL}/resource/secret`, { headers })
    .then(resp => resp.text())
    .then(data => {
      // UIUpdate.alertBox(data);
      console.log(data);
    });
  });

  $('#logoutBtn').on("click", (event) => {
    ACCESS_TOKEN = undefined;
  });

  $('#loginBtn').on("click", (event) => {
    webAuth.authorize();
  });


  parseHash();
};
