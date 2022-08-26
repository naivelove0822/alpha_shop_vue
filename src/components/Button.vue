<template>
  
   <section class="btn-panel">
    <div class="btn-control" :class="isBtn">
      <button class="btn btn-outline" @click.stop.prevent="prePage">上一步</button>
      <button class="btn btn-primary" @click.stop.prevent="nextPage">{{ btnText }}</button>
    </div>
  </section>

</template>

<script>
export default {
  data() {
    return {
      isBtn: "active",
      btnText: "下一步",
    }
  },
  methods: {
    nextPage() {
      this.$emit("after")
    },
    prePage() {
      this.$emit("before")
    },
    changePage(page) {
      this.isBtn = page === 1 ? "active" : "",
      this.btnText = page === 3 ? "送出申請" : "下一步"
    }
  }
}
</script>

