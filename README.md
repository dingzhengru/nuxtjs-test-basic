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
    *  <a href="#store">store</a>
    *  <a href="#nuxt.config.js">nuxt.config.js</a>
*  <a href="#eslintrc.js">eslintrc.js</a>
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
*  這 route 跟 vue cli 不同，是直接創建 .vue 檔案，然後 nuxt 會自行幫你創建 route
*  index.vue 比較特殊，會對應到 "/" route，其他都是直接檔案名稱直接對應
*  ex: /pages/index.vue => "localhost:3000"，/pages/user/index.vue => "localhost:3000/user"
*  ex: /pages/about.vue => "localhost:3000/about"，/pages/user/about.vue => "localhost:3000/user/about"
### static
*  The static directory is directly mapped to the server root (/static/robots.txt is accessible under http://localhost:3000/robots.txt) and contains files that likely won't be changed (e.g. the favicon)
*  Example: /static/robots.txt is mapped as /robots.txt
*  此路徑名稱不可修改
*  放需要被 server 映射的檔案
### store
*  The store directory contains your Vuex Store files. The Vuex Store comes with Nuxt.js out of the box but is disabled by default. Creating an index.js file in this directory enables the store.
*  此路徑名稱不可修改
*  自己的 vuex store
*  需創建一個 index.js，除 index.js 以外的 .js 會直接對應名稱

**index.js**
``` js 
export const state = () => ({
    counter: 0  // this.store.state.counter
})

export const getters = {
    getCounter (state) {
        return state.counter // this.store.getters.getCounter
    }
}

export const mutations = {
    increment (state) {
        state.counter++ // this.store.commit('increment')
    }
}
```
**todos.js**
``` js
export const state = () => ({
    list: [] // this.store.state.todos.list
})

export const getters = {
    getList (state) {
        return state.list // this.store.getters['todos/getList']
    }
}

export const mutations = {
    add (state, todo) {
        state.list.push(todo) // this.store.commit('todos/add', todo)
    }
}
```
### nuxt.config.js
*  The nuxt.config.js file contains your Nuxt.js custom configuration.
*  此檔案名稱不可修改

## eslintrc.js
*  我自己修改後的規則
```
rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/html-indent': ['warn', 4],
    'vue/script-indent': ['warn', 4]
    'indent': ['warn', 4],
    'vue/no-trailing-spaces': 'off',
    'no-trailing-spaces': 'off',
    'object-shorthand': 'warn',
    'space-before-function-paren': ['warn', 'always'],
}
```