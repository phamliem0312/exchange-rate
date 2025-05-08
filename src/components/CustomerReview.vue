<template>
    <div class="review-container">
        <div class="review-main">
            <div class="left-section">
                <img :src="customerReviewImage" alt="Customers" class="review-image" />
            </div>
            <div class="right-section">
                <div class="label">Khách hàng nói gì về chúng tôi</div>

                <div v-for="(review, index) in reviews" :key="index" class="review-card"
                    :class="{ featured: index === 0 }">
                    <div class="review-header">
                        <img :src="review.avatar" alt="Avatar" class="avatar" />
                        <div>
                            <div class="name">{{ review.name }}</div>
                            <div class="title">{{ review.title }}</div>
                        </div>
                        <div class="customer-rating">
                            <span class="customer-rating-text">{{ review.rating }} ⭐</span>
                        </div>
                    </div>
                    <p class="review-text">“{{ review.text }}”</p>
                </div>

                <div class="pagination">
                    <button>&larr;</button>
                    <button>&rarr;</button>
                </div>
            </div>
        </div>
        <div class="store-rating">
            <div class="store">
                <img :src="appStoreImage" alt="App Store" />
                <div>
                    <div class="stars">★ ★ ★ ★ ★</div>
                    <div><strong>4.8/5</strong>, 58.6k lượt đánh giá</div>
                </div>
            </div>
            <div class="store">
                <img :src="googlePlayImage" alt="Google Play" />
                <div>
                    <div class="stars">★ ★ ★ ★ ★</div>
                    <div><strong>4.8/5</strong>, 58.6k lượt đánh giá</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import customerReviewImage from "@/assets/images/customer_review.png";
import appStoreImage from "@/assets/images/app_store.png";
import googlePlayImage from "@/assets/images/google_play.png";

const reviews = [
    {
        name: "Nguyễn Trần Minh Quân",
        title: "Giám đốc ngân hàng ACB",
        text: "Giao diện dễ dùng, so sánh tỷ giá cực nhanh. Nhờ web mà mình tiết kiệm được kha khá khi đổi tiền du lịch!",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Võ Đăng Minh Hiếu",
        title: "Giám đốc ngân hàng MBBank",
        text: "Không còn phải tra từng ngân hàng nữa, mọi thông tin tỷ giá đều có ở đây – chính xác và tiện lợi.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
        name: "Trần Trung Giới",
        title: "UX/UI Designer",
        text: "Tôi thường xuyên chuyển tiền cho đối tác nước ngoài, và công cụ này giúp tôi chọn đúng lúc với tỷ giá tốt nhất.",
        rating: 4,
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    },
];
</script>

<style scoped>
.review-container {
    padding: 128px 5% 60px 5%;
    background-color: #ffffff;
    font-family: Inter, sans-serif;
}

.label{
    font-weight: 600;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -2%;
}
.review-main {
    display: flex;
    gap: 2rem;
}

.left-section {
    width: 50%;
}

.review-image {
    width: 100%;
    border-radius: 24px;
    object-fit: cover;
    height: 100%;
}

.customer-rating-text {
    padding-top: 4px;
    padding-right: 12px;
    padding-bottom: 4px;
    padding-left: 12px;
    gap: 8px;
    border-radius: 999px;
    background-color: #FDF6E8;
}

.right-section {
    gap: 40px;
    width: 50%;
}

h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.review-card {
    background: #f9f9f9;
    border-radius: 24px;
    padding: 24px;
    margin-top: 40px;
    border: 2px solid #e0e0e0;
}

.review-card.featured {
    background: #245c4f;
    color: white;
}

.review-header {
    display: flex;
    align-items: center;
    gap: 8px;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.name {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
}

.title {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
}

.customer-rating{
    margin-left: auto;
    font-weight: bold;
    color: #161733;
}

.stars {
    margin-left: auto;
    font-weight: bold;
    color: orange;
    font-size: 26px;
}

.review-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}

.pagination {
    display: flex;
    margin-top: 40px;
}

.pagination button {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 0.5px solid #dddddd;
    margin-right: 8px;
    background-color: #ffffff;
}

.store-rating {
    display: flex;
    background: #F4F5F6;
    margin-top: 2rem;
    align-items: center;
    justify-content: space-around;
    gap: 24px;
    border-radius: 24px;
    padding: 80px;
}

.store {
    display: flex;
    gap: 40px;
    align-items: center;
}

.store img {
    width: 200px;
    padding-bottom: 4px;
}
</style>