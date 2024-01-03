<template>
  <div class="bg-zinc-950 min-h-screen" id="app">

    <navbar></navbar>

    <introduction id="intro"></introduction>

    <my-portfolio></my-portfolio>

  </div>
</template>

<script>
import portfolioSection from './components/portfolioSection';
import introSection from './components/introSection.vue';
import navbarMenu from './components/navbarMenu.vue';

export default {

  name: 'App',
  components: {
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