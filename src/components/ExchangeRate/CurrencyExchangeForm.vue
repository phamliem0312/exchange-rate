<template>
  <div class="exchange-container">
    <SuggestionExchangeRate :suggestionCurrency="suggestionCurrency"
      :suggestionCurrencyValue="suggestionCurrencyValue" />

    <div class="exchange-form">
      <CurrencyInput v-model:currency="sourceCurrency" label="Số tiền cần chuyển" v-model:value="sourceValue" />

      <div class="divider">
        <div class="timeline-line"></div>
        <img :src="exchangeIcon" class="divider-image" alt="" />
      </div>

      <CurrencyInput v-model:currency="targetCurrency" label="Số tiền nhận về" v-model:value="targetValue" />
    </div>
    <TransferPurpose />
    <div class="buttons-container">
      <button class="transfer-button">Chuyển tiền</button>
      <button class="compare-button">So sánh phí</button>
    </div>
  </div>
</template>

<script setup>
import SuggestionExchangeRate from "./SuggestionExchangeRate.vue";
import CurrencyInput from "./CurrencyInput.vue";
import exchangeIcon from "@/assets/icons/exchange.png";
import TransferPurpose from "./TransferPurpose.vue";
import { watch, ref } from "vue";
import { fetchExchangeRate } from "@/services/api";

const sourceCurrency = ref("USD");
const targetCurrency = ref("VND");
const sourceValue = ref(0);
const targetValue = ref(0);
const suggestionCurrency = ref("USD");
const suggestionCurrencyValue = ref(23000);

watch(
  sourceValue,
  async () => {
    const amount = sourceValue.value;

    try {
      const response = await fetchExchangeRate(amount, sourceCurrency.value, targetCurrency.value);

      targetValue.value = response.data.amount;
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.exchange-container {
  border-radius: 24px;
  box-shadow: 0px 40px 32px -24px rgba(15, 15, 15, 0.12);
  padding: 32px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 600;
  background-color: #fff;
  height: fit-content;
  width: 100%;
}

.exchange-form {
  margin-top: 24px;
  width: 100%;
}

.divider {
  position: relative;
  margin: 24px 0px 12px 0px;
}

.divider-image {
  aspect-ratio: 12.5;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 9999px;
  position: sticky;
  height: 36px;
}

.timeline-line {
  position: absolute;
  top: 18px;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #E6E8EC;
}

.buttons-container {
  transform: rotate(3.141592653589793rad);
  display: flex;
  margin-top: 24px;
  width: 100%;
  align-items: start;
  gap: 8px;
  text-align: center;
  flex-wrap: wrap;
}

.transfer-button {
  align-self: stretch;
  transform: rotate(3.141592653589793rad);
  border-radius: 90px;
  background-color: rgba(159, 232, 112, 1);
  min-height: 48px;
  padding: 12px 24px;
  color: #163300;
  flex: 1;
  border: none;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
}

.compare-button {
  align-self: stretch;
  transform: rotate(3.141592653589793rad);
  border-radius: 90px;
  min-height: 48px;
  padding: 12px 24px;
  flex: 1;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
  color: #23262f;
  border: 2px solid var(--Neutrals-6, #e6e8ec);
  font-size: 16px;
}

.purpose-section {
  border-radius: 4px;
  display: flex;
  margin-top: 24px;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}

.purpose-header {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: #161733;
}

.purpose-label {
  color: #161733;
  align-self: stretch;
  margin: auto 0;
}

.purpose-input {
  align-items: center;
  border-radius: 8px;
  border: 2px solid var(--Neutrals-4, #e6e8ec);
  display: flex;
  margin-top: 4px;
  min-height: 76px;
  padding: 0px 16px;
  gap: 16px;
  font-size: 16px;
  color: #b1b5c3;
  line-height: 1.4;
  background-color: #fff;
}

.placeholder-text {
  color: #b1b5c3;
  text-overflow: ellipsis;
  align-self: stretch;
  margin: auto 0;
  flex: 1;
}

.dropdown-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  align-self: stretch;
  margin: auto 0;
}

@media (max-width: 991px) {
  .exchange-container {
    padding: 20px;
  }

  .exchange-form {
    max-width: 100%;
  }

  .divider-image {
    max-width: 100%;
  }

  .buttons-container {
    max-width: 100%;
  }

  .transfer-button,
  .compare-button {
    padding-left: 20px;
    padding-right: 20px;
  }

  .purpose-section,
  .purpose-header,
  .purpose-input {
    max-width: 100%;
  }
}
</style>
