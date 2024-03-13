<template>
  <div class="fundo min-h-screen" id="app">

    <navbar></navbar>

    <introduction data-aos="fade-right" data-aos-duration="1200" id="intro"></introduction>

    <my-portfolio id="portfolio" data-aos="fade-up" data-aos-duration="600"></my-portfolio>

    <formacao id="formation"></formacao>

  </div>
</template>

<script>
import formacaoSection from './components/formacaoSection';
import portfolioSection from './components/portfolioSection';
import introSection from './components/introSection.vue';
import navbarMenu from './components/navbarMenu.vue';

export default {

  name: 'App',
  components: {
    'formacao': formacaoSection,
    'my-portfolio': portfolioSection,
    'introduction': introSection,
    'navbar': navbarMenu,

  },
  data() {
    return {

    };
  },
}
</script>