<template>
    <div class="features-section">
      <h2 class="features-title">Hallu mang đến cho bạn</h2>
      <div class="features-grid">
        <div
          v-for="(feature, index) in features"
          :key="index"
          :class="['feature-card', { 'highlight-card': index === 0 }]"
        >
          <div class="icon-wrapper" :class="{ 'highlight-icon': index === 0 }">
            <img :src="feature.icon" alt="Icon" class="icon" />
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import compareIcon from '@/assets/icons/compare.svg';
  import chartIcon from '@/assets/icons/chart.svg';
  import alertIcon from '@/assets/icons/alert.svg';
  import calcIcon from '@/assets/icons/calc.svg';
  
  const features = ref([
    {
      title: 'So sánh tỷ giá nhanh chóng',
      description: 'Cập nhật tỷ giá mua/bán từ các ngân hàng và dịch vụ chuyển tiền uy tín, giúp bạn tìm tỷ giá tốt nhất.',
      icon: compareIcon
    },
    {
      title: 'Biểu đồ xu hướng tỷ giá',
      description: 'Xem biến động tỷ giá theo ngày, tuần, tháng, năm để đưa ra quyết định thông minh khi đổi tiền hoặc chuyển tiền.',
      icon: chartIcon
    },
    {
      title: 'Cảnh báo tỷ giá theo ngưỡng',
      description: 'Tùy chỉnh ngưỡng tỷ giá mong muốn và nhận thông báo ngay khi tỷ giá đạt mức phù hợp.',
      icon: alertIcon
    },
    {
      title: 'Tính toán chi phí chuyển tiền',
      description: 'Tính chi phí và số tiền nhận được từ các dịch vụ trong và ngoài nước, rõ ràng và minh bạch.',
      icon: calcIcon
    }
  ])
  </script>
  
  <style scoped>
  .features-section {
    background: #f9fafb;
    padding: 40px 5%;
    text-align: center;
  }
  
  .features-title {
    color: var(--Neutrals-1, #161733);
    font-family: Inter, sans-serif;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 64px; /* 100% */
    letter-spacing: -1.28px;
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin: 0 auto;
  }
  
  .feature-card {
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    transition: transform 0.2s ease;
  }
  
  .feature-card:hover {
    transform: translateY(-4px);
  }
  
  .highlight-card {
    background-color: #047857;
    color: white;
  }

  .highlight-card .feature-description{
    color: white !important;
  }
  
  .icon-wrapper {
    width: 48px;
    height: 48px;
    margin: 0 auto 16px;
    border-radius: 50%;
    background: #f3f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .highlight-icon {
    background: rgba(255, 255, 255, 0.2);
  }
  
  .icon {
    width: 60px;
    height: 60px;
  }
  
  .feature-title {
    text-align: center;
    font-family: Inter, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }
  
  .feature-description {
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: var(--Neutrals-4, #777E90);
  }
  </style>
  