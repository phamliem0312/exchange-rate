<template>
  <div class="international-transfer">
    <!-- Flag Icons -->
    <div class="flags-container">
      <img v-for="(flag, index) in flags" :key="index" :src="flag" class="flag" alt="flag" />
    </div>

    <!-- Hero Section -->
    <div class="transfer-card">
      <div class="left-side">
        <img src="@/assets/images/international.png" alt="Transfer" class="photo" />
      </div>
      <div class="right-side">
        <div class="icon-circle">
          <img src="@/assets/icons/transfer.svg" alt="icon" />
        </div>
        <h2>Chuyển tiền quốc tế dễ dàng hơn</h2>
        <p>
          Nhanh chóng và tiết kiệm với tỷ giá cạnh tranh, giúp bạn tối ưu chi phí và hoàn tất giao
          dịch chỉ trong vài phút.
        </p>
        <div class="buttons">
          <button class="outline" @click="scrollToTarget">So sánh phí</button>
          <button class="filled" @click="transfer()">Chuyển tiền</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import caIcon from '@/assets/flags/jp.svg';
import chIcon from '@/assets/flags/ch.svg';
import cnIcon from '@/assets/flags/cn.svg';
import euIcon from '@/assets/flags/eu.svg';
import gbIcon from '@/assets/flags/gb.svg';
import hkIcon from '@/assets/flags/sg.svg';
import krIcon from '@/assets/flags/kr.svg';
import thIcon from '@/assets/flags/th.svg';
const flags = [
  caIcon,
  chIcon,
  cnIcon,
  euIcon,
  gbIcon,
  hkIcon,
  krIcon,
  thIcon
];

const scrollToTarget = () => {
  const element = document.querySelector('.fee-comparison')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const transfer = () => {
  alert("Tính năng đang được phát triển");
};
</script>

<style scoped>
.international-transfer {
  background: white;
  padding: 20px 0px;
  font-family: sans-serif;
}

.flags-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 30px;
}

.flag {
  width: 140px;
  height: 140px;
  object-fit: cover;
  animation: rollY 4s linear infinite;
  transform-style: preserve-3d;
  transform-origin: center center;
}

@keyframes rollY {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

.transfer-card {
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  margin: 0px 5%;
}

.left-side {
  background-color: #f0f0f0;
  width: 50%;
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.right-side {
  width: 50%;
  background: linear-gradient(135deg, #166534, #047857);
  color: white;
  padding: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.icon-circle {
  background-color: #f59e0b;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.right-side h2 {
  font-size: 24px;
  margin-bottom: 12px;
}

.right-side p {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 24px;
}

.buttons {
  display: flex;
  gap: 12px;
}

button {
  padding: 10px 16px;
  font-size: 14px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
}

button.outline {
  background: transparent;
  color: white;
  border: 1px solid white;
}

button.filled {
  background: white;
  color: #047857;
}
</style>