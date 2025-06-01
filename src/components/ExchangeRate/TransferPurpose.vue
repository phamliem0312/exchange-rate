<template>
    <div class="transfer-purpose">
        <div class="field-header">
            <label class="field-label">Mục đích chuyển tiền</label>
        </div>
        <div class="dropdown-wrapper" @click.stop="toggleDropdown">
            <div class="dropdown-input">
                <span :class="{ selectedText: selectedPurpose, notSelectedText: !selectedPurpose }">{{
                    selectedPurpose?.label || 'Chọn mục đích chuyển tiền' }}</span>
                <img :src="arrowDownIcon" alt="">
            </div>

            <div v-if="isOpen" class="dropdown-list">
                <input v-model="search" class="search-input" type="text" placeholder="Tìm kiếm..." @click.stop />
                <div v-for="purpose in filteredPurposes" :key="purpose.value" class="dropdown-item"
                    :class="{ selected: selectedPurpose?.value === purpose.value }"
                    @click.stop="selectPurpose(purpose)">
                    {{ purpose.label }}
                    <span class="checkmark" v-if="selectedPurpose?.value === purpose.value">✔</span>
                </div>
            </div>
        </div>
    </div>
    <div v-if="selectedPurpose" class="fee-box">
        <div class="fee-row">
            <span class="label">Phí tài khoản ngân hàng được kết nối (VCB)</span>
            <span class="amount">1.70 USD</span>
        </div>
        <div class="fee-row">
            <span class="label">Phí của chúng tôi</span>
            <span class="amount">1.70 USD</span>
        </div>
        <hr />
        <div class="fee-total">
            <span><strong>Tổng phí</strong> (0.89%)</span>
            <span class="total-amount"><strong>8.88 USD</strong></span>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import arrowDownIcon from "@/assets/icons/arrow-down.png";

const purposes = ref([
    { label: 'Chuyển tiền học phí', value: 'education' },
    { label: 'Gửi tiền cho đối tác, freelancer hoặc nhân viên', value: 'freelance' },
    { label: 'Mua hàng, thanh toán quốc tế', value: 'shopping' },
    { label: 'Đầu tư, tiết kiệm tại nước ngoài', value: 'investment' },
    { label: 'Chi trả phí y tế, du lịch hoặc định cư', value: 'travel' },
    { label: 'Chuyển tiền giữa tài khoản cá nhân đa quốc gia', value: 'personal_transfer' },
    { label: 'Hỗ trợ người thân ở nước ngoài', value: 'family_support' },
    { label: 'Giao dịch tiền số hoặc ví điện tử quốc tế', value: 'crypto' }
])

const search = ref('');
const selectedPurpose = ref(null);
const isOpen = ref(false);

const filteredPurposes = computed(() =>
    purposes.value.filter(p =>
        p.label.toLowerCase().includes(search.value.toLowerCase())
    )
)

function toggleDropdown() {
    isOpen.value = !isOpen.value
}

function selectPurpose(purpose) {
    selectedPurpose.value = purpose;
    isOpen.value = false;
}

function closeOnClickOutside(e) {
    const dropdown = document.querySelector('.dropdown-wrapper')
    if (dropdown && !dropdown.contains(e.target)) {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', closeOnClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', closeOnClickOutside)
})
</script>

<style scoped>
.transfer-purpose {
    width: 100%;
    margin-top: 24px;
}

.field-header {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    color: #161733;
    padding: 4px 0px;
}

.field-label {
    color: #161733;
    align-self: stretch;
    margin: auto 0;
}

.dropdown-wrapper {
    width: 100%;
    position: relative;
    height: 76px;
}

.dropdown-input {
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
}

.dropdown-list {
    position: absolute;
    width: 100%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    margin-top: 6px;
    z-index: 1000;
    max-height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
}

.search-input {
    width: 100%;
    padding: 10px 12px;
    border: none;
    border-bottom: 1px solid #eee;
    outline: none;
    font-size: 14px;
}

.dropdown-item {
    padding: 12px;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dropdown-item:hover {
    background: #f9f9f9;
}

.selectedText {
    overflow: hidden;
    color: var(--Neutrals-1, #161733);
    text-overflow: ellipsis;
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    display: inline-block;   /* hoặc block nếu cần */
    max-width: 400px;        /* giới hạn độ rộng */
    white-space: nowrap;     /* không xuống dòng */
}

.notSelectedText {
    overflow: hidden;
    color: var(--Neutrals-3, #B1B5C3);
    text-overflow: ellipsis;
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
}

.selected {
    background-color: #eefce3;
    font-weight: 600;
}

.checkmark {
    color: green;
}

.arrow {
    margin-left: 10px;
}

.fee-box {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    font-family: Inter, sans-serif;
    background-color: #fff;
}

.fee-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    font-size: 14px;
}

.fee-row .label {
    color: #23262F;
    line-height: 20px;
}

.amount {
    font-weight: bold;
    color: #23262F;
    line-height: 20px;
    font-size: 16px;
}

hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 12px 0;
}

.fee-total {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    color: #000;
}

.total-amount {
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
}
</style>