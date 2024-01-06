<template>
    <!-- Inicia a div do portfolio -->
    <div class="mt-20 bg-primary pt-10 md:pt-20 pb-5 px-20 min-h-screen">
        <div class="container mx-auto">
            <h1 id="formacao" class="text-center cursor-pointer font-bold font-montserrat text-sky-100 text-[1.5rem] md:text-[2rem] hover:text-cyan-400">
                <span class="text-cyan-400 text-[2.2rem]">{</span> Formação <span class="text-cyan-400 text-[2.2rem]">}</span></h1>

                <div class="mt-10 flex justify-center">
                    <div class="bg-secondary grid xl:grid-cols-12 h-[700px] w-[100vw] items-center p-10 rounded-xl">
                        <div class="self-start grid justify-center justify-items-center items-center col-span-5 p-10 text-white">
                            <img v-if="schoolSelected.instituicao == 'Origamid'" class="mb-5" src="../assets/imgs/origamid.png" alt="">
                            <h1 :class="schoolSelected.instituicao == 'Estácio' ? 'estacio-title' : '' || 
                            schoolSelected.instituicao == 'Origamid' ? 'origamid-title' : ''" 
                            class="text-[2.5rem] font-montserrat uppercase font-bold">{{schoolSelected.instituicao}}</h1>
                            <h2 class="text-center text-[1rem] uppercase font-montserrat mt-1 text-gray-20 tracking-[0.90px]">{{schoolSelected.curso}}</h2>

                            <div v-if="schoolSelected.instituicao == 'Estácio'" class="estacio mt-20">
                                <my-button></my-button>
                            </div>
                        </div>

                        <div class="rounded-mg col-span-7 rounded-xl text-lg bg-white">
                            <div class="my-[70px] cursos">
                                <div  class="curso mb-2 cursor-pointer" v-for="(curso, index) in formacao" :key="index">
                                    <div @click="schoolSelected = curso" class="flex px-[60px] py-5 flex-col gap-[5px]">
                                        <h1 :class="
                                        curso.instituicao == 'Estácio' ? 'detail-blue' : '' ||
                                        curso.instituicao == 'Origamid' ? 'detail-purple' : '' ||
                                        curso.instituicao == 'CEFET-MG' ? 'detail-blue' : ''
                                        
                                        " class="text-[1.5rem] font-montserrat font-bold text-slate-900">{{curso.instituicao}}</h1>

                                        <div class="flex flex-row items-center justify-between">
                                            <h1 class="text-[1.125rem] text-sky-950">{{curso.curso}}</h1>
                                            <span class="text-sm">2021 - 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                     
                    </div>
                </div>
        </div>
    </div>
<!-- Finaliza a div do portfolio -->
</template>

<script>
import myButton from './myButton.vue'
export default {
    components: {
        'my-button': myButton
    },

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