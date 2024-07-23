<template>
    <div>
      <header-component></header-component>
         <slot></slot>
         <footer-component></footer-component>
    </div>
  </template>
  
  <script>
  import HeaderComponent from "../components/header/header.vue";
  import FooterComponent from "../components/footer/footer.vue";

  export default {
    components: { HeaderComponent, FooterComponent },
  };
  </script>
  
  <style></style>
  