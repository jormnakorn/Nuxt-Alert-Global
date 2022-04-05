# Nuxt-Alert-Global

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

### `Add modules vue-sweetalert2/nuxt in nuxt.config.js`

```bash
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://www.npmjs.com/package/vue-sweetalert2
    'vue-sweetalert2/nuxt',
  ],
```

  
### `Add File wdAlert.js in plugins Directory`
  
### `Add plugins wdAlert.js in nuxt.config.js`

```bash
  plugins: [
    '~/plugins/wdAlert.js',
  ],
```

### `Call with this functions`

```bash
    // this.$wdAlert.alertSuccess("Title", "Text / Detail");
    // this.$wdAlert.alertSuccess("Title", "Text / Detail", 3000);
    // this.$wdAlert.alertSuccessConfirm("Title", "Text / Detail");
    // this.$wdAlert.alertSuccessConfirm("Title", "Text / Detail","OK จ้า");

    // this.$wdAlert.alertError("Title", "Text / Detail");
    // this.$wdAlert.alertError("Title", "Text / Detail", 3000);
    // this.$wdAlert.alertErrorConfirm("Title", "Text / Detail");
    // this.$wdAlert.alertErrorConfirm("Title", "Text / Detail","OK จ้า");
```