<template>
    <div class="fee-comparison">
        <div class="comparison-label">So sánh phí</div>

        <img :src="mainPicTop" alt="corner decoration" class="top-right-decoration" />
        <div class="transfer-box-main">
            <div class="transfer-box">
                <div class="currency-box">
                    <CurrencyInput v-model:currency="fromCurrency" v-model:value="fromValue" />
                </div>
                <button class="swap-button">⇄</button>
                <div class="currency-box">
                    <CurrencyInput v-model:currency="toCurrency" v-model:value="toValue" />
                </div>
            </div>

            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Ngân hàng</th>
                        <th>Tỷ giá</th>
                        <th>Phí chuyển nhượng</th>
                        <th>Người nhận được</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="bank in banks" :key="bank.name">
                        <td>
                            <img :src="bank.logo" alt="logo" class="bank-logo" />
                            {{ bank.name }}
                        </td>
                        <td>{{ formatCurrency(bank.rate) }}</td>
                        <td>{{ bank.fee }} USD</td>
                        <td>
                            {{ formatCurrency(bank.received) }} VND
                        </td>
                        <td>
                            <button v-if="bank.best" class="transfer-btn">Chuyển tiền</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="chart-container">
                <div class="exchange-container">
                    <div class="chart-title">
                        <div class="title">Biểu đồ USD sang VND</div>
                        <div class="percentage-change">↑ +12.49%</div>
                    </div>
                    <div class="timestamp">
                        Ngày 18 tháng 4 năm 2025, 10:06 UTC
                    </div>
                </div>
                <div class="time-selector">
                    <button
                    v-for="(label, index) in timeRanges"
                    :key="index"
                    :class="['time-button', { active: selected === label }]"
                    @click="selected = label"
                    >
                    {{ label }}
                    </button>
                </div>
                <img :src="chartImage" alt="chart" class="chart-image" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import CurrencyInput from "./ExchangeRate/CurrencyInput.vue";
import mainPicTop from "@/assets/images/main-pic-1.png";
import mbbankLogo from '@/assets/icons/mbbank.png';
import tpbankLogo from '@/assets/icons/tpbank.png';
import agribankLogo from '@/assets/icons/agribank.png';
import vpbankLogo from '@/assets/icons/vpbank.png';
import vietcombankLogo from '@/assets/icons/vietcombank.png';
import techcombankLogo from '@/assets/icons/techcombank.png';
import chartImage from '@/assets/images/chart.png';

const fromCurrency = ref('USD');
const toCurrency = ref('VND');
const toValue = ref(0);
const fromValue = ref(0);
const banks = ref([
    {
        name: 'MBBank',
        rate: 25_533.3,
        fee: 1.25,
        received: 25_595_278,
        best: true,
        logo: mbbankLogo,
    },
    {
        name: 'TPBank',
        rate: 25_533.3,
        fee: 1.25,
        received: 25_595_278,
        logo: tpbankLogo,
    },
    {
        name: 'Agribank',
        rate: 25_533.3,
        fee: 1.25,
        received: 25_595_278,
        logo: agribankLogo,
    },
    {
        name: 'VPBank',
        rate: 25_533.3,
        fee: 1.25,
        received: 25_595_278,
        logo: vpbankLogo,
    },
    {
        name: 'Vietcombank',
        rate: 25_533.3,
        fee: 1.25,
        received: 25_595_278,
        logo: vietcombankLogo,
    },
    {
        name: 'Techcombank',
        rate: 25_533.3,
        fee: 1.25,
        received: 25_595_278,
        logo: techcombankLogo,
    },
]);const timeRanges = ['12 giờ', '1 ngày', '1 tuần', '1 tháng', '1 năm', '2 năm', '5 năm', '10 năm']
const selected = ref('12 giờ')

const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(value);
};
</script>

<style scoped>
.fee-comparison {
    background: #f4f6f8;
    padding: 40px 5% 60px 5%;
    font-family: Arial, sans-serif;
    position: relative;
}

.transfer-box-main {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 14px;
    z-index: 2;
    position: relative;
    margin-bottom: 30px;
}

.transfer-box {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 15px 0px;
}

.currency-box {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    width: -webkit-fill-available;
}

.comparison-label {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 64px;
    line-height: 64px;
    padding: 30px 0px;
    color: #23262F;
}

input[type="number"] {
    width: 100px;
    padding: 0.5rem;
}

.swap-button {
    background: none;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
}

.receive-amount {
    font-weight: bold;
}

.comparison-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 8px;
    overflow: hidden;
}

.comparison-table thead tr {
    background-color: #163300;
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #ffffff;
}

.comparison-table thead tr th {
    color: #ffffff !important;
}

.comparison-table th,
.comparison-table td {
    padding: 8px 16px;
    border-bottom: 1px solid #ddd;
    text-align: left;
    height: 56px;
    color: #161733;
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0%;
    vertical-align: middle;
}

.bank-logo {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    vertical-align: middle;
}

.transfer-btn {
    margin-left: 12px;
    background-color: #28a745;
    color: white;
    padding: 0.25rem 0.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.top-right-decoration {
    position: absolute;
    top: 0;
    right: 0;
    width: 12%;
    height: auto;
    z-index: 1;
}

.chart-container {
    padding-top: 30px;
    border-top: 0.5px solid #a8a8a8;
}

.chart-container img {
    width: 100%;
    height: auto;
}

.exchange-container {
  font-family: 'Segoe UI', sans-serif;
  color: #0f1020;
  padding: 20px 0px;
  display: flex;
}

.title-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.currency {
  margin-left: 5px;
}

.percentage-change {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    background-color: #EFF9F0;
    padding: 4px 12px;
    border-radius: 16px;
    color: #14AF23;
}

.timestamp {
  margin-top: 8px;
  color: #3f3f56;
  font-size: 14px;
  text-align: right;
  flex: 1;
}

.chart-title .title{
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 32px;
}

.chart-title{
    align-items: center;
    display: flex;
    gap: 12px;
}

.time-selector {
  display: flex;
  gap: 12px;
  padding: 20px;
  justify-content: center;
}

.time-button {
  border: 1px solid #d9dbe9;
  background-color: white;
  color: #6c6f85;
  padding: 6px 14px;
  border-radius: 999px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: Inter, sans-serif;
  line-height: 20px;
  letter-spacing: 0%;
}

.time-button.active {
  background-color: #9ee77c;
  color: black;
  border: none;
}

.time-button:hover {
  opacity: 0.85;
}
</style>