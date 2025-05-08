<template>
    <div class="download-container">
        <img :src="downloadImage" alt="">
    </div>
</template>

<script setup>
import downloadImage from "@/assets/images/download_qr.png";
</script>

<style scoped>
.download-container img {
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
}
</style>