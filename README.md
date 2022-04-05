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

  `
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://www.npmjs.com/package/vue-sweetalert2
    'vue-sweetalert2/nuxt',
  ],
  `

  
### `Add File wdAlert.js in plugins Directory`

  `
  plugins: [
    '~/plugins/wdAlert.js',
  ],
  `
  
### `Add plugins wdAlert.js in nuxt.config.js`

  `
  plugins: [
    '~/plugins/wdAlert.js',
  ],
  `

### `Call with this functions`

    `
    // this.$wdAlert.alertSuccess("test", "test จ้า test 2");
    // this.$wdAlert.alertSuccess("test", "test จ้า test 2", 3000);
    // this.$wdAlert.alertSuccessConfirm("test", "test จ้า test 2");
    // this.$wdAlert.alertSuccessConfirm("test", "test จ้า test 2","OK จ้า");

    // this.$wdAlert.alertError("test", "test จ้า test 2");
    // this.$wdAlert.alertError("test", "test จ้า test 2", 3000);
    // this.$wdAlert.alertErrorConfirm("test", "test จ้า test 2");
    // this.$wdAlert.alertErrorConfirm("test", "test จ้า test 2","OK จ้า");
    `