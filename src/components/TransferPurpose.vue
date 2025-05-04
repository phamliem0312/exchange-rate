<template>
  <div class="purpose-section">
    <div class="purpose-header">
      <label class="purpose-label">Mục đích chuyển tiền</label>
    </div>
    <div class="purpose-input">
      <span class="placeholder-text">Chọn mục đích chuyển tiền</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/98385a4e4ccc2ad74f4b50ba10eed5f5dd77537b?placeholderIfAbsent=true&apiKey=ffc8e6a5cacb4bf8968526b09617ce7d"
        class="dropdown-icon"
        alt="Select purpose"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TransferPurpose",
};
</script>

<style scoped>
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
  padding: 24px 16px;
  gap: 16px;
  font-size: 20px;
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
  .purpose-section,
  .purpose-header,
  .purpose-input {
    max-width: 100%;
  }
}
</style>
