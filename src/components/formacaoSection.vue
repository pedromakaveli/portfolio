<template>
    <!-- Inicia a div do portfolio -->
    <div  class="mt-20 bg-zinc-900 pt-10 md:pt-20 pb-5 px-20 min-h-screen">
        <div class="container mx-auto">
            <h1 data-aos="fade-right" data-aos-duration="600" id="formacao" class="text-center cursor-pointer font-bold font-montserrat text-sky-100 text-[1.5rem] md:text-[2rem] hover:text-cyan-400">
                <span class="text-cyan-400 text-[2.2rem]">{</span>🎓 Formação <span class="text-cyan-400 text-[2.2rem]">}</span></h1>

                <div class="gap-10 grid mt-10 md:flex justify-center content-center items-center min-h-[70vh]">
                    <div data-aos="flip-left" data-aos-duration="2000" v-for="(formacao, index) in formacao" :key="index" class="flex flex-col gap-2 h-[400px] w-[400px] px-10 py-10 course bg-black rounded-lg hover:scale-[105%] ease-in-out duration-150">
                        
                        <div class="flex-grow cursor-pointer">
                            <h1 :class="{
                                    'detail-blue estacio-title': formacao.instituicao === 'Estácio' || formacao.instituicao === 'CEFET-MG',
                                    'detail-purple origamid-title': formacao.instituicao === 'Origamid'
                                }" class="flex-grow text-white text-[1.8rem] font-montserrat uppercase font-bold">
                                {{formacao.instituicao}}
                            
                            </h1>

                            <span class="text-white font-montserrat text-[1rem]">{{formacao.tipo}} em {{formacao.curso}}</span>
                        </div>
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
                {'curso': 'Análise e Desenvolvimento de Sistemas', 'instituicao': 'Estácio', 'tipo': 'Tecnólogo'},
                {'curso': 'Front-end e Design UI', 'instituicao': 'Origamid', 'tipo': 'Curso livre'},
                {'curso': 'Desenvolvimento Web', 'instituicao': 'CEFET-MG', 'tipo': 'Curso Livre'},
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