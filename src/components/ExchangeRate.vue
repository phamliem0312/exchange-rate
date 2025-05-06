<template>
  <div class="exchange-rate-main">
    <div class="exchange-rate-content">
      <div class="exchange-rate-title">
        Tỷ giá <span>tốt nhất</span> trong tầm tay
      </div>
      <div class="exchange-rate-description">
        <img :src="banner_bg" alt="">
      </div>
    </div>
    <div class="exchange-rate-form">
      <CurrencyExchangeForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import banner_bg from "@/assets/images/banner_bg.png";
import CurrencyExchangeForm from "./ExchangeRate/CurrencyExchangeForm.vue";
</script>

<style scoped>
.exchange-rate-main {
  display: flex;
  width: 100%;
  padding-top: 56px;
}

.exchange-rate-content {
  width: calc(95% - 565px);
}

.exchange-rate-title {
  max-width: 578px;
  color: var(--Neutrals-1, #161733);
  font-family: Inter, sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 600;
  line-height: 80px;
  padding: 0px 140px;
}

.exchange-rate-title span {
  color: var(--Secondary-2, #163300);
  font-family: Inter, sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 600;
  line-height: 80px;
}

.exchange-rate-description {
  width: 100%;
}

.exchange-rate-description img {
  width: inherit;
}


.exchange-rate-form {
  width: 565px;
  display: flex;
}
</style>