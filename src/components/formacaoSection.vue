<template>
    <!-- Inicia a div do portfolio -->
    <div class="mt-20 bg-zinc-900 pt-10 md:pt-20 pb-5 px-20 min-h-screen">
        <div class="container mx-auto">
            <h1 id="formacao" class="text-center cursor-pointer font-bold font-montserrat text-sky-100 text-[1.5rem] md:text-[2rem] hover:text-cyan-400">
                <span class="text-cyan-400 text-[2.2rem]">{</span>🎓 Formação <span class="text-cyan-400 text-[2.2rem]">}</span></h1>

                <div class="flex justify-center content-center items-center min-h-[70vh] gap-10">
                    <div v-for="(formacao, index) in formacao" :key="index" class="flex flex-col gap-2 h-[300px] w-[300px] px-10 py-10 course bg-black rounded-lg">
                        <h1 :class="{
                                'detail-blue': formacao.instituicao === 'Estácio' || formacao.instituicao === 'CEFET-MG',
                                'detail-purple': formacao.instituicao === 'Origamid'
                            }" class="flex-grow text-white text-[1.8rem] font-montserrat uppercase font-bold">
                            {{formacao.instituicao}}
                        </h1>
                        <h2 class="text-center flex-grow text-zinc-300 text-[0.90rem] font-montserrat uppercase">{{formacao.curso}}</h2>
                    </div>
                    
                </div>
        </div>
    </div>
<!-- Finaliza a div do portfolio -->
</template>

<script>

export default {

    data() {
        return {
            formacao: [
                {'curso': 'Análise e Desenvolvimento de Sistemas', 'instituicao': 'Estácio'},
                {'curso': 'Front-end e Design UI', 'instituicao': 'Origamid'},
                {'curso': 'Desenvolvimento Web', 'instituicao': 'CEFET-MG'},
            ],

            schoolSelected: []
        };
    },

    watch: {
        schoolSelected () {
            return console.log(this.schoolSelected.curso);
        }
    }
}
</script>