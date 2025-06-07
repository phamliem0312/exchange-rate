<template>
    <div class="features-section">
      <div class="features-title">Hallu mang đến cho bạn</div>
      <div class="features-grid">
        <div
          v-for="(feature, index) in features"
          :key="index"
          :class="['feature-card']"
        >
          <div class="icon-wrapper">
            <img :src="feature.icon" alt="Icon" class="icon" />
          </div>
          <div class="feature-title">{{ feature.title }}</div>
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
    padding: 0px 5% 128px 5%;
    text-align: center;
    background-color: rgba(244, 245, 246, 1);
  }
  
  .features-title {
    color: var(--Neutrals-1, #161733);
    font-family: Inter, sans-serif;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 64px;
    letter-spacing: -1.28px;
    padding-bottom: 64px;
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 32px;
    margin: 0 auto;
    max-width: 1440px;
  }
  
  .feature-card {
    background: white;
    border-radius: 24px;
    padding: 24px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
    transition: transform 0.2s ease;
    width: 260px;
  }
  
  .feature-card:hover {
    background: linear-gradient(311.5deg, #2E5144 2.01%, #54A79D 155.8%);
    color: white;
  }

  .feature-card:hover .feature-description{
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
  
  .feature-card:hover .highlight-icon {
    background: rgba(255, 255, 255, 0.2);
  }
  
  .icon {
    width: 60px;
    height: 60px;
  }
  
  .feature-title {
    text-align: center;
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    height: 56px;
    width: 180px;
    margin: auto;
  }
  
  .feature-description {
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: var(--Neutrals-4, #777E90);
    font-family: Inter, sans-serif;
  }
  </style>
  