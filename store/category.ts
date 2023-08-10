import { defineStore } from "pinia"

const useCategoryStore = defineStore('category', {
  state: () => ({
    _categories: [
      { title: 'All', link: '/all', icon: '/assets/icons/groceries.svg' },
      { title: 'Vegetables', link: '/vegetables', icon: '/assets/icons/vegetables.svg' },
      { title: 'Meat', link: '/meat', icon: '/assets/icons/meat.svg' },
      { title: 'Fruits', link: '/fruits', icon: '/assets/icons/fruits.svg' },
      { title: 'Fish', link: '/fish', icon: '/assets/icons/fish.svg' },
    ]
  }),
  getters: {
    categories(state): Category[] {
      return state._categories
    }
  }
})

export default useCategoryStore
