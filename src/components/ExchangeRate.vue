<template>
  <div class="exchange-rate-main">
    <div class="exchange-rate-content">
      <div class="exchange-rate-title">
        Tỷ giá <span>tốt nhất</span> trong tầm tay
      </div>
      <div class="exchange-rate-description">
        <img src="@/assets/images/banner_bg.png" alt="">
      </div>
    </div>
    <div class="exchange-rate-form">
      <CurrencyExchangeForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import CurrencyExchangeForm from "./CurrencyExchangeForm.vue";
</script>

<style scoped>
.exchange-rate-main {
  display: flex;
  align-items: center;
  width: 100%;
}

.exchange-rate-content {
  width: 66%;
}

.exchange-rate-title {
  max-width: 578px;
  color: var(--Neutrals-1, #161733);
  font-family: Inter, sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 600;
  line-height: 80px;
  padding: 56px 160px;
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
  width: 33%;
  display: flex;
}
</style>