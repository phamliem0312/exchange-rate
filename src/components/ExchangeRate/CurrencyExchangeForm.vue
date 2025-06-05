<template>
  <div class="exchange-container">
    <SuggestionExchangeRate :suggestionFromCurrency="targetCurrency" :suggestionCurrencyValue="suggestionCurrencyValue"
      :suggestionToCurrency="sourceCurrency" />

    <div class="exchange-form">
      <div class="field-header">
        <label class="field-label">Số tiền cần chuyển</label>
      </div>
      <CurrencyInput v-model:currency="sourceCurrency" v-model:value="sourceValue" />
      <div class="divider">
        <div class="timeline-line"></div>
        <img :src="exchangeIcon" class="divider-image" alt="" />
      </div>

      <div class="field-header">
        <label class="field-label">Số tiền nhận về</label>
      </div>
      <CurrencyInput v-model:currency="targetCurrency" v-model:value="targetValue" :isDisabled="true"/>
    </div>
    <TransferPurpose />
    <div class="buttons-container">
      <button class="transfer-button" @click="transfer()">Chuyển tiền</button>
      <button class="compare-button" @click="scrollToTarget()">So sánh phí</button>
    </div>
  </div>
  <SupportForm v-model:showPopup="showPopup" />
</template>

<script setup>
import SuggestionExchangeRate from "./SuggestionExchangeRate.vue";
import CurrencyInput from "./CurrencyInput.vue";
import SupportForm from "./SupportForm.vue";
import exchangeIcon from "@/assets/icons/exchange.png";
import TransferPurpose from "./TransferPurpose.vue";
import { watch, ref } from "vue";
import { getBestExchangeRate } from "@/services/api";

const emit = defineEmits(['update:currency']);

const props = defineProps({
  currency: {
    type: String,
    required: true
  }
});

const sourceCurrency = ref("VND");
const targetCurrency = ref(props.currency);
const sourceValue = ref(0);
const targetValue = ref(0);
const suggestionCurrencyValue = ref(1);
const suggestionBankCode = ref(null);
const isUpdateSource = ref(false);
const isUpdateTarget = ref(false);
const showPopup = ref(false);

watch(sourceValue, () => {
  if(isUpdateTarget.value) {
    isUpdateTarget.value = false;
    return;
  }
  if (suggestionCurrencyValue.value === 0) {
    targetValue.value = 0;
    return;
  }
  isUpdateSource.value = true;
  
  targetValue.value = sourceValue.value / suggestionCurrencyValue.value;
  
  isUpdateSource.value = false;
});

watch(targetValue, () => {
  if(isUpdateSource.value) {
    isUpdateSource.value = false;
    return;
  }
  if (suggestionCurrencyValue.value === 0) {
    sourceValue.value = 0;
    return;
  }
  isUpdateTarget.value = true;

  sourceValue.value = targetValue.value * suggestionCurrencyValue.value;

  isUpdateTarget.value = false;
});

const setBestExchangeRate = async () => {
  getBestExchangeRate(targetCurrency.value, sourceCurrency.value)
    .then((response) => {
      suggestionCurrencyValue.value = response.exchangeRate ?? 1;
      suggestionBankCode.value = response.bankCode ?? null;
    })
    .catch((error) => {
      suggestionCurrencyValue.value = 0;
      suggestionBankCode.value = null;
  
      console.error("Error fetching exchange rate:", error);
      alert("Không tìm thấy tỷ giá phù hợp");
    });
};

const scrollToTarget = () => {
  const element = document.querySelector('.fee-comparison');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

const transfer = () => {
  showPopup.value = true;
};

watch(
  targetCurrency,
  async () => {
    setBestExchangeRate();
    emit('update:currency', targetCurrency.value);
  },
  { immediate: true }
);

watch(
  suggestionCurrencyValue,
  () => {
      isUpdateSource.value = true;
      
      targetValue.value = sourceValue.value / suggestionCurrencyValue.value;
      
      isUpdateSource.value = false;
    });
</script>

<style scoped>
.field-header {
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 14px;
  color: #161733;
  padding: 4px 0px 6px 0px;
}

.field-label {
  color: #161733;
  align-self: stretch;
  margin: auto 0;
}

.exchange-container {
  border-radius: 24px;
  box-shadow: 0 0 15px 10px rgb(0 0 0 / 20%);
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
  margin-top: 8px;
  width: 100%;
}

.divider {
  position: relative;
  margin: 4px 0px 0px 0px;
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
