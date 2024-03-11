<template>
    <!-- Inicia a div do portfolio -->
    <div class="mt-20 pt-10 md:pt-20 pb-5 px-20 min-h-screen grid grid-cols-1 lg:grid-cols-2">

        <h1 class="text-center text-[2rem] md:text-[3rem] xl:text-[4rem] text-cyan-bright font-bold">FORMAÇÃO</h1>

        <div>
            <p class="text-center md:text-center lg:text-start xl:text-start mt-10 text-white text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] max-w-[65ch]">Minha mais recente experiência acadêmica foi o mestrado 🎓 que fiz no exterior em UX Design. Além disso me mantenho sempre atualizado com cursos intensivos online. </p>

            <div class="mt-10 grid grid-cols-1 xl:flex xl:flex-wrap xl:content-between xl:items-start gap-5 ">
                <div v-for="course, index in formacao" :key="index" class="flex gap-5 flex-col bg-[#000] w-[100%] xl:w-[250px] xl:h-[250px] rounded text-white py-4 px-5">
                    <h1 class="text-gray-200 text-[0.90rem] uppercase">{{course.tipo}}</h1>
                    <h2 class="font-bold max-w-[25ch]">{{course.curso}}</h2>
                    <div class="flex-grow"></div> <!-- Adiciona espaço entre o texto e o título -->
                    <div class="flex flex-col justify-end"> <!-- Container para alinhar o título no final -->
                        <h2 class="text-gray-200">{{course.instituicao}}</h2>
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