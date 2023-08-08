import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faHome, faHeart, faReceipt, faBagShopping, faSearch } from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin((nuxtApp) => {
  library.add(
    faHome,
    faHeart,
    faBagShopping,
    faReceipt,
    faUser,
    faSearch
  )
  nuxtApp.vueApp.component('fa-icon', FontAwesomeIcon)
})
