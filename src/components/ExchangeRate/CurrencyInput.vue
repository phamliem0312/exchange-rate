<template>
  <div class="dropdown">
    <div class="dropdown-toggle">
      <div class="currency-selector" @click.stop="toggleDropdown">
        <div class="currency-display">
          <img :src="selected.flag" alt="">
          {{ selected.code }}
        </div>
        <img :src="arrowDownIcon" alt="">
      </div>
      <input
        type="text"
        :value="formatNumber(value, currency)"
        class="amount-input"
        inputmode="numeric"
        @input="updateValue($event.target.value)"
      />
    </div>
    <div class="dropdown-list" v-if="showList">
      <input v-if="!!isDisabled" type="text" v-model="search" placeholder="Tìm kiếm..." />
      <div class="dropdown-item" v-for="currency in filteredCurrencies" :key="currency.code"
        @click.stop="selectCurrency(currency)">
        <img :src="currency.flag" alt="">
        {{ currency.code }} / {{ currency.name }}
        <span class="selected-check" v-if="currency.code === selected.code">✔</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import arrowDownIcon from "@/assets/icons/arrow-down.png";
import { formatNumber, parseFormattedNumber } from "@/utils/number";
import { getCurrencyList } from '@/services/config';

const props = defineProps({
  currency: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    default: 0
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:currency', 'update:value']);

const isDisabled = ref(props.isDisabled);

const currencies = computed(() => {
  return getCurrencyList(props.currency === 'VND' ? 'VND' : 'all');
});

const selected = computed(() => {
  if (props.currency === 'VND') {
    return getCurrencyList('VND')[0];
  }
  return getCurrencyList().filter(c => c.code === props.currency)[0];
});

const showList = ref(false);
const search = ref("");

const filteredCurrencies = computed(() =>
  currencies.value.filter(c =>
    c.code.toLowerCase().includes(search.value.toLowerCase()) ||
    c.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

function toggleDropdown() {
  showList.value = !showList.value;
}

function selectCurrency(currency) {
  showList.value = false;
  emit('update:currency', currency.code);
}

function updateValue(valueStr) {
  let value = parseFormattedNumber(valueStr);
  if (isNaN(value) || value === '') {
    value = 0;
  }
  emit('update:value', parseFloat(value));
}

function handleClickOutside(event) {
  const dropdown = document.querySelector(".dropdown");
  
  if (!dropdown.contains(event.target)) {
    showList.value = false;
  }
}
</script>

<style scoped>
.dropdown {
  width: 100%;
  position: relative;
  font-family: Inter, sans-serif;
}

.dropdown-toggle {
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
}

.dropdown-toggle img {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border-radius: 24px;
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
}

.currency-display {
  align-self: stretch;
  display: flex;
  margin: auto 0;
  align-items: center;
  gap: 4px;
  font-size: 20px;
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

.amount-input {
  color: #163300;
  text-align: right;
  flex: 1;
  border: none;
  outline: none;
  font-size: 20px;
  font-family: inherit;
  font-weight: 600;
  background: transparent;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  margin-top: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  z-index: 11;
  overflow-x: hidden;
}

.dropdown-list input {
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #eee;
  outline: none;
}

.dropdown-item {
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

.dropdown-item img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
}

.selected-check {
  margin-left: auto;
  color: green;
}

.dropdown-toggle:focus-within {
  border-color: rgba(159, 232, 112, 1);
  box-shadow: 0 0 0 2px rgba(159, 232, 112, 1);
}
</style>
