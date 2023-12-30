<template>
  <div class="bg-gray-950 min-h-screen" id="app">
    <!-- Inicia o o menu de navegação -->
    <nav class="white flex justify-center ">
      <ul class="flex flex-wrap mt-10 justify-center gap-4 font-mono text-md text-slate-50">
        <li class="grid hover:text-cyan-400 transition duration-150 cursor-pointer p-4">
          // home
        </li>
        <li class="hover:text-cyan-400 transition duration-150 cursor-pointer p-4">// portfólio</li>
        <li class="hover:text-cyan-400 transition duration-150 cursor-pointer p-4">// formação</li>
        <li class="hover:text-cyan-400 transition duration-150 cursor-pointer p-4">// orçamento</li>
      </ul>
    </nav>
    <!-- finaliza o menu de navegação -->

  </div>
</template>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  AOS.init();
</script>


<script>

export default {
  name: 'App',
  data() {
    return {
    };
  },

}
</script>