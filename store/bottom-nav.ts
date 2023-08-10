import { defineStore } from 'pinia'

const useBottomNavStore = defineStore('bottomnav', {
  state: () => ({
    _bottomNavLinks: [
      { text: 'Home', link: '/', icon: 'fa-solid fa-home' },
      { text: 'Wishlist', link: '/wishlist', icon: 'fa-solid fa-heart' },
      { text: 'Bag', link: '/bag', icon: 'fa-solid fa-bag-shopping' },
      { text: 'Orders', link: '/orders', icon: 'fa-solid fa-receipt' },
      { text: 'Profile', link: '/profile', icon: 'fa-solid fa-user' },
    ]
  }),
  getters: {
    bottomNavLinks: (state) => state._bottomNavLinks
  }
})

export default useBottomNavStore
