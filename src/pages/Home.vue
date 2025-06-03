<template>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600;700&family=DM+Sans:wght@700&display=swap"
        rel="stylesheet" />
    <main>
        <div class="main">
            <ExchangeRate v-model:currency="currency" />
            <HalluForYou />
            <International />
            <FeeComparison v-model:compareCurrency="currency" />
            <CustomerReview />
            <DownloadNow />
            <Register />
        </div>
    </main>
</template>

<script setup lang="ts">
import ExchangeRate from "../components/ExchangeRate.vue";
import HalluForYou from "../components/HalluForYou.vue";
import International from "../components/International.vue";
import FeeComparison from "../components/FeeComparison.vue";
import CustomerReview from "../components/CustomerReview.vue";
import DownloadNow from "../components/DownloadNow.vue";
import Register from "../components/Register.vue";
import { ref } from "vue";

const currency = ref('USD');
</script>

<style scoped>
 .main{
   background-color: #ffffff;
 }
</style>