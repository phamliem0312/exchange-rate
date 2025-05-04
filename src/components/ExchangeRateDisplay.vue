<template>
  <section class="rate-section">
    <h2 class="rate-title">Tỷ giá đảm bảo trong 2h</h2>
    <div class="rate-display">
      <span class="rate-value">1 USD = 25,822.60 VND</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/12fca97a141ac7fd63301fd3d045da9faf51adff?placeholderIfAbsent=true&apiKey=ffc8e6a5cacb4bf8968526b09617ce7d"
        class="info-icon"
        alt="Information"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "ExchangeRateDisplay",
};
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
  color: #23262f;
  font-size: 16px;
  font-weight: 600;
}

.rate-display {
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid var(--Neutrals-6, #e6e8ec);
  display: flex;
  margin-top: 4px;
  min-height: 76px;
  padding: 24px 16px;
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
