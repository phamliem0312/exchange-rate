<template>
  <div class="currency-field">
    <div class="field-header">
      <label class="field-label">{{ label }}</label>
    </div>
    <div class="input-container">
      <div class="currency-selector">
        <div class="currency-display">
          <img :src="flagUrl" class="currency-flag" :alt="currency" />
          <span class="currency-code">{{ currency }}</span>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff206fd095afcafc6db14e56525a1546dcc92cd6?placeholderIfAbsent=true&apiKey=ffc8e6a5cacb4bf8968526b09617ce7d"
          class="dropdown-icon"
          alt="Select currency"
        />
      </div>
      <input
        type="text"
        :value="value"
        class="amount-input"
        inputmode="numeric"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrencyInput",
  props: {
    currency: {
      type: String,
      required: true,
    },
    flagUrl: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.currency-field {
  border-radius: 4px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}

.field-header {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: #161733;
}

.field-label {
  color: #161733;
  align-self: stretch;
  margin: auto 0;
}

.input-container {
  align-items: center;
  border-radius: 8px;
  border: 2px solid var(--Neutrals-4, #e6e8ec);
  display: flex;
  margin-top: 4px;
  padding: 16px;
  gap: 16px;
  font-size: 20px;
  line-height: 1.4;
  background-color: #fff;
}

.currency-selector {
  border-radius: 4px;
  background-color: rgba(244, 245, 246, 1);
  align-self: stretch;
  display: flex;
  margin: auto 0;
  padding: 8px;
  align-items: center;
  gap: 9px;
  color: #161733;
  justify-content: space-between;
  width: 124px;
}

.currency-display {
  align-self: stretch;
  display: flex;
  margin: auto 0;
  align-items: center;
  gap: 4px;
}

.currency-flag {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 28px;
  align-self: stretch;
  margin: auto 0;
}

.currency-code {
  color: #161733;
  text-overflow: ellipsis;
  align-self: stretch;
  margin: auto 0;
}

.dropdown-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  align-self: stretch;
  margin: auto 0;
}

.amount-input {
  color: #b1b5c3;
  text-align: right;
  flex: 1;
  border: none;
  outline: none;
  font-size: 20px;
  font-family: inherit;
  font-weight: 600;
  background: transparent;
}

@media (max-width: 991px) {
  .currency-field,
  .field-header,
  .input-container {
    max-width: 100%;
  }
}
</style>
