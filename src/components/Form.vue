<template>
 <section class="form-panel">
    <div class="form-container">
      <form id="a-form" class="a-form">

        <div class="form" :class="isStep1">
          <div class="form-title">
            <h2>寄送地址</h2>
          </div>
          <div class="part">
            <div class="form-row gender">
              <label>稱謂</label>
              <div class="select-wrapper">
                <select name="gender" id="gender">
                  <option value="man" selected>先生</option>
                  <option value="woman">小姐</option>
                </select>
              </div>
            </div>

            <div class="form-row name">
              <label for="name">姓名</label>
              <input type="text" id="name" placeholder="請輸入姓名">
            </div>

            <div class="form-row phone">
              <label for="phone">電話</label>
              <input type="tel" id="name" placeholder="請輸入行動電話">
            </div>

            <div class="form-row mail">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="請輸入電子郵件">
            </div>

            <div class="form-row location">
              <label>縣市</label>
              <div class="select-wrapper">
                <select name="city" id="city" required>
                  <option value="" selected disabled>請選擇縣市</option>
                  <option value="0">北部</option>
                  <option value="1">中部</option>
                  <option value="2">南部</option>
                </select>
              </div>
            </div>
            <div class="form-row adress">
              <label for="adress">地址</label>
              <input type="text" id="adress" placeholder="請輸入地址">
            </div>
          </div>
        </div>

        <div class="form" :class="isStep2">
          <div class="form-title">
            <h2>運送方式</h2>
          </div>
          <div class="part">
            <div class="form-row shipping-way">
              <div class="radio-btn">
                <input name="shipping-way" id="shipping-way1" type="radio" value="normal" checked @click="freeClick">
              </div>
              <div class="ship-way">
                <label for="shipping-way1">
                  標準運送<br>約3~7個工作天
                </label>
              </div>
              <div class="ship-price">免費</div>
            </div>

            <div class="form-row shipping-way">
              <div class="radio-btn">
                <input name="shipping-way" id="shipping-way2" type="radio" value="fast" @click="fastClick">
              </div>
              <div class="ship-way">
                <label for="shipping-way2">DHL貨運<br>48小時內送達<br></label>
              </div>
              <div class="ship-price"> $500</div>
            </div>
          </div>
        </div>

        <div class="form" :class="isStep3">
          <div class="form-title">
            <h2>付款資訊</h2>
          </div>
          <div class="part">
            <div class="form-row card-name">
              <label for="">持卡人姓名</label>
              <input id="bank-code" type="text" placeholder="John Doe">
            </div>

            <div class="form-row card-number">
              <label for="">卡號</label>
              <input id="bank-account" type="text" placeholder="1111 2222 3333 4444">
            </div>

            <div class="form-row valid-date">
              <label for="">有效期限</label>
              <input id="account-name" type="text" placeholder="MM/YY">
            </div>

            <div class="form-row secure-code">
              <label for="">CVC/CCV</label>
              <input id="acoount-name" type="text" placeholder="123">
            </div>
          </div>
        </div>

      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isStep1: "",
      isStep2: "d-none",
      isStep3: "d-none",
    };
  },
  methods: {
    changeForm(page) {
      if (page === 1) {
        this.isStep1 = "";
        this.isStep2 = "d-none";
        this.isStep3 = "d-none";
      } else if (page === 2) {
        this.isStep1 = "d-none";
        this.isStep2 = "";
        this.isStep3 = "d-none";
      } else {
        this.isStep1 = "d-none";
        this.isStep2 = "d-none";
        this.isStep3 = "";
      }
    },
    freeClick() {
      this.$emit("afterpayclick", 0);
    },
    fastClick() {
      this.$emit("afterpayclick", 500);
    },
  },
};
</script>