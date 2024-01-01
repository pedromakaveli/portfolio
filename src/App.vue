<template>
  <div class="bg-slate-900 min-h-screen" id="app">

    <navbar></navbar>

    <introduction id="intro"></introduction>

    <my-portfolio></my-portfolio>

    <mobile-menu></mobile-menu>

  </div>
</template>

<script>
import portfolioSection from './components/portfolioSection';
import introSection from './components/introSection.vue';
import navbarMenu from './components/navbarMenu.vue';
import mobileMenu from './components/mobileMenu.vue';

export default {

  name: 'App',
  components: {
    'my-portfolio': portfolioSection,
    'introduction': introSection,
    'navbar': navbarMenu,
    'mobile-menu': mobileMenu

  },
  data() {
    return {
      
    };
  },
}
</script>