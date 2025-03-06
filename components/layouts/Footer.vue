
<template>
  <footer class="footer container-fluid">
    <article>
      <div>
        <h4>maniac@agenciamaniac.com</h4>
        <h4>(71) 99271-5102</h4>
        <h4>Salvador, Bahia</h4>
      </div>
      <div>
        <ul>
          <li><NuxtLink to="#services">{{ $t('footer.services') }}</NuxtLink></li>
          <li><NuxtLink to="#projetos">{{ $t('footer.projects') }}</NuxtLink></li>
        </ul>
        <ul>
            <li><h6>{{ $t('footer.networks') }}</h6></li>
            <li><NuxtLink to="https://www.linkedin.com/company/agenciamaniac" external>LinkedIn</NuxtLink></li>
            <li><NuxtLink to="">Instagram</NuxtLink></li>
        </ul>
      </div>
    </article>
    <div>
      <Icon name="LogoIcon"></Icon>
        <p>{{ $t('footer.rights') }}</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="sass">
@import "~/assets/styles/components/footer"
</style>
