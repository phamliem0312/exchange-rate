<template>
    <div v-if="showPopup" class="overlay">
      <div class="popup">
        <div class="contact-title">
          Liên hệ ngay
          <button class="close-btn" @click="close()">×</button>
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
            <button type="submit" class="submit-btn">Gửi thông tin</button>
          </div>
        </form>
      </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  showPopup: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['update:showPopup']);

const showPopup = computed(() => props.showPopup);
const form = ref({
  name: '',
  phone: '',
  email: '',
  message: ''
});

const close = () => {
  emit('update:showPopup', false);
};
</script>

<style scoped>
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
  font-family: Inter, sans-serif;
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
  color: #636363;
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
  line-height: 24px;
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
  font-family: Inter, sans-serif;
}
</style>
