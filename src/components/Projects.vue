<template>

    <div class="overflow-x-hidden">
        <div class="projects container-inner mx-auto text-xl py-16 relative">

            <h2 class="font-bold mb-6" id="projects">Here are some projects I've worked on:</h2>

            <!-- Projects list -->
            <ul>
                <li class="checkmark mb-6" v-for="project in projects" :key="project.id">
                    <div>{{ project.title }}</div>
                    <div class="text-lg text-gray-600"> {{ project.description }} </div>
                </li>
            </ul>

        </div>
    </div>

</template>

<script>
import { projects } from "@/data/user.yaml";
export default {
    data() {
        return {
            projects
        }
    }
}
</script>
