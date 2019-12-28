# nuxt-test

## Build Setup

``` bash
# create nuxt init project
npx create-nuxt-app <project-name>

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

*  <a href="#檔案目錄結構">檔案目錄結構</a>
    *  <a href="#assets">assets</a>
    *  <a href="#components">components</a>
    *  <a href="#layouts">layouts</a>
    *  <a href="#middleware">middleware</a>
    *  <a href="#pages">pages</a>
    *  <a href="#static">static</a>
    *  <a href="store">store</a>
    *  <a href="#nuxt.config.js">nuxt.config.js</a>
    *  <a href="#package.json">package.json</a>
*  <a href="#預設">預設</a>
*  <a href="#預設">預設</a>

## 檔案目錄結構
*  來自官方教學: https://nuxtjs.org/guide/directory-structure
### assets
*  The assets directory contains your un-compiled assets such as Stylus or Sass files, images, or fonts.
*  需要被 server 映射的話，放 static
### components
*  The components directory contains your Vue.js Components. You can't use either asyncData or fetch in these components.
*  自己的 vue components
### layouts
*  The layouts directory includes your application layouts. Layouts are used to change the look and feel of your page (for example by including a sidebar).
*  此路徑名稱不可修改
### middleware
*  The middleware directory contains your Application Middleware. Middleware lets you define custom functions that can be run before rendering either a page or a group of pages (layouts).
### pages
*  The pages directory contains your Application Views and Routes. The framework reads all the .vue files inside this directory and creates the application router.
*  此路徑名稱不可修改
### static
*  The static directory is directly mapped to the server root (/static/robots.txt is accessible under http://localhost:3000/robots.txt) and contains files that likely won't be changed (e.g. the favicon)
*  Example: /static/robots.txt is mapped as /robots.txt
*  此路徑名稱不可修改
*  放需要被 server 映射的檔案
### store
*  The store directory contains your Vuex Store files. The Vuex Store comes with Nuxt.js out of the box but is disabled by default. Creating an index.js file in this directory enables the store.
*  自己的 vuex store
*  此路徑名稱不可修改
### nuxt.config.js
*  The nuxt.config.js file contains your Nuxt.js custom configuration.
*  此檔案名稱不可修改