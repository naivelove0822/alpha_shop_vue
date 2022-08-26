<template>
  <section class="shopcar-panel">
    <h2>購物籃</h2>
    <div class="card-list">

      <div class="card" v-for="product in products" :key="product.id">
        <img :src="product.image" alt="">
        <div class="card-info">
          <h5 class="card-name">{{ product.name }}</h5>
          <div class="card-number">
            <p hidden>{{ product.singlePrice }}</p>
            <span @click="clickminus(product.id)">
            <i class="fas fa-minus-circle"></i>
            </span>
            <p>{{product.amount}}</p>
            <span @click="clickPlus(product.id)">
            <i class="fas fa-plus-circle"></i>
            </span>
          </div>
          <h5 class="price">{{ product.price }}</h5>
        </div>
      </div>

      <hr>
      <div class="shipping-free">
        <p class="shipping-free-title">運費</p>
        <p class="shipping-free-price">{{ shipFree }}</p>
      </div>
      <hr>
      <div class="total-cost">
        <p class="total-cost-title">小記</p>
        <p class="total-cost-price">{{caculateCost()}}</p>
      </div>
    </div>
  </section>
</template>

<script>
const productInfo = [
  {
    id: 1,
    name: "破壞補丁修身牛仔褲",
    price: "$3,999",
    singlePrice: "3999",
    amount: 1,
    image: "https://img.onl/9HOcgr"
  },
  {
    id: 2,
    name: "刷色直筒牛仔褲",
    price: "$1,299",
    singlePrice: "1299",
    amount: 1,
    image: "https://img.onl/Kcu4Uz"
  }
]


export default {
  props: {
    shipFree: {
      type: String,
      default: '0'
    }

  },
  data () {
    return {
      products: []
    }
  },
  created () {
    this.ftechProducts()
  },
  methods: {
    ftechProducts() {
      this.products = productInfo
    },
    clickPlus(id) {
      console.log(id)
      this.products[id - 1].amount++
      let mutiplePrice = this.products[id - 1].singlePrice * this.products[id - 1].amount
      this.products[id - 1].price = "$" + mutiplePrice.toLocaleString("en-US")
    },
    clickminus(id) {
      console.log(id)
      if (this.products[id - 1].amount > 0) {
        this.products[id - 1].amount--
      }
      let mutiplePrice = this.products[id - 1].singlePrice * this.products[id - 1].amount
      this.products[id - 1].price = "$" + mutiplePrice.toLocaleString("en-US")
    },
    caculateCost() {
      let totalCost = 0
      for (let i = 0; i < this.products.length; i++) {
        totalCost += this.products[i].singlePrice * this.products[i].amount
      }
      if (this.shipFree !== "免費") totalCost += 500
      return "$" + totalCost.toLocaleString("en-US")
    }
  },
}
</script>
 