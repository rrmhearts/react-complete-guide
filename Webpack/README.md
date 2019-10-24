# Webpack

Creates `bundle.js` by concatenating project files together. `App.js` along with all the other files are **transformed** by **Loaders** such as `babel-loader` and `css-loader`. These are correctly ordered and concatenated into the output file `dist/bundle.js`.

**Plugins** are global transformations that amend the bundle. For example, obscuring the source code.

### Installation
```
npm install --save-dev webpack@3
```
