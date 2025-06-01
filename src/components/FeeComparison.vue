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
                    <CurrencyInput v-model:currency="toCurrency" v-model:value="toValue" :isDisabled="true"/>
                </div>
            </div>

            <table class="comparison-table">
                <thead>
                    <tr>
                        <th style="width: 20%;">Ngân hàng</th>
                        <th style="width: 12%;">Tỷ giá</th>
                        <th style="width: 18%;">Phí chuyển nhượng</th>
                        <th style="width: 15%;">Người nhận được</th>
                        <th style="width: 15%; text-align: center;">Cập nhật lần cuối</th>
                        <th style="width: 25%;"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(bank, index) in banks" :key="bank.name" @click="selectBank(bank, index)" class="bank-row">
                        <td>
                            <img v-if="bank.logo" :src="bank.logo" alt="logo" class="bank-logo" />
                            {{ bank.name }}
                        </td>
                        <td style="text-align: center;">
                            <div style="display: flex;">
                                {{ formatNumber(bank.rate) }}
                                <div v-if="selectedRow === index" class="status-indicator">
                                    <div class="status-indicator-center"></div>
                                </div>
                            </div>
                        </td>
                        <td style="text-align: center;">{{ bank.fee }}</td>
                        <td style="text-align: center;">
                            {{ formatNumber(bank.received) }}
                        </td>
                        <td style="text-align: center;">
                            {{ bank.updatedAt }}
                        </td>
                        <td style="text-align: right;">
                            <button v-if="selectedRow === index" class="transfer-btn" @click="transferAction()">Chuyển tiền</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-if="showMore" class="show-more" @click="showMoreAction()">Xem thêm</div>
        </div>
        <div v-if="showPopup" class="overlay">
        <div class="popup">
            <div class="contact-title">
            Liên hệ ngay
            <button class="close-btn" @click="showPopup = false">×</button>
            </div>

            <form @submit.prevent="submitForm">
            <div class="form-row">
                <label>
                Họ và tên <span class="required">*</span>
                </label>
                <input type="text" v-model="form.name" placeholder="Nhập họ và tên" required />
            </div>
            <div class="form-row">
                <label>
                Số điện thoại <span class="required">*</span>
                </label>
                <input type="tel" v-model="form.phone" placeholder="Nhập số điện thoại" required />
            </div>
            <div class="form-row">
                <label>
                Email <span class="required">*</span>
                </label>
                <input type="email" v-model="form.email" placeholder="Nhập email" required />
            </div>
            <div class="form-row">
                <label>
                Nội dung <span class="required">*</span>
                </label>
                <textarea v-model="form.message" placeholder="Nhập nội dung" required></textarea>
            </div>
            <div class="form-row" style="text-align: center;">
                <button type="submit" class="submit-btn">Gửi thông tin →</button>
            </div>
            </form>
        </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { getBestExchangeRate, getExchangeRateList } from "@/services/api";
import { formatNumber } from "@/utils/number";
import CurrencyInput from "./ExchangeRate/CurrencyInput.vue";
import mainPicTop from "@/assets/images/main-pic-1.png";
import mbbankLogo from '@/assets/icons/mbbank.png';
import tpbankLogo from '@/assets/icons/tpbank.png';
import agribankLogo from '@/assets/icons/agribank.png';
import vpbankLogo from '@/assets/icons/vpbank.png';
import vietcombankLogo from '@/assets/icons/vietcombank.png';
import techcombankLogo from '@/assets/icons/techcombank.png';
import acb from '@/assets/icons/acb.png';
import kienlongbank from '@/assets/icons/kienlongbank.png';
import ncb from '@/assets/icons/ncb.png';
import publicbank from '@/assets/icons/publicbank.png';
import pvcombank from '@/assets/icons/pvcombank.png';
import scb from '@/assets/icons/scb.png';
import vietabank from '@/assets/icons/vietabank.png';
import vietbank from '@/assets/icons/vietbank.png';
import lpbank from '@/assets/icons/lpbank.png';
import vietinbank from '@/assets/icons/vietinbank.png';
import eximbank from '@/assets/icons/eximbank.png';
import shb from '@/assets/icons/shb.png';
import hsbc from '@/assets/icons/hsbc.png';
import vietcapitalbank from '@/assets/icons/vietcapitalbank.png';
import vrbank from '@/assets/icons/vrbank.png';
import uob from '@/assets/icons/uob.jpg';
import gpbank from '@/assets/icons/gpbank.png';
import abbank from '@/assets/icons/abbank.webp';
import pgbank from '@/assets/icons/pgbank.png';

const logoMap = {
    'MBbank': mbbankLogo,
    'TPbank': tpbankLogo,
    'Agribank': agribankLogo,
    'VPbank': vpbankLogo,
    'Vietcombank': vietcombankLogo,
    'Techcombank': techcombankLogo,
    'ACB': acb,
    'Kienlongbank': kienlongbank,
    'NCB': ncb,
    'PublicBank': publicbank,
    'PVCombank': pvcombank,
    'SCB': scb,
    'VietAbank': vietabank,
    'Vietbank': vietbank,
    'Vietinbank': vietinbank,
    'Eximbank': eximbank,
    'SHB': shb,
    'HSBC': hsbc,
    'Vietcapitalbank': vietcapitalbank,
    'VRbank': vrbank,
    'UOB': uob,
    'LPbank': lpbank,
    'GPbank': gpbank,
    'ABbank': abbank,
    'PGbank': pgbank
};

const props = defineProps({
  compareCurrency: {
    type: String,
    required: true
  }
});

const fromCurrency = ref('VND');
const toCurrency = ref('USD');
const fromValue = ref(0);
const suggestionCurrencyValue = ref(0);
const banks = ref([]);
const showMore = ref(true);
const toValue = computed(() => {
    if (suggestionCurrencyValue.value === 0) {
        return 0;
    }
    return fromValue.value / suggestionCurrencyValue.value;
});

const timeRanges = ['12 giờ', '1 ngày', '1 tuần', '1 tháng', '1 năm', '2 năm', '5 năm', '10 năm']
const selected = ref('12 giờ');
const selectedRow = ref(0);
const showPopup = ref(false);
const limit = ref(5);
const form = ref({
  name: '',
  phone: '',
  email: '',
  message: ''
});

const setBestExchangeRate = async () => {
    getBestExchangeRate(toCurrency.value, fromCurrency.value)
        .then((response) => {
            suggestionCurrencyValue.value = response.exchangeRate ?? 1;
            selectedRow.value = 0;
        })
        .catch((error) => {
            suggestionCurrencyValue.value = 0;

            console.error("Error fetching exchange rate:", error);
            alert("Không tìm thấy tỷ giá phù hợp");
        });
};

const setExchangeRateList = () => {
    getExchangeRateList(toCurrency.value, limit.value)
        .then((response) => {
            banks.value = response.list.map((bank, index) => {
                if (bank.rate > 0) {
                    return {
                        ...bank,
                        logo: logoMap[bank.name] ?? null,
                    }
                }
            });

            if (response.list.length < limit.value) {
                showMore.value = false;
            }
        })
        .catch((error) => {
            console.error("Error fetching exchange rate list:", error);
        });
};

const selectBank = (bank, index) => {
    suggestionCurrencyValue.value = bank.rate;
    selectedRow.value = index;
};

const transferAction = () => {
    showPopup.value = true;
};

const showMoreAction = () => {
    limit.value += 5;
    setExchangeRateList();
}

watch(
    () => props.compareCurrency,
    (newValue) => {
        toCurrency.value = newValue;
    }
);

watch(
    toCurrency,
    async () => {
        setBestExchangeRate();
        setExchangeRateList();
    },
    { immediate: true }
);

</script>

<style scoped>
.fee-comparison {
    background: #ededed;
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
    background-color: #9FE870;
    color: #163300;
    padding: 12px 24px;
    border: none;
    border-radius: 90px;
    cursor: pointer;
    font-family: Inter, sans-serif;
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

.chart-title .title {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 32px;
}

.chart-title {
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

.bank-row:hover {
    background-color: #d7d7d7;
}

.contact-title {
  font-size: 40px;
  line-height: 48px;
  font-family: Inter, sans-serif;
  font-weight: bold;
  margin-bottom: 16px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup {
  background: white;
  border-radius: 16px;
  padding: 24px;
  width: 600px;
  position: relative;
}

.close-btn {
  position: absolute;
  right: 16px;
  background: transparent;
  border-radius: 40px;
  border: solid 1px #E6E8EC;
  font-size: 32px;
  cursor: pointer;
  color: #E6E8EC;
  width: 40px;
  height: 40px;
}
h2 {
  margin-bottom: 16px;
  font-size: 24px;
}

.form-row {
  margin-bottom: 16px;
}

form label {
  display: block;
  font-size: 14px;
  color: #333;
  font-weight: bold;
}

input,
textarea {
  width: calc(100% - 24px);
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 4px;
  font-size: 14px;
}

textarea {
  min-height: 80px;
  resize: vertical;
}

.required {
  color: red;
}

.submit-btn {
  margin-top: 12px;
  background-color: #a3e635;
  border: none;
  padding: 12px 20px;
  border-radius: 999px;
  font-weight: bold;
  cursor: pointer;
  font-size: 15px;
  color: #000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.show-more{
    text-align: center;
    padding: 8px 0px;
    background-color: #163300;
    color: #ffffff;
    border-radius: 0px 0px 12px 12px;
    cursor: pointer;
}

.status-indicator{
    width: 22px;
    height: 22px;
    border-radius: 1000px;
    background: #c5e9c8;
    margin-left: 8px;
    justify-content: center;
    align-items: center;
    display: flex;
    animation: pulse 1.5s infinite ease-in-out;
}

.status-indicator-center{
    width: 8px;
    height: 8px;
    border-radius: 1000px;
    background: #14AF23;
    animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.4);
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>