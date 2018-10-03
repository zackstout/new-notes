## Pre-0Auth: With JWTs
- defined with a key (via `express-jwt`); when someone has both, can decode at [jwt.io](jwt.io).
- to avoid CORS error, simploy require `cors` and `app.use(cors())`.
- use JWTs to authenticate by passing our middleware as second argument to `app.get()`. Note that you must add Bearer token in Postman. With an ajax call, we specify 'Content-type' and 'accept', and/or pass a `headers` object with property 'Authorization'.
- remember the `then`-chaining pattern to apply multiple transformations to returned data on the front end.
- Note that this uses two URLs, one for the API calls, one for Authentication.

## With 0Auth:
- Uses JWT middleware, but adds `audience` and `issuer` fields to increase security.
- We no longer need our custom `auth.js` file.
