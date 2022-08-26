<template>
  <main class="main-container">
    <!-- step -->
    <Step ref="stepperRef"/>
    <!-- form -->
    <Form ref="formRef" @afterpayclick="payClick"/>
    <!-- shop-car -->
  <ShopCar ref="cartRef" :shipFree="shipPrice" />
     <!-- button -->
    <Button
    ref="btnRef" 
    @after="handleAfterClick"
    @before="handleBeforeClick"
    />
  </main>
</template>



<script>
import Step from './../components/Step.vue'
import ShopCar from './../components/ShopCar.vue'
import Button from './../components/Button.vue'
import Form from './../components/Form.vue'

let number = 1

export default {
  components: {
    Step,
    Form,
    Button,
    ShopCar
  },
  data () {
    return {
      shipPrice: "免費"
    }
  },
  methods: {
    handleAfterClick () {
      console.log("next")
      if (number < 3) number++
      this.$refs.stepperRef.next(number)
      this.$refs.formRef.changeForm(number)
      this.$refs.btnRef.changePage(number)
    },
    handleBeforeClick() {
      console.log("before");
      if (number > 1) number--;
      this.$refs.stepperRef.next(number);
      this.$refs.formRef.changeForm(number);
      this.$refs.btnRef.changePage(number);
    },
    payClick(money) {
      this.shipPrice = money === 0 ? "免費" : "500"
    }

  }
}
</script>

<style lang="scss" src="./../scss/style.scss"></style>




