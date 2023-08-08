// application state
import Unit from '@/utils/unit'

export const useCategories = () => useState<Category[]>('categories', () => [
  { title: 'All', link: '/all', icon: '/assets/icons/groceries.svg' },
  { title: 'Vegetables', link: '/vegetables', icon: '/assets/icons/vegetables.svg' },
  { title: 'Meat', link: '/meat', icon: '/assets/icons/meat.svg' },
  { title: 'Fruits', link: '/fruits', icon: '/assets/icons/fruits.svg' },
  { title: 'Fish', link: '/fish', icon: '/assets/icons/fish.svg' },
])

export const useProducts = () => useState<Product[]>('products', () => [
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
])

export const useCurrencySymbol = () => useState<string>('currencySymbol', () => 'Rp')

export const useBottomNavLinks = () => useState('bottomNavLinks', () => [
  { text: 'Home', link: '/', icon: 'fa-solid fa-home' },
  { text: 'Wishlist', link: '/wishlist', icon: 'fa-solid fa-heart' },
  { text: 'Bag', link: '/bag', icon: 'fa-solid fa-bag-shopping' },
  { text: 'Orders', link: '/orders', icon: 'fa-solid fa-receipt' },
  { text: 'Profile', link: '/profile', icon: 'fa-solid fa-user' },
])
