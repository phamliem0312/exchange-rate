<template>
    <div class="register-main">
      <div class="register-content">
        <div class="register-title">
            Đăng ký nhận cảnh báo khi tỷ giá tốt
        </div>
        <div class="register-description">
            <div class="register-link"><a href="#">Đăng ký ngay</a></div>
        </div>
      </div>
      <div class="register-banner">
        <img :src="banner_bg" alt="">
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import banner_bg from "@/assets/images/register_banner.png";
  </script>
  
  <style scoped>
  .register-main {
    display: flex;
    width: 100%;
    padding-top: 56px;
  }
  
  .register-content {
    width: 50%;
  }

  .register-banner {
    width: 50%;
  }

  .register-banner img {
    width: 100%;
  }
  
  .register-title {
    max-width: 578px;
    color: var(--Neutrals-1, #161733);
    font-family: Inter, sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 66px;
    padding: 0px 140px;
  }
  
  .register-title span {
    color: var(--Secondary-2, #163300);
    font-family: Inter, sans-serif;
    font-size: 72px;
    font-style: normal;
    font-weight: 600;
    line-height: 80px;
  }
  
  .register-description {
    width: 100%;
  }
  
  .register-description img {
    width: inherit;
  }
  
  
  .register-form {
    width: 565px;
    display: flex;
  }

  .register-link{
    width: 200px;
    padding-top: 16px;
    padding-right: 24px;
    padding-bottom: 16px;
    padding-left: 24px;
    border-radius: 90px;
    background: #9FE870;
    text-align: center;
    margin: 40px 140px;
    align-self: center;
  }

  .register-link a{
    color: #163300;
    text-decoration: none;
    font-size: 16px;
    font-family: Inter, sans-serif;
  }
  </style>