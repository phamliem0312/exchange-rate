<template>
  <div class="exchange-container">
    <ExchangeRateDisplay />

    <div class="exchange-form">
      <CurrencyInput
        :currency="'USD'"
        :flag-url="'https://cdn.builder.io/api/v1/image/assets/TEMP/56b789734e043c212a2eb8005282783146d263cd?placeholderIfAbsent=true&apiKey=ffc8e6a5cacb4bf8968526b09617ce7d'"
        :label="'Số tiền cần chuyển'"
        :value="0"
        class="amount-input"
      />

      <div class="divider">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eefeb1e20a5344cd415350fd94fff812eddcb85?placeholderIfAbsent=true&apiKey=ffc8e6a5cacb4bf8968526b09617ce7d"
          class="divider-image"
          alt="Transfer direction indicator"
        />
      </div>

      <CurrencyInput
        :currency="'VND'"
        :flag-url="'https://cdn.builder.io/api/v1/image/assets/TEMP/b1b0002e4d33d8c7731053266c4ad4c21009fa1b?placeholderIfAbsent=true&apiKey=ffc8e6a5cacb4bf8968526b09617ce7d'"
        :label="'Số tiền nhận về'"
        :value="0"
        class="amount-output"
      />
    </div>

    <TransferPurpose />
    <ActionButtons />
  </div>
</template>

<script>
import ExchangeRateDisplay from "./ExchangeRateDisplay.vue";
import CurrencyInput from "./CurrencyInput.vue";
import TransferPurpose from "./TransferPurpose.vue";
import ActionButtons from "./ActionButtons.vue";

export default {
  name: "CurrencyExchangeForm",
  components: {
    ExchangeRateDisplay,
    CurrencyInput,
    TransferPurpose,
    ActionButtons,
  },
};
</script>

<style scoped>
.exchange-container {
  min-width: 320px;
  border-radius: 24px;
  box-shadow: 0px 40px 32px -24px rgba(15, 15, 15, 0.12);
  max-width: 565px;
  padding: 32px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 600;
  background-color: #fff;
}

.exchange-form {
  margin-top: 24px;
  width: 100%;
}

.divider {
  margin: 24px 0;
}

.divider-image {
  aspect-ratio: 12.5;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 9999px;
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
}
</style>
