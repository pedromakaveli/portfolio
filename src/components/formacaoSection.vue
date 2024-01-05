<template>
    <!-- Inicia a div do portfolio -->
    <div class="mt-20 bg-primary pt-10 md:pt-20 pb-5 px-20 min-h-[100vh]">
        <div class="container mx-auto">
            <h1 id="formacao" class="text-center cursor-pointer font-montserrat text-sky-100 text-[1.5rem] md:text-[2rem] hover:text-cyan-400">
                <span class="text-cyan-400 text-[2.2rem]">{</span> Formação <span class="text-cyan-400 text-[2.2rem]">}</span></h1>

                <div class="mt-10 flex justify-center">
                    <div class="grid grid-cols-12 bg-secondary h-[700px] w-[60vw] items-center p-10 rounded-xl">
                        <div class="self-start grid justify-center items-center col-span-6 p-10 text-white">
                            
                        </div>

                        <div class="rounded-mg bg-white col-span-6 text-black rounded-xl text-lg">
                            <div class="my-[70px] cursos">
                                <div  class="curso mb-2" v-for="(curso, index) in formacao" :key="index">
                                    <div class="flex px-[60px] py-5 flex-col gap-[5px]">
                                        <h1 :class="
                                        curso.instituicao == 'Estácio' ? 'detail-blue' : '' ||
                                        curso.instituicao == 'Origamid' ? 'detail-purple origamid' : '' ||
                                        curso.instituicao == 'CEFET-MG' ? 'detail-blue' : ''
                                        
                                        " class="text-[1.5rem] font-montserrat font-bold text-slate-950">{{curso.instituicao}}</h1>
                                        <h1 class="text-[1rem] text-[#3B3B83]">{{curso.curso}}</h1>
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
export default {
    data() {
        return {
            formacao: [
                {'curso': 'Análise e Desenvolvimento de Sistemas', 'instituicao': 'Estácio'},
                {'curso': 'Front-end e Design UI', 'instituicao': 'Origamid'},
                {'curso': 'Desenvolvimento Web', 'instituicao': 'CEFET-MG'},
            ],

            selectedCourse: false
        };
    }
}
</script>