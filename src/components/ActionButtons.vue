<template>
  <div class="buttons-container">
    <button class="transfer-button">Chuyển tiền</button>
    <button class="compare-button">So sánh phí</button>
  </div>
</template>

<script>
export default {
  name: "ActionButtons",
};
</script>

<style scoped>
.buttons-container {
  transform: rotate(3.141592653589793rad);
  display: flex;
  margin-top: 24px;
  width: 100%;
  align-items: start;
  gap: 8px;
  font-size: 16px;
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
}

@media (max-width: 991px) {
  .buttons-container {
    max-width: 100%;
  }

  .transfer-button,
  .compare-button {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
