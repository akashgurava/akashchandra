<template name=projects-section>
    <section class="py-8 flex justify-center items-center min-h-screen" id=projects>

        <div class="container overflow-x-hidden w-screen">
            <div class="projects text-xl">

                <h2 class="mx-auto font-bold text-center" id="projects">Projects</h2>
                <div class="w-11/12 mx-auto my-2 text-center">Here are some projects I've worked on:</div>

                <ul class="flex flex-wrap justify-center">
                    <li class="w-11/12 lg:max-w-sm lg:px-4 lg:m-2 py-2 mx-auto" v-for="project in projects" :key="project.id">
                        <Project :project="project" />
                    </li>
                </ul>

            </div>
        </div>

    </section>
</template>

<script>
import Project from "@/components/Project";

export default {
    components: {
        Project
    },
    props: {
        projects: { required: true },
    },
}
</script>
