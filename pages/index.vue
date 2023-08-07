<template>
  <div class="container">
    <div class="topbar">
      <div class="logo">GiaGrocery</div>
      <div class="searchbox">
        <input class="input" type="search">
        <i class="fa fa-search"></i>
      </div>
    </div>

    <div class="categories">
      <h3 class="categories-text">Categories &gt;</h3>
      <div
        class="category"
        v-for="(category, index) in categories"
        :key="index"
        :class="category.title.toLowerCase()"
        @click="showProductByCategory(category.title)"
      >
        <img :src="category.icon" :alt="category.title" />
        <p class="category-title">{{ category.title }}</p>
      </div>
    </div>

    <div class="products">
      <h3 class="products-text">Products &gt;</h3>
      <div class="product" v-for="(product, index) in products" :key="index">
        <img class="product-image" :src="product.image" :alt="product.name" />
        <div class="product-detail">
          <div class="product-name">
            <p>{{ product.name }}</p>
          </div>
          <div class="product-price">
            <p>{{ currencySymbol }} {{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-nav">
      <div class="tab">
        <i class="fa fa-home"></i>
      </div>
      <div class="tab">
        <i class="fa fa-hat-chef"></i>
      </div>
      <div class="tab">
        <i class="fa fa-bucket"></i>
      </div>
      <div class="tab">
        <i class="fa fa-receipt"></i>
      </div>
      <div class="tab">
        <i class="fa fa-user"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currencySymbol: 'Rp',
      categories: [
        { title: 'Vegetables', link: '/vegetables', icon: '/assets/icons/vegetables.svg' },
        { title: 'Meat', link: '/meat', icon: '/assets/icons/meat.svg' },
        { title: 'Fruits', link: '/fruits', icon: '/assets/icons/fruits.svg' },
        { title: 'Fish', link: '/fish', icon: '/assets/icons/fish.svg' },
      ],
      products: [
        { name: 'Apple', price: 10, category: 'fruits', image: '/assets/icons/apple.svg' },
        { name: 'Orange', price: 10, category: 'fruits', image: '/assets/icons/orange.svg' },
        { name: 'Grape', price: 10, category: 'fruits', image: '/assets/icons/grape.svg' },
        { name: 'Carrot', price: 10, category: 'vegetables', image: '/assets/icons/carrot.svg' },
        { name: 'Garlic', price: 10, category: 'vegetables', image: '/assets/icons/garlic.svg' },
        { name: 'Potato', price: 5, category: 'vegetables', image: '/assets/icons/potato.svg' },
        { name: 'Green Onion', price: 0, category: 'vegetables', image: '/assets/icons/green-onion.svg' },
        { name: 'Tomato', price: 10, category: 'vegetables', image: '/assets/icons/tomato.svg' },
        { name: 'Chicken', price: 20, category: 'meat', image: '/assets/icons/chicken.svg' },
        { name: 'Fish', price: 15, category: 'fish', image: '/assets/icons/fish.svg' },
      ],
      unfileteredProducts: []
    }
  },
  methods: {
    showProductByCategory(category) {
      if (this.products.length !== this.unfileteredProducts.length && this.unfileteredProducts.length !== 0) {
        this.products = this.unfileteredProducts.filter(product => product.category == category.toLowerCase())
      } else {
        this.unfileteredProducts = this.products
        this.products = this.products.filter(product => product.category == category.toLowerCase())
      }
    }
  }
}
</script>

<style>
* {
  font-family: sans-serif, "Roboto";
}

.categories, .products, .topbar, .bottom-nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 10px;
}

.categories, .products {
  justify-content: space-evenly;
  gap: 3px;
}

.topbar, .bottom-nav {
  justify-content: space-between;
}

.category, .product {
  flex-grow: 1;
  border: 2px solid;
  border-radius: 5px;
}

.category p {
  text-align: center;
}

.vegetables {
  background-color: #d3ffce;
  border-color: #d3ffce;
}

.meat {
  background-color: #ff7f7f;
  border-color: #ff7f7f;
}

.fruits {
  background-color: #ff7f50;
  border-color: #ff7f50;
}

.fish {
  background-color: #66cdaa;
  border-color: #66cdaa;
}

.product {
  border-color: #f0f8ff;
}

.product:hover {
  border-color: #b4eeb4;
}

.category img, .product img {
  display: inline-block;
  width: 5em;
}

.category img {
  align-self: center;
}

.topbar {
  padding: 3px 3px 5px;
}

.categories-text, .products-text {
  flex-basis: 100%;
}

.logo {
  font-weight: bolder;
}
</style>
