<template>
  <section class="rate-section">
    <div class="rate-title">Tỷ giá đảm bảo trong 2h</div>
    <div class="rate-display">
      <span class="rate-value">1 {{ suggestionFromCurrency }} = {{ suggestionCurrencyValue }} {{ suggestionToCurrency }}</span>
      <img
        :src="lockedIcon"
        class="info-icon"
        alt="Information"
      />
    </div>
  </section>
</template>

<script setup>
import lockedIcon from "@/assets/icons/locked.png";

defineProps({
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
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
}

.rate-display {
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid var(--Neutrals-6, #e6e8ec);
  display: flex;
  margin-top: 4px;
  min-height: 76px;
  padding: 0px 16px;
  gap: 10px;
  font-size: 20px;
  color: #163300;
  line-height: 1.4;
  flex-wrap: wrap;
  background-color: #f4f5f6;
}

.rate-value {
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.info-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  align-self: stretch;
  margin: auto 0;
}

@media (max-width: 991px) {
  .rate-section,
  .rate-display {
    max-width: 100%;
  }
}
</style>
