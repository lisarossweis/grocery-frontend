import { defineStore } from "pinia"
import Unit from '@/utils/unit'

const useProductStore = defineStore('product', {
  state: () => ({
    _products: [
      { name: 'Apple', unit: Unit.Ounce, price: 10, category: 'fruits', image: '/assets/icons/apple.svg' },
      { name: 'Orange', unit: Unit.Ounce, price: 10, category: 'fruits', image: '/assets/icons/orange.svg' },
      { name: 'Grape', unit: Unit.Ounce, price: 10, category: 'fruits', image: '/assets/icons/grape.svg' },
      { name: 'Carrot', unit: Unit.Ounce, price: 10, category: 'vegetables', image: '/assets/icons/carrot.svg' },
      { name: 'Garlic', unit: Unit.Ounce, price: 10, category: 'vegetables', image: '/assets/icons/garlic.svg' },
      { name: 'Potato', unit: Unit.Ounce, price: 5, category: 'vegetables', image: '/assets/icons/potato.svg' },
      { name: 'Green Onion', unit: Unit.Ounce, price: 0, category: 'vegetables', image: '/assets/icons/green-onion.svg' },
      { name: 'Tomato', unit: Unit.Ounce, price: 10, category: 'vegetables', image: '/assets/icons/tomato.svg' },
      { name: 'Chicken', unit: Unit.Ounce, price: 20, category: 'meat', image: '/assets/icons/chicken.svg' },
      { name: 'Fish', unit: Unit.Ounce, price: 15, category: 'fish', image: '/assets/icons/fish.svg' },
    ]
  }),
  getters: {
    products(state): Product[] {
      return state._products
    },
    getProductByCategory(state) {
      const productFilter = (categoryString: string) => {
        return state._products.filter(
          product => product.category === categoryString.toLocaleLowerCase()
        )
      }

      return productFilter
    }
  }
})

export default useProductStore
