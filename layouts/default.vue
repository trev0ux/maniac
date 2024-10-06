<template>
  <div>
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";

</script>

<style></style>