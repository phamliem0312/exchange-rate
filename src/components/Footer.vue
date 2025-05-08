<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-brand column">
                <div class="logo">
                    <img :src="logo" alt="Hallu Logo" />
                    <span>Hallu</span>
                </div>
                <p class="slogan">The New Creative Economy.</p>
            </div>
            <div class="footer-crypter column">
                <div class="column-title">
                    <span>Crypter.</span>
                </div>
                <ul>
                    <li><a href="#">Discover</a></li>
                    <li><a href="#">Connect wallet</a></li>
                    <li><a href="#">Create item</a></li>
                </ul>
            </div>
            <div class="footer-info column">
                <div class="column-title">
                    <span>Info</span>
                </div>
                <ul>
                    <li><a href="#">Download</a></li>
                    <li><a href="#">Demos</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
            <div class="newsletter column">
                <div class="column-title">
                    <span>Join Newslette</span>
                </div>
                <p>Subscribe our newsletter to get more free design course and resource</p>
                <div class="subscribe-box">
                    <input type="email" placeholder="Enter your email" />
                    <button><span>&rarr;</span></button>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>Copyright © 2021 UI8 LLC. All rights reserved</p>
            <p>We use cookies for better service. <a href="#">Accept</a></p>
        </div>
    </footer>
</template>

<script setup>
import logo from '@/assets/images/logo.png';
</script>

<style scoped>
.footer {
    padding: 40px 5%;
    background: #f9f9f9;
    border-top: 1px solid #eee;
    font-family: sans-serif;
    color: #333;
}

.footer-content {
    display: flex;
    margin-bottom: 40px;
}

.footer-brand .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
    font-size: 24px;
}

.column-title{
    font-weight: bold;
    font-size: 16px;
}

.column {
    width: 25%;
}

.footer-brand img {
    width: 24px;
    height: 24px;
}

.footer-brand .slogan {
    margin-top: 0.5rem;
    color: #555;
}

.footer-crypter ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-info ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-crypter li {
    margin: 24px 0px;
}

.footer-info li {
    margin: 24px 0px;
}

.footer-crypter a {
    text-decoration: none;
    color: #555;
}

.footer-info a {
    text-decoration: none;
    color: #555;
}

.newsletter p {
    font-size: 16px;
    color: #666;
    margin-bottom: 24px;
    line-height: 24px;
}

.subscribe-box {
    display: flex;
    align-items: center;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 999px;
    padding: 0.25rem 0.5rem;
    max-width: 300px;
}

.subscribe-box input {
    flex: 1;
    border: none;
    outline: none;
    padding: 16px;
    font-size: 16px;
}

.subscribe-box button {
    background: #1d4010;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 0.4rem 0.6rem;
    cursor: pointer;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 0.85rem;
    border-top: 1px solid #ddd;
    padding-top: 1rem;
    color: #666;
}

.footer-bottom a {
    color: #1d4010;
    font-weight: bold;
    text-decoration: none;
}
</style>