<template>
  <div class="exchange-rate-main">
    <div class="exchange-rate-body">
      <div class="exchange-rate-content">
        <div class="exchange-rate-title">
          Tỷ giá <span>tốt nhất</span> trong tầm tay
        </div>
        <div class="exchange-rate-description">
          Chuyển tiền nhanh chóng trên toàn cầu. Hỗ trợ hơn 70 quốc gia với tỷ giá cạnh tranh và minh bạch, không lo phí
          phát sinh.
        </div>
        <div class="buttons-container">
          <button class="transfer-button" @click="openAccount()">Mở tài khoản ngay</button>
        </div>
      </div>
      <div class="exchange-rate-form">
        <CurrencyExchangeForm v-model:currency="currency" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import CurrencyExchangeForm from "./ExchangeRate/CurrencyExchangeForm.vue";

const emit = defineEmits(['update:currency']);

const props = defineProps({
  currency: {
    type: String,
    required: true
  }
});

const currency = ref(props.currency);

watch(
  currency,
  () => {
    emit('update:currency', currency.value);
  },
  { immediate: true }
);
const openAccount = () => {
  alert("Tính năng đang được phát triển");
};
</script>

<style scoped>
.exchange-rate-main {
  width: 100%;
}

.exchange-rate-body{
  display: flex;
  width: 100%;
  padding: 56px 0px;
  max-width: 1440px;
  margin: auto;
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
  padding: 0px 150px 0px 105px;
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
  max-width: 578px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  vertical-align: middle;
  padding: 24px 105px;
  text-align: left;
  color: #161733;
}

.exchange-rate-description img {
  width: inherit;
}


.exchange-rate-form {
  width: 565px;
  display: flex;
}

.buttons-container {
  width: 100%;
  padding: 0px 105px;
}

.transfer-button {
  align-self: stretch;
  border-radius: 90px;
  background-color: rgba(159, 232, 112, 1);
  min-height: 48px;
  padding: 12px 24px;
  color: #163300;
  border: none;
  font-family: Inter, sans-serif;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
}
</style>