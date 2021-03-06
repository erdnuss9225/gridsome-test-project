// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/styles/global.css'

// const data =  {
//   language: "baba"
// }

export default function (Vue, { 
  router, 
  head, 
  isClient,
  appOptions
}) {
  appOptions.data.language = "de"
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}