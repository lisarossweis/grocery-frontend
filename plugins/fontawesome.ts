import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faHome, faHeart, faReceipt, faBagShopping, faSearch, faClose } from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin((nuxtApp) => {
  library.add(
    faHome,
    faHeart,
    faBagShopping,
    faReceipt,
    faUser,
    faSearch,
    faClose
  )
  nuxtApp.vueApp.component('fa-icon', FontAwesomeIcon)
})
