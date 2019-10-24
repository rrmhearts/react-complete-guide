# Webpack

Creates `bundle.js` by concatenating project files together. `App.js` along with all the other files are **transformed** by **Loaders** such as `babel-loader` and `css-loader`. These are correctly ordered and concatenated into the output file `dist/bundle.js`.

**Plugins** are global transformations that amend the bundle. For example, obscuring the source code.

### Installation
```
npm install --save-dev webpack@3
```

### Build
For devopment build, use `npm start`.
For production build, use `npm run build:prod`

### PolyFill

Adding babel-polyfill
The current setup won't support all browsers theoretically supported by React. Features like Promises and Object.assign()  are missing in older browsers - especially in IE of course.

If you need to support these browsers, you need to add a polyfill (a package which provides these features for older browsers).

The Babel docs explain how you can take advantage of Babel's built-in "Polyfill auto injecting" feature: https://babeljs.io/docs/en/babel-polyfill

Simply install two packages:

```npm install --save core-js```

and

```npm install --save regenerator-runtime ```

Change the config of your @babel/preset-env  babel preset in the .babelrc  file: 
```
"presets": [
    ["@babel/preset-env", {
        "targets": {
            "browsers": [
                "> 1%",
                "last 2 versions"
            ]
        },
        "useBuiltIns": "usage"
     }],
    ...
 ],
```

## Learn more...
1. Webpack Docs: https://webpack.js.org/concepts/
2. More about Babel: https://babeljs.io/