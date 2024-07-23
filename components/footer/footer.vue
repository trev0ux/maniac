
<template>
  <footer class="footer container-fluid">
    <article>
      <div>
        <h4>contato@maniac.com</h4>
        <h4>(71) 99999-9999</h4>
        <h4>Salvador, Bahia</h4>
        <Icon name="LogoIcon"></Icon>
      </div>
      <div>
        <ul>
          <li><NuxtLink to="/">Serviços</NuxtLink></li>
          <li><NuxtLink to="/">Projetos</NuxtLink></li>
          <li><NuxtLink to="/">Planos</NuxtLink></li>
        </ul>
        <ul>
            <li><h6>Redes Sociais</h6></li>
            <li>LinkedIn</li>
            <li>Instagram</li>
        </ul>
      </div>
    </article>
    <div>
        <NuxtImg src="/maniac.png" alt="maniac text"></NuxtImg>
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
