# full-stack-example
Full Stack Development Environment

To start working on this repository.

In backend

```bash
    npm install
    nodemon app.js
```

In frontend

Replace the `facebookAppId` in `environment.ts` and `environment.prod.ts` if you want to use your own facebook app to login.
```javascript
export const environment = {
  production : false,
  // Put your own facebook app id here
  facebookAppId : "1234567890123456"
};
```

```bash
    npm install
    ng build --watch 
```

Now you can start experimentating the full stack example !
