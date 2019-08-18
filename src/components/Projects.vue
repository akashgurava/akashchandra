<template>

    <div class="container overflow-x-hidden w-screen">
        <div class="projects text-xl">

            <h2 class="font-bold mb-2 text-center" id="projects">Projects</h2>
            <div class="mb-2 text-center">Here are some projects I've worked on:</div>

            <ul class="flex flex-wrap justify-center">
                <li class="w-11/12 lg:max-w-sm lg:px-4 lg:m-2 py-2 mx-auto" v-for="project in projects" :key="project.id">
                    <Project :project="project"/>
                </li>
            </ul>

        </div>
    </div>

</template>

<script>
import { resolve } from "path";
import { projects } from "@/data/user.yaml";
import Project from "@/components/Project";

Object.keys(projects).forEach(project_name => {
    var project = projects[project_name]
    var skills = project.skills

    if (skills === undefined) {
        return;
    } else {
        if (typeof skills === 'string') {
            skills = skills.split(',')
            projects[project_name]["skills"] = {}
            skills.forEach(skill => {
                var skill_obj = {}
                skill_obj['name'] = skill
                skill_obj['icon'] = resolve('../../assets/icons/' + skill.toLowerCase() + '.svg')
                projects[project_name]["skills"][skill] = skill_obj
            })
        }
    }

})

export default {
    data() {
        return {
            projects
        }
    },
    components: {
        Project
    }
}
</script>
