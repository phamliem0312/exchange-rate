<template>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600;700&family=DM+Sans:wght@700&display=swap"
        rel="stylesheet" />
    <main>
        <ExchangeRate />
        <HalluForYou />
        <International />
    </main>
</template>

<script setup lang="ts">
import ExchangeRate from "../components/ExchangeRate.vue";
import HalluForYou from "../components/HalluForYou.vue";
import International from "../components/International.vue";
</script>