<template>
  <section class="rate-section">
    <div class="rate-title"><img
        :src="lockedIcon"
        class="info-icon"
        alt="Information"
      /> <span>Tỷ giá đảm bảo trong 2h</span></div>
    <div class="rate-display">
      <span class="rate-value">1 {{ suggestionFromCurrency }} = {{ formatNumber(suggestionCurrencyValue, 2) }} {{ suggestionToCurrency }}</span>
    </div>
  </section>
</template>

<script setup>
import lockedIcon from "@/assets/icons/locked.png";
import { formatNumber } from "../../utils/number";

const props = defineProps({
  suggestionFromCurrency: {
    type: String,
    default: "",
  },
  suggestionCurrencyValue: {
    type: Number,
    default: 0,
  },
  suggestionToCurrency: {
    type: String,
    default: "",
  },
});

const lockedIconPath = lockedIcon;

defineExpose({
  lockedIconPath,
});
</script>

<style scoped>
.rate-section {
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}

.rate-title {
  color: var(--Neutrals-2, #23262F);
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rate-display {
  display: flex;
  padding: 4px 0px;
  font-size: 14px;
  color: #163300;
  text-align: center;
}

.rate-value {
  margin: auto;
  padding: 8px 16px;
  background-color: #F4F5F6;
  border-radius: 24px;
}

.info-icon {
  width: 14px;
}

@media (max-width: 991px) {
  .rate-section,
  .rate-display {
    max-width: 100%;
  }
}
</style>
