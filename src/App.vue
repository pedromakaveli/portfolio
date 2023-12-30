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

    <!-- Inicia a div de apresentação -->
    <div class="grid place-content-center place-items-center min-h-[80vh] mb-35">
      <h1 data-aos="fade-in"
        class="font-vancouver font-normal text-[5.2rem] text-slate-50 uppercase tracking-[.10em] font-bold">Pedro Lacerda
      </h1>
      <h2 class="font-roboto-mono font-bold text-cyan-300 text-[1.25rem] uppercase tracking-[.20em]">Desenvolvedor
        Front-end</h2>
    </div>
    <!-- Finaliza a div de apresentação  -->

    <!-- Inicia a div do portfolio -->
    <div class="divide-y divide-solid">
      <div class="container min-h-[100vh] mx-auto p-20 flex flex-col">
        <h1 class="cursor-pointer text-center text-sky-100 text-[1.5rem] hover:text-cyan-400"><span
            class="text-cyan-400 text-[2.2rem]">{</span> Meus projetos <span class="text-cyan-400 text-[2.2rem]">}</span>
        </h1>

        <div class="mt-[100px] grid grid-cols-2 text-sky-100">

        </div>

      </div>
    </div>
    <!-- Finaliza a div do portfolio -->

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
      hover: false
    };
  },

  methods: {
    onToggle () {
      this.hover =! this.hover
    }
  }
}
</script>