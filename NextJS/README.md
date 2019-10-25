# NextJS

With Next.js, server rendering React applications has never been easier, no matter where your data is coming from.

Loads `pages` by their folder names. There are two routes here: `/` which corresponds to `index.js` and `/auth` which corresponds to `auth/index.js`

### Development build
`npm run dev`

### Production Build
In order to run a development build
```
npm build
npm start
```

The development build creates the `.next` folder. The entire project needs to be deployed though, it needs `node_modules/` and other files.