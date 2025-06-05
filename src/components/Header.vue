<template>
  <header class="header">
    <div class="logo">
      <img :src="logo" alt="Hallu Logo" />
      <span class="brand">Hallu</span>
    </div>
    <nav class="nav">
      <a href="#" class="nav-item active">Trang chủ</a>
      <a href="#" class="nav-item" @click="registerAction()">Hỗ trợ</a>
    </nav>
    <div class="auth-buttons">
      <button class="login-btn" @click="loginAction()">
        <a href="#">Đăng nhập</a>
      </button>
      <button class="register-btn" @click="registerAction()">
        <a href="#">Đăng ký</a>
      </button>
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
  </header>
</template>

<script setup>
import logo from '@/assets/images/logo.png';
import { ref } from 'vue';

const showPopup = ref(false);
const form = ref({
  name: '',
  phone: '',
  email: '',
  message: ''
});

const submitForm = () => {
  console.log('Form data:', form);
  alert('Thông tin đã được gửi!');
  showPopup.value = false;
}

function loginAction() {
  alert('Tính năng đang được phát triển');
};

function registerAction() {
  showPopup.value = true;
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 6px 5%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo img {
  width: 32px;
  height: 32px;
}

.brand {
  color: var(--Neutrals-2, #23262F);
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  padding: 4px 0px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: 80px;
}

.nav-item {
  display: flex;
  padding: 0px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--Secondary-2, #000000);
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
  line-height: 26px;
  position: relative;
}

.nav-item.active {
  color: #104911;
}

.nav-item.active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  height: 4px;
  width: 100%;
  background-color: #104911;
}

.auth-buttons {
  display: flex;
  margin-left: auto;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
}

.auth-buttons a {
  text-decoration: none;
  color: var(--Neutrals-2, #23262F);
  text-align: center;
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
}

.login-btn {
  background: #ffffff;
  border: 1px solid #ccc;
  display: flex;
  width: 108px;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 90px;
}

.register-btn {
  display: flex;
  width: 108px;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 90px;
  border: none;
  background: var(--Primary-1, #9FE870);
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
</style>
