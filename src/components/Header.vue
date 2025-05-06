<template>
  <header class="header">
    <div class="logo">
      <img :src="logo" alt="Hallu Logo" />
      <span class="brand">Hallu</span>
    </div>
    <nav class="nav">
      <a href="#" class="nav-item active">Trang chủ</a>
      <a href="#" class="nav-item">Hỗ trợ</a>
    </nav>
    <div class="auth-buttons">
      <button class="login-btn">
        <a href="#">Đăng nhập</a>
      </button>
      <button class="register-btn">
        <a href="#">Đăng ký</a>
      </button>
    </div>
  </header>
</template>

<script setup>
import logo from '@/assets/images/logo.png';

</script>

<style scoped>

.header {
  display: flex;
  align-items: center;
  padding: 12px 5%;
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
  font-size: 24px;
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
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
  line-height: 28px;
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
  width: 124px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 90px;
}

.register-btn {
  display: flex;
  width: 124px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 90px;
  border: none;
  background: var(--Primary-1, #9FE870);
}
</style>
