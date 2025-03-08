<template>
    <footer class="footer container-fluid">
      <article>
        <div>
          <h4>miraisoft.co@gmail.com</h4>
          <h4>(71) 99117-8092</h4>
          <h4>Salvador, Bahia</h4>
        </div>
        <div>
          <ul>
          <li><NuxtLink to="#services">{{ $t('footer.services') }}</NuxtLink></li>
          <li><NuxtLink to="#projetos">{{ $t('footer.projects') }}</NuxtLink></li>
          </ul>
          <ul>
              <li><h5>Redes Sociais</h5></li>
              <li><NuxtLink to="https://www.linkedin.com/company/miraisoft" external>LinkedIn</NuxtLink></li>
              <li><NuxtLink to="https://www.instagram.com/miraisoft.co/">Instagram</NuxtLink></li>
          </ul>
        </div>
      </article>
      <div>
        <Icon name="LogoIcon"></Icon>
          <p>© 2024 - Todos os direitos reservados.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="sass">
  @import "~/assets/styles/components/footer"
  </style>